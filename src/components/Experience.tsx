"use client";

import { motion } from "framer-motion";

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

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 mt-16">
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
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-1 h-2 w-2 rounded-full bg-emerald-400" />

              {/* Duration */}
              <p className="text-xs font-mono text-emerald-400">{exp.period}</p>

              {/* Role + Company */}
              <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
                {exp.role}
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                {exp.company}
              </p>

              {/* Bullet points */}
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
  );
}
