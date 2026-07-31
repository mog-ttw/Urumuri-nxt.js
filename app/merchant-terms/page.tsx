import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Merchant & Courier Terms | Urumuri",
  description:
    "Merchant responsibilities and courier professional standards and conduct policies for Urumuri Delivery.",
};

export default function MerchantTermsPage() {
  return (
    <section className={`section ${styles.legalSection}`}>
      <div className={`container ${styles.legalContent}`}>
        <p className="eyebrow">Legal</p>
        <h1>Merchant &amp; Courier Terms</h1>
        <p className={styles.legalIntro}>
          These terms set out the responsibilities of merchants who list products on Urumuri
          Delivery and the professional standards expected of courier delivery partners.
        </p>

        <h2>Merchant Responsibilities</h2>
        <p>Merchants using Urumuri Delivery agree to:</p>
        <ul>
          <li>Operate lawfully and maintain required licenses.</li>
          <li>Keep menus, prices, and product descriptions accurate.</li>
          <li>Prepare products safely and hygienically.</li>
          <li>Fulfil accepted orders promptly.</li>
          <li>Notify the platform of unavailable items.</li>
          <li>Cooperate in resolving customer complaints.</li>
        </ul>
        <p>
          Merchants remain responsible for the quality, legality, and safety of the products they
          sell.
        </p>

        <h2>Urumuri Delivery &ndash; Courier Terms</h2>

        <h3>Professional Standards</h3>
        <p>Delivery partners must:</p>
        <ul>
          <li>Follow applicable traffic and safety laws.</li>
          <li>Treat customers respectfully.</li>
          <li>Handle orders with care.</li>
          <li>Protect customer privacy.</li>
          <li>Deliver orders without tampering.</li>
          <li>Report incidents or delays honestly.</li>
        </ul>

        <h3>Conduct</h3>
        <p>
          Couriers must not engage in theft, fraud, harassment, discrimination, or unsafe behavior
          while representing Urumuri Delivery.
        </p>
        <p>
          Repeated policy violations or serious misconduct may result in suspension or permanent
          removal from the platform.
        </p>

        <h2>Contact Information for All Policies</h2>
        <p>
          Urumuri Delivery
          <br />
          Website:{" "}
          <a href="https://urumuridelivery.com" target="_blank" rel="noreferrer noopener">
            https://urumuridelivery.com
          </a>
          <br />
          Email: support@urumuridelivery.com
          <br />
          Customer Support: +250 793 155 154
          <br />
          Business Hours: 9am&ndash;9pm (Monday to Saturday), 11am&ndash;6pm (Sunday)
        </p>
        <p>
          By using Urumuri Delivery, partnering as a merchant, or providing services as a courier,
          you acknowledge that you have read and agree to the applicable policies published by the
          company.
        </p>
      </div>
    </section>
  );
}
