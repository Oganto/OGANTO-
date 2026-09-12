import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhatIDo from "@/components/sections/WhatIDo";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import AIFocus from "@/components/sections/AIFocus";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Projects />
      <Journey />
      <AIFocus />
      <Contact />
    </>
  );
}
