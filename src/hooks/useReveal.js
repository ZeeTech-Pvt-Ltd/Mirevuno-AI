import { useEffect } from 'react'

// Reveals every [data-reveal] element as it scrolls into view.
// Re-runs on route change so each page's elements are observed.
export default function useReveal(pathname) {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    // Reveal anything already in the viewport synchronously, so content
    // never visibly flashes before the observer's first callback.
    els.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
        el.classList.add('is-visible')
      }
    })
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
    els.forEach((el) => {
      if (!el.classList.contains('is-visible')) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [pathname])
}
