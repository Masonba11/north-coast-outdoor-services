# North Coast Outdoor Services Website

Production-ready Next.js website for **North Coast Outdoor Services**, a Vancouver, WA exterior cleaning company.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Resend (optional email delivery)

## Local development

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Environment variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production domain for canonical/OG/sitemap |
| `RESEND_API_KEY` | Enables real quote email delivery |
| `QUOTE_FROM_EMAIL` | Verified Resend from address |
| `QUOTE_TO_EMAIL` | Destination inbox (defaults to `info@northcoastoutdoorservices.com`) |

### Quote form status

The supplied form ID `543f6c71-1eeb-4be4-bf17-9e5916087b08` is stored in `lib/business-config.ts` as a reference.

No existing form-provider integration was found in the repository, so submissions are handled by `/api/quote` with:

- Server-side Zod validation
- Honeypot spam protection
- Basic rate limiting
- Resend email notifications when `RESEND_API_KEY` is configured
- Safe logged mode when email credentials are missing

Real email delivery is **untested** until Resend credentials are added.

## Logo

Company logo asset:

`public/images/north-coast-logo.jpg`

## Scripts

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

## Deploy

Designed for Vercel. Set the environment variables above in the project settings before production launch.
