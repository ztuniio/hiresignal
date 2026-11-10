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
    id: "gulf-cv",
    title: "Gulf-Market CV",
    description: "Tailored for the UAE, Saudi Arabia, Qatar and Bahrain, with the personal details, format and phrasing GCC recruiters expect.",
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
    price: "Rs. 1,500",
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
    name: "Professional GCC",
    price: "Rs. 2,500",
    description: "Our best seller. Custom-tailored for experienced pros and candidates targeting the Gulf/GCC.",
    features: [
      "1 ATS-Optimized & GCC-Localized CV",
      "Targeted Companion Cover Letter",
      "Industry-Specific Keyword Research",
      "GCC Recruiter Alignment (UAE/KSA/Qatar)",
      "3 Rounds of Revisions Included",
      "Priority 2-Day Delivery"
    ],
    isPopular: true
  },
  {
    id: "bundle",
    name: "Complete Bundle",
    price: "Rs. 3,500",
    description: "The complete career transformation. Includes personal expert consulting and social branding.",
    features: [
      "Everything in Professional GCC Package",
      "Full LinkedIn Profile Optimization Sheet",
      "1-on-1 WhatsApp Support with Lead Writer",
      "Cold-Email Pitch Guide for Gulf Recruiters",
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
    location: "Pakistan ➔ Dubai, UAE",
    quote: "The Gulf-Market CV package was an absolute game changer. Within 2 weeks of updating my resume and LinkedIn profile, I was contacted by a top-tier tech firm in Dubai. My ATS score went from 45% to 85%!"
  },
  {
    id: "t2",
    name: "Ayesha Khan",
    role: "Lead Marketing Manager",
    location: "Lahore ➔ Riyadh, Saudi Arabia",
    quote: "HireSignal understood exactly what recruiters in Saudi Arabia are looking for. The Cover Letter was tailored perfectly, and the in-depth keyword density helped me secure 4 direct interview calls in Riyadh."
  },
  {
    id: "t3",
    name: "Tariq Al-Mansoor",
    role: "Operations Director",
    location: "Islamabad ➔ Doha, Qatar",
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
    a: "The Starter Package is delivered in 3 days, Professional GCC in 2 days, and the Complete Bundle in 24 to 48 hours.",
  },
  {
    q: "Which file formats will I receive?",
    a: "Every CV comes as a PDF ready to send and an editable Word file, so you can make small updates yourself later.",
  },
  {
    q: "How many revisions are included?",
    a: "Starter includes 1 round of revisions, Professional GCC includes 3, and the Complete Bundle includes unlimited revisions.",
  },
  {
    q: "Do you write CVs for jobs in the Gulf?",
    a: "Yes. Our Gulf-Market CV and Professional GCC package are built for recruiters in the UAE, Saudi Arabia, Qatar and Bahrain, including the details and format they expect.",
  },
  {
    q: "Is the AI CV score check really free?",
    a: "Yes. Paste your CV, optionally add a job description, and get an instant ATS score with strengths, improvements and missing keywords. No sign-up needed.",
  },
];
