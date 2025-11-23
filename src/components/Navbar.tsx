"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about", number: "01." },
  { label: "Experience", href: "#experience", number: "02." },
  { label: "Projects", href: "#projects", number: "03." },
  { label: "Contact", href: "#contact", number: "04." },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // change header bg when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-slate-950/90 border-b border-slate-800 backdrop-blur"
          : "bg-slate-950/60 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        {/* Logo */}
        <Link
          href="#hero"
          aria-label="Home"
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-11 w-11 items-center justify-center text-emerald-400">
            {/* Hex background */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 84 96"
              className="h-11 w-11 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.03]"
            >
              <g transform="translate(-8, -2)">
                <g transform="translate(11, 5)">
                  <polygon
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="39 0 0 22 0 67 39 90 78 68 78 23"
                    fill="currentColor"
                    className="text-emerald-500/10"
                  />
                </g>
              </g>
            </svg>

            {/* Initials inside hex */}
            <span className="pointer-events-none absolute text-[18px] font-semibold tracking-wide text-emerald-300">
              VT
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ol className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href} className="flex items-center gap-1">
                <span className="font-mono text-xs text-emerald-400">
                  {item.number}
                </span>
                <a
                  href={item.href}
                  className="text-slate-300 transition-colors hover:text-emerald-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-emerald-400 px-4 py-2 text-xs font-mono tracking-wide text-emerald-400 transition hover:bg-emerald-400/10 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.6)]"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="relative z-50 flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 md:hidden"
        >
          <span className="sr-only">Open navigation</span>
          <div className="ham-box">
            <div
              className={`ham-box-inner before:content-[''] after:content-[''] relative block h-[2px] w-4 rounded-sm bg-slate-200 transition-all
                before:absolute before:-top-[6px] before:block before:h-[2px] before:w-4 before:rounded-sm before:bg-slate-200 before:transition-all
                after:absolute after:top-[6px] after:block after:h-[2px] after:w-4 after:rounded-sm after:bg-slate-200 after:transition-all
                ${
                  isOpen
                    ? "bg-transparent before:top-0 before:rotate-45 after:top-0 after:-rotate-45"
                    : ""
                }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-slate-950/95 backdrop-blur md:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-8">
            <ol className="space-y-6 text-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex flex-col items-center gap-1 text-lg text-slate-200"
                  >
                    <span className="font-mono text-sm text-emerald-400">
                      {item.number}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded border border-emerald-400 px-6 py-2 text-sm font-mono tracking-wide text-emerald-400 transition hover:bg-emerald-400/10"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
