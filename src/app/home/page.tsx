'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/header-main';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import LanguageModal from '@/components/language-modal';
import VideoPlayer from '@/components/video-player';
import RegistrationWaitlistModal from '@/components/registration-waitlist-modal';


const faqItems = [
    {
        question: "What is Les 24hr du Code?",
        answer: "It is the ultimate 24-hour coding challenge and entrepreneur competition in Mauritius. It's a high-energy event where teams design, code, and deploy an MVP in just 24 hours."
    },
    {
        question: "Who can participate?",
        answer: "The event is open to developers, designers, AI specialists, students, and anyone passionate about technology and innovation. You can register as a team or as an individual to be matched with one."
    },
    {
        question: "What should I bring?",
        answer: "You'll need to bring your laptop, any necessary chargers, and your brilliant ideas. We'll provide the food, drinks, internet, and an inspiring environment to keep you going."
    },
    {
        question: "Are there prizes?",
        answer: "Yes! There will be prizes for the top teams, including cash prizes, tech gadgets, and unique opportunities with our sponsors. More details will be announced closer to the event date."
    },
]

const videoUrls = {
    en: '/videos/Les24hrducode_expl_en_opt.mp4',
    fr: '/videos/Les24hrducode_Expl_Fr_opt.mp4',
};

export default function HomePage() {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const [lang, setLang] = useState<'en' | 'fr'>('en');

  useEffect(() => {
    // Open the language modal on initial load
    setIsLanguageModalOpen(true);
  }, []);

  const handleSelectLanguage = (selectedLang: 'en' | 'fr') => {
    setLang(selectedLang);
    setVideoSrc(videoUrls[selectedLang]);
    setIsLanguageModalOpen(false);
    setIsVideoPlayerOpen(true);
  };
  
  const handleVideoClose = () => {
    setIsVideoPlayerOpen(false);
    setVideoSrc('');
    setIsWaitlistModalOpen(true);
  };
  
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center relative text-primary-foreground">
            <Image
                src="/images/home_bk.webp"
                alt="Hackathon event background"
                fill
                className="object-cover blur-sm"
                priority
                data-ai-hint="hackathon event"
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative z-20 flex flex-col h-full w-full">
              <div className="flex-grow flex flex-col justify-center items-center container">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Welcome to Les 24hr du Code</h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mt-2">The ultimate coding challenge in Mauritius.</p>
              </div>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen flex flex-col justify-center items-center bg-background">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-5xl">
            <div className="flex justify-center">
                <Image
                    src="/images/Base_Logo_dk.png"
                    alt="Les 24hr du Code Logo"
                    width={585}
                    height={585}
                    className="w-full h-auto max-w-[320px]"
                />
            </div>
            <div className="text-left">
                <h2 className="text-3xl font-bold">What is "Les 24hr du Code"?</h2>
                <p className="text-muted-foreground mt-4 text-lg">
                  More than just a hackathon, it's a celebration of code, creativity, and the Mauritian spirit. 
                  It's a place where innovation thrives and the tech community comes together.
                </p>
            </div>
          </div>
        </section>
        
        {/* Register Your Team Section */}
        <section id="teams" className="h-screen flex flex-col justify-center items-center bg-card">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Register Your Team</h2>
            <p className="text-muted-foreground mt-4">Ready to take on the challenge? Form your team and get ready to build something amazing.</p>
            <Button size="lg" className="mt-6">Register Now</Button>
            <Button variant="link" className="mt-2 block mx-auto">View teams &rarr;</Button>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="schedule" className="h-screen flex flex-col justify-center items-center bg-background">
           <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Event Timeline</h2>
             <p className="text-muted-foreground mt-4">Key dates and events for the competition.</p>
            <div className="h-40 flex items-center justify-center bg-muted rounded-lg mt-6">
              <p className="text-muted-foreground">[Timeline Graphic Here]</p>
            </div>
            <Button variant="link" className="mt-4">Full schedule &rarr;</Button>
          </div>
        </section>
        
        {/* Speakers Section */}
        <section id="speakers" className="h-screen flex flex-col justify-center items-center bg-card">
           <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Featured Speakers</h2>
             <p className="text-muted-foreground mt-4">Learn from industry leaders and experts.</p>
            <div className="h-40 flex items-center justify-center bg-muted rounded-lg mt-6">
              <p className="text-muted-foreground">[Speaker Cards Here]</p>
            </div>
            <Button variant="link" className="mt-4">See all speakers &rarr;</Button>
          </div>
        </section>

        {/* Mentors Section */}
        <section id="mentors" className="h-screen flex flex-col justify-center items-center bg-background">
           <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Our Mentors</h2>
             <p className="text-muted-foreground mt-4">Get guidance from experienced professionals.</p>
            <div className="h-40 flex items-center justify-center bg-muted rounded-lg mt-6">
              <p className="text-muted-foreground">[Mentor Cards Here]</p>
            </div>
            <Button variant="link" className="mt-4">Meet the mentors &rarr;</Button>
          </div>
        </section>
        
        {/* Blog Section */}
        <section id="blog" className="h-screen flex flex-col justify-center items-center bg-card">
           <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
             <p className="text-muted-foreground mt-4">News and updates from the team.</p>
            <div className="h-40 flex items-center justify-center bg-muted rounded-lg mt-6">
              <p className="text-muted-foreground">[Article Previews Here]</p>
            </div>
            <Button variant="link" className="mt-4">Read more on our blog &rarr;</Button>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="h-screen flex flex-col justify-center bg-background">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                <p className="text-muted-foreground mt-4">
                    Find answers to common questions about Les 24hr du Code.
                </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
        </section>

        {/* Info & Contact Section */}
        <section id="contact" className="h-screen flex flex-col justify-center items-center bg-primary/10">
           <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Info & Contact</h2>
             <p className="text-muted-foreground mt-4">Have questions? Get in touch with us.</p>
            <div className="mt-6">
              <p>contact@24hrducode.com</p>
            </div>
          </div>
        </section>
      </main>
      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        onSelectLanguage={handleSelectLanguage}
      />
      <VideoPlayer
        isOpen={isVideoPlayerOpen}
        onClose={handleVideoClose}
        onEnded={handleVideoClose}
        videoSrc={videoSrc}
      />
       <RegistrationWaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
        lang={lang}
      />
    </>
  );
}
