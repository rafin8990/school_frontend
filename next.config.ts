import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['i.pinimg.com', 'placehold.co', 'images.pexels.com', 'localhost', 'task.bamsbd.com'],
  },
  output: 'standalone',
  webpack: (config, { isServer }) => {
    // Disable canvas loading as it's not needed for react-pdf
    config.resolve.alias.canvas = false;

    // Add support for PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/files/',
            outputPath: `${isServer ? '../' : ''}static/files/`,
          },
        },
      ],
    });

    // Support for PDF.js worker
    config.resolve.alias['pdfjs-dist'] = require.resolve('pdfjs-dist');

    return config;
  },
  // Add headers to allow PDF loading
  async headers() {
    return [
      {
        source: '/static/files/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
