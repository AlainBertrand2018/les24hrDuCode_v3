'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const mockLiveFeed = [
  {
    id: 1,
    author: '24hr du Code Staff',
    avatar: '/images/24hr_logo.webp',
    text: '🎉 The opening keynote is about to begin! Find a seat and get ready for an amazing start to the event. #24hrducode',
    timestamp: '2m ago',
  },
  {
    id: 2,
    author: 'Team Code Wizards',
    avatar: 'https://picsum.photos/seed/1/40',
    text: 'Just pushed our initial commit for Project Phoenix! The idea is starting to take shape. The energy here is incredible! 🚀 #Mauritius',
    timestamp: '5m ago',
  },
  {
    id: 3,
    author: 'Sarah Chen (Mentor)',
    avatar: 'https://picsum.photos/seed/mentor1/200',
    text: 'Great chat with Cybernetic Dolphins about their decentralized social network concept. Very ambitious and cool tech stack! #Web3',
    timestamp: '15m ago',
  },
];


export default function LiveFeedPage() {

  return (
    <div className="flex flex-col">
        {/* Media Player Section */}
        <section className="w-full bg-black">
             {/* In a real scenario, this would be a live video stream component */}
            <div className="aspect-video w-full max-w-6xl mx-auto bg-black flex items-center justify-center">
                 <video
                    className="w-full h-full object-contain"
                    src="https://storage.googleapis.com/test-utils-public/Les24hrducode_expl_en_opt.mp4"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>
        </section>

        {/* Live Feed Section */}
        <section id="feed" className="w-full py-12 md:py-20 bg-background">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                 <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Live Updates</h2>
                    <p className="text-muted-foreground md:text-lg">
                        Follow the real-time buzz from the event floor.
                    </p>
                </div>
                <div className="space-y-6">
                    {mockLiveFeed.map(item => (
                        <Card key={item.id} className="bg-card">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={item.avatar} />
                                    <AvatarFallback>{item.author.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <CardTitle className="text-base font-semibold">{item.author}</CardTitle>
                                    <p className="text-xs text-muted-foreground">{item.timestamp}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-foreground/90">{item.text}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
}
