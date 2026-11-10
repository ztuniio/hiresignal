import React from "react";
import { ArrowRight, Instagram, Mail } from "lucide-react";
import { contact, whatsappLink } from "../data";
import { Logo, WhatsAppIcon, btnPrimary, btnSecondaryDark } from "./ui";

const links = [
  { name: "Services", href: "#services" },
  { name: "How it works", href: "#process" },
  { name: "Free CV check", href: "#ai-check" },
  { name: "Pricing", href: "#pricing" },
  { name: "Order", href: "#order-form" },
  { name: "FAQ", href: "#faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-slate-300">
      <div className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-24">
          <h2 className="text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
            Your next interview starts with a better CV
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Get a free ATS score in seconds, or let a professional writer handle it for you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#order-form" className={btnPrimary}>
              Order your CV <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#ai-check" className={btnSecondaryDark}>
              Check my CV score free
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            ATS-optimized CVs, cover letters and LinkedIn profiles for professionals in Pakistan and the Gulf.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-white">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm md:grid-cols-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white">
                <WhatsAppIcon className="h-4 w-4 text-emerald-400" /> {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2.5 hover:text-white">
                <Mail className="h-4 w-4 text-emerald-400" /> {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${contact.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white"
              >
                <Instagram className="h-4 w-4 text-emerald-400" /> @{contact.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-slate-500 sm:px-6 lg:px-8">
          © {year} HireSignal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
