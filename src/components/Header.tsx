import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./ui";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "How it works", href: "#process" },
  { name: "Free CV check", href: "#ai-check" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-lg" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 md:h-18">
        <a href="#top" aria-label="HireSignal home">
          <Logo light={!solid} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                solid ? "text-slate-600 hover:text-ink" : "text-slate-300 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#order-form"
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Order your CV <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className={`inline-flex items-center justify-center rounded-lg p-2 lg:hidden ${solid ? "text-ink" : "text-white"}`}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 pb-5 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-ink"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <a
            href="#order-form"
            onClick={() => setIsOpen(false)}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3.5 text-sm font-semibold text-white"
          >
            Order your CV <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}
