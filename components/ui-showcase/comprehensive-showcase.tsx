"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { 
  Star,
  Heart,
  ThumbsUp,
  MessageCircle,
  Share2,
  ChevronRight,
  Settings,
  User,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  EyeOff,
  Edit,
  Trash,
  Plus,
  Minus,
  Check,
  X,
  AlertTriangle,
  Info,
  HelpCircle,
  Palette,
  Zap,
  Crown,
  Gift,
  Trophy,
  Target,
  Flame,
  Sparkles
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ComprehensiveShowcase = () => {
  const [progress, setProgress] = useState(75);
  const [sliderValue, setSliderValue] = useState([50]);
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      message: ''
    }
  });

  const handleSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Form submitted successfully!');
    }, 2000);
  };

  const features = [
    { icon: Star, title: 'Premium Quality', desc: 'Top-tier components' },
    { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance' },
    { icon: Crown, title: 'Elite Experience', desc: 'Luxury feel' },
    { icon: Trophy, title: 'Award Winning', desc: 'Industry recognized' }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Frontend Developer',
      avatar: 'AJ',
      rating: 5,
      comment: 'Amazing component library! Very easy to use and customize.',
      company: 'TechCorp'
    },
    {
      name: 'Sarah Chen',
      role: 'UI Designer',
      avatar: 'SC',
      rating: 5,
      comment: 'Beautiful design system with great accessibility features.',
      company: 'DesignStudio'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Product Manager',
      avatar: 'MR',
      rating: 4,
      comment: 'Helped us ship faster with consistent design patterns.',
      company: 'StartupInc'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-purple-500 mr-4 animate-pulse" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              UI Components Showcase
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá bộ sưu tập đầy đủ các components UI hiện đại, được thiết kế để tạo ra những trải nghiệm người dùng tuyệt vời
          </p>
        </div>

        <Tabs defaultValue="basic" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white shadow-lg">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="interactive">Interactive</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          {/* Basic Components */}
          <TabsContent value="basic" className="space-y-8">
            {/* Buttons Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-500" />
                  Buttons & Actions
                </CardTitle>
                <CardDescription>
                  Various button styles and states for different use cases
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                </div>
                
                <Separator />
                
                <div className="flex flex-wrap gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button disabled>Disabled</Button>
                  <Button loading={loading} onClick={() => setLoading(!loading)}>
                    {loading ? 'Loading...' : 'Toggle Loading'}
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-500">
                    <Heart className="w-4 h-4 mr-2" />
                    Gradient
                  </Button>
                  <Button className="bg-gradient-to-r from-green-400 to-blue-500">
                    <Zap className="w-4 h-4 mr-2" />
                    Electric
                  </Button>
                  <Button className="bg-gradient-to-r from-yellow-400 to-red-500">
                    <Flame className="w-4 h-4 mr-2" />
                    Fire
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Badges & Avatars */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Badges & Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Error</Badge>
                    <Badge className="bg-green-500">Success</Badge>
                    <Badge className="bg-yellow-500 text-black">Warning</Badge>
                    <Badge className="bg-purple-500">Premium</Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge className="animate-pulse bg-red-500">🔴 Live</Badge>
                    <Badge className="animate-bounce bg-blue-500">🎯 New</Badge>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black">⭐ Hot</Badge>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">👑 VIP</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Avatars & Users</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback className="bg-blue-500 text-white">AS</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">VIP</AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="space-y-3">
                    {testimonials.slice(0, 2).map((user, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            {user.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.role}</p>
                        </div>
                        <div className="flex">
                          {Array.from({ length: user.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress & Sliders */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Progress & Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Download Progress</span>
                      <span className="text-sm text-gray-500">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Upload Progress</span>
                      <span className="text-sm text-gray-500">65%</span>
                    </div>
                    <Progress value={65} className="h-3" />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Volume: {sliderValue[0]}</Label>
                    <Slider
                      value={sliderValue}
                      onValueChange={setSliderValue}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button onClick={() => setProgress(Math.max(0, progress - 10))}>
                      <Minus className="w-4 h-4 mr-2" />
                      Decrease
                    </Button>
                    <Button onClick={() => setProgress(Math.min(100, progress + 10))}>
                      <Plus className="w-4 h-4 mr-2" />
                      Increase
                    </Button>
                    <Button onClick={() => setProgress(Math.floor(Math.random() * 100))}>
                      <Target className="w-4 h-4 mr-2" />
                      Random
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interactive Components */}
          <TabsContent value="interactive" className="space-y-8">
            {/* Dropdowns & Menus */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Dropdowns & Menus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Bell className="w-4 h-4 mr-2" />
                        Notifications
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">
                          <HelpCircle className="w-4 h-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is a helpful tooltip!</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Example Dialog</DialogTitle>
                        <DialogDescription>
                          This is a modal dialog example. You can put any content here.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p>This is some example content in the dialog.</p>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline">Cancel</Button>
                          <Button>Confirm</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">Open Sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Side Panel</SheetTitle>
                        <SheetDescription>
                          This is a slide-out panel from the right side.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="mt-6 space-y-4">
                        <p>You can put forms, content, or navigation here.</p>
                        <Button className="w-full">Action Button</Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </CardContent>
            </Card>

            {/* Carousel */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Carousel</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {features.map((feature, index) => (
                      <CarouselItem key={index}>
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div className="text-center space-y-2">
                              <feature.icon className="w-12 h-12 mx-auto text-blue-500" />
                              <h3 className="font-semibold">{feature.title}</h3>
                              <p className="text-sm text-gray-500">{feature.desc}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>

            {/* Accordion */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is this component library?</AccordionTrigger>
                    <AccordionContent>
                      This is a comprehensive UI component library built with React and Tailwind CSS, 
                      designed to help developers create beautiful and accessible user interfaces quickly.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I install it?</AccordionTrigger>
                    <AccordionContent>
                      You can install individual components using the CLI tool, or install the entire
                      library via npm. Check the documentation for detailed installation instructions.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it customizable?</AccordionTrigger>
                    <AccordionContent>
                      Yes! All components are highly customizable through CSS variables and Tailwind 
                      classes. You can easily adapt them to match your brand and design system.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedback Components */}
          <TabsContent value="feedback" className="space-y-8">
            <div className="grid gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Alerts & Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      This is an informational alert with neutral styling.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-green-200 bg-green-50">
                    <Check className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">Success</AlertTitle>
                    <AlertDescription className="text-green-700">
                      Your action was completed successfully!
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-yellow-200 bg-yellow-50">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-800">Warning</AlertTitle>
                    <AlertDescription className="text-yellow-700">
                      Please review your input before proceeding.
                    </AlertDescription>
                  </Alert>

                  <Alert variant="destructive">
                    <X className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Something went wrong. Please try again.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Loading States</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Skeleton Loading</h3>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-4/5" />
                      <Skeleton className="h-4 w-3/5" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Loading Cards</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <div className="flex items-center space-x-4">
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="space-y-2">
                              <Skeleton className="h-4 w-24" />
                              <Skeleton className="h-3 w-16" />
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-2/3" />
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="space-y-2">
                              <Skeleton className="h-8 w-20" />
                              <Skeleton className="h-4 w-16" />
                            </div>
                            <Skeleton className="h-10 w-20" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Forms */}
          <TabsContent value="forms" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Form Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Enter your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input 
                        type={isVisible ? "text" : "password"} 
                        id="password" 
                        placeholder="Enter your password" 
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setIsVisible(!isVisible)}
                      >
                        {isVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Type your message here..." />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="rounded" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions
                    </Label>
                  </div>
                  
                  <Button className="w-full">Submit Form</Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Interactive Elements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Action Buttons</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Social Actions</h3>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <ThumbsUp className="w-4 h-4 mr-2" />
                        125
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        43
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Filter Controls</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-between">
                        <span>Filter by Category</span>
                        <Filter className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between">
                        <span>Sort by Date</span>
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    onClick={() => toast.success('Button clicked!')}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Show Toast
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Advanced */}
          <TabsContent value="advanced" className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Scroll Area</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-72 w-full rounded border p-4">
                  <div className="space-y-4">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <Card key={i} className="p-4">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>U{i + 1}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">User {i + 1}</p>
                            <p className="text-sm text-gray-500">This is a scrollable item #{i + 1}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Complex Layout</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6 text-center">
                        <feature.icon className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                        <h3 className="font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{feature.desc}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ComprehensiveShowcase;
