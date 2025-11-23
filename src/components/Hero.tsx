"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[80vh] flex-col justify-center gap-4 sm:gap-5"
    >
      {/* Intro line */}
      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        animate="visible"
      >
        <p className="text-sm font-medium tracking-[0.25em] text-emerald-400 uppercase">
          Hi, my name is
        </p>
      </motion.div>

      {/* Name */}
      <motion.div
        variants={fadeUp(0.2)}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold text-slate-100 sm:text-5xl lg:text-6xl">
          Varun Teja Dosali.
        </h1>
      </motion.div>

      {/* Tagline */}
      <motion.div
        variants={fadeUp(0.3)}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-semibold text-slate-400 sm:text-3xl lg:text-4xl">
          Operations &amp; Data Automation Analyst&nbsp;· Database Developer.
        </h2>
      </motion.div>

      {/* Summary */}
      <motion.div
        variants={fadeUp(0.4)}
        initial="hidden"
        animate="visible"
      >
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          I design and build internal tools, workflow automations, and data
          pipelines that make teams faster and more reliable. My work focuses
          on SQL-based reporting, Power Automate flows, and database-backed
          solutions that turn messy processes into clean, trackable systems.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeUp(0.5)}
        initial="hidden"
        animate="visible"
        className="mt-6 flex flex-wrap items-center gap-4"
      >
        <a
          href="#contact"
          className="inline-flex items-center rounded border border-emerald-400 px-6 py-3 text-sm font-medium text-emerald-400 transition hover:bg-emerald-400/10"
        >
          Get in touch
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-slate-300 underline-offset-4 hover:text-emerald-400 hover:underline"
        >
          View full resume
        </a>
      </motion.div>
    </section>
  );
}
