import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";
import ThemeProvider from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: `${personalInfo.name} — SDE I | Frontend & React Native Developer`,
  description: `Portfolio of ${personalInfo.name}, a Software Development Engineer II with 3+ years of experience building fintech, crypto, and AI-powered mobile & web applications.`,
  keywords: ["React Native Developer", "Full Stack Developer", "React Developer", "Next.js", "TypeScript", "Fintech Developer", "Mobile App Developer", personalInfo.name, "Jaipur"],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${personalInfo.name} — SDE I | React & React Native Developer`,
    description: `Portfolio of ${personalInfo.name} — 3+ years building scalable fintech, crypto, and AI-powered apps.`,
    siteName: personalInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — SDE I | React & React Native Developer`,
    description: `Portfolio of ${personalInfo.name} — 3+ years building scalable fintech, crypto, and AI-powered apps.`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="w-full">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual'" }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
