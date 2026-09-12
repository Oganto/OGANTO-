import Reveal from "@/components/ui/Reveal";
import ProjectsClient from "@/components/sections/ProjectsClient";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="mx-auto max-w-[1248px]">
        <Reveal>
          <span className="eyebrow">Projects</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text mt-4 mb-14 max-w-xl leading-tight">
            Things I&apos;ve built
          </h2>
        </Reveal>

        <ProjectsClient projects={projects} />
      </div>
    </section>
  );
}
