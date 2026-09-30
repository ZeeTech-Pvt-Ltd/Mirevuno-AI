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
  { value: '4m+', label: 'Members across the globe' },
  { value: '98+', label: 'Countries with access' },
  { value: '65+', label: 'Currencies available' },
  { value: '24/7', label: 'Round-the-clock trading' },
  { value: '$500m+', label: 'In deposits handled' },
]

// Partner logo wall renders public/assets/img/svg/partner-1..8.svg
// (taken from the reference site - swap in real partner marks before launch).

export const ABOUT_CARDS = [
  {
    title: 'Analysis That Thinks Ahead',
    text: 'A built-in analysis engine watches global markets around the clock and surfaces the setups worth a second look.',
    icon: 'chip',
  },
  {
    title: 'Orders Filled in a Flash',
    text: 'The moment you confirm a trade, your order goes through - no queues, no lag, no waiting around.',
    icon: 'bolt',
  },
  {
    title: 'A Dashboard Built for People',
    text: 'Your balance, performance and history in one tidy view, designed for everyday users rather than trading desks.',
    icon: 'gauge',
  },
]

export const BENEFITS = [
  {
    title: 'Beginner-Friendly by Design',
    text: 'You don’t need a finance background. The platform guides you from your first login all the way to your first trade.',
    icon: 'smile',
  },
  {
    title: 'Compliance Comes First',
    text: 'Mirevuno AI operates with a firm commitment to the regulatory standards Australian users rightly expect.',
    icon: 'shield',
  },
  {
    title: 'Start With a Modest Deposit',
    text: 'Open an account and begin with as little as 347 A$ - a gentle way to test the waters.',
    icon: 'coins',
  },
  {
    title: 'Fees You Can See',
    text: 'Every charge is laid out before you commit to anything. What you see on screen is exactly what you pay.',
    icon: 'receipt',
  },
  {
    title: 'Markets Never Sleep',
    text: 'Markets move at all hours - and with Mirevuno AI, so can you, from any device, wherever you are.',
    icon: 'clock',
  },
  {
    title: 'Help Around the Corner',
    text: 'A friendly, Australia-based support team is on hand whenever a question comes up.',
    icon: 'headset',
  },
]

export const SECURITY_FEATURES = [
  {
    title: 'Bank-Grade Data Encryption',
    text: 'Every connection to our servers is shielded with 256-bit SSL encryption - the same protection the banks rely on.',
    icon: 'lock',
  },
  {
    title: 'Offline Asset Storage',
    text: 'The overwhelming majority of funds - 98% - sit in cold storage, kept fully disconnected from the internet.',
    icon: 'vault',
  },
  {
    title: 'Two-Step Login Protection',
    text: 'Layer an extra verification step onto every sign-in so your account remains yours alone.',
    icon: 'key',
  },
  {
    title: '24/7 Activity Monitoring',
    text: 'Automated systems keep watch over every account around the clock and flag anything out of the ordinary.',
    icon: 'eye',
  },
  {
    title: 'Unreadable Passwords',
    text: 'Credentials are stored using one-way hashing - not even our own team can ever see your password.',
    icon: 'fingerprint',
  },
  {
    title: 'Hardened Infrastructure',
    text: 'The platform runs on audited, battle-tested technology already trusted by millions worldwide.',
    icon: 'server',
  },
]

export const STEPS = [
  {
    title: 'Create Your Account',
    text: 'Set up your free account in minutes - all we need is your name, email and phone number.',
  },
  {
    title: 'Add Funds',
    text: 'Top up with 347 A$ or more using a card, bank transfer or e-wallet.',
  },
  {
    title: 'Begin Trading',
    text: 'Trade BTC, SOL, USDT and more - manually, or with automation switched on.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Marcus D.',
    location: 'London, United Kingdom',
    avatar: '/assets/img/avatars/avatar-1.jpg',
    returnPct: '+17.9%',
    quote:
      'I walked in knowing nothing about markets. The platform held my hand through every step, and within weeks I had a routine I could rely on.',
  },
  {
    name: 'Priya N.',
    location: 'Toronto, Canada',
    avatar: '/assets/img/avatars/avatar-2.jpg',
    returnPct: '+16.4%',
    quote:
      'The interface feels more like my banking app than trading software. Funding, trading, withdrawing - all of it simply works.',
  },
  {
    name: 'Jack T.',
    location: 'Singapore',
    avatar: '/assets/img/avatars/avatar-3.jpg',
    returnPct: '+18.7%',
    quote:
      'The AI engine keeps surfacing chances I would never spot myself. It works quietly in the background while I focus on my day job.',
  },
  {
    name: 'Amelia S.',
    location: 'Auckland, New Zealand',
    avatar: '/assets/img/avatars/avatar-4.jpg',
    returnPct: '+15.1%',
    quote:
      'Transparency won me over. Every fee is shown before I commit, and when I call support, a real person picks up.',
  },
  {
    name: 'Noah K.',
    location: 'Dubai, United Arab Emirates',
    avatar: '/assets/img/avatars/avatar-5.jpg',
    returnPct: '+17.2%',
    quote:
      'I started with the minimum deposit just to dip a toe in. Six months on, it has become a steady part of my month.',
  },
  {
    name: 'Isabella F.',
    location: 'Los Angeles, United States',
    avatar: '/assets/img/avatars/avatar-6.jpg',
    returnPct: '+16.9%',
    quote:
      'Round-the-clock access suits my life perfectly. I check my phone over morning coffee and let automation handle the rest.',
  },
]

export const BAND_QUOTES = [
  {
    quote: 'Opened an account on a Tuesday, closed my first trade by Friday. Genuinely impressed.',
    author: 'Daniel K. - Sydney',
  },
]

