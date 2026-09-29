import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { BRAND, CONTACT_EMAIL } from '../data/content'

// Mirrors the header menu (Home is covered by the logo link)
const PLATFORM_LINKS = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'FAQs', to: '/faqs' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Risk Disclosure', to: '/risk-disclosure' },
]

export default function Footer() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // Scroll to the registration form; when navigating from another route,
  // go home first and then scroll (mirrors the header's anchor handling).
  const handleRegister = (e) => {
    e.preventDefault()
    if (pathname === '/') {
      document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' }), 150)
    }
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo />
            <p>
              {BRAND} is an online trading platform built for Australians - bringing together a
              broad range of markets with tools designed to make trading accessible to everyone.
            </p>
            <div className="site-footer__contact">
              <span>Contact us:</span>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>

          <div className="site-footer__col">
            <h2>Platform</h2>
            <ul>
              {PLATFORM_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2>Legal</h2>
            <ul>
              {LEGAL_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__cta">
            <h2>Get started</h2>
            <p>Open a free account and start trading with a minimum deposit of 347 A$.</p>
            <a href="#register" className="btn btn--amber" onClick={handleRegister}>
              Register
            </a>
          </div>
        </div>

        <p className="site-footer__risk">
          Risk Disclosure: Trading financial markets carries substantial risk and is not suitable
          for everyone. Prices can fall as quickly as they rise, and you may lose some or all of
          your invested capital. Past performance does not guarantee future results. This website
          provides general information only and does not constitute financial advice. Always do
          your own research and consider seeking independent professional advice before trading.
        </p>

        <div className="site-footer__bottom">
          <span>© 2026 {BRAND}. All rights reserved.</span>
          <span>Trading carries risk. Invest only what you can afford to lose.</span>
        </div>
      </div>
    </footer>
  )
}
