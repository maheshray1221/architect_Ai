"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", form);
    // apna API call yahan lagao
  };

  return (
    <section className="w-full bg-slate-100 flex items-center justify-center px-4 py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT: Heading */}
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Let's Build
            <br />
            Something
            <br />
            Together
          </h2>
        </div>

        {/* RIGHT: Form */}
        <div className="flex flex-col gap-6">

          {/* Name */}
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-slate-700">
              Name
            </Label>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-white border border-slate-200 rounded-xl px-4 py-5 text-sm text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-slate-700">
              Email
            </Label>
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="bg-white border border-slate-200 rounded-xl px-4 py-5 text-sm text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-slate-700">
              Message
            </Label>
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              rows={5}
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-5 rounded-xl text-sm tracking-wide transition-colors duration-200"
          >
            Send Message
          </Button>

        </div>
      </div>
    </section>
  );
}