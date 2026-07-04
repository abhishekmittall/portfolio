"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const tabs = [
  { key: "frontend", label: "Mobile & Frontend" },
  { key: "backend", label: "Backend & APIs" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Tools & DevOps" },
] as const;

type SkillTab = typeof tabs[number]["key"];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillTab>("frontend");
  const currentSkills = skills[activeTab];

  return (
    <section id="skills" className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Technical Skills"
          title="My Stack"
          description="Technologies and tools I work with to ship products across mobile and web."
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-mono font-medium transition-all duration-200",
                activeTab === key
                  ? "bg-linear-to-r from-(--cyan) to-(--pink) text-white shadow-lg"
                  : "border border-(--border) text-(--text-secondary) hover:text-(--text-primary) hover:border-(--border-hover) bg-(--card)"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {currentSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group bg-(--card) border border-(--border) rounded-xl p-5 hover:border-(--cyan)/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm text-(--text-primary)">{skill.name}</span>
                <span className="text-xs text-(--cyan) font-mono font-semibold">{skill.level}%</span>
              </div>
              {/* Track */}
              <div className="h-1 bg-(--border) rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-linear-to-r from-(--cyan) to-(--pink)"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Also experienced with */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-10 border-t border-(--border)"
        >
          <p className="text-center text-xs font-semibold text-(--text-muted) uppercase tracking-widest mb-6">
            Also Experienced With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "CodePush (OTA)", "CleverTap", "AppsFlyer", "Microsoft Clarity",
              "Meta Pixel SDK", "Stripe", "Push Notifications", "In-App Purchases",
              "VS Code", "Android Studio", "Xcode", "Flipper", "Postman", "Sentry",
              "Bitbucket", "Jira", "Figma", "pgAdmin", "Claude Code", "Cursor AI",
              "ChatGPT", "Gemini"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg border border-(--border) text-(--text-muted) text-xs font-mono hover:text-(--cyan) hover:border-(--cyan)/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
