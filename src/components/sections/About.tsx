"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

const traits = [
  {
    icon: Code2,
    title: "Mobile-First",
    description: "Building cross-platform apps for Android & iOS with React Native.",
    accent: "cyan",
  },
  {
    icon: Rocket,
    title: "Fintech Focus",
    description: "Delivered scalable fintech, crypto, and investment platforms.",
    accent: "pink",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Thrives in collaborative, agile teams with clear communication.",
    accent: "cyan",
  },
  {
    icon: Zap,
    title: "AI Curious",
    description: "Integrating LLMs and AI features into real-world product workflows.",
    accent: "pink",
  },
];

export default function About() {
  return (
    <section id="about" className="w-full py-24 bg-(--bg-alt)">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          description="A results-driven engineer passionate about building scalable mobile and web products."
        />

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Terminal-style bio card */}
            <div className="rounded-2xl border border-(--border) overflow-hidden">
              {/* Chrome bar */}
              <div className="bg-(--card) px-4 py-2.5 flex items-center gap-2 border-b border-(--border)">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffb347]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#69db7c]" />
                <span className="ml-2 text-[10px] font-mono text-(--text-muted)">about.md</span>
              </div>
              <div className="bg-(--bg) p-6 space-y-4">
                <p className="text-(--text-secondary) leading-relaxed">
                  {personalInfo.about}
                </p>
                <p className="text-(--text-secondary) leading-relaxed">
                  Over the past <span className="text-(--cyan) font-semibold">3+ years</span> I&apos;ve shipped{" "}
                  <span className="text-(--pink) font-semibold">fintech</span>, crypto trading,
                  creator commerce, and AI-powered apps — working across the full stack from
                  React Native mobile to Node.js backends and Next.js web apps.
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "3+", label: "Years Exp." },
                { value: "5+", label: "Apps Shipped" },
                { value: "25+", label: "APIs Built" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center py-4 px-3 rounded-xl border border-(--border) bg-(--card) hover:border-(--cyan)/40 transition-colors"
                >
                  <div className="text-2xl font-bold text-(--cyan) mb-1">{stat.value}</div>
                  <div className="text-xs text-(--text-muted) font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Trait Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative bg-(--card) border border-(--border) rounded-2xl p-6 hover:border-(--cyan)/40 transition-all duration-300 overflow-hidden"
              >
                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 rounded-bl-3xl opacity-10 ${
                    trait.accent === "cyan" ? "bg-(--cyan)" : "bg-(--pink)"
                  }`}
                />
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 border ${
                    trait.accent === "cyan"
                      ? "border-(--cyan)/30 bg-(--cyan-glow)"
                      : "border-(--pink)/30 bg-(--pink-glow)"
                  }`}
                >
                  <trait.icon
                    className={`w-5 h-5 ${trait.accent === "cyan" ? "text-(--cyan)" : "text-(--pink)"}`}
                  />
                </div>
                <h3 className="font-semibold text-(--text-primary) mb-2 text-sm">{trait.title}</h3>
                <p className="text-(--text-muted) text-xs leading-relaxed">{trait.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
