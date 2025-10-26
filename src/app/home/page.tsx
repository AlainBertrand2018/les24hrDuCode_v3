'use client';
import Header from '@/components/header-main';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const sponsorLogos = [
    { id: 'google', name: 'Google', imageUrl: '/images/logos/goog_transp.png', imageHint: 'Google logo' },
    { id: 'microsoft', name: 'Microsoft', imageUrl: '/images/logos/ms_transp.png', imageHint: 'Microsoft logo' },
    { id: 'openai', name: 'OpenAI', imageUrl: '/images/logos/openai_wht_transp.png', imageHint: 'OpenAI logo' },
    { id: 'mistral', name: 'Mistral', imageUrl: '/images/logos/mistral_wht_transp.png', imageHint: 'Mistral logo' },
    { id: 'anthropic', name: 'Anthropic', imageUrl: '/images/logos/anthr_transp.png', imageHint: 'Anthropic logo' },
];

export default function HomePage() {
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
            <div id="sponsors" className="relative z-20 w-full py-8">
                <div className="container mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-4">with</h2>
                    <div className="p-6">
                        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                            {sponsorLogos.map((logo) => (
                                <Image 
                                    key={logo.id}
                                    src={logo.imageUrl}
                                    alt={logo.name}
                                    width={140}
                                    height={50}
                                    className="object-contain"
                                    data-ai-hint={logo.imageHint}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen flex flex-col justify-center items-center bg-card">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold">What is "Les 24hr du Code"?</h2>
            <p className="text-muted-foreground mt-4">
              More than just a hackathon, it's a celebration of code, creativity, and the Mauritian spirit. 
              It's a place where innovation thrives and the tech community comes together.
            </p>
          </div>
        </section>
        
        {/* Register Your Team Section */}
        <section id="teams" className="h-screen flex flex-col justify-center items-center bg-background">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Register Your Team</h2>
            <p className="text-muted-foreground mt-4">Ready to take on the challenge? Form your team and get ready to build something amazing.</p>
            <Button size="lg" className="mt-6">Register Now</Button>
            <Button variant="link" className="mt-2 block mx-auto">View teams &rarr;</Button>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="schedule" className="h-screen flex flex-col justify-center items-center bg-card">
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
        <section id="speakers" className="h-screen flex flex-col justify-center items-center bg-background">
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
        <section id="mentors" className="h-screen flex flex-col justify-center items-center bg-card">
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
        <section id="blog" className="h-screen flex flex-col justify-center items-center bg-background">
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
