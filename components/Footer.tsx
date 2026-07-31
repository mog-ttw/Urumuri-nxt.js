"use client";

import Link from "next/link";
import { useAnimateOnScroll } from "@/lib/useAnimateOnScroll";
import { useTranslations } from "@/lib/LanguageContext";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const t = useTranslations();
  const { ref, className } = useAnimateOnScroll<HTMLDivElement>();
  const f = t.footer;

  return (
    <footer className="site-footer">
      <div ref={ref} className={`container footer-grid ${className}`}>
        <div>
          <Link className="brand footer-brand" href="/">
            URUMURI
          </Link>
          <p>{f.tagline}</p>
        </div>
        <div className="footer-column">
          <p className="footer-heading">{f.headings.legal}</p>
          <Link href="/privacy">{f.links.privacy}</Link>
          <a href="#">{f.links.terms}</a>
          <a href="#">{f.links.cookies}</a>
          <Link href="/merchant-terms">{f.links.driverTerms}</Link>
          <Link href="/merchant-terms">{f.links.merchantTerms}</Link>
        </div>
        <div className="footer-column">
          <p className="footer-heading">{f.headings.company}</p>
          <Link href="/about">{f.links.about}</Link>
          <Link href="/drivers">{f.links.drivers}</Link>
          <Link href="/merchants">{f.links.merchants}</Link>
          <Link href="/safety">{f.links.safety}</Link>
          <a href="#">{f.links.careers}</a>
        </div>
        <div className="footer-column">
          <p className="footer-heading">{f.headings.support}</p>
          <Link href="/contact">{f.links.contact}</Link>
          <Link href="/contact">{f.links.business}</Link>
          <Link href="/faqs">{f.links.faqs}</Link>
          <a href="#">{f.links.downloads}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>{f.copyright}</p>
        <div className="footer-social">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.label}
            >
              <img
                className="social-logo"
                src={social.icon}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
