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
    variant: "default",
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
      variant: "default",
      className: "bg-[#3425cd] shadow-md text-white py-6 ml-3 mr-3 text-lg",
    },
    {
      id: 2,
      label: "View Demo",
      variant: "default",
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
  title: string;
  description: string;
};

export const features: Features[] = [
  {
    title: "Unmatched Security",
    description:
      "Military-grade encryption for all data at rest and in transit.",
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
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
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

// -----------  Product Pricing  -----------------

type Testimonials = {
  name: string;
  role: string;
  avatar: string;
  review: string;
  rating: number;
};

export const testimonials: Testimonials[] = [
  {
    name: "Marcus Sterling",
    role: "CTO, Nexus Corp",
    avatar: "",
    review:
      "Architect AI transformed our workflow entirely. The precision of their AI models is unlike anything we've seen in the market.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Lead Designer, Studio Flux",
    avatar: "",
    review:
      "The clean architecture and thoughtful design system make it a joy to work with every day. Truly an elite platform.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Founder, BuildFast",
    avatar: "",
    review:
      "Onboarding was seamless and the support team is incredibly responsive. We scaled from 0 to 10k users without any hiccups.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Product Manager, Zova",
    avatar: "",
    review:
      "Finally a platform that respects developer experience. The API is clean, docs are excellent, and it just works.",
    rating: 5,
  },
];

// -----------  Blogs  -----------------

export type Post = {
  id: number;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

export const posts: Post[] = [
  {
    id: 1,
    category: "Engineering",
    readTime: "5 Min Read",
    title: "The Future of Edge Computing and Neural Fabrics",
    excerpt:
      "How distributed AI nodes are changing the latency landscape for modern applications.",
    image: "/computer.jpg",
    href: "#",
  },
  {
    id: 2,
    category: "Security",
    readTime: "8 Min Read",
    title: "Zero Trust Architecture for SaaS Scale",
    excerpt:
      "Implementing enterprise-grade identity management without sacrificing user experience.",
    image: "/laptop.jpg",
    href: "#",
  },
  {
    id: 3,
    category: "Design",
    readTime: "4 Min Read",
    title: "Building Design Systems That Scale Across Teams",
    excerpt:
      "A practical guide to tokens, components, and documentation that actually gets used.",
    image: "/radiation.jpg",
    href: "#",
  },
  {
    id: 4,
    category: "Product",
    readTime: "6 Min Read",
    title: "How We Reduced Onboarding Drop-off by 60%",
    excerpt:
      "Small UX changes, big results. Here's exactly what we changed and why it worked.",
    image: "/team.jpg",
    href: "#",
  },
];

// -----------  Company Location  -----------------

export type Office = {
  title: string;
  address: string;
  phone: string;
  email: string;
  accent: boolean;
};

export const offices: Office[] = [
  {
    title: "Global Headquarters",
    address:
      "100 Tech Avenue, Suite 400\nSan Francisco, CA 94105\nUnited States",
    phone: "+1 (415) 000-1234",
    email: "hello@company.com",
    accent: true,
  },
  {
    title: "Asia Pacific",
    address: "12 Innovation Drive, Level 8\nBangalore, KA 560001\nIndia",
    phone: "+91 80 0000 1234",
    email: "apac@company.com",
    accent: false,
  },
 
];

// -----------  Footer  -----------------

export const footerLinks = [
  {
    heading: "Platform",
    links: ["Analytics", "Cloud Services", "AI Engine"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Press"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "Help Center", "Blog"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];
