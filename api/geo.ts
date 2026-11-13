// Vercel serverless function: GET /api/geo
// Returns the visitor's two-letter country code from Vercel's edge network, used only to pick a display currency.
export default function handler(req: any, res: any) {
  const header = req.headers?.["x-vercel-ip-country"];
  const country = typeof header === "string" && /^[A-Z]{2}$/.test(header) ? header : null;
  res.setHeader("Cache-Control", "private, no-store");
  return res.status(200).json({ country });
}
