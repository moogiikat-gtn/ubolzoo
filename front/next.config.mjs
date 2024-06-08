/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.daisyui.com",
      },
      {
        protocol: "https",
        hostname: "nomadicjourneys.com.au",
      },
      {
        protocol: "https",
        hostname: "mediaim.expedia.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "cdn.myspicyvanilla.com",
      },
      
    ],
  },
};

export default nextConfig;
