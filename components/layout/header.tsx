"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import {
  Menu,
  Globe,
  Home,
  TrendingUp,
  Gamepad2,
  Dice6,
  Trophy,
  LogIn
} from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'vn', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'th', name: 'ภาษาไทย', flag: '🇹🇭' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'km', name: 'ភាសាខ្មែរ', flag: '🇰🇭' },
    { code: 'la', name: 'ລາວ', flag: '🇱🇦' },
    { code: 'mm', name: 'မြန်မာ', flag: '🇲🇲' },
    { code: 'cn', name: '简体中文', flag: '🇨🇳' },
  ];

  const mainNavItems = [
    {
      icon: TrendingUp,
      label: 'Sports Betting',
      href: '#sports',
      active: true,
      description: 'Sports betting with the best odds'
    },
    {
      icon: Trophy,
      label: 'Live Scores',
      href: '#livescore',
      description: 'Track live scores of matches'
    },
    {
      icon: Gamepad2,
      label: 'Live Casino',
      href: '#casino',
      description: 'Online casino with real dealers'
    },
    {
      icon: Dice6,
      label: 'Slot Machines',
      href: '#slots',
      description: 'Thousands of slot games with huge jackpots'
    },
  ];

  const sportsItems = [
    { icon: '⚽', label: 'Football', href: '#football' },
    { icon: '🎾', label: 'Tennis', href: '#tennis' },
    { icon: '⚾', label: 'Baseball', href: '#american-football' },
    { icon: '🏈', label: 'American Football', href: '#american-football' },
    { icon: '🥊', label: 'Boxing', href: '#boxing' },
    { icon: '🥋', label: 'MMA', href: '#mma' },
    { icon: '🏉', label: 'Rugby', href: '#rugby' },
    { icon: '🏒', label: 'Hockey', href: '#hockey' },
    { icon: '🎱', label: 'Snooker', href: '#snooker' },
    { icon: '🏸', label: 'Badminton', href: '#badminton' },
    { icon: '🏏', label: 'Cricket', href: '#cricket' },
    { icon: '🤾', label: 'Handball', href: '#handball' },
    { icon: '🏀', label: 'Basketball', href: '#basketball' },
    { icon: '🏐', label: 'Volleyball', href: '#volleyball' },
  ];



  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-border gaming-gradient backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="bg-card border border-border rounded-lg p-2 shadow-sm">
                <Home className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <div className="text-foreground">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  VERTEX ONE
                </h1>
                <p className="text-xs text-muted-foreground">Premium Gaming Platform</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex" role="navigation" aria-label="Main navigation">
            <NavigationMenuList className="space-x-2">
              {mainNavItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Button
                    variant={item.active ? "default" : "ghost"}
                    className={`flex items-center space-x-2 transition-all duration-200 ${
                      item.active 
                        ? 'bg-card text-card-foreground hover:bg-card/90 shadow-md' 
                        : 'text-foreground hover:bg-muted hover:text-accent-foreground'
                    }`}
                    aria-label={item.description}
                    aria-current={item.active ? "page" : undefined}
                  >
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                    <span className="font-medium">{item.label}</span>
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">


            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex items-center space-x-2 text-foreground hover:bg-muted"
                  aria-label="Select language"
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline font-medium">🇻🇳 Tiếng Việt</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    className="flex items-center space-x-3 cursor-pointer focus:bg-accent focus:text-accent-foreground"
                  >
                    <span className="text-lg" aria-hidden="true">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Button */}
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
              aria-label="Login to your account"
            >
              <LogIn className="h-4 w-4 mr-2" aria-hidden="true" />
              Login
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-foreground"
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-80 bg-card text-card-foreground border-border"
                aria-labelledby="mobile-menu-title"
              >
                <div className="flex flex-col h-full">
                  <div className="space-y-4 py-4">
                    <div className="px-3 py-2">
                      <h2 id="mobile-menu-title" className="mb-4 text-lg font-semibold text-foreground">
                        Menu
                      </h2>
                      <nav className="space-y-2" role="navigation" aria-label="Mobile navigation">
                        {mainNavItems.map((item, index) => (
                          <Button
                            key={index}
                            variant={item.active ? "default" : "ghost"}
                            className={`w-full justify-start ${
                              item.active 
                                ? 'bg-primary text-primary-foreground' 
                                : 'text-foreground hover:bg-muted'
                            }`}
                            onClick={() => setIsOpen(false)}
                            aria-label={item.description}
                            aria-current={item.active ? "page" : undefined}
                          >
                            <item.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                            {item.label}
                          </Button>
                        ))}
                      </nav>
                    </div>
                    
                    <Separator className="bg-border" />

                    {/* Mobile Sports Menu */}
                    <div className="px-3 py-2">
                      <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
                        Sports
                      </h3>
                      <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                        {sportsItems.map((sport, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            className="justify-start text-foreground hover:bg-muted text-xs p-2 h-auto"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="mr-2" aria-hidden="true">{sport.icon}</span>
                            <span className="truncate">{sport.label}</span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Sports Submenu - Desktop Only */}
        <div className="hidden lg:block">
          <Separator className="bg-border/50" />
          <div className="py-3">
            <nav 
              className="flex flex-wrap gap-2" 
              role="navigation" 
              aria-label="Sports navigation"
            >
              {sportsItems.map((sport, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:bg-muted hover:text-accent-foreground transition-all duration-200 hover:scale-105"
                  aria-label={`Navigate to ${sport.label}`}
                >
                  <span className="mr-2 text-base" aria-hidden="true">{sport.icon}</span>
                  <span className="text-xs font-medium">{sport.label}</span>
                </Button>
              ))}
            </nav>
          </div>
        </div>

        {/* Live Badge */}
        <div className="absolute top-4 right-4 hidden md:block">
          <Badge 
            className="bg-destructive text-destructive-foreground animate-pulse shadow-lg"
            aria-label="Live indicator"
          >
            <span className="w-2 h-2 bg-current rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
            LIVE
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Header;