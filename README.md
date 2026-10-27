# IsraelKuti.com — Personal Professional Website

A project-first personal website for Israel Kuti, inspired by the clear storytelling, technical personality and interactive work presentation of https://www.uibeawuchi.com/ while using an original design and content structure.

## Stack
- Next.js 15 App Router
- TypeScript
- Tailwind CSS (with a custom editorial visual system in `app/globals.css`)
- Framer Motion
- Lucide React
- Optimised local image assets with `next/image`

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build` (default).
5. Output directory: leave the default blank; Next.js manages it.
6. Connect `israelkuti.com` in Vercel project settings once the domain is ready.

No environment variables are required for the current version. The contact actions use email links and a browser-based copy-email button. No contact form submissions are stored.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
public/
  documents/israel-kuti-cv.pdf
  images/...
```

## Content notes
- Professional history and core profile are based on the CV supplied for the project.
- Public-facing case studies are intentionally high-level; do not add confidential client details or unverified outcome claims.
- To update imagery, replace files in `public/images/` while retaining their names, or update the paths in `app/page.tsx`.
- To update the timeline or projects, edit the arrays at the top of `app/page.tsx`.
