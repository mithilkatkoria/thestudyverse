# The Study Verse

Creator-led education site for Ash, with a live GCSE Chemistry masterclass, Discord community and room for future courses, resources, tutoring and TSV VIP.

## Local development

Requires Node 22.13+ and pnpm. Copy `.env.example` to `.env.local`, then run:

```sh
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Run checks with:

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

The site remains readable without credentials. Booking and newsletter submissions show honest unavailable states until configured.

## Deployment to Vercel

Import this repository as a Next.js project. Set the root to this folder, install command to `pnpm install`, build command to `pnpm build` and production domain in `NEXT_PUBLIC_SITE_URL`. Set the environment variables below in Vercel, then redeploy.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site and Stripe return URL. |
| `NEXT_PUBLIC_CHECKOUT_ENABLED` | Set `true` only for server-side Stripe Checkout. |
| `NEXT_PUBLIC_STRIPE_CHEMISTRY_PAYMENT_LINK` | Payment Link fallback. Must be a real Stripe URL. |
| `STRIPE_SECRET_KEY` | Server-side Checkout and success validation. |
| `STRIPE_CHEMISTRY_PRICE_ID` | Stripe Price set to GBP £39.99. |
| `STRIPE_WEBHOOK_SECRET` | Signature verification for `/api/stripe/webhook`. |
| `RESEND_API_KEY` | Transactional email and newsletter contacts. |
| `RESEND_SEGMENT_ID` | Newsletter segment in current Resend Contacts API. |
| `RESEND_AUDIENCE_ID` | Legacy alias for the segment ID. |
| `RESEND_FROM_EMAIL` | Verified sending identity for booking email. |

## Stripe setup

Create a GBP £39.99 product and Price. Configure Checkout credentials and the webhook endpoint `https://YOUR_DOMAIN/api/stripe/webhook` for `checkout.session.completed`. The webhook verifies the Stripe signature. It sends an idempotent confirmation email when Resend is configured. The success page retrieves the Stripe session server-side and checks payment status and product metadata. A Payment Link can be used instead, but its return flow must be configured in Stripe and does not use this site's session-validation page.

No database or inventory source is configured. The public capacity is 200, but the site cannot enforce remaining seats. Set a Stripe quantity limit or add durable inventory and order persistence before selling a potentially full event.

## Email setup

Create a Resend segment, set its ID and API key, and verify the sending domain. The newsletter requires explicit consent and stores only the email in Resend. Purchase email is transactional. Never add a buyer to the marketing segment without consent.

## Content and assets

See [CONTENT_CONFIG.md](CONTENT_CONFIG.md) and [ASSET_TODO.md](ASSET_TODO.md). The Discord endpoint uses the current invite code and returns snapshot counts when Discord is unavailable. The legal pages are drafts requiring review before payment opens.

## Future roadmap

The routes for courses, resources, tutoring and VIP exist with honest coming-soon content. Account creation, paid memberships, recorded lessons and durable order storage can be added when product requirements and credentials are confirmed.
