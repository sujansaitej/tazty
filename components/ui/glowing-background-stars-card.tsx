"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <div
            onMouseEnter={() => {
                setMouseEnter(true);
            }}
            onMouseLeave={() => {
                setMouseEnter(false);
            }}
            className={cn(
                "bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 sm:p-5 md:p-6 max-w-md w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600 transition-all duration-500 ease-out flex flex-col h-full overflow-hidden",
                className
            )}
        >
            <div className="flex justify-center items-center flex-shrink-0 mb-2 sm:mb-3">
                <Illustration mouseEnter={mouseEnter} />
            </div>
            <div className="flex-1 flex flex-col justify-between min-h-0">{children}</div>
        </div>
    );
};

export const GlowingStarsDescription = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <p 
            className={cn("text-base text-white max-w-[16rem]", className)}
            style={{ 
                WebkitFontSmoothing: 'antialiased', 
                MozOsxFontSmoothing: 'grayscale', 
                textRendering: 'optimizeLegibility' 
            }}
        >
            {children}
        </p>
    );
};

export const GlowingStarsTitle = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <h2 
            className={cn("font-bold text-2xl text-[#eaeaea]", className)}
            style={{ 
                WebkitFontSmoothing: 'antialiased', 
                MozOsxFontSmoothing: 'grayscale', 
                textRendering: 'optimizeLegibility' 
            }}
        >
            {children}
        </h2>
    );
};

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
    const stars = 24; // Further reduced from 54 to 24 for much better performance
    const columns = 6; // Reduced from 9 to 6

    const [glowingStars, setGlowingStars] = useState<number[]>([]);
    const [mounted, setMounted] = useState(false);

    const highlightedStars = useRef<number[]>([]);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            highlightedStars.current = Array.from({ length: 2 }, () => // Reduced to 2 for better performance
                Math.floor(Math.random() * stars)
            );
            setGlowingStars([...highlightedStars.current]);
        }, 6000); // Increased to 6000ms for much less frequent updates

        return () => clearInterval(interval);
    }, [stars]);

    // Render static placeholder during SSR to prevent hydration mismatch
    if (!mounted) {
        return (
            <div
                className="h-24 sm:h-28 md:h-32 p-1 w-full"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gap: `1px`,
                }}
            >
                {[...Array(stars)].map((_, starIdx) => (
                    <div
                        key={`matrix-col-${starIdx}`}
                        className="relative flex items-center justify-center"
                    >
                        <div className="bg-[#666] h-[1px] w-[1px] rounded-full relative z-20" />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div
            className="h-24 sm:h-28 md:h-32 p-1 w-full"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: `1px`,
            }}
        >
            {[...Array(stars)].map((_, starIdx) => {
                const isGlowing = glowingStars.includes(starIdx);
                const delay = (starIdx % 10) * 0.1;
                const staticDelay = starIdx * 0.01;
                return (
                    <div
                        key={`matrix-col-${starIdx}`}
                        className="relative flex items-center justify-center"
                    >
                        <Star
                            isGlowing={mouseEnter ? true : false}
                            delay={mouseEnter ? staticDelay : 0}
                        />
                        {mouseEnter && <Glow delay={staticDelay} />}
                        {/* Disabled auto-glowing for better performance */}
                    </div>
                );
            })}
        </div>
    );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
    return (
        <motion.div
            initial={false}
            animate={{
                scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
                background: isGlowing ? "#fff" : "#666",
            }}
            transition={{
                duration: 1.5,
                ease: [0.4, 0, 0.2, 1],
                delay: delay,
            }}
            style={{ willChange: 'transform, background' }}
            className={cn("bg-[#666] h-[1px] w-[1px] rounded-full relative z-20 transition-all duration-300")}
            suppressHydrationWarning
        ></motion.div>
    );
};

const Glow = ({ delay }: { delay: number }) => {
    return (
        <motion.div
            initial={false}
            animate={{
                opacity: [0, 1, 0.8, 1],
            }}
            transition={{
                duration: 1.5,
                ease: [0.4, 0, 0.2, 1],
                delay: delay,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            exit={{
                opacity: 0,
            }}
            // Changed blue-500/blur to green-500 explicitly for Tazty brand
            className="absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-[#00C853] blur-[1px] shadow-2xl shadow-[#00C853] transition-opacity duration-300"
            suppressHydrationWarning
        />
    );
};
