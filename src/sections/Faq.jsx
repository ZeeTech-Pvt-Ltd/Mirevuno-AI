import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList'
import { FAQS } from '../data/content'

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="faq-split">
          <div className="faq-split__lead" data-reveal>
            <span className="eyebrow">FAQ</span>
            <h2>Frequently asked questions</h2>
            <p>Answers to the questions we hear most often from new and existing members.</p>
            <Link to="/faqs" className="btn btn--ghost">
              Visit all FAQs
            </Link>
          </div>

          <FaqList items={FAQS} />
        </div>
      </div>
    </section>
  )
}
