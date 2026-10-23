// Central content for the Mirevuno AI site.
// All copy is original phrasing (reworded from the reference site); brand
// facts (stats, rating, deposit minimum) are kept as supplied. Testimonials
// and legal copy are template text - review/replace before launch.

export const BRAND = 'Mirevuno AI'

export const SITE_URL = 'https://mirevuno-ai.com'

export const CONTACT_EMAIL = 'support@mirevuno-ai.com'

export const FORM_ENDPOINT = 'https://meridianc-au.com/homeMailAction.php'
export const OFFER_NAME = 'MirevunoAI-Site'

// Header menu. `to` renders a router link, `href` a home-page anchor.
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'FAQs', to: '/faqs' },
]

export const STATS = [
  { value: '4m+', label: 'Registered members worldwide' },
  { value: '98+', label: 'Countries served' },
  { value: '65+', label: 'Currencies supported' },
  { value: '24/7', label: 'Trading around the clock' },
  { value: '$500m+', label: 'In deposits processed' },
]

// Partner logo wall renders public/assets/img/svg/partner-1..8.svg
// (taken from the reference site - swap in real partner marks before launch).

export const ABOUT_CARDS = [
  {
    title: 'Analysis That Works Ahead of You',
    text: 'An integrated analysis engine keeps watch over global markets 24/7 and brings forward the opportunities that deserve your attention.',
    icon: 'chip',
  },
  {
    title: 'Orders Executed in a Flash',
    text: 'Confirm a trade and it goes through immediately - no queues, no delays, no sitting around waiting for a fill.',
    icon: 'bolt',
  },
  {
    title: 'A Dashboard That Makes Sense',
    text: 'Balances, results and history in one clean overview - designed for everyday people, not professional trading desks.',
    icon: 'gauge',
  },
]

export const BENEFITS = [
  {
    title: 'Made for First-Timers',
    text: 'No finance background needed. Step-by-step guidance takes you from signing up through to placing your very first trade.',
    icon: 'smile',
  },
  {
    title: 'Compliance You Can Count On',
    text: 'Mirevuno AI holds itself to the regulatory standards Australian users are entitled to expect.',
    icon: 'shield',
  },
  {
    title: 'A Gentle Starting Point',
    text: 'Create an account and get going from just 347 A$ - an easy, low-pressure way to dip a toe in.',
    icon: 'coins',
  },
  {
    title: 'Every Fee on Display',
    text: 'All costs are shown upfront, before you commit to anything. The price on screen is exactly what you pay.',
    icon: 'receipt',
  },
  {
    title: 'Trade Whenever You Like',
    text: 'Markets are active around the clock - and with Mirevuno AI you can be too, from any device and any location.',
    icon: 'clock',
  },
  {
    title: 'Support Just a Message Away',
    text: 'A friendly, Australia-based support team is ready whenever a question pops up.',
    icon: 'headset',
  },
]

export const SECURITY_FEATURES = [
  {
    title: 'Bank-Strength Encryption',
    text: 'All traffic to our servers travels under 256-bit SSL encryption - the same standard the banks rely on.',
    icon: 'lock',
  },
  {
    title: 'Funds Kept Offline',
    text: 'The vast share of funds - 98% - is held in cold storage, kept completely disconnected from the internet.',
    icon: 'vault',
  },
  {
    title: 'Two-Factor Sign-In',
    text: 'Add a second verification layer to every login so your account stays yours alone.',
    icon: 'key',
  },
  {
    title: 'Constant Activity Oversight',
    text: 'Automated monitoring watches every account at all hours and raises the alarm on anything unusual.',
    icon: 'eye',
  },
  {
    title: 'Passwords No One Can Read',
    text: 'Logins are stored as one-way hashes - even our own staff can never view your password.',
    icon: 'fingerprint',
  },
  {
    title: 'Battle-Tested Infrastructure',
    text: 'The platform runs on audited, hardened technology already relied on by millions across the world.',
    icon: 'server',
  },
]

