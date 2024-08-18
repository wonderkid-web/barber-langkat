/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static.vecteezy.com',
            pathname: '/system/resources/thumbnails/010/071/559/small_2x/barbershop-logo-barber-shop-logo-template-vector.jpg',
          },
        ],
      },
};

export default nextConfig;
