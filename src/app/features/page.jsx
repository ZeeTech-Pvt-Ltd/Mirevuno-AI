import Link from 'next/link'
import Icon from '../../components/Icon'
import Security from '../../sections/Security'
import FinalCta from '../../sections/FinalCta'
import { ABOUT_CARDS, BENEFITS } from '../../data/content'
import { pageMeta } from '../../lib/meta'

export const metadata = pageMeta({
  title: 'Features - Mirevuno AI | AI Tools & Trading Features',
  description:
    "Explore Mirevuno AI's platform features - AI-powered analysis, beginner-friendly tools, transparent fees and bank-grade security.",
  path: '/features',
})

export default function Features() {
  return (
    <main>
      {/* Hero - centered, gradient headline */}
      <section className="hero about-hero">
        <div className="hero__blob hero__blob--1" aria-hidden="true" />
        <div className="hero__blob hero__blob--2" aria-hidden="true" />
        <span className="ghost" aria-hidden="true">
          FT
        </span>
        <div className="container hero__inner" data-reveal>
          <div>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              Platform features
            </span>
            <h1>
              Built to make trading feel <span className="gradient-text">effortless</span>
            </h1>
            <p className="hero__sub">
              From AI-powered market insight to bank-grade security - here&apos;s everything you
              get when you trade with Mirevuno AI.
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

      {/* Feature grid */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Everything included</span>
            <h2>Tools for every stage of your journey</h2>
            <p>
              Whether it&apos;s your first login or your hundredth trade, every tool you need
              comes included.
            </p>
          </div>

          <div className="bento" data-reveal-grid>
            {BENEFITS.map(({ title, text, icon }, i) => (
              <div
                className={`benefit${i < 2 ? ' benefit--lg' : ''}${i === 1 ? ' benefit--accent' : ''}`}
                data-reveal
                key={title}
              >
                <span className="benefit__icon" aria-hidden="true">
                  <Icon name={icon} size={24} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core strengths - hairline rows */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Under the hood</span>
            <h2>Analysis, speed and control working together</h2>
            <p>
              Three core strengths sit at the heart of the platform, so every decision you make
              rests on solid ground.
            </p>
          </div>

          <div className="about-list" data-reveal-grid>
            {ABOUT_CARDS.map(({ title, text, icon }) => (
              <div className="about-item" data-reveal key={title}>
                <span className="about-item__icon" aria-hidden="true">
                  <Icon name={icon} size={24} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Security />
      <FinalCta />
    </main>
  )
}
