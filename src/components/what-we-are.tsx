import { Zap, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'High-Energy Hacking',
    description: "Feel the adrenaline rush of a 24-hour coding marathon. Push your limits, build amazing things, and compete for glory against the best developers on the island.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Community & Collaboration',
    description: "It's not just about competition. Connect with fellow developers, learn from experienced mentors, and forge lasting relationships within the vibrant Mauritian tech community.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Innovation Unleashed',
    description: "From AI-powered solutions to groundbreaking web applications, this is your chance to experiment with cutting-edge technology and bring your most ambitious ideas to life.",
  },
];

export default function WhatWeAre() {
  return (
    <section id="what-we-are" className="w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">What We Are About</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    More than just a hackathon, it's a celebration of code, creativity, and the Mauritian spirit.
                </p>
            </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border/40 transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
