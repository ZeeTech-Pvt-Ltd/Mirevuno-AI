import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import useMeta from '../hooks/useMeta'
import { SITE_URL } from '../data/content'

export default function ThankYou() {
  useMeta({
    title: 'Thank You for Registering - Mirevuno AI',
    canonical: `${SITE_URL}/thank-you`,
    description: 'Thank you for registering with Mirevuno AI. Our team will contact you shortly.',
  })

  return (
    <main className="hero thank-you">
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="container thank-you__inner">
        <span className="thank-you__check" aria-hidden="true">
          <Icon name="check" size={40} strokeWidth={2.5} />
        </span>
        <h1>
          Thank <span className="gradient-text">You!</span>
        </h1>
        <p className="thank-you__sub">
          Your registration has been received. Our team will contact you shortly to get you
          started.
        </p>
        <div className="thank-you__actions">
          <Link to="/" className="btn btn--amber">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
