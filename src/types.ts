export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: { PKR: number; USD: number };
  description: string;
  features: string[];
  isPopular: boolean;
}

export interface CVCheckResult {
  score: number;
  strengths: string[];
  improvements: string[];
  missingKeywords: string[];
}

export interface OrderSubmission {
  id: string;
  fullName: string;
  email: string;
  whatsapp: string;
  service: string;
  jobTitle: string;
  fileName: string;
  notes: string;
  status: "Received" | "Under Review" | "Writer Assigned" | "Delivered";
  date: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
}
