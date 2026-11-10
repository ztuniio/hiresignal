import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Services from "./components/Services";
import Process from "./components/Process";
import AICVCheck from "./components/AICVCheck";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import OrderForm from "./components/OrderForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState("professional");

  const handleSelectTier = (tierId: string) => {
    setSelectedServiceId(tierId);
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <StatsBar />
        <Services />
        <Process />
        <AICVCheck />
        <Pricing onSelectTier={handleSelectTier} />
        <Testimonials />
        <OrderForm selectedServiceId={selectedServiceId} />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
