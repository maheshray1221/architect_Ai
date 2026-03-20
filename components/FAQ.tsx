"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {faqs} from "@/constants/data"



export default function FAQ() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-4 py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked
            <br />
            Questions
          </h2>
        </div>

        {/* Accordion — type="single" + collapsible ensures only one open at a time */}
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border border-slate-200 rounded-xl px-5 shadow-sm bg-white data-[state=open]:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="text-sm sm:text-base font-semibold text-slate-800 hover:no-underline py-5 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-500 leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}