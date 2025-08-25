# Agent Instructions for Vertex One

## Build/Lint/Test Commands

### Development
- `pnpm dev` - Start development server with Turbopack (Next.js 15)
- `pnpm build` - Build for production with Turbopack optimization
- `pnpm start` - Start production server with optimized output

### Code Quality
- `pnpm lint` - Run ESLint with Next.js core web vitals + TypeScript rules
- Uses FlatConfig with extends: "next/core-web-vitals", "next/typescript"

### Testing
- No test scripts configured - implement with `pnpm test` when adding tests
- Recommended: Jest + React Testing Library for component testing
- Recommended: Playwright for E2E testing

## Framework & Language Stack

### Core Technologies
- **Next.js 15** with App Router and Turbopack
- **React 19** with latest features and hooks
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS v4** with custom design system
- **shadcn/ui** components with "new-york" style variant

### Key Dependencies
- **UI Components**: Radix UI primitives (@radix-ui/*)
- **Styling**: class-variance-authority, clsx, tailwind-merge
- **Icons**: Lucide React (400+ icons)
- **Forms**: React Hook Form + Hookform Resolvers + Zod validation
- **Themes**: next-themes with system/dark/light modes
- **Animations**: Tailwind CSS animations + custom transitions
- **Carousels**: Embla Carousel React
- **Notifications**: Sonner for toast notifications

## Code Style Guidelines

### Framework & Language
- **Next.js 15** with App Router (no pages/ directory)
- **React 19** with modern hooks and patterns
- **TypeScript** with strict mode and path aliases
- **Tailwind CSS v4** with custom utility classes
- **shadcn/ui** with consistent component API

### Imports & Dependencies
- External libraries first, then internal imports
- Use path aliases: `@/components`, `@/lib`, `@/components/ui`
- Single quotes for all imports
- Group imports: external → internal → relative paths
- Import React as `* as React` for JSX transform

### Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection`, `LiveMatches`)
- **Functions**: camelCase (e.g., `handleClick`, `formatCurrency`)
- **Files**: kebab-case (e.g., `hero-section.tsx`, `live-matches.tsx`)
- **Directories**: kebab-case (e.g., `sports-betting`, `live-matches`)
- **Hooks**: camelCase with `use` prefix (e.g., `useTheme`, `useState`)
- **Types**: PascalCase with descriptive names (e.g., `UserProfile`, `GameStats`)
- **Constants**: SCREAMING_SNAKE_CASE (e.g., `MAX_RETRY_ATTEMPTS`)

### TypeScript Patterns
- Strict mode enabled with comprehensive type checking
- Use explicit types for component props and function parameters
- Prefer `interface` over `type` for object definitions
- Use `React.ComponentProps` for extending HTML element props
- Leverage utility types: `Partial<>`, `Pick<>`, `Omit<>`
- Use `as const` for literal type assertions
- Implement proper error types and custom error classes

### Component Patterns
- Use `class-variance-authority` (cva) for component variants
- Export both component and variants: `export { Button, buttonVariants }`
- Use `cn()` utility for conditional Tailwind classes
- Implement proper loading states with skeleton components
- Use `React.memo()` for expensive components when appropriate
- Follow compound component patterns for complex UI elements

### State Management
- Use React hooks for local component state
- Implement custom hooks for reusable stateful logic
- Use `useEffect` with proper dependency arrays
- Handle async operations with proper loading/error states
- Implement optimistic updates where appropriate
- Use `useCallback` and `useMemo` for performance optimization

### Error Handling
- Use try-catch blocks for async operations
- Implement proper error boundaries for React components
- Create custom error types for different failure scenarios
- Log errors appropriately without exposing sensitive information
- Provide user-friendly error messages and recovery options
- Use error codes for programmatic error handling

### Performance Optimization
- Use `dynamic()` imports for code splitting and lazy loading
- Implement proper loading states for dynamic components
- Optimize images with Next.js Image component and proper sizing
- Use `React.memo()` and `useMemo()` for expensive computations
- Implement virtual scrolling for large lists
- Use proper key props for list rendering
- Optimize bundle size with tree shaking

### Accessibility (A11y)
- Implement comprehensive ARIA labels and roles
- Use semantic HTML elements (`<main>`, `<section>`, `<nav>`, `<article>`)
- Provide proper heading hierarchy (h1 → h2 → h3)
- Implement keyboard navigation support
- Use proper color contrast ratios
- Add focus management for interactive elements
- Include screen reader announcements for dynamic content
- Support reduced motion preferences

### Internationalization (i18n)
- Primary language: Vietnamese (vi_VN)
- Support multiple languages: Vietnamese, English, Thai, Indonesian
- Use proper locale formatting for dates, numbers, currency
- Implement RTL support if needed for future languages
- Use Unicode characters and proper encoding
- Localize content, images, and cultural references

### Security Best Practices
- Never commit secrets or API keys to repository
- Use environment variables for sensitive configuration
- Implement proper input validation with Zod schemas
- Follow Next.js security best practices and headers
- Use HTTPS and SSL certificates
- Implement CSRF protection for forms
- Sanitize user inputs to prevent XSS attacks
- Use proper authentication and authorization patterns

### SEO & Metadata
- Implement comprehensive metadata with Next.js Metadata API
- Use structured data (JSON-LD) for rich snippets
- Optimize Open Graph and Twitter Card meta tags
- Implement proper robots.txt and sitemap.xml
- Use canonical URLs and hreflang for multilingual sites
- Optimize page titles and meta descriptions
- Implement proper heading structure for content hierarchy

### Animation & Interactions
- Use Tailwind CSS animation utilities
- Implement smooth transitions with `transition-all duration-200`
- Use CSS transforms for performance (`transform scale-105`)
- Implement loading states with skeleton components
- Use proper timing functions and easing
- Consider reduced motion preferences
- Implement hover and focus states for interactive elements

### File Structure & Organization
```
app/                          # Next.js App Router
├── layout.tsx               # Root layout with metadata
├── page.tsx                 # Home page
├── globals.css              # Global styles and CSS variables
└── [other pages]/           # Dynamic routes

components/                  # Reusable components
├── ui/                      # shadcn/ui base components
├── layout/                  # Layout-specific components
├── sections/                # Page section components
└── [feature]/               # Feature-specific components

lib/                        # Utility functions and configurations
├── utils.ts                # Core utilities (cn function)
└── [other utilities]/      # Additional helper functions

public/                     # Static assets
├── images/                  # Optimized images and assets
└── [other static files]/   # Favicons, manifests, etc.

[config files]              # ESLint, TypeScript, Tailwind, etc.
```

### Git Workflow & Best Practices
- Use conventional commit messages
- Run `pnpm lint` before committing changes
- Test builds locally with `pnpm build` before pushing
- Use feature branches for new development
- Implement proper code review processes
- Document breaking changes in commit messages
- Use semantic versioning for releases

### Development Workflow
1. Run `pnpm dev` for local development
2. Make changes following established patterns
3. Run `pnpm lint` to check code quality
4. Test build with `pnpm build` for production readiness
5. Commit with conventional commit messages
6. Create pull requests for code review
7. Deploy after successful CI/CD pipeline

### Performance Monitoring
- Implement Core Web Vitals tracking
- Monitor bundle size and loading performance
- Use performance budgets for assets
- Implement error tracking and monitoring
- Monitor user interaction performance
- Use analytics for user behavior insights

### Deployment & Production
- Use Vercel or similar platform for Next.js deployment
- Implement proper environment variable management
- Use CDN for static assets and images
- Implement proper caching strategies
- Monitor production performance and errors
- Implement gradual rollouts for major changes

No Cursor rules or Copilot instructions found in this repository.