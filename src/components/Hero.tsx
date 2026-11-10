import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, FileText, Bell } from "lucide-react";
import { btnPrimary, btnSecondaryDark } from "./ui";

const trustPoints = ["Written by people, not templates", "PDF + editable Word", "Delivery in 1 to 3 days"];
const keywords = [
  { word: "React", hit: true },
  { word: "Node.js", hit: true },
  { word: "TypeScript", hit: true },
  { word: "CI/CD", hit: true },
  { word: "AWS", hit: false },
  { word: "Docker", hit: false },
];

function ScoreRing({ score }: { score: number }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-24 w-24 shrink-0">
      <svg viewBox="0 0 96 96" className="h-24 w-24 -rotate-90" aria-hidden="true">
        <circle cx="48" cy="48" r={r} fill="none" stroke="#E2E8F0" strokeWidth="9" />
        <circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          stroke="#059669"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (score / 100) * c}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-extrabold text-ink tabular-nums">{score}</span>
        <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Score</span>
      </div>
    </div>
  );
}

function ReportMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute -inset-6 rounded-[2rem] bg-emerald-400/20 blur-3xl" aria-hidden="true" />

      <div className="relative rounded-2xl bg-white p-6 pb-16 shadow-2xl shadow-black/40 ring-1 ring-black/5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-brand">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">Ali_Software_Engineer.pdf</p>
              <p className="text-xs text-slate-500">Target: Senior Developer, Dubai</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-brand-dark">After rewrite</span>
        </div>

        <div className="flex items-center gap-5 py-5">
          <ScoreRing score={86} />
          <div className="flex-1 space-y-3">
            {[
              { label: "Formatting", value: 95 },
              { label: "Keyword match", value: 82 },
              { label: "Impact & metrics", value: 78 },
            ].map((m) => (
              <div key={m.label}>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="font-medium text-slate-600">{m.label}</span>
                  <span className="font-semibold text-ink tabular-nums">{m.value}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100">
                  <div className="h-1.5 rounded-full bg-brand" style={{ width: `${m.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4">
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500">Job keywords</p>
          <div className="flex flex-wrap gap-1.5">
            {keywords.map((k) => (
              <span
                key={k.word}
                className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ${
                  k.hit ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"
                }`}
              >
                {k.hit ? <CheckCircle2 className="h-3 w-3" /> : <span aria-hidden="true">+</span>}
                {k.word}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="animate-float absolute -bottom-7 left-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl shadow-black/30 ring-1 ring-black/5 sm:-left-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
          <Bell className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-bold text-ink">Interview invitation</p>
          <p className="text-xs text-slate-500">Recruiter, Dubai · just now</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pb-28 pt-32 md:pb-32 md:pt-40">
      <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-emerald-500/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            CV writing for Pakistan, UAE, Saudi Arabia &amp; Qatar
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            CVs that pass the ATS and{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">land interviews</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 text-pretty">
            Most CVs are rejected by software before a recruiter ever reads them. HireSignal rewrites yours around the
            format and keywords employers in Pakistan and the Gulf screen for.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#order-form" className={btnPrimary}>
              Order your CV <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#ai-check" className={btnSecondaryDark}>
              <Sparkles className="h-4 w-4 text-emerald-300" /> Check my CV score free
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <ReportMockup />
      </div>
    </section>
  );
}
