"use client";

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {PricingTier} from "@/constants/data"


export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <Card
      className={cn(
        "relative flex flex-col rounded-2xl border transition-all duration-300",
        tier.highlighted
          ? "border-indigo-500 shadow-2xl shadow-indigo-100 ring-2 ring-indigo-500 scale-[1.02]"
          : "border-slate-200 shadow-sm hover:shadow-md"
      )}
    >
      {/* Most Popular Badge */}
      {tier.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-indigo-600 text-white text-[11px] font-semibold tracking-widest uppercase px-3 py-5 rounded-full shadow-md">
            {tier.badge}
          </Badge>
        </div>
      )}

      <CardHeader className="pt-8 pb-4 px-6">
        {/* Tier Label */}
        <p
          className={cn(
            "text-xs font-bold tracking-[0.18em] uppercase mb-4",
            tier.highlighted ? "text-indigo-600" : "text-slate-400"
          )}
        >
          {tier.label}
        </p>

        {/* Price */}
        <div className="flex items-end gap-1">
          <span
            className={cn(
              "font-extrabold leading-none tracking-tight",
              typeof tier.price === "string"
                ? "text-4xl sm:text-5xl"
                : "text-5xl sm:text-6xl",
              tier.highlighted ? "text-indigo-600" : "text-slate-900"
            )}
          >
            {typeof tier.price === "number" ? `$${tier.price}` : `$${tier.price}`}
          </span>
          {tier.priceSuffix && (
            <span className="text-slate-400 text-base mb-1 font-medium">
              {tier.priceSuffix}
            </span>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col flex-1 px-6 pb-8 gap-6">
        {/* Divider */}
        <div
          className={cn(
            "h-px w-full",
            tier.highlighted ? "bg-indigo-100" : "bg-slate-100"
          )}
        />

        {/* Feature List */}
        <ul className="flex flex-col gap-3 flex-1">
          {tier.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3">
              <Check
                className={cn(
                  "w-4 h-4 flex shrink-0",
                  tier.highlighted ? "text-indigo-500" : "text-emerald-500"
                )}
                strokeWidth={2.5}
              />
              <span className="text-sm text-slate-600 font-medium">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          className={cn(
            "w-full rounded-xl py-5 text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer",
            tier.highlighted
              ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200"
              : "bg-slate-100 hover:bg-slate-200 text-slate-800"
          )}
        >
          {tier.cta}
        </Button>
      </CardContent>
    </Card>
  );
}