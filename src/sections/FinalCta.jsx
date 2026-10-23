import { Link } from 'react-router-dom'

// Closing conversion panel on the violet gradient, above the footer.
export default function FinalCta() {
  return (
    <section className="section section--tight" id="register-final">
      <div className="container">
        <div className="cta-final" data-reveal>
          <div>
            <h2>
              Ready to begin your <span className="accent">trading journey?</span>
            </h2>
            <p className="cta-final__sub">
              Join the 4m+ members already trading with Mirevuno AI. Opening a free account takes
              minutes - and no experience is required.
            </p>

            <div className="cta-final__actions">
              <a className="btn btn--amber" href="#register">
                Register
              </a>
              <Link to="/contact-us" className="btn btn--ghost-dark">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
