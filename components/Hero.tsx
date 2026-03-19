import React from "react";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/constants/data";
function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full min-h-screen bg-linear-to-b from-[#e7e6fa] to-[#f3f4f6]  ">
      <h1 className="text-5xl font-bold px-3 mb-4 leading-tight">{heroContent.heading}</h1>
      <p className="text-gray-500 px-3 text-lg leading-relaxed mb-8 max-w-sm">{heroContent.paragraph}</p>
      <div className="w-full flex flex-col gap-5">
        {heroContent.buttons.map((btn) => (
          <Button className={btn.className} key={btn.id} variant={btn.variant}>
            {btn.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Hero;
