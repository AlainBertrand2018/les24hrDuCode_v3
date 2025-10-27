'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/header-main';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import LanguageModal from '@/components/language-modal';
import VideoPlayer from '@/components/video-player';
import RegistrationWaitlistModal from '@/components/registration-waitlist-modal';
import { FilePenLine, Video, PartyPopper, CalendarDays, Rocket, Trophy, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';


const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name is required.' }),
  email: z.string().email({ message: 'A valid email is required.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});


const faqItems = [
    {
        question: "What is Les 24hr du Code?",
        answer: "It is the ultimate 24-hour coding challenge and entrepreneur competition in Mauritius. It's a high-energy event where teams design, code, and deploy an MVP in just 24 hours."
    },
    {
        question: "Who can participate?",
        answer: "The event is open to developers, designers, AI specialists, students, and anyone passionate about technology and innovation. You can register as a team or as an individual to be matched with one."
    },
    {
        question: "What should I bring?",
        answer: "You'll need to bring your laptop, any necessary chargers, and your brilliant ideas. We'll provide the food, drinks, internet, and an inspiring environment to keep you going."
    },
    {
        question: "Are there prizes?",
        answer: "Yes! There will be prizes for the top teams, including cash prizes, tech gadgets, and unique opportunities with our sponsors. More details will be announced closer to the event date."
    },
]

const videoUrls = {
    en: '/videos/Les24hrducode_expl_en_opt.mp4',
    fr: '/videos/Les24hrducode_Expl_Fr_opt.mp4',
};

const timelinePhases = [
  {
    title: "Registration",
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
    items: [
      { date: "01 Nov 2025", description: "Registration Opens" },
      { date: "20 Feb 2026", description: "Registration Closes" },
    ],
  },
  {
    title: "Selection",
    icon: <FilePenLine className="h-8 w-8 text-primary" />,
    items: [
      { date: "21 Jan 2026", description: "Phase 1 (on Plan)" },
      { date: "20 Feb 2026", description: "Phase 2 (via Video Pitch)" },
    ],
  },
  {
    title: "The Event",
    icon: <PartyPopper className="h-8 w-8 text-primary" />,
    items: [
      { date: "13 Mar 2026", description: "Official Opening, Networking, Keynote speeches" },
      { date: "14 Mar 2026", description: "Public Opening, Competition launch, Workshops" },
      { date: "15 Mar 2026", description: "Competition closes, Demos, Awards, Closing Concert" },
    ],
  },
]

const speakers = [
  { name: 'Speaker One', title: 'AI Specialist' },
  { name: 'Speaker Two', title: 'Next.js Guru' },
  { name: 'Speaker Three', title: 'Firebase Expert' },
  { name: 'Speaker Four', title: 'UI/UX Designer' },
  { name: 'Speaker Five', title: 'Cloud Architect' },
  { name: 'Speaker Six', title: 'DevOps Leader' },
];

type Speaker = typeof speakers[0];

const mentors = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'Principal Engineer @ Google',
    avatarUrl: 'https://picsum.photos/seed/mentor1/200',
    bio: 'Sarah is a seasoned engineer with over 15 years of experience in building large-scale distributed systems. She is passionate about mentoring the next generation of software architects.',
    skills: ['System Design', 'Cloud Computing', 'Go', 'Kubernetes'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '2',
    name: 'David Lee',
    title: 'UX Lead @ Microsoft',
    avatarUrl: 'https://picsum.photos/seed/mentor2/200',
    bio: 'David leads a team of designers focused on creating intuitive and accessible user experiences for millions. He believes in a user-centered and data-driven design process.',
    skills: ['UX Research', 'Interaction Design', 'Figma', 'Accessibility'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    title: 'AI Researcher @ OpenAI',
    avatarUrl: 'https://picsum.photos/seed/mentor3/200',
    bio: 'Maria\'s work focuses on natural language processing and large language models. She is excited to help teams integrate cutting-edge AI into their hackathon projects.',
    skills: ['Machine Learning', 'Python', 'PyTorch', 'NLP'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '4',
    name: 'Tom Brighton',
    title: 'Sr. Advocate @ AWS',
    avatarUrl: 'https://picsum.photos/seed/mentor4/200',
    bio: 'Tom helps developers build amazing applications on AWS. He has deep expertise in serverless architectures and cloud-native development.',
    skills: ['AWS', 'Serverless', 'Node.js', 'DevOps'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '5',
    name: 'Aisha Khan',
    title: 'Cybersecurity Expert',
    avatarUrl: 'https://picsum.photos/seed/mentor5/200',
    bio: 'With a background in ethical hacking and threat modeling, Aisha is dedicated to making the digital world a safer place. She can help you secure your application.',
    skills: ['Security Audits', 'Penetration Testing', 'OWASP', 'Cryptography'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '6',
    name: 'Kenji Tanaka',
    title: 'Product Manager @ Vercel',
    avatarUrl: 'https://picsum.photos/seed/mentor6/200',
    bio: 'Kenji focuses on developer experience and frontend performance. He has a passion for Next.js and helping teams build for the modern web.',
    skills: ['Next.js', 'React', 'Performance', 'Product Management'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '7',
    name: 'Fatima Al-Jamil',
    title: 'Data Scientist @ Netflix',
    avatarUrl: 'https://picsum.photos/seed/mentor7/200',
    bio: 'Fatima specializes in recommendation systems and large-scale data analysis. She enjoys turning raw data into compelling stories and product features.',
    skills: ['Data Science', 'Python', 'SQL', 'Spark'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '8',
    name: 'Charles Xavier',
    title: 'Professor of Genetics',
    avatarUrl: 'https://picsum.photos/seed/mentor8/200',
    bio: 'Charles is a world-renowned geneticist exploring the future of human evolution and its intersection with technology and society.',
    skills: ['Genetics', 'Bioinformatics', 'Ethics', 'Public Speaking'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '9',
    name: 'Lena Petrova',
    title: 'Web3 Specialist',
    avatarUrl: 'https://picsum.photos/seed/mentor9/200',
    bio: 'Lena is a blockchain architect and a strong advocate for decentralized technologies. She helps teams navigate the complex world of Web3.',
    skills: ['Blockchain', 'Solidity', 'Ethereum', 'DeFi'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '10',
    name: 'Marco Chen',
    title: 'Head of Mobile @ Spotify',
    avatarUrl: 'https://picsum.photos/seed/mentor10/200',
    bio: 'Marco leads the development of Spotify\'s mobile applications. His expertise lies in creating seamless user experiences on iOS and Android.',
    skills: ['iOS', 'Android', 'Swift', 'Kotlin'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '11',
    name: 'Isabelle Dubois',
    title: 'Creative Director @ Ubisoft',
    avatarUrl: 'https://picsum.photos/seed/mentor11/200',
    bio: 'Isabelle has been instrumental in the creation of several award-winning video games. She brings a wealth of knowledge in game design and storytelling.',
    skills: ['Game Design', 'Unity', 'C#', 'Storytelling'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '12',
    name: 'Raj Patel',
    title: 'DevRel Lead @ Stripe',
    avatarUrl: 'https://picsum.photos/seed/mentor12/200',
    bio: 'Raj is passionate about building developer communities and creating resources that empower developers to build successful products.',
    skills: ['Developer Relations', 'APIs', 'Payments', 'Community'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '13',
    name: 'Olivia Martinez',
    title: 'AR/VR Developer',
    avatarUrl: 'https://picsum.photos/seed/mentor13/200',
    bio: 'Olivia is at the forefront of immersive technologies, creating experiences that blend the digital and physical worlds. She is an expert in Unity and Unreal Engine.',
    skills: ['AR/VR', 'Unity', 'Unreal Engine', '3D Modeling'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '14',
    name: 'Ben Carter',
    title: 'SRE @ Cloudflare',
    avatarUrl: 'https://picsum.photos/seed/mentor14/200',
    bio: 'Ben ensures the reliability and performance of one of the world\'s largest networks. He specializes in automation and incident response.',
    skills: ['SRE', 'Automation', 'Networking', 'Go'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '15',
    name: 'Chloe Kim',
    title: 'Founder & CEO @ EcoTech',
    avatarUrl: 'https://picsum.photos/seed/mentor15/200',
    bio: 'Chloe is a serial entrepreneur who successfully built and sold two startups. She is now focused on leveraging technology for environmental sustainability.',
    skills: ['Entrepreneurship', 'Fundraising', 'SaaS', 'Leadership'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '16',
    name: 'Samuel Jones',
    title: 'Distinguished Engineer @ IBM',
    avatarUrl: 'https://picsum.photos/seed/mentor16/200',
    bio: 'Samuel has a long and storied career in enterprise software, with deep expertise in Java, mainframe systems, and hybrid cloud environments.',
    skills: ['Java', 'Enterprise Arch.', 'Mainframe', 'Hybrid Cloud'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '17',
    name: 'Amelia Wang',
    title: 'Design Systems Lead @ Atlassian',
    avatarUrl: 'https://picsum.photos/seed/mentor17/200',
    bio: 'Amelia is responsible for the design system that powers Jira, Confluence, and other Atlassian products. She is passionate about component-based design.',
    skills: ['Design Systems', 'React', 'Figma', 'CSS-in-JS'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '18',
    name: 'Gustavo Fring',
    title: 'Logistics Mogul',
    avatarUrl: 'https://picsum.photos/seed/mentor18/200',
    bio: 'Gustavo is a meticulous planner and a master of logistics and operations. He can help you streamline your processes and build a scalable business.',
    skills: ['Logistics', 'Operations', 'Business Strategy', 'Quality Control'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '19',
    name: 'Yuki Nakamura',
    title: 'Robotics Engineer',
    avatarUrl: 'https://picsum.photos/seed/mentor19/200',
    bio: 'Yuki builds and programs robots for manufacturing and exploration. She is an expert in ROS and autonomous systems.',
    skills: ['Robotics', 'ROS', 'C++', 'Computer Vision'],
    socials: { linkedin: '#', github: '#', website: '#' },
  },
  {
    id: '20',
    name: 'Liam Murphy',
    title: 'Growth Hacker',
    avatarUrl: 'https://picsum.photos/seed/mentor20/200',
    bio: 'Liam helps startups achieve rapid growth through creative marketing strategies and data-driven experimentation.',
    skills: ['Growth Hacking', 'Marketing', 'SEO', 'A/B Testing'],
    socials: { linkedin: '#', github: '#', website: '#' },
  }
];
type Mentor = typeof mentors[0];

const mockArticles = [
  {
    id: '1',
    title: 'The Future of AI in Development',
    excerpt: 'Explore how AI is reshaping the software development landscape.',
    category: 'AI & ML',
    imageUrl: 'https://picsum.photos/seed/article1/600/400',
    imageHint: 'abstract AI'
  },
  {
    id: '2',
    title: 'Mastering Vibe Coding',
    excerpt: 'Discover the secrets to staying in the zone and shipping features faster.',
    category: 'Productivity',
    imageUrl: 'https://picsum.photos/seed/article2/600/400',
    imageHint: 'developer coding'
  },
  {
    id: '3',
    title: 'Why Mauritius is the Next Tech Hub',
    excerpt: 'A look into the burgeoning tech scene of the paradise island.',
    category: 'Community',
    imageUrl: 'https://picsum.photos/seed/article3/600/400',
    imageHint: 'Mauritius landscape'
  },
  {
    id: '4',
    title: 'From MVP to Market Leader',
    excerpt: 'Lessons learned from past winners of Les 24hr du Code.',
    category: 'Entrepreneurship',
    imageUrl: 'https://picsum.photos/seed/article4/600/400',
    imageHint: 'startup success'
  },
];


export default function HomePage() {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const [featuredSpeakers, setFeaturedSpeakers] = useState<Speaker[]>([]);
  const [featuredMentors, setFeaturedMentors] = useState<Mentor[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [isContactFormSubmitting, setContactFormSubmitting] = useState(false);
  const [isContactFormSubmitted, setContactFormSubmitted] = useState(false);

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  async function onContactSubmit(values: z.infer<typeof contactFormSchema>) {
    setContactFormSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Mock API call
    console.log('Contact Form Submitted:', values);
    setContactFormSubmitting(false);
    setContactFormSubmitted(true);
  }

  useEffect(() => {
    // Open the language modal on initial load
    setIsLanguageModalOpen(true);
    setIsClient(true);
    
    // Select 4 random speakers
    const shuffledSpeakers = [...speakers].sort(() => 0.5 - Math.random());
    setFeaturedSpeakers(shuffledSpeakers.slice(0, 4));
    
    // Select 4 random mentors
    const shuffledMentors = [...mentors].sort(() => 0.5 - Math.random());
    setFeaturedMentors(shuffledMentors.slice(0, 4));
  }, []);

  const handleSelectLanguage = (selectedLang: 'en' | 'fr') => {
    setLang(selectedLang);
    setVideoSrc(videoUrls[selectedLang]);
    setIsLanguageModalOpen(false);
    setIsVideoPlayerOpen(true);
  };
  
  const handleVideoClose = () => {
    setIsVideoPlayerOpen(false);
    setVideoSrc('');
    setIsWaitlistModalOpen(true);
  };
  
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center relative text-primary-foreground">
            <Image
                src="/images/home_bk.webp"
                alt="Hackathon event background"
                fill
                className="object-cover blur-sm"
                priority
                data-ai-hint="hackathon event"
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative z-20 flex flex-col h-full w-full">
              <div className="flex-grow flex flex-col justify-center items-center container">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Welcome to Les 24hr du Code</h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mt-2 font-light">A unique Vibe Coding Challenge in Mauritius.</p>
              </div>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen flex flex-col justify-center items-center bg-background">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-5xl">
            <div className="flex justify-center">
                <Image
                    src="/images/Base_Logo_dk.png"
                    alt="Les 24hr du Code Logo"
                    width={585}
                    height={585}
                    className="w-full h-auto max-w-[352px]"
                />
            </div>
            <div className="text-left">
                <h2 className="text-3xl font-bold">What is "Les 24hr du Code"?</h2>
                <p className="text-muted-foreground mt-4 text-lg font-light">
                  More than just a hackathon, Les 24hr du Code is a unique, 24-hour crucible for AI-driven innovation. We bring together 100 teams of two founders—including students, professionals, intrapreneurs, and entrepreneurs—all united by a business idea and an interest in AI. After an initial selection, 16 finalists spend 24 intensive hours using "vibe coding" to solve digital challenges and deliver a functional Minimum Viable Product (MVP). Challenge your limits in code, collaboration, and creativity.
                </p>
            </div>
          </div>
        </section>
        
        {/* Event Timeline Section */}
        <section id="schedule" className="h-screen flex flex-col justify-center items-center bg-card">
           <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold">Event Timeline</h2>
                <p className="text-muted-foreground mt-4 font-light">Key dates and events for the competition.</p>
                <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
                    {timelinePhases.map((phase) => (
                        <div key={phase.title} className="p-6 rounded-lg bg-background/50">
                            <div className="flex items-center gap-4 mb-4">
                                {phase.icon}
                                <h3 className="text-2xl font-bold text-primary">{phase.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {phase.items.map(item => (
                                    <li key={item.date}>
                                        <p className="font-semibold">{item.date}</p>
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <Button variant="link" className="mt-8">Full schedule &rarr;</Button>
            </div>
        </section>

        {/* Register Your Team Section */}
        <section id="teams" className="h-screen flex flex-col justify-center items-center bg-background">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Register Your Team</h2>
            <p className="text-muted-foreground mt-4 font-light">Ready to take on the challenge? Form your team and get ready to build something amazing.</p>
            <Button size="lg" className="mt-6">Register Now</Button>
            <Button variant="link" className="mt-2 block mx-auto">View teams &rarr;</Button>
          </div>
        </section>
        
        {/* Speakers Section */}
        {isClient && (
        <section id="speakers" className="h-screen flex flex-col justify-center items-center bg-card">
           <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Featured Speakers</h2>
             <p className="text-muted-foreground mt-4 font-light">Learn from industry leaders and experts.</p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
               {featuredSpeakers.map((speaker, index) => (
                <div key={index} className="flex flex-col items-center space-y-3">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={`https://picsum.photos/seed/${speaker.name.replace(/\s+/g, '')}/200`} alt={speaker.name} />
                    <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <p className="font-bold">{speaker.name}</p>
                    <p className="text-sm text-muted-foreground">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="link" asChild className="mt-8">
                <Link href="/schedule#speakers">See all speakers &rarr;</Link>
            </Button>
          </div>
        </section>
        )}

        {/* Mentors Section */}
        {isClient && (
        <section id="mentors" className="h-screen flex flex-col justify-center items-center bg-background">
           <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Our Mentors</h2>
             <p className="text-muted-foreground mt-4 font-light">Get guidance from experienced professionals.</p>
             <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
               {featuredMentors.map((mentor) => (
                  <Card 
                      key={mentor.id} 
                      className="group flex flex-col items-center text-center p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg"
                  >
                      <Avatar className="h-32 w-32 mb-6 border-4 border-transparent group-hover:border-primary/50 transition-colors">
                          <AvatarImage src={mentor.avatarUrl} alt={mentor.name} />
                          <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <CardContent className="flex-grow flex flex-col justify-center p-0">
                          <h3 className="text-xl font-bold">{mentor.name}</h3>
                          <p className="text-muted-foreground">{mentor.title}</p>
                      </CardContent>
                  </Card>
              ))}
            </div>
            <Button variant="link" asChild className="mt-4">
              <Link href="/mentors#mentors-list">Meet the mentors &rarr;</Link>
            </Button>
          </div>
        </section>
        )}
        
        {/* Blog Section */}
        <section id="blog" className="h-screen flex flex-col justify-center items-center bg-card">
           <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
             <p className="text-muted-foreground mt-4 font-light">News and updates from the team.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {mockArticles.map((article) => (
                <Link key={article.id} href={`/blog/${article.id}`} className="group block">
                  <Card className="overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover"
                        data-ai-hint={article.imageHint}
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">{article.category}</Badge>
                      <CardTitle className="text-lg text-left">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm text-left">{article.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <Button variant="link" className="mt-8">Read more on our blog &rarr;</Button>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="h-screen flex flex-col justify-center bg-background">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                <p className="text-muted-foreground mt-4 font-light">
                    Find answers to common questions about Les 24hr du Code.
                </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground font-light">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
        </section>

        {/* Info & Contact Section */}
        <section id="contact" className="h-screen flex flex-col justify-center items-center bg-primary/10">
           <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold">Get In Touch</h2>
              <p className="text-muted-foreground mt-4 font-light max-w-xl mx-auto">
                Have questions or want to get involved? Drop us a line.
              </p>
            
              <Card className="max-w-xl mx-auto mt-8 text-left bg-card">
                  <CardContent className="p-6">
                    {isContactFormSubmitted ? (
                        <div className="text-center py-10">
                            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                            <p className="text-muted-foreground">
                                Thank you for reaching out. We'll get back to you as soon as possible.
                            </p>
                        </div>
                    ) : (
                        <Form {...contactForm}>
                            <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
                                <FormField control={contactForm.control} name="name" render={({ field }) => (
                                    <FormItem><FormLabel>Your Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <FormField control={contactForm.control} name="email" render={({ field }) => (
                                    <FormItem><FormLabel>Your Email</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <FormField control={contactForm.control} name="message" render={({ field }) => (
                                    <FormItem><FormLabel>Your Message</FormLabel><FormControl><Textarea rows={4} {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <Button type="submit" className="w-full" disabled={isContactFormSubmitting}>
                                    {isContactFormSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Sending...</> : 'Send Message'}
                                </Button>
                            </form>
                        </Form>
                    )}
                  </CardContent>
              </Card>

            <div className="mt-8">
              <p className="text-muted-foreground font-light">Or email us directly at <a href="mailto:contact@24hrducode.com" className="text-primary underline">contact@24hrducode.com</a></p>
            </div>
          </div>
        </section>
      </main>
      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        onSelectLanguage={handleSelectLanguage}
      />
      <VideoPlayer
        isOpen={isVideoPlayerOpen}
        onClose={handleVideoClose}
        onEnded={handleVideoClose}
        videoSrc={videoSrc}
      />
       <RegistrationWaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
        lang={lang}
      />
    </>
  );
}

    