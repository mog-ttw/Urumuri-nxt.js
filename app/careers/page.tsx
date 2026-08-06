import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Urumuri",
  description: "Urumuri careers page — coming soon.",
};

export default function CareersPage() {
  return (
    <section className="section" style={{ paddingTop: "7rem", paddingBottom: "8rem" }}>
      <div
        className="container"
        style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}
      >
        <p className="eyebrow" style={{ justifyContent: "center", width: "100%" }}>
          Careers
        </p>
        <h1 style={{ margin: "0 0 1rem" }}>Coming Soon</h1>
        <p className="hero-intro" style={{ margin: "0 auto 2rem" }}>
          We&rsquo;re building out our careers page. Check back soon to see open roles at Urumuri,
          or reach out to us directly in the meantime.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link className="btn btn-primary" href="/contact">
            Contact Us
          </Link>
          <Link className="btn btn-secondary" href="/">
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
