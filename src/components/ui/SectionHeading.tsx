"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-14 w-full", isCenter ? "text-center" : "text-left", className)}
    >
      {eyebrow && (
        <span className="inline-block mb-3 text-xs font-semibold tracking-[0.2em] text-(--cyan) uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className={cn("text-(--text-secondary) text-base md:text-lg leading-relaxed", isCenter ? "mx-auto max-w-2xl" : "")}>
          {description}
        </p>
      )}
      {/* Gradient divider */}
      <div className={cn("mt-5", isCenter ? "flex justify-center" : "")}>
        <div className="h-0.5 w-16 rounded-full bg-linear-to-r from-(--cyan) to-(--pink)" />
      </div>
    </motion.div>
  );
}