export const STEPS = [
  {
    title: 'Open Your Account',
    text: 'Your free account is ready in minutes - all we ask for is your name, email and phone number.',
  },
  {
    title: 'Make a Deposit',
    text: 'Add 347 A$ or more by card, bank transfer or e-wallet.',
  },
  {
    title: 'Start Trading',
    text: 'Trade BTC, SOL, USDT and beyond - by hand, or with the automation switched on.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Marcus D.',
    location: 'London, United Kingdom',
    avatar: '/assets/img/avatars/avatar-1.jpg',
    returnPct: '+17.9%',
    quote:
      'I arrived with zero market knowledge. The platform guided me through every stage, and within weeks I had settled into a routine I can count on.',
  },
  {
    name: 'Priya N.',
    location: 'Toronto, Canada',
    avatar: '/assets/img/avatars/avatar-2.jpg',
    returnPct: '+16.4%',
    quote:
      'It feels closer to my banking app than to trading software. Deposits, trades, withdrawals - everything simply works.',
  },
  {
    name: 'Jack T.',
    location: 'Singapore',
    avatar: '/assets/img/avatars/avatar-3.jpg',
    returnPct: '+18.7%',
    quote:
      'The AI engine keeps finding opportunities I would never spot on my own. It hums along in the background while I get on with my day job.',
  },
  {
    name: 'Amelia S.',
    location: 'Auckland, New Zealand',
    avatar: '/assets/img/avatars/avatar-4.jpg',
    returnPct: '+15.1%',
    quote:
      'The openness sold me. Fees appear before I confirm anything, and support calls are answered by an actual human.',
  },
  {
    name: 'Noah K.',
    location: 'Dubai, United Arab Emirates',
    avatar: '/assets/img/avatars/avatar-5.jpg',
    returnPct: '+17.2%',
    quote:
      'I began with the smallest deposit, just to test the water. Six months later it is a regular part of my month.',
  },
  {
    name: 'Isabella F.',
    location: 'Los Angeles, United States',
    avatar: '/assets/img/avatars/avatar-6.jpg',
    returnPct: '+16.9%',
    quote:
      '24/7 access fits my lifestyle exactly. I glance at my phone over morning coffee and leave the rest to automation.',
  },
]

export const BAND_QUOTES = [
  {
    quote: 'Signed up on a Tuesday and had my first trade closed by Friday. Honestly impressed.',
    author: 'Daniel K. - Sydney',
  },
]

export const FAQS = [
  {
    q: 'How do I get started with Mirevuno AI?',
    a: 'Open a free account, deposit funds and you can begin straight away. Trade on your own terms, or switch on the built-in AI engine, which scans the markets and acts on the settings you choose. Your money and your settings remain under your control at all times.',
  },
  {
    q: 'How is my money protected?',
    a: 'A series of defences works side by side: 256-bit SSL encryption on every connection, 98% of funds held in offline cold storage, two-step login verification and 24/7 monitoring for unusual activity. Passwords are kept as one-way hashes, so no one - our staff included - can ever read them.',
  },
  {
    q: 'How fast can I withdraw my funds?',
    a: 'Withdrawals can be requested from your dashboard whenever you like. Most are completed within 24–48 hours, and where possible funds go back to the payment method you originally used.',
  },
  {
    q: 'Will I be surprised by hidden fees?',
    a: 'Never. Any cost linked to a transaction is shown clearly before you confirm it. When a fee applies, you will see the exact figure beforehand - every single time.',
  },
  {
    q: 'Do I need experience to begin?',
    a: 'None at all. The interface was built for newcomers, the minimum deposit is only 347 A$, and the AI engine together with in-platform guides builds your confidence step by step.',
  },
  {
    q: 'Which markets are available to trade?',
    a: 'One account opens the door to a wide set of instruments - shares, forex, commodities, precious metals, CFDs and cryptocurrencies.',
  },
]

export const RATING = {
  score: '4.7',
  reviews: 189,
}

