import Header from '@/components/header-main';

export default function ExpoLayout({
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
