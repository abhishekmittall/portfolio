"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Download } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { socialLinks } from "@/lib/socials";
import { Button } from "@/components/ui/Button";

const codeLines = [
  { tokens: [{ t: "const", c: "keyword" }, { t: " developer", c: "var" }, { t: " = {", c: "default" }] },
  { tokens: [{ t: "  name:", c: "key" }, { t: ' "Abhishek Mittal"', c: "string" }, { t: ",", c: "default" }] },
  { tokens: [{ t: "  role:", c: "key" }, { t: ' "SDE I"', c: "string" }, { t: ",", c: "default" }] },
  { tokens: [{ t: "  stack:", c: "key" }, { t: " [", c: "default" }] },
  { tokens: [{ t: '    "React Native"', c: "string" }, { t: ",", c: "default" }] },
  { tokens: [{ t: '    "React.js"', c: "string" }, { t: ",", c: "default" }] },
  { tokens: [{ t: '    "Node.js"', c: "string" }] },
  { tokens: [{ t: "  ],", c: "default" }] },
  { tokens: [{ t: "  location:", c: "key" }, { t: ' "Jaipur, India"', c: "string" }, { t: ",", c: "default" }] },
  // { tokens: [{ t: "  openToWork:", c: "key" }, { t: " true", c: "bool" }] },
  { tokens: [{ t: "}", c: "default" }] },
];

const tokenColors: Record<string, string> = {
  keyword: "text-[#c792ea]",
  var: "text-[#82aaff]",
  key: "text-(--cyan)",
  string: "text-[#c3e88d]",
  bool: "text-[#ff9cac]",
  default: "text-[#cdd9e5]",
};

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const profileSrc =
    !mounted || resolvedTheme !== "light" ? "/profile-dark.png" : "/profile-light.png";

  return (
    <section id="hero" className="relative w-full">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.07)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(22,242,179,0.07)_1px,transparent_1px)] bg-size-[32px_32px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-(--cyan)/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-(--pink)/8 rounded-full blur-3xl pointer-events-none" />

      {/* Content: top padding = navbar height (64px) + breathing room */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" style={{ paddingTop: "calc(64px + 4rem)", paddingBottom: "5rem" }}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-20">

          {/* ── Left column ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Greeting + Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-(--text-secondary) text-lg mb-2">
                Hi there, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-3">
                <span className="text-(--text-primary)">Abhishek </span>
                <span className="text-(--cyan) glow-cyan">Mittal</span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-5 h-8"
            >
              <span className="text-(--pink) text-xl font-bold">&gt;</span>
              <TypeAnimation
                sequence={personalInfo.taglines.flatMap((t) => [t, 2000])}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                className="text-lg sm:text-xl font-semibold text-(--text-secondary)"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-(--text-secondary) text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {personalInfo.about}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <a href="#contact">
                <Button size="lg">Get In Touch</Button>
              </a>
              <a href={personalInfo.resumeDownload} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <Download size={15} />
                  Resume
                </Button>
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center justify-center lg:justify-start gap-2"
            >
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-10 h-10 rounded-lg border border-(--border) flex items-center justify-center text-(--text-secondary) hover:text-(--cyan) hover:border-(--cyan)/50 hover:bg-(--cyan-glow) transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right column: profile + code card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-auto shrink-0 flex flex-col items-center gap-6"
          >
            {/* Profile image */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={profileSrc}
                alt={personalInfo.name}
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Code snippet card */}
            <div className="w-full max-w-xs lg:max-w-sm">
              <div className="bg-[#2a3c50] dark:bg-[#0a1020] rounded-t-xl px-4 py-2.5 flex items-center gap-2 border border-(--border) border-b-0">
                <div className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
                <div className="w-3 h-3 rounded-full bg-[#ffb347]" />
                <div className="w-3 h-3 rounded-full bg-[#69db7c]" />
                <span className="ml-2 text-[10px] font-mono text-(--text-muted)">developer.js</span>
              </div>
              <div className="bg-[#192535] dark:bg-[#060d17] rounded-b-xl border border-(--border) border-t-0 p-4 overflow-hidden">
                <pre className="text-xs font-mono leading-6">
                  {codeLines.map((line, li) => (
                    <div key={li}>
                      {line.tokens.map((tok, ti) => (
                        <span key={ti} className={tokenColors[tok.c] ?? "text-(--text-primary)"}>
                          {tok.t}
                        </span>
                      ))}
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
