import React, { useState } from "react";
import { Sparkles, RefreshCw, CheckCircle, AlertTriangle, ArrowRight, Gauge, Lock } from "lucide-react";
import { CVCheckResult } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, SectionHeading, btnPrimary } from "./ui";

const SAMPLE_CV = `Muhammad Ali
Pakistan | +92 300 1234567 | ali.dev@email.com | linkedin.com/in/ali-dev

SUMMARY
Result-driven Software Engineer with 3+ years of experience designing and implementing highly scalable web applications. Expert in Node.js, React, and MongoDB, seeking roles in UAE or Saudi Arabia.

EXPERIENCE
Software Engineer | SysTec Pakistan (2024 - Present)
• Developed scalable client portals using React and Express.
• Optimized database queries, reducing payload latency by 30%.
• Collaborated with product owners to deliver 5 high-impact features ahead of deadlines.

Associate Developer | NextGen Solutions (2023 - 2024)
• Built RESTful APIs using NestJS and PostgreSQL.
• Assisted in deploying CI/CD pipelines, decreasing release cycles by 2 days.
• Solved 50+ critical legacy bugs.

EDUCATION
BS in Computer Science | FAST-NUCES, Pakistan (Graduated 2023)
`;

const SAMPLE_JOB = `Senior Node.js & React Developer
Location: Dubai, UAE (Hybrid)

Required Skills:
- 3+ years experience with React and TypeScript
- Strong background in Express/Node.js backend architectures
- Experience with Cloud databases and AWS deployment
- Excellent communication and project planning skills
- Knowledge of Docker and CI/CD pipelines
`;

