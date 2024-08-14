/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'cdn.prod.website-files.com', "res.cloudinary.com"],
  },
}

export default nextConfig;