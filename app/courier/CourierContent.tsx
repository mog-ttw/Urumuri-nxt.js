"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/lib/LanguageContext";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import HeroVisual from "@/components/HeroVisual";
import { withBasePath } from "@/lib/basePath";

export default function CourierContent() {
  const t = useTranslations();
  const p = t.pages.courier;

  const hero = useAnimateOnScroll<HTMLElement>();
  const servicesHeader = useAnimateOnScroll<HTMLDivElement>();
  const servicesCards = useAnimateOnScroll<HTMLDivElement>();
  const glass = useAnimateOnScroll<HTMLDivElement>();
  const professionalHeader = useAnimateOnScroll<HTMLDivElement>();
  const professionalGrid = useAnimateOnScroll<HTMLDivElement>();
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
          <HeroVisual className="hero-visual hero-visual-courier">
            <div className="hero-visual-overlay"></div>
            <div className="hero-visual-frame">
              <div className="hero-badge">{p.hero.badge}</div>
              <div className="media-panel" style={{ padding: 0, overflow: "hidden", height: 280 }}>
                <Image
                  src={withBasePath("/urumuri-courier-handoff.jpg")}
                  alt="Urumuri courier handing off a delivery bag from a branded motorcycle"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
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
              <span className="service-icon">📄</span>
              <h3>{p.services.docTitle}</h3>
              <p>{p.services.docText}</p>
            </article>
            <article className="service-card">
              <span className="service-icon">🏢</span>
              <h3>{p.services.businessTitle}</h3>
              <p>{p.services.businessText}</p>
            </article>
            <article className="service-card">
              <span className="service-icon">🎁</span>
              <h3>{p.services.personalTitle}</h3>
              <p>{p.services.personalText}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-glass">
        <div ref={glass.ref} className={`container section-grid ${glass.className}`}>
          <div className="glass-panel">
            <h2>{p.glass.sameDayTitle}</h2>
            <p>{p.glass.sameDayText}</p>
          </div>
          <div className="glass-panel">
            <h2>{p.glass.trackingTitle}</h2>
            <p>{p.glass.trackingText}</p>
          </div>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="container">
          <div ref={professionalHeader.ref} className={`section-header ${professionalHeader.className}`}>
            <p className="eyebrow">{p.professional.eyebrow}</p>
            <h2>{p.professional.title}</h2>
          </div>
          <div ref={professionalGrid.ref} className={`feature-grid ${professionalGrid.className}`}>
            <article>
              <h3>{p.professional.protectionTitle}</h3>
              <p>{p.professional.protectionText}</p>
            </article>
            <article>
              <h3>{p.professional.trainingTitle}</h3>
              <p>{p.professional.trainingText}</p>
            </article>
            <article>
              <h3>{p.professional.workflowTitle}</h3>
              <p>{p.professional.workflowText}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div ref={cta.ref} className={`container cta-panel ${cta.className}`}>
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
