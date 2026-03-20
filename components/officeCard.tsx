import { Office } from "@/constants/data";
import { MapPin, Phone, Mail } from "lucide-react";

export function OfficeCard({
  office,
}: {
  office: Office;
}) {
  return (
    <div
      className={`
        relative rounded-2xl p-6 border transition-shadow duration-200 hover:shadow-md
        ${office.accent
          ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-100"
          : "bg-white border-slate-200 shadow-sm"
        }
      `}
    >
      {/* Icon + Title */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className={`
            w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0
            ${office.accent ? "bg-white/20" : "bg-blue-50"}
          `}
        >
          <MapPin
            className={`w-4 h-4 ${office.accent ? "text-white" : "text-blue-600"}`}
            strokeWidth={2.5}
          />
        </div>
        <div>
          <h3
            className={`text-sm font-extrabold tracking-tight ${
              office.accent ? "text-white" : "text-slate-800"
            }`}
          >
            {office.title}
          </h3>
        </div>
      </div>

      {/* Divider */}
      <div
        className={`h-px w-full mb-4 ${
          office.accent ? "bg-white/20" : "bg-slate-100"
        }`}
      />

      {/* Address */}
      <p
        className={`text-sm leading-relaxed whitespace-pre-line mb-4 ${
          office.accent ? "text-blue-100" : "text-slate-500"
        }`}
      >
        {office.address}
      </p>

      {/* Contact Info */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Phone
            className={`w-3.5 h-3.5 flex-shrink-0 ${
              office.accent ? "text-blue-200" : "text-blue-500"
            }`}
          />
          <span
            className={`text-xs font-medium ${
              office.accent ? "text-blue-100" : "text-slate-500"
            }`}
          >
            {office.phone}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Mail
            className={`w-3.5 h-3.5 flex-shrink-0 ${
              office.accent ? "text-blue-200" : "text-blue-500"
            }`}
          />
          <span
            className={`text-xs font-medium ${
              office.accent ? "text-blue-100" : "text-slate-500"
            }`}
          >
            {office.email}
          </span>
        </div>
      </div>
    </div>
  );
}