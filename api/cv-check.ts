import { analyzeCV, CVCheckError } from "../lib/cvCheck.js";

// Vercel serverless function: POST /api/cv-check
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body ?? {};
    const result = await analyzeCV(body.cvText, body.jobDescription);
    return res.status(200).json(result);
  } catch (error: any) {
    console.error("Error in /api/cv-check:", error);
    return res
      .status(error instanceof CVCheckError ? error.status : 500)
      .json({ error: error?.message || "Failed to analyze CV. Please try again." });
  }
}
