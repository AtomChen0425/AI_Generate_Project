import type { NextConfig } from "next";

const repo = "AI_Generate_Project"; // 👈 改这里
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  trailingSlash: true,
};

export default nextConfig;