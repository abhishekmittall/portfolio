"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { socialLinks } from "@/lib/socials";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const contactCards = [
  {
    icon: Mail,
    label: "email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    accent: "cyan",
  },
  {
    icon: Phone,
    label: "phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    accent: "pink",
  },
  {
    icon: MapPin,
    label: "location",
    value: personalInfo.location,
    href: "https://maps.google.com/?q=Jaipur,Rajasthan",
    accent: "cyan",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const reset = () => {
    setStatus("idle");
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrorMsg("");
  };

  const inputClass =
    "w-full bg-(--bg) border border-(--border) rounded-xl px-4 py-3 text-(--text-primary) placeholder-[var(--text-muted)] text-sm font-mono focus:outline-none focus:border-(--cyan)/60 focus:ring-2 focus:ring-(--cyan)/15 transition-all";

  return (
    <section id="contact" className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Me"
          description="Have a project in mind or want to chat? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16">

          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-(--text-secondary) text-base leading-relaxed">
              Feel free to reach out — I&apos;d love to hear from you. I&apos;ll
              get back to you as soon as possible.
            </p>

            {/* Contact Cards */}
            <div className="space-y-3">
              {contactCards.map(({ icon: Icon, label, value, href, accent }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 bg-(--card) border border-(--border) rounded-xl hover:border-(--cyan)/40 transition-all group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                    accent === "cyan"
                      ? "border-(--cyan)/30 bg-(--cyan-glow)"
                      : "border-(--pink)/30 bg-(--pink-glow)"
                  }`}>
                    <Icon className={`w-4 h-4 ${accent === "cyan" ? "text-(--cyan)" : "text-(--pink)"}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold text-(--text-muted) uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <p className="text-(--text-primary) text-sm font-medium group-hover:text-(--cyan) transition-colors truncate font-mono">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-[10px] font-semibold text-(--text-muted) uppercase tracking-wider mb-3">
                Find Me On
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border border-(--border) text-(--text-muted) hover:text-(--cyan) hover:border-(--cyan)/40 hover:bg-(--cyan-glow) transition-all text-xs font-mono"
                  >
                    <Icon size={14} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-5 border rounded-2xl p-12 text-center h-full min-h-100 border-(--cyan)/30 bg-(--card)"
              >
                <div className="w-16 h-16 rounded-full border border-(--cyan)/30 bg-(--cyan-glow) flex items-center justify-center">
                  <CheckCircle2 className="text-(--cyan) w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-2">Message Sent!</h3>
                  <p className="text-(--text-secondary) text-sm leading-relaxed">
                    Thanks for reaching out. I&apos;ll get back to you at{" "}
                    <span className="text-(--cyan) font-mono">{form.email || "your email"}</span>{" "}
                    as soon as possible.
                  </p>
                </div>
                <Button variant="outline" onClick={reset}>
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              // Card with gradient border
              <div className="relative rounded-2xl p-px bg-linear-to-br from-(--cyan)/30 via-(--border) to-(--pink)/30">
                <form
                  onSubmit={handleSubmit}
                  className="bg-(--card) rounded-2xl p-6 md:p-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-semibold text-(--text-muted) uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-semibold text-(--text-muted) uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="john@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-semibold text-(--text-muted) uppercase tracking-wider">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                      placeholder="Project Inquiry / Collaboration / Job Offer"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-semibold text-(--text-muted) uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about your project, idea, or just say hello..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <div className="flex items-center gap-2.5 p-3 bg-(--pink-glow) border border-(--pink)/30 rounded-xl text-(--pink) text-sm">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-center text-[11px] text-(--text-muted)">
                    Your message will be sent to{" "}
                    <span className="text-(--cyan) font-medium">{personalInfo.email}</span>
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
