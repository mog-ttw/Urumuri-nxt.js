"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/lib/LanguageContext";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import HeroVisual from "@/components/HeroVisual";
import { withBasePath } from "@/lib/basePath";
import galleryStyles from "./brand-gallery.module.css";

export default function HomeContent() {
  const t = useTranslations();
  const home = t.pages.home;

  const heroCopy = useAnimateOnScroll<HTMLDivElement>();
  const sectionHighlightHeader = useAnimateOnScroll<HTMLDivElement>();
  const cardsGrid = useAnimateOnScroll<HTMLDivElement>();
  const galleryHeader = useAnimateOnScroll<HTMLDivElement>();
  const galleryGrid = useAnimateOnScroll<HTMLDivElement>();
  const sectionGrid = useAnimateOnScroll<HTMLDivElement>();
  const featureHeader = useAnimateOnScroll<HTMLDivElement>();
  const featureGrid = useAnimateOnScroll<HTMLDivElement>();
  const ctaPanel = useAnimateOnScroll<HTMLDivElement>();

  return (
    <>
      <section className="hero hero-home">
        <div className="container hero-grid">
          <div ref={heroCopy.ref} className={`hero-copy ${heroCopy.className}`}>
            <p className="eyebrow">{home.hero.eyebrow}</p>
            <h1>{home.hero.headline}</h1>
            <p className="hero-intro">{home.hero.intro}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                {home.hero.primary}
              </Link>
              <Link className="btn btn-secondary" href="/contact">
                {home.hero.secondary}
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <span>{home.hero.stats.one.value}</span>
                <p>{home.hero.stats.one.label}</p>
              </div>
              <div>
                <span>{home.hero.stats.two.value}</span>
                <p>{home.hero.stats.two.label}</p>
              </div>
              <div>
                <span>{home.hero.stats.three.value}</span>
                <p>{home.hero.stats.three.label}</p>
              </div>
            </div>
          </div>
          <HeroVisual className="hero-visual animate-on-scroll">
            <div className="hero-visual-overlay"></div>
            <div className="hero-visual-frame">
              <div className="hero-badge">{home.hero.badge}</div>
              <div className="hero-media">
                <div className="media-panel media-top">{home.hero.mediaTop}</div>
                <div className="media-panel media-middle">{home.hero.mediaMiddle}</div>
                <div className="media-panel media-bottom">{home.hero.mediaBottom}</div>
              </div>
            </div>
          </HeroVisual>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="container">
          <div ref={sectionHighlightHeader.ref} className={`section-header ${sectionHighlightHeader.className}`}>
            <p className="eyebrow">{home.highlights.eyebrow}</p>
            <h2>{home.highlights.title}</h2>
          </div>
          <div ref={cardsGrid.ref} className={`cards-grid ${cardsGrid.className}`}>
            <Link className="service-card" href="/transport">
              <span className="service-icon">🛵</span>
              <h3>{t.cards.transport.title}</h3>
              <p>{t.cards.transport.description}</p>
              <span className="card-link">{t.cards.transport.action}</span>
            </Link>
            <Link className="service-card" href="/food">
              <span className="service-icon">🍱</span>
              <h3>{t.cards.food.title}</h3>
              <p>{t.cards.food.description}</p>
              <span className="card-link">{t.cards.food.action}</span>
            </Link>
            <Link className="service-card" href="/courier">
              <span className="service-icon">📦</span>
              <h3>{t.cards.courier.title}</h3>
              <p>{t.cards.courier.description}</p>
              <span className="card-link">{t.cards.courier.action}</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-gallery">
        <div className="container">
          <div ref={galleryHeader.ref} className={`section-header ${galleryHeader.className}`}>
            <p className="eyebrow">{home.gallery.eyebrow}</p>
            <h2>{home.gallery.title}</h2>
          </div>
          <div ref={galleryGrid.ref} className={`section-grid ${galleryGrid.className}`}>
            <div className={galleryStyles.galleryCard}>
              <Image
                src={withBasePath("/urumuri-rider-passenger.jpg")}
                alt={home.gallery.riderAlt}
                width={1537}
                height={1023}
                sizes="(max-width: 720px) 100vw, 50vw"
              />
              <div className={galleryStyles.galleryCaption}>
                <p>{home.gallery.riderTitle}</p>
                <span>{home.gallery.riderText}</span>
              </div>
            </div>
            <div className={galleryStyles.galleryCard}>
              <Image
                src={withBasePath("/urumuri-courier-handoff.jpg")}
                alt={home.gallery.courierAlt}
                width={842}
                height={550}
                sizes="(max-width: 720px) 100vw, 50vw"
              />
              <div className={galleryStyles.galleryCaption}>
                <p>{home.gallery.courierTitle}</p>
                <span>{home.gallery.courierText}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-glass">
        <div ref={sectionGrid.ref} className={`container section-grid ${sectionGrid.className}`}>
          <div className="glass-panel panel-primary">
            <h2>{home.glass.merchantTitle}</h2>
            <p>{home.glass.merchantText}</p>
          </div>
          <div className="glass-panel panel-secondary">
            <h2>{home.glass.driversTitle}</h2>
            <p>{home.glass.driversText}</p>
          </div>
        </div>
      </section>

      <section className="section section-features">
        <div className="container">
          <div ref={featureHeader.ref} className={`section-header ${featureHeader.className}`}>
            <p className="eyebrow">{home.features.eyebrow}</p>
            <h2>{home.features.title}</h2>
          </div>
          <div ref={featureGrid.ref} className={`feature-grid ${featureGrid.className}`}>
            <article>
              <h3>{home.features.dispatchTitle}</h3>
              <p>{home.features.dispatchText}</p>
            </article>
            <article>
              <h3>{home.features.pricingTitle}</h3>
              <p>{home.features.pricingText}</p>
            </article>
            <article>
              <h3>{home.features.merchantTitle}</h3>
              <p>{home.features.merchantText}</p>
            </article>
            <article>
              <h3>{home.features.communityTitle}</h3>
              <p>{home.features.communityText}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div ref={ctaPanel.ref} className={`container cta-panel ${ctaPanel.className}`}>
          <div>
            <p className="eyebrow">{home.cta.eyebrow}</p>
            <h2>{home.cta.title}</h2>
            <p>{home.cta.text}</p>
          </div>
          <Link className="btn btn-primary" href="/contact">
            {home.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
