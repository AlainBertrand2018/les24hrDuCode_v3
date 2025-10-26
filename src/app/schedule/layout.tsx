import Header from '@/components/header-main';

export default function ScheduleLayout({
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
    </>
  )
}
