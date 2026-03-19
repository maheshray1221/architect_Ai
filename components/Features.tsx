"use client";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {features}from '@/constants/data'
import Image from "next/image";

function Features() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-4 py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT: Text Content */}
        <div className="flex flex-col gap-8">
          <div>
            <Badge
              variant="outline"
              className="text-xs font-semibold tracking-widest uppercase text-slate-500 border-slate-300 px-3 py-1"
            >
              Why Choose Us
            </Badge>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            The Architect's
            <br />
            <span className="text-slate-900">Edge</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-md">
            We prioritize structural integrity over temporary trends. Your
            platform deserves a foundation built for the long term.
          </p>

          <ul className="flex flex-col gap-6 mt-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4 group">
                <div className="mt-0.5 flex-shrink-0">
                  <CheckCircle2
                    className="w-5 h-5 text-emerald-500 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={2.5}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-2">
            <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 transition-colors duration-200 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md">
              Get Started
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT: Illustration Card */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-xl p-8 sm:p-10 min-h-[320px] sm:min-h-[380px] flex flex-col items-center justify-end">
            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #64748b 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            <Image 
            src="/illustrations/undraw_team-spirit_18vw.svg"
            alt="Team meeting illustration"
            width={400}
            height={400}
            className="w-full h-auto"
            priority
            
            />

            <div className="relative z-10 w-3/4 h-px bg-slate-200 mt-3 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
