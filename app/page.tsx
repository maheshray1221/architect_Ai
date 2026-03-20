import Blog from "@/components/Blogs";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import PricingPage from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <PricingPage />
      <Testimonials />
      <FAQ />
      <CTA />
      <Blog />
      <Contact />
      <Location />
      <Footer />
    </>
  );
}
