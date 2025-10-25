import Schedule from '@/components/schedule';
import { MOCK_SCHEDULE } from '@/lib/mock-data';

export default function SchedulePage() {
  return (
    <div className="container">
      <Schedule initialSchedule={MOCK_SCHEDULE} />
    </div>
  );
}
