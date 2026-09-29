import Icon from '../components/Icon'
import { BENEFITS } from '../data/content'

// Bento layout: the first two benefits span two columns, the rest one.
export default function Benefits() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Why trade</span>
          <h2>Why traders choose Mirevuno AI</h2>
          <p>
            Every part of the experience is shaped to remove the hurdles that keep people out of
            the markets.
          </p>
        </div>

        <div className="bento" data-reveal-grid>
          {BENEFITS.map(({ title, text, icon }, i) => (
            <div
              className={`benefit${i < 2 ? ' benefit--lg' : ''}${i === 1 ? ' benefit--accent' : ''}`}
              data-reveal
              key={title}
            >
              <span className="benefit__icon" aria-hidden="true">
                <Icon name={icon} size={24} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
