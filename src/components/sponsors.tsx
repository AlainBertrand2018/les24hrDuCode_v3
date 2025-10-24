'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { Sponsor } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const placeholderLogo = PlaceHolderImages.find(p => p.id === 'sponsor-logo-1')?.imageUrl || 'https://placehold.co/200x80/111111/BEF264?text=Sponsor';

const tierImageSize = {
    Gold: { width: 250, height: 100 },
    Silver: { width: 200, height: 80 },
    Bronze: { width: 150, height: 60 },
};

type SponsorsProps = {
  initialSponsors: Sponsor[];
};

export default function Sponsors({ initialSponsors }: SponsorsProps) {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSponsors = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      setSponsors(initialSponsors.sort((a,b) => a.name.localeCompare(b.name)));
      setLoading(false);
    };

    fetchSponsors();
  }, [initialSponsors]);

  return (
    <section id="sponsors-section" className="w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Our Sponsors & Exhibitors</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Powering innovation and collaboration at Les 24hr du Code.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl py-12">
          {loading ? (
            <p className="text-center">Loading sponsors...</p>
          ) : sponsors.length === 0 ? (
            <p className="text-center text-muted-foreground">Sponsors will be announced soon!</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sponsors.map((sponsor) => (
                    <div key={sponsor.id} className="p-1 h-full">
                       <Card className={cn(
                           "h-full flex flex-col items-center justify-center p-6 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 bg-card/50",
                       )}>
                        <CardContent className="flex flex-col items-center justify-center p-0 gap-4">
                            <div className='flex-grow flex items-center justify-center h-24'>
                              <Image
                                  src={sponsor.logo_url || placeholderLogo}
                                  alt={`${sponsor.name} logo`}
                                  width={tierImageSize[sponsor.tier].width}
                                  height={tierImageSize[sponsor.tier].height}
                                  className="object-contain"
                                  data-ai-hint="sponsor logo"
                              />
                            </div>
                            <div className="text-center pt-4">
                                <h3 className="text-lg font-semibold">{sponsor.name}</h3>
                                <p className={cn("text-sm", {
                                    'text-yellow-400': sponsor.tier === 'Gold',
                                    'text-gray-400': sponsor.tier === 'Silver',
                                    'text-orange-400': sponsor.tier === 'Bronze',
                                })}>{sponsor.tier} Sponsor</p>
                            </div>
                        </CardContent>
                      </Card>
                    </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
