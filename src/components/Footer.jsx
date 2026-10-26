'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Logo from './Logo'
import { BRAND, CONTACT_EMAIL } from '../data/content'

// Mirrors the header menu plus the in-depth platform pages
// (Home is covered by the logo link)
const PLATFORM_LINKS = [
  { label: 'About Us', to: '/about-us' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Features', to: '/features' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'FAQs', to: '/faqs' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Risk Disclosure', to: '/risk-disclosure' },
]

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  // Scroll to the registration form; when navigating from another route,
  // go home first, then poll until the form renders (mirrors the header's
  // anchor handling).
  const handleRegister = (e) => {
    e.preventDefault()
    if (pathname === '/') {
      document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    router.push('/')
    let attempts = 0
    const tryScroll = () => {
      const el = document.getElementById('register')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
      if (attempts++ < 20) setTimeout(tryScroll, 100)
    }
    setTimeout(tryScroll, 150)
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo />
            <p>
              {BRAND} is an online trading platform created for Australians - uniting a broad
              range of markets with tools designed to make trading accessible to all.
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
                  <Link href={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2>Legal</h2>
            <ul>
              {LEGAL_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link href={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__cta">
            <h2>Get started</h2>
            <p>Open a free account and begin trading from a minimum deposit of 347 A$.</p>
            <a href="#register" className="btn btn--amber" onClick={handleRegister}>
              Register
            </a>
          </div>
        </div>

        <p className="site-footer__risk">
          Risk Disclosure: Trading financial markets carries substantial risk and is not suitable
          for everyone. Prices can fall as fast as they climb, and you may lose some or all of
          your invested capital. Past performance is no guarantee of future results. This website
          offers general information only and is not financial advice. Always do your own research
          and consider seeking independent professional advice before trading.
        </p>

        <div className="site-footer__bottom">
          <span>© 2026 {BRAND}. All rights reserved.</span>
          <span>Trading carries risk. Never invest more than you can afford to lose.</span>
        </div>
      </div>
    </footer>
  )
}
