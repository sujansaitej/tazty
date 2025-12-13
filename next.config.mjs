/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure CSS is properly processed in production
  experimental: {
    optimizePackageImports: ['lucide-react', '@tabler/icons-react'],
  },
}

export default nextConfig
