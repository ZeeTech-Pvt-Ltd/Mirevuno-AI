import Hero from '../sections/Hero'
import Stats from '../sections/Stats'
import TrustUs from '../sections/TrustUs'
import ReviewsBand from '../sections/ReviewsBand'
import About from '../sections/About'
import Benefits from '../sections/Benefits'
import Security from '../sections/Security'
import HowItWorks from '../sections/HowItWorks'
import Testimonials from '../sections/Testimonials'
import Faq from '../sections/Faq'
import FinalCta from '../sections/FinalCta'
import { pageMeta } from '../lib/meta'

export const metadata = pageMeta({
  title: 'Mirevuno AI - Official AI Trading Platform for Australia',
  description:
    "Mirevuno AI - Australia's online trading platform. Trade crypto, forex, shares and more with AI-powered analysis and round-the-clock access.",
  path: '/',
})

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <HowItWorks />
      <About />
      <Benefits />
      <ReviewsBand />
      <TrustUs />
      <Testimonials />
      <Security />
      <Faq />
      <FinalCta />
    </main>
  )
}
