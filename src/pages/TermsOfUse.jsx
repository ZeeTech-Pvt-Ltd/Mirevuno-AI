import LegalPage, { LegalSection, ContactNote } from '../components/LegalPage'

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      description="Mirevuno AI Terms of Use - the rules that govern your use of our website and trading platform."
      updated="1 August 2026"
    >
      <LegalSection heading="1. Acceptance of Terms">
        <p>
          By accessing or using the Mirevuno AI website and platform, you agree to be bound by
          these Terms of Use. If any part of these terms is unacceptable to you, you must not use
          our services.
        </p>
      </LegalSection>

      <LegalSection heading="2. Eligibility">
        <p>
          To use this platform you must be at least 18 years old and legally capable of entering
          into binding contracts. It is your responsibility to ensure that using the platform is
          lawful in your jurisdiction.
        </p>
      </LegalSection>

      <LegalSection heading="3. Account Registration">
        <p>
          When creating an account, you agree to provide accurate, complete information and keep
          it current. You are responsible for keeping your login credentials confidential and for
          all activity that takes place under your account.
        </p>
      </LegalSection>

      <LegalSection heading="4. Deposits and Withdrawals">
        <p>
          The minimum deposit is 347 A$. Withdrawal requests can be made at any time from your
          dashboard and are typically processed within 24–48 hours. Additional verification may be
          requested for security and compliance purposes.
        </p>
      </LegalSection>

      <LegalSection heading="5. Risk Acknowledgment">
        <p>
          Trading financial markets carries substantial risk, including the possibility of losing
          your entire investment. You accept that your trading decisions are your own, and that
          past performance offers no guide to future results.
        </p>
      </LegalSection>

      <LegalSection heading="6. Fees">
        <p>
          Every applicable fee is shown transparently before you confirm a transaction. We may
          update our fee schedule from time to time; any changes will be published on the
          platform.
        </p>
      </LegalSection>

      <LegalSection heading="7. Acceptable Use">
        <p>You agree not to:</p>
        <ul>
          <li>Use the platform for unlawful purposes.</li>
          <li>Try to gain unauthorised access to our systems.</li>
          <li>Disrupt the operation of the platform or other users' accounts.</li>
          <li>Supply false or misleading information.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="8. Intellectual Property">
        <p>
          All content on this website - text, graphics, logos and software included - belongs to
          Mirevuno AI or its licensors and is protected by intellectual property laws. It may not
          be reproduced or distributed without our prior written consent.
        </p>
      </LegalSection>

      <LegalSection heading="9. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Mirevuno AI is not liable for any indirect,
          incidental or consequential losses arising from your use of the platform, trading losses
          included.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes to These Terms">
        <p>
          These Terms of Use may be amended at any time. Continuing to use the platform after
          changes take effect constitutes acceptance of the revised terms.
        </p>
      </LegalSection>

      <ContactNote />
    </LegalPage>
  )
}
