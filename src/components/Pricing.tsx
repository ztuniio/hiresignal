import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { pricingTiers } from "../data";
import { Reveal, SectionHeading } from "./ui";

interface PricingProps {
  onSelectTier: (tierId: string) => void;
}

export default function Pricing({ onSelectTier }: PricingProps) {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, one-time pricing"
          description="Pay once per package. No subscriptions and no hidden fees."
        />

        <div className="mx-auto grid max-w-md gap-6 lg:max-w-none lg:grid-cols-3 lg:items-stretch">
          {pricingTiers.map((tier, idx) => {
            const popular = tier.isPopular;
            return (
              <Reveal
                key={tier.id}
                delay={idx * 100}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  popular
                    ? "bg-ink text-white shadow-2xl shadow-emerald-900/20 ring-1 ring-ink lg:-my-4 lg:py-12"
                    : "border border-slate-200 bg-white"
                }`}
              >
                {popular && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-emerald-950">
                    Most popular
                  </span>
                )}
                <h3 className={`text-lg font-bold ${popular ? "text-white" : "text-ink"}`}>{tier.name}</h3>
                <p className={`mt-2 min-h-[48px] text-sm leading-relaxed ${popular ? "text-slate-300" : "text-slate-600"}`}>
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className={`text-4xl font-extrabold tracking-tight tabular-nums ${popular ? "text-white" : "text-ink"}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ${popular ? "text-slate-400" : "text-slate-500"}`}>one-time</span>
                </p>

                <button
                  type="button"
                  onClick={() => onSelectTier(tier.id)}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition active:scale-[0.98] ${
                    popular
                      ? "bg-emerald-400 text-emerald-950 hover:bg-emerald-300"
                      : "border border-slate-300 bg-white text-ink hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  Choose {tier.name.replace(" Package", "")} <ArrowRight className="h-4 w-4" />
                </button>

                <ul className={`mt-8 space-y-3.5 border-t pt-8 ${popular ? "border-white/10" : "border-slate-100"}`}>
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${popular ? "text-emerald-400" : "text-brand"}`} />
                      <span className={popular ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
