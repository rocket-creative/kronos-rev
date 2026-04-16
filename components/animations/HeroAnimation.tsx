"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(useGSAP);

export function useHeroAnimation() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(containerRef);
      const eyebrow    = q("[data-hero-eyebrow]");
      const title      = q("[data-hero-title]");
      const subtitle   = q("[data-hero-subtitle]");
      const description = q("[data-hero-description]");
      const cta        = q("[data-hero-cta]");
      const social     = q("[data-hero-social]");
      const image      = q("[data-hero-image]");

      if (prefersReducedMotion) {
        const all = [...eyebrow, ...title, ...subtitle, ...description, ...cta, ...social, ...image];
        if (all.length) gsap.set(all, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (eyebrow.length)     gsap.set(eyebrow,     { opacity: 0, y: 20 });
      if (title.length)       gsap.set(title,       { opacity: 0, y: 40 });
      if (subtitle.length)    gsap.set(subtitle,    { opacity: 0, y: 30 });
      if (description.length) gsap.set(description, { opacity: 0, y: 20 });
      if (cta.length)         gsap.set(cta,         { opacity: 0, y: 20 });
      if (social.length)      gsap.set(social,      { opacity: 0, y: 10 });
      if (image.length)       gsap.set(image,       { opacity: 0, scale: 1.02 });

      if (image.length)       tl.to(image,       { opacity: 1, scale: 1, duration: 1 });
      if (eyebrow.length)     tl.to(eyebrow,     { opacity: 1, y: 0, duration: 0.5 }, "-=0.6");
      if (title.length)       tl.to(title,       { opacity: 1, y: 0, duration: 0.7 }, "-=0.3");
      if (subtitle.length)    tl.to(subtitle,    { opacity: 1, y: 0, duration: 0.5 }, "-=0.4");
      if (description.length) tl.to(description, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
      if (cta.length)         tl.to(cta,         { opacity: 1, y: 0, duration: 0.4 }, "-=0.2");
      if (social.length)      tl.to(social,      { opacity: 1, y: 0, duration: 0.4 }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef, dependencies: [prefersReducedMotion] });

  return containerRef;
}
