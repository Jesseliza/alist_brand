import type { NextConfig } from "next";

const remotePatterns: NextConfig['images']['remotePatterns'] = [
  {
    protocol: "https",
    hostname: "picsum.photos",
    port: "",
    pathname: "/**",
  },
];

if (process.env.NEXT_PUBLIC_IMAGE_URL) {
  try {
    const imageUrl = new URL(process.env.NEXT_PUBLIC_IMAGE_URL);
    const protocol = imageUrl.protocol.replace(":", "");
    if (protocol === 'http' || protocol === 'https') {
      remotePatterns.push({
        protocol,
        hostname: imageUrl.hostname,
        port: "",
        pathname: "/**",
      });
    } else {
      console.warn(`Invalid protocol "${protocol}" in NEXT_PUBLIC_IMAGE_URL. Only "http" or "https" are allowed.`);
    }
  } catch (error) {
    console.error("Invalid NEXT_PUBLIC_IMAGE_URL:", error);
  }
}

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: false, // Set to true if you want it to be a 301 redirect
      },
    ];
  },
};

export default nextConfig;