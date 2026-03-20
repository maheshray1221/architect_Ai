"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="w-full bg-[#f3f4f6] px-4 py-16 sm:py-20 lg:py-28">
      <div
        className="max-w-4xl mx-auto rounded-3xl px-8 py-14 sm:px-14 sm:py-16 flex flex-col items-center text-center gap-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #3425cd 0%, #6c63ff 100%)",
        }}
      >
        {/* Background blur circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

        {/* Badge */}
        <div className="relative inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          No credit card required
        </div>

        {/* Heading */}
        <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
          Start Building
          <br />
          <span className="text-indigo-200">Something Great</span>
        </h2>

        {/* Subtext */}
        <p className="relative text-white/70 text-base sm:text-lg max-w-md leading-relaxed">
          Join 10,000+ engineers already using Architect AI. Free 14-day trial included.
        </p>

        {/* Buttons */}
        <div className="relative flex flex-col sm:flex-row gap-3 mt-2">
          <Button className="bg-white text-[#3425cd] hover:bg-indigo-50 font-semibold px-8 py-5 rounded-xl text-sm">
            Get Started Free
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-5 rounded-xl text-sm bg-transparent"
          >
            View Demo
          </Button>
        </div>

        {/* Bottom note */}
        <p className="relative text-white/50 text-xs">
          Free 14-day trial · Cancel anytime · No setup fees
        </p>

      </div>
    </section>
  );
}