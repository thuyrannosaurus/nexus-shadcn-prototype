/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  // Configure the base path for GitHub Pages only in production
  // Replace 'nexus-shadcn-prototype' with your repository name
  basePath: process.env.NODE_ENV === 'production' ? '/nexus-shadcn-prototype' : '',
  // Disable image optimization since it's not supported in static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
