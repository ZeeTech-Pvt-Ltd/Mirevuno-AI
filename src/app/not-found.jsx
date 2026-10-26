import Link from 'next/link'

export default function NotFound() {
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
          The page you&apos;re after doesn&apos;t exist or has moved. Let&apos;s get you back on
          track.
        </p>
        <div className="thank-you__actions">
          <Link href="/" className="btn btn--amber">
            Back to Home
          </Link>
          <Link href="/contact-us" className="btn btn--ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
