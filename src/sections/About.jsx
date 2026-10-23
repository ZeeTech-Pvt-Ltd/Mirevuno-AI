import Icon from '../components/Icon'
import { ABOUT_CARDS } from '../data/content'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-split">
          <div className="about-split__lead" data-reveal>
            <span className="eyebrow">About the platform</span>
            <h2>Get to know the Mirevuno AI platform</h2>
            <p>
              Mirevuno AI is an online trading platform designed for Australians. It pulls a wide
              range of markets into a single space, with tools that carry the heavy lifting so you
              can concentrate on the decisions that count.
            </p>
            <div className="about-split__cta">
              <a className="btn btn--violet" href="#register">
                Open your account
              </a>
              <span className="chip">
                <Icon name="coins" size={17} />
                Start from just 347 A$
              </span>
            </div>
          </div>

          <div className="about-list" data-reveal-grid>
            {ABOUT_CARDS.map(({ title, text, icon }) => (
              <div className="about-item" data-reveal key={title}>
                <span className="about-item__icon" aria-hidden="true">
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
      </div>
    </section>
  )
}
