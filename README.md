# UNICA — Little Steps. Limitless Possibilities.

An original, static-first Next.js App Router website for UNICA Multi Speciality Therapy Centre, Villupuram. Built with strict TypeScript, Tailwind CSS 4, GSAP/ScrollTrigger, Motion for React, and Lucide icons.

## Development

Requires Node.js 20.9+ (developed with Node.js 24).

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
```

The static production website is exported to `out/`. Serve that directory with directory-index routing and `404.html` fallback. `npm start` is not used with static export.

## Redesign and architecture

The October 2026 redesign replaces the original split hero, pastel expanding cards, and repetitive rounded layouts. The new opening is a centred typographic composition over an original stepping-stone SVG sculpture. A golden thread connects individual steps to an open arch. The rest of the homepage alternates editorial statements, an accessible therapy explorer, full-width representative photography, care principles, a vertical journey, native FAQ disclosures, and consultation actions.

- `app/page.tsx`: HeroScene, Approach, Connection, Care, JourneyPath, Questions and composition.
- `components/PossibilityArt.tsx`: original vector artwork, suitable for responsive motion without a 3D runtime.
- `components/MotionScene.tsx`: scoped GSAP entry, path drawing, scroll storytelling and desktop-only photo transformations; matchMedia contexts clean up on unmount and preference changes.
- `components/TherapyExperience.tsx`: six-service tab interface with touch controls, roving keyboard focus, arrow/Home/End key support, and Motion transitions. Mobile uses a compact two-column selector and full-width detail panel.
- `components/Header.tsx`: desktop and mobile navigation, focus containment, Escape handling, and consultation CTA.
- `components/ContactSection.tsx` and `ConsultationForm.tsx`: unchanged business handoffs and the exact map supplied by the user, presented in the new design.
- `app/`: home, about, therapy overview, six individual service pages, team, contact, privacy, robots, sitemap, and custom 404.

Design tokens in `app/globals.css`: warm off-white #F7F7F2, deep navy #142E51, soft blue #DCE8F6, and restrained gold #DFB05B. Locally served Manrope and DM Sans pair with a system Georgia italic accent. Fonts include their SIL license files. Desktop compositions, tablet spacing, and mobile layouts use separate breakpoints. Reduced motion disables the cinematic transforms; content remains readable and the journey is visible without animation. No pinned mobile scenes.

## Assets and factual content

See [the complete asset audit](docs/ASSET-AUDIT.md). All previous reference-site imagery except the authentic UNICA logo was removed. The original SVG illustrations and social graphic are locally authored. Two independently sourced, licensed Pexels photographs by Mikhail Nilov are locally served and explicitly identified as representative stock photography, not UNICA patients or staff. No proprietary Scrolltide assets or copied components are used.

Edit verified contacts, service copy, programme names, map URL, and journey descriptions in `lib/content.ts`. Set `NEXT_PUBLIC_SITE_URL` at build time to change canonical URLs. Change `site.whatsapp` using full international digits. The verified founding date, phone numbers and user-supplied map are preserved. Current staff names/credentials, street address, opening hours, and approved testimonials have not been supplied and are not invented. Replace stock photography with consented, approved centre images when available.

## Enquiry behaviour

The form validates name, phone and consent; a honeypot is included. It prepares an encoded WhatsApp draft. The parent reviews and sends the message in WhatsApp. Nothing is sent automatically, stored in a website database, or falsely reported as delivered. Phone and direct WhatsApp links remain available. Privacy information describes the WhatsApp handoff and Google Maps.

Automatic server-side delivery remains unconfigured because provider credentials and a verified destination were not supplied. Adding that requires a real server-side integration (or separately hosted API), spam verification and rate limiting, server validation, actual provider-acceptance handling, and an updated privacy notice. Never put provider secrets in `NEXT_PUBLIC_` variables.

## Verification

```sh
node scripts/browser-qa.mjs
```

Run against localhost:3000. Uses local Google Chrome; override `CHROME_PATH` for another installation. Tests requested widths 320, 375, 430, 768, 1024, 1440, and 1920; checks overflow and image loading; tests all routes at 320/768/1440, mobile navigation/Escape, six therapy tabs and keyboard controls, enquiry validation and draft links, FAQ disclosures, reduced motion and regular motion, and path drawing. Screenshots are saved to `/tmp/unica-redesign-*.png`. Browser runtime errors fail the script. Visual review and refinements accompany the automated checks. External Google Maps service rendering depends on network availability; the exact iframe and directions link are preserved.

## Deployment

The existing owner-private Sites project is retained in `.openai/hosting.json`, with `out` as its static directory. The Sites workflow runs checks, exports production, pushes the matching source commit and packages the corresponding output before private publication. No sharing settings are changed. Other static hosting providers can serve `out/` after building with their final canonical origin.
