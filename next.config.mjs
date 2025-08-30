/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "pub-b7fd9c30cdbf439183b75041f5f71b92.r2.dev",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i1.rgstatic.net",
      },
      {
        protocol: "https",
        hostname: "www.agriculture.com",
      },
      {
        protocol: "https",
        hostname: "www.canr.msu.edu",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn*.gstatic.com", // for pubLogo
      },
      {
        protocol: "https",
        hostname: "**", // allow ALL https domains
      },
    ],
  },
};

export default nextConfig;
