'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import type { Sponsor } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Edit, PlusCircle, Trash2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { MOCK_SPONSORS } from '@/lib/mock-data';

const sponsorSchema = z.object({
  name: z.string().min(2, 'Sponsor name is required'),
  tier: z.enum(['Gold', 'Silver', 'Bronze']),
  logo_url: z.string().url('Must be a valid URL').or(z.literal('')),
});

export default function SponsorManager() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [editingSponsor, setEditingSponsor] = useState<Sponsor | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof sponsorSchema>>({
    resolver: zodResolver(sponsorSchema),
  });

  useEffect(() => {
    if (editingSponsor) {
      form.reset({
        name: editingSponsor.name,
        tier: editingSponsor.tier,
        logo_url: editingSponsor.logo_url || '',
      });
    } else {
      form.reset({ name: '', tier: 'Bronze', logo_url: '' });
    }
  }, [editingSponsor, form]);
  
  useEffect(() => {
    setSponsors(MOCK_SPONSORS.sort((a,b) => a.name.localeCompare(b.name)));
  }, []);

  const onSubmit = async (values: z.infer<typeof sponsorSchema>) => {
    const sponsorData: Sponsor = { 
        ...values,
        id: editingSponsor ? editingSponsor.id : new Date().toISOString(),
        logo_url: values.logo_url || null 
    };

    if (editingSponsor) {
        setSponsors(sponsors.map(s => s.id === editingSponsor.id ? sponsorData : s));
    } else {
        setSponsors([...sponsors, sponsorData].sort((a,b) => a.name.localeCompare(b.name)));
    }

    toast({ title: 'Success', description: `Sponsor ${editingSponsor ? 'updated' : 'added'}.` });
    setIsDialogOpen(false);
  };

  const deleteSponsor = async (id: string) => {
    setSponsors(sponsors.filter(s => s.id !== id));
    toast({ title: 'Success', description: 'Sponsor deleted.' });
  };

  return (
    <Card>
      <CardContent className="p-4 md:p-6">
        <div className="flex justify-end mb-4">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => { setEditingSponsor(null); setIsDialogOpen(true); }}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Sponsor
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingSponsor ? 'Edit Sponsor' : 'Add New Sponsor'}</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Sponsor Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="tier" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tier</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="Bronze">Bronze</SelectItem>
                          <SelectItem value="Silver">Silver</SelectItem>
                          <SelectItem value="Gold">Gold</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="logo_url" render={({ field }) => (
                    <FormItem><FormLabel>Logo URL</FormLabel><FormControl><Input placeholder="https://example.com/logo.png" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <DialogFooter>
                    <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
                    <Button type="submit">Save</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Tier</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sponsors.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.tier}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => { setEditingSponsor(item); setIsDialogOpen(true); }}>
                    <Edit className="h-4 w-4" />
                  </Button>
                   <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete this sponsor.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteSponsor(item.id)} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </CardContent>
    </Card>
  );
}