export default function AICVCheck() {
  const [cvText, setCvText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CVCheckResult | null>(null);

  const loadingMessages = [
    "Reading your CV...",
    "Checking layout against common ATS parsers...",
    "Matching keywords to the target role...",
    "Identifying strengths and quick wins...",
    "Preparing your score report..."
  ];

  const handleSampleClick = () => {
    setCvText(SAMPLE_CV.trim());
    setJobDescription(SAMPLE_JOB.trim());
    setError(null);
  };

  const handleReset = () => {
    setCvText("");
    setJobDescription("");
    setResult(null);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvText.trim()) {
      setError("Please paste or type your CV text first.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    setLoadingStep(0);

    // Dynamic loading text increments
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < loadingMessages.length - 1 ? prev + 1 : prev));
    }, 2400);

    try {
      const response = await fetch("/api/cv-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cvText: cvText.trim(),
          jobDescription: jobDescription.trim() || undefined,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "The server failed to parse the CV check request.");
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "An unexpected error occurred. Please try again.");
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const scoreInfo = (score: number) => {
    if (score >= 80)
      return {
        stroke: "#059669",
        chip: "bg-emerald-50 text-emerald-800 ring-emerald-200",
        label: "Strong match",
        desc: "Your CV is well structured for ATS software and covers most of the keywords recruiters look for.",
      };
    if (score >= 60)
      return {
        stroke: "#d97706",
        chip: "bg-amber-50 text-amber-800 ring-amber-200",
        label: "Needs work",
        desc: "Your CV is readable by ATS software but is missing keywords and impact that would move it up the shortlist.",
      };
    return {
      stroke: "#e11d48",
      chip: "bg-rose-50 text-rose-800 ring-rose-200",
      label: "At risk of rejection",
      desc: "Applicant tracking systems are likely to filter this CV out. Structure and keyword coverage need attention.",
    };
  };

  const r = 52;
  const circumference = 2 * Math.PI * r;
  const textareaClass =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] leading-relaxed text-ink placeholder:text-slate-400 transition focus:border-brand focus:outline-none focus:ring-4 focus:ring-emerald-100";

  return (
    <section id="ai-check" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Free AI CV check"
          title="How does your CV score with an ATS?"
          description={
            <>
              Paste your CV and, optionally, a job description. You will get an instant score with strengths, fixes and
              missing keywords. Powered by Google Gemini, free, no sign-up.
            </>
          }
        />

        <Reveal className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/40">
          <div className="grid lg:grid-cols-[1.15fr_1fr]">
            <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-10">
              <div>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label htmlFor="cv-text" className="text-sm font-semibold text-ink">
                    Your CV text <span className="text-rose-600">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleSampleClick}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
                  >
                    <Sparkles className="h-4 w-4" /> Try a sample
                  </button>
                </div>
                <textarea
                  id="cv-text"
                  rows={9}
                  value={cvText}
                  onChange={(e) => setCvText(e.target.value)}
                  placeholder="Paste your full CV: contact details, summary, experience, skills and education."
                  className={textareaClass}
                />
              </div>

              <div>
                <label htmlFor="job-text" className="mb-2 block text-sm font-semibold text-ink">
                  Target job description <span className="font-normal text-slate-500">(optional, improves accuracy)</span>
                </label>
                <textarea
                  id="job-text"
                  rows={4}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the job post you are applying for."
                  className={textareaClass}
                />
              </div>

              {error && (
                <p role="alert" className="flex items-start gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-800">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /> {error}
                </p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="submit" disabled={loading} className={btnPrimary}>
                  {loading ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" /> Analyzing...
                    </>
                  ) : (
                    <>
                      Get my free score <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
                {(result || cvText) && !loading && (
                  <button type="button" onClick={handleReset} className="text-sm font-semibold text-slate-500 hover:text-ink">
                    Clear and start over
                  </button>
                )}
              </div>
              <p className="flex items-center gap-1.5 text-xs text-slate-500">
                <Lock className="h-3.5 w-3.5" /> Your CV is only used to generate this report.
              </p>
            </form>

            <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-10 lg:border-l lg:border-t-0" aria-live="polite">
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
                  >
                    <div className="relative h-16 w-16">
                      <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
                      <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-brand" />
                    </div>
                    <p className="mt-6 font-semibold text-ink">{loadingMessages[loadingStep]}</p>
                    <div className="mt-4 flex gap-1.5">
                      {loadingMessages.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 w-6 rounded-full transition-colors ${i <= loadingStep ? "bg-brand" : "bg-slate-200"}`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ) : result ? (
                  <motion.div key="result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    {(() => {
                      const info = scoreInfo(result.score);
                      return (
                        <div className="flex items-center gap-5">
                          <div className="relative h-32 w-32 shrink-0">
                            <svg viewBox="0 0 128 128" className="h-32 w-32 -rotate-90" aria-hidden="true">
                              <circle cx="64" cy="64" r={r} fill="none" stroke="#e2e8f0" strokeWidth="11" />
                              <motion.circle
                                cx="64"
                                cy="64"
                                r={r}
                                fill="none"
                                stroke={info.stroke}
                                strokeWidth="11"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                initial={{ strokeDashoffset: circumference }}
                                animate={{ strokeDashoffset: circumference - (result.score / 100) * circumference }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-4xl font-extrabold text-ink tabular-nums">{result.score}</span>
                              <span className="text-xs font-medium text-slate-500">out of 100</span>
                            </div>
                          </div>
                          <div>
                            <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${info.chip}`}>
                              {info.label}
                            </span>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{info.desc}</p>
                          </div>
                        </div>
                      );
                    })()}

                    <div className="mt-8 space-y-6">
                      {result.strengths?.length > 0 && (
                        <div>
                          <h3 className="text-sm font-bold text-ink">What works</h3>
                          <ul className="mt-2.5 space-y-2">
                            {result.strengths.map((s, i) => (
                              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {result.improvements?.length > 0 && (
                        <div>
                          <h3 className="text-sm font-bold text-ink">What to fix</h3>
                          <ul className="mt-2.5 space-y-2">
                            {result.improvements.map((s, i) => (
                              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" /> {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {result.missingKeywords?.length > 0 && (
                        <div>
                          <h3 className="text-sm font-bold text-ink">Missing keywords</h3>
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {result.missingKeywords.map((k, i) => (
                              <span key={i} className="rounded-md bg-white px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                                {k}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 rounded-2xl bg-ink p-5 text-white">
                      <p className="font-semibold">Want a writer to fix all of this for you?</p>
                      <p className="mt-1 text-sm text-slate-300">We will rebuild your CV around these findings.</p>
                      <a
                        href="#order-form"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                      >
                        Order a professional rewrite <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full min-h-[320px] flex-col justify-center"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-brand">
                      <Gauge className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-ink">Your report will appear here</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">In about 15 seconds you will see:</p>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                      {[
                        "An ATS compatibility score out of 100",
                        "The strongest parts of your CV",
                        "Specific fixes, ranked by impact",
                        "Keywords from the job post you are missing",
                      ].map((t) => (
                        <li key={t} className="flex gap-2.5">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {t}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
