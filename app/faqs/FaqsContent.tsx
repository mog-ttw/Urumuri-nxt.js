"use client";

import Link from "next/link";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import HeroVisual from "@/components/HeroVisual";
import styles from "./faqs.module.css";

const FAQS = [
  {
    q: "How do I book a ride with Urumuri Transport?",
    a: "Request a ride through the Urumuri app or contact our team directly. Every trip includes certified helmets and reflective safety gear.",
  },
  {
    q: "What areas does Urumuri Food deliver to?",
    a: "We currently serve Kigali and nearby districts, covering restaurant meals, groceries and buy-for-me requests with fast, tracked delivery.",
  },
  {
    q: "Can I get a package delivered the same day?",
    a: "Yes. Urumuri Courier offers same-day options for documents, business parcels and personal shipments with secure handling and tracking.",
  },
  {
    q: "How do I become an Urumuri driver?",
    a: "Apply through our Drivers page. We provide electric motorcycles, safety training and flexible income opportunities for every partner.",
  },
  {
    q: "How can my business partner with Urumuri?",
    a: "Merchants get access to sales analytics, inventory insights and promotional tools. Reach out through the Contact page to request access.",
  },
  {
    q: "What safety measures are in place for riders and passengers?",
    a: "Premium helmets, reflective gear, professional rider training and emergency-ready support are standard across the entire network.",
  },
  {
    q: "What payment and pricing options are available?",
    a: "Pricing is transparent and considers distance, traffic and urgency. Student and Umuganda discount programs are available on select services.",
  },
  {
    q: "How do I get in touch with support?",
    a: "Visit the Contact page for our office location, phone, email and WhatsApp, or leave a review to share feedback about a recent experience.",
  },
];

export default function FaqsContent() {
  const hero = useAnimateOnScroll<HTMLElement>();
  const list = useAnimateOnScroll<HTMLDivElement>();

  return (
    <>
      <section ref={hero.ref} className={`hero hero-secondary ${hero.className}`}>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Help center</p>
            <h1>Frequently Asked Questions</h1>
            <p className="hero-intro">
              Answers to common questions about rides, deliveries, couriers, drivers and merchants on the
              Urumuri network.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                Contact Us
              </Link>
              <Link className="btn btn-secondary" href="/reviews">
                Leave a Review
              </Link>
            </div>
          </div>
          <HeroVisual className="hero-visual hero-visual-safety">
            <div className="hero-visual-overlay"></div>
            <div className="hero-visual-frame">
              <div className="hero-badge">Here to help</div>
              <div className="media-panel">Quick answers about transport, food, courier and more.</div>
            </div>
          </HeroVisual>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="container">
          <div ref={list.ref} className={`${styles.faqList} ${list.className}`}>
            {FAQS.map((item) => (
              <div key={item.q} className={styles.faqItem}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
