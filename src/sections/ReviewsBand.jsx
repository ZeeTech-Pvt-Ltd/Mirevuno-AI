import Icon from '../components/Icon'
import { BAND_QUOTES, RATING } from '../data/content'

// Dark aubergine panel with a centered rating + community quote.
export default function ReviewsBand() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="band" data-reveal>
          <div className="band__inner">
            <h2>Loved by a growing community</h2>

            <div className="band__rating">
              <span className="rating__stars" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon key={i} name="star" size={24} filled />
                ))}
              </span>
              <span className="rating__score">{RATING.score}/5</span>
              <span style={{ fontSize: 14, color: 'var(--on-dark-muted)' }}>
                {RATING.reviews} reviews from Australian traders
              </span>
            </div>

            {BAND_QUOTES.map(({ quote, author }) => (
              <figure className="band-quote" key={author}>
                <p>“{quote}”</p>
                <figcaption className="band-quote__meta">
                  <span>{author}</span>
                  <span className="verified">
                    <Icon name="check" size={15} strokeWidth={2.5} />
                    Verified member
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
