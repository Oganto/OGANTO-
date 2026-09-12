"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Project } from "@/lib/projects";

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      data-project-card
      className="group text-left rounded-2xl overflow-hidden border border-border bg-bg-raised hover:border-border-strong transition-colors focus-visible:outline-accent"
      style={{ opacity: 0 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/0 to-bg/0 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute bottom-4 left-5 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
          View project →
        </span>
      </div>
      <div className="p-6">
        <span className="text-xs font-mono text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display font-semibold text-xl text-text mt-2 mb-2">
          {project.name}
        </h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>
      </div>
    </button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-0 md:p-8">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full md:max-w-3xl max-h-[92vh] overflow-y-auto bg-bg-raised md:rounded-2xl border border-border-strong">
        <div className="relative aspect-[16/9]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top"
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 h-9 w-9 rounded-full bg-bg/80 backdrop-blur-sm border border-border flex items-center justify-center text-text hover:bg-bg"
          >
            ✕
          </button>
        </div>

        <div className="p-6 md:p-10">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-text mb-4">
            {project.name}
          </h3>
          <p className="text-muted leading-relaxed mb-8">
            {project.shortDescription}
          </p>

          {(project.problem || project.role) && (
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              {project.problem && (
                <div>
                  <h4 className="eyebrow mb-2">Problem it solves</h4>
                  <p className="text-text/90 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}
              {project.role && (
                <div>
                  <h4 className="eyebrow mb-2">My role</h4>
                  <p className="text-text/90 text-sm leading-relaxed">
                    {project.role}
                  </p>
                </div>
              )}
            </div>
          )}

          {project.technologies.length > 0 && (
            <div className="mb-8">
              <h4 className="eyebrow mb-3">Technologies</h4>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-3.5 py-1.5 text-xs text-text/90"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.features.length > 0 && (
            <div className="mb-10">
              <h4 className="eyebrow mb-3">Key features</h4>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-3 text-sm text-text/90 leading-relaxed"
                  >
                    <span className="text-accent mt-0.5">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-accent hover:bg-accent-hover transition-colors px-6 py-3 text-sm font-semibold text-white"
                >
                  Visit live site →
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-text"
                >
                  View on GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set("[data-project-card]", { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      "[data-project-card]",
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-project-grid]",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <>
      <div
        data-project-grid
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            onOpen={() => setActive(project)}
          />
        ))}
      </div>

      {active && (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
