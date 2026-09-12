import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { identity } from "@/lib/site-data";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="mx-auto max-w-[1248px] grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
        <Reveal>
          <span className="eyebrow">About</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text mt-4 leading-tight">
            The person behind the work
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 text-muted text-base md:text-lg leading-relaxed">
            <p>
              I&apos;m <span className="text-text font-semibold">{identity.realName}</span>,
              known online as{" "}
              <span className="text-accent-gradient font-semibold">
                {identity.brandName}
              </span>
              . I build full-stack web applications and AI-powered products —
              taking ideas from an interface sketch to a working, deployed
              product.
            </p>
            <p>
              My focus sits at the intersection of solid full-stack
              engineering and modern AI — building products like{" "}
              <span className="text-text font-medium">StackMind</span>, an AI
              copilot, alongside full-stack platforms like{" "}
              <span className="text-text font-medium">CEESSENTIALS</span>, a
              complete online marketplace.
            </p>
            <p className="flex items-center gap-3">
              <Image
                src={identity.avatar}
                alt=""
                width={32}
                height={32}
                className="rounded-full border border-border-strong shrink-0"
              />
              <span>
                What sets my approach apart is treating AI as a real part of
                the product, not a bolted-on feature — building tools that
                actually put language models to work solving problems.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
