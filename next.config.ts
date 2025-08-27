import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable modern JavaScript features and reduce bundle size
  transpilePackages: [],
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
   // Enable experimental features for better performance
   experimental: {
     optimizePackageImports: [
       '@radix-ui/react-accordion',
       '@radix-ui/react-alert-dialog',
       '@radix-ui/react-avatar',
       '@radix-ui/react-dialog',
       '@radix-ui/react-dropdown-menu',
       '@radix-ui/react-navigation-menu',
       '@radix-ui/react-progress',
       '@radix-ui/react-scroll-area',
       '@radix-ui/react-separator',
       '@radix-ui/react-sheet',
       '@radix-ui/react-slider',
       '@radix-ui/react-tabs',
       '@radix-ui/react-tooltip',
       'lucide-react'
     ],
     inlineCss: true,
     // Optimize CSS loading - Critical for FCP/LCP
     optimizeCss: true,
     // Enable CSS chunking for better loading performance
     cssChunking: 'strict',
     // Optimize font loading
     webVitalsAttribution: ['CLS', 'LCP', 'FCP'],
     // Enable turbo for faster builds
     turbo: {
       rules: {
         '*.css': {
           loaders: ['css-loader'],
           as: '*.js',
         },
       },
     },
   },

   // Server external packages optimization
   serverExternalPackages: [],
  
  // Turbopack configuration (moved from experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Optimize CSS loading for better FCP/LCP
    if (!isServer) {
      // Enable CSS optimization
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            // Extract critical CSS into separate chunk
            styles: {
              name: 'styles',
              type: 'css/mini-extract',
              chunks: 'all',
              enforce: true,
            },
          },
        },
      };
    }
    
    // Tree shake Lucide React icons
    config.resolve.alias = {
      ...config.resolve.alias,
      'lucide-react': 'lucide-react/dist/esm/lucide-react.js',
    };
    
    // Only include used icons
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }
    
    return config;
  },
  
   // Aggressive compression and caching for LCP/FCP optimization
   compress: true,

   // Optimize for production performance
   poweredByHeader: false,
   reactStrictMode: true,
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
       {
         source: '/images/(.*)',
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=31536000, immutable',
           },
           {
             key: 'CDN-Cache-Control',
             value: 'max-age=31536000',
           },
         ],
       },
       // Aggressive caching for critical assets
       {
         source: '/_next/static/(.*)',
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=31536000, immutable',
           },
         ],
       },
       // Optimize CSS caching - Critical for FCP/LCP
       {
         source: '/_next/static/css/(.*)',
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=31536000, immutable',
           },
           {
             key: 'X-Content-Type-Options',
             value: 'nosniff',
           },
         ],
       },
       // Optimize font caching
       {
         source: '/fonts/(.*)',
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=31536000, immutable',
           },
         ],
       },
    ];
  },
};

export default nextConfig;