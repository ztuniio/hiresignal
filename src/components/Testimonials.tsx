import React from "react";
import { Star } from "lucide-react";
import { testimonialsData } from "../data";
import { Reveal, SectionHeading } from "./ui";

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client stories"
          title="What our clients say"
          description="Professionals who landed interviews with a HireSignal CV."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonialsData.map((t, idx) => (
            <Reveal
              as="figure"
              key={t.id}
              delay={idx * 100}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8"
            >
              <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
