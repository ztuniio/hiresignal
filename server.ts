import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { analyzeCV, CVCheckError } from "./lib/cvCheck.js";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes (on Vercel these are served by the functions in api/)
  app.post("/api/cv-check", async (req, res) => {
    try {
      const { cvText, jobDescription } = req.body ?? {};
      res.json(await analyzeCV(cvText, jobDescription));
    } catch (error: any) {
      console.error("Error in /api/cv-check:", error);
      res
        .status(error instanceof CVCheckError ? error.status : 500)
        .json({ error: error?.message || "Failed to analyze CV. Please try again." });
    }
  });

  // Visitor country is only known on Vercel; locally the client falls back to the time zone.
  app.get("/api/geo", (_req, res) => {
    res.set("Cache-Control", "no-store").json({ country: null });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
