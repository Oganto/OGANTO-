import Reveal from "@/components/ui/Reveal";
import { contact } from "@/lib/site-data";

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 px-6 md:px-12 border-t border-border">
      <div className="mx-auto max-w-[1248px] text-center">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-text mt-5 mb-6 leading-[1.1]">
            Have an idea?
            <br />
            Let&apos;s build it.
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto mb-10">
            Open to select projects and collaborations — reach out and
            let&apos;s talk about what you&apos;re building.
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center rounded-full bg-accent hover:bg-accent-hover transition-colors px-8 py-4 text-base font-semibold text-white mb-10"
          >
            {contact.email}
          </a>

          <div className="flex items-center justify-center gap-6">
            <a
              href={contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted hover:text-text transition-colors"
            >
              X / Twitter
            </a>
            {contact.github ? (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted hover:text-text transition-colors"
              >
                GitHub
              </a>
            ) : null}
            {contact.linkedin ? (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted hover:text-text transition-colors"
              >
                LinkedIn
              </a>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
