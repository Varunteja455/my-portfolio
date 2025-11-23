"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Reporting Automation Dashboard",
    description:
      "Automated weekly operations reporting by connecting Excel files, Power Automate flows, and a central database, reducing manual work and errors.",
    stack: ["Power Automate", "Excel", "SQL"],
    link: "",
  },
  {
    title: "Access DB Cleanup & Migration",
    description:
      "Cleaned legacy Access database tables and wrote SQL queries to standardize data for use in reporting and downstream systems.",
    stack: ["Access", "SQL", "Excel"],
    link: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-6"
      >
        <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-lg border border-slate-800 bg-slate-900/40 p-4 transition hover:-translate-y-1 hover:border-emerald-500/70 hover:bg-slate-900"
            >
              <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-mono text-slate-400">
                  {project.stack.join(" · ")}
                </p>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-emerald-400 underline-offset-4 hover:underline"
                  >
                    View project
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
