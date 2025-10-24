import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ScheduleManager from './schedule-manager';
import SponsorManager from './sponsor-manager';

export default function AdminPanel() {
  return (
    <section className="container mx-auto py-12">
      <div className="space-y-4 mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Admin Management Portal</h2>
        <p className="text-muted-foreground">Manage event schedule and sponsors.</p>
      </div>
      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="schedule">Manage Schedule</TabsTrigger>
          <TabsTrigger value="sponsors">Manage Sponsors</TabsTrigger>
        </TabsList>
        <TabsContent value="schedule">
          <ScheduleManager />
        </TabsContent>
        <TabsContent value="sponsors">
          <SponsorManager />
        </TabsContent>
      </Tabs>
    </section>
  );
}
