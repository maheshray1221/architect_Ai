import React from "react";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/constants/data";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-linear-to-b from-[#e7e6fa] to-[#f3f4f6] px-4 py-20">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-indigo-100 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Next-Gen AI Architecture
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            {heroContent.heading}
          </h1>

          {/* Paragraph */}
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md">
            {heroContent.paragraph}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {heroContent.buttons.map((btn) => (
              <Button
                key={btn.id}
                variant={btn.variant}
                className={btn.className}
              >
                {btn.label}
                {btn.variant === "default" && (
                  <ArrowRight className="w-4 h-4 ml-1" />
                )}
              </Button>
            ))}
          </div>

          {/* Social Proof */}
          <p className="text-xs text-gray-400 mt-1">
            Trusted by <span className="font-semibold text-slate-600">10,000+</span> engineers worldwide
          </p>
        </div>

        {/* RIGHT: Visual Card */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-md">

            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 flex flex-col gap-5">

              {/* Top bar */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-auto text-xs text-slate-400 font-mono">architect.ai</div>
              </div>

              {/* Code lines */}
              <div className="flex flex-col gap-2 font-mono text-xs">
                <div className="flex gap-2">
                  <span className="text-indigo-400">const</span>
                  <span className="text-slate-700">ai</span>
                  <span className="text-slate-400">=</span>
                  <span className="text-emerald-500">new ArchitectAI()</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-indigo-400">await</span>
                  <span className="text-slate-700">ai.deploy(</span>
                  <span className="text-amber-500">'production'</span>
                  <span className="text-slate-700">)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-400">// ✓</span>
                  <span className="text-emerald-500">Deployed in 1.2s</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-100" />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "99.9%", label: "Uptime" },
                  { value: "1.2s", label: "Deploy" },
                  { value: "10k+", label: "Users" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-0.5">
                    <span className="text-lg font-extrabold text-slate-900">{stat.value}</span>
                    <span className="text-xs text-slate-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              Live ✦
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;



// import React from "react";
// import { Button } from "@/components/ui/button";
// import { heroContent } from "@/constants/data";
// function Hero() {
//   return (
//     <div className="flex flex-col items-center justify-center text-center w-full min-h-screen bg-linear-to-b from-[#e7e6fa] to-[#f3f4f6]  ">
//       <h1 className="text-5xl font-bold px-3 mb-4 leading-tight">{heroContent.heading}</h1>
//       <p className="text-gray-500 px-3 text-lg leading-relaxed mb-8 max-w-sm">{heroContent.paragraph}</p>
//       <div className="w-full flex flex-col gap-5">
//         {heroContent.buttons.map((btn) => (
//           <Button className={btn.className} key={btn.id} variant={btn.variant}>
//             {btn.label}
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hero;
