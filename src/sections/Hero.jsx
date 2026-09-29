import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'
import { RATING } from '../data/content'

const HIGHLIGHTS = ['AI-driven market analysis', 'Orders in an instant', 'Trading around the clock']

export default function Hero() {
  return (
    <section className="hero hero--split" id="register">
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__blob hero__blob--3" aria-hidden="true" />

      <div className="container hero__inner">
        <div>
          <h1>Mirevuno AI - See the Market with Clarity</h1>

          <p className="hero__sub">
            A modern trading platform designed for Australians - uniting crypto and traditional
            markets with tools that make trading feel effortless.
          </p>

          <div className="hero__points">
            {HIGHLIGHTS.map((point) => (
              <span className="hero__point" key={point}>
                <Icon name="check" size={16} strokeWidth={2.5} />
                {point}
              </span>
            ))}
          </div>

          <div className="rating" style={{ marginTop: 26, color: 'var(--ink-muted)' }}>
            <span className="rating__stars" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <Icon key={i} name="star" size={18} filled />
              ))}
            </span>
            <span className="rating__score">{RATING.score}/5</span>
            <span style={{ fontSize: 14 }}>based on {RATING.reviews} reviews</span>
          </div>
        </div>

        <div className="hero__form">
          <span className="hero-float hero-float--1 hero-float--rating" aria-hidden="true">
            <Icon name="star" size={16} filled />
            {RATING.score}/5 · {RATING.reviews} reviews
          </span>
          <span className="hero-float hero-float--2" aria-hidden="true">
            <Icon name="shield" size={16} />
            AU Verified · Secure sign-up
          </span>

          <RegistrationForm
            idPrefix="hero"
            title="Create your free account"
            subtitle="Join over 4 million members and be trading within minutes."
          />
        </div>
      </div>
    </section>
  )
}
