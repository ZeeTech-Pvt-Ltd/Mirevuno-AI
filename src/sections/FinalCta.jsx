import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'

const POINTS = ['Free account in minutes', 'No experience needed']

// Closing conversion panel on the violet gradient, above the footer.
export default function FinalCta() {
  return (
    <section className="section section--tight" id="register-final">
      <div className="container">
        <div className="cta-final" data-reveal>
          <div>
            <h2>
              Ready to start your <span className="accent">trading journey?</span>
            </h2>
            <p className="cta-final__sub">
              Join 4m+ members already trading with Mirevuno AI. Opening your free account takes
              minutes - no experience needed.
            </p>

            <div className="cta-final__points">
              {POINTS.map((point) => (
                <span className="cta-final__point" key={point}>
                  <Icon name="check" size={16} strokeWidth={2.5} />
                  {point}
                </span>
              ))}
            </div>
          </div>

          <RegistrationForm idPrefix="final" title="Create your free account" />
        </div>
      </div>
    </section>
  )
}
