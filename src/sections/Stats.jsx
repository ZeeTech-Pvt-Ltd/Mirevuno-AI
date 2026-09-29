import { STATS } from '../data/content'

export default function Stats() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">At a glance</span>
          <h2>Mirevuno AI by the numbers</h2>
        </div>
        <div className="stats" data-reveal>
          {STATS.map(({ value, label }) => (
            <div className="stat" key={label}>
              <div className="stat__value">{value}</div>
              <div className="stat__label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
