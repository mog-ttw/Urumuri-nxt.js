import type { Metadata } from "next";
import styles from "./legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Urumuri",
  description:
    "How Urumuri collects, uses, discloses, stores, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className={`section ${styles.legalSection}`}>
      <div className={`container ${styles.legalContent}`}>
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className={styles.legalIntro}>
          Urumuri (&ldquo;Urumuri,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
          protecting your privacy and safeguarding your personal information. This Privacy Policy
          explains how we collect, use, disclose, store, and protect your personal information
          when you use our mobile applications, websites, merchant platform, rider platform,
          customer support services, and any other products or services operated by Urumuri
          (collectively referred to as the &ldquo;Services&rdquo;). By using our Services, you agree to the
          collection and use of information in accordance with this Privacy Policy.
        </p>

        <h2>1. Information We Collect</h2>
        <p>Depending on the services you use, we may collect the following categories of information.</p>

        <h3>1.1 Personal Information</h3>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Date of birth (where required)</li>
          <li>National identification information (where legally required)</li>
          <li>Delivery addresses</li>
          <li>Billing addresses</li>
          <li>Profile photo</li>
          <li>Emergency contact information (for riders)</li>
        </ul>

        <h3>1.2 Account Information</h3>
        <ul>
          <li>Username</li>
          <li>Password (encrypted)</li>
          <li>Account preferences</li>
          <li>Language settings</li>
          <li>Communication preferences</li>
        </ul>

        <h3>1.3 Payment Information</h3>
        <p>Payments may be processed through licensed third-party payment providers. We may collect:</p>
        <ul>
          <li>Transaction reference numbers</li>
          <li>Payment status</li>
          <li>Mobile money information</li>
          <li>Card payment tokens (where applicable)</li>
        </ul>
        <p>We do not store full debit or credit card details on our systems.</p>

        <h3>1.4 Order Information</h3>
        <p>We collect information relating to:</p>
        <ul>
          <li>Orders placed</li>
          <li>Delivery requests</li>
          <li>Restaurants or merchants selected</li>
          <li>Delivery history</li>
          <li>Parcel information</li>
          <li>Purchase requests (&ldquo;Buy for Me&rdquo; service)</li>
          <li>Delivery notes</li>
        </ul>

        <h3>1.5 Location Information</h3>
        <p>With your permission, we collect location information to:</p>
        <ul>
          <li>Match riders with customers</li>
          <li>Calculate delivery routes</li>
          <li>Estimate delivery times</li>
          <li>Provide real-time tracking</li>
          <li>Improve logistics</li>
        </ul>
        <p>Location collection may continue while a delivery is active.</p>

        <h3>1.6 Device Information</h3>
        <p>We automatically collect technical information such as:</p>
        <ul>
          <li>Device model</li>
          <li>Operating system</li>
          <li>Browser type</li>
          <li>IP address</li>
          <li>Device identifiers</li>
          <li>App version</li>
          <li>Crash reports</li>
        </ul>

        <h3>1.7 Communications</h3>
        <p>We may collect information contained in:</p>
        <ul>
          <li>Customer support chats</li>
          <li>Emails</li>
          <li>Phone calls</li>
          <li>Feedback forms</li>
          <li>Complaints</li>
          <li>Ratings and reviews</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use personal information to:</p>
        <ul>
          <li>Create user accounts</li>
          <li>Authenticate users</li>
          <li>Process orders</li>
          <li>Coordinate deliveries</li>
          <li>Verify rider identities</li>
          <li>Manage merchant relationships</li>
          <li>Process payments</li>
          <li>Prevent fraud</li>
          <li>Improve customer support</li>
          <li>Improve platform performance</li>
          <li>Send service notifications</li>
          <li>Comply with legal obligations</li>
          <li>Maintain platform security</li>
          <li>Conduct analytics</li>
          <li>Improve our products and services</li>
        </ul>

        <h2>3. Legal Basis for Processing</h2>
        <p>Where applicable, we process personal information based on:</p>
        <ul>
          <li>Your consent</li>
          <li>Performance of a contract</li>
          <li>Compliance with legal obligations</li>
          <li>Legitimate business interests</li>
          <li>Protection of vital interests</li>
          <li>Public interest where required by law</li>
        </ul>

        <h2>4. Information Sharing</h2>
        <p>We may share information with:</p>

        <h3>Riders</h3>
        <p>To complete deliveries, riders may receive:</p>
        <ul>
          <li>Customer name</li>
          <li>Delivery address</li>
          <li>Phone number (where necessary)</li>
          <li>Delivery instructions</li>
        </ul>

        <h3>Merchants</h3>
        <p>Merchants may receive:</p>
        <ul>
          <li>Customer name</li>
          <li>Order details</li>
          <li>Delivery status</li>
          <li>Contact information where necessary</li>
        </ul>

        <h3>Payment Providers</h3>
        <p>Payment information may be shared with licensed payment processors to complete transactions.</p>

        <h3>Technology Service Providers</h3>
        <p>We may share information with trusted providers that assist with:</p>
        <ul>
          <li>Cloud hosting</li>
          <li>Maps</li>
          <li>Analytics</li>
          <li>Notifications</li>
          <li>Customer support</li>
          <li>Security monitoring</li>
        </ul>

        <h3>Legal Authorities</h3>
        <p>We may disclose information when required to:</p>
        <ul>
          <li>Comply with applicable law</li>
          <li>Respond to lawful requests</li>
          <li>Protect our legal rights</li>
          <li>Prevent fraud</li>
          <li>Protect public safety</li>
        </ul>

        <h2>5. Cookies and Similar Technologies</h2>
        <p>Our website and applications may use:</p>
        <ul>
          <li>Cookies</li>
          <li>Session cookies</li>
          <li>Authentication cookies</li>
          <li>Analytics cookies</li>
          <li>Security cookies</li>
          <li>Performance cookies</li>
        </ul>
        <p>Cookies help improve functionality and user experience.</p>
        <p>
          Users may disable cookies through their browser settings, although some features may not
          function correctly.
        </p>

        <h2>6. Data Security</h2>
        <p>Urumuri implements reasonable technical and organizational measures to protect personal information, including:</p>
        <ul>
          <li>Encryption in transit</li>
          <li>Encryption at rest where appropriate</li>
          <li>Secure authentication</li>
          <li>Role-based access controls</li>
          <li>Multi-factor authentication for administrative accounts</li>
          <li>Activity logging</li>
          <li>Regular security monitoring</li>
          <li>Secure backups</li>
          <li>Vulnerability management</li>
        </ul>
        <p>While we strive to protect your information, no system can guarantee absolute security.</p>

        <h2>7. Data Retention</h2>
        <p>We retain information only for as long as necessary to:</p>
        <ul>
          <li>Deliver our services</li>
          <li>Meet legal obligations</li>
          <li>Resolve disputes</li>
          <li>Enforce agreements</li>
          <li>Maintain business records</li>
        </ul>
        <p>Certain records may be retained longer where required by law.</p>

        <h2>8. Your Rights</h2>
        <p>Subject to applicable law, you may have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Delete personal information</li>
          <li>Restrict processing</li>
          <li>Object to certain processing activities</li>
          <li>Receive a copy of your data</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Lodge a complaint with the appropriate data protection authority</li>
        </ul>

        <h2>9. Children&rsquo;s Privacy</h2>
        <p>
          Our Services are not intended for individuals under the age required by applicable law
          to use our services independently.
        </p>
        <p>We do not knowingly collect personal information from children without appropriate legal authorization.</p>

        <h2>10. International Data Transfers</h2>
        <p>Your information may be processed or stored in countries outside your country of residence.</p>
        <p>
          Where international transfers occur, Urumuri will take reasonable steps to ensure that
          appropriate safeguards are implemented in accordance with applicable data protection
          laws.
        </p>

        <h2>11. Third-Party Services</h2>
        <p>Our Services may integrate with third-party providers, including:</p>
        <ul>
          <li>Payment gateways</li>
          <li>Mapping services</li>
          <li>Authentication providers</li>
          <li>Cloud infrastructure providers</li>
          <li>Analytics providers</li>
          <li>Communication services</li>
        </ul>
        <p>These providers maintain their own privacy policies and are responsible for their own processing activities.</p>

        <h2>12. Marketing Communications</h2>
        <p>We may send promotional communications where permitted by law.</p>
        <p>You may opt out of marketing communications at any time by:</p>
        <ul>
          <li>Updating your account preferences</li>
          <li>Clicking the unsubscribe link</li>
          <li>Contacting our support team</li>
        </ul>
        <p>Service related notifications will continue to be sent when necessary.</p>

        <h2>13. Changes to this Privacy Policy</h2>
        <p>We may update this Privacy Policy periodically.</p>
        <p>
          When significant changes are made, we will notify users through appropriate channels,
          such as our website, mobile application, or email.
        </p>
        <p>The updated version becomes effective upon publication unless otherwise stated.</p>

        <h2>14. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we process your personal
          information, please contact:
        </p>
        <p>
          Urumuri
          <br />
          Email: urumuridelivery@gmail.com
          <br />
          Website:{" "}
          <a href="https://www.urumuridelivery.com" target="_blank" rel="noreferrer noopener">
            www.urumuridelivery.com
          </a>
          <br />
          Head Office: Kigali, Rwanda
        </p>

        <h2>15. Governing Law</h2>
        <p>
          This Privacy Policy shall be governed by and interpreted in accordance with the laws of
          the Republic of Rwanda.
        </p>
        <p>
          Where applicable, Urumuri will also comply with relevant international data protection
          requirements relating to the jurisdictions in which it operates.
        </p>

        <h2>Document Control</h2>
        <div className={styles.legalTableWrap}>
          <table className={styles.legalTable}>
            <tbody>
              <tr>
                <th>Document Name</th>
                <td>Privacy Policy</td>
              </tr>
              <tr>
                <th>Document Code</th>
                <td>URM-LEGAL-PrivacyPolicy-v1.0</td>
              </tr>
              <tr>
                <th>Version</th>
                <td>1.0</td>
              </tr>
              <tr>
                <th>Owner</th>
                <td>Office of the General Manager</td>
              </tr>
              <tr>
                <th>Classification</th>
                <td>Internal &amp; Public</td>
              </tr>
              <tr>
                <th>Approval Authority</th>
                <td>General Manager</td>
              </tr>
              <tr>
                <th>Next Review Date</th>
                <td>July 20, 2027</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>Approved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
