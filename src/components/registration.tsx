'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';


const registrationSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  ticket_type: z.enum(['Standard', 'VIP'], { required_error: 'Please select a ticket type.'}),
});

export default function Registration() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: '',
      email: '',
      ticket_type: 'Standard',
    },
  });

  async function onSubmit(values: z.infer<typeof registrationSchema>) {
    setIsSubmitting(true);
    console.log('Form submitted:', values);

    // Mock submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate success
    setIsSubmitted(true);
    setIsSubmitting(false);
  }

  if (isSubmitted) {
      return (
        <section id="registration-section" className="w-full">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-lg text-center">
                    <Card className="bg-primary/10 border-primary">
                        <CardHeader>
                            <CardTitle className="flex justify-center items-center gap-2 text-2xl text-primary">
                                <CheckCircle className="h-8 w-8"/>
                                Registration Confirmed!
                            </CardTitle>
                            <CardDescription className="text-foreground/80 pt-2">
                                Thank you for registering for Les 24hr du Code. We've sent a confirmation to your email. See you there!
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
      );
  }

  return (
    <section id="registration-section" className="w-full">
      <div className="container px-4 md:px-6">
        <Card className="mx-auto max-w-lg shadow-lg bg-card border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Register for the Event</CardTitle>
            <CardDescription>
              Secure your spot at the most exciting coding event of the year!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="h-12"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} className="h-12"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ticket_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ticket Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select a ticket type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Standard">Standard</SelectItem>
                          <SelectItem value="VIP">VIP</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-12 text-lg font-semibold" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Register Now'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
