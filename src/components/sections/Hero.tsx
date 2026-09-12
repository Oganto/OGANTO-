"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { identity } from "@/lib/site-data";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced) {
        gsap.set(
          "[data-hero-item]",
          { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        "[data-hero-badge]",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          "[data-hero-line]",
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.08 },
          "-=0.25"
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          "-=0.4"
        )
        .fromTo(
          "[data-hero-photo]",
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 1 },
          "-=0.8"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12"
    >
      <div className="mx-auto max-w-[1248px] grid md:grid-cols-[1.25fr_1fr] gap-16 items-center">
        <div>
          <div
            data-hero-badge
            className="inline-flex items-center rounded-full border border-border px-3.5 py-2 mb-8"
          >
            <span className="text-[13px] font-medium text-muted">
              Available for select projects
            </span>
          </div>

          <h1 className="font-display font-extrabold text-[2.75rem] leading-[1.05] md:text-6xl lg:text-7xl md:leading-[1.03] tracking-tight text-text mb-6">
            <span className="block overflow-hidden">
              <span data-hero-line className="block">
                {identity.realName}
              </span>
            </span>
            <span className="block overflow-hidden mt-1">
              <span
                data-hero-line
                className="block text-2xl md:text-3xl font-semibold text-muted"
              >
                Known as{" "}
                <span className="text-accent-gradient">
                  {identity.brandName}
                </span>
              </span>
            </span>
          </h1>

          <p
            data-hero-sub
            className="text-lg md:text-xl font-medium text-text/90 mb-5 max-w-xl"
          >
            {identity.positioning.join(" · ")}
          </p>

          <p
            data-hero-sub
            className="text-base leading-relaxed text-muted max-w-lg mb-10"
          >
            {identity.intro}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              data-hero-cta
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-hover transition-colors px-7 py-4 text-[15px] font-semibold text-white"
            >
              View My Work
              <span aria-hidden>→</span>
            </a>
            <a
              data-hero-cta
              href="#contact"
              className="inline-flex items-center rounded-full border border-border-strong hover:border-muted transition-colors px-7 py-4 text-[15px] font-semibold text-text"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>

        <div
          data-hero-photo
          className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-bg-raised justify-self-center w-full max-w-sm md:max-w-none"
        >
          <Image
            src={identity.heroPhoto}
            alt={identity.realName}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-bg/70 backdrop-blur-sm border border-border px-3.5 py-2 text-xs font-medium text-muted">
              <Image
                src={identity.avatar}
                alt=""
                width={18}
                height={18}
                className="rounded-full"
              />
              @oganto_
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
