'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';


const translations = {
  en: {
    title: 'Join the Waiting List!',
    description: 'Register your interest to be the first to know when tickets are available.',
    nameLabel: 'Full Name',
    namePlaceholder: 'Your Name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'you@example.com',
    whatsappLabel: 'WhatsApp Number',
    whatsappPlaceholder: '+1234567890',
    interestLabel: 'I am interested in being a...',
    interestPlaceholder: 'Select an option',
    participant: 'Participant',
    sponsor: 'Sponsor',
    partner: 'Partner',
    submitButton: 'Register Interest',
    submittingButton: 'Submitting...',
    successTitle: 'Registration Confirmed!',
    successDescription: "Thank you for your interest! We'll notify you as soon as more information is available.",
  },
  fr: {
    title: 'Rejoignez la liste d\'attente !',
    description: 'Inscrivez-vous pour être le premier informé de la disponibilité des billets.',
    nameLabel: 'Nom complet',
    namePlaceholder: 'Votre Nom',
    emailLabel: 'Adresse e-mail',
    emailPlaceholder: 'vous@example.com',
    whatsappLabel: 'Numéro WhatsApp',
    whatsappPlaceholder: '+1234567890',
    interestLabel: 'Je suis intéressé(e) en tant que...',
    interestPlaceholder: 'Sélectionnez une option',
    participant: 'Participant',
    sponsor: 'Sponsor',
    partner: 'Partenaire',
    submitButton: 'Inscrire mon intérêt',
    submittingButton: 'Envoi en cours...',
    successTitle: 'Inscription confirmée !',
    successDescription: "Merci de votre intérêt ! Nous vous informerons dès que de plus amples informations seront disponibles.",
  },
};

const waitlistSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  whatsapp: z.string().min(5, 'Please enter a valid phone number.'),
  interest: z.enum(['Participant', 'Sponsor', 'Partner'], { required_error: 'Please select your interest.' }),
});

interface RegistrationWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'fr';
}

export default function RegistrationWaitlistModal({ isOpen, onClose, lang }: RegistrationWaitlistModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = translations[lang];

  const form = useForm<z.infer<typeof waitlistSchema>>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { name: '', email: '', whatsapp: '', interest: undefined },
  });

  async function onSubmit(values: z.infer<typeof waitlistSchema>) {
    setIsSubmitting(true);
    console.log('Waitlist submission:', values);

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would handle potential errors here
    // For now, we assume success
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  const handleClose = () => {
    onClose();
    // Reset state after a short delay to allow the modal to close gracefully
    setTimeout(() => {
        form.reset();
        setIsSubmitted(false);
    }, 300)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[480px] bg-background">
        <DialogHeader>
          <DialogTitle>{isSubmitted ? t.successTitle : t.title}</DialogTitle>
          <DialogDescription>
            {isSubmitted ? t.successDescription : t.description}
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <p>{t.successDescription}</p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.nameLabel}</FormLabel>
                  <FormControl><Input placeholder={t.namePlaceholder} {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.emailLabel}</FormLabel>
                  <FormControl><Input placeholder={t.emailPlaceholder} {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="whatsapp" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.whatsappLabel}</FormLabel>
                  <FormControl><Input placeholder={t.whatsappPlaceholder} {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="interest" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.interestLabel}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder={t.interestPlaceholder} /></SelectTrigger></FormControl>
                    <SelectContent>
                      <SelectItem value="Participant">{t.participant}</SelectItem>
                      <SelectItem value="Sponsor">{t.sponsor}</SelectItem>
                      <SelectItem value="Partner">{t.partner}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t.submittingButton}
                  </>
                ) : (
                  t.submitButton
                )}
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
