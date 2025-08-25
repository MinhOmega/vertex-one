"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Trophy, 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  Play, 
  BarChart3,
  Target,
  Zap,
  Flame,
  Star,
  Users,
  Activity,
  Globe
} from 'lucide-react';

const LiveMatches = () => {
  const [activeTab, setActiveTab] = useState('live');
  const [selectedMatch, setSelectedMatch] = useState<{
    id: number;
    homeTeam: string;
    awayTeam: string;
    betType: string;
    odds: { [key: string]: number };
  } | null>(null);
  
  const liveMatches = [
    {
      id: 1,
      league: 'Korea Women K-League',
      homeTeam: 'Gyeongju KHNP (w)',
      awayTeam: 'Mungyeong Sangmu (w)',
      homeScore: 0,
      awayScore: 1,
      time: "0H 0'",
      odds: {
        home: 3.25,
        draw: 2.94,
        away: 2.12
      },
      isLive: true,
      viewers: 15420,
      trend: 'up'
    },
    {
      id: 2,
      league: 'Korea Women K-League', 
      homeTeam: 'Suwon FC (w)',
      awayTeam: 'Hyundai Steel Red Angels (w)',
      homeScore: 2,
      awayScore: 2,
      time: "0H 0'",
      odds: {
        home: 3.85,
        draw: 2.62,
        away: 2.09
      },
      isLive: true,
      viewers: 12847,
      trend: 'down'
    },
    {
      id: 3,
      league: 'Premier League',
      homeTeam: 'Manchester United',
      awayTeam: 'Arsenal',
      homeScore: 1,
      awayScore: 0,
      time: "45' +2",
      odds: {
        home: 2.10,
        draw: 3.20,
        away: 3.75
      },
      isLive: true,
      viewers: 89234,
      trend: 'up'
    }
  ];

  const upcomingMatches = [
    {
      id: 4,
      league: 'Champions League',
      homeTeam: 'Barcelona',
      awayTeam: 'Bayern Munich',
      date: '2024-01-15',
      time: '21:00',
      odds: {
        home: 2.45,
        draw: 3.10,
        away: 3.20
      },
      isLive: false,
      popularity: 95
    },
    {
      id: 5,
      league: 'Bundesliga',
      homeTeam: 'Borussia Dortmund',
      awayTeam: 'RB Leipzig',
      date: '2024-01-15',
      time: '18:30',
      odds: {
        home: 1.85,
        draw: 3.45,
        away: 4.20
      },
      isLive: false,
      popularity: 78
    }
  ];

  const betBoostMatches = [
    {
      id: 6,
      leagues: ['USA Major League Soccer', 'Colombia Primera A', 'Guatemala Liga National'],
      matches: [
        'Seattle Sounders vs Sporting Kansas City',
        'Atletico Bucaramanga vs Aguilas Doradas Rionegro', 
        'CD Marquense vs Deportivo Malacateco'
      ],
      regularOdds: 546.00,
      boostedOdds: 600.686,
      boost: '+10%'
    }
  ];

  const sports = [
    { name: 'Football', icon: '⚽', count: 47, active: true },
    { name: 'Basketball', icon: '🏀', count: 23 },
    { name: 'Tennis', icon: '🎾', count: 18 },
    { name: 'Baseball', icon: '⚾', count: 12 },
    { name: 'Hockey', icon: '🏒', count: 8 },
    { name: 'Boxing', icon: '🥊', count: 5 }
  ];

  const handleBetClick = (match: { 
    id: number; 
    homeTeam: string; 
    awayTeam: string; 
    odds: { [key: string]: number };
  }, betType: string) => {
    setSelectedMatch({ ...match, betType });
  };

  const formatOdds = (odds: number) => odds.toFixed(2);

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-12 h-12 text-yellow-500 mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">
              Live Matches
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Watch and bet live on the most exciting matches around the world
          </p>
          
          {/* Sports Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: 'Football', image: '/images/sports/football-stadium.webp' },
              { name: 'Basketball', image: '/images/sports/basketball-court.webp' },
              { name: 'Tennis', image: '/images/sports/tennis-match.webp' },
              { name: 'Boxing', image: '/images/sports/boxing-ring.webp' },
              { name: 'Soccer', image: '/images/sports/soccer-field.webp' },
              { name: 'Volleyball', image: '/images/sports/volleyball-net.webp' },
              { name: 'Hockey', image: '/images/sports/hockey-rink.webp' },
              { name: 'Golf', image: '/images/sports/golf-course.webp' }
            ].map((sport, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative w-full h-20 rounded-lg overflow-hidden">
                  <Image
                    src={sport.image}
                    alt={sport.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">{sport.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sports Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {sports.map((sport, index) => (
            <Card key={index} className={`cursor-pointer transition-all duration-200 hover:scale-105 ${sport.active ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'}`}>
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{sport.icon}</div>
                <h3 className="font-semibold text-sm">{sport.name}</h3>
                <Badge variant="secondary" className="mt-2">
                  {sport.count} matches
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white">
            <TabsTrigger value="live" className="flex items-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Live</span>
              <Badge className="bg-red-500">6</Badge>
            </TabsTrigger>
            <TabsTrigger value="today" className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Today</span>
              <Badge variant="secondary">168</Badge>
            </TabsTrigger>
            <TabsTrigger value="early" className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>Early</span>
              <Badge variant="secondary">484</Badge>
            </TabsTrigger>
            <TabsTrigger value="boost" className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Bet Boost</span>
              <Badge className="bg-yellow-500">HOT</Badge>
            </TabsTrigger>
          </TabsList>

          {/* Live Matches */}
          <TabsContent value="live" className="space-y-6">
            <Alert className="bg-red-50 border-red-200">
              <Activity className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800">Live</AlertTitle>
              <AlertDescription className="text-red-700">
                {liveMatches.length} matches currently in progress. Odds change constantly!
              </AlertDescription>
            </Alert>

            <div className="grid gap-6">
              {liveMatches.map((match) => (
                <Card key={match.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-red-500 animate-pulse">
                          🔴 LIVE
                        </Badge>
                        <span className="font-semibold">{match.league}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-sm">
                          <Users className="w-4 h-4" />
                          <span>{match.viewers.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {match.trend === 'up' ? (
                            <TrendingUp className="w-4 h-4 text-green-300" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-300" />
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                      {/* Match Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-center flex-1">
                            <div className="flex items-center justify-center mb-2">
                              <Avatar className="w-12 h-12 mr-3">
                                <AvatarFallback className="bg-blue-500 text-white font-bold">
                                  {match.homeTeam.split(' ')[0].substring(0, 2).toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <h3 className="font-bold text-lg">{match.homeTeam}</h3>
                            </div>
                          </div>
                          
                          <div className="text-center px-6">
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                              {match.homeScore} : {match.awayScore}
                            </div>
                            <Badge variant="outline" className="text-sm">
                              {match.time}
                            </Badge>
                          </div>
                          
                          <div className="text-center flex-1">
                            <div className="flex items-center justify-center mb-2">
                              <h3 className="font-bold text-lg mr-3">{match.awayTeam}</h3>
                              <Avatar className="w-12 h-12">
                                <AvatarFallback className="bg-red-500 text-white font-bold">
                                  {match.awayTeam.split(' ')[0].substring(0, 2).toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Betting Odds */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-center mb-3">Betting Odds</h4>
                        <div className="grid grid-cols-3 gap-2">
                          <Button
                            variant="outline"
                            className="flex flex-col h-16 hover:bg-blue-50"
                            onClick={() => handleBetClick(match, 'home')}
                          >
                            <span className="text-xs text-gray-500">Home</span>
                            <span className="font-bold text-lg">{formatOdds(match.odds.home)}</span>
                          </Button>
                          <Button
                            variant="outline"
                            className="flex flex-col h-16 hover:bg-gray-50"
                            onClick={() => handleBetClick(match, 'draw')}
                          >
                            <span className="text-xs text-gray-500">Draw</span>
                            <span className="font-bold text-lg">{formatOdds(match.odds.draw)}</span>
                          </Button>
                          <Button
                            variant="outline"
                            className="flex flex-col h-16 hover:bg-red-50"
                            onClick={() => handleBetClick(match, 'away')}
                          >
                            <span className="text-xs text-gray-500">Away</span>
                            <span className="font-bold text-lg">{formatOdds(match.odds.away)}</span>
                          </Button>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <BarChart3 className="w-4 h-4 mr-2" />
                          View More Odds
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Today Matches */}
          <TabsContent value="today" className="space-y-6">
            <div className="grid gap-4">
              {upcomingMatches.map((match) => (
                <Card key={match.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
                      <div>
                        <Badge variant="outline" className="mb-2">{match.league}</Badge>
                        <div className="text-sm text-gray-500">
                          {match.date} • {match.time}
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2 text-center">
                        <div className="flex items-center justify-center space-x-4">
                          <span className="font-semibold">{match.homeTeam}</span>
                          <span className="text-gray-400">vs</span>
                          <span className="font-semibold">{match.awayTeam}</span>
                        </div>
                        <Progress value={match.popularity} className="mt-2" />
                        <div className="text-xs text-gray-500 mt-1">
                          Popularity: {match.popularity}%
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <Button variant="outline" size="sm">
                          {formatOdds(match.odds.home)}
                        </Button>
                        <Button variant="outline" size="sm">
                          {formatOdds(match.odds.draw)}
                        </Button>
                        <Button variant="outline" size="sm">
                          {formatOdds(match.odds.away)}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Bet Boost */}
          <TabsContent value="boost" className="space-y-6">
            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800/30 shadow-sm">
              <Star className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100 font-semibold">Bet Boost</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Specially enhanced odds for attractive combo bets!
              </AlertDescription>
            </Alert>

            {betBoostMatches.map((boost, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-amber-50/30 dark:from-gray-900 dark:to-amber-950/10 border-2 border-amber-200 dark:border-amber-800/30 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-b border-amber-200 dark:border-amber-800/20">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center text-gray-900 dark:text-gray-100">
                      <Flame className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-2" />
                      Combo Bet Boost
                    </CardTitle>
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-md border-0">
                      {boost.boost}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    {boost.leagues.map((league, i) => (
                      <div key={i} className="bg-white dark:bg-gray-800/50 rounded-lg p-3 border border-gray-200 dark:border-gray-700 shadow-sm">
                        <Badge variant="outline" className="mb-2 border-amber-300 text-amber-800 dark:border-amber-600 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/30">{league}</Badge>
                        <p className="font-medium text-gray-900 dark:text-gray-100">{boost.matches[i]}</p>
                      </div>
                    ))}
                  </div>

                  <Separator className="bg-gray-200 dark:bg-gray-700" />

                  <div className="flex items-center justify-between bg-white dark:bg-gray-800/30 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Regular Odds</p>
                      <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{boost.regularOdds}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Boosted Odds</p>
                      <p className="text-xl font-bold text-amber-600 dark:text-amber-400">{boost.boostedOdds}</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold shadow-lg transform hover:scale-[1.02] transition-all duration-200 border-0">
                    <Target className="w-4 h-4 mr-2" />
                    Place Boost Bet
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Early Matches */}
          <TabsContent value="early" className="space-y-6">
            <ScrollArea className="h-96">
              <div className="space-y-4 pr-4">
                {Array.from({ length: 10 }).map((_, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>

        {/* Selected Bet Modal Info */}
        {selectedMatch && (
          <Card className="mt-8 border-2 border-blue-500 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Selected Bet Slip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">
                    {selectedMatch.homeTeam} vs {selectedMatch.awayTeam}
                  </p>
                  <p className="text-sm text-gray-600">
                    Bet Type: {selectedMatch.betType === 'home' ? 'Home Win' : selectedMatch.betType === 'draw' ? 'Draw' : 'Away Win'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">
                    {formatOdds(selectedMatch.odds[selectedMatch.betType])}
                  </p>
                  <Button size="sm" onClick={() => setSelectedMatch(null)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default LiveMatches;
