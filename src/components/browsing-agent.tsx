'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { browseUrl } from '@/ai/flows/browse-agent-flow';
import { Loader } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const browseSchema = z.object({
  url: z.string().url({ message: 'Please enter a valid URL.' }),
});

export default function BrowsingAgent() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof browseSchema>>({
    resolver: zodResolver(browseSchema),
    defaultValues: {
      url: '',
    },
  });

  async function onSubmit(values: z.infer<typeof browseSchema>) {
    setIsLoading(true);
    setSummary('');
    try {
      const result = await browseUrl(values);
      setSummary(result.summary);
    } catch (error) {
      console.error('Error browsing URL:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not fetch or summarize the URL. Please check the URL and try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="browsing-agent" className="w-full">
      <div className="container px-4 md:px-6">
        <Card className="mx-auto max-w-2xl shadow-lg bg-background border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Web Summary Agent</CardTitle>
            <CardDescription>Enter a URL to get an AI-powered summary of its content.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} className="h-12"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-12 text-lg font-semibold" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                      Summarizing...
                    </>
                  ) : (
                    'Get Summary'
                  )}
                </Button>
              </form>
            </Form>
            {summary && (
              <div className="mt-6 rounded-md border border-border bg-muted/50 p-4">
                <h3 className="font-semibold mb-2 text-primary">Summary</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{summary}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
