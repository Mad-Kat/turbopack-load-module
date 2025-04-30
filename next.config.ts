import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.module\.css$/,
      loader: path.resolve("./loaders/index.js"),
    });
    return config;
  },
  turbopack: {
    rules: {
      "*.module.css": {
        loaders: [path.resolve("./loaders/index.js")],
      },
    },
  },
};

export default nextConfig;
