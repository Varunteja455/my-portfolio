"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const skills = [
  "SQL",
  "Access DB",
  "Power Automate",
  "Excel (advanced)",
  "Power BI",
  "Python (basics)",
];

const experiences = [
  {
    period: "2023 – Present",
    role: "Operations & Data Automation Analyst",
    company: "[Your Company Name]",
    points: [
      "Built and maintained automation flows using Power Automate to reduce manual reporting effort.",
      "Worked with SQL/Access databases to identify data issues and fix them using queries.",
      "Created Excel / Power BI reports for leadership and operations teams.",
    ],
  },
];

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

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="text-sm font-semibold tracking-wide">
            VT<span className="text-emerald-400">.</span>
          </div>
          <ul className="hidden gap-6 text-sm md:flex">
            <li>
              <a href="#about" className="hover:text-emerald-400">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-emerald-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-emerald-400">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-emerald-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-emerald-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <main className="mx-auto flex max-w-5xl flex-col gap-32 px-4 pb-24 pt-28 md:pt-32">
        {/* HERO */}
        <section id="hero" className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-sm font-mono text-emerald-400"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            Varun Teja Dosali.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-xl text-slate-400 sm:text-2xl"
          >
            Operations &amp; Data Automation Analyst · Database Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
          >
            I build data-driven automations, dashboards, and backend tools that
            help teams work faster and with fewer errors. I enjoy working across
            SQL databases, Power Automate, and reporting tools to turn messy
            processes into simple, reliable systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="mt-2 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-md border border-emerald-500 px-4 py-2 text-sm font-medium text-emerald-400 transition hover:bg-emerald-500/10"
            >
              View Projects
            </a>
            <Link
              href="mailto:youremail@example.com"
              className="text-sm text-slate-300 underline-offset-4 hover:text-emerald-400 hover:underline"
            >
              Get in touch
            </Link>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
              About
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              I&apos;m a data and operations-focused engineer based in Hyderabad.
              I work with tools like Excel, Power Automate, SQL, Power BI and
              Access databases to streamline reporting and operational workflows.
            </p>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              I enjoy building internal tools and automation that remove
              repetitive manual work for teams, improve data quality, and give
              stakeholders clean, reliable reports.
            </p>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
              Skills
            </h2>
            <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Core tools
                </h3>
                <ul className="space-y-1 text-xs sm:text-sm">
                  {skills.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Strengths
                </h3>
                <ul className="space-y-1 text-xs sm:text-sm">
                  <li>• Process automation &amp; optimization</li>
                  <li>• Data cleaning &amp; validation</li>
                  <li>• Operations reporting &amp; dashboards</li>
                  <li>• Cross-team communication</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
              Experience
            </h2>
            <div className="space-y-6 border-l border-slate-800 pl-4">
              {experiences.map((exp) => (
                <div key={exp.role} className="relative">
                  <span className="absolute -left-[9px] top-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <p className="text-xs font-mono text-slate-400">
                    {exp.period}
                  </p>
                  <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    {exp.company}
                  </p>
                  <ul className="mt-2 space-y-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {exp.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24">
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

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4 text-center"
          >
            <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
              Get in touch
            </h2>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
              I&apos;m open to roles in data, operations, automation, and
              internal tools. If you think my profile fits your team, feel free
              to reach out.
            </p>
            <div className="flex justify-center gap-4 text-sm">
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
      </main>
    </div>
  );
}
