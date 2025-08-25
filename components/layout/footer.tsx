"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Home,
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Shield,
  Award,
  Clock,
  Users,
  Star,
  Heart,
  Zap
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    "About Vertex One": [
      "About Us",
      "Login",
      "Contact",
      "Careers"
    ],
    "Sports Betting": [
      "Premier League (EPL)",
      "MLS",
      "Bundesliga",
      "Serie A",
      "La Liga",
      "Ligue 1",
      "Champions League",
      "World Cup"
    ],
    "Live Casino": [
      "Baccarat",
      "Blackjack",
      "Roulette",
      "Poker",
      "Slot Games",
      "Live Casino"
    ],
    "Support": [
      "Help Center",
      "FAQ",
      "Guides",
      "Contact Support"
    ]
  };

  const licenses = [
    { name: "Malta Gaming Authority", logo: "🏛️" },
    { name: "UK Gambling Commission", logo: "🇬🇧" },
    { name: "Curacao eGaming", logo: "🎯" },
    { name: "BMM Testlabs Certified", logo: "✅" }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Youtube, name: "YouTube", href: "#" }
  ];

  const features = [
    { icon: Shield, text: "SSL 256-bit Security" },
    { icon: Clock, text: "24/7 Support" },
    { icon: Zap, text: "Fast Withdrawal 5 Minutes" },
    { icon: Award, text: "Legally Licensed" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-3">
                <Home className="h-8 w-8 text-black" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  VERTEX ONE
                </h2>
                <p className="text-sm text-gray-400">Premium Gaming Platform</p>
              </div>
            </div>
            
             <p className="text-gray-300 text-sm leading-relaxed">
               Experience world-class sports betting and casino with
               the best odds, absolute security and excellent customer service.
             </p>
            
            {/* Features */}
            <div className="space-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  <feature.icon className="w-4 h-4 text-green-400" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  size="sm" 
                  className="border-gray-600 text-gray-300 hover:bg-white hover:text-black transition-all duration-200"
                  aria-label={`Visit our ${social.name} page`}
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-lg text-yellow-400">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-yellow-400 text-sm transition-colors duration-200 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Licenses Section */}
        <div className="space-y-6">
           <h3 className="text-center font-bold text-lg text-yellow-400">
             Licenses & Certifications
           </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {licenses.map((license, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{license.logo}</div>
                  <p className="text-xs text-gray-300">{license.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Contact & Stats */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
             <h3 className="font-bold text-lg text-yellow-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+84 927 363 782</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">support@vertexone.vn</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">Hà Nội, Việt Nam</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">https://vertex-one-sandy.vercel.app/</span>
              </div>
            </div>
          </div>

          {/* Live Stats */}
          <div className="space-y-4">
             <h3 className="font-bold text-lg text-yellow-400">Live Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Users className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <p className="text-xl font-bold">24,857</p>
                   <p className="text-xs text-gray-300">Online Players</p>
                 </CardContent>
               </Card>
               <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                 <CardContent className="p-4 text-center">
                   <Star className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                   <p className="text-xl font-bold">4.9</p>
                   <p className="text-xs text-gray-300">Average Rating</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* About Section */}
        <div className="text-center space-y-4">
           <h3 className="font-bold text-lg text-yellow-400">About Vertex One Gaming</h3>
           <p className="text-gray-300 text-sm max-w-4xl mx-auto leading-relaxed">
             Vertex One was founded in 2024 with the mission to bring the best betting
             experience to players. We provide a wide range of sports betting,
             online casino, and slot games with the most competitive odds in the market.
             With our experienced team and modern technology system,
             Vertex One is committed to providing a safe, transparent and exciting betting environment.
           </p>
          
          <div className="flex justify-center space-x-6">
             <Badge className="bg-green-600">
               <Shield className="w-3 h-3 mr-1" />
               100% Safe
             </Badge>
             <Badge className="bg-blue-600">
               <Award className="w-3 h-3 mr-1" />
               Licensed
             </Badge>
             <Badge className="bg-purple-600">
               <Heart className="w-3 h-3 mr-1" />
               Trusted
             </Badge>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
             <p className="text-gray-300 text-sm text-center md:text-left">
               © {currentYear} Vertex One. All rights reserved.
               <span className="mx-2">•</span>
               <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Use</a>
               <span className="mx-2">•</span>
               <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
               <span className="mx-2">•</span>
               <a href="#" className="hover:text-yellow-400 transition-colors">Responsible Gaming</a>
             </p>
            
            <div className="flex items-center space-x-2">
              <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
              <div className="w-6 h-4 bg-yellow-400 rounded-sm"></div>
              <span className="text-xs text-gray-300">Chỉ dành cho 18+</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
