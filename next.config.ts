import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   reactCompiler: true,
  //   ppr: 'incremental'
  // },
  images: {
    domains: ['wallpapers.com'], // replace with your actual image domain
  },
};

export default nextConfig;
