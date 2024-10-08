/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        //domains: [ 'res.cloudinary.com','images.unsplash.com', 'via.placeholder.com' ],
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    
        ],

      },
      
    eslint:{
        ignoreDuringBuilds: true,
    },  

    // resolve error with cloudinary  
    webpack: (config) => {
    config.resolve = {
        ...config.resolve,
        fallback: {
        fs: false,
        },
    };
    return config;
    },  
    
};

export default nextConfig;
