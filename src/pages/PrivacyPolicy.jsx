import LegalPage, { LegalSection, ContactNote } from '../components/LegalPage'

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Read the Mirevuno AI Privacy Policy - how we collect, use and protect your personal information."
      updated="1 August 2026"
    >
      <LegalSection heading="1. Who We Are">
        <p>
          This Privacy Policy sets out how Mirevuno AI ("we", "us", "our") gathers, uses and
          safeguards your personal information when you use our website and platform. Protecting
          your privacy in line with applicable Australian privacy laws is a commitment we take
          seriously.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <p>We gather the following kinds of information:</p>
        <ul>
          <li>The contact details you supply at registration, such as your name, email address and phone number.</li>
          <li>Account and transaction data created as you use the platform.</li>
          <li>Technical data such as your IP address, browser type and device information.</li>
          <li>Messages you send to our support team.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <p>Your information is used to:</p>
        <ul>
          <li>Set up and administer your account.</li>
          <li>Process transactions and deliver platform functionality.</li>
          <li>Improve our services and the user experience.</li>
          <li>Meet legal and regulatory obligations.</li>
          <li>Send service communications and, where you have consented, marketing materials.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Data Security">
        <p>
          Your data is protected with SSL 256-bit encryption, secure server infrastructure and
          strict access controls. Passwords are held using one-way encryption and are never
          visible to our staff. We take every reasonable precaution, yet no method of transmission
          over the internet is entirely secure.
        </p>
      </LegalSection>

      <LegalSection heading="5. Sharing Your Information">
        <p>
          We never sell your personal information. Data may be shared with trusted service
          providers who help us run the platform, and with authorities where the law requires it.
          Every third party is bound by confidentiality obligations.
        </p>
      </LegalSection>

      <LegalSection heading="6. Cookies">
        <p>
          Cookies and similar technologies help our website remember your preferences, understand
          how the site is used and improve your experience. You can manage cookies through your
          browser settings.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your Rights">
        <p>
          You may access, correct or delete the personal information we hold about you, and opt out
          of marketing communications at any time. To exercise these rights, contact our support
          team.
        </p>
      </LegalSection>

      <LegalSection heading="8. Changes to This Policy">
        <p>
          This Privacy Policy may be updated from time to time. The latest version is always
          available on this page, with the most recent revision date shown above.
        </p>
      </LegalSection>

      <ContactNote />
    </LegalPage>
  )
}
