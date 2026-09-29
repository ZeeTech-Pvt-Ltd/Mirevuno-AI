import { Link } from 'react-router-dom'
import { BRAND } from '../data/content'

// dark = rendered on the light page background
export default function Logo({ dark = false }) {
  return (
    <Link to="/" className={`logo${dark ? ' logo--dark' : ''}`} aria-label={`${BRAND} home`}>
      <span className="logo__mark">
        <svg width="24" height="24" viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M17 45V19l15 14 15-14v26"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {BRAND}
    </Link>
  )
}
