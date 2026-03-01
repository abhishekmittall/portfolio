"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Work History"
          title="My Experience"
          description="The roles and projects that have shaped my expertise."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company Tabs */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {experiences.map((e, i) => (
              <button
                key={e.id}
                onClick={() => setActive(i)}
                className={cn(
                  "shrink-0 lg:w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-200 text-sm font-medium relative overflow-hidden",
                  i === active
                    ? "border-(--cyan)/50 text-(--cyan) bg-(--cyan-glow)"
                    : "border-(--border) text-(--text-secondary) hover:text-(--text-primary) hover:border-(--border-hover) hover:bg-(--card)"
                )}
              >
                {i === active && (
                  <motion.div
                    layoutId="exp-indicator"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-(--cyan)"
                    transition={{ type: "spring", duration: 0.4 }}
                  />
                )}
                <div className="font-semibold truncate pl-2">{e.company}</div>
                <div className="text-xs text-(--text-muted) mt-0.5 pl-2">{e.duration}</div>
              </button>
            ))}
          </div>

          {/* Details Panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2"
          >
            {/* Card with gradient border */}
            <div className="relative rounded-2xl p-px bg-linear-to-br from-(--cyan)/40 via-(--border) to-(--pink)/40">
              <div className="bg-(--card) rounded-2xl p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-(--text-primary)">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-(--cyan) font-medium mt-1 text-sm">
                      <span className="text-(--pink)">&gt;</span>
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-(--cyan)/30 text-(--cyan) text-xs font-mono bg-(--cyan-glow)">
                    {exp.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-(--text-muted) mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-(--cyan)" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-(--pink)" />
                    {exp.location}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-(--text-secondary) text-sm leading-relaxed">
                      <ChevronRight
                        size={14}
                        className="text-(--cyan) mt-0.5 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div>
                  <p className="text-[10px] font-semibold text-(--text-muted) uppercase tracking-widest mb-3">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg border border-(--border) text-(--text-secondary) text-xs font-mono hover:border-(--cyan)/40 hover:text-(--cyan) transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
