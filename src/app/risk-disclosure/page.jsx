import LegalPage, { LegalSection, ContactNote } from '../../components/LegalPage'
import { pageMeta } from '../../lib/meta'

export const metadata = pageMeta({
  title: 'Risk Disclosure - Mirevuno AI | Trading Risk Warning',
  description:
    'Mirevuno AI Risk Disclosure - trading financial markets carries substantial risk and is not suitable for every investor.',
  path: '/risk-disclosure',
})

export default function RiskDisclosure() {
  return (
    <LegalPage title="Risk Disclosure" updated="1 August 2026">
      <LegalSection heading="General Risk Warning">
        <p>
          Trading financial markets - including cryptocurrencies, equities, forex, commodities,
          precious metals and CFDs - carries substantial risk and is not appropriate for every
          investor. You may lose some or all of the capital you invest. Never trade with money you
          cannot afford to lose.
        </p>
      </LegalSection>

      <LegalSection heading="Market Volatility">
        <p>
          Financial markets can be extremely volatile. Prices can swing rapidly and
          unpredictably, and past performance is not a reliable indicator of future results. No
          automated system - AI-driven analysis included - can guarantee profits or remove risk.
        </p>
      </LegalSection>

      <LegalSection heading="Leverage and CFDs">
        <p>
          Leveraged products such as CFDs magnify gains and losses alike. Even a small market move
          can have a big impact on your balance. Make sure you fully understand how leverage works
          before trading such instruments.
        </p>
      </LegalSection>

      <LegalSection heading="No Financial Advice">
        <p>
          Nothing on this website or platform amounts to financial, investment or legal advice.
          Content is provided for general information only. Your trading decisions are yours
          alone, and you should consider seeking independent professional advice.
        </p>
      </LegalSection>

      <LegalSection heading="Technology Risks">
        <p>
          Although we use industry-leading security measures, including SSL 256-bit encryption and
          cold storage, no system is entirely immune to technical failure, cyber attack or human
          error. Keeping your account credentials safe is your responsibility.
        </p>
      </LegalSection>

      <LegalSection heading="Your Responsibility">
        <p>
          Before trading, take an honest look at your financial situation, experience level and
          risk tolerance. Trade only with capital you can afford to lose, and seek independent
          advice if you are in any doubt.
        </p>
      </LegalSection>

      <ContactNote />
    </LegalPage>
  )
}
