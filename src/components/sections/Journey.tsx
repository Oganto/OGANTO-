import Reveal from "@/components/ui/Reveal";
import { journey } from "@/lib/site-data";

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="mx-auto max-w-[1248px] grid md:grid-cols-[0.9fr_1.1fr] gap-16">
        <Reveal>
          <span className="eyebrow">Journey</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text mt-4 leading-tight">
            Still early, still building
          </h2>
          <p className="text-muted leading-relaxed mt-6 max-w-sm">
            {journey.summary}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="relative border-l border-border pl-8 space-y-10">
            {journey.milestones.map((m) => (
              <li key={m.label} className="relative">
                <span className="absolute -left-[35px] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                <h3 className="font-display font-semibold text-lg text-text mb-1.5">
                  {m.label}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {m.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
