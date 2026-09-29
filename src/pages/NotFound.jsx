import { Link } from 'react-router-dom'
import useMeta from '../hooks/useMeta'

export default function NotFound() {
  useMeta({
    title: 'Page Not Found - Mirevuno AI',
    description: "The page you're looking for doesn't exist. Head back to the Mirevuno AI homepage.",
  })

  return (
    <main className="hero not-found">
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <span className="ghost" aria-hidden="true">
        404
      </span>

      <div className="container thank-you__inner">
        <h1>
          Page <span className="gradient-text">Not Found</span>
        </h1>
        <p className="thank-you__sub">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
          you back on track.
        </p>
        <div className="thank-you__actions">
          <Link to="/" className="btn btn--amber">
            Back to Home
          </Link>
          <Link to="/contact-us" className="btn btn--ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
