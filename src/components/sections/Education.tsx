"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="w-full py-24 bg-(--bg-alt)/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Background"
          title="Education"
          description="My academic foundation in Computer Science & Engineering."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl p-px bg-linear-to-br from-(--cyan)/40 via-(--border) to-(--pink)/40 hover:from-(--cyan)/60 hover:to-(--pink)/60 transition-all duration-300"
            >
              <div className="bg-(--card) rounded-2xl p-8">
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl border border-(--cyan)/30 bg-(--cyan-glow) flex items-center justify-center shrink-0">
                      <GraduationCap className="text-(--cyan) w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-(--text-primary) text-lg leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-(--cyan) font-medium text-sm mt-0.5 font-mono">
                        {edu.field}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 self-start px-3 py-1.5 rounded-lg border border-(--pink)/30 bg-(--pink-glow) text-(--pink) text-xs font-mono font-semibold flex items-center gap-1.5">
                    <Award size={11} />
                    {edu.grade}
                  </span>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-(--text-muted) mb-4 sm:pl-16">
                  <span className="flex items-center gap-1.5 font-mono text-xs">
                    <GraduationCap size={12} className="text-(--cyan) shrink-0" />
                    {edu.institution}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs">
                    <MapPin size={12} className="text-(--pink) shrink-0" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs">
                    <Calendar size={12} className="text-(--cyan) shrink-0" />
                    {edu.duration}
                  </span>
                </div>

                <p className="text-(--text-secondary) text-sm leading-relaxed sm:pl-16">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
