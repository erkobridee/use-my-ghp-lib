/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {};

if (`${process.env.NODE_ENV}` === 'production') {
  nextConfig.basePath = '/use-my-ghp-lib';
}

module.exports = nextConfig;
