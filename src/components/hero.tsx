'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Countdown from '@/components/countdown';

export default function Hero() {
  return (
    <>
      <section className="flex-grow w-full flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <Image
              src="/images/Base_Logo_dk.png"
              alt="Les 24hr du Code Logo"
              width={585}
              height={585}
              className="w-full h-auto max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md"
              priority
            />
            <div className="flex w-full items-center justify-center py-8">
                <Countdown />
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <Button asChild size="lg" className="w-full text-lg font-semibold h-12">
                <Link href="/home">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
