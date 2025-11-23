"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 py-10 border-t border-slate-800 text-center text-sm text-slate-400">
      <div className="flex justify-center gap-6 mb-4">
        <Link
          href="https://github.com/"
          target="_blank"
          className="hover:text-emerald-400 transition"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/"
          target="_blank"
          className="hover:text-emerald-400 transition"
        >
          LinkedIn
        </Link>
        <Link
          href="mailto:varuntejadosali@gmail.com"
          className="hover:text-emerald-400 transition"
        >
          Email
        </Link>
      </div>

      <p className="text-xs text-slate-500">
        © {currentYear} Varun Teja Dosali. All rights reserved.
      </p>
    </footer>
  );
}
