"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Crown, 
  Gift, 
  Star,
  Users,
  DollarSign,
  Trophy,
  Flame,
  Target,
  Rocket,
  Heart,
  Shield,
  ArrowRight
} from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [userCount, setUserCount] = useState(142857);

  // Animated counter effect
  useEffect(() => {
    const timer = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Progress animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => prev >= 100 ? 0 : prev + 10);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      id: 'welcome-slide',
      title: "Welcome to the Premier Betting World",
      subtitle: "Experience top-tier sports betting and casino with the best odds",
      icon: Crown,
      bonus: "200%",
      cta: "Register Now",
      ctaSecondary: "View Live Scores"
    },
    {
      id: 'casino-slide',
      title: "High-Quality Live Casino",
      subtitle: "Professional dealers, experience like in Las Vegas",
      icon: Sparkles,
      bonus: "150%",
      cta: "Enter Casino",
      ctaSecondary: "View Games"
    },
    {
      id: 'slots-slide',
      title: "Modern Slot Machines With Huge Jackpots",
      subtitle: "Thousands of slot games with jackpots up to billions",
      icon: Zap,
      bonus: "300%",
      cta: "Play Slots",
      ctaSecondary: "View Jackpot"
    }
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const features = [
    { icon: Shield, title: "Absolute Security", desc: "SSL 256-bit Encryption", color: "text-success" },
    { icon: Flame, title: "High Odds", desc: "Up to 98.5% RTP", color: "text-destructive" },
    { icon: Rocket, title: "Fast Withdrawal", desc: "Within 5 minutes", color: "text-primary" },
    { icon: Heart, title: "24/7 Support", desc: "Always ready to serve", color: "text-accent" }
  ];

  const liveStats = [
    {
      label: "Online Players",
      value: userCount.toLocaleString(),
      icon: Users,
      trend: "+12%",
      ariaLabel: `${userCount.toLocaleString()} players online, increased by 12%`
    },
    {
      label: "Today's Total Prizes",
      value: "₫2.4B",
      icon: DollarSign,
      trend: "+25%",
      ariaLabel: "Today's total prizes 2.4 billion VND, increased by 25%"
    },
    {
      label: "Matches in Progress",
      value: "147",
      icon: Trophy,
      trend: "+5%",
      ariaLabel: "147 matches currently in progress, increased by 5%"
    },
    {
      label: "Current Jackpot",
      value: "₫15.7B",
      icon: Target,
      trend: "+3%",
      ariaLabel: "Current jackpot 15.7 billion VND, increased by 3%"
    }
  ];

  const testimonials = [
    {
      name: "Nguyen Van A",
      rating: 5,
      comment: "Excellent! High odds and fast withdrawals.",
      avatar: "NA",
      id: "review-1"
    },
    {
      name: "Tran Thi B",
      rating: 5,
      comment: "Beautiful interface, easy to use. Great customer support!",
      avatar: "TB",
      id: "review-2"
    },
    {
      name: "Le Minh C",
      rating: 5,
      comment: "Won 50 million jackpot. Thanks to this amazing platform!",
      avatar: "LC",
      id: "review-3"
    }
  ];

  const quickActions = {
    sports: [
      { label: "⚽ Premier League - Liverpool vs Arsenal", href: "#match-1" },
      { label: "🏀 NBA Finals - Lakers vs Celtics", href: "#match-2" },
      { label: "🎾 Wimbledon - Final", href: "#match-3" }
    ],
    casino: [
      { label: "🎲 Baccarat VIP Room", href: "#casino-baccarat" },
      { label: "♠️ Blackjack Pro Table", href: "#casino-blackjack" },
      { label: "🎰 European Roulette", href: "#casino-roulette" }
    ],
    slots: [
      { label: "💎 Mega Fortune - Jackpot ₫2.1B", href: "#slot-mega" },
      { label: "🌟 Starburst Deluxe", href: "#slot-starburst" },
      { label: "🔥 Book of Ra Premium", href: "#slot-bookofra" }
    ]
  };

  const CurrentSlide = heroSlides[currentSlide];

  return (
    <section 
      className="relative min-h-[85vh] gaming-gradient overflow-hidden"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Background Image with proper alt text */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20" aria-hidden="true">
        <Image
          src="/images/banners/hero-banner-1.webp"
          alt=""
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-secondary/15 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-accent/20 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge 
                className="bg-accent text-accent-foreground font-bold text-lg px-4 py-2 animate-pulse shadow-lg"
                aria-label={`Welcome bonus ${CurrentSlide.bonus} percent`}
              >
                <Gift className="w-5 h-5 mr-2" aria-hidden="true" />
                Welcome Bonus {CurrentSlide.bonus}%
              </Badge>
              
              <div className="space-y-4">
                <h1 
                  id="hero-title"
                  className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
                >
                  {CurrentSlide.title}
                  <CurrentSlide.icon 
                    className="inline-block w-12 h-12 lg:w-16 lg:h-16 ml-4 text-accent animate-spin" 
                    aria-hidden="true" 
                  />
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {CurrentSlide.subtitle}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200 shadow-xl"
                aria-label={`${CurrentSlide.cta} - Register now to get started`}
              >
                <Star className="w-5 h-5 mr-2" aria-hidden="true" />
                {CurrentSlide.cta}
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground/20 text-foreground hover:bg-muted hover:text-accent-foreground font-bold text-lg px-8 py-4 backdrop-blur-sm"
                aria-label={CurrentSlide.ctaSecondary}
              >
                <TrendingUp className="w-5 h-5 mr-2" aria-hidden="true" />
                {CurrentSlide.ctaSecondary}
              </Button>
            </div>

            {/* Progress Bar */}
            <Card className="bg-card/80 border-border backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-card-foreground font-semibold">Today&apos;s Jackpot Target</span>
                  <span className="text-accent font-bold">{progress}%</span>
                </div>
                <Progress 
                  value={progress} 
                  className="h-3"
                  aria-label={`Jackpot progress: ${progress}%`}
                />
                <div className="mt-2 text-sm text-muted-foreground">
                  ₫{(15700000000 * progress / 100).toLocaleString()} / ₫15.7B
                </div>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-card/60 border-border/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <CardContent className="p-4 text-center">
                    <feature.icon className={`w-8 h-8 mx-auto mb-2 ${feature.color}`} aria-hidden="true" />
                    <div className="font-bold text-card-foreground text-sm">{feature.title}</div>
                    <p className="text-muted-foreground text-xs">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Live Stats & Interactive Content */}
          <div className="space-y-6">
            {/* Live Statistics */}
            <Card className="bg-card/80 border-border/60 backdrop-blur-md shadow-xl">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center text-xl">
                  <Flame className="w-6 h-6 mr-3 text-destructive" aria-hidden="true" />
                  Live Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {liveStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <stat.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-card-foreground font-bold text-lg" aria-label={stat.ariaLabel}>
                          {stat.value}
                        </p>
                        <p className="text-muted-foreground text-sm">{stat.label}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="text-success border-success/30 bg-success/10"
                      aria-label={`Trending ${stat.trend}`}
                    >
                      {stat.trend}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Customer Testimonials */}
            <Card className="bg-card/80 border-border/60 backdrop-blur-md shadow-xl">
               <CardHeader>
                 <CardTitle className="text-card-foreground text-xl">What Customers Say</CardTitle>
               </CardHeader>
              <CardContent>
                <Carousel className="w-full" aria-label="Customer testimonials">
                  <CarouselContent>
                    {testimonials.map((review) => (
                      <CarouselItem key={review.id}>
                        <div className="text-center space-y-4 p-4">
                          <Avatar className="w-16 h-16 mx-auto border-2 border-accent shadow-lg">
                            <AvatarFallback className="bg-accent text-accent-foreground font-bold text-lg">
                              {review.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex justify-center space-x-1 mb-3" role="img" aria-label={`${review.rating} out of 5 stars`}>
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-accent fill-current" aria-hidden="true" />
                              ))}
                            </div>
                            <blockquote className="text-card-foreground text-sm italic font-medium">
                              &quot;{review.comment}&quot;
                            </blockquote>
                            <cite className="text-muted-foreground font-semibold mt-2 block">
                              - {review.name}
                            </cite>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="text-foreground border-border hover:bg-muted" />
                  <CarouselNext className="text-foreground border-border hover:bg-muted" />
                </Carousel>
              </CardContent>
            </Card>

            {/* Quick Actions Tabs */}
            <Card className="bg-card/80 border-border/60 backdrop-blur-md shadow-xl">
              <Tabs defaultValue="sports" className="w-full">
                 <TabsList className="grid w-full grid-cols-3 bg-muted/40">
                   <TabsTrigger
                     value="sports"
                     className="text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                   >
                     Sports
                   </TabsTrigger>
                   <TabsTrigger
                     value="casino"
                     className="text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                   >
                     Casino
                   </TabsTrigger>
                   <TabsTrigger
                     value="slots"
                     className="text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                   >
                     Slots
                   </TabsTrigger>
                 </TabsList>
                
                <TabsContent value="sports" className="p-4 space-y-2">
                  {quickActions.sports.map((action, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      className="w-full justify-start text-card-foreground hover:bg-muted hover:text-accent-foreground text-sm p-3 h-auto"
                      aria-label={`View ${action.label.replace(/[⚽🏀🎾]/g, '').trim()}`}
                    >
                      {action.label}
                    </Button>
                  ))}
                </TabsContent>
                
                <TabsContent value="casino" className="p-4 space-y-2">
                  {quickActions.casino.map((action, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      className="w-full justify-start text-card-foreground hover:bg-muted hover:text-accent-foreground text-sm p-3 h-auto"
                      aria-label={`Play ${action.label.replace(/[🎲♠️🎰]/g, '').trim()}`}
                    >
                      {action.label}
                    </Button>
                  ))}
                </TabsContent>
                
                <TabsContent value="slots" className="p-4 space-y-2">
                  {quickActions.slots.map((action, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      className="w-full justify-start text-card-foreground hover:bg-muted hover:text-accent-foreground text-sm p-3 h-auto"
                      aria-label={`Play ${action.label.replace(/[💎🌟🔥]/g, '').trim()}`}
                    >
                      {action.label}
                    </Button>
                  ))}
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3" role="tablist" aria-label="Hero slides">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            role="tab"
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-accent scale-125 shadow-lg' 
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;