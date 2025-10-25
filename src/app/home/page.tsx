'use client';
import Header from '@/components/header-main';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-20 text-center">
          <h1 className="text-4xl font-bold">Welcome to Les 24hr du Code</h1>
          <p className="text-lg text-muted-foreground mt-2">The ultimate coding challenge in Mauritius.</p>
        </section>

        {/* Clickable Sponsors Ribbon */}
        <section id="sponsors" className="py-8 bg-background">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Our Sponsors</h2>
            <div className="h-20 flex items-center justify-center bg-muted rounded-lg">
              <p className="text-muted-foreground">[Sponsors Marquee Here]</p>
            </div>
            <Button variant="link" className="mt-2">See all sponsors &rarr;</Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-card">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold">What is "Les 24hr du Code"?</h2>
            <p className="text-muted-foreground mt-4">
              More than just a hackathon, it's a celebration of code, creativity, and the Mauritian spirit. 
              It's a place where innovation thrives and the tech community comes together.
            </p>
          </div>
        </section>
        
        {/* Register Your Team Section */}
        <section id="teams" className="py-16 bg-background">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Register Your Team</h2>
            <p className="text-muted-foreground mt-4">Ready to take on the challenge? Form your team and get ready to build something amazing.</p>
            <Button size="lg" className="mt-6">Register Now</Button>
            <Button variant="link" className="mt-2 block mx-auto">View teams &rarr;</Button>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="schedule" className="py-16 bg-card">
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
        <section id="speakers" className="py-16 bg-background">
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
        <section id="mentors" className="py-16 bg-card">
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
        <section id="blog" className="py-16 bg-background">
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
        <section id="contact" className="py-16 bg-primary/10">
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
