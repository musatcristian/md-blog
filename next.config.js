// const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    instrumentationHook: true,
    // mdxRs: true,
    typedRoutes: true
  },
}
 
// module.exports = withMDX(nextConfig)
module.exports = nextConfig;
