import Link from 'next/link'
import Icon from '../../components/Icon'
import { pageMeta } from '../../lib/meta'

export const metadata = pageMeta({
  title: 'Thank You for Registering - Mirevuno AI',
  description: 'Thanks for registering with Mirevuno AI. Our team will be in touch shortly.',
  path: '/thank-you',
})

export default function ThankYou() {
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
          Your registration has landed safely. A member of our team will be in touch shortly to
          get you started.
        </p>
        <div className="thank-you__actions">
          <Link href="/" className="btn btn--amber">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
