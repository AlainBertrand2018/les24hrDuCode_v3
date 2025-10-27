import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const speakers = [
  { name: 'Speaker One', title: 'AI Specialist' },
  { name: 'Speaker Two', title: 'Next.js Guru' },
  { name: 'Speaker Three', title: 'Firebase Expert' },
  { name: 'Speaker Four', title: 'UI/UX Designer' },
  { name: 'Speaker Five', title: 'Cloud Architect' },
  { name: 'Speaker Six', title: 'DevOps Leader' },
];

export default function SchedulePage() {
  return (
    <div className="flex flex-col text-foreground">
      {/* 1. Hero Section */}
      <section className="h-screen w-full flex flex-col items-center justify-center bg-primary/10 text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Event Programme</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Three days packed with insights, innovation, and inspiration.
          </p>
        </div>
      </section>

      {/* 2. Day 1 Section */}
      <section className="min-h-[33vh] w-full flex items-center justify-center py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter">Day 1: Foundations</h3>
              <p className="text-muted-foreground">Kicking things off with fundamentals and keynotes.</p>
            </div>
            <div className="text-muted-foreground">
              <p>[Schedule details for Day 1 will go here]</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Day 2 Section */}
      <section className="min-h-[33vh] w-full flex items-center justify-center py-12 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter">Day 2: Deep Dives</h3>
              <p className="text-muted-foreground">Workshops and in-depth technical sessions.</p>
            </div>
            <div className="text-muted-foreground">
              <p>[Schedule details for Day 2 will go here]</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Day 3 Section */}
      <section className="min-h-[33vh] w-full flex items-center justify-center py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter">Day 3: Demos & Futures</h3>
              <p className="text-muted-foreground">Project showcases and a look at what's next.</p>
            </div>
            <div className="text-muted-foreground">
              <p>[Schedule details for Day 3 will go here]</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Speakers Section */}
      <section id="speakers" className="h-screen w-full flex flex-col items-center justify-center bg-card text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Featured Speakers</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg mb-12">
            Learn from the best in the industry.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={`https://picsum.photos/seed/${speaker.name.replace(/\s+/g, '')}/200`} alt={speaker.name} />
                  <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="font-bold">{speaker.name}</p>
                  <p className="text-sm text-muted-foreground">{speaker.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 6. CTA Section */}
      <section className="h-screen w-full flex flex-col items-center justify-center bg-primary/10 text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Join?</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            Don't miss out on the ultimate tech event in Mauritius.
          </p>
          <Button size="lg" className="mt-8">Register Your Team Now</Button>
        </div>
      </section>
    </div>
  );
}
