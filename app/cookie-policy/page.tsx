import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Cookie Policy | Urumuri",
  description: "How Urumuri uses cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <section className={`section ${styles.legalSection}`}>
      <div className={`container ${styles.legalContent}`}>
        <p className="eyebrow">Legal &bull; Effective Date: July 30, 2026</p>
        <h1>Cookie Policy</h1>
        <p className={styles.legalIntro}>
          Welcome to Urumuri (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). This Cookie Policy explains
          how cookies and similar technologies are used when you visit our website. By continuing
          to use our website, you agree to the use of cookies as described in this policy, unless
          you disable them through your browser or our cookie preferences.
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your computer, smartphone, or tablet when you
          visit a website. They help websites function properly, remember your preferences,
          improve performance, and provide a better browsing experience.
        </p>
        <p>Cookies cannot run programs or deliver viruses to your device.</p>

        <h2>2. Why We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Keep our website secure.</li>
          <li>Remember your preferences.</li>
          <li>Improve website performance.</li>
          <li>Understand how visitors use our website.</li>
          <li>Enhance user experience.</li>
          <li>Maintain reliable website functionality.</li>
        </ul>

        <h2>3. Types of Cookies We Use</h2>

        <h3>Essential Cookies</h3>
        <p>These cookies are necessary for the website to function correctly. Examples include:</p>
        <ul>
          <li>User session management</li>
          <li>Security protection</li>
          <li>Load balancing</li>
          <li>Login authentication (if applicable)</li>
        </ul>
        <p>These cookies cannot be disabled because the website may not function properly without them.</p>

        <h3>Performance &amp; Analytics Cookies</h3>
        <p>These cookies help us understand:</p>
        <ul>
          <li>Number of visitors</li>
          <li>Most visited pages</li>
          <li>Time spent on pages</li>
          <li>Website performance</li>
          <li>Error reports</li>
        </ul>
        <p>Information collected is aggregated and anonymous whenever possible. Examples may include:</p>
        <ul>
          <li>Google Analytics (if enabled)</li>
          <li>Vercel Analytics (if enabled)</li>
        </ul>
        <p>These cookies are only used with your consent where required by law.</p>

        <h3>Functional Cookies</h3>
        <p>These cookies remember choices you make, such as:</p>
        <ul>
          <li>Language preference</li>
          <li>Theme settings</li>
          <li>User interface preferences</li>
        </ul>
        <p>They help personalize your experience.</p>

        <h3>Marketing Cookies</h3>
        <p>
          If we ever display advertisements or use marketing platforms, these cookies may be used
          to:
        </p>
        <ul>
          <li>Measure advertising effectiveness</li>
          <li>Show relevant advertisements</li>
          <li>Limit repeated ads</li>
        </ul>
        <p>These cookies are only stored after you provide consent.</p>

        <h2>4. Third-Party Cookies</h2>
        <p>Some services integrated into our website may place cookies on your device, including:</p>
        <ul>
          <li>Google</li>
          <li>GitHub Pages</li>
          <li>Vercel</li>
          <li>YouTube (embedded videos)</li>
          <li>Google Maps (embedded maps)</li>
        </ul>
        <p>These providers maintain their own privacy and cookie policies.</p>

        <h2>5. Cookie Duration</h2>
        <p>Cookies may remain on your device for different periods.</p>

        <h3>Session Cookies</h3>
        <p>Deleted automatically when you close your browser.</p>

        <h3>Persistent Cookies</h3>
        <p>Remain on your device until they expire or are manually deleted.</p>
        <p>Retention periods vary depending on the cookie&rsquo;s purpose.</p>

        <h2>6. Managing Cookies</h2>
        <p>You can control cookies at any time by:</p>
        <ul>
          <li>Accepting or rejecting non-essential cookies through our cookie banner.</li>
          <li>Changing your browser settings.</li>
          <li>Deleting existing cookies from your browser.</li>
        </ul>
        <p>Most browsers allow you to:</p>
        <ul>
          <li>View stored cookies</li>
          <li>Delete cookies</li>
          <li>Block third-party cookies</li>
          <li>Block all cookies</li>
        </ul>
        <p>Please note that disabling essential cookies may affect website functionality.</p>

        <h2>7. Consent</h2>
        <p>
          Where required by applicable law, we will ask for your consent before placing
          non-essential cookies on your device.
        </p>
        <p>You may withdraw your consent at any time through our cookie settings.</p>

        <h2>8. Changes to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy periodically to reflect changes in technology, legal
          requirements, or our services.
        </p>
        <p>Any updates will be posted on this page together with the revised Effective Date.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions regarding this Cookie Policy or our use of cookies, please contact us.</p>
        <p>
          Urumuri
          <br />
          Email: urumuridelivery@gmail.com
          <br />
          Website:{" "}
          <a href="https://www.urumuridelivery.com" target="_blank" rel="noreferrer noopener">
            www.urumuridelivery.com
          </a>
        </p>
      </div>
    </section>
  );
}
