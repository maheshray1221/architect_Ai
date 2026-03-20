"use client";
import { ArrowRight } from "lucide-react";
import { posts } from "@/constants/data";
import { BlogCard } from "./blogCard";

export default function Blog() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Insights &<br />
              Architecture
            </h2>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">
              The latest from our engineering blog
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-indigo-600 text-sm font-semibold hover:gap-2 transition-all duration-200 whitespace-nowrap mt-1"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {posts.map((post,index) => (
            <BlogCard key={post.id} post={post} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}


