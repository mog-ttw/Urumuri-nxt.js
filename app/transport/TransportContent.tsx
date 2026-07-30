"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/LanguageContext";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import HeroVisual from "@/components/HeroVisual";

export default function TransportContent() {
  const t = useTranslations();
  const p = t.pages.transport;

  const hero = useAnimateOnScroll<HTMLElement>();
  const safetyHeader = useAnimateOnScroll<HTMLDivElement>();
  const safetyCards = useAnimateOnScroll<HTMLDivElement>();
  const glass = useAnimateOnScroll<HTMLDivElement>();
  const studentHeader = useAnimateOnScroll<HTMLDivElement>();
  const studentGrid = useAnimateOnScroll<HTMLDivElement>();
  const cta = useAnimateOnScroll<HTMLDivElement>();

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
          <HeroVisual className="hero-visual hero-visual-transport">
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
          <div ref={safetyHeader.ref} className={`section-header ${safetyHeader.className}`}>
            <p className="eyebrow">{p.safety.eyebrow}</p>
            <h2>{p.safety.title}</h2>
          </div>
          <div ref={safetyCards.ref} className={`cards-grid ${safetyCards.className}`}>
            <article className="service-card">
              <span className="service-icon">🪖</span>
              <h3>{p.safety.helmetTitle}</h3>
              <p>{p.safety.helmetText}</p>
            </article>
            <article className="service-card">
              <span className="service-icon">🌧️</span>
              <h3>{p.safety.rainTitle}</h3>
              <p>{p.safety.rainText}</p>
            </article>
            <article className="service-card">
              <span className="service-icon">✨</span>
              <h3>{p.safety.reflectiveTitle}</h3>
              <p>{p.safety.reflectiveText}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-glass">
        <div ref={glass.ref} className={`container section-grid ${glass.className}`}>
          <div className="glass-panel">
            <h2>{p.glass.electricTitle}</h2>
            <p>{p.glass.electricText}</p>
          </div>
          <div className="glass-panel">
            <h2>{p.glass.passengerTitle}</h2>
            <p>{p.glass.passengerText}</p>
          </div>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="container">
          <div ref={studentHeader.ref} className={`section-header ${studentHeader.className}`}>
            <p className="eyebrow">{p.student.eyebrow}</p>
            <h2>{p.student.title}</h2>
          </div>
          <div ref={studentGrid.ref} className={`feature-grid ${studentGrid.className}`}>
            <article>
              <h3>{p.student.discountTitle}</h3>
              <p>{p.student.discountText}</p>
            </article>
            <article>
              <h3>{p.student.studyTitle}</h3>
              <p>{p.student.studyText}</p>
            </article>
            <article>
              <h3>{p.student.youthTitle}</h3>
              <p>{p.student.youthText}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div ref={cta.ref} className={`container cta-panel ${cta.className}`}>
          <div>
            <p className="eyebrow">{p.cta.eyebrow}</p>
            <h2>{p.cta.title}</h2>
            <p>{p.cta.text}</p>
          </div>
          <Link className="btn btn-primary" href="/contact">
            {p.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
