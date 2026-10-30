# UNICA Multi Speciality Therapy Centre

A static-first Next.js App Router website with strict TypeScript, Tailwind CSS 4, GSAP ScrollTrigger, Motion for React, and Lucide icons. Includes home, about, therapies overview, six individual therapy pages, team, contact, privacy, sitemap, robots, and a custom 404 page.

## Run locally

Requires Node.js 20.9 or newer (developed with Node.js 24).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To verify and export:

```sh
npm run lint
npm run typecheck
npm run build
```

The production static website is written to `out/`. Serve that directory with a static host. `npm start` is not used for static exports. Trailing-slash routes must resolve to their directory’s `index.html`.

## Architecture and design

`app/` owns routes and page-specific metadata. `lib/content.ts` is the editable source for contacts, map, service content, images, programmes, and journey milestones. `components/` contains shared Header (including mobile navigation), Footer, TherapyExperience, MotionScene, ConsultationForm, and ContactSection. Homepage storytelling components live in `app/page.tsx`: HeroScene, GrowthStory, WhyUnica, JourneyPath, and Families. Approved testimonials were not supplied, so family-focused editorial content replaces fabricated quotes.

Design tokens are at the top of `app/globals.css`: navy #112B50, ivory #FAF7F0, gold #F5B942, muted teal, and soft service colours. Georgia display typography pairs with Arial body text using local system fonts, avoiding external font requests. Tailwind is available alongside component CSS. GSAP animations use scoped contexts and responsive matchMedia cleanup. Reduced motion bypasses scroll animation; content is readable without animation. Motion handles service-panel transitions; mobile uses vertical tap-accessible panels. The golden journey becomes an unpinned vertical timeline on mobile.

## Editable configuration

- Change the phone, landline, **WhatsApp number in full international digits**, Instagram, map embed, and directions in `lib/content.ts`.
- Set `NEXT_PUBLIC_SITE_URL` at build time for a different canonical production origin. The supplied private Sites origin is the default.
- Update therapy descriptions and service areas in the `therapies` array; slugs generate static pages automatically.
- The full street address, hours, current staff biographies/credentials, and approved testimonials were not verified. They are intentionally not invented. Add verified details before a public launch.
- Images were recovered from the prior website supplied in the brief. The logo is preserved in design and wording; only its file encoding was optimised. Therapy artwork is illustrative. Photorealistic therapy images from that site are explicitly labelled illustrative and must be replaced with consented, authentic UNICA photos before public launch. The centre group photo is from the prior site and does not establish the current roster. Confirm all usage rights and consent.

## Enquiries and privacy

The current form validates required name, phone, and consent, includes a honeypot, and builds an encoded WhatsApp draft. The parent must click “Review & send in WhatsApp” and send the message there. It never reports a simulated successful submission or appointment. No form details are stored by this website. The phone and direct WhatsApp links are also operational handoffs.

**Automatic server-side delivery is not configured.** No verified destination mailbox or provider credentials were supplied. This is a private review build with an explicit WhatsApp enquiry workflow. To accept submissions directly on the site, configure a real server-side provider endpoint, rate limiting and spam challenge verification, server validation, delivery errors, and confirmation only after the provider accepts the request. Switch away from static export or use a separately hosted API; do not place secrets in `NEXT_PUBLIC_` variables. Update privacy information to reflect the selected processor, retention, and delivery workflow before launch.

Google Maps loads the exact embed supplied by the user. WhatsApp, Instagram, and Google Maps are third-party services; the privacy page describes these handoffs.

## Deployment

The tracked `.openai/hosting.json` identifies the private Sites project and `out` as the static directory. Build with `npm run build`, then use the Sites source workflow to push the exact source, package the matching output, and deploy. For other static hosts upload `out/`, configure directory indexes and a custom 404, and rebuild with the final canonical origin.

## Verification

Run lint, TypeScript, and production export. Browser QA covers the requested 320, 360, 390, 430, 768, 1024, 1280, 1440 and 1920 widths, route rendering, broken images, mobile navigation, service panel interactions, and the WhatsApp draft. Run `node scripts/browser-qa.mjs` against a dev server at localhost:3000; it uses locally installed Google Chrome. Screenshots are written to `/tmp/`. Google Maps and WhatsApp destination availability depend on those services. No clinical outcomes or staff qualifications are inferred.
