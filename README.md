# Ravi Monani - Professional Portfolio

A professional, neutral-toned portfolio website built with [Astro](https://astro.build).
It uses a fixed sidebar layout, a structured section for each part of the profile, a blog
("Tech Updates"), and a free-mentorship booking flow powered by Calendly. Designed to be hosted
on Netlify with the source in GitHub.

> Content note: internal/proprietary tool names are intentionally generalized into impact-focused
> descriptions, and the site keeps a neutral professional tone throughout.

## Pages

| Page | Path | Content |
| --- | --- | --- |
| Home | `/` | Overview, headline stats, site map, focus areas, current role, featured projects & publications |
| About | `/about` | Photo, bio, focus areas, education, skills, interests |
| Experience | `/experience` | Roles across silicon, validation & research (timeline) |
| Research | `/research` | Research focus areas and funding |
| Publications | `/publications` | Peer-reviewed papers, talks, and industry technical papers |
| Projects | `/projects` | Impact-focused engineering & research projects |
| Achievements | `/achievements` | Industry recognition, academic honors & memberships |
| Featured | `/featured` | Media, interviews & recognition |
| Mentoring & Service | `/mentoring` | Peer review, advisory roles, mentorship |
| Tech Updates | `/blog` | Blog index + individual posts |
| Contact | `/contact` | Contact details + Calendly booking |

## Prerequisites

- [Node.js](https://nodejs.org) 18+ (built and tested on Node 20+)
- [Git](https://git-scm.com)

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:4321**. The dev server auto-reloads as you edit.

```bash
npm run build     # production build into ./dist
npm run preview   # serve the production build locally
```

## Editing content

Almost all text lives in one file: [`src/data/resume.ts`](src/data/resume.ts).
Update the values there (experience, projects, publications, achievements, featured, mentoring,
contact links) and the pages update automatically.

### Your photo

The headshot is at [`public/ravi-monani.jpg`](public/ravi-monani.jpg). Replace that file (keep the
same name) to swap the photo, or update `site.photo` in `src/data/resume.ts`.

### Set up the mentorship booking (Calendly)

1. Create a free event type at [Calendly](https://calendly.com) (e.g. "Free Mentorship - 30 min").
2. Copy its scheduling link, e.g. `https://calendly.com/your-handle/mentorship`.
3. Paste it into `CALENDLY_URL` in [`src/data/resume.ts`](src/data/resume.ts):

   ```ts
   export const CALENDLY_URL = "https://calendly.com/your-handle/mentorship";
   ```

When empty, the Contact page shows a graceful "email me" fallback instead of the calendar.

### Update your links

In `src/data/resume.ts`, replace the placeholder `linkedin` and `googleScholar` URLs in `contact`.
Set your final domain in `site.url` (in `resume.ts`) and `site` (in
[`astro.config.mjs`](astro.config.mjs)) so SEO tags and the canonical URL are correct.

### Add media links (Featured page)

Items in the `featured` array can each take an optional `url`. Add one to turn the title into a
link and reveal a "Read the feature" link:

```ts
{
  title: "Order Out of Chaos ...",
  outlet: "SecurityWeek",
  date: "2025",
  description: "...",
  url: "https://www.securityweek.com/...", // paste the real article URL
}
```

## Writing blog posts (Tech Updates)

Posts are Markdown files in [`src/content/blog/`](src/content/blog/). Create a new `.md` file with
this frontmatter:

```markdown
---
title: "Your post title"
description: "One-line summary used in listings and SEO."
date: 2026-06-01
tags: ["Security", "Validation"]
draft: false
---

Your content here. Use ## for section headings, **bold**, lists, etc.
```

The file name becomes the URL (e.g. `my-post.md` -> `/blog/my-post/`). Set `draft: true` to hide a
post from the site. Posts are sorted newest-first automatically.

## Deploy to GitHub + Netlify

### 1. Push the code to GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

> The `Exhibits/` folder is intentionally listed in `.gitignore` and will **not** be committed or
> published.

### 2. Connect the repo to Netlify

1. In [Netlify](https://app.netlify.com): **Add new site -> Import an existing project**.
2. Select your GitHub repository.
3. Netlify auto-detects settings from [`netlify.toml`](netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**. Every push to `main` triggers a new deploy.

### 3. Point your domain at Netlify

1. In your Netlify site: **Domain settings -> Add a domain** and enter your purchased domain.
2. Follow Netlify's DNS instructions (Netlify DNS, or `A` / `CNAME` records at your registrar).
3. Netlify provisions a free HTTPS certificate automatically.

## Tech stack

- **Astro** static site generator with Markdown content collections for the blog
- Fixed-sidebar layout; responsive top bar + slide-in menu on mobile
- Plain CSS with a design-token system in [`src/styles/global.css`](src/styles/global.css)
- Google Fonts: Spectral (headings) + Inter (body)
- Minimal vanilla JS for the mobile nav and scroll reveals

## Project structure

```
.
├── astro.config.mjs        # Astro + dev server config (port 4321)
├── netlify.toml            # Netlify build settings
├── public/                 # Static assets (photo, favicon)
│   └── ravi-monani.jpg
├── src/
│   ├── components/         # Sidebar, PageHeader
│   ├── content/blog/       # Blog posts (Markdown)
│   ├── content.config.ts   # Blog collection schema
│   ├── data/resume.ts      # ALL site content (edit here)
│   ├── layouts/            # BaseLayout (sidebar shell)
│   ├── pages/              # One file per route (+ blog/)
│   └── styles/global.css   # Design system + base styles
└── README.md
```
