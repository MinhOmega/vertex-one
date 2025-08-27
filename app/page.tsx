import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import LiveMatches from '@/components/sports/live-matches';
import CasinoGames from '@/components/casino/casino-games';
import Footer from '@/components/layout/footer';



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