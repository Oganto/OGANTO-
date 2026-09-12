import Reveal from "@/components/ui/Reveal";
import { skills } from "@/lib/site-data";

const groups: { label: string; items: string[] }[] = [
  { label: "Frontend", items: skills.frontend },
  { label: "Backend", items: skills.backend },
  { label: "AI", items: skills.ai },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="mx-auto max-w-[1248px]">
        <Reveal>
          <span className="eyebrow">Skills</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text mt-4 mb-14 max-w-xl leading-tight">
            Tools I actually build with
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08}>
              <h3 className="text-sm font-semibold text-accent mb-5 tracking-wide">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border px-4 py-2 text-sm text-text/90 hover:border-border-strong transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
