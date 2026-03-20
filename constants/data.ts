import { Layers2, Cpu, BarChart, LucideIcon } from "lucide-react";
type Button = {
  id: number;
  label: String;
  variant: "default" | "secondary";
  className: string;
};

// -----------  Navbar  ------------------

type Navlink = {
  label: string;
  href: string;
};

type NavContent = {
  logo: {
    size: number;
    color: string;
  };
  heading: string;
  link: Navlink;
  button: Button;
};

export const navContent: NavContent = {
  logo: {
    size: 24,
    color: "blue",
  },
  heading: "ARCHITECT_AI",
  link: {
    label: "Get Started",
    href: "/abc",
  },
  button: {
    id: 1,
    label: "Get Started",
    variant: "secondary",
    className: "",
  },
};

// -----------  Hero  ------------------

type HeroContent = {
  heading: string;
  paragraph: string;
  buttons: Button[];
};

export const heroContent: HeroContent = {
  heading: "Compose Your Digital Future with Precision",
  paragraph:
    "The next generation of SaaS infrastructure designed for the digital architect. High-fidelity components intentional asymmetry, and absolute performance.",
  buttons: [
    {
      id: 1,
      label: "Get Started",
      variant: "secondary",
      className: "bg-[#3425cd] shadow-md text-white py-6 ml-3 mr-3 text-lg",
    },
    {
      id: 2,
      label: "View Demo",
      variant: "secondary",
      className: " py-6 ml-3 mr-3 shadow-md py-6 ml-3 mr-3 text-lg",
    },
  ],
};

// -----------  Services  -----------------

type ServicesCard = {
  id: number;
  icon: LucideIcon;
  iconColor: string;
  heading: string;
  description: string;
};

export const servicesCard: ServicesCard[] = [
  {
    id: 1,
    icon: Cpu,
    iconColor: "blue",
    heading: "Cloud Solutions",
    description:
      "Scalable infrastructure that grows with your vision. Deploy globally with millisecond latency.",
  },
  {
    id: 2,
    icon: BarChart,
    iconColor: "gray",
    heading: "AI Integration",
    description:
      "Embed intelligent workflows directly into your existing software stack with our proprietary API.",
  },
  {
    id: 3,
    icon: BarChart,
    iconColor: "red",
    heading: "Custom Dev",
    description:
      "Tailor-made solutions built by elite architects to solve your most complex business logic.",
  },
  {
    id: 4,
    icon: Layers2,
    iconColor: "darkgreen",
    heading: "Advanced Analytics",
    description:
      "Deep insights at your fingertips. Visualize date patterns with precision editorial-style charts.",
  },
];


type Features = {
  title:string
  description:string
}

export const features:Features[] = [
  {
    title: "Unmatched Security",
    description: "Military-grade encryption for all data at rest and in transit.",
  },
  {
    title: "99.9% Uptime SLA",
    description: "Enterprise-level reliability with multi-region redundancy.",
  },
  {
    title: "24/7 Expert Support",
    description: "Direct access to the engineers who built the platform.",
  },
];


// -----------  Product Pricing  -----------------



export interface PricingTier {
  id: string;
  label: string;
  price: string | number;
  priceSuffix?: string;
  description?: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

export const tiers: PricingTier[] = [
  {
    id: "starter",
    label: "Starter",
    price: 49,
    priceSuffix: "/mo",
    features: ["5 Projects", "Basic Analytics", "Community Support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "professional",
    label: "Professional",
    price: 149,
    priceSuffix: "/mo",
    features: [
      "Unlimited Projects",
      "Advanced AI Models",
      "Priority Support",
      "Custom Domains",
    ],
    cta: "Choose Pro",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    price: "Custom",
    features: [
      "Dedicated Infrastructure",
      "On-Premise Deployment",
      "24/7 Dedicated Manager",
      "SSO & SAML Security",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];


// -----------  Product Pricing  -----------------

type Faq = {
  question:string
  answer:string
}

export const faqs:Faq[] = [
  {
    question: "What is the integration process?",
    answer:
      "Integration is simple — connect your existing tools via our API or use one of our 50+ native integrations. Setup takes under 10 minutes.",
  },
  {
    question: "Is my data secure in the cloud?",
    answer:
      "Absolutely. We use AES-256 encryption and follow strict GDPR compliance guidelines for all regional data centers.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
  },
  {
    question: "Do you offer educational discounts?",
    answer:
      "Yes! Students and educational institutions get up to 50% off. Reach out to our support team with your institution email.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, UPI, net banking, and PayPal. All transactions are secured with SSL encryption.",
  },
];