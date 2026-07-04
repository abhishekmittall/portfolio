# Abhishek Mittal — Developer Portfolio

Personal portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Features a dark-navy + cyan/pink design theme, an ambient animated background, scroll-triggered motion throughout, and a functional contact form powered by Resend.

---

## Features

- **Dark / Light mode** — manual toggle via `next-themes`, persisted across visits
- **Animated hero** — typing role animation with a syntax-highlighted code card
- **Ambient animated background** — soft, drifting cyan/pink gradient orbs rendered globally behind every section (respects `prefers-reduced-motion`)
- **Sections** — Hero, About, Experience, Projects, Skills, Education, Contact
- **Projects showcase** — filterable by tech stack, with clickable Android / iOS / Web / source-code badges linking out to the Play Store, App Store, live site, or GitHub
- **Skills** — tabbed categories (Mobile & Frontend / Backend & APIs / Database / Tools & DevOps) with animated proficiency bars, plus an "Also Experienced With" tag cloud
- **Tactile hover interactions** — cards lift with a soft glow shadow on hover (`.hover-lift` utility)
- **Contact form** — API route (`/api/contact`) sends a formatted email via [Resend](https://resend.com), with toast feedback via `sonner`
- **Scroll-to-top** button with a Framer Motion entrance/exit animation
- **Fully responsive** — mobile-first layout with a hamburger nav on small screens
- **Active section tracking** — navbar highlights the current section via `IntersectionObserver`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React, React Icons |
| Theming | next-themes |
| Notifications | Sonner |
| Email | Resend |
| Font | Inter (Google Fonts, via `next/font`) |

---

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact form API route (Resend)
│   ├── globals.css            # CSS variables, theme tokens & base styles
│   ├── layout.tsx             # Root layout, metadata, theme + background providers
│   └── page.tsx               # Page composition (section order)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Fixed navbar with scroll-spy active state
│   │   └── Footer.tsx         # Footer with nav links and socials
│   ├── sections/
│   │   ├── Hero.tsx           # Hero: typing animation + code card
│   │   ├── About.tsx          # Bio, stats, trait cards
│   │   ├── Experience.tsx     # Tabbed work history timeline
│   │   ├── Projects.tsx       # Filterable project grid with platform links
│   │   ├── Skills.tsx         # Tabbed skill bars by category
│   │   ├── Education.tsx      # Education card
│   │   └── Contact.tsx        # Contact info + email form
│   ├── ui/
│   │   ├── AnimatedBackground.tsx  # Global drifting gradient-orb background
│   │   ├── Button.tsx              # cva-based button variants
│   │   ├── SectionHeading.tsx      # Shared eyebrow/title/description heading
│   │   ├── ScrollToTop.tsx
│   │   └── ThemeToggle.tsx
│   └── providers/
│       └── ThemeProvider.tsx  # next-themes wrapper
└── lib/
    ├── data.ts                # All site content (edit this to personalize)
    ├── socials.tsx            # Social link definitions
    └── utils.ts               # cn() Tailwind class-merge helper
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/abhishekmittall/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

Get your free API key from [resend.com](https://resend.com). The contact form will not work without it — the emails are sent to the address hardcoded in `src/app/api/contact/route.ts`.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Lint

```bash
npm run lint
```

### Production Build

```bash
npm run build
npm run start
```

---

## Customization

All personal content lives in **`src/lib/data.ts`**. Edit that one file to update:

| Export | What it controls |
|---|---|
| `personalInfo` | Name, title, taglines, bio, email, phone, location, social URLs, resume links |
| `experiences` | Work history — roles, companies, bullet points, tech stack per role |
| `projects` | Project cards — description, tech stack, and Android/iOS/Web/source links |
| `skills` | Skill bars grouped by tab (`frontend`, `backend`, `database`, `tools`) with proficiency levels (0–100) |
| `education` | Degree, institution, grade, description |
| `certifications` | Certifications list |
| `stats` | Stats row (currently duplicated/overridden by a local array in `About.tsx` — keep both in sync if you change it) |
| `hobbies` | Hobbies list |

Social icons/links are defined separately in `src/lib/socials.tsx`. The "Also Experienced With" tag list and the tab labels for Skills are defined directly in `src/components/sections/Skills.tsx`.

### Profile Photos

Replace the images in `/public/`:

```
public/profile-light.png   ← shown in light mode
public/profile-dark.png    ← shown in dark mode
```

### Resume

Replace `public/Abhishek_Mittal_Resume.pdf`, or point `personalInfo.resume` / `personalInfo.resumeDownload` in `src/lib/data.ts` at an external link (e.g. Google Drive).

### Theme Colors

Colors are defined as CSS variables in `src/app/globals.css`:

```css
/* Dark mode (default) */
--cyan:  #16f2b3;
--pink:  #e91e63;
--bg:    #0d1224;
--bg-alt: #060c18;

/* Light mode */
--cyan:  #0891b2;
--pink:  #db2777;
--bg:    #f0f5ff;
--bg-alt: #e6edff;
```

The same variables drive the animated background orbs in `AnimatedBackground.tsx` and the `hover-lift` shadow color, so changing them updates the whole site consistently.

### Animated Background

`src/components/ui/AnimatedBackground.tsx` renders a fixed, full-viewport layer with a faint dot grid and four blurred gradient orbs that drift and pulse on an infinite loop (Framer Motion). It's mounted once in `src/app/layout.tsx` so it sits behind every page/section. To adjust intensity, edit the orb sizes, opacity (`/8`, `/10`), blur, or animation `duration` values in that file. Motion is automatically disabled for users with `prefers-reduced-motion` enabled.

---

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add `RESEND_API_KEY` under **Project Settings → Environment Variables**
4. Deploy

### Other Platforms

Any platform supporting Next.js works (Netlify, Railway, etc.). Just set the `RESEND_API_KEY` environment variable.

---

## License

MIT — free to use as a template. A credit or link back is appreciated but not required.

---

## Contact

**Abhishek Mittal**
[abhishekbxn@gmail.com](mailto:abhishekbxn@gmail.com) · [LinkedIn](https://www.linkedin.com/in/abhishekmittall/) · [GitHub](https://github.com/abhishekmittall) · [X](https://x.com/_erabhishek)
