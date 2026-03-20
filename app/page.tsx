import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PricingPage from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Services/>
    <Features/>
    <PricingPage/>
    <FAQ/>
    <Testimonials/>
    </>
  );
}
