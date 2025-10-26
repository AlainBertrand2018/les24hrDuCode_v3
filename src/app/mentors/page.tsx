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
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '2',
    name: 'David Lee',
    title: 'UX Lead @ Microsoft',
    avatarUrl: 'https://picsum.photos/seed/mentor2/200',
    bio: 'David leads a team of designers focused on creating intuitive and accessible user experiences for millions. He believes in a user-centered and data-driven design process.',
    skills: ['UX Research', 'Interaction Design', 'Figma', 'Accessibility'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    title: 'AI Researcher @ OpenAI',
    avatarUrl: 'https://picsum.photos/seed/mentor3/200',
    bio: 'Maria\'s work focuses on natural language processing and large language models. She is excited to help teams integrate cutting-edge AI into their hackathon projects.',
    skills: ['Machine Learning', 'Python', 'PyTorch', 'NLP'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '4',
    name: 'Tom Brighton',
    title: 'Sr. Advocate @ AWS',
    avatarUrl: 'https://picsum.photos/seed/mentor4/200',
    bio: 'Tom helps developers build amazing applications on AWS. He has deep expertise in serverless architectures and cloud-native development.',
    skills: ['AWS', 'Serverless', 'Node.js', 'DevOps'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '5',
    name: 'Aisha Khan',
    title: 'Cybersecurity Expert',
    avatarUrl: 'https://picsum.photos/seed/mentor5/200',
    bio: 'With a background in ethical hacking and threat modeling, Aisha is dedicated to making the digital world a safer place. She can help you secure your application.',
    skills: ['Security Audits', 'Penetration Testing', 'OWASP', 'Cryptography'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '6',
    name: 'Kenji Tanaka',
    title: 'Product Manager @ Vercel',
    avatarUrl: 'https://picsum.photos/seed/mentor6/200',
    bio: 'Kenji focuses on developer experience and frontend performance. He has a passion for Next.js and helping teams build for the modern web.',
    skills: ['Next.js', 'React', 'Performance', 'Product Management'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '7',
    name: 'Fatima Al-Jamil',
    title: 'Data Scientist @ Netflix',
    avatarUrl: 'https://picsum.photos/seed/mentor7/200',
    bio: 'Fatima specializes in recommendation systems and large-scale data analysis. She enjoys turning raw data into compelling stories and product features.',
    skills: ['Data Science', 'Python', 'SQL', 'Spark'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '8',
    name: 'Charles Xavier',
    title: 'Professor of Genetics',
    avatarUrl: 'https://picsum.photos/seed/mentor8/200',
    bio: 'Charles is a world-renowned geneticist exploring the future of human evolution and its intersection with technology and society.',
    skills: ['Genetics', 'Bioinformatics', 'Ethics', 'Public Speaking'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '9',
    name: 'Lena Petrova',
    title: 'Web3 Specialist',
    avatarUrl: 'https://picsum.photos/seed/mentor9/200',
    bio: 'Lena is a blockchain architect and a strong advocate for decentralized technologies. She helps teams navigate the complex world of Web3.',
    skills: ['Blockchain', 'Solidity', 'Ethereum', 'DeFi'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '10',
    name: 'Marco Chen',
    title: 'Head of Mobile @ Spotify',
    avatarUrl: 'https://picsum.photos/seed/mentor10/200',
    bio: 'Marco leads the development of Spotify\'s mobile applications. His expertise lies in creating seamless user experiences on iOS and Android.',
    skills: ['iOS', 'Android', 'Swift', 'Kotlin'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '11',
    name: 'Isabelle Dubois',
    title: 'Creative Director @ Ubisoft',
    avatarUrl: 'https://picsum.photos/seed/mentor11/200',
    bio: 'Isabelle has been instrumental in the creation of several award-winning video games. She brings a wealth of knowledge in game design and storytelling.',
    skills: ['Game Design', 'Unity', 'C#', 'Storytelling'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '12',
    name: 'Raj Patel',
    title: 'DevRel Lead @ Stripe',
    avatarUrl: 'https://picsum.photos/seed/mentor12/200',
    bio: 'Raj is passionate about building developer communities and creating resources that empower developers to build successful products.',
    skills: ['Developer Relations', 'APIs', 'Payments', 'Community'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '13',
    name: 'Olivia Martinez',
    title: 'AR/VR Developer',
    avatarUrl: 'https://picsum.photos/seed/mentor13/200',
    bio: 'Olivia is at the forefront of immersive technologies, creating experiences that blend the digital and physical worlds. She is an expert in Unity and Unreal Engine.',
    skills: ['AR/VR', 'Unity', 'Unreal Engine', '3D Modeling'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '14',
    name: 'Ben Carter',
    title: 'SRE @ Cloudflare',
    avatarUrl: 'https://picsum.photos/seed/mentor14/200',
    bio: 'Ben ensures the reliability and performance of one of the world\'s largest networks. He specializes in automation and incident response.',
    skills: ['SRE', 'Automation', 'Networking', 'Go'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '15',
    name: 'Chloe Kim',
    title: 'Founder & CEO @ EcoTech',
    avatarUrl: 'https://picsum.photos/seed/mentor15/200',
    bio: 'Chloe is a serial entrepreneur who successfully built and sold two startups. She is now focused on leveraging technology for environmental sustainability.',
    skills: ['Entrepreneurship', 'Fundraising', 'SaaS', 'Leadership'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '16',
    name: 'Samuel Jones',
    title: 'Distinguished Engineer @ IBM',
    avatarUrl: 'https://picsum.photos/seed/mentor16/200',
    bio: 'Samuel has a long and storied career in enterprise software, with deep expertise in Java, mainframe systems, and hybrid cloud environments.',
    skills: ['Java', 'Enterprise Arch.', 'Mainframe', 'Hybrid Cloud'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '17',
    name: 'Amelia Wang',
    title: 'Design Systems Lead @ Atlassian',
    avatarUrl: 'https://picsum.photos/seed/mentor17/200',
    bio: 'Amelia is responsible for the design system that powers Jira, Confluence, and other Atlassian products. She is passionate about component-based design.',
    skills: ['Design Systems', 'React', 'Figma', 'CSS-in-JS'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '18',
    name: 'Gustavo Fring',
    title: 'Logistics Mogul',
    avatarUrl: 'https://picsum.photos/seed/mentor18/200',
    bio: 'Gustavo is a meticulous planner and a master of logistics and operations. He can help you streamline your processes and build a scalable business.',
    skills: ['Logistics', 'Operations', 'Business Strategy', 'Quality Control'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '19',
    name: 'Yuki Nakamura',
    title: 'Robotics Engineer',
    avatarUrl: 'https://picsum.photos/seed/mentor19/200',
    bio: 'Yuki builds and programs robots for manufacturing and exploration. She is an expert in ROS and autonomous systems.',
    skills: ['Robotics', 'ROS', 'C++', 'Computer Vision'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '20',
    name: 'Liam Murphy',
    title: 'Growth Hacker',
    avatarUrl: 'https://picsum.photos/seed/mentor20/200',
    bio: 'Liam helps startups achieve rapid growth through creative marketing strategies and data-driven experimentation.',
    skills: ['Growth Hacking', 'Marketing', 'SEO', 'A/B Testing'],
    socials: { linkedin: '#', github: '#', website: '#' },
  }
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
            src="https://picsum.photos/seed/mentor-hero/1080/720"
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
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
