import Header from '@/components/header-main';
import Footer from '@/components/footer';

export default function LiveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        {children}
      </main>
      <Footer />
    </>
  )
}
