import LandingPage from '@/core/components/LandingPage';

export default function Home() {
  const currentYear: number = new Date().getFullYear();
  return (
    <div>
      <LandingPage />
      {/* <DoubleHorizontalRule /> */}
    </div>
  )
}
