import React from "react";
import { FileText, LayoutTemplate, Globe, Send, Linkedin, FileCode, ArrowRight } from "lucide-react";
import { servicesData } from "../data";
import { Reveal, SectionHeading } from "./ui";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Layout: LayoutTemplate,
  Globe,
  Send,
  Linkedin,
  FileCode,
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to get shortlisted"
          description="From a single ATS-ready CV to a full personal brand, each service is written for the job market you are targeting."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.icon] || FileText;
            return (
              <Reveal
                key={service.id}
                delay={(idx % 3) * 80}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-brand transition group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  {service.tag && (
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                      {service.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-6 text-lg font-bold text-ink">{service.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600">{service.description}</p>
                <a
                  href="#order-form"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  Order this service
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
