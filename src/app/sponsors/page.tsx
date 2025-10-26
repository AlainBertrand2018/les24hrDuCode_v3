'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MOCK_SPONSORS } from '@/lib/mock-data';

type Sponsor = (typeof MOCK_SPONSORS)[0];

const tierOrder: Sponsor['tier'][] = ['Gold', 'Silver', 'Bronze'];

const tierStyles = {
  'Gold': {
    gridClass: 'grid-cols-1 md:grid-cols-2',
    imageSize: { width: 250, height: 100 },
    label: 'Gold Sponsors',
  },
  'Silver': {
    gridClass: 'grid-cols-2 md:grid-cols-3',
    imageSize: { width: 200, height: 80 },
    label: 'Silver Sponsors',
  },
  'Bronze': {
    gridClass: 'grid-cols-3 md:grid-cols-5',
    imageSize: { width: 150, height: 60 },
    label: 'Bronze Sponsors',
  },
};


export default function SponsorsPage() {

  const groupedSponsors = useMemo(() => {
    const groups: Partial<Record<Sponsor['tier'], Sponsor[]>> = {};
    for (const sponsor of MOCK_SPONSORS) {
      if (!groups[sponsor.tier]) {
        groups[sponsor.tier] = [];
      }
      groups[sponsor.tier]!.push(sponsor);
    }
    return groups;
  }, []);

  const scrollToSponsors = () => {
    document.getElementById('sponsors-list')?.scrollIntoView({ behavior: 'smooth' });
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
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Event Sponsors</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
                    The organizations committed to fostering talent and innovation.
                </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-12">
              {tierOrder.map(tier => {
                const sponsors = groupedSponsors[tier];
                if (!sponsors || sponsors.length === 0) return null;

                const styles = tierStyles[tier];

                return (
                  <div key={tier}>
                    <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">{styles.label}</h3>
                    <div className={cn('grid gap-px border bg-border', styles.gridClass)}>
                      {sponsors.map(sponsor => (
                        <div key={sponsor.id} className="bg-card hover:bg-card/80 p-6 flex justify-center items-center aspect-video transition-colors">
                           <div className="h-24 flex items-center justify-center">
                              <Image 
                                src={sponsor.logo_url}
                                alt={`${sponsor.name} Logo`}
                                width={styles.imageSize.width}
                                height={styles.imageSize.height}
                                className="object-contain"
                              />
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
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
    </div>
  );
}
