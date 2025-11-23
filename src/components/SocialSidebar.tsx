"use client";

import Link from "next/link";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/your-username", // change
    short: "GH",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-profile", // change
    short: "IN",
  },
  {
    label: "X",
    href: "https://x.com/your-handle", // or twitter
    short: "X",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/your-handle", // change or remove
    short: "IG",
  },
];

export default function SocialSidebar() {
  return (
    <div
      className="
        fixed
        bottom-0
        left-6
        z-30
        hidden
        flex-col
        items-center
        gap-4
        text-slate-400
        md:flex
      "
      aria-label="Social links"
    >
      <ul className="flex flex-col items-center gap-4">
        {SOCIALS.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              aria-label={item.label}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-slate-600
                text-xs
                font-mono
                uppercase
                tracking-[0.16em]
                transition
                hover:-translate-y-1
                hover:border-emerald-400
                hover:text-emerald-400
              "
            >
              {item.short}
            </Link>
          </li>
        ))}
      </ul>

      {/* vertical line */}
      <div className="mt-4 h-20 w-px bg-slate-600" />
    </div>
  );
}
