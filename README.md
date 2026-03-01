# Abhishek Mittal — Developer Portfolio

Personal portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Features a dark-navy + pink/cyan design theme, smooth animations, and a functional contact form powered by Resend.

---

## Features

- **Dark / Light mode** — system-aware with manual toggle via `next-themes`
- **Animated hero** — typing role animation with syntax-highlighted code card
- **Sections** — Hero, About, Experience, Projects, Skills, Education, Contact
- **Projects showcase** — filter by stack, clickable Android / iOS / Web platform badges linking to Play Store / App Store
- **Skills** — tabbed view with animated progress bars
- **Contact form** — API route sends email via [Resend](https://resend.com)
- **Scroll-to-top** button with framer-motion entrance/exit animation
- **Fully responsive** — mobile-first layout, hamburger nav on small screens
- **Active section tracking** — navbar highlights current section via IntersectionObserver

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React, React Icons |
| Theming | next-themes |
| Email | Resend |
| Font | Inter (Google Fonts) |

---

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact form API route (Resend)
│   ├── globals.css            # CSS variables & base styles
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Page composition
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
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── ThemeToggle.tsx
│   └── providers/
│       └── ThemeProvider.tsx
└── lib/
    ├── data.ts                # All site content (edit this to personalize)
    ├── socials.ts             # Social link definitions
    └── utils.ts               # cn() Tailwind class helper
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

Get your free API key from [resend.com](https://resend.com). The contact form will not work without it.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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
| `personalInfo` | Name, bio, email, phone, location, social URLs, resume link |
| `experiences` | Work history — roles, companies, descriptions, tech stack |
| `projects` | Project cards — platform links (Android/iOS/Web/GitHub) |
| `skills` | Skill bars by category with proficiency levels (0–100) |
| `education` | Degree, institution, grade, description |
| `certifications` | Certifications list |
| `stats` | Stats row in About section |
| `hobbies` | Hobbies list |

### Profile Photos

Replace the images in `/public/`:

```
public/profile-light.png   ← shown in light mode
public/profile-dark.png    ← shown in dark mode
```

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
