import type { Schedule, Sponsor } from './types';

export const MOCK_SCHEDULE: Schedule[] = [
  {
    id: '1',
    title: 'Opening Ceremony & Keynote',
    speaker: 'Jane Doe',
    start_time: '09:00:00',
    duration_minutes: 60,
  },
  {
    id: '2',
    title: 'Next.js 15 Deep Dive',
    speaker: 'John Smith',
    start_time: '10:15:00',
    duration_minutes: 90,
  },
  {
    id: '3',
    title: 'AI on the Edge with Firebase',
    speaker: 'Emily White',
    start_time: '12:00:00',
    duration_minutes: 45,
  },
  {
    id: '4',
    title: 'Lunch Break',
    speaker: 'Caterers',
    start_time: '13:00:00',
    duration_minutes: 60,
  },
  {
    id: '5',
    title: 'Building a UI with ShadCN',
    speaker: 'Chris Green',
    start_time: '14:00:00',
    duration_minutes: 75,
  },
  {
    id: '6',
    title: 'Closing Remarks',
    speaker: 'Jane Doe',
    start_time: '15:30:00',
    duration_minutes: 30,
  },
];

export const MOCK_SPONSORS: Sponsor[] = [
  {
    id: '1',
    name: 'Innovate Corp',
    tier: 'Gold',
    logo_url: 'https://picsum.photos/seed/innovate/250/100',
  },
  {
    id: '2',
    name: 'Tech Solutions Ltd.',
    tier: 'Silver',
    logo_url: 'https://picsum.photos/seed/tech/200/80',
  },
  {
    id: '3',
    name: 'Code Wizards',
    tier: 'Bronze',
    logo_url: 'https://picsum.photos/seed/wizards/150/60',
  },
  {
    id: '4',
    name: 'Future Systems',
    tier: 'Gold',
    logo_url: 'https://picsum.photos/seed/future/250/100',
  },
  {
    id: '5',
    name: 'DevLink',
    tier: 'Silver',
    logo_url: 'https://picsum.photos/seed/devlink/200/80',
  },
];
