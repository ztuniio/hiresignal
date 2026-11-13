import { useEffect, useState } from "react";

export type Currency = "PKR" | "USD";

export const currencies: { code: Currency; label: string }[] = [
  { code: "USD", label: "USD $" },
  { code: "PKR", label: "PKR Rs" },
];

const STORAGE_KEY = "hs-currency";
const LOCAL_CURRENCY_COUNTRY = "PK";

export function formatPrice(amount: number, currency: Currency) {
  const n = amount.toLocaleString("en-US");
  return currency === "PKR" ? "Rs. " + n : "$" + n;
}

function readSaved(): Currency | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "PKR" || v === "USD" ? v : null;
  } catch {
    return null;
  }
}

/** First guess before the network answers: the browser's time zone. */
function guessFromTimeZone(): Currency {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz === "Asia/Karachi" ? "PKR" : "USD";
  } catch {
    return "USD";
  }
}

/**
 * Picks the display currency: rupees for visitors in Pakistan, US dollars everywhere else.
 * Order of precedence: the visitor's own choice, then the country Vercel reports, then the time zone.
 */
export function useCurrency() {
  const [currency, setCurrencyState] = useState<Currency>(() => readSaved() ?? guessFromTimeZone());

  useEffect(() => {
    if (readSaved()) return;
    const controller = new AbortController();
    fetch("/api/geo", { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        const country = data?.country;
        if (typeof country === "string" && country) {
          setCurrencyState(country === LOCAL_CURRENCY_COUNTRY ? "PKR" : "USD");
        }
      })
      .catch(() => {
        /* keep the time-zone guess */
      });
    return () => controller.abort();
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {
      /* storage unavailable: the choice lasts for this visit */
    }
  };

  return { currency, setCurrency };
}
