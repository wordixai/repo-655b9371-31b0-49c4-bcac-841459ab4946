import React, { useState } from 'react';
import { Search, Home, Bell, Mail, Bookmark, Users, Zap, User, MoreHorizontal, Image, Calendar, MapPin, Smile, RefreshCw, MessageCircle, Repeat2, Heart, Share, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Index = () => {
  const [tweetText, setTweetText] = useState('');

  const sidebarItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Explore' },
    { icon: Bell, label: 'Notifications' },
    { icon: Mail, label: 'Messages' },
    { icon: Zap, label: 'Grok' },
    { icon: Bookmark, label: 'Bookmarks' },
    { icon: Users, label: 'Communities' },
    { icon: X, label: 'Premium' },
    { icon: Zap, label: 'Verified Orgs' },
    { icon: User, label: 'Profile' },
    { icon: MoreHorizontal, label: 'More' }
  ];

  const tweets = [
    {
      id: 1,
      user: {
        name: 'Narendra Modi',
        handle: 'narendramodi',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        verified: true
      },
      content: 'Always a delight to meet President Putin!',
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=300&fit=crop',
      time: '1h',
      replies: 7500,
      retweets: 35000,
      likes: 317000,
      views: '15M'
    }
  ];

  const newsItems = [
    {
      title: 'Manchester United Nab €21m Belgian Keeper Senne Lammens in Deadline Dash',
      category: 'Sports',
      time: '6 hours ago',
      posts: '78.3K posts'
    },
    {
      title: 'Bayer Leverkusen Sacks Erik ten Hag After Two Disastrous Matches',
      category: 'Sports', 
      time: '19 hours ago',
      posts: '152.4K posts'
    },
    {
      title: 'Aston Villa Nab Harvey Elliott in £35m Deadline Day Coup',
      category: 'Sports',
      time: '5 hours ago', 
      posts: '27.1K posts'
    }
  ];

  const trendingItems = [
    {
      location: 'Trending in Singapore',
      topic: 'Grab',
      posts: '187K posts'
    },
    {
      location: 'Sports · Trending',
      topic: 'Gyokeres',
      posts: ''
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Sidebar */}
      <div className="w-64 px-4 py-4 border-r border-gray-800 fixed h-full">
        <div className="mb-8">
          <X className="w-8 h-8" />
        </div>
        
        <nav className="space-y-1">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 transition-colors ${
                item.active ? 'font-bold' : ''
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xl">{item.label}</span>
            </a>
          ))}
        </nav>

        <Button className="w-full bg-blue-500 hover:bg-blue-600 rounded-full py-3 mt-8 text-lg font-bold">
          Post
        </Button>

        <div className="mt-auto pt-4">
          <div className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 cursor-pointer">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
              <AvatarFallback>LW</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-semibold">laiwu</div>
              <div className="text-gray-500 text-sm">@haitaowu18</div>
            </div>
            <MoreHorizontal className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 max-w-2xl border-r border-gray-800">
        {/* Header Tabs */}
        <div className="sticky top-0 bg-black/80 backdrop-blur border-b border-gray-800">
          <Tabs defaultValue="for-you" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-transparent border-none h-14">
              <TabsTrigger 
                value="for-you" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none font-semibold"
              >
                For you
              </TabsTrigger>
              <TabsTrigger 
                value="following"
                className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none font-semibold"
              >
                Following
              </TabsTrigger>
              <TabsTrigger 
                value="lovable"
                className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none font-semibold"
              >
                Lovable
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Tweet Composer */}
        <div className="border-b border-gray-800 p-4">
          <div className="flex space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <textarea
                value={tweetText}
                onChange={(e) => setTweetText(e.target.value)}
                placeholder="What's happening?"
                className="w-full bg-transparent text-xl placeholder-gray-500 border-none outline-none resize-none min-h-[120px]"
              />
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-4 text-blue-400">
                  <Image className="w-5 h-5 cursor-pointer hover:bg-gray-900 p-0.5 rounded" />
                  <Calendar className="w-5 h-5 cursor-pointer hover:bg-gray-900 p-0.5 rounded" />
                  <Smile className="w-5 h-5 cursor-pointer hover:bg-gray-900 p-0.5 rounded" />
                  <MapPin className="w-5 h-5 cursor-pointer hover:bg-gray-900 p-0.5 rounded" />
                </div>
                
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 rounded-full px-6 font-bold"
                  disabled={!tweetText.trim()}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tweet Feed */}
        <div>
          {tweets.map((tweet) => (
            <article key={tweet.id} className="border-b border-gray-800 p-4 hover:bg-gray-950 cursor-pointer">
              <div className="flex space-x-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={tweet.user.avatar} />
                  <AvatarFallback>{tweet.user.name[0]}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-bold">{tweet.user.name}</span>
                    {tweet.user.verified && (
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    )}
                    <span className="text-gray-500">@{tweet.user.handle}</span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-500">{tweet.time}</span>
                    <div className="ml-auto flex items-center space-x-2">
                      <RefreshCw className="w-4 h-4 text-gray-500" />
                      <MoreHorizontal className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                  
                  <p className="text-white mb-3">{tweet.content}</p>
                  
                  {tweet.image && (
                    <div className="rounded-2xl overflow-hidden mb-3">
                      <img 
                        src={tweet.image} 
                        alt="Tweet image" 
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between max-w-md text-gray-500">
                    <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{tweet.replies.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 hover:text-green-400 cursor-pointer">
                      <Repeat2 className="w-5 h-5" />
                      <span className="text-sm">{tweet.retweets.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 hover:text-red-400 cursor-pointer">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">{tweet.likes.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <div className="w-3 h-3 border border-current rounded"></div>
                        <div className="w-2 h-2 border-l border-t border-current -ml-1.5"></div>
                      </div>
                      <span className="text-sm">{tweet.views}</span>
                    </div>
                    
                    <Share className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
                    <Bookmark className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Ad Tweet */}
          <article className="border-b border-gray-800 p-4 hover:bg-gray-950 cursor-pointer">
            <div className="flex items-center space-x-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=32&h=32&fit=crop" />
                <AvatarFallback>IB</AvatarFallback>
              </Avatar>
              <span className="font-bold">Interactive Brokers</span>
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-500">@IBKR</span>
              <span className="text-blue-500 text-sm">Ad</span>
              <div className="ml-auto">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </div>
            </div>
            
            <p className="text-white mb-3">Did you know most brokers charge hidden FX fees on US stock trades? IBKR has low FX fees, so you keep more of what's yours.</p>
            
            <div className="bg-gray-900 rounded-2xl p-6 text-center">
              <div className="text-white text-2xl font-bold mb-2">Other Brokers Have High Hidden</div>
              <div className="text-white text-2xl font-bold mb-2">FX Fees on US Stock Trades</div>
              <div className="text-3xl font-bold text-white mb-4">We Don't</div>
            </div>
          </article>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 p-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
          <Input 
            placeholder="Search"
            className="pl-12 bg-gray-900 border-gray-700 rounded-full"
          />
        </div>

        {/* Subscribe to Premium */}
        <Card className="bg-gray-900 border-gray-700">
          <CardContent className="p-4">
            <h3 className="font-bold text-xl mb-2">Subscribe to Premium</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
            <Button className="bg-blue-500 hover:bg-blue-600 rounded-full font-bold">
              Subscribe
            </Button>
          </CardContent>
        </Card>

        {/* Today's News */}
        <Card className="bg-gray-900 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xl">Today's News</h3>
              <X className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
            
            <div className="space-y-3">
              {newsItems.map((item, index) => (
                <div key={index} className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                  <h4 className="font-semibold text-sm leading-tight mb-1">{item.title}</h4>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Avatar className="w-4 h-4">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=16&h=16&fit=crop&crop=face" />
                    </Avatar>
                    <span>{item.time}</span>
                    <span>·</span>
                    <span>{item.category}</span>
                    <span>·</span>
                    <span>{item.posts}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* What's happening */}
        <Card className="bg-gray-900 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xl">What's happening</h3>
              <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
            
            <div className="space-y-3">
              {trendingItems.map((item, index) => (
                <div key={index} className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                  <p className="text-xs text-gray-500">{item.location}</p>
                  <h4 className="font-bold">{item.topic}</h4>
                  {item.posts && <p className="text-xs text-gray-500">{item.posts}</p>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;