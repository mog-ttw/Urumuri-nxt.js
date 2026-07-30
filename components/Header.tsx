"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage, useTranslations } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { NAV_ITEMS } from "@/lib/constants";
import { withBasePath } from "@/lib/basePath";
import type { Language } from "@/lib/translations";

const normalize = (path: string) => {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
};

export default function Header() {
  const pathname = normalize(usePathname() || "/");
  const t = useTranslations();
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand brand-logo" href="/">
          <Image
            src={withBasePath(
              theme === "dark" ? "/urumuri-logo-dark.png" : "/urumuri-logo-light.png"
            )}
            alt="URUMURI"
            width={941}
            height={941}
            priority
          />
        </Link>
        <nav className={`nav-links${navOpen ? " active" : ""}`} id="navLinks">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-page={item.key}
              className={normalize(item.href) === pathname ? "active" : undefined}
              onClick={() => setNavOpen(false)}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <label className="language-picker">
            <span className="sr-only">{t.ui.languagePicker}</span>
            <select
              aria-label={t.ui.languagePicker}
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
            >
              <option value="en">{t.ui.languageOptions.en}</option>
              <option value="fr">{t.ui.languageOptions.fr}</option>
              <option value="zh">{t.ui.languageOptions.zh}</option>
              <option value="rw">{t.ui.languageOptions.rw}</option>
            </select>
          </label>
          <button
            className="theme-toggle"
            type="button"
            aria-label={t.ui.themeToggle}
            onClick={toggleTheme}
          >
            <span className="theme-icon">{theme === "dark" ? "☀︎" : "☾"}</span>
          </button>
        </div>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
