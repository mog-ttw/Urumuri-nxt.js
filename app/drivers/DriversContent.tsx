"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/LanguageContext";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import HeroVisual from "@/components/HeroVisual";

export default function DriversContent() {
  const t = useTranslations();
  const p = t.pages.drivers;

  const hero = useAnimateOnScroll<HTMLElement>();
  const benefitsHeader = useAnimateOnScroll<HTMLDivElement>();
  const benefitsGrid = useAnimateOnScroll<HTMLDivElement>();
  const glass = useAnimateOnScroll<HTMLElement>();
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
          <HeroVisual className="hero-visual hero-visual-drivers">
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
          <div ref={benefitsHeader.ref} className={`section-header ${benefitsHeader.className}`}>
            <p className="eyebrow">{p.benefits.eyebrow}</p>
            <h2>{p.benefits.title}</h2>
          </div>
          <div ref={benefitsGrid.ref} className={`feature-grid ${benefitsGrid.className}`}>
            <article>
              <h3>{p.benefits.incomeTitle}</h3>
              <p>{p.benefits.incomeText}</p>
            </article>
            <article>
              <h3>{p.benefits.equipmentTitle}</h3>
              <p>{p.benefits.equipmentText}</p>
            </article>
            <article>
              <h3>{p.benefits.trainingTitle}</h3>
              <p>{p.benefits.trainingText}</p>
            </article>
            <article>
              <h3>{p.benefits.growthTitle}</h3>
              <p>{p.benefits.growthText}</p>
            </article>
          </div>
        </div>
      </section>

      <section ref={glass.ref} className={`section section-glass ${glass.className}`}>
        <div className="container section-grid">
          <div className="glass-panel">
            <h2>{p.glass.electricTitle}</h2>
            <p>{p.glass.electricText}</p>
          </div>
          <div className="glass-panel">
            <h2>{p.glass.safetyTitle}</h2>
            <p>{p.glass.safetyText}</p>
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
