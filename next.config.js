/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nextjs',
  assetPrefix: '/nextjs/',
  trailingSlash: true,
}

module.exports = nextConfig
