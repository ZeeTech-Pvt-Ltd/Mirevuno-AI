const PARTNER_COUNT = 8

export default function TrustUs() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Trusted by</span>
          <h2>Trusted by the trading community</h2>
        </div>
      </div>

      {/* Full-bleed marquee: tiles duplicated once so the CSS
          translateX(-50%) loop is seamless. */}
      <div className="trust-marquee">
        <div className="trust-track">
          {Array.from({ length: PARTNER_COUNT * 2 }, (_, i) => (
            <div className="trust-tile" key={i}>
              <img
                src={`/assets/img/svg/partner-${(i % PARTNER_COUNT) + 1}.svg`}
                alt="Partner"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
