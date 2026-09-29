import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList'
import useMeta from '../hooks/useMeta'
import { FAQS_PAGE, FAQ_QUICK_CARDS, SITE_URL } from '../data/content'

export default function Faqs() {
  useMeta({
    title: 'Mirevuno AI FAQs - Fees, Security & How It Works',
    canonical: `${SITE_URL}/faqs`,
    description:
      'Mirevuno AI frequently asked questions - how the platform works, security, withdrawals, fees, and more.',
  })

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS_PAGE.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero - centered */}
      <section className="hero faqs-hero">
        <div className="hero__blob hero__blob--1" aria-hidden="true" />
        <div className="hero__blob hero__blob--3" aria-hidden="true" />
        <div className="container hero__inner" data-reveal>
          <div>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              FAQs
            </span>
            <h1>
              Mirevuno AI <span className="gradient-text">FAQs</span>
            </h1>
            <p className="hero__sub">
              Whether you are getting started, managing your portfolio or need help with your
              account, we can answer common platform questions. Mirevuno AI is built for
              Australian traders - from first-time users exploring crypto to experienced investors
              managing a diversified portfolio.
            </p>

            <div className="faqs-quick" data-reveal-grid>
              {FAQ_QUICK_CARDS.map(({ title, text }) => (
                <div className="faqs-quick__card" data-reveal key={title}>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full question list */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">FAQ</span>
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know about trading with Mirevuno AI.</p>
          </div>

          <FaqList items={FAQS_PAGE} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section--tight">
        <div className="container faqs-cta" data-reveal>
          <h2>Can&apos;t find what you&apos;re looking for?</h2>
          <p>Our team is ready to help with anything else you need.</p>
          <Link to="/contact-us" className="btn btn--amber">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
