import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placecats.com",
                pathname: "/**",
            },
        ],
    },

    experimental: {
        // dynamicIO: true,   //[CanaryOnlyError: The experimental feature "experimental.dynamicIO" can only be enabled when using the latest canary version of Next.js.]
        instrumentationHook: false // 强制关闭Vercel分析数据收集
    },
};

export default nextConfig;
