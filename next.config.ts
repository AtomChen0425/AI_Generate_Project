import type { NextConfig } from "next";

const repo = "AI_Generate_Project"; // 👈 改这里
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  // GitHub Pages 子路径（非常关键）
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  // 避免 GitHub Pages 路由问题
  trailingSlash: true,
};

export default nextConfig;