import Header from '@/components/header-main';
import Footer from '@/components/footer';

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background py-12 md:py-24">
        {children}
      </main>
      <Footer />
    </>
  )
}
