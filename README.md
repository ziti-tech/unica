# UNICA — Every Step Matters

An artwork-led, responsive Next.js App Router website for UNICA Multi Speciality Therapy Centre, Villupuram. Strict TypeScript, Tailwind CSS 4, GSAP/ScrollTrigger, Motion for React, and Lucide icons.

## Run and build

Node.js 20.9+ required (developed with Node.js 24).

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

Development: http://localhost:3000. Production output: `out/`. Serve with directory indexes and `404.html` fallback. `npm start` does not serve static exports.

## Design and implementation

The current redesign follows the visual direction of the user-supplied “Every Step Matters” image: a warm ivory butterfly hero with a golden script accent, transparent clay-style therapy icons, floating pastel service tiles, a cloud-and-stairway journey, an original animated Indian care illustration, compact supporting sections, a welcoming navy family message and a clear consultation panel. The page is implemented in live HTML/React rather than displaying a screenshot. All generated children are identified as representative conceptual artwork.

- `app/page.tsx`: HeroScene, JourneyPath, FamilyClose, HomeMap and page composition.
- `components/CareStory.tsx` and `CareIllustration.tsx`: original Indian therapist/child vector illustration and three-chapter Connection/Discovery/Possibility story. Desktop pins the visual through native sticky while GSAP changes scene elements; phones use a compact unpinned narrative.
- `components/SiteInteractions.tsx` and `app/template.tsx`: shared button/link/pointer feedback, supporting-page reveals, progress, incoming page transitions and cleanup. See [motion design documentation](docs/MOTION-DESIGN.md).
- `components/TherapyExperience.tsx`: six independently focusable service tiles with pointer depth, touch feedback, animated detail panels, support areas and direct service links. Arrows/Home/End move focus; Enter/Space activate; Escape closes. Mobile uses three columns across two rows.
- `components/MotionScene.tsx`: scoped GSAP masked hero typography, travelling golden light, card entry/orbits, journey drawing, milestone focus, story progression, closing reveals and desktop image depth. Contexts and matchMedia clean up on unmount and preference changes. Reduced motion retains readable content with no cinematic transforms.
- `components/Header.tsx`: mobile focus containment/Escape, page-aware desktop navigation, preserved logo, and click-to-call action.
- `components/Footer.tsx`: compact branding, working social/contact/directions links and privacy.
- `components/ContactSection.tsx` and `ConsultationForm.tsx`: validated WhatsApp draft handoff, phone numbers and the exact supplied Google Maps embed.
- Routes: home, about, therapies overview, six therapy pages, team, contact, privacy, sitemap, robots and custom 404.

Design tokens and responsive styles: `app/globals.css`. Palette: warm ivory #FFF8EF, deep navy #082D4C, soft sky blue and gold #F5B243. Locally served Manrope and DM Sans pair with Caveat for the golden script. Native font licenses are included. Mobile uses a separately composed hero image crop, touch-friendly tiles and a vertical journey. No pinned mobile scroll scenes.

## Assets and editable content

[Asset audit](docs/ASSET-AUDIT.md) records all current assets and prior removals. [Generation prompts](docs/IMAGE-GENERATION.md) records the exact built-in image-generation prompt set and saved filenames. All production generated assets live in `public/generated/`. The UNICA logo is preserved. Former stock photographs have been removed from Home, About and public assets. The new Indian care scene is original animated SVG illustration, not a staff or patient likeness.

Edit contacts, WhatsApp international digits, service copy, programmes, map, and journey stages in `lib/content.ts`. `NEXT_PUBLIC_SITE_URL` changes the canonical origin at build time. Business facts provided by the user are retained. No current staff roster, qualifications, street address, hours, outcome claims or parent testimonials are invented. Approved centre photography can replace representative imagery when available.

## Enquiries and privacy

The enquiry form validates name, phone and consent, includes a honeypot, and prepares an encoded WhatsApp draft. The parent reviews and sends it in WhatsApp. Nothing is automatically submitted, falsely reported as delivered, or stored in a website database. Phone and direct WhatsApp links remain available.

Automatic server delivery remains unconfigured because provider credentials and a verified destination were not supplied. Adding it requires a real backend or separately hosted API, server validation, spam/rate-limit protections, verified delivery responses and updated privacy information. Never place secrets in `NEXT_PUBLIC_` variables.

The homepage offers an expandable location map; the contact page presents the full supplied map. External Google Maps rendering and WhatsApp delivery depend on those services.

## Browser verification

```sh
node scripts/browser-qa.mjs
```

Run with the development server at localhost:3000. The script uses installed Google Chrome; override `CHROME_PATH` for another installation. It verifies requested 320, 375, 430, 768, 1024, 1440 and 1920 widths; overflow and broken images; all routes at 320/768/1440; mobile navigation and Escape; six service tiles, keyboard activation and links; form validation and the WhatsApp draft; map expansion; reduced/normal motion; journey path drawing, all three care-story stages, the desktop sticky position, pointer depth and service keyboard shortcuts. Runtime and hydration errors fail QA. Screenshots are written to `/tmp/unica-reference-*.png` and inspected for desktop/mobile composition.

## Deploy

The existing owner-private Sites project is retained in `.openai/hosting.json`, exporting `out/`. The Sites source workflow pushes the exact source revision, packages its corresponding build, then privately deploys it. Sharing settings are preserved. For another static host, build with its canonical origin and upload `out/`.
