import LandingPage from '@/core/components/landingPage';

export default function Home() {
  const currentYear: number = new Date().getFullYear();
  return (
    <div>
      <LandingPage />
      {/* <DoubleHorizontalRule /> */}
    </div>
  )
}
