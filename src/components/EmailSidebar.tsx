"use client";

export default function EmailSidebar() {
  const email = "youremail@example.com"; // change to your real email

  return (
    <div className="fixed bottom-0 right-6 hidden flex-col items-center gap-4 text-slate-400 lg:flex">
      <a
        href={`mailto:${email}`}
        className="vertical-rl cursor-pointer text-xs tracking-[0.2em] transition hover:-translate-y-1 hover:text-emerald-400"
        style={{ writingMode: "vertical-rl" }}
      >
        {email}
      </a>
      <div className="mt-6 h-20 w-px bg-slate-600" />
    </div>
  );
}
