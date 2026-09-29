import { STEPS } from '../data/content'

export default function HowItWorks() {
  return (
    <section className="section section--tint" id="how-it-works">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">How it works</span>
          <h2>Three steps to your first trade</h2>
          <p>From sign-up to the markets in three easy steps.</p>
        </div>

        <div className="steps" data-reveal-grid>
          {STEPS.map(({ title, text }, i) => (
            <div className="step" data-reveal key={title}>
              <span className="step__num" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
