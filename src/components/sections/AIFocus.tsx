import Reveal from "@/components/ui/Reveal";
import { aiFocus } from "@/lib/site-data";

export default function AIFocus() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 border-t border-border relative overflow-hidden">
      <div className="mx-auto max-w-[1248px] relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">AI Work</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text mt-4 mb-6 leading-tight">
            {aiFocus.heading}
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-10">
            {aiFocus.description}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {aiFocus.points.map((point, i) => (
            <Reveal
              key={point}
              delay={i * 0.06}
              className="rounded-xl border border-border bg-bg-raised px-5 py-4 text-sm text-text/90"
            >
              {point}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
