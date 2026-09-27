import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  output: staticExport ? "export" : "standalone",
  experimental: {
    globalNotFound: true,
  },
  outputFileTracingExcludes: {
    "*": ["node_modules/sharp/**", "node_modules/@img/**"],
  },
};

export default nextConfig;
