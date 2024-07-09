// next.config.mjs

const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  basePath: process.env.NODE_ENV === "production" ? `/${process.env.GITHUB_REF_NAME}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${process.env.GITHUB_REF_NAME}` : "",
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

export default nextConfig;
