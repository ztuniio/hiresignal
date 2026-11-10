import React from "react";
import { Plus } from "lucide-react";
import { faqs, whatsappLink } from "../data";
import { Reveal, SectionHeading } from "./ui";

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-slate-200 bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions, answered"
            description={
              <>
                Something else on your mind?{" "}
                <a
                  href={whatsappLink("Hi HireSignal, I have a question.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand underline-offset-4 hover:underline"
                >
                  Message us on WhatsApp
                </a>
                .
              </>
            }
          />
        </div>

        <Reveal className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <span className="text-base font-semibold text-ink sm:text-lg">{f.q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-open:rotate-45 group-open:border-brand group-open:text-brand">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl pr-12 leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
