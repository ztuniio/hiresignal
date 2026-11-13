# HireSignal

**AI-powered ATS resume analysis and professional CV writing, for job seekers worldwide**

HireSignal helps job seekers build CVs that get past Applicant Tracking Systems (ATS) and land interviews. It pairs a free AI CV scanner, powered by Google Gemini, with professional writing packages, all in one responsive web app.

🔗 **Live site:** [my-portfolio-ztqu.vercel.app](https://my-portfolio-ztqu.vercel.app/)

## The problem

Many qualified candidates never reach an interview because software rejects their CV first: complex layouts don't parse, and missing keywords push them down the shortlist. HireSignal shows them exactly what to fix and offers expert help to fix it.

## Features

### Free AI CV score scanner
Paste a CV and, optionally, a target job description to get an instant report:
- ATS compatibility score out of 100
- Strengths of the CV
- Specific, prioritized improvements
- Keywords from the job description that are missing

### Career services
ATS-Optimized CV · Designed / Sidebar CV · Country-Specific CV · Tailored Cover Letter · LinkedIn Optimization · CV Templates

### Pricing in the visitor's currency
| Package | Includes | PKR | USD |
| --- | --- | --- | --- |
| **Starter** | ATS-optimized CV, keyword alignment, PDF + Word, 1 revision, 3-day delivery | Rs. 1,500 | $19 |
| **Professional** | CV localized to your target country, cover letter, keyword research, 3 revisions, 2-day delivery | Rs. 2,500 | $29 |
| **Complete Bundle** | Everything in Professional, LinkedIn optimization, 1-on-1 WhatsApp support, cold-email guide, unlimited revisions, 24–48h delivery | Rs. 3,500 | $49 |

Visitors in Pakistan see prices in rupees and everyone else sees US dollars. A currency switch above the pricing table lets visitors change it, and their choice is remembered. Detection uses the country Vercel reports for the request (`/api/geo`), with the browser's time zone as a fallback.

### Ordering over WhatsApp
The order form opens WhatsApp with the customer's details and chosen package already written out, ready to send. Customers attach their current CV in the chat. An email option is offered as a fallback.

### Also included
- "How it works" walkthrough and FAQ
- Client testimonials
- Responsive layout for desktop, tablet and mobile
- Accessible forms and navigation, with reduced-motion support

## Screenshots

| Home | AI CV scanner | Order form |
| --- | --- | --- |
| ![Home](screenshots/home.jpeg) | ![AI CV scanner](screenshots/scanner.jfif) | ![Order form](screenshots/order.jpeg) |

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19, TypeScript, Vite, Tailwind CSS 4, Motion, Lucide icons |
| API | Vercel serverless functions in production; Express for local development |
| AI | Google Gemini via the `@google/genai` SDK, with automatic model fallback |
| Hosting | Vercel |

The Gemini API key stays on the server. The browser calls `/api/cv-check`, which calls Gemini.

## Project structure

```
api/
  cv-check.ts     Vercel function: POST /api/cv-check (AI CV score)
  geo.ts          Vercel function: GET /api/geo (visitor country, for currency)
lib/
  cvCheck.ts      Gemini prompt and scoring logic, shared by api/ and server.ts
server.ts         Express server for local development (serves the same API routes)
src/
  components/     Page sections (Hero, Services, Pricing, AICVCheck, OrderForm, ...)
  currency.ts     Currency detection, switching and price formatting
  data.ts         Services, pricing, FAQs, testimonials and contact details
public/           Favicon
```

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

Locally the visitor country is unknown, so the currency follows your computer's time zone.

## Deploy to Vercel

1. Import the repository in Vercel. It detects Vite and the functions in `api/` automatically.
2. In **Project → Settings → Environment Variables**, add `GEMINI_API_KEY`.
3. Every push to `main` deploys to production.

## Editing content

- **Prices:** `pricingTiers` in `src/data.ts` (each tier has a `PKR` and a `USD` amount)
- **Services, FAQs, testimonials:** `src/data.ts`
- **WhatsApp number, email, Instagram:** `contact` in `src/data.ts`

## Roadmap

- User accounts and resume history
- Downloadable PDF score reports
- AI cover letter generator
- LinkedIn profile analyzer
- Online payments

## Author

**Zaid Hussain** · [GitHub](https://github.com/ztuniio) · [LinkedIn](https://linkedin.com/in/ztuniio)
