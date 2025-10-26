'use client';
import Header from '@/components/header-main';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const logos = [
  { src: '/images/Coat_of_arms_of_Mauritius_(Original_version).svg.png', alt: 'Coat of arms of Mauritius' },
  { src: '/images/logos/edb_logo.png', alt: 'EDB Logo' },
  { src: '/images/logos/Dell_Logo.png', alt: 'Dell Logo' },
  { src: '/images/logos/le_labourdonnais_logo.png', alt: 'Le Labourdonnais Logo' },
  { src: '/images/logos/Google_Gemini_logo.png', alt: 'Google Gemini Logo' },
  { src: '/images/logos/microsoft_azure.png', alt: 'Microsoft Azure Logo' },
  { src: '/images/logos/openai_wht_transp.png', alt: 'OpenAI Logo' },
  { src: '/images/logos/mistral_wht_transp.png', alt: 'Mistral AI Logo' },
  { src: '/images/logos/anthr_wht_transp.png', alt: 'Anthropic Logo' },
  { src: '/images/logos/vercel_wht_bk.png', alt: 'Vercel Logo' },
  { src: '/images/logos/emtel_logo.png', alt: 'Emtel Logo' },
  { src: '/images/logos/mt_logo.png', alt: 'Mauritius Telecom Logo' },
  { src: '/images/logos/maubank_logo.png', alt: 'MauBank Logo' },
];

export default function HomePage() {
  const firstFiveLogos = logos.slice(0, 5);
  
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
            <div className="relative z-20 flex-grow flex flex-col justify-center items-center container">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Welcome to Les 24hr du Code</h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mt-2">The ultimate coding challenge in Mauritius.</p>
            </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="w-full py-16 md:py-24 bg-card">
          <div className="container mx-auto text-center">
            <h2 className="text-xl font-semibold mb-8">Our Partners &amp; Sponsors</h2>
            <div className="w-full max-w-6xl mx-auto flex items-center justify-center">
              <div className="grid grid-cols-5 gap-x-8 w-full items-center justify-items-center">
                {firstFiveLogos.map((logo, index) => (
                  <div key={index} className="h-full flex items-center justify-center p-2">
                    <div className="relative h-full w-full max-h-[80px]">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen flex flex-col justify-center items-center bg-background">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold">What is "Les 24hr du Code"?</h2>
            <p className="text-muted-foreground mt-4">
              More than just a hackathon, it's a celebration of code, creativity, and the Mauritian spirit. 
              It's a place where innovation thrives and the tech community comes together.
            </p>
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
      <Footer />
    </>
  );
}
