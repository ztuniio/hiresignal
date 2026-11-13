import { GoogleGenAI, Type } from "@google/genai";

export interface CVCheckResult {
  score: number;
  strengths: string[];
  improvements: string[];
  missingKeywords: string[];
}

export class CVCheckError extends Error {
  constructor(message: string, public status = 500) {
    super(message);
  }
}

/**
 * Scores a CV against an optional job description with Gemini.
 * Shared by the local Express server (server.ts) and the Vercel function (api/cv-check.ts).
 */
export async function analyzeCV(cvText: unknown, jobDescription?: unknown): Promise<CVCheckResult> {
  if (typeof cvText !== "string" || !cvText.trim()) {
    throw new CVCheckError("CV text is required", 400);
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new CVCheckError("Gemini API key is not configured on the server.");
  }

  const ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  const systemInstruction = `You are an expert ATS (Applicant Tracking System) analyst and professional CV reviewer for HireSignal, a CV writing service for job seekers worldwide. Given a candidate's CV text and, if provided, a target job description, do the following: (1) Calculate an ATS match score from 0-100 based on keyword alignment, formatting compatibility, and relevant experience match. (2) List 3-5 specific strengths of the CV. (3) List 3-5 specific, actionable improvements the candidate should make. (4) If a job description was provided, list important keywords from the job description missing from the CV. Be direct, specific, and practical — avoid generic advice. Respond ONLY in strict JSON format: {"score": number, "strengths": string[], "improvements": string[], "missingKeywords": string[]}. Do not include any text outside the JSON object.`;

  const prompt = `
=== CANDIDATE CV ===
${cvText}

=== TARGET JOB DESCRIPTION (IF PROVIDED) ===
${jobDescription || "Not provided"}
  `;

  const modelsToTry = ["gemini-3.6-flash", "gemini-flash-latest", "gemini-3.1-flash-lite"];
  let responseText: string | undefined;
  let lastError: any = null;

  for (const modelName of modelsToTry) {
    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config: {
          systemInstruction: systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              score: {
                type: Type.NUMBER,
                description: "ATS Match Score from 0 to 100",
              },
              strengths: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "List of 3 to 5 specific strengths of the CV",
              },
              improvements: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "List of 3 to 5 specific, actionable improvements",
              },
              missingKeywords: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "Important keywords missing from the CV vs the job description (if provided)",
              }
            },
            required: ["score", "strengths", "improvements", "missingKeywords"]
          }
        }
      });

      if (response.text) {
        responseText = response.text;
        break;
      }
    } catch (err: any) {
      console.warn(`Model ${modelName} failed, trying fallback if available...`, err?.message || err);
      lastError = err;
    }
  }

  if (!responseText) {
    throw lastError || new Error("The AI service is currently experiencing high demand. Please try again in a few moments.");
  }

  return JSON.parse(responseText.trim()) as CVCheckResult;
}
