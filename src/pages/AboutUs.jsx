import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import useMeta from '../hooks/useMeta'
import {
  ABOUT_FEATURES,
  STATS,
  STORY_STEPS,
  SITE_URL,
  VALUES,
} from '../data/content'

export default function AboutUs() {
  useMeta({
    title: 'About Mirevuno AI - AI-Powered Crypto Trading Platform',
    description:
      'About Mirevuno AI - our story, purpose, team and the transparency and controls behind the platform.',
    canonical: `${SITE_URL}/about-us`,
  })

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
              Smart, automated crypto trading with{' '}
              <span className="gradient-text">Mirevuno AI</span>
            </h1>
            <p className="hero__sub">
              Mirevuno AI supports market analysis, helping you assess opportunities, respond
              efficiently and invest with greater transparency.
            </p>
            <div className="about-hero__actions">
              <Link to="/#register" className="btn btn--amber">
                Register
              </Link>
              <Link to="/contact-us" className="btn btn--ghost">
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
            <span className="eyebrow">What we offer</span>
            <h2>Technology, security and personalised support</h2>
            <p>
              Our platform pairs automated market analysis with support resources to help you make
              better-informed decisions.
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
            <h2>From a simple idea to a platform built around accessible crypto trading</h2>
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
            <h2>What we believe and why we created Mirevuno AI</h2>
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
              We are not chasing short-term wins. Mirevuno AI is built to support ongoing trading
              through stable technology, consistent service and continuous platform development.
            </p>
          </div>

          <p className="about-closing" data-reveal>
            Whatever your experience level, Mirevuno AI is designed to help Australians trade with
            clarity. From your first crypto purchase to a diversified portfolio across forex,
            shares and commodities, the platform brings analysis, execution and account controls
            together in one place - so you can focus on the decisions that matter.
          </p>
        </div>
      </section>
    </main>
  )
}
