import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reveals every [data-reveal] element as it scrolls into view.
// Re-runs on route change so each page's elements are observed.
export default function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])
}
