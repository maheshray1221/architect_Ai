"use client";

import { Layers } from "lucide-react";
import { footerLinks } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-14 sm:py-16 flex flex-col gap-12">
        {/* Top: Brand + Social */}
        <div className="flex flex-col gap-4 max-w-sm">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-indigo-600" strokeWidth={2.5} />
            <span className="text-sm font-extrabold tracking-[0.15em] uppercase text-slate-900">
              Architect_AI
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-slate-500 leading-relaxed">
            Defining the next era of digital architecture through
            performance-driven software solutions.
          </p>

          {/* Social Icon */}
          <div className="flex items-center gap-3 mt-1">
            <a
              href="#"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:border-indigo-400 transition-colors duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-slate-600"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:border-indigo-400 transition-colors duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-slate-600"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:border-indigo-400 transition-colors duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-slate-600"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.heading} className="flex flex-col gap-4">
              <h4 className="text-sm font-extrabold text-slate-900 tracking-tight">
                {section.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-indigo-600 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 px-4 py-5">
        <p className="text-center text-xs text-slate-400">
          © 2024 Digital Architect Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
