/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure the base path for GitHub Pages
  // Replace 'nexus-shadcn-prototype' with your repository name
  basePath: '/nexus-shadcn-prototype',
  // Disable image optimization since it's not supported in static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
