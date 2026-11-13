# HireSignal

**AI-powered ATS resume analysis and career services platform**

HireSignal helps job seekers in Pakistan and the Gulf (GCC) build resumes that get past Applicant Tracking Systems. It pairs an AI CV scanner, powered by Google Gemini, with professional resume-writing packages, all in one responsive web app.

🔗 **Live demo:** [my-portfolio-ztqu.vercel.app](https://my-portfolio-ztqu.vercel.app/)

![HireSignal home page](screenshots/home.jpeg)

## The problem

Many qualified candidates never reach an interview because their resumes lack the formatting and keywords ATS software looks for. HireSignal shows them exactly what to fix and offers expert help to fix it.

## Features

### AI CV Score Scanner
Paste your resume, optionally add a target job description, and get instant feedback on:
- ATS compatibility and resume structure
- Professional summary and skills section
- Keyword density and missing keywords
- Formatting quality and job-description match
- GCC-specific hiring recommendations

### Career services and pricing
| Package | Includes |
| --- | --- |
| **Starter** | ATS-optimized CV, keyword alignment, PDF + editable Word file, one revision |
| **Professional GCC** | ATS + GCC-localized CV, cover letter, industry keyword research, priority delivery |
| **Complete Bundle** | Everything in Professional GCC, plus LinkedIn optimization, WhatsApp consultation, cold email guide, unlimited revisions |

### Order system
- Order form with personal details, package selection, and special requirements
- Upload an existing CV (PDF, DOC, DOCX, or TXT)
- Contact via WhatsApp, email, or Instagram

### Also included
- Career statistics bar and sample order activity feed
- Testimonials section (sample content)
- Fully responsive layout for desktop, tablet, and mobile

## Screenshots

| AI CV Scanner | Order Form |
| --- | --- |
| ![AI CV Scanner](screenshots/scanner.jfif) | ![Order form](screenshots/order.jpeg) |

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19, TypeScript, Vite, Tailwind CSS 4, Motion, Lucide icons |
| Backend | Node.js, Express (`/api/cv-check` endpoint) |
| AI | Google Gemini via the `@google/genai` SDK, with automatic model fallback |
| Deployment | Vercel |

The Gemini API key stays on the server: the browser calls the Express endpoint, which calls Gemini.

## Run locally

**Prerequisites:** Node.js 20+ and a [Gemini API key](https://aistudio.google.com/apikey).

```bash
git clone https://github.com/ztuniio/hiresignal.git
cd hiresignal
npm install
```

Copy `.env.example` to `.env` and set your key:

```bash
cp .env.example .env
```

```env
GEMINI_API_KEY="your-api-key"
```

Start the dev server, then open http://localhost:3000:

```bash
npm run dev
```

For a production build:

```bash
npm run build
npm start
```

## Roadmap

- User accounts and resume history
- Downloadable PDF score reports
- AI cover letter generator
- LinkedIn profile analyzer
- Resume template marketplace
- Admin dashboard and payment integration

## Author

**Zaid Hussain** · [GitHub](https://github.com/ztuniio) · [LinkedIn](https://linkedin.com/in/ztuniio)
