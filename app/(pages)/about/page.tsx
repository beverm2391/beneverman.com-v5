import AboutPage from "@/core/components/Pages_/AboutPage";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ben Everman | About",
  description: "About Ben Everman",
}

export default function Page() {
  return (
    <AboutPage />
  )
}