/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nextjs-blog',
  assetPrefix: '/nextjs-blog'
}

module.exports = nextConfig