export const FAQS = [
  {
    q: 'How do I begin with Mirevuno AI?',
    a: 'Create a free account, add funds, and you can start right away. Trade on your own terms, or turn on the built-in AI engine that scans the markets and acts on the settings you pick. Your money and your settings stay under your control at all times.',
  },
  {
    q: 'How is my money kept safe?',
    a: 'Several safeguards work together: 256-bit SSL encryption on every connection, 98% of funds held in offline cold storage, two-step sign-in verification, and round-the-clock monitoring for unusual activity. Passwords are stored through one-way hashing, so nobody - including our staff - can ever read them.',
  },
  {
    q: 'How quickly can I withdraw my funds?',
    a: 'You can request a withdrawal from your dashboard at any time. Most requests are completed within 24–48 hours, and funds are returned to the payment method you originally used where possible.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'None. Any cost attached to a transaction is shown to you clearly before you confirm it. If a fee applies, you will see the exact amount first - every single time.',
  },
  {
    q: 'Do I need any experience to get started?',
    a: 'Not at all. The interface was designed for first-timers, the minimum deposit is just 347 A$, and the AI engine plus built-in guides help you build confidence step by step.',
  },
  {
    q: 'Which markets can I trade?',
    a: 'You can trade across a broad range of instruments from one account, including shares, currencies (forex), commodities, precious metals, CFDs and cryptocurrencies.',
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
    q: 'What is Mirevuno AI and how does it work?',
    a: 'Mirevuno AI is an AI-supported trading platform that runs continuously - scanning markets, spotting potential opportunities and placing trades automatically based on the settings you choose. You can use automated trade management or switch to manual mode whenever you like.',
  },
  {
    q: 'How does Mirevuno AI keep my funds and data secure?',
    a: 'Security is built into every layer of the platform. Your personal data is protected with recognised encryption and account authentication, and financial transactions go through established payment providers. Your trades, signals and balance updates are shown clearly so you can always see what is happening on your account.',
  },
  {
    q: 'Can I request a withdrawal at any time?',
    a: 'Yes - you can request a withdrawal whenever you like, subject to account checks, available funds and your payment provider’s processing requirements. Your balance stays visible at all times, and processing times may vary by provider.',
  },
  {
    q: 'Are there any fees or costs?',
    a: 'Any fee information is displayed clearly before you proceed. There is no registration fee, though other charges may apply depending on the service or payment method. To get started you’ll need a minimum deposit of 347 A$ - payment methods may include credit cards, bank transfers and PayPal.',
  },
  {
    q: 'Do I need experience to start?',
    a: 'No. The platform is designed for newcomers and experienced traders alike. In automated mode, the AI handles market scanning, signal generation and trade execution based on your settings - or switch to manual mode whenever you want full control.',
  },
  {
    q: 'Do I need to monitor the platform constantly?',
    a: 'No. Mirevuno AI can continuously analyse live charts, trends and patterns, reducing the need for constant monitoring. The automated system manages activity based on your chosen settings, though it’s still wise to review your account regularly.',
  },
  {
    q: 'What can I trade?',
    a: 'Mirevuno AI gives you access to a range of markets, which may include cryptocurrencies such as Bitcoin and Ethereum, forex, shares, commodities, precious metals and CFDs.',
  },
  {
    q: 'How do I contact support?',
    a: 'You can reach our support team any time from the Contact Us page, or email us directly at support@mirevuno-ai.com. We’re happy to help with questions about your account, deposits, withdrawals or the platform itself.',
  },
]

// About Us page - original phrasing, modeled on the reference /about page.
export const ABOUT_FEATURES = [
  {
    title: 'AI-powered market analysis',
    text: 'Automated analysis and trade management tools help you make better-informed decisions.',
    icon: 'chip',
  },
  {
    title: 'Clear account controls',
    text: 'Encryption safeguards and straightforward account settings help protect your information.',
    icon: 'shield',
  },
  {
    title: 'Support when you need it',
    text: 'Friendly help with account and platform questions, whenever you need it.',
    icon: 'headset',
  },
]

export const STORY_STEPS = [
  {
    title: 'Getting started',
    text: 'A fintech team set out to make crypto trading simpler to understand and manage.',
  },
  {
    title: 'First launch',
    text: 'The platform launched with a carefully selected range of cryptocurrencies and a streamlined account experience.',
  },
  {
    title: 'Building our community',
    text: 'As interest grew, we kept refining the platform and the support experience.',
  },
  {
    title: 'Expanding access',
    text: 'Availability now extends across multiple markets, with payment options and security controls varying by region.',
  },
  {
    title: 'Today',
    text: 'Account management, market analysis and automated trade management come together in one place.',
  },
]

export const VALUES = [
  {
    title: 'Accessibility',
    text: 'Making crypto trading tools easier to access, understand and manage.',
    icon: 'gauge',
  },
  {
    title: 'Transparency',
    text: 'Clear account controls, honest platform information and straightforward user journeys.',
    icon: 'eye',
  },
  {
    title: 'Innovation',
    text: 'AI-supported tools that help you analyse markets and manage trading activity.',
    icon: 'chip',
  },
  {
    title: 'Responsibility',
    text: 'Clear service standards and honest risk communication, helping you make informed trading decisions.',
    icon: 'shield',
  },
]

export const FAQ_QUICK_CARDS = [
  {
    title: 'New to trading?',
    text: 'The AI-powered tools can handle selected tasks automatically, while you stay in control of every setting.',
  },
  {
    title: 'Questions about your funds?',
    text: 'Withdraw from your available balance whenever you like - any charges and transaction details are shown before you confirm.',
  },
  {
    title: 'Unsure what to trade?',
    text: 'Let the AI analyse selected markets - including Bitcoin, Ethereum, forex, shares and commodities - and flag opportunities for you.',
  },
]
