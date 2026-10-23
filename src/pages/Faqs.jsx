import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList'
import useMeta from '../hooks/useMeta'
import { FAQS_PAGE, FAQ_QUICK_CARDS, SITE_URL } from '../data/content'

export default function Faqs() {
  useMeta({
    title: 'Mirevuno AI FAQs - Fees, Security & Getting Started',
    canonical: `${SITE_URL}/faqs`,
    description:
      'Mirevuno AI frequently asked questions - how the platform works, security, withdrawals, fees and more.',
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
              Whether you are just starting out, managing a portfolio or need account help, the
              answers to common platform questions are here. Mirevuno AI is built for Australian
              traders - from newcomers exploring crypto to seasoned investors running a
              diversified portfolio.
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
            <p>Everything you need to know before trading with Mirevuno AI.</p>
          </div>

          <FaqList items={FAQS_PAGE} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section--tight">
        <div className="container faqs-cta" data-reveal>
          <h2>Can&apos;t find the answer you need?</h2>
          <p>Our team is on hand for anything else you&apos;d like to ask.</p>
          <Link to="/contact-us" className="btn btn--amber">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
