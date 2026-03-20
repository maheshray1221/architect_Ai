import {tiers} from "@/constants/data"
import { PricingCard } from "./Product";


export default function PricingPage() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20 sm:py-24">
      {/* Heading */}
      <div className="text-center mb-14 sm:mb-16 max-w-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-3">
          Transparent 
        </h1>
        <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-3">Pricing</span>
        <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
          Simple tiers for teams of all sizes. No hidden fees.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {tiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>
    </section>
  );
}