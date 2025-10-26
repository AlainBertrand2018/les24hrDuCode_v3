'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Team } from '@/lib/types';
import Image from 'next/image';

const mockTeams: Team[] = [
  {
    id: '1',
    name: 'Code Wizards',
    description: 'Brewing magical solutions with code and coffee. Focused on creating an AI-powered educational platform.',
    members: [
      { name: 'Alice', avatarUrl: 'https://picsum.photos/seed/1/40' },
      { name: 'Bob', avatarUrl: 'https://picsum.photos/seed/2/40' },
      { name: 'Charlie', avatarUrl: 'https://picsum.photos/seed/3/40' },
    ],
  },
  {
    id: '2',
    name: 'Cybernetic Dolphins',
    description: 'Navigating the digital ocean with intelligence and grace. Building a decentralized social network.',
    members: [
      { name: 'Diana', avatarUrl: 'https://picsum.photos/seed/4/40' },
      { name: 'Eve', avatarUrl: 'https://picsum.photos/seed/5/40' },
      { name: 'Frank', avatarUrl: 'https://picsum.photos/seed/6/40' },
    ],
  },
  {
    id: '3',
    name: 'The Binary Bunch',
    description: 'Ones and zeros with a mission. Developing a gamified fitness app for all ages.',
    members: [
      { name: 'Grace', avatarUrl: 'https://picsum.photos/seed/7/40' },
      { name: 'Heidi', avatarUrl: 'https://picsum.photos/seed/8/40' },
    ],
  },
    {
    id: '4',
    name: 'Quantum Leapers',
    description: 'Making the next leap in distributed ledger technology for supply chain management.',
    members: [
      { name: 'Ivan', avatarUrl: 'https://picsum.photos/seed/9/40' },
      { name: 'Judy', avatarUrl: 'https://picsum.photos/seed/10/40' },
      { name: 'Mallory', avatarUrl: 'https://picsum.photos/seed/11/40' },
       { name: 'Niaj', avatarUrl: 'https://picsum.photos/seed/12/40' },
    ],
  },
];

export default function TeamsPage() {
    
  const scrollToTeams = () => {
    document.getElementById('teams-list')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
         <div className="absolute inset-0 bg-black/60 z-10" />
         <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NjE4NTU5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Diverse team collaborating"
            fill
            className="object-cover"
            data-ai-hint="team collaboration"
            priority
        />
        <div className="relative z-20 container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Meet the Innovators</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Discover the talented teams competing in Les 24hr du Code.
          </p>
          <Button size="lg" className="mt-8 text-lg h-12 px-8" onClick={scrollToTeams}>
            See the Teams
          </Button>
        </div>
      </section>

      {/* Teams List Section */}
      <section id="teams-list" className="w-full py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Registered Teams</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
                    The creative minds ready to build the future in 24 hours.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockTeams.map((team) => (
                    <Card key={team.id} className="flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
                        <CardHeader>
                            <CardTitle>{team.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-between">
                            <p className="text-muted-foreground mb-6">{team.description}</p>
                            <div>
                                <h4 className="font-semibold text-sm mb-3">Team Members:</h4>
                                <div className="flex items-center space-x-2">
                                    {team.members.map((member) => (
                                        <Avatar key={member.name} className="h-8 w-8">
                                            <AvatarImage src={member.avatarUrl} alt={member.name} />
                                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-primary/10">
        <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Join the Challenge?</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
                Register your team now and be part of the innovation.
            </p>
            <Button size="lg" className="mt-8">Register Your Team</Button>
        </div>
      </section>
    </div>
  );
}
