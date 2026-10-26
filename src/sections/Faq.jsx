import Link from 'next/link'
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
            <p>Straight answers to the questions new and existing members ask most.</p>
            <Link href="/faqs" className="btn btn--ghost">
              See all FAQs
            </Link>
          </div>

          <FaqList items={FAQS} />
        </div>
      </div>
    </section>
  )
}
