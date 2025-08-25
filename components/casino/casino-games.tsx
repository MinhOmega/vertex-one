"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Sparkles, 
  Crown, 
  Dice1, 
  Dice2, 
  Dice3, 
  Dice4, 
  Dice5, 
  Dice6,
  Spade,
  Flame,
  DollarSign,
  Users,
  PlayCircle,
  Gift,
  Trophy
} from 'lucide-react';

const CasinoGames = () => {
  const [jackpotAmount, setJackpotAmount] = useState(15700000000);
  const [betAmount, setBetAmount] = useState([100]);
  const [diceRoll, setDiceRoll] = useState([1, 1]);

  // Animated jackpot counter
  useEffect(() => {
    const interval = setInterval(() => {
      setJackpotAmount(prev => prev + Math.floor(Math.random() * 50000) + 10000);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const slotGames = [
    {
      id: 1,
      name: 'Kho Báu Của Người Aztec',
      provider: 'Pragmatic Play',
      rtp: 96.5,
      jackpot: 2100000000,
      difficulty: 'Medium',
      theme: 'Adventure',
      paylines: 25,
      minBet: 10,
      maxBet: 10000,
      image: '/images/slots/golden-dragon.webp',
      hot: true
    },
    {
      id: 2,
      name: 'Viên Ngọc May Mắn 3',
      provider: 'Play\'n GO',
      rtp: 97.2,
      jackpot: 850000000,
      difficulty: 'Easy',
      theme: 'Gems',
      paylines: 20,
      minBet: 5,
      maxBet: 5000,
      image: '/images/slots/lucky-gems.webp',
      new: true
    },
    {
      id: 3,
      name: 'Người Giàu',
      provider: 'NetEnt',
      rtp: 95.8,
      jackpot: 3200000000,
      difficulty: 'Hard',
      theme: 'Luxury',
      paylines: 40,
      minBet: 20,
      maxBet: 20000,
      image: '/images/slots/fortune-wheel.webp',
      popular: true
    },
    {
      id: 4,
      name: 'Đế Chế Vàng',
      provider: 'Microgaming',
      rtp: 96.8,
      jackpot: 1750000000,
      difficulty: 'Medium',
      theme: 'Ancient',
      paylines: 30,
      minBet: 15,
      maxBet: 15000,
      image: '/images/slots/fire-phoenix.webp',
      featured: true
    },
    {
      id: 5,
      name: 'Nữ Hoàng Băng Giá',
      provider: 'Play\'n GO',
      rtp: 96.3,
      jackpot: 1200000000,
      difficulty: 'Medium',
      theme: 'Fantasy',
      paylines: 20,
      minBet: 10,
      maxBet: 8000,
      image: '/images/slots/ice-queen.webp',
      hot: true
    },
    {
      id: 6,
      name: 'Miền Tây Hoang Dã',
      provider: 'Red Tiger',
      rtp: 95.9,
      jackpot: 980000000,
      difficulty: 'Hard',
      theme: 'Western',
      paylines: 50,
      minBet: 25,
      maxBet: 12000,
      image: '/images/slots/wild-west.webp',
      featured: true
    }
  ];

  const tableGames = [
    {
      id: 5,
      name: 'Baccarat VIP',
      players: 47,
      minBet: 100,
      maxBet: 100000,
      dealer: 'Sophia',
      image: '/images/casino/baccarat.webp',
      type: 'Baccarat'
    },
    {
      id: 6,
      name: 'Blackjack Pro',
      players: 23,
      minBet: 50,
      maxBet: 50000,
      dealer: 'Michael',
      image: '/images/casino/blackjack.webp',
      type: 'Blackjack'
    },
    {
      id: 7,
      name: 'Roulette Européen',
      players: 65,
      minBet: 25,
      maxBet: 25000,
      dealer: 'Elena',
      image: '/images/casino/roulette.webp',
      type: 'Roulette'
    },
    {
      id: 8,
      name: 'Poker Texas Hold\'em',
      players: 12,
      minBet: 200,
      maxBet: 200000,
      dealer: 'David',
      image: '/images/casino/poker-table.webp',
      type: 'Poker'
    },
    {
      id: 9,
      name: 'Craps Premium',
      players: 18,
      minBet: 75,
      maxBet: 75000,
      dealer: 'James',
      image: '/images/casino/craps.webp',
      type: 'Craps'
    },
    {
      id: 10,
      name: 'Pai Gow Poker',
      players: 8,
      minBet: 150,
      maxBet: 50000,
      dealer: 'Maria',
      image: '/images/casino/pai-gow.webp',
      type: 'Pai Gow'
    }
  ];

  const liveStats = {
    totalPlayers: 15847,
    totalWinnings: 2400000000,
    biggestWin: 450000000,
    activeGames: 156
  };

  const rollDice = () => {
    setDiceRoll([
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ]);
  };

  const getDiceIcon = (number: number) => {
    const icons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
    const DiceIcon = icons[number - 1];
    return <DiceIcon className="w-8 h-8 text-red-500" />;
  };

  const formatCurrency = (amount: number) => {
    return `₫${(amount / 1000000).toFixed(1)}M`;
  };

  const getGameBadge = (game: { hot?: boolean; new?: boolean; popular?: boolean; featured?: boolean }) => {
    if (game.hot) return <Badge className="bg-red-500">🔥 HOT</Badge>;
    if (game.new) return <Badge className="bg-green-500">⭐ NEW</Badge>;
    if (game.popular) return <Badge className="bg-blue-500">👑 POPULAR</Badge>;
    if (game.featured) return <Badge className="bg-purple-500">✨ FEATURED</Badge>;
    return null;
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-yellow-400 mr-4 animate-spin" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Casino Trực Tuyến
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Trải nghiệm sòng bạc đẳng cấp thế giới với dealers chuyên nghiệp và jackpot khổng lồ
          </p>

          {/* Jackpot Display */}
          <Card className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 border-none text-black max-w-md mx-auto">
            <CardContent className="p-6 text-center">
              <Crown className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold text-lg mb-2">MEGA JACKPOT</h3>
              <p className="text-3xl font-bold">
                ₫{jackpotAmount.toLocaleString()}
              </p>
              <p className="text-sm mt-2">Đang tăng mỗi giây!</p>
            </CardContent>
          </Card>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Người chơi online', value: liveStats.totalPlayers, icon: Users, color: 'text-blue-400' },
            { label: 'Tổng thắng hôm nay', value: formatCurrency(liveStats.totalWinnings), icon: DollarSign, color: 'text-green-400' },
            { label: 'Thắng lớn nhất', value: formatCurrency(liveStats.biggestWin), icon: Trophy, color: 'text-yellow-400' },
            { label: 'Game đang chơi', value: liveStats.activeGames, icon: PlayCircle, color: 'text-purple-400' }
          ].map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="slots" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="slots" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
              <Dice1 className="w-4 h-4 mr-2" />
              Slots
            </TabsTrigger>
            <TabsTrigger value="live" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
              <PlayCircle className="w-4 h-4 mr-2" />
              Live Casino
            </TabsTrigger>
            <TabsTrigger value="table" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
              <Spade className="w-4 h-4 mr-2" />
              Table Games
            </TabsTrigger>
            <TabsTrigger value="dice" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
              <Dice6 className="w-4 h-4 mr-2" />
              Dice Games
            </TabsTrigger>
            <TabsTrigger value="promotions" className="text-white data-[state=active]:bg-white data-[state=active]:text-black">
              <Gift className="w-4 h-4 mr-2" />
              Khuyến Mãi
            </TabsTrigger>
          </TabsList>

          {/* Slot Games */}
          <TabsContent value="slots" className="space-y-6">
            <Alert className="bg-yellow-500/20 border-yellow-500">
              <Flame className="h-4 w-4 text-yellow-500" />
              <AlertTitle className="text-yellow-300">Slot Games Hot</AlertTitle>
              <AlertDescription className="text-yellow-200">
                Chơi ngay để có cơ hội trúng Mega Jackpot ₫{jackpotAmount.toLocaleString()}!
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {slotGames.map((game) => (
                <Card key={game.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 hover:scale-105 group">
                  <CardHeader className="relative">
                    <div className="absolute top-2 right-2">
                      {getGameBadge(game)}
                    </div>
                    <div className="relative w-full h-32 mb-4 group-hover:scale-105 transition-transform rounded-lg overflow-hidden">
                      <Image
                        src={game.image}
                        alt={game.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      />
                    </div>
                    <CardTitle className="text-white text-center">{game.name}</CardTitle>
                    <CardDescription className="text-gray-300 text-center">
                      {game.provider}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">RTP:</span>
                        <span className="text-green-400 font-bold">{game.rtp}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Jackpot:</span>
                        <span className="text-yellow-400 font-bold">{formatCurrency(game.jackpot)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Paylines:</span>
                        <span className="text-white">{game.paylines}</span>
                      </div>
                    </div>
                    
                    <Progress value={game.rtp} className="h-2" />
                    
                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Chơi Ngay
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white hover:text-black">
                            Chi Tiết
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-gray-900 border-gray-700 text-white">
                          <DialogHeader>
                            <DialogTitle className="flex items-center">
                              <div className="relative w-12 h-12 mr-3 rounded overflow-hidden">
                                <Image
                                  src={game.image}
                                  alt={game.name}
                                  fill
                                  className="object-cover"
                                  sizes="48px"
                                />
                              </div>
                              {game.name}
                            </DialogTitle>
                            <DialogDescription className="text-gray-300">
                              Chi tiết về game {game.name} từ {game.provider}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-400">RTP: </span>
                                <span className="text-green-400 font-bold">{game.rtp}%</span>
                              </div>
                              <div>
                                <span className="text-gray-400">Độ khó: </span>
                                <span className="text-white">{game.difficulty}</span>
                              </div>
                              <div>
                                <span className="text-gray-400">Chủ đề: </span>
                                <span className="text-white">{game.theme}</span>
                              </div>
                              <div>
                                <span className="text-gray-400">Paylines: </span>
                                <span className="text-white">{game.paylines}</span>
                              </div>
                            </div>
                            <Separator className="bg-gray-700" />
                            <div>
                              <h4 className="font-semibold mb-2">Cược tối thiểu/tối đa:</h4>
                              <p className="text-sm text-gray-300">
                                ₫{game.minBet.toLocaleString()} - ₫{game.maxBet.toLocaleString()}
                              </p>
                            </div>
                            <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500">
                              Bắt Đầu Chơi
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Live Casino */}
          <TabsContent value="live" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {tableGames.map((table) => (
                <Card key={table.id} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="relative w-16 h-12 rounded overflow-hidden">
                        <Image
                          src={table.image}
                          alt={table.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <Badge className="bg-red-500 animate-pulse">🔴 LIVE</Badge>
                    </div>
                    <CardTitle className="text-white">{table.name}</CardTitle>
                    <CardDescription className="text-gray-300">
                      Dealer: {table.dealer}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Người chơi:</span>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className="text-white font-bold">{table.players}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Cược tối thiểu:</span>
                        <span className="text-green-400">₫{table.minBet.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Cược tối đa:</span>
                        <span className="text-yellow-400">₫{table.maxBet.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Vào Bàn
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Dice Games */}
          <TabsContent value="dice" className="space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-md mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-white flex items-center justify-center">
                  <Dice6 className="w-6 h-6 mr-2 text-red-500" />
                  Mini Dice Game
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="flex justify-center space-x-4 mb-4">
                    {getDiceIcon(diceRoll[0])}
                    {getDiceIcon(diceRoll[1])}
                  </div>
                  <p className="text-white font-bold text-xl">
                    Tổng: {diceRoll[0] + diceRoll[1]}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <label className="text-gray-300 text-sm">Số tiền cược:</label>
                  <Slider
                    value={betAmount}
                    onValueChange={setBetAmount}
                    max={10000}
                    min={10}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">₫10</span>
                    <span className="text-white font-bold">₫{betAmount[0].toLocaleString()}</span>
                    <span className="text-gray-400">₫10K</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                    Cược Chẵn
                  </Button>
                  <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
                    Cược Lẻ
                  </Button>
                </div>
                
                <Button onClick={rollDice} className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  <Dice6 className="w-4 h-4 mr-2" />
                  Tung Xúc Xắc
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Promotions */}
          <TabsContent value="promotions" className="space-y-6">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  title: "🎁 Khuyến Mãi Chào Mừng 200%",
                  description: "Nhận thưởng 200% cho lần nạp đầu tiên lên đến ₫10,000,000",
                  content: "Áp dụng cho thành viên mới. Yêu cầu cược gấp 35 lần số tiền thưởng. Thời hạn 30 ngày."
                },
                {
                  title: "💎 VIP Cashback 15%",
                  description: "Hoàn trả 15% cho thành viên VIP mỗi tuần",
                  content: "Tự động hoàn trả vào thứ 2 hàng tuần. Không yêu cầu cược gấp. Tối đa ₫5,000,000/tuần."
                },
                {
                  title: "🔥 Slot Tournament",
                  description: "Giải đấu slot hàng tuần với giải thưởng ₫100,000,000",
                  content: "Tham gia miễn phí. Xếp hạng dựa trên số lần thắng liên tiếp. Top 100 được thưởng."
                },
                {
                  title: "🎰 Free Spins Daily",
                  description: "50 lượt quay miễn phí mỗi ngày cho thành viên",
                  content: "Đăng nhập hàng ngày để nhận. Áp dụng cho game Starburst và Gonzo's Quest."
                }
              ].map((promo, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white/10 border-white/20 backdrop-blur-sm rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-yellow-400">
                    <div className="text-left">
                      <h3 className="font-bold">{promo.title}</h3>
                      <p className="text-sm text-gray-300">{promo.description}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p>{promo.content}</p>
                    <Button className="mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black">
                      <Gift className="w-4 h-4 mr-2" />
                      Nhận Ngay
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CasinoGames;
