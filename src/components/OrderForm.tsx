import React, { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Clock, FileCheck2, MessageCircle, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { contact, whatsappLink } from "../data";
import { Reveal, SectionHeading, WhatsAppIcon, btnPrimary } from "./ui";
import { Currency, formatPrice } from "../currency";
import { pricingTiers } from "../data";

interface OrderFormProps {
  selectedServiceId: string;
  currency: Currency;
}

const serviceOptions = [
  { group: "Packages", items: [
    { id: "starter", label: "Starter Package" },
    { id: "professional", label: "Professional" },
    { id: "bundle", label: "Complete Bundle" },
  ] },
  { group: "Individual services", items: [
    { id: "ats-cv", label: "ATS-Optimized CV" },
    { id: "designed-cv", label: "Designed / Sidebar CV" },
    { id: "country-cv", label: "Country-Specific CV" },
    { id: "cover-letter", label: "Tailored Cover Letter" },
    { id: "linkedin", label: "LinkedIn Optimization" },
    { id: "cv-template", label: "CV Templates" },
  ] },
];

const serviceLabel = (id: string, currency: Currency) => {
  const label = serviceOptions.flatMap((g) => g.items).find((i) => i.id === id)?.label ?? id;
  const tier = pricingTiers.find((t) => t.id === id);
  return tier ? `${label} (${formatPrice(tier.price[currency], currency)})` : label;
};

const nextSteps = [
  { icon: MessageCircle, title: "WhatsApp opens with your order", text: "Your details are filled in. Just press send." },
  { icon: FileCheck2, title: "Share your current CV", text: "Attach your CV in the chat, or describe your experience if you do not have one." },
  { icon: Clock, title: "Work starts within 12 hours", text: "A writer confirms your order and delivery date." },
];

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-slate-400 transition focus:border-brand focus:outline-none focus:ring-4 focus:ring-emerald-100";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

export default function OrderForm({ selectedServiceId, currency }: OrderFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(selectedServiceId || "professional");
  const [jobTitle, setJobTitle] = useState("");
  const [market, setMarket] = useState("");
  const [notes, setNotes] = useState("");
  const [sentMessage, setSentMessage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedServiceId) setService(selectedServiceId);
  }, [selectedServiceId]);

  const buildMessage = () => {
    const details = [
      `Name: ${fullName.trim()}`,
      `Email: ${email.trim()}`,
      `WhatsApp: ${phone.trim()}`,
      `Service: ${serviceLabel(service, currency)}`,
      `Target role: ${jobTitle.trim()}`,
      market.trim() ? `Target country: ${market.trim()}` : "",
      notes.trim() ? `Notes: ${notes.trim()}` : "",
    ].filter(Boolean);
    return `Hi HireSignal, I'd like to place an order.\n\n${details.join("\n")}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildMessage();
    setSentMessage(message);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  const mailtoHref = (body: string) =>
    `mailto:${contact.email}?subject=${encodeURIComponent(`CV order: ${serviceLabel(service, currency)}`)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="order-form" className="border-y border-slate-200 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Order"
          title="Start your order"
          description="Tell us what you need. Your order is sent to our team on WhatsApp, where we confirm the details with you."
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="rounded-3xl border border-slate-200 bg-paper p-6 sm:p-10 lg:col-span-7">
            <AnimatePresence mode="wait">
              {!sentMessage ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <div>
                    <label htmlFor="o-name" className={labelClass}>Full name</label>
                    <input id="o-name" type="text" required autoComplete="name" value={fullName}
                      onChange={(e) => setFullName(e.target.value)} placeholder="Ayesha Khan" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="o-email" className={labelClass}>Email</label>
                    <input id="o-email" type="email" required autoComplete="email" value={email}
                      onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="o-phone" className={labelClass}>WhatsApp number</label>
                    <input id="o-phone" type="tel" required autoComplete="tel" value={phone}
                      onChange={(e) => setPhone(e.target.value)} placeholder="+92 300 1234567" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="o-service" className={labelClass}>Service</label>
                    <select id="o-service" value={service} onChange={(e) => setService(e.target.value)} className={inputClass}>
                      {serviceOptions.map((g) => (
                        <optgroup key={g.group} label={g.group}>
                          {g.items.map((i) => (
                            <option key={i.id} value={i.id}>{serviceLabel(i.id, currency)}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="o-role" className={labelClass}>Target role</label>
                    <input id="o-role" type="text" required value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)} placeholder="e.g. Senior Accountant" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="o-market" className={labelClass}>
                      Target country <span className="font-normal text-slate-500">(optional)</span>
                    </label>
                    <input id="o-market" type="text" value={market} autoComplete="off"
                      onChange={(e) => setMarket(e.target.value)} placeholder="Where are you applying?" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="o-notes" className={labelClass}>
                      Anything we should know? <span className="font-normal text-slate-500">(optional)</span>
                    </label>
                    <textarea id="o-notes" rows={4} value={notes} onChange={(e) => setNotes(e.target.value)}
                      placeholder="Target companies, career changes, gaps, or a deadline."
                      className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className={`${btnPrimary} w-full py-4 text-base`}>
                      <WhatsAppIcon className="h-5 w-5" /> Send order on WhatsApp
                    </button>
                    <p className="mt-3 text-center text-xs text-slate-500">
                      No payment is taken here. We confirm price and delivery with you first.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-6 text-center"
                  role="status"
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-brand">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-ink">Almost done</h3>
                  <p className="mx-auto mt-2 max-w-md text-slate-600">
                    WhatsApp should have opened with your order. Press <strong>send</strong> and attach your current CV in
                    the chat. We reply within 12 hours.
                  </p>
                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <a href={whatsappLink(sentMessage)} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                      <WhatsAppIcon className="h-4 w-4" /> Open WhatsApp again
                    </a>
                    <a
                      href={mailtoHref(sentMessage)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:bg-slate-50"
                    >
                      <Mail className="h-4 w-4" /> Send by email instead
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSentMessage(null)}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-ink"
                  >
                    <RotateCcw className="h-4 w-4" /> Edit my order
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-3xl bg-ink p-8 text-white sm:p-10">
              <h3 className="text-lg font-bold">What happens next</h3>
              <ol className="mt-6 space-y-6">
                {nextSteps.map((s) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 p-8">
              <p className="font-semibold text-ink">Prefer to talk first?</p>
              <p className="mt-1 text-sm text-slate-600">Ask us anything before you order.</p>
              <div className="mt-5 space-y-3">
                <a href={whatsappLink("Hi HireSignal, I have a question about your CV services.")} target="_blank"
                  rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-ink hover:text-brand">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-brand">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  {contact.whatsappDisplay}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm font-medium text-ink hover:text-brand">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-brand">
                    <Mail className="h-4 w-4" />
                  </span>
                  {contact.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
