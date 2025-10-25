'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Building, Users, Megaphone, Lightbulb, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const exhibitorInquirySchema = z.object({
  companyName: z.string().min(2, { message: 'Company name is required.' }),
  contactName: z.string().min(2, { message: 'Contact name is required.' }),
  email: z.string().email({ message: 'A valid email is required.' }),
  comments: z.string().optional(),
});

const features = [
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: 'Dedicated Exhibition Space',
    description: 'Secure your own 25sqm booth, a blank canvas to create an immersive brand experience and showcase your products.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Direct Access to Talent',
    description: 'Engage with skilled developers, designers, and innovators in our integrated Job Fair area. Find your next great hire.',
  },
  {
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    title: 'Unmatched Brand Exposure',
    description: 'Position your company in front of the entire Mauritian tech community, from students to seasoned industry veterans.',
  },
];

const companyLogos = PlaceHolderImages.filter(p => p.id.startsWith('company-logo-'));

export default function ExpoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof exhibitorInquirySchema>>({
    resolver: zodResolver(exhibitorInquirySchema),
    defaultValues: {
      companyName: '',
      contactName: '',
      email: '',
      comments: '',
    },
  });

  async function onSubmit(values: z.infer<typeof exhibitorInquirySchema>) {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Mock API call
    console.log('Exhibitor Inquiry:', values);
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
  }

  const scrollToForm = () => {
    document.getElementById('register-interest')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const heroImage = PlaceHolderImages.find(p => p.id === 'expo-hero');
  const venueImage = PlaceHolderImages.find(p => p.id === 'expo-venue');


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {heroImage && (
             <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
            />
        )}
        <div className="relative z-20 container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Exhibit at the Heart of Mauritian Tech</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Secure your 25sqm booth at Les 24hr du Code and showcase your brand to tech leaders, innovators, and top-tier talent.
          </p>
          <Button size="lg" className="mt-8 text-lg h-12 px-8" onClick={scrollToForm}>
            Reserve Your Booth
          </Button>
        </div>
      </section>
      
      {/* Why Exhibit Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Why Exhibit at Les 24hr du Code?</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
                This is more than an event; it's an opportunity to place your brand at the epicenter of innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-lg">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Section */}
       <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Who You'll Meet</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg mb-12">
                Connect with a diverse and engaged audience of over 200+ attendees.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center gap-2">
                    <Users className="h-10 w-10 text-primary"/>
                    <p className="text-lg font-semibold">Passionate Developers</p>
                </div>
                 <div className="flex flex-col items-center gap-2">
                    <Lightbulb className="h-10 w-10 text-primary"/>
                    <p className="text-lg font-semibold">Creative Designers</p>
                </div>
                 <div className="flex flex-col items-center gap-2">
                    <Megaphone className="h-10 w-10 text-primary"/>
                    <p className="text-lg font-semibold">AI Specialists</p>
                </div>
                 <div className="flex flex-col items-center gap-2">
                    <Building className="h-10 w-10 text-primary"/>
                    <p className="text-lg font-semibold">Future Tech Leaders</p>
                </div>
            </div>
        </div>
      </section>

      {/* Gallery / Social Proof Section */}
      <section className="py-16 md:py-24 bg-card">
         <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Join Leading Companies</h2>
             <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg mb-12">
                Our exhibition space is a curated showcase of the best in the industry.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                {companyLogos.map((logo) => (
                    <Image 
                        key={logo.id}
                        src={logo.imageUrl}
                        alt={logo.description}
                        width={160}
                        height={80}
                        className="object-contain"
                        data-ai-hint={logo.imageHint}
                    />
                ))}
            </div>
         </div>
      </section>

      {/* Venue Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">The Venue & Floor Plan</h2>
                    <p className="text-muted-foreground md:text-lg">
                        Our state-of-the-art venue provides the perfect backdrop for innovation. The exhibition area is centrally located to ensure maximum foot traffic and engagement.
                    </p>
                    <p className="text-muted-foreground">
                        A detailed floor plan showing the layout of the 20-25 available booths will be provided to registered exhibitors.
                    </p>
                </div>
                {venueImage && (
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={venueImage.imageUrl}
                            alt={venueImage.description}
                            width={1024}
                            height={768}
                            className="w-full h-auto object-cover"
                            data-ai-hint={venueImage.imageHint}
                        />
                    </div>
                )}
            </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register-interest" className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader className="text-center p-8">
                <CardTitle className="text-3xl md:text-4xl font-bold">Become an Exhibitor</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0">
                {isSubmitted ? (
                    <div className="text-center py-12">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Thank You for Your Interest!</h3>
                        <p className="text-muted-foreground">
                            A member of our team will be in touch with you shortly to discuss exhibitor packages and next steps.
                        </p>
                    </div>
                ) : (
                    <>
                    <p className="text-center text-muted-foreground mb-8">
                        Complete the form below and our team will contact you with more information on packages and pricing.
                    </p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField control={form.control} name="companyName" render={({ field }) => (
                                <FormItem><FormLabel>Company Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                            )}/>
                            <FormField control={form.control} name="contactName" render={({ field }) => (
                                <FormItem><FormLabel>Contact Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                            )}/>
                            <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
                            )}/>
                            <FormField control={form.control} name="comments" render={({ field }) => (
                                <FormItem><FormLabel>Questions or Comments (Optional)</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
                            )}/>
                            <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                                {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Submitting...</> : 'Submit Inquiry'}
                            </Button>
                        </form>
                    </Form>
                    </>
                )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}