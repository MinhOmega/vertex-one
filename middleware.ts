import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Optimize CSS delivery for better FCP/LCP
  if (request.nextUrl.pathname.includes('/_next/static/css/')) {
    // Add aggressive caching for CSS files
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    
    // Add compression hints
    response.headers.set('Vary', 'Accept-Encoding');
  }
  
  // Preload critical resources
  if (request.nextUrl.pathname === '/') {
    // Add Link headers for critical resource preloading
    response.headers.set(
      'Link',
      [
        '</app/critical.css>; rel=preload; as=style',
        '<https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2>; rel=preload; as=font; type=font/woff2; crossorigin',
      ].join(', ')
    );
  }
  
  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};