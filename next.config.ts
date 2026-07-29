import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        // Phase-one redirect: custom-software route → homepage capabilities anchor
        // permanent: false preserves SEO flexibility until a dedicated page is restored
        source: "/services/custom-software",
        destination: "/#custom-software",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
