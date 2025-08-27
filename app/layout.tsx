import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vertex-one-sandy.vercel.app/'),
  title: {
    default: "Vertex One - Premium Gaming Platform | Sports Betting & Live Casino",
    template: "%s | Vertex One"
  },
  description: "Experience world-class sports betting and casino at Vertex One. Best odds, absolute security, 24/7 support. Register now to get 200% bonus!",
  keywords: [
    "sports betting",
    "online casino",
    "live casino",
    "betting odds",
    "football",
    "slot games",
    "baccarat",
    "blackjack",
    "roulette",
    "vertex one",
    "safe betting",
    "welcome bonus"
  ],
  authors: [{ name: "Vertex One Team" }],
  creator: "Vertex One",
  publisher: "Vertex One",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://vertex-one-sandy.vercel.app/",
    siteName: "Vertex One",
    title: "Vertex One - Premium Gaming Platform",
    description: "Experience world-class sports betting and casino at Vertex One. Best odds, absolute security, 24/7 support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vertex One - Premium Gaming Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertex One - Premium Gaming Platform",
    description: "Experience world-class sports betting and casino. Register now to get 200% bonus!",
    images: ["/twitter-image.jpg"],
    creator: "@vertexone_vn",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://vertex-one-sandy.vercel.app/",
    languages: {
      'vi': 'https://vertex-one-sandy.vercel.app//vi',
      'en': 'https://vertex-one-sandy.vercel.app//en',
      'th': 'https://vertex-one-sandy.vercel.app//th',
    }
  },
  other: {
    'msapplication-TileColor': '#2563eb',
    'theme-color': '#2563eb',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vertex One",
              "description": "Premium Gaming Platform - Sports Betting & Live Casino",
              "url": "https://vertex-one-sandy.vercel.app/",
              "logo": "https://vertex-one-sandy.vercel.app//logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+84-927-363-782",
                "contactType": "customer service",
                "availableLanguage": ["Vietnamese", "English"]
              },
              "sameAs": [
                "https://facebook.com/vertexone.vn",
                "https://twitter.com/vertexone_vn",
                "https://instagram.com/vertexone.vn"
              ],
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "VN",
                "addressRegion": "Hanoi"
              }
            })
          }}
        />
        
        {/* Additional Performance Optimizations */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Viewport and mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <div id="main-content" className="min-h-screen flex flex-col">
          {children}
        </div>

        {/* Toast notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            className: "bg-card text-card-foreground border border-border shadow-lg",
          }}
        />
      </body>
    </html>
  );
}