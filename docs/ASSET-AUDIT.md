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
- `public/photos/play.webp`: representative stock photograph by Mikhail Nilov, **Therapist Playing with Redhead Boy**, Pexels photo 8654577. https://www.pexels.com/photo/therapist-playing-with-redhead-boy-8654577/ . Locally hosted and visibly labelled, not claimed to depict UNICA staff or patients.
- `public/photos/connection.webp`: representative stock photograph by Mikhail Nilov, **Children during Therapy**, Pexels photo 8653970. https://www.pexels.com/photo/children-during-therapy-8653970/ . Used on the About page with a representative-stock caption.
- Pexels license: https://www.pexels.com/license/ . These independently sourced images are not taken from the earlier reference websites, do not imply model endorsement, and should be replaced by consented centre photography when available.
- Locally hosted Manrope, DM Sans, and Caveat from Google Fonts under SIL Open Font License. License files are beside the fonts in `public/fonts/`. Sources: https://github.com/google/fonts/tree/main/ofl/manrope , https://github.com/google/fonts/tree/main/ofl/dmsans , https://github.com/google/fonts/tree/main/ofl/caveat .

## Prior reference-site image removal

The first implementation downloaded imagery from the previous UNICA website (`euphonious-pastelito-feb3ac.netlify.app`). The subsequent brief prohibited that source for imagery. All ten non-logo assets were removed from active source and production output. No proprietary Scrolltide code or imagery is used.

Removed: `therapy_banner2-Duinhy3i.webp`, `therapy_1-MliD7-vp.webp`, `therapy_3-TEkNuQPl.webp`, `team-DB-z1uWQ.webp`, `Occupational_therapy-BJsVRAkP.webp`, `Speech_therapy-DYXXaZSB.webp`, `physio-BIe8wjuY.webp`, `Psychological_counselling-BZNC1j4Y.webp`, `Special_education-C2zeHziK.webp`, and `Behavior_therapy-BoTcndHK.webp`.

Git history retains previous revisions for version control; removed files are not served by the current build. Verified phone numbers, founding date, services, and the exact user-provided Google Maps embed remain preserved. Current staff credentials, street address, hours, testimonials, and clinical outcomes are not inferred from any image.
