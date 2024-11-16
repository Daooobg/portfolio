import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: 'res.cloudinary.com' }],
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '5mb' as const,
        },
    },
};

module.exports = withNextIntl(nextConfig);
