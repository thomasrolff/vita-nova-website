/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    i18n: {
        locales: ['nl', 'en'],
        defaultLocale: 'nl',
    },
};

module.exports = nextConfig;
