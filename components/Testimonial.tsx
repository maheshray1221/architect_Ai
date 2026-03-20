"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {testimonials} from "@/constants/data"
import { Badge } from "@/components/ui/badge";

export default function Testimonials() {
  return (
    <section className="w-full bg-slate-100 flex items-center justify-center px-4 py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
           <Badge
        variant="outline"
        className="text-xs font-semibold tracking-widest uppercase text-indigo-600 border-indigo-200 bg-indigo-50 px-3 py-1 mb-4"
      >
       LOVE FROM USERS
      </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What Our Users Say
          </h2>
          <p className="text-slate-500 mt-3 text-base sm:text-lg">
            Trusted by teams building the future.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <CardContent className="flex flex-col gap-5 p-6 sm:p-8">

                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-emerald-500 fill-emerald-500"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{t.review}"
                </p>

                {/* Divider */}
                <div className="h-px bg-slate-100" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback className="bg-slate-200 text-slate-700 text-xs font-bold">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}