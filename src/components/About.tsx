"use client";

import { motion } from "framer-motion";

const skills = [
  "SQL",
  "Access DB",
  "Power Automate",
  "Excel (advanced)",
  "Power BI",
  "Python (basics)",
];

export default function About() {
  return (
    <div>
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
            I&apos;m an Operations &amp; Data Automation Analyst and Database
            Developer based in Hyderabad. I work with tools like Excel, Power
            Automate, SQL, Power BI and Access databases to streamline
            reporting and operational workflows.
          </p>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            I enjoy building internal tools and automation that remove
            repetitive manual work for teams, improve data quality, and give
            stakeholders clean, reliable reports.
          </p>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 mt-16">
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
    </div>
  );
}
