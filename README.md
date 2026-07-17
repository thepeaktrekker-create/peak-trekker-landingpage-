# Peaktrekker — Flipper Grill Landing Page

Production Next.js port of the Claude Design export in [`peaktrekkker/project/`](peaktrekkker/project/)
(kept as design reference — not app code).

**One twist. Seven skewers. Perfect grilling anywhere.**

## Stack

- Next.js (App Router, TypeScript) + CSS Modules — 1:1 port of the design's bespoke CSS
- Bricolage Grotesque + Hanken Grotesk via `next/font`
- Supabase for the restock/updates email list (server action, service-role key server-side only)
- Vitest for unit tests

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm test         # vitest
npm run lint     # eslint
```

## Supabase setup (once)

1. Run [`supabase/waitlist.sql`](supabase/waitlist.sql) in the Supabase SQL editor.
2. Copy `.env.local.example` → `.env.local` and fill in your project URL + service role key.

Without env keys the site still renders; the email form shows a friendly
"temporarily unavailable" message instead of saving.

## Deploying to Vercel

Vercel auto-detects Next.js — no `vercel.json` needed. The only manual step is
configuring environment variables (they are **not** committed; `.env.local` is
gitignored).

1. **Import the repo** into Vercel (or run `vercel` from the project root).
2. **Add environment variables** in Project → Settings → Environment Variables,
   for the Production (and Preview) environments:

   | Name | Value | Notes |
   |------|-------|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | your Supabase project URL | safe to expose (ships to the browser) |
   | `SUPABASE_SERVICE_ROLE_KEY` | your service-role **secret** key | **server-only** — do NOT prefix with `NEXT_PUBLIC_` |

   The service-role key is used only in the `joinWaitlist` server action, so it
   stays on the server and is never sent to the client.
3. **Deploy.** Build command (`next build`) and output are detected automatically.
   Node version is pinned via `engines.node` in `package.json` (and `.nvmrc`).

> Redeploy after changing env vars — they are read at build/start time, so an
> existing deployment won't pick up new values until it rebuilds.

## Swapping the campaign link

All "Get the Flipper Grill" CTAs point to `CAMPAIGN_URL` in
[`lib/constants.ts`](lib/constants.ts). It's currently a **placeholder** (the
Peaktrekker Kickstarter creator profile) because the campaign isn't live yet.
Replace that one line with the real campaign URL when it launches.
