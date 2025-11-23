"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-6 text-center"
      >
        {/* Heading */}
        <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
          Get in touch
        </h2>

        {/* Description */}
        <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
          I&apos;m open to roles in data, operations, automation, and internal
          tools. If you think my profile fits your team, feel free to reach
          out.
        </p>

        {/* Contact Information (only update these values later) */}
        <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:justify-center sm:gap-6">
          <span className="text-slate-300">📧 youremail@example.com</span>
          <span className="text-slate-300">📞 +91-XXXXXXXXXX</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <Link
            href="mailto:youremail@example.com"
            className="rounded-md border border-emerald-500 px-4 py-2 text-emerald-400 transition hover:bg-emerald-500/10"
          >
            Email me
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 underline-offset-4 hover:text-emerald-400 hover:underline"
          >
            LinkedIn
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
