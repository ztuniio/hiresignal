import React from "react";
import { Reveal } from "./ui";

const stats = [
  { value: "500+", label: "CVs delivered across industries" },
  { value: "6", label: "Career services, from CV to LinkedIn" },
  { value: "100%", label: "ATS-friendly formatting" },
  { value: "24–48h", label: "Express delivery available" },
];

export default function StatsBar() {
  return (
    <section aria-label="HireSignal at a glance" className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-6xl rounded-2xl bg-white shadow-xl shadow-slate-900/5 ring-1 ring-slate-200">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-100 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-6 sm:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-extrabold tracking-tight text-ink tabular-nums sm:text-4xl">{s.value}</dd>
              <dd className="mt-1.5 text-sm text-slate-600">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
