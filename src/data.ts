import { ServiceItem, PricingTier, TestimonialItem } from "./types";

export const contact = {
  whatsappNumber: "923097569951",
  whatsappDisplay: "+92 309 7569951",
  email: "thehiresignal@gmail.com",
  instagram: "thehiresignal",
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${contact.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const servicesData: ServiceItem[] = [
  {
    id: "ats-cv",
    title: "ATS-Optimized CV",
    description: "A clean, single-column CV that applicant tracking systems read correctly, built around the keywords recruiters search for.",
    icon: "FileText",
    tag: "Essential"
  },
  {
    id: "designed-cv",
    title: "Designed / Sidebar CV",
    description: "A polished two-column design for roles where a strong visual first impression matters, such as creative and client-facing jobs.",
    icon: "Layout",
    tag: "Creative"
  },
  {
    id: "country-cv",
    title: "Country-Specific CV",
    description: "Tailored to the country you are applying in, with the personal details, format and phrasing local recruiters expect.",
    icon: "Globe",
    tag: "High-Demand"
  },
  {
    id: "cover-letter",
    title: "Tailored Cover Letter",
    description: "A focused cover letter written for the specific company and role you are applying to.",
    icon: "Send"
  },
  {
    id: "linkedin",
    title: "LinkedIn Optimization",
    description: "A rewrite of your headline, About section and experience so recruiters find you in search and reach out.",
    icon: "Linkedin",
    tag: "Visibility"
  },
  {
    id: "cv-template",
    title: "Sleek CV Templates",
    description: "Ready-to-edit CV templates for MS Word and Google Docs, with recruiter-friendly fonts, spacing and structure.",
    icon: "FileCode"
  }
];

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Package",
    price: { PKR: 1500, USD: 19 },
    description: "Perfect for entry-level professionals seeking a rapid ATS-compatible boost.",
    features: [
      "1 ATS-Optimized Professional CV",
      "PDF and Edit-Ready Word Format",
      "ATS Keyword Alignment",
      "1 Round of Revisions Included",
      "Standard 3-Day Delivery"
    ],
    isPopular: false
  },
  {
    id: "professional",
    name: "Professional",
    price: { PKR: 2500, USD: 29 },
    description: "Our best seller. Tailored for experienced professionals and candidates applying abroad.",
    features: [
      "1 ATS-Optimized CV, Localized to Your Target Country",
      "Targeted Companion Cover Letter",
      "Industry-Specific Keyword Research",
      "Recruiter Alignment for Your Target Market",
      "3 Rounds of Revisions Included",
      "Priority 2-Day Delivery"
    ],
    isPopular: true
  },
  {
    id: "bundle",
    name: "Complete Bundle",
    price: { PKR: 3500, USD: 49 },
    description: "The complete career transformation. Includes personal expert consulting and social branding.",
    features: [
      "Everything in the Professional Package",
      "Full LinkedIn Profile Optimization Sheet",
      "1-on-1 WhatsApp Support with Lead Writer",
      "Cold-Email Pitch Guide for Recruiters",
      "Unlimited Lifetime Revisions",
      "24-48 Hours Express Delivery"
    ],
    isPopular: false
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    name: "Muhammad Fahad",
    role: "Senior Full Stack Engineer",
    quote: "The Gulf-Market CV package was an absolute game changer. Within 2 weeks of updating my resume and LinkedIn profile, I was contacted by a top-tier tech firm in Dubai. My ATS score went from 45% to 85%!"
  },
  {
    id: "t2",
    name: "Ayesha Khan",
    role: "Lead Marketing Manager",
    quote: "HireSignal understood exactly what recruiters in Saudi Arabia are looking for. The Cover Letter was tailored perfectly, and the in-depth keyword density helped me secure 4 direct interview calls in Riyadh."
  },
  {
    id: "t3",
    name: "Tariq Al-Mansoor",
    role: "Operations Director",
    quote: "The bundle service is worth triple the price. The unlimited revisions and personalized consultation on WhatsApp made me feel completely valued. Absolute professional craftsmanship!"
  }
];


export const processSteps = [
  {
    title: "Choose a package",
    description: "Pick a single service or a complete bundle and send your order in under two minutes.",
  },
  {
    title: "Share your details",
    description: "Send your current CV, target roles and countries on WhatsApp. No CV yet? We start from your notes.",
  },
  {
    title: "We write and optimize",
    description: "A writer rebuilds your CV around the keywords and format recruiters in your target market use.",
  },
  {
    title: "Review and get hired",
    description: "You receive PDF and editable Word files, request revisions, and start applying with confidence.",
  },
];

export const faqs = [
  {
    q: "What is an ATS, and why does it matter?",
    a: "An Applicant Tracking System is software employers use to filter CVs before a person reads them. Complex layouts, tables and missing keywords can get a strong candidate rejected automatically. We format and write your CV so it parses correctly and matches the roles you apply for.",
  },
  {
    q: "How long does delivery take?",
    a: "The Starter Package is delivered in 3 days, Professional in 2 days, and the Complete Bundle in 24 to 48 hours.",
  },
  {
    q: "Which file formats will I receive?",
    a: "Every CV comes as a PDF ready to send and an editable Word file, so you can make small updates yourself later.",
  },
  {
    q: "How many revisions are included?",
    a: "Starter includes 1 round of revisions, Professional includes 3, and the Complete Bundle includes unlimited revisions.",
  },
  {
    q: "Can you tailor my CV for a specific country?",
    a: "Yes. Our Country-Specific CV and Professional package adapt the format, personal details and phrasing to what recruiters in your target country expect.",
  },
  {
    q: "Which currency are your prices in?",
    a: "Prices are shown in your local currency where we support it, and in US dollars everywhere else. You can switch currency above the pricing table.",
  },
  {
    q: "Is the AI CV score check really free?",
    a: "Yes. Paste your CV, optionally add a job description, and get an instant ATS score with strengths, improvements and missing keywords. No sign-up needed.",
  },
];
