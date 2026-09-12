import Reveal from "@/components/ui/Reveal";
import { whatIDo } from "@/lib/site-data";

export default function WhatIDo() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="mx-auto max-w-[1248px]">
        <Reveal>
          <span className="eyebrow">What I Do</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text mt-4 mb-14 max-w-xl leading-tight">
            Four disciplines, one goal — products that work
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {whatIDo.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className="bg-bg p-8 md:p-10 hover:bg-bg-raised transition-colors"
            >
              <span className="text-sm font-mono text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-semibold text-xl text-text mt-4 mb-3">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
