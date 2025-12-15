import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'encrypted-tbn0.gstatic.com',
            },
            {
                hostname: 'cdn.pixabay.com',
            },
            {
                hostname: 'mega-ac.azurewebsites.net',
            }, 
            {
                hostname: 'play-lh.googleusercontent.com',
            },
        ]
    }
};

export default nextConfig;
