import { tiers } from "@/constants/data";
import { PricingCard } from "./Product";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  return (
    <section className="min-h-screen bg-[#f3f4f6] flex flex-col items-center justify-center px-4 py-20 sm:py-24">
      {/* Heading */}
      <div className="text-center mb-14 sm:mb-16 max-w-xl mx-auto">
         <Badge
        variant="outline"
        className="text-xs font-semibold tracking-widest uppercase text-indigo-600 border-indigo-200 bg-indigo-50 px-3 py-1 mb-4"
      >
       OUR PLANS
      </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-3">
          <span className="block sm:hidden">
            Transparent <br /> Pricing
          </span>
          <span className="hidden sm:block">Transparent Pricing</span>
        </h1>

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
