import Link from 'next/link'
import Icon from '../../components/Icon'
import {
  ABOUT_FEATURES,
  STATS,
  STORY_STEPS,
  VALUES,
} from '../../data/content'
import { pageMeta } from '../../lib/meta'

export const metadata = pageMeta({
  title: 'About Mirevuno AI - Our Story and Platform',
  description:
    'About Mirevuno AI - our story, our purpose and the transparency and controls behind the platform.',
  path: '/about-us',
})

export default function AboutUs() {
  return (
    <main>
      {/* Hero - centered, gradient headline */}
      <section className="hero about-hero">
        <div className="hero__blob hero__blob--1" aria-hidden="true" />
        <div className="hero__blob hero__blob--2" aria-hidden="true" />
        <span className="ghost" aria-hidden="true">
          ABT
        </span>
        <div className="container hero__inner" data-reveal>
          <div>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              About us
            </span>
            <h1>
              Smart, automated crypto trading, powered by{' '}
              <span className="gradient-text">Mirevuno AI</span>
            </h1>
            <p className="hero__sub">
              Mirevuno AI backs your market analysis, helping you weigh up opportunities, act
              efficiently and invest with clearer transparency.
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

      {/* Platform stats */}
      <section className="section section--tight">
        <div className="container">
          <div className="stats" data-reveal>
            {STATS.map(({ value, label }) => (
              <div className="stat" key={label}>
                <div className="stat__value">{value}</div>
                <div className="stat__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - numbered hairline rows */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">What you get</span>
            <h2>Technology, security and support that feels personal</h2>
            <p>
              The platform combines automated market analysis with support resources, so your
              decisions rest on better information.
            </p>
          </div>
          <div className="about-feature-list" data-reveal-grid>
            {ABOUT_FEATURES.map(({ title, text, icon }, i) => (
              <div className="about-feature-row" data-reveal key={title}>
                <span className="about-feature-row__num" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span className="about-feature-row__icon" aria-hidden="true">
                  <Icon name={icon} size={22} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our story - step cards */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Our story</span>
            <h2>How a simple idea grew into a platform built around accessible crypto trading</h2>
          </div>
          <div className="story-grid" data-reveal-grid>
            {STORY_STEPS.map(({ title, text }, i) => (
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

      {/* Our purpose - icon cards + long-term callout */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Our purpose</span>
            <h2>What we stand for and why Mirevuno AI exists</h2>
          </div>
          <div className="about-values-grid" data-reveal-grid>
            {VALUES.map(({ title, text, icon }) => (
              <div className="benefit" data-reveal key={title}>
                <span className="benefit__icon" aria-hidden="true">
                  <Icon name={icon} size={22} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="about-longterm" data-reveal>
            <strong>Think long term</strong>
            <p>
              We are not chasing quick wins. Mirevuno AI exists to support trading over the long
              haul - through stable technology, dependable service and continuous platform
              development.
            </p>
          </div>

          <p className="about-closing" data-reveal>
            Whatever your level of experience, Mirevuno AI is built to help Australians trade with
            clarity. From a first crypto purchase to a diversified portfolio spanning forex,
            shares and commodities, the platform unites analysis, execution and account controls
            in one place - leaving you free to focus on the decisions that matter.
          </p>
        </div>
      </section>
    </main>
  )
}
