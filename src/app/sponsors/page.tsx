'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Globe } from 'lucide-react';

const mockSponsors = [
  {
    id: '1',
    name: 'Innovate Corp',
    tier: 'Gold',
    logoUrl: 'https://picsum.photos/seed/innovate/250/100',
    description: 'Innovate Corp is a leading technology firm specializing in AI-driven solutions. As a Gold sponsor, they are committed to fostering the next generation of tech talent and innovation.',
    website: '#',
  },
  {
    id: '2',
    name: 'Tech Solutions Ltd.',
    tier: 'Silver',
    logoUrl: 'https://picsum.photos/seed/tech/200/80',
    description: 'Tech Solutions Ltd. provides robust software and infrastructure for businesses worldwide. Their sponsorship supports our mission to empower developers and build a stronger tech community.',
    website: '#',
  },
  {
    id: '3',
    name: 'Code Wizards',
    tier: 'Bronze',
    logoUrl: 'https://picsum.photos/seed/wizards/150/60',
    description: 'Code Wizards is a dynamic startup focused on developer tools and productivity. They are excited to support emerging talent at Les 24hr du Code.',
    website: '#',
  },
  {
    id: '4',
    name: 'Future Systems',
    tier: 'Gold',
    logoUrl: 'https://picsum.photos/seed/future/250/100',
    description: 'Future Systems is at the forefront of cloud computing and sustainable technology. Their generous support as a Gold sponsor helps make this event possible.',
    website: '#',
  },
  {
    id: '5',
    name: 'DevLink',
    tier: 'Silver',
    logoUrl: 'https://picsum.photos/seed/devlink/200/80',
    description: 'DevLink connects developers with opportunities and resources. They are passionate about community-driven events and are proud to be a Silver sponsor.',
    website: '#',
  },
  {
    id: '6',
    name: 'ByteForce',
    tier: 'Bronze',
    logoUrl: 'https://picsum.photos/seed/byteforce/150/60',
    description: 'ByteForce offers cybersecurity solutions for the modern enterprise. They are dedicated to helping build a secure and resilient digital future.',
    website: '#',
  },
];

type Sponsor = (typeof mockSponsors)[0];

export default function SponsorsPage() {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);

  const scrollToSponsors = () => {
    document.getElementById('sponsors-list')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleCloseModal = () => {
    setSelectedSponsor(null);
  };

  return (
    <div className="flex flex-col text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
         <div className="absolute inset-0 bg-black/60 z-10" />
         <Image
            src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwYXJ0bmVyc2hpcHxlbnwwfHx8fDE3NjE4NjI5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Handshake between partners"
            fill
            className="object-cover"
            data-ai-hint="partnership business"
            priority
        />
        <div className="relative z-20 container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Our Valued Sponsors</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Powering innovation and supporting the Mauritian tech community.
          </p>
          <Button size="lg" className="mt-8 text-lg h-12 px-8" onClick={scrollToSponsors}>
            Meet Our Sponsors
          </Button>
        </div>
      </section>

      {/* Sponsors List Section */}
      <section id="sponsors-list" className="w-full py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Event Sponsors</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
                    The organizations committed to fostering talent and innovation.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {mockSponsors.map((sponsor) => (
                    <Card 
                        key={sponsor.id} 
                        onClick={() => setSelectedSponsor(sponsor)}
                        className="group flex flex-col items-center text-center p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg"
                    >
                        <div className="h-24 flex items-center justify-center mb-6">
                          <Image src={sponsor.logoUrl} alt={`${sponsor.name} Logo`} width={200} height={80} className="object-contain max-h-20" />
                        </div>
                        <CardContent className="flex-grow flex flex-col justify-center p-0">
                            <h3 className="text-xl font-bold">{sponsor.name}</h3>
                            <p className="text-primary">{sponsor.tier} Sponsor</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-primary/10">
        <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Want to Become a Sponsor?</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
                Join us in supporting the next wave of innovators. Contact us to learn about sponsorship opportunities.
            </p>
            <Button size="lg" className="mt-8">Contact Us</Button>
        </div>
      </section>

      {/* Sponsor Profile Modal */}
      <Dialog open={!!selectedSponsor} onOpenChange={(isOpen) => !isOpen && handleCloseModal()}>
        <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-2xl bg-card">
          {selectedSponsor && (
            <>
              <DialogHeader>
                  <div className="flex flex-col items-center gap-6 text-center">
                      <div className="h-28 flex items-center justify-center w-full">
                          <Image src={selectedSponsor.logoUrl} alt={`${selectedSponsor.name} Logo`} width={250} height={100} className="object-contain max-h-24" />
                      </div>
                      <div className="space-y-1">
                        <DialogTitle className="text-3xl font-bold">{selectedSponsor.name}</DialogTitle>
                        <DialogDescription className="text-primary text-lg">{selectedSponsor.tier} Sponsor</DialogDescription>
                         <div className="flex justify-center pt-2">
                            {selectedSponsor.website && <a href={selectedSponsor.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-muted-foreground hover:text-primary"><Globe className="h-4 w-4"/> Visit Website</a>}
                         </div>
                      </div>
                  </div>
              </DialogHeader>
              <div className="py-4 space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">About {selectedSponsor.name}</h4>
                  <p className="text-muted-foreground text-sm">{selectedSponsor.description}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
