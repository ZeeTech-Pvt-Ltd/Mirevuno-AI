import Link from 'next/link'
import Faq from '../../sections/Faq'
import FinalCta from '../../sections/FinalCta'
import { FAQ_QUICK_CARDS, STEPS } from '../../data/content'
import { pageMeta } from '../../lib/meta'

export const metadata = pageMeta({
  title: 'How It Works - Mirevuno AI | Start Trading in 3 Steps',
  description:
    'How Mirevuno AI works - create a free account, add funds from 347 A$ and start trading crypto, forex and more in three simple steps.',
  path: '/how-it-works',
})

export default function HowItWorks() {
  return (
    <main>
      {/* Hero - centered, gradient headline */}
      <section className="hero about-hero">
        <div className="hero__blob hero__blob--1" aria-hidden="true" />
        <div className="hero__blob hero__blob--2" aria-hidden="true" />
        <span className="ghost" aria-hidden="true">
          HIW
        </span>
        <div className="container hero__inner" data-reveal>
          <div>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              How it works
            </span>
            <h1>
              Your first trade in <span className="gradient-text">three steps</span>
            </h1>
            <p className="hero__sub">
              From creating a free account to your first completed trade - Mirevuno AI keeps the
              path simple, and no experience is required.
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

      {/* The three steps */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">The process</span>
            <h2>Three steps, zero confusion</h2>
            <p>Sign up, add funds and trade - the whole journey takes minutes.</p>
          </div>

          <div className="steps" data-reveal-grid>
            {STEPS.map(({ title, text }, i) => (
              <div className="step" data-reveal key={title}>
                <span className="step__num" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick answers before getting started */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Good to know</span>
            <h2>Before you begin</h2>
            <p>Quick answers to the questions new members ask first.</p>
          </div>

          <div className="faqs-quick" data-reveal-grid>
            {FAQ_QUICK_CARDS.map(({ title, text }) => (
              <div className="faqs-quick__card" data-reveal key={title}>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <FinalCta />
    </main>
  )
}
