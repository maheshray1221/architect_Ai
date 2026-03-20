import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Post } from "@/constants/data";

export function BlogCard({ post , priority = false }: { post: Post,priority:boolean}) {
  return (
    <a href={post.href} className="group flex flex-col gap-4 cursor-pointer">
      {/* Image */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-200">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority={priority}
          loading={priority? undefined : "lazy"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Meta */}
      <div className="flex items-center gap-2">
        <Badge
          variant="outline"
          className="text-[11px] font-bold tracking-widest uppercase text-indigo-600 border-indigo-200 bg-indigo-50 px-2 py-0.5"
        >
          {post.category}
        </Badge>
        <span className="text-xs text-slate-400">{post.readTime}</span>
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug tracking-tight group-hover:text-indigo-600 transition-colors duration-200">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-slate-500 leading-relaxed">{post.excerpt}</p>
    </a>
  );
}