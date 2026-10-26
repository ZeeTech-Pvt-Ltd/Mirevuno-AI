import Link from 'next/link'
import ReviewsBand from '../../sections/ReviewsBand'
import Testimonials from '../../sections/Testimonials'
import TrustUs from '../../sections/TrustUs'
import FinalCta from '../../sections/FinalCta'
import { pageMeta } from '../../lib/meta'

export const metadata = pageMeta({
  title: 'Reviews - Mirevuno AI | Real Member Testimonials',
  description:
    'Mirevuno AI reviews and ratings - verified feedback from members around the world, with a 4.7/5 community rating.',
  path: '/reviews',
})

export default function Reviews() {
  return (
    <main>
      {/* Hero - centered, gradient headline */}
      <section className="hero about-hero">
        <div className="hero__blob hero__blob--1" aria-hidden="true" />
        <div className="hero__blob hero__blob--2" aria-hidden="true" />
        <span className="ghost" aria-hidden="true">
          RVW
        </span>
        <div className="container hero__inner" data-reveal>
          <div>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              Reviews
            </span>
            <h1>
              What members <span className="gradient-text">say about us</span>
            </h1>
            <p className="hero__sub">
              Verified reviews from Mirevuno AI members around the world - from first-time
              traders to seasoned investors.
            </p>
            <div className="about-hero__actions">
              <Link href="/#register" className="btn btn--amber">
                Register
              </Link>
              <Link href="/contact-us" className="btn btn--ghost">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ReviewsBand />
      <Testimonials />
      <TrustUs />
      <FinalCta />
    </main>
  )
}
