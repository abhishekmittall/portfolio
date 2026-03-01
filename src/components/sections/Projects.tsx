"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Globe, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, personalInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const filters = ["All", "Featured", "React Native", "React.js", "Node.js"];

const platformStyles: Record<string, string> = {
  Android: "border-[#69db7c]/40 text-[#69db7c] bg-[#69db7c]/8 hover:bg-[#69db7c]/15",
  iOS: "border-[#82aaff]/40 text-[#82aaff] bg-[#82aaff]/8 hover:bg-[#82aaff]/15",
  Web: "border-(--cyan)/40 text-(--cyan) bg-(--cyan-glow) hover:bg-(--cyan)/15",
};

const platformIcons: Record<string, React.ReactNode> = {
  Android: <Smartphone size={10} />,
  iOS: <Smartphone size={10} />,
  Web: <Globe size={10} />,
};

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Featured") return p.featured;
    return p.tech.some((t) => t.toLowerCase().includes(filter.toLowerCase()));
  });

  const getPlatformLink = (platform: string, project: typeof projects[0]) => {
    if (platform === "Android") return project.androidLink;
    if (platform === "iOS") return project.iosLink;
    if (platform === "Web") return project.webLink;
    return null;
  };

  return (
    <section id="projects" className="w-full py-24 bg-(--bg-alt)">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="My Work"
          title="Projects"
          description="Fintech, crypto, AI-powered apps, and more — shipped across Android, iOS, and Web."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-mono font-medium transition-all duration-200",
                filter === f
                  ? "bg-linear-to-r from-(--cyan) to-(--pink) text-white shadow-lg"
                  : "border border-(--border) text-(--text-secondary) hover:text-(--text-primary) hover:border-(--border-hover) bg-(--card)"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative flex flex-col rounded-2xl border border-(--border) hover:border-(--cyan)/40 transition-all duration-300 overflow-hidden bg-(--card) hover:shadow-lg hover:shadow-(--cyan)/5"
              >
                {/* Browser Chrome */}
                <div className="px-4 py-3 flex items-center gap-2 border-b border-(--border) bg-(--bg)">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffb347]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#69db7c]" />
                  <span className="ml-2 text-[10px] font-mono text-(--text-muted) truncate">
                    ~/{project.title.toLowerCase().replace(/ /g, "-")}.tsx
                  </span>
                  {project.featured && (
                    <span className="ml-auto flex items-center gap-1 text-[10px] font-mono text-[#ffb347] shrink-0">
                      <Star size={9} fill="currentColor" />
                      featured
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-(--text-primary) mb-2 group-hover:text-(--cyan) transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-(--text-secondary) text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Platform badges — clickable if link exists */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.platforms.map((platform) => {
                      const link = getPlatformLink(platform, project);
                      const baseClass = cn(
                        "inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-mono font-medium transition-all",
                        platformStyles[platform] ?? "border-(--border) text-(--text-muted)"
                      );
                      return link ? (
                        <a
                          key={platform}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(baseClass, "cursor-pointer")}
                          title={`Open on ${platform === "Android" ? "Play Store" : platform === "iOS" ? "App Store" : "Web"}`}
                        >
                          {platformIcons[platform]}
                          {platform}
                        </a>
                      ) : (
                        <span key={platform} className={baseClass}>
                          {platformIcons[platform]}
                          {platform}
                        </span>
                      );
                    })}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md border border-(--border) text-(--text-muted) text-[10px] font-mono hover:border-(--pink)/40 hover:text-(--pink) transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom: GitHub source only if available */}
                  {project.sourceLink && (
                    <div className="pt-4 border-t border-(--border)">
                      <a
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-(--text-muted) hover:text-(--cyan) text-xs font-mono transition-colors w-fit"
                      >
                        <FaGithub size={13} />
                        <span>source</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-(--text-muted) hover:text-(--cyan) transition-colors text-sm font-mono"
          >
            <FaGithub size={16} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
