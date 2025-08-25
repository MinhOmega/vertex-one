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
  Shield
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
      title: "Chào Mừng Đến Với Thế Giới Cá Cược Hàng Đầu",
      subtitle: "Trải nghiệm cá cược thể thao và casino đỉnh cao với tỷ lệ cược tốt nhất",
      gradient: "from-pink-400 via-purple-500 to-blue-600",
      icon: Crown,
      bonus: "200%"
    },
    {
      title: "Sòng Bạc Trực Tiếp Chất Lượng Cao",
      subtitle: "Dealers chuyên nghiệp, trải nghiệm như tại Las Vegas",
      gradient: "from-emerald-400 via-cyan-500 to-blue-600",
      icon: Sparkles,
      bonus: "150%"
    },
    {
      title: "Máy Slot Hiện Đại Với Jackpot Khủng",
      subtitle: "Hàng nghìn game slot với jackpot lên đến hàng tỷ đồng",
      gradient: "from-yellow-400 via-orange-500 to-red-600",
      icon: Zap,
      bonus: "300%"
    }
  ];

  const features = [
    { icon: Shield, title: "Bảo Mật Tuyệt Đối", desc: "SSL 256-bit Encryption", color: "text-green-500" },
    { icon: Flame, title: "Tỷ Lệ Cược Cao", desc: "Lên đến 98.5% RTP", color: "text-red-500" },
    { icon: Rocket, title: "Rút Tiền Nhanh", desc: "Trong vòng 5 phút", color: "text-blue-500" },
    { icon: Heart, title: "Hỗ Trợ 24/7", desc: "Luôn sẵn sàng phục vụ", color: "text-pink-500" }
  ];

  const liveStats = [
    { label: "Người chơi trực tuyến", value: userCount.toLocaleString(), icon: Users, trend: "+12%" },
    { label: "Tổng giải thưởng hôm nay", value: "₫2.4B", icon: DollarSign, trend: "+25%" },
    { label: "Trận đấu đang diễn ra", value: "147", icon: Trophy, trend: "+5%" },
    { label: "Jackpot hiện tại", value: "₫15.7B", icon: Target, trend: "+3%" }
  ];

  const CurrentSlide = heroSlides[currentSlide];

  return (
    <section className={`relative min-h-[80vh] bg-gradient-to-br ${CurrentSlide.gradient} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/banners/hero-banner-1.webp"
          alt="Gaming background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-300/15 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-blue-300/20 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-yellow-400 text-black font-bold text-lg px-4 py-2 animate-pulse">
                <Gift className="w-5 h-5 mr-2" />
                Thưởng Chào Mừng {CurrentSlide.bonus}
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                {CurrentSlide.title}
                <CurrentSlide.icon className="inline-block w-16 h-16 ml-4 text-yellow-300 animate-spin" />
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                {CurrentSlide.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200">
                <Star className="w-5 h-5 mr-2" />
                Đăng Ký Ngay
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-4">
                <TrendingUp className="w-5 h-5 mr-2" />
                Xem Tỷ Số Live
              </Button>
            </div>

            {/* Progress Bar */}
            <Card className="bg-white/20 border-white/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Mục tiêu Jackpot hôm nay</span>
                  <span className="text-yellow-300 font-bold">{progress}%</span>
                </div>
                <Progress value={progress} className="h-3 bg-white/20" />
                <div className="mt-2 text-sm text-white/80">
                  ₫{(15700000000 * progress / 100).toLocaleString()} / ₫15.7B
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <feature.icon className={`w-8 h-8 mx-auto mb-2 ${feature.color}`} />
                    <h3 className="font-bold text-white text-sm">{feature.title}</h3>
                    <p className="text-white/70 text-xs">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Live Stats & Carousel */}
          <div className="space-y-6">
            {/* Live Statistics */}
            <Card className="bg-white/15 border-white/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Flame className="w-5 h-5 mr-2 text-red-400" />
                  Thống Kê Trực Tiếp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {liveStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <stat.icon className="w-6 h-6 text-white" />
                      <div>
                        <p className="text-white font-semibold">{stat.value}</p>
                        <p className="text-white/70 text-sm">{stat.label}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-400 border-green-400">
                      {stat.trend}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Testimonials Carousel */}
            <Card className="bg-white/15 border-white/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white">Khách Hàng Nói Gì</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    {[
                      { name: "Nguyễn Văn A", rating: 5, comment: "Tuyệt vời! Tỷ lệ cược cao và rút tiền nhanh chóng.", avatar: "NA" },
                      { name: "Trần Thị B", rating: 5, comment: "Giao diện đẹp, dễ sử dụng. Hỗ trợ khách hàng rất tốt!", avatar: "TB" },
                      { name: "Lê Minh C", rating: 5, comment: "Đã thắng jackpot 50 triệu. Cảm ơn platform tuyệt vời này!", avatar: "LC" }
                    ].map((review, index) => (
                      <CarouselItem key={index}>
                        <div className="text-center space-y-4">
                          <Avatar className="w-16 h-16 mx-auto border-2 border-yellow-400">
                            <AvatarFallback className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold">
                              {review.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex justify-center space-x-1 mb-2">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <p className="text-white text-sm italic">&quot;{review.comment}&quot;</p>
                            <p className="text-white/70 font-semibold mt-2">- {review.name}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
                  <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
                </Carousel>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Tabs defaultValue="sports" className="bg-white/15 border-white/30 backdrop-blur-md rounded-lg">
              <TabsList className="grid w-full grid-cols-3 bg-white/10">
                <TabsTrigger value="sports" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
                  Thể Thao
                </TabsTrigger>
                <TabsTrigger value="casino" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
                  Casino
                </TabsTrigger>
                <TabsTrigger value="slots" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
                  Slots
                </TabsTrigger>
              </TabsList>
              <TabsContent value="sports" className="p-4 space-y-3">
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white hover:text-black">
                  ⚽ Premier League - Liverpool vs Arsenal
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white hover:text-black">
                  🏀 NBA Finals - Lakers vs Celtics  
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white hover:text-black">
                  🎾 Wimbledon - Chung kết
                </Button>
              </TabsContent>
              <TabsContent value="casino" className="p-4 space-y-3">
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white hover:text-black">
                  🎲 Baccarat VIP Room
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white hover:text-black">
                  ♠️ Blackjack Pro Table
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white hover:text-black">
                  🎰 Roulette Européen
                </Button>
              </TabsContent>
              <TabsContent value="slots" className="p-4 space-y-3">
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white hover:text-black">
                  💎 Mega Fortune - Jackpot ₫2.1B
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white hover:text-black">
                  🌟 Starburst Deluxe
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white hover:text-black">
                  🔥 Book of Ra Premium
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
