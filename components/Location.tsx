"use client";


import { offices } from "@/constants/data";
import { OfficeCard } from "./officeCard";
import { Badge } from "@/components/ui/badge";


export default function Location() {
  return (
    <section className="w-full bg-[#f3f4f6] px-4 py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Heading */}
        <div className="text-center">
          <Badge
        variant="outline"
        className="text-xs font-semibold tracking-widest uppercase text-indigo-600 border-indigo-200 bg-indigo-50 px-3 py-1 mb-4"
      >
       Our Locations
      </Badge>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600">
           
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Find Us Anywhere
          </h2>
          <p className="mt-3 text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
            We operate globally with local teams ready to support you.
          </p>
        </div>

        {/* Main Grid — Map + Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* LEFT: Map */}
          <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948551!3d37.75781499657369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

          {/* RIGHT: Office Cards */}
          <div className="flex flex-col gap-4">
            {offices.map((office, idx) => (
              <OfficeCard key={idx} office={office} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// "hello"