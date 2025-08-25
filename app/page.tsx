import dynamic from 'next/dynamic';
import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import Footer from '@/components/layout/footer';

// Dynamically import components for code splitting and performance
const LiveMatches = dynamic(() => import('@/components/sports/live-matches'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const CasinoGames = dynamic(() => import('@/components/casino/casino-games'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />
});



export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header with Navigation */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Sports Betting Section */}
      <LiveMatches />
      
      {/* Casino Games Section */}
      <CasinoGames />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}