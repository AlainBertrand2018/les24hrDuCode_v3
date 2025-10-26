
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
    id: 'd1',
    name: 'Ministry of Information Technology, Communication and Innovation',
    tier: 'Diamond',
    logo_url: '/images/Coat_of_arms_of_Mauritius_(Original_version).svg.png',
  },
  {
    id: 'd2',
    name: 'Bank of Mauritius',
    tier: 'Diamond',
    logo_url: 'https://picsum.photos/seed/bom/300/120',
  },
  {
    id: 'd3',
    name: 'Economic Development Board',
    tier: 'Diamond',
    logo_url: 'https://picsum.photos/seed/edb/300/120',
  },
  { id: 'p1', name: 'Google', tier: 'Platinum', logo_url: '/images/logos/goog_transp.png' },
  { id: 'p2', name: 'Microsoft', tier: 'Platinum', logo_url: '/images/logos/ms_transp.png' },
  { id: 'p3', name: 'OpenAI', tier: 'Platinum', logo_url: '/images/logos/openai_wht_transp.png' },
  { id: 'p4', name: 'Mistral', tier: 'Platinum', logo_url: '/images/logos/mistral_wht_transp.png' },
  { id: 'p5', name: 'Anthropic', tier: 'Platinum', logo_url: '/images/logos/anthr_wht_transp.png' },
  { id: 'p6', name: 'Vercel', tier: 'Platinum', logo_url: '/images/logos/vercel.png' },
  { id: 'g1', name: 'Emtel', tier: 'Gold', logo_url: 'https://picsum.photos/seed/emtel/250/100' },
  { id: 'g2', name: 'MauBank', tier: 'Gold', logo_url: 'https://picsum.photos/seed/maubank/250/100' },
  { id: 'g3', name: 'Turbine', tier: 'Gold', logo_url: 'https://picsum.photos/seed/turbine/250/100' },
  { id: 's1', name: 'Silver Sponsor 1', tier: 'Silver', logo_url: 'https://picsum.photos/seed/silver1/200/80' },
  { id: 's2', name: 'Silver Sponsor 2', tier: 'Silver', logo_url: 'https://picsum.photos/seed/silver2/200/80' },
  { id: 's3', name: 'Silver Sponsor 3', tier: 'Silver', logo_url: 'https://picsum.photos/seed/silver3/200/80' },
  { id: 's4', name: 'Silver Sponsor 4', tier: 'Silver', logo_url: 'https://picsum.photos/seed/silver4/200/80' },
  { id: 's5', name: 'Silver Sponsor 5', tier: 'Silver', logo_url: 'https://picsum.photos/seed/silver5/200/80' },
  { id: 's6', name: 'Silver Sponsor 6', tier: 'Silver', logo_url: 'https://picsum.photos/seed/silver6/200/80' },
  { id: 's7', name: 'Silver Sponsor 7', tier: 'Silver', logo_url: 'https://picsum.photos/seed/silver7/200/80' },
  { id: 's8', name: 'Silver Sponsor 8', tier: 'Silver', logo_url: 'https://picsum.photos/seed/silver8/200/80' },
];

