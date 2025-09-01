import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: false, // Set to true if you want it to be a 301 redirect
      },
    ];
  },
};

export default nextConfig;
