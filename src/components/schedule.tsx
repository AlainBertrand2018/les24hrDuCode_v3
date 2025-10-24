'use client';

import { useState, useEffect } from 'react';
import type { Schedule as ScheduleType } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Clock, User, Mic } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

type ScheduleProps = {
  initialSchedule: ScheduleType[];
};

export default function Schedule({ initialSchedule }: ScheduleProps) {
  const [schedule, setSchedule] = useState<ScheduleType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      setLoading(true);
      // Simulate network delay for effect, even with initial data
      await new Promise(resolve => setTimeout(resolve, 500));
      setSchedule(initialSchedule.sort((a, b) => a.start_time.localeCompare(b.start_time)));
      setLoading(false);
    };

    fetchSchedule();
  }, [initialSchedule]);

  const formatTime = (time: string) => {
      const [hours, minutes] = time.split(':');
      const date = new Date();
      date.setHours(0,0,0,0); // avoid date-related issues
      date.setHours(parseInt(hours, 10), parseInt(minutes, 10));
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  }

  return (
    <section id="schedule-section" className="w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Event Schedule</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Plan your day and don't miss out on our amazing sessions and workshops.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="p-6 bg-background">
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-1/4" />
                    </div>
                  </div>
                </Card>
            ))
          ) : schedule.length === 0 ? (
            <p className="col-span-full text-center text-muted-foreground">The event schedule is being finalized. Check back soon!</p>
          ) : (
            schedule.map((session) => (
              <Card key={session.id} className="flex flex-col bg-background transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3 text-lg font-semibold">
                    <Mic className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>{session.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{session.speaker}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{formatTime(session.start_time)} ({session.duration_minutes} mins)</span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
