import Icon from '../components/Icon'
import { SECURITY_FEATURES } from '../data/content'

const SECURITY_CHIPS = [
  { value: '256-bit', label: 'SSL encryption' },
  { value: '98%', label: 'Funds in cold storage' },
  { value: '24/7', label: 'Activity monitoring' },
]

export default function Security() {
  return (
    <section className="section" id="security">
      <div className="container">
        <div className="security-split">
          <div className="security-panel" data-reveal>
            <h2>
              Security woven into <span className="accent">everything we do</span>
            </h2>
            <p>
              Your account and your capital sit behind several independent layers of protection,
              around the clock.
            </p>
            <div className="security-panel__chips">
              {SECURITY_CHIPS.map(({ value, label }) => (
                <div className="security-chip" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="security-list" data-reveal-grid>
            {SECURITY_FEATURES.map(({ title, text, icon }) => (
              <div className="security-row" data-reveal key={title}>
                <span className="security-row__icon" aria-hidden="true">
                  <Icon name={icon} size={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
