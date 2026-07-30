"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/lib/LanguageContext";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import HeroVisual from "@/components/HeroVisual";

export default function MerchantsContent() {
  const t = useTranslations();
  const p = t.pages.merchants;

  const hero = useAnimateOnScroll<HTMLElement>();
  const dashboardHeader = useAnimateOnScroll<HTMLDivElement>();
  const dashboardGrid = useAnimateOnScroll<HTMLDivElement>();
  const glass = useAnimateOnScroll<HTMLDivElement>();
  const intelligenceHeader = useAnimateOnScroll<HTMLDivElement>();
  const intelligenceGrid = useAnimateOnScroll<HTMLDivElement>();
  const future = useAnimateOnScroll<HTMLElement>();
  const pricing = useAnimateOnScroll<HTMLElement>();

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
              <Link className="btn btn-secondary" href="/about">
                {p.hero.secondary}
              </Link>
            </div>
          </div>
          <HeroVisual className="hero-visual hero-visual-merchant">
            <div className="hero-visual-overlay"></div>
            <div className="hero-visual-frame">
              <div className="hero-badge">{p.hero.badge}</div>
              <div className="media-panel" style={{ padding: 0, overflow: "hidden", height: 280 }}>
                <Image
                  src="/urumuri-merchant-feature.jpg"
                  alt="Featured dish showcased through an Urumuri merchant partner"
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
          <div ref={dashboardHeader.ref} className={`section-header ${dashboardHeader.className}`}>
            <p className="eyebrow">{p.dashboard.eyebrow}</p>
            <h2>{p.dashboard.title}</h2>
          </div>
          <div ref={dashboardGrid.ref} className={`section-grid ${dashboardGrid.className}`}>
            <div className="glass-panel">
              <h3>{p.dashboard.salesToday}</h3>
              <p>RWF 1,320,000</p>
            </div>
            <div className="glass-panel">
              <h3>{p.dashboard.salesWeek}</h3>
              <p>RWF 8,420,000</p>
            </div>
            <div className="glass-panel">
              <h3>{p.dashboard.salesMonth}</h3>
              <p>RWF 32,100,000</p>
            </div>
            <div className="glass-panel">
              <h3>{p.dashboard.aov}</h3>
              <p>RWF 6,700</p>
            </div>
            <div className="glass-panel">
              <h3>{p.dashboard.orders}</h3>
              <p>1,520</p>
            </div>
            <div className="glass-panel">
              <h3>{p.dashboard.bestSellers}</h3>
              <p>{p.dashboard.bestSellersText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-glass">
        <div ref={glass.ref} className={`container section-grid ${glass.className}`}>
          <div className="glass-panel">
            <h2>{p.glass.revenueTitle}</h2>
            <p>{p.glass.revenueText}</p>
          </div>
          <div className="glass-panel">
            <h2>{p.glass.productTitle}</h2>
            <p>{p.glass.productText}</p>
          </div>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="container">
          <div ref={intelligenceHeader.ref} className={`section-header ${intelligenceHeader.className}`}>
            <p className="eyebrow">{p.intelligence.eyebrow}</p>
            <h2>{p.intelligence.title}</h2>
          </div>
          <div ref={intelligenceGrid.ref} className={`feature-grid ${intelligenceGrid.className}`}>
            <article>
              <h3>{p.intelligence.sellsTitle}</h3>
              <p>{p.intelligence.sellsText}</p>
            </article>
            <article>
              <h3>{p.intelligence.hireTitle}</h3>
              <p>{p.intelligence.hireText}</p>
            </article>
            <article>
              <h3>{p.intelligence.restockTitle}</h3>
              <p>{p.intelligence.restockText}</p>
            </article>
            <article>
              <h3>{p.intelligence.revenueTitle}</h3>
              <p>{p.intelligence.revenueText}</p>
            </article>
          </div>
        </div>
      </section>

      <section ref={future.ref} className={`section section-glass ${future.className}`}>
        <div className="container cta-panel cta-panel-inverse">
          <div>
            <p className="eyebrow">{p.future.eyebrow}</p>
            <h2>{p.future.title}</h2>
            <p>{p.future.text}</p>
          </div>
          <span className="btn btn-secondary">{p.future.button}</span>
        </div>
      </section>

      <section ref={pricing.ref} className={`section section-highlight ${pricing.className}`}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">{p.pricing.eyebrow}</p>
            <h2>{p.pricing.title}</h2>
            <p>{p.pricing.text}</p>
          </div>
          <div className="feature-grid">
            <article>
              <h3>{p.pricing.trafficTitle}</h3>
              <p>{p.pricing.trafficText}</p>
            </article>
            <article>
              <h3>{p.pricing.distanceTitle}</h3>
              <p>{p.pricing.distanceText}</p>
            </article>
            <article>
              <h3>{p.pricing.urgencyTitle}</h3>
              <p>{p.pricing.urgencyText}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
