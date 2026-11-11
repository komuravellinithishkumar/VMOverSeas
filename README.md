# VM Overseas — Website (React + Vite)

Rebuilt from the Emergent preview build. Source files under `src/` are the original
app sources recovered from the preview's source map; Tailwind config matches the
original (Tailwind v3 + shadcn theme tokens).

## Run

```bash
npm install
npm run dev       # http://localhost:3000 (nodemon restarts Vite on config changes)
npm run build     # static output in dist/
npm run preview
```

Stack: React 19, react-router-dom 7, framer-motion, lenis (smooth scroll),
lucide-react, sonner, react-helmet-async, Tailwind CSS 3.

Fully static: no backend. Enquiries open WhatsApp pre-filled. `wrangler.jsonc` serves `dist/` on Cloudflare
with SPA fallback (do not add a `_redirects` catch-all; Cloudflare rejects it as a loop). On Netlify, add `public/_redirects` with `/* /index.html 200`.
