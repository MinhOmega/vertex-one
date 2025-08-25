"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { Separator } from '@/components/ui/separator';
import { Menu, Globe, Home, TrendingUp, Gamepad2, Dice6, Trophy, LogIn } from 'lucide-react';

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
    { icon: TrendingUp, label: 'Cá Cược Thể Thao', href: '#sports', active: true },
    { icon: Trophy, label: 'Tỷ Số Trực Tuyến', href: '#livescore' },
    { icon: Gamepad2, label: 'Sòng Bạc Trực Tiếp', href: '#casino' },
    { icon: Dice6, label: 'Máy Xèng', href: '#slots' },
  ];

  const sportsItems = [
    { icon: '⚽', label: 'Bóng Đá', href: '#football' },
    { icon: '🎾', label: 'Quần Vợt', href: '#tennis' },
    { icon: '⚾', label: 'Bóng Chày', href: '#baseball' },
    { icon: '🏈', label: 'Bóng Bầu Dục Mỹ', href: '#american-football' },
    { icon: '🥊', label: 'Quyền Anh', href: '#boxing' },
    { icon: '🥋', label: 'MMA', href: '#mma' },
    { icon: '🏉', label: 'Rugby', href: '#rugby' },
    { icon: '🏒', label: 'Khúc Côn Cầu', href: '#hockey' },
    { icon: '🎱', label: 'Snooker', href: '#snooker' },
    { icon: '🏸', label: 'Cầu Lông', href: '#badminton' },
    { icon: '🏏', label: 'Cricket', href: '#cricket' },
    { icon: '🤾', label: 'Bóng ném', href: '#handball' },
    { icon: '🏀', label: 'Bóng Rổ', href: '#basketball' },
    { icon: '🏐', label: 'Bóng Chuyền', href: '#volleyball' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="bg-white rounded-lg p-2">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold">VERTEX ONE</h1>
                <p className="text-xs text-blue-100">Premium Gaming Platform</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {mainNavItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Button
                    variant={item.active ? "secondary" : "ghost"}
                    className={`flex items-center space-x-2 ${
                      item.active 
                        ? 'bg-white text-blue-600 hover:bg-blue-50' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Selector & Login */}
          <div className="flex items-center space-x-3">
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 text-white hover:bg-white/10">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">🇻🇳 Tiếng Việt</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} className="flex items-center space-x-3 cursor-pointer">
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Button */}
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <LogIn className="h-4 w-4 mr-2" />
              Đăng Nhập
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm" className="text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gradient-to-b from-blue-600 to-purple-600 text-white">
                <div className="flex flex-col h-full">
                  <div className="space-y-4 py-4">
                    <div className="px-3 py-2">
                      <h2 className="mb-2 text-lg font-semibold">Menu</h2>
                      <div className="space-y-2">
                        {mainNavItems.map((item, index) => (
                          <Button
                            key={index}
                            variant={item.active ? "secondary" : "ghost"}
                            className={`w-full justify-start ${
                              item.active ? 'bg-white text-blue-600' : 'text-white hover:bg-white/10'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.label}
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

        {/* Sports Submenu */}
        <div className="hidden lg:block">
          <Separator className="bg-white/20" />
          <div className="py-3">
            <div className="flex flex-wrap gap-2">
              {sportsItems.map((sport, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 transition-all duration-200 hover:scale-105"
                >
                  <span className="mr-2 text-base">{sport.icon}</span>
                  <span className="text-xs">{sport.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-red-500 text-white animate-pulse">
            🔴 LIVE
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Header;
