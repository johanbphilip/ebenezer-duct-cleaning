/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ebenezer-duct-cleaning', // 👈 add this
  assetPrefix: '/ebenezer-duct-cleaning', // 👈 helps with image/static paths
};

export default nextConfig;
