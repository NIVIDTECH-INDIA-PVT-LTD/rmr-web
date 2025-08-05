/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
    domains: ['rmr.nividtech.com', 'nividtech.com', 'www.nividtech.com'],
  },  
};

export default nextConfig;
