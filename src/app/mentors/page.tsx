'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';
import { Linkedin, Github, Globe } from 'lucide-react';

const mockMentors = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'Principal Engineer @ Google',
    avatarUrl: 'https://picsum.photos/seed/mentor1/200',
    bio: 'Sarah is a seasoned engineer with over 15 years of experience in building large-scale distributed systems. She is passionate about mentoring the next generation of software architects.',
    skills: ['System Design', 'Cloud Computing', 'Go', 'Kubernetes'],
    socials: {
      linkedin: '#',
      github: '#',
      website: '#',
    },
  },
  {
    id: '2',
    name: 'David Lee',
    title: 'UX Lead @ Microsoft',
    avatarUrl: 'https://picsum.photos/seed/mentor2/200',
    bio: 'David leads a team of designers focused on creating intuitive and accessible user experiences for millions. He believes in a user-centered and data-driven design process.',
    skills: ['UX Research', 'Interaction Design', 'Figma', 'Accessibility'],
    socials: {
      linkedin: '#',
      github: '#',
      website: '#',
    },
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    title: 'AI Researcher @ OpenAI',
    avatarUrl: 'https://picsum.photos/seed/mentor3/200',
    bio: 'Maria\'s work focuses on natural language processing and large language models. She is excited to help teams integrate cutting-edge AI into their hackathon projects.',
    skills: ['Machine Learning', 'Python', 'PyTorch', 'NLP'],
    socials: {
      linkedin: '#',
      github: '#',
      website: '#',
    },
  },
  {
    id: '4',
    name: 'Tom Brighton',
    title: 'Senior Developer Advocate @ AWS',
    avatarUrl: 'https://picsum.photos/seed/mentor4/200',
    bio: 'Tom helps developers build amazing applications on AWS. He has deep expertise in serverless architectures and cloud-native development.',
    skills: ['AWS', 'Serverless', 'Node.js', 'DevOps'],
    socials: {
      linkedin: '#',
      github: '#',
      website: '#',
    },
  },
  {
    id: '5',
    name: 'Aisha Khan',
    title: 'Cybersecurity Expert',
    avatarUrl: 'https://picsum.photos/seed/mentor5/200',
    bio: 'With a background in ethical hacking and threat modeling, Aisha is dedicated to making the digital world a safer place. She can help you secure your application from the ground up.',
    skills: ['Security Audits', 'Penetration Testing', 'OWASP Top 10', 'Cryptography'],
    socials: {
      linkedin: '#',
      github: '#',
      website: '#',
    },
  },
  {
    id: '6',
    name: 'Kenji Tanaka',
    title: 'Vercel Product Manager',
    avatarUrl: 'https://picsum.photos/seed/mentor6/200',
    bio: 'Kenji focuses on developer experience and frontend performance. He has a passion for Next.js and helping teams build for the modern web.',
    skills: ['Next.js', 'React', 'Performance Tuning', 'Product Management'],
    socials: {
      linkedin: '#',
      github: '#',
      website: '#',
    },
  },
];

type Mentor = (typeof mockMentors)[0];


export default function MentorsPage() {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
    
  const scrollToMentors = () => {
    document.getElementById('mentors-list')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleCloseModal = () => {
    setSelectedMentor(null);
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
                    <Card 
                        key={mentor.id} 
                        onClick={() => setSelectedMentor(mentor)}
                        className="group flex flex-col items-center text-center p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg"
                    >
                        <Avatar className="h-32 w-32 mb-6 border-4 border-transparent group-hover:border-primary/50 transition-colors">
                            <AvatarImage src={mentor.avatarUrl} alt={mentor.name} />
                            <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <CardContent className="flex-grow flex flex-col justify-center p-0">
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

      {/* Mentor Profile Modal */}
      <Dialog open={!!selectedMentor} onOpenChange={(isOpen) => !isOpen && handleCloseModal()}>
        <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-2xl bg-card">
          {selectedMentor && (
            <>
              <DialogHeader>
                  <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                      <Avatar className="h-28 w-28 md:h-36 md:w-36 border-4 border-primary/50">
                          <AvatarImage src={selectedMentor.avatarUrl} alt={selectedMentor.name} />
                          <AvatarFallback>{selectedMentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <DialogTitle className="text-3xl font-bold">{selectedMentor.name}</DialogTitle>
                        <DialogDescription className="text-primary text-lg">{selectedMentor.title}</DialogDescription>
                         <div className="flex justify-center md:justify-start gap-3 pt-2">
                            {selectedMentor.socials.linkedin && <a href={selectedMentor.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary"/></a>}
                            {selectedMentor.socials.github && <a href={selectedMentor.socials.github} target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5 text-muted-foreground hover:text-primary"/></a>}
                            {selectedMentor.socials.website && <a href={selectedMentor.socials.website} target="_blank" rel="noopener noreferrer"><Globe className="h-5 w-5 text-muted-foreground hover:text-primary"/></a>}
                         </div>
                      </div>
                  </div>
              </DialogHeader>
              <div className="py-4 space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">About</h4>
                  <p className="text-muted-foreground text-sm">{selectedMentor.bio}</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-3 text-foreground">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedMentor.skills.map(skill => (
                            <span key={skill} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">{skill}</span>
                        ))}
                    </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
