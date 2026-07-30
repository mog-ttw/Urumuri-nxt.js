"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function HeroVisual({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!el || prefersReducedMotion) return;

    let ticking = false;
    const update = () => {
      const y = window.scrollY * 0.035;
      const tilt = Math.min(window.scrollY * 0.004, 1.2);
      el.style.transform = `translate3d(0, ${y}px, 0) rotate(${tilt}deg)`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {children}
    </div>
  );
}
