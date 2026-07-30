"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/LanguageContext";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import HeroVisual from "@/components/HeroVisual";

export default function FoodContent() {
  const t = useTranslations();
  const p = t.pages.food;

  const hero = useAnimateOnScroll<HTMLElement>();
  const servicesHeader = useAnimateOnScroll<HTMLDivElement>();
  const servicesCards = useAnimateOnScroll<HTMLDivElement>();
  const glass = useAnimateOnScroll<HTMLDivElement>();
  const supportHeader = useAnimateOnScroll<HTMLDivElement>();
  const supportGrid = useAnimateOnScroll<HTMLDivElement>();
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
              <Link className="btn btn-secondary" href="/merchants">
                {p.hero.secondary}
              </Link>
            </div>
          </div>
          <HeroVisual className="hero-visual hero-visual-food">
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
          <div ref={servicesHeader.ref} className={`section-header ${servicesHeader.className}`}>
            <p className="eyebrow">{p.services.eyebrow}</p>
            <h2>{p.services.title}</h2>
          </div>
          <div ref={servicesCards.ref} className={`cards-grid ${servicesCards.className}`}>
            <article className="service-card">
              <span className="service-icon">🍽️</span>
              <h3>{p.services.restaurantTitle}</h3>
              <p>{p.services.restaurantText}</p>
            </article>
            <article className="service-card">
              <span className="service-icon">🛒</span>
              <h3>{p.services.groceryTitle}</h3>
              <p>{p.services.groceryText}</p>
            </article>
            <article className="service-card">
              <span className="service-icon">🧾</span>
              <h3>{p.services.buyTitle}</h3>
              <p>{p.services.buyText}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-glass">
        <div ref={glass.ref} className={`container section-grid ${glass.className}`}>
          <div className="glass-panel">
            <h2>{p.glass.workTitle}</h2>
            <p>{p.glass.workText}</p>
          </div>
          <div className="glass-panel">
            <h2>{p.glass.homeTitle}</h2>
            <p>{p.glass.homeText}</p>
          </div>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="container">
          <div ref={supportHeader.ref} className={`section-header ${supportHeader.className}`}>
            <p className="eyebrow">{p.support.eyebrow}</p>
            <h2>{p.support.title}</h2>
          </div>
          <div ref={supportGrid.ref} className={`feature-grid ${supportGrid.className}`}>
            <article>
              <h3>{p.support.fastTitle}</h3>
              <p>{p.support.fastText}</p>
            </article>
            <article>
              <h3>{p.support.secureTitle}</h3>
              <p>{p.support.secureText}</p>
            </article>
            <article>
              <h3>{p.support.smartTitle}</h3>
              <p>{p.support.smartText}</p>
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
