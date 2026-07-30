"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/LanguageContext";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import HeroVisual from "@/components/HeroVisual";

export default function AboutContent() {
  const t = useTranslations();
  const p = t.pages.about;

  const hero = useAnimateOnScroll<HTMLElement>();
  const mission = useAnimateOnScroll<HTMLDivElement>();
  const values = useAnimateOnScroll<HTMLElement>();
  const impact = useAnimateOnScroll<HTMLElement>();

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
          <HeroVisual className="hero-visual hero-visual-about">
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
          <div ref={mission.ref} className={`section-grid ${mission.className}`}>
            <div className="glass-panel">
              <h2>{p.mission.missionTitle}</h2>
              <p>{p.mission.missionText}</p>
            </div>
            <div className="glass-panel">
              <h2>{p.mission.visionTitle}</h2>
              <p>{p.mission.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={values.ref} className={`section section-glass ${values.className}`}>
        <div className="container section-header">
          <p className="eyebrow">{p.values.eyebrow}</p>
          <h2>{p.values.title}</h2>
        </div>
        <div className="feature-grid">
          <article>
            <h3>{p.values.innovationTitle}</h3>
            <p>{p.values.innovationText}</p>
          </article>
          <article>
            <h3>{p.values.safetyTitle}</h3>
            <p>{p.values.safetyText}</p>
          </article>
          <article>
            <h3>{p.values.communityTitle}</h3>
            <p>{p.values.communityText}</p>
          </article>
          <article>
            <h3>{p.values.sustainabilityTitle}</h3>
            <p>{p.values.sustainabilityText}</p>
          </article>
        </div>
      </section>

      <section ref={impact.ref} className={`section section-highlight ${impact.className}`}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">{p.impact.eyebrow}</p>
            <h2>{p.impact.title}</h2>
            <p>{p.impact.text}</p>
          </div>
          <div className="cards-grid">
            <article className="service-card">
              <span className="service-icon">🌍</span>
              <h3>{p.impact.growthTitle}</h3>
              <p>{p.impact.growthText}</p>
            </article>
            <article className="service-card">
              <span className="service-icon">👥</span>
              <h3>{p.impact.youthTitle}</h3>
              <p>{p.impact.youthText}</p>
            </article>
            <article className="service-card">
              <span className="service-icon">⚡</span>
              <h3>{p.impact.smartTitle}</h3>
              <p>{p.impact.smartText}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
