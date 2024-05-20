/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "magtghzmtpusmbfbvwcc.supabase.co",
      },
    ],
  },
};

export default nextConfig;
