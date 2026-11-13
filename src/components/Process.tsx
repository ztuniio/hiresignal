import React from "react";
import { processSteps } from "../data";
import { Reveal, SectionHeading } from "./ui";

export default function Process() {
  return (
    <section id="process" className="border-y border-slate-200 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Interview-ready in four steps"
          description="A simple process run over WhatsApp, so you can follow your order from start to finish."
        />

        <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 100} className="relative">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-ink text-base font-bold text-white ring-8 ring-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
