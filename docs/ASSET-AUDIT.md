# UNICA visual asset audit — 30 October 2026

## Current direction: user-supplied “Every Step Matters” reference

The user supplied `Every Step Matters_ Unica Therapy Centre.png` and requested that visual direction. The reference is used to guide composition, warm tones, flowing shapes, butterfly/golden-light imagery, tactile service icons, and compact section rhythm. The screenshot itself is **not** embedded or used as the website. All headlines, buttons, service exploration, navigation, forms, and map are live HTML/React.

### Current generated artwork

The built-in `image_gen.imagegen` tool created original assets for this project. See [the complete prompt set and output filenames](IMAGE-GENERATION.md).

- `public/generated/hero-butterfly.webp`: original representative AI artwork of a child and butterfly. A visible caption identifies the image as AI generated; alternative text explicitly says this is not a UNICA patient.
- `public/generated/journey-clouds.webp`: original conceptual child/stairway/cloud artwork. The visible caption clarifies that every child’s pace differs and that the artwork is conceptual; it is not a promised clinical outcome or image of a real patient. Also used as conceptual artwork on the team page without implying a staff roster.
- `public/generated/{therapy-slug}.webp`: six original transparent 3D clay-style therapy icons, extracted from the generated sprite sheet and optimised as individual WebP assets. Used in the homepage, service list, and dedicated therapy pages.

No generated person is presented as actual UNICA staff or patients. The supplied logo is preserved and was not regenerated. No testimonial, quotation from a parent, outcome statistic, or unverified credential from the visual reference is published.

### Other current assets

- `public/images/logo-BiscYrva.webp`: authentic existing UNICA logo retained under the user’s explicit instruction. Its design and wording are preserved.
- `components/CareIllustration.tsx`: original animated vector artwork authored for UNICA. It depicts an Indian therapist and child exploring building blocks together and is explicitly described as representative illustration. It is not a photograph of staff or patients. The same illustration is used on Home and About.
- The two former Pexels photographs (`public/photos/play.webp`, `public/photos/connection.webp`) have been removed from active pages and public assets following the user's request. No foreign stock photography remains.
- Locally hosted Manrope, DM Sans, and Caveat from Google Fonts under SIL Open Font License. License files are beside the fonts in `public/fonts/`. Sources: https://github.com/google/fonts/tree/main/ofl/manrope , https://github.com/google/fonts/tree/main/ofl/dmsans , https://github.com/google/fonts/tree/main/ofl/caveat .

## Prior reference-site image removal

The first implementation downloaded imagery from the previous UNICA website (`euphonious-pastelito-feb3ac.netlify.app`). The subsequent brief prohibited that source for imagery. All ten non-logo assets were removed from active source and production output. No proprietary Scrolltide code or imagery is used.

Removed: `therapy_banner2-Duinhy3i.webp`, `therapy_1-MliD7-vp.webp`, `therapy_3-TEkNuQPl.webp`, `team-DB-z1uWQ.webp`, `Occupational_therapy-BJsVRAkP.webp`, `Speech_therapy-DYXXaZSB.webp`, `physio-BIe8wjuY.webp`, `Psychological_counselling-BZNC1j4Y.webp`, `Special_education-C2zeHziK.webp`, and `Behavior_therapy-BoTcndHK.webp`.

Git history retains previous revisions for version control; removed files are not served by the current build. Verified phone numbers, founding date, services, and the exact user-provided Google Maps embed remain preserved. Current staff credentials, street address, hours, testimonials, and clinical outcomes are not inferred from any image.

## Creative enhancement

The current animated illustration, scene transforms, interaction feedback and route transitions are documented in [MOTION-DESIGN.md](MOTION-DESIGN.md). No new reference-site image or stock photo was introduced for this enhancement.

## 16 November 2026 — premium opening and care visual

The child-and-butterfly hero was removed from the homepage and social-sharing metadata, and retired from public assets. `components/GrowthSculpture.tsx` is original dimensional botanical SVG artwork representing six connected care areas. `components/BrighterTomorrowArt.tsx` replaces the character scene in the A Brighter Tomorrow section with original artwork of supporting hands and a growing seedling. Existing About-page artwork remains unchanged. The hero now prioritises consultation with a spacious ivory/navy composition, subtle sculpture motion, and verified centre context. No new stock image, reference image, or generated person was introduced.

The subsequent background refinement restores `public/generated/hero-butterfly.webp` solely as a decorative, softly blurred hero backdrop. An ivory overlay preserves text contrast; the sculpture remains the foreground visual. The image is original representative AI artwork, not a photograph of UNICA patients.
