"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";



export default function Home() {
  return (
    // layout.tsx already gives <main>, container, padding, bg, etc.
    <div className="flex flex-col gap-32">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