// Dedicated FAQs page - original phrasing, modeled on the reference
// site's /faq page (quick answers + full question list).
export const FAQS_PAGE = [
  {
    q: 'What is Mirevuno AI, and how does it work?',
    a: 'Mirevuno AI is an AI-assisted trading platform that operates around the clock - scanning markets, flagging possible opportunities and executing trades automatically according to the settings you select. Run it on autopilot or flip to manual mode at any time.',
  },
  {
    q: 'How does Mirevuno AI protect my funds and data?',
    a: 'Security sits in every layer of the platform. Personal data is safeguarded with recognised encryption and account authentication, and transactions run through established payment providers. Trades, signals and balance changes are displayed clearly, so your account activity is always visible.',
  },
  {
    q: 'Can I withdraw at any time?',
    a: 'Yes - requests can be made whenever you choose, subject to account checks, available funds and your payment provider’s processing rules. Your balance remains visible at all times; processing times vary by provider.',
  },
  {
    q: 'What fees or costs apply?',
    a: 'Fee details appear clearly before you go ahead. Registration costs nothing, though other charges may apply depending on the service or payment method. Starting requires a minimum deposit of 347 A$ - options may include credit cards, bank transfers and PayPal.',
  },
  {
    q: 'Is prior experience required?',
    a: 'No. It suits first-time users and seasoned traders equally. In automated mode the AI takes care of market scanning, signal generation and trade execution based on your settings - or switch to manual whenever you want full control.',
  },
  {
    q: 'Do I have to watch the platform all day?',
    a: 'No. Mirevuno AI can keep analysing live charts, trends and patterns without interruption, cutting the need for constant oversight. The automated system manages activity according to your chosen settings - though a regular glance at your account is still wise.',
  },
  {
    q: 'What markets can I trade?',
    a: 'Mirevuno AI opens up a range of markets, potentially including cryptocurrencies such as Bitcoin and Ethereum, plus forex, shares, commodities, precious metals and CFDs.',
  },
  {
    q: 'How do I reach support?',
    a: 'Reach the support team any time via the Contact Us page, or email support@mirevuno-ai.com directly. We are glad to assist with anything from accounts and deposits to withdrawals and the platform itself.',
  },
]

// About Us page - original phrasing, modeled on the reference /about page.
export const ABOUT_FEATURES = [
  {
    title: 'AI-driven market analysis',
    text: 'Automated analysis and trade-management tools support more confident, better-informed decisions.',
    icon: 'chip',
  },
  {
    title: 'Straightforward account controls',
    text: 'Encryption safeguards and simple account settings help keep your information protected.',
    icon: 'shield',
  },
  {
    title: 'Help whenever you need it',
    text: 'Friendly assistance with account and platform questions, exactly when you need it.',
    icon: 'headset',
  },
]

export const STORY_STEPS = [
  {
    title: 'Getting started',
    text: 'A fintech team set out to make crypto trading easier to understand and handle.',
  },
  {
    title: 'First launch',
    text: 'The platform went live with a hand-picked set of cryptocurrencies and a streamlined account journey.',
  },
  {
    title: 'Building our community',
    text: 'As interest grew, we kept sharpening both the platform and the support experience.',
  },
  {
    title: 'Expanding access',
    text: 'Availability now spans multiple markets, with payment options and security controls varying by region.',
  },
  {
    title: 'Today',
    text: 'Account management, market analysis and automated trade management meet in a single place.',
  },
]

export const VALUES = [
  {
    title: 'Accessibility',
    text: 'Crypto trading tools that are simpler to reach, grasp and manage.',
    icon: 'gauge',
  },
  {
    title: 'Transparency',
    text: 'Clear account controls, honest platform information and uncomplicated user journeys.',
    icon: 'eye',
  },
  {
    title: 'Innovation',
    text: 'AI-supported tools that aid market analysis and the management of trading activity.',
    icon: 'chip',
  },
  {
    title: 'Responsibility',
    text: 'Clear service standards and candid risk communication, so you can trade with your eyes open.',
    icon: 'shield',
  },
]

export const FAQ_QUICK_CARDS = [
  {
    title: 'New to trading?',
    text: 'The AI-powered tools can take selected tasks off your hands automatically - while every setting stays under your control.',
  },
  {
    title: 'Questions about your funds?',
    text: 'Withdraw from your available balance whenever you like - charges and transaction details appear before you confirm.',
  },
  {
    title: 'Unsure what to trade?',
    text: 'Let the AI scan selected markets - Bitcoin, Ethereum, forex, shares and commodities among them - and surface opportunities for you.',
  },
]
