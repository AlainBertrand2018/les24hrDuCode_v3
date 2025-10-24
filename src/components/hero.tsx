'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Countdown from '@/components/countdown';
import VideoPlayer from './video-player';
import LanguageModal from './language-modal';

export default function Hero() {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleLanguageSelect = (lang: 'en' | 'fr') => {
    const videoUrl = lang === 'en' 
      ? '/videos/Les24hrducode_expl_en_opt.mp4' 
      : '/videos/Les24hrducode_Expl_Fr_opt.mp4';
    
    setVideoSrc(videoUrl);
    setIsLanguageModalOpen(false);
    setIsVideoModalOpen(true);
  };

  return (
    <>
      <section className="flex-grow w-full flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <Image
              src="/images/24hr_logo.webp"
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
              <Button onClick={() => setIsLanguageModalOpen(true)} size="lg" className="w-full text-lg font-semibold h-12">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LanguageModal 
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        onSelectLanguage={handleLanguageSelect}
      />
      
      <VideoPlayer 
        videoSrc={videoSrc}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
}
