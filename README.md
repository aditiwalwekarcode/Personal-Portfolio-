# Aditi — Personal Portfolio & Engineering Space

A modern, creative, and long-term personal website built from the ground up for **Aditi**, CSE (Artificial Intelligence & Data Science) student at DES Pune University, Pune, India.

## 🧭 Philosophy & Vision

"Learning. Building. Experimenting."

Designed to grow alongside Aditi from first-year foundational coursework through hackathons, certifications, internships, major engineering milestones, and into her professional career.

---

## 🛠️ Architecture & Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 with bespoke Dark/Light theme design
- **Typography**: 
  - Display: *Syne* & *Instrument Serif*
  - Body: *Plus Jakarta Sans*
  - Technical / Monospace: *JetBrains Mono* (tabular numerals)
- **Data Architecture**: Single source of truth in `src/data/portfolioData.ts` and `public/js/data.js`
- **Asset Pipeline**: Static documents served via `assets/documents/Aditi_Resume.pdf` and `public/assets/documents/Aditi_Resume.pdf`

---

## 📄 Resume System & Zero-Code Workflow

The resume is decoupled from code changes to ensure seamless updates throughout college:

1. Export your updated resume as:
   ```
   assets/documents/Aditi_Resume.pdf
   ```
   (and/or `public/assets/documents/Aditi_Resume.pdf`)
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update resume with new milestones"
   git push
   ```
3. Vercel / GitHub automatically deploys the updated resume without touching any TypeScript or UI code!
4. Both **View Resume** (opens in a new tab) and **Download Resume** (downloads with the exact filename) will point to your updated document immediately.

---

## 📁 Directory Structure

```
portfolio/
│
├── index.html                  # Semantic entry point with SEO, OG tags, Schema.org
├── metadata.json               # AI Studio application metadata
├── package.json
├── tsconfig.json
├── vite.config.ts
│
├── public/
│   ├── js/
│   │   └── data.js             # Portable standalone data representation
│   └── assets/
│       └── documents/
│           └── Aditi_Resume.pdf
│
├── assets/
│   └── documents/
│       └── Aditi_Resume.pdf
│
└── src/
    ├── main.tsx
    ├── App.tsx                 # Core page composition
    ├── index.css               # Architectural grid patterns & typography
    ├── context/
    │   └── ThemeContext.tsx    # Persistent Light / Dark theme controller
    ├── data/
    │   └── portfolioData.ts    # Single source of truth for all content
    └── components/
        ├── Navbar.tsx          # Top Bar Contract (3 zones) + mobile drawer
        ├── Hero.tsx            # Typographic presence & interactive constellation
        ├── About.tsx           # Broadsheet editorial narrative & interests
        ├── CurrentlyExploring.tsx # Active learning radar & module spotlights
        ├── Skills.tsx          # Factual technical foundation (zero fake percentages)
        ├── Projects.tsx        # Varied layout showcase (CampusMove, Mausam, Finanza, etc.)
        ├── ProjectVisuals.tsx  # Interactive concept visualizers
        ├── ProjectModal.tsx    # Accessible deep-dive inspect modal
        ├── Achievements.tsx    # Milestone timeline (AWS Ignite 2026 Bedrock)
        ├── Education.tsx       # DES Pune University B.Tech CSE (AI & DS)
        ├── ResumeSection.tsx   # Document access & update workflow
        ├── ResumeModal.tsx     # In-page PDF & digital backup reader
        ├── Contact.tsx         # Direct email, social matrix & dispatch form
        └── Footer.tsx          # Quiet copyright & back-to-top
```

---

## 🚀 Development & Build

```bash
# Run local development server (port 3000)
npm run dev

# Lint & type-check
npm run lint

# Production build
npm run build
```
