'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import useReveal from '../hooks/useReveal'

// Enables the scroll-reveal CSS (html.js) and observes [data-reveal]
// elements across the app. The js class is added in an effect so the
// server-rendered HTML stays fully visible until hydration.
export default function Reveal({ children }) {
  const pathname = usePathname()
  useEffect(() => {
    document.documentElement.classList.add('js')
  }, [])
  useReveal(pathname)
  return children
}
