/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ebenezer-duct-cleaning',
  assetPrefix: '/ebenezer-duct-cleaning',
  images: {
    unoptimized: true, // 👈 Required for GitHub Pages/static export
  },
};

export default nextConfig;
