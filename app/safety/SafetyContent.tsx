"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/LanguageContext";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import HeroVisual from "@/components/HeroVisual";

export default function SafetyContent() {
  const t = useTranslations();
  const p = t.pages.safety;

  const hero = useAnimateOnScroll<HTMLElement>();
  const passengerHeader = useAnimateOnScroll<HTMLDivElement>();
  const passengerCards = useAnimateOnScroll<HTMLDivElement>();
  const glass = useAnimateOnScroll<HTMLElement>();
  const emergency = useAnimateOnScroll<HTMLElement>();
  const cta = useAnimateOnScroll<HTMLElement>();

  return (
    <>
      <section ref={hero.ref} className={`hero hero-secondary ${hero.className}`}>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{p.hero.eyebrow}</p>
            <h1>{p.hero.headline}</h1>
            <p className="hero-intro">{p.hero.intro}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                {p.hero.primary}
              </Link>
              <Link className="btn btn-secondary" href="/drivers">
                {p.hero.secondary}
              </Link>
            </div>
          </div>
          <HeroVisual className="hero-visual hero-visual-safety">
            <div className="hero-visual-overlay"></div>
            <div className="hero-visual-frame">
              <div className="hero-badge">{p.hero.badge}</div>
              <div className="media-panel">{p.hero.media}</div>
            </div>
          </HeroVisual>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="container">
          <div ref={passengerHeader.ref} className={`section-header ${passengerHeader.className}`}>
            <p className="eyebrow">{p.passenger.eyebrow}</p>
            <h2>{p.passenger.title}</h2>
          </div>
          <div ref={passengerCards.ref} className={`cards-grid ${passengerCards.className}`}>
            <article className="service-card">
              <span className="service-icon">🪖</span>
              <h3>{p.passenger.helmetTitle}</h3>
              <p>{p.passenger.helmetText}</p>
            </article>
            <article className="service-card">
              <span className="service-icon">🦺</span>
              <h3>{p.passenger.reflectiveTitle}</h3>
              <p>{p.passenger.reflectiveText}</p>
            </article>
            <article className="service-card">
              <span className="service-icon">🔦</span>
              <h3>{p.passenger.visibilityTitle}</h3>
              <p>{p.passenger.visibilityText}</p>
            </article>
          </div>
        </div>
      </section>

      <section ref={glass.ref} className={`section section-glass ${glass.className}`}>
        <div className="container section-grid">
          <div className="glass-panel">
            <h2>{p.glass.trainingTitle}</h2>
            <p>{p.glass.trainingText}</p>
          </div>
          <div className="glass-panel">
            <h2>{p.glass.packageTitle}</h2>
            <p>{p.glass.packageText}</p>
          </div>
        </div>
      </section>

      <section ref={emergency.ref} className={`section section-highlight ${emergency.className}`}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">{p.emergency.eyebrow}</p>
            <h2>{p.emergency.title}</h2>
            <p>{p.emergency.text}</p>
          </div>
          <div className="feature-grid">
            <article>
              <h3>{p.emergency.supportTitle}</h3>
              <p>{p.emergency.supportText}</p>
            </article>
            <article>
              <h3>{p.emergency.careTitle}</h3>
              <p>{p.emergency.careText}</p>
            </article>
            <article>
              <h3>{p.emergency.insuranceTitle}</h3>
              <p>{p.emergency.insuranceText}</p>
            </article>
          </div>
        </div>
      </section>

      <section ref={cta.ref} className={`section section-cta ${cta.className}`}>
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">{p.cta.eyebrow}</p>
            <h2>{p.cta.title}</h2>
          </div>
          <Link className="btn btn-primary" href="/contact">
            {p.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
