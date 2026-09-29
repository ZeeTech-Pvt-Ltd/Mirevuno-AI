// Flat line-art SVG icon set shared across the site.
// All icons are 24x24, stroke-based, inherit currentColor.

const PATHS = {
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <rect x="10.2" y="10.2" width="3.6" height="3.6" />
      <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
    </>
  ),
  bolt: <path d="M13 2L4.5 13.5h6L11 22l8.5-11.5h-6L13 2z" />,
  gauge: (
    <>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15l3.5-4" />
      <circle cx="12" cy="15" r="1.6" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14a4.5 4.5 0 0 0 7 0" />
      <path d="M9 9.5h.01M15 9.5h.01" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path d="M9.5 12l1.8 1.8 3.4-3.6" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="9" cy="7" rx="6" ry="3" />
      <path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7" />
      <path d="M15 9.5V13c0 1.7 2.7 3 6 3v-6c-3.3 0-6-1.3-6-3" transform="translate(0 4)" />
      <ellipse cx="21" cy="13" rx="0" ry="0" />
    </>
  ),
  receipt: (
    <>
      <path d="M5 3h14v18l-2.3-1.5L14.4 21l-2.4-1.5L9.6 21l-2.3-1.5L5 21V3z" />
      <path d="M9 8h6M9 12h6M9 16h3.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="4" height="6" rx="2" />
      <rect x="17" y="13" width="4" height="6" rx="2" />
      <path d="M20 19a3 3 0 0 1-3 3h-3" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2.5" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="16" r="1.4" />
    </>
  ),
  vault: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 12l2.6-2.6" />
      <path d="M6 5.5V5M10.8 5.5V5M15.6 5.5V5" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4.5" />
      <path d="M11.2 11.8L20 3M16.5 6.5L19 4M13.5 9.5L16 7" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  fingerprint: (
    <>
      <path d="M12 11a3 3 0 0 1 3 3c0 1.7-.5 3.2-1.3 4.8" />
      <path d="M8.7 14.6c-.4-.8-.7-1.7-.7-2.6a4 4 0 0 1 7.6-1.6" />
      <path d="M6.6 19.5C5 17.4 4 14.7 4 12a8 8 0 0 1 15-4.6" />
      <path d="M16.8 18.2A12 12 0 0 0 20 12" />
    </>
  ),
  server: (
    <>
      <rect x="4" y="4" width="16" height="7" rx="2" />
      <rect x="4" y="13" width="16" height="7" rx="2" />
      <path d="M8 7.5h.01M8 16.5h.01M12 7.5h4M12 16.5h4" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  star: <path d="M12 3.6l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8-4.2-4.1 5.9-.9L12 3.6z" />,
  arrowRight: <path d="M4 12h15M13 6l6 6-6 6" />,
  arrowLeft: <path d="M20 12H5M11 6l-6 6 6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h4l1.5 4.5-2.2 1.6a12.5 12.5 0 0 0 5.6 5.6l1.6-2.2L20 15v4a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
    </>
  ),
}

export default function Icon({ name, size = 22, strokeWidth = 1.8, filled = false, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  )
}
