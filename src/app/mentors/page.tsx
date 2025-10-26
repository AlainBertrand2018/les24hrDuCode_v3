'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const mockMentors = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'Principal Engineer @ Google',
    avatarUrl: 'https://picsum.photos/seed/mentor1/200',
  },
  {
    id: '2',
    name: 'David Lee',
    title: 'UX Lead @ Microsoft',
    avatarUrl: 'https://picsum.photos/seed/mentor2/200',
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    title: 'AI Researcher @ OpenAI',
    avatarUrl: 'https://picsum.photos/seed/mentor3/200',
  },
  {
    id: '4',
    name: 'Tom Brighton',
    title: 'Senior Developer Advocate @ AWS',
    avatarUrl: 'https://picsum.photos/seed/mentor4/200',
  },
  {
    id: '5',
    name: 'Aisha Khan',
    title: 'Cybersecurity Expert',
    avatarUrl: 'https://picsum.photos/seed/mentor5/200',
  },
  {
    id: '6',
    name: 'Kenji Tanaka',
    title: 'Vercel Product Manager',
    avatarUrl: 'https://picsum.photos/seed/mentor6/200',
  },
];


export default function MentorsPage() {
    
  const scrollToMentors = () => {
    document.getElementById('mentors-list')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
         <div className="absolute inset-0 bg-black/60 z-10" />
         <Image
            src="https://images.unsplash.com/photo-1573496773905-f5b17e76b254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtZW50b3J8ZW58MHx8fHwxNzYxODU5ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mentor guiding a team"
            fill
            className="object-cover"
            data-ai-hint="mentor professional"
            priority
        />
        <div className="relative z-20 container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Learn from the Best</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Get guidance from industry experts and seasoned professionals throughout the event.
          </p>
          <Button size="lg" className="mt-8 text-lg h-12 px-8" onClick={scrollToMentors}>
            Meet the Mentors
          </Button>
        </div>
      </section>

      {/* Mentors List Section */}
      <section id="mentors-list" className="w-full py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Mentors</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
                    Dedicated to helping you succeed, our mentors are here to help.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {mockMentors.map((mentor) => (
                    <Card key={mentor.id} className="group flex flex-col items-center text-center p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
                        <Avatar className="h-32 w-32 mb-6 border-4 border-transparent group-hover:border-primary/50 transition-colors">
                            <AvatarImage src={mentor.avatarUrl} alt={mentor.name} />
                            <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <CardContent className="flex-grow flex flex-col justify-center">
                            <h3 className="text-xl font-bold">{mentor.name}</h3>
                            <p className="text-muted-foreground">{mentor.title}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-primary/10">
        <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Build?</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
                Register your team and get ready to create something amazing with expert guidance.
            </p>
            <Button size="lg" className="mt-8">Register Your Team</Button>
        </div>
      </section>
    </div>
  );
}
