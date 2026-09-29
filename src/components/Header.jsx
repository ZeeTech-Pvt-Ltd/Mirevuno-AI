import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { NAV_LINKS } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // Anchor items target sections on the home page; when navigating from
  // another route, go home first and then scroll.
  const handleAnchor = (e, href) => {
    e.preventDefault()
    const id = href.slice(1)
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 150)
    }
  }

  const renderItem = (item) =>
    item.to ? (
      <Link key={item.label} to={item.to} onClick={() => setOpen(false)}>
        {item.label}
      </Link>
    ) : (
      <a key={item.label} href={item.href} onClick={(e) => { setOpen(false); handleAnchor(e, item.href) }}>
        {item.label}
      </a>
    )

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />

        <nav className="site-header__nav" aria-label="Main navigation">
          {NAV_LINKS.map(renderItem)}
        </nav>

        <div className="site-header__actions">
          <a className="btn btn--amber" href="#register" onClick={(e) => handleAnchor(e, '#register')}>
            Register
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="container site-header__mobile" aria-label="Mobile navigation">
          {NAV_LINKS.map((item) =>
            item.to ? (
              <Link key={item.label} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { setOpen(false); handleAnchor(e, item.href) }}
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  )
}
