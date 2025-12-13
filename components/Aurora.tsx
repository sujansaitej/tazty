"use client";
import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';

import './Aurora.css';

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision lowp float; // Use lowp for better performance on mobile devices

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  // Simplified noise calculation for better performance
  float height = snoise(vec2(uv.x * 1.2 + uTime * 0.05, uTime * 0.15)) * 0.4 * uAmplitude;
  height = exp(height * 0.8); // Reduced exp for performance
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.5 * height; // Reduced intensity for subtler effect
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

interface AuroraProps {
    colorStops?: string[];
    amplitude?: number;
    blend?: number;
    time?: number;
    speed?: number;
}

export default function Aurora(props: AuroraProps) {
    const { colorStops = ['#5227FF', '#7cff67', '#5227FF'], amplitude = 1.0, blend = 0.5 } = props;
    const propsRef = useRef<AuroraProps>(props);
    propsRef.current = props;

    const ctnDom = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctn = ctnDom.current;
        if (!ctn) return;

        const renderer = new Renderer({
            alpha: true,
            premultipliedAlpha: true,
            antialias: false, // Disable antialiasing for better performance
            dpr: Math.min(window.devicePixelRatio, 1), // Limit to 1x DPR for better performance
            powerPreference: "high-performance", // Prefer discrete GPU
            preserveDrawingBuffer: false, // Don't preserve buffer for better performance
        });
        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.canvas.style.backgroundColor = 'transparent';
        gl.canvas.style.willChange = 'contents'; // Hint browser for optimization
        gl.canvas.style.imageRendering = 'optimizeSpeed'; // Optimize rendering
        
        // Performance optimizations
        gl.disable(gl.DITHER); // Disable dithering for performance
        gl.disable(gl.POLYGON_OFFSET_FILL); // Disable if not needed
        gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE); // Disable if not needed

        let program: Program | undefined;

        let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
        function resize() {
            if (resizeTimeout) return;
            resizeTimeout = setTimeout(() => {
                resizeTimeout = null;
                if (!ctn) return;
                const width = ctn.offsetWidth;
                const height = ctn.offsetHeight;
                renderer.setSize(width, height);
                if (program) {
                    program.uniforms.uResolution.value = [width, height];
                }
            }, 100); // Throttle resize events
        }
        window.addEventListener('resize', resize, { passive: true });

        const geometry = new Triangle(gl);
        if (geometry.attributes.uv) {
            delete geometry.attributes.uv;
        }

        const colorStopsArray = colorStops.map(hex => {
            const c = new Color(hex);
            return [c.r, c.g, c.b];
        });

        program = new Program(gl, {
            vertex: VERT,
            fragment: FRAG,
            uniforms: {
                uTime: { value: 0 },
                uAmplitude: { value: amplitude },
                uColorStops: { value: colorStopsArray },
                uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
                uBlend: { value: blend }
            }
        });

        const mesh = new Mesh(gl, { geometry, program });
        ctn.appendChild(gl.canvas);

        let animateId = 0;
        
        // Cache color stops to avoid recalculating every frame
        let cachedColorStops: number[][] | null = null;
        let lastColorStopsString = JSON.stringify(colorStops);
        
        const updateColorStops = () => {
            const stops = propsRef.current.colorStops ?? colorStops;
            const stopsString = JSON.stringify(stops);
            if (stopsString !== lastColorStopsString || !cachedColorStops) {
                cachedColorStops = stops.map((hex: string) => {
                    const c = new Color(hex);
                    return [c.r, c.g, c.b];
                });
                lastColorStopsString = stopsString;
            }
            return cachedColorStops;
        };
        
        // Initialize color stops
        updateColorStops();
        
        // Significantly reduced animation speed for better performance
        let lastFrameTime = 0;
        const targetFPS = 30; // Reduced to 30fps for better performance
        const frameInterval = 1000 / targetFPS;
        
        const update = (t: number) => {
            animateId = requestAnimationFrame(update);
            
            // Throttle to 30fps for better performance
            const now = performance.now();
            if (now - lastFrameTime < frameInterval) {
                return;
            }
            lastFrameTime = now;
            
            const { time = t * 0.01, speed = 0.2 } = propsRef.current; // Reduced default speed for smoother animation
            if (program) {
                // Update time uniform with reduced speed for smoother, less intensive animation
                program.uniforms.uTime.value = time * speed * 0.05; // Reduced multiplier
                
                // Only update other uniforms if they changed (avoid unnecessary updates)
                const currentAmplitude = propsRef.current.amplitude ?? 1.0;
                if (Math.abs(program.uniforms.uAmplitude.value - currentAmplitude) > 0.001) {
                    program.uniforms.uAmplitude.value = currentAmplitude;
                }
                
                const currentBlend = propsRef.current.blend ?? blend;
                if (Math.abs(program.uniforms.uBlend.value - currentBlend) > 0.001) {
                    program.uniforms.uBlend.value = currentBlend;
                }
                
                // Only recalculate color stops if they changed
                const stops = propsRef.current.colorStops ?? colorStops;
                const stopsString = JSON.stringify(stops);
                if (stopsString !== lastColorStopsString) {
                    program.uniforms.uColorStops.value = updateColorStops();
                }
                
                renderer.render({ scene: mesh });
            }
        };
        animateId = requestAnimationFrame(update);

        resize();

        return () => {
            cancelAnimationFrame(animateId);
            if (resizeTimeout) clearTimeout(resizeTimeout);
            window.removeEventListener('resize', resize);
            if (ctn && gl.canvas.parentNode === ctn) {
                ctn.removeChild(gl.canvas);
            }
            gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
    }, [amplitude, blend, colorStops]); // Added blend and colorStops to dependency array to be safe, though they are ref-accessed

    return <div ref={ctnDom} className="aurora-container" style={{ width: '100%', height: '100%' }} />;
}
