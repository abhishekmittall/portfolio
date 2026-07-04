"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { socialLinks } from "@/lib/socials";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--bg-alt)">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-xl font-bold tracking-tight">
              <span className="text-(--pink)">&lt;</span>
              <span className="text-(--text-primary)">
                {personalInfo.name.split(" ")[0][0]}
                {personalInfo.name.split(" ")[1][0]}
              </span>
              <span className="text-(--cyan)">/</span>
              <span className="text-(--pink)">&gt;</span>
            </span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-(--text-muted) hover:text-(--cyan) text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2 shrink-0">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-9 h-9 rounded-lg border border-(--border) flex items-center justify-center text-(--text-muted) hover:text-(--cyan) hover:border-(--cyan)/40 hover:bg-(--cyan-glow) transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-(--border) text-center">
          <p className="text-(--text-muted) text-xs flex items-center justify-center gap-1.5 flex-wrap">
            Built with
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <Heart size={13} className="text-(--pink) fill-(--pink)" />
            </motion.span>
            by
            <span className="text-(--cyan) font-medium">{personalInfo.name}</span>
            <span className="text-base">🇮🇳</span>
            <span className="opacity-40">·</span>
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
