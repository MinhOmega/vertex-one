import { readFileSync } from 'fs';
import { join } from 'path';

// Read critical CSS at build time
let criticalCSS = '';

try {
  if (typeof window === 'undefined') {
    // Only read file on server side
    criticalCSS = readFileSync(join(process.cwd(), 'app/critical.css'), 'utf8');
  }
} catch {
  // Critical CSS file not found, using fallback styles
  criticalCSS = `
    *{box-sizing:border-box}
    body{margin:0;font-family:system-ui,-apple-system,sans-serif;background-color:oklch(0.98 0.003 106.423);color:oklch(0.135 0.042 254.139)}
    .min-h-screen{min-height:100vh}
    .flex{display:flex}
    .flex-col{flex-direction:column}
  `;
}

export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: criticalCSS
      }}
    />
  );
}

export function DeferredCSS() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          // Load non-critical CSS after initial render - Improves FCP/LCP
          (function() {
            function loadCSS(href) {
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = href;
              document.head.appendChild(link);
            }
            
            // Load styles after DOM content loaded for better FCP
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function() {
                loadCSS('/_next/static/css/app/layout.css');
              });
            } else {
              loadCSS('/_next/static/css/app/layout.css');
            }
          })();
        `
      }}
    />
  );
}
