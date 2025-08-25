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
  Trophy,
  Info
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
      id: 'slot-1',
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
      id: 'slot-2',
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
      id: 'slot-3',
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
      id: 'slot-4',
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
      id: 'slot-5',
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
      id: 'slot-6',
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
      id: 'table-1',
      name: 'Baccarat VIP',
      players: 47,
      minBet: 100,
      maxBet: 100000,
      dealer: 'Sophia',
      image: '/images/casino/baccarat.webp',
      type: 'Baccarat'
    },
    {
      id: 'table-2',
      name: 'Blackjack Pro',
      players: 23,
      minBet: 50,
      maxBet: 50000,
      dealer: 'Michael',
      image: '/images/casino/blackjack.webp',
      type: 'Blackjack'
    },
    {
      id: 'table-3',
      name: 'Roulette Européen',
      players: 65,
      minBet: 25,
      maxBet: 25000,
      dealer: 'Elena',
      image: '/images/casino/roulette.webp',
      type: 'Roulette'
    },
    {
      id: 'table-4',
      name: 'Poker Texas Hold\'em',
      players: 12,
      minBet: 200,
      maxBet: 200000,
      dealer: 'David',
      image: '/images/casino/poker-table.webp',
      type: 'Poker'
    },
    {
      id: 'table-5',
      name: 'Craps Premium',
      players: 18,
      minBet: 75,
      maxBet: 75000,
      dealer: 'James',
      image: '/images/casino/craps.webp',
      type: 'Craps'
    },
    {
      id: 'table-6',
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

  const promotions = [
    {
      id: 'promo-1',
      title: "🎁 Khuyến Mãi Chào Mừng 200%",
      description: "Nhận thưởng 200% cho lần nạp đầu tiên lên đến ₫10,000,000",
      content: "Áp dụng cho thành viên mới. Yêu cầu cược gấp 35 lần số tiền thưởng. Thời hạn 30 ngày.",
      terms: "Điều khoản áp dụng cho khuyến mãi chào mừng dành cho thành viên mới"
    },
    {
      id: 'promo-2',
      title: "💎 VIP Cashback 15%",
      description: "Hoàn trả 15% cho thành viên VIP mỗi tuần",
      content: "Tự động hoàn trả vào thứ 2 hàng tuần. Không yêu cầu cược gấp. Tối đa ₫5,000,000/tuần.",
      terms: "Điều khoản áp dụng cho chương trình VIP cashback hàng tuần"
    },
    {
      id: 'promo-3',
      title: "🔥 Slot Tournament",
      description: "Giải đấu slot hàng tuần với giải thưởng ₫100,000,000",
      content: "Tham gia miễn phí. Xếp hạng dựa trên số lần thắng liên tiếp. Top 100 được thưởng.",
      terms: "Điều khoản áp dụng cho giải đấu slot hàng tuần"
    },
    {
      id: 'promo-4',
      title: "🎰 Free Spins Daily",
      description: "50 lượt quay miễn phí mỗi ngày cho thành viên",
      content: "Đăng nhập hàng ngày để nhận. Áp dụng cho game Starburst và Gonzo's Quest.",
      terms: "Điều khoản áp dụng cho chương trình free spins hàng ngày"
    }
  ];

  const rollDice = () => {
    const newRoll = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ];
    setDiceRoll(newRoll);
  };

  const getDiceIcon = (number: number) => {
    const icons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
    const DiceIcon = icons[number - 1];
    return <DiceIcon className="w-8 h-8 text-destructive" aria-hidden="true" />;
  };

  const formatCurrency = (amount: number) => {
    return `₫${(amount / 1000000).toFixed(1)}M`;
  };

  const getGameBadge = (game: { hot?: boolean; new?: boolean; popular?: boolean; featured?: boolean }) => {
    if (game.hot) return <Badge className="bg-destructive text-destructive-foreground">🔥 HOT</Badge>;
    if (game.new) return <Badge className="bg-success text-success-foreground">⭐ NEW</Badge>;
    if (game.popular) return <Badge className="bg-primary text-primary-foreground">👑 POPULAR</Badge>;
    if (game.featured) return <Badge className="bg-accent text-accent-foreground">✨ FEATURED</Badge>;
    return null;
  };

  return (
    <section 
      className="py-12 bg-background text-foreground"
      role="main" 
      aria-labelledby="casino-title"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-accent mr-4 animate-spin" aria-hidden="true" />
            <h1 id="casino-title" className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Casino Trực Tuyến
            </h1>
          </div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Trải nghiệm sòng bạc đẳng cấp thế giới với dealers chuyên nghiệp và jackpot khổng lồ
          </p>

          {/* Jackpot Display */}
          <Card className="bg-accent text-accent-foreground border-accent/20 max-w-md mx-auto shadow-2xl">
            <CardContent className="p-6 text-center">
              <Crown className="w-8 h-8 mx-auto mb-2" aria-hidden="true" />
              <h2 className="font-bold text-lg mb-2">MEGA JACKPOT</h2>
              <p 
                className="text-2xl lg:text-3xl font-bold"
                aria-label={`Current mega jackpot is ${jackpotAmount.toLocaleString()} Vietnamese Dong`}
              >
                ₫{jackpotAmount.toLocaleString()}
              </p>
              <p className="text-sm mt-2 opacity-90">Đang tăng mỗi giây!</p>
            </CardContent>
          </Card>
        </header>

        {/* Live Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12" role="region" aria-label="Live statistics">
          {[
            { 
              label: 'Người chơi online', 
              value: liveStats.totalPlayers, 
              icon: Users, 
              color: 'text-primary',
              ariaLabel: `${liveStats.totalPlayers} players currently online`
            },
            { 
              label: 'Tổng thắng hôm nay', 
              value: formatCurrency(liveStats.totalWinnings), 
              icon: DollarSign, 
              color: 'text-success',
              ariaLabel: `Total winnings today: ${formatCurrency(liveStats.totalWinnings)}`
            },
            { 
              label: 'Thắng lớn nhất', 
              value: formatCurrency(liveStats.biggestWin), 
              icon: Trophy, 
              color: 'text-accent',
              ariaLabel: `Biggest win: ${formatCurrency(liveStats.biggestWin)}`
            },
            { 
              label: 'Game đang chơi', 
              value: liveStats.activeGames, 
              icon: PlayCircle, 
              color: 'text-muted-foreground',
              ariaLabel: `${liveStats.activeGames} games currently being played`
            }
          ].map((stat, index) => (
            <Card key={index} className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} aria-hidden="true" />
                <p className="text-xl lg:text-2xl font-bold text-foreground" aria-label={stat.ariaLabel}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="slots" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-muted/60 backdrop-blur-sm">
            <TabsTrigger 
              value="slots" 
              className="text-muted-foreground data-[state=active]:bg-card data-[state=active]:text-foreground font-medium"
            >
              <Dice1 className="w-4 h-4 mr-2" aria-hidden="true" />
              Slots
            </TabsTrigger>
            <TabsTrigger 
              value="live" 
              className="text-muted-foreground data-[state=active]:bg-card data-[state=active]:text-foreground font-medium"
            >
              <PlayCircle className="w-4 h-4 mr-2" aria-hidden="true" />
              Live Casino
            </TabsTrigger>
            <TabsTrigger 
              value="table" 
              className="text-muted-foreground data-[state=active]:bg-card data-[state=active]:text-foreground font-medium"
            >
              <Spade className="w-4 h-4 mr-2" aria-hidden="true" />
              Table Games
            </TabsTrigger>
            <TabsTrigger 
              value="dice" 
              className="text-muted-foreground data-[state=active]:bg-card data-[state=active]:text-foreground font-medium"
            >
              <Dice6 className="w-4 h-4 mr-2" aria-hidden="true" />
              Dice Games
            </TabsTrigger>
            <TabsTrigger 
              value="promotions" 
              className="text-muted-foreground data-[state=active]:bg-card data-[state=active]:text-foreground font-medium"
            >
              <Gift className="w-4 h-4 mr-2" aria-hidden="true" />
              Khuyến Mãi
            </TabsTrigger>
          </TabsList>

          {/* Slot Games */}
          <TabsContent value="slots" className="space-y-6">
            <Alert className="bg-accent/20 border-accent text-foreground">
              <Flame className="h-4 w-4 text-accent" />
              <AlertTitle className="text-accent font-bold">Slot Games Hot</AlertTitle>
              <AlertDescription className="text-muted-foreground">
                Chơi ngay để có cơ hội trúng Mega Jackpot ₫{jackpotAmount.toLocaleString()}!
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {slotGames.map((game) => (
                <Card 
                  key={game.id} 
                  className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] group"
                >
                  <CardHeader className="relative pb-2">
                    <div className="absolute top-2 right-2 z-10">
                      {getGameBadge(game)}
                    </div>
                    <div className="relative w-full h-32 mb-4 group-hover:scale-105 transition-transform rounded-lg overflow-hidden">
                      <Image
                        src={game.image}
                        alt={`Screenshot of ${game.name} slot game by ${game.provider}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <CardTitle className="text-foreground text-center text-lg">{game.name}</CardTitle>
                    <CardDescription className="text-muted-foreground text-center">
                      {game.provider}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">RTP:</span>
                        <span className="text-success font-bold">{game.rtp}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Jackpot:</span>
                        <span className="text-accent font-bold">{formatCurrency(game.jackpot)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Paylines:</span>
                        <span className="text-foreground">{game.paylines}</span>
                      </div>
                    </div>
                    
                    <Progress 
                      value={game.rtp} 
                      className="h-2"
                      aria-label={`RTP ${game.rtp}%`}
                    />
                    
                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                        aria-label={`Play ${game.name} now`}
                      >
                        <PlayCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                        Chơi Ngay
                      </Button>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="w-full border-border text-foreground hover:bg-muted"
                            aria-label={`View details for ${game.name}`}
                          >
                            <Info className="w-4 h-4 mr-2" aria-hidden="true" />
                            Chi Tiết
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-card border-border text-foreground max-w-md">
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
                            <DialogDescription className="text-muted-foreground">
                              Chi tiết về game {game.name} từ {game.provider}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-muted-foreground">RTP: </span>
                                <span className="text-success font-bold">{game.rtp}%</span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Độ khó: </span>
                                <span className="text-foreground">{game.difficulty}</span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Chủ đề: </span>
                                <span className="text-foreground">{game.theme}</span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Paylines: </span>
                                <span className="text-foreground">{game.paylines}</span>
                              </div>
                            </div>
                            <Separator className="bg-border" />
                            <div>
                              <h4 className="font-semibold mb-2 text-foreground">Cược tối thiểu/tối đa:</h4>
                              <p className="text-sm text-muted-foreground">
                                ₫{game.minBet.toLocaleString()} - ₫{game.maxBet.toLocaleString()}
                              </p>
                            </div>
                            <Button 
                              className="w-full bg-success hover:bg-success/90 text-success-foreground"
                              aria-label={`Start playing ${game.name}`}
                            >
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
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {tableGames.map((table) => (
                <Card key={table.id} className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="relative w-16 h-12 rounded overflow-hidden">
                        <Image
                          src={table.image}
                          alt={`${table.name} table with dealer ${table.dealer}`}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <Badge className="bg-destructive text-destructive-foreground animate-pulse">
                        <span className="w-2 h-2 bg-current rounded-full mr-2" aria-hidden="true"></span>
                        LIVE
                      </Badge>
                    </div>
                    <CardTitle className="text-foreground">{table.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Dealer: {table.dealer}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Người chơi:</span>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-primary" aria-hidden="true" />
                        <span 
                          className="text-foreground font-bold"
                          aria-label={`${table.players} players at this table`}
                        >
                          {table.players}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Cược tối thiểu:</span>
                        <span className="text-success">₫{table.minBet.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Cược tối đa:</span>
                        <span className="text-accent">₫{table.maxBet.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                      aria-label={`Join ${table.name} table with dealer ${table.dealer}`}
                    >
                      <PlayCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                      Vào Bàn
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Dice Games */}
          <TabsContent value="dice" className="space-y-6">
            <Card className="bg-card border-border shadow-lg max-w-md mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-foreground flex items-center justify-center">
                  <Dice6 className="w-6 h-6 mr-2 text-destructive" aria-hidden="true" />
                  Mini Dice Game
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center" role="region" aria-live="polite" aria-label="Dice game results">
                  <div className="flex justify-center space-x-4 mb-4">
                    <div aria-label={`First die shows ${diceRoll[0]}`}>
                      {getDiceIcon(diceRoll[0])}
                    </div>
                    <div aria-label={`Second die shows ${diceRoll[1]}`}>
                      {getDiceIcon(diceRoll[1])}
                    </div>
                  </div>
                  <p 
                    className="text-foreground font-bold text-xl"
                    aria-label={`Total sum is ${diceRoll[0] + diceRoll[1]}`}
                  >
                    Tổng: {diceRoll[0] + diceRoll[1]}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <label className="text-muted-foreground text-sm" htmlFor="bet-amount-slider">
                    Số tiền cược:
                  </label>
                  <Slider
                    id="bet-amount-slider"
                    value={betAmount}
                    onValueChange={setBetAmount}
                    max={10000}
                    min={10}
                    step={10}
                    className="w-full"
                    aria-label={`Bet amount: ${betAmount[0]} Vietnamese Dong`}
                  />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground" aria-hidden="true">₫10</span>
                    <span className="text-foreground font-bold">₫{betAmount[0].toLocaleString()}</span>
                    <span className="text-muted-foreground" aria-hidden="true">₫10K</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="border-success text-success hover:bg-success hover:text-success-foreground"
                    aria-label="Bet on even numbers"
                  >
                    Cược Chẵn
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    aria-label="Bet on odd numbers"
                  >
                    Cược Lẻ
                  </Button>
                </div>
                
                <Button 
                  onClick={rollDice} 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  aria-label="Roll the dice"
                >
                  <Dice6 className="w-4 h-4 mr-2" aria-hidden="true" />
                  Tung Xúc Xắc
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Promotions */}
          <TabsContent value="promotions" className="space-y-6">
            <Accordion type="single" collapsible className="space-y-4">
              {promotions.map((promo, index) => (
                <AccordionItem 
                  key={promo.id} 
                  value={`item-${index}`} 
                  className="bg-card border-border shadow-lg rounded-lg px-6"
                >
                  <AccordionTrigger className="text-foreground hover:text-accent [&[data-state=open]>div]:text-accent">
                    <div className="text-left">
                      <h3 className="font-bold text-lg">{promo.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{promo.description}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-4">
                      <p className="text-foreground">{promo.content}</p>
                      <details className="text-sm">
                        <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                          Điều khoản và điều kiện
                        </summary>
                        <p className="mt-2 text-muted-foreground">{promo.terms}</p>
                      </details>
                      <Button 
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                        aria-label={`Claim ${promo.title.replace(/[🎁💎🔥🎰]/g, '').trim()}`}
                      >
                        <Gift className="w-4 h-4 mr-2" aria-hidden="true" />
                        Nhận Ngay
                      </Button>
                    </div>
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