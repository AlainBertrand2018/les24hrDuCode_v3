'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import type { Schedule } from '@/lib/types';
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
import { useToast } from '@/hooks/use-toast';
import { Edit, PlusCircle, Trash2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { MOCK_SCHEDULE } from '@/lib/mock-data';

const scheduleSchema = z.object({
  title: z.string().min(3, 'Title is required'),
  speaker: z.string().min(3, 'Speaker name is required'),
  start_time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
  duration_minutes: z.coerce.number().int().positive('Duration must be a positive number'),
});

export default function ScheduleManager() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [editingSchedule, setEditingSchedule] = useState<Schedule | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof scheduleSchema>>({
    resolver: zodResolver(scheduleSchema),
  });
  
  useEffect(() => {
    if (editingSchedule) {
      form.reset({
        title: editingSchedule.title,
        speaker: editingSchedule.speaker,
        start_time: editingSchedule.start_time.substring(0, 5),
        duration_minutes: editingSchedule.duration_minutes,
      });
    } else {
      form.reset({
        title: '',
        speaker: '',
        start_time: '',
        duration_minutes: 60,
      });
    }
  }, [editingSchedule, form]);

  useEffect(() => {
    setSchedules(MOCK_SCHEDULE.sort((a, b) => a.start_time.localeCompare(b.start_time)));
  }, []);

  const onSubmit = async (values: z.infer<typeof scheduleSchema>) => {
    const scheduleData: Schedule = {
      ...values,
      id: editingSchedule ? editingSchedule.id : new Date().toISOString(),
      start_time: `${values.start_time}:00`,
    };
    
    if (editingSchedule) {
      setSchedules(schedules.map(s => s.id === editingSchedule.id ? scheduleData : s));
    } else {
      setSchedules([...schedules, scheduleData].sort((a,b) => a.start_time.localeCompare(b.start_time)));
    }
    
    toast({ title: 'Success', description: `Schedule item ${editingSchedule ? 'updated' : 'added'}.` });
    setIsDialogOpen(false);
  };
  
  const deleteSchedule = async (id: string) => {
    setSchedules(schedules.filter(s => s.id !== id));
    toast({ title: 'Success', description: 'Schedule item deleted.' });
  };

  return (
    <Card>
      <CardContent className="p-4 md:p-6">
        <div className="flex justify-end mb-4">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => { setEditingSchedule(null); setIsDialogOpen(true); }}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Session
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingSchedule ? 'Edit Session' : 'Add New Session'}</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField control={form.control} name="title" render={({ field }) => (
                        <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="speaker" render={({ field }) => (
                        <FormItem><FormLabel>Speaker</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="start_time" render={({ field }) => (
                        <FormItem><FormLabel>Start Time (HH:MM)</FormLabel><FormControl><Input type="time" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="duration_minutes" render={({ field }) => (
                        <FormItem><FormLabel>Duration (minutes)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>
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
              <TableHead>Title</TableHead>
              <TableHead>Speaker</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedules.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.speaker}</TableCell>
                <TableCell>{item.start_time.substring(0, 5)}</TableCell>
                <TableCell>{item.duration_minutes} min</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => { setEditingSchedule(item); setIsDialogOpen(true); }}>
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
                          This action cannot be undone. This will permanently delete this session.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteSchedule(item.id)} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
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
