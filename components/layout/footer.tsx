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
    "Về Vertex One": [
      "Giới Thiệu",
      "Vertex One Đăng Nhập",
      "Liên Hệ",
      "Tuyển Dụng"
    ],
    "Cá Cược Thể Thao": [
      "Giải Ngoại Hạng Anh (EPL)",
      "Giải Bóng Đá Nhà Nghề Mỹ (MLS)",
      "Bundesliga Đức",
      "Serie A Ý",
      "La Liga Tây Ban Nha",
      "Ligue 1 Pháp",
      "Champions League",
      "World Cup"
    ],
    "Sòng Bạc Trực Tuyến": [
      "Baccarat",
      "Blackjack",
      "Roulette",
      "Poker",
      "Slot Games",
      "Live Casino"
    ],
    "Hỗ Trợ": [
      "Trung Tâm Trợ Giúp",
      "Câu Hỏi Thường Gặp",
      "Hướng Dẫn",
      "Liên Hệ Hỗ Trợ"
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
    { icon: Shield, text: "Bảo Mật SSL 256-bit" },
    { icon: Clock, text: "Hỗ Trợ 24/7" },
    { icon: Zap, text: "Rút Tiền Nhanh 5 Phút" },
    { icon: Award, text: "Được Cấp Phép Hợp Pháp" }
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
              Trải nghiệm cá cược thể thao và casino đẳng cấp thế giới với 
              tỷ lệ cược tốt nhất, bảo mật tuyệt đối và dịch vụ khách hàng xuất sắc.
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
            Giấy Phép & Chứng Nhận
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
            <h3 className="font-bold text-lg text-yellow-400">Liên Hệ</h3>
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
                <span className="text-gray-300">www.vertexone.vn</span>
              </div>
            </div>
          </div>

          {/* Live Stats */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-yellow-400">Thống Kê Trực Tuyến</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Users className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <p className="text-xl font-bold">24,857</p>
                  <p className="text-xs text-gray-400">Người chơi online</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Star className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                  <p className="text-xl font-bold">4.9</p>
                  <p className="text-xs text-gray-400">Đánh giá trung bình</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* About Section */}
        <div className="text-center space-y-4">
          <h3 className="font-bold text-lg text-yellow-400">Về Vertex One Gaming</h3>
          <p className="text-gray-300 text-sm max-w-4xl mx-auto leading-relaxed">
            Vertex One được thành lập vào năm 2024 với sứ mệnh mang đến trải nghiệm cá cược 
            tuyệt vời nhất cho người chơi Việt Nam. Chúng tôi cung cấp đa dạng các sản phẩm 
            cá cược thể thao, casino trực tuyến, và slot games với tỷ lệ cược cạnh tranh nhất thị trường. 
            Với đội ngũ chuyên gia giàu kinh nghiệm và hệ thống công nghệ hiện đại, 
            Vertex One cam kết mang đến môi trường cá cược an toàn, minh bạch và thú vị.
          </p>
          
          <div className="flex justify-center space-x-6">
            <Badge className="bg-green-500">
              <Shield className="w-3 h-3 mr-1" />
              An Toàn 100%
            </Badge>
            <Badge className="bg-blue-500">
              <Award className="w-3 h-3 mr-1" />  
              Được Cấp Phép
            </Badge>
            <Badge className="bg-purple-500">
              <Heart className="w-3 h-3 mr-1" />
              Đáng Tin Cậy
            </Badge>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Vertex One. Bảo lưu mọi quyền. 
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors">Điều Khoản Sử Dụng</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors">Chính Sách Bảo Mật</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors">Cờ Bạc Có Trách Nhiệm</a>
            </p>
            
            <div className="flex items-center space-x-2">
              <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
              <div className="w-6 h-4 bg-yellow-400 rounded-sm"></div>
              <span className="text-xs text-gray-400">Chỉ dành cho 18+</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
