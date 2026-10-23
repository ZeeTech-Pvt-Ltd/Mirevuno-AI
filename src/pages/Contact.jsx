import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'
import useMeta from '../hooks/useMeta'
import { CONTACT_EMAIL, SITE_URL } from '../data/content'

export default function Contact() {
  useMeta({
    title: 'Contact Mirevuno AI - Support & Assistance',
    canonical: `${SITE_URL}/contact-us`,
    description:
      'Contact Mirevuno AI - platform questions, technical help or collaboration enquiries. Our team is ready to assist.',
  })

  return (
    <main className="section">
      <div className="container contact__inner">
        <div className="contact__intro">
          <span className="eyebrow">Talk to us</span>
          <h1>Contact Mirevuno AI</h1>
          <p className="contact__lede">
            We believe in open communication and full transparency. Whether you have questions
            about the platform, need technical help or want to discuss a collaboration -
            we&apos;re here for you.
          </p>

          <p className="contact__hint">
            Send us your details through the form and our team will reply as soon as possible. The
            Mirevuno AI support team can assist with account setup, deposits and withdrawals,
            platform features, security settings and anything else you need to trade with
            confidence.
          </p>

          <div className="contact__help">
            <span>Need immediate help?</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Icon name="mail" size={17} />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <RegistrationForm
          idPrefix="contact"
          title="Send us a message"
          subtitle="Leave your details below and our team will be in touch as quickly as possible."
          payRow={false}
        />
      </div>
    </main>
  )
}
