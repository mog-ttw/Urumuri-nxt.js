import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Rider Terms and Conditions | Urumuri",
  description:
    "Eligibility, professional conduct, safety, motorcycle requirements, customer service, payments and other policies for Urumuri riders.",
};

export default function DriverTermsPage() {
  return (
    <section className={`section ${styles.legalSection}`}>
      <div className={`container ${styles.legalContent}`}>
        <p className="eyebrow">Legal</p>
        <h1>Urumuri Rider Terms and Conditions</h1>

        <h2>1. Eligibility</h2>
        <ul>
          <li>The rider must be at least 18 years old.</li>
          <li>The rider must possess a valid motorcycle driving license.</li>
          <li>
            The rider must provide all required registration documents including a criminal
            record before joining.
          </li>
          <li>The rider must pass Urumuri&rsquo;s screening and training process.</li>
        </ul>

        <h2>2. Professional Conduct</h2>
        <ul>
          <li>Riders must treat customers with respect and professionalism.</li>
          <li>Riders must avoid abusive language, harassment, discrimination, or violence.</li>
          <li>Riders must maintain good personal hygiene and wear clean clothing.</li>
          <li>Riders must speak English or willing and ready to learn English.</li>
        </ul>

        <h2>3. Safety Requirements</h2>
        <ul>
          <li>Riders must wear protective gear especially helmets during riding or services.</li>
          <li>Riders must obey all traffic laws and regulations.</li>
          <li>Riders must never operate a motorcycle under the influence of alcohol or drugs.</li>
          <li>Riders must attend all mandatory safety and first aid training.</li>
        </ul>

        <h2>4. Motorcycle Requirements</h2>
        <ul>
          <li>The motorcycle must be roadworthy and legally registered.</li>
          <li>Insurance (where applicable) and inspection documents must remain valid.</li>
          <li>Riders are responsible for keeping their motorcycles clean and well maintained.</li>
        </ul>

        <h2>5. Customer Service</h2>
        <ul>
          <li>Arrive on time for assigned trips or deliveries.</li>
          <li>Handle customers&rsquo; property carefully.</li>
          <li>Be polite and helpful at all times.</li>
          <li>Protect customer privacy and confidentiality.</li>
        </ul>

        <h2>6. Attendance and Availability</h2>
        <ul>
          <li>Riders should communicate their availability in advance.</li>
          <li>Repeated unexplained absences may result in suspension or termination.</li>
        </ul>

        <h2>7. Payments</h2>
        <ul>
          <li>Payments will be made according to the agreed payment structure.</li>
          <li>Riders are responsible for providing accurate payment information.</li>
          <li>Any authorized deductions will be clearly communicated.</li>
        </ul>

        <h2>8. Company Property</h2>
        <ul>
          <li>
            Riders are responsible for equipment provided by Urumuri, including uniforms,
            helmets, shoes, bags, or identification cards.
          </li>
          <li>Lost or intentionally damaged company property may require replacement.</li>
        </ul>

        <h2>9. Confidentiality</h2>
        <ul>
          <li>
            Riders shall not disclose company information, customer details, pricing, or
            business operations without authorization.
          </li>
        </ul>

        <h2>10. Prohibited Activities</h2>
        <p>Riders shall not:</p>
        <ul>
          <li>Commit fraud or theft.</li>
          <li>Carry illegal goods.</li>
          <li>Use another person&rsquo;s account or identity.</li>
          <li>Accept jobs outside company procedures without authorization.</li>
          <li>Damage the company&rsquo;s reputation through misconduct.</li>
        </ul>

        <h2>11. Accidents and Emergencies</h2>
        <ul>
          <li>Riders must immediately report any accident or incident.</li>
          <li>Riders should cooperate with investigations and provide accurate information.</li>
        </ul>

        <h2>12. Suspension or Termination</h2>
        <p>Urumuri reserves the right to suspend or terminate a rider for:</p>
        <ul>
          <li>Serious misconduct.</li>
          <li>Repeated violation of company policies.</li>
          <li>Unsafe riding practices.</li>
          <li>Fraud or dishonesty.</li>
          <li>Criminal activity affecting the company&rsquo;s reputation.</li>
        </ul>
      </div>
    </section>
  );
}
