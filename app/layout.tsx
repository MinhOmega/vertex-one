import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vertexone.vn'),
  title: {
    default: "Vertex One - Premium Gaming Platform | Cá Cược Thể Thao & Casino Trực Tuyến",
    template: "%s | Vertex One"
  },
  description: "Trải nghiệm cá cược thể thao và casino đẳng cấp thế giới tại Vertex One. Tỷ lệ cược tốt nhất, bảo mật tuyệt đối, hỗ trợ 24/7. Đăng ký ngay nhận thưởng 200%!",
  keywords: [
    "cá cược thể thao",
    "casino trực tuyến", 
    "sòng bạc online",
    "tỷ lệ cược",
    "bóng đá",
    "slot games",
    "baccarat",
    "blackjack",
    "roulette",
    "vertex one",
    "cá cược an toàn",
    "thưởng chào mừng"
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
    url: "https://vertexone.vn",
    siteName: "Vertex One",
    title: "Vertex One - Premium Gaming Platform",
    description: "Trải nghiệm cá cược thể thao và casino đẳng cấp thế giới tại Vertex One. Tỷ lệ cược tốt nhất, bảo mật tuyệt đối, hỗ trợ 24/7.",
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
    description: "Trải nghiệm cá cược thể thao và casino đẳng cấp thế giới. Đăng ký ngay nhận thưởng 200%!",
    images: ["/twitter-image.jpg"],
    creator: "@vertexone_vn",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://vertexone.vn",
    languages: {
      'vi': 'https://vertexone.vn/vi',
      'en': 'https://vertexone.vn/en',
      'th': 'https://vertexone.vn/th',
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
              "description": "Premium Gaming Platform - Cá Cược Thể Thao & Casino Trực Tuyến",
              "url": "https://vertexone.vn",
              "logo": "https://vertexone.vn/logo.png",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
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
        </ThemeProvider>
        
        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Basic performance monitoring
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  // Log Core Web Vitals
                  new PerformanceObserver((entryList) => {
                    for (const entry of entryList.getEntries()) {
                      console.log(entry.name + ':', entry.value);
                    }
                  }).observe({entryTypes: ['measure']});
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}