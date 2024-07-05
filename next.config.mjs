/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${process.env.GITHUB_REF_NAME}` : "";

module.exports = {
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  exportTrailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
};
