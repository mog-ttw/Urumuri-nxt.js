"use client";

import { useTranslations } from "@/lib/LanguageContext";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import HeroVisual from "@/components/HeroVisual";

export default function ContactContent() {
  const t = useTranslations();
  const p = t.pages.contact;

  const hero = useAnimateOnScroll<HTMLElement>();
  const info = useAnimateOnScroll<HTMLElement>();
  const reach = useAnimateOnScroll<HTMLElement>();
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
              <a className="btn btn-primary" href="mailto:info@urumuri.rw">
                {p.hero.primary}
              </a>
              <a
                className="btn btn-secondary"
                href="https://api.whatsapp.com/send/?phone=%2B250793155154"
                target="_blank"
                rel="noreferrer noopener"
              >
                {p.hero.secondary}
              </a>
            </div>
          </div>
          <HeroVisual className="hero-visual hero-visual-contact">
            <div className="hero-visual-overlay"></div>
            <div className="hero-visual-frame">
              <div className="hero-badge">{p.hero.badge}</div>
              <div className="media-panel">{p.hero.media}</div>
            </div>
          </HeroVisual>
        </div>
      </section>

      <section ref={info.ref} className={`section section-highlight ${info.className}`}>
        <div className="container section-grid">
          <div className="glass-panel">
            <h2>{p.info.officeTitle}</h2>
            <p>{p.info.officeText}</p>
          </div>
          <div className="glass-panel">
            <h2>{p.info.phoneTitle}</h2>
            <p>+250 793 155 154</p>
          </div>
          <div className="glass-panel">
            <h2>{p.info.emailTitle}</h2>
            <p>info@urumuri.rw</p>
          </div>
        </div>
      </section>

      <section ref={reach.ref} className={`section section-glass ${reach.className}`}>
        <div className="container section-header">
          <p className="eyebrow">{p.reach.eyebrow}</p>
          <h2>{p.reach.title}</h2>
        </div>
        <div className="feature-grid">
          <article>
            <h3>{p.reach.businessTitle}</h3>
            <p>{p.reach.businessText}</p>
          </article>
          <article>
            <h3>{p.reach.driverTitle}</h3>
            <p>{p.reach.driverText}</p>
          </article>
          <article>
            <h3>{p.reach.customerTitle}</h3>
            <p>{p.reach.customerText}</p>
          </article>
          <article>
            <h3>{p.reach.pressTitle}</h3>
            <p>{p.reach.pressText}</p>
          </article>
        </div>
      </section>

      <section ref={cta.ref} className={`section section-cta ${cta.className}`}>
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">{p.cta.eyebrow}</p>
            <h2>{p.cta.title}</h2>
          </div>
          <a className="btn btn-primary" href="mailto:info@urumuri.rw">
            {p.cta.button}
          </a>
        </div>
      </section>
    </>
  );
}
