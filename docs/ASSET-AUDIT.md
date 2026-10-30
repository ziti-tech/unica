# Asset provenance audit — 30 October 2026

The previous implementation downloaded imagery from the previous UNICA website (`euphonious-pastelito-feb3ac.netlify.app`). The redesign brief explicitly prohibits that source for imagery. All ten non-logo reference-site assets were removed from the active source and exported website. No images or proprietary code from Scrolltide are used. Git history retains the prior version for ordinary version control; those files are not served by the redesigned build.

| Previous asset | Origin | Action |
| --- | --- | --- |
| logo-BiscYrva.webp | Existing UNICA logo from prior website | Preserved unchanged in design and wording, as explicitly requested |
| therapy_banner2-Duinhy3i.webp | Prior UNICA website, photorealistic illustrative therapy scene | Removed |
| therapy_1-MliD7-vp.webp | Prior UNICA website, photorealistic illustrative therapy scene | Removed |
| therapy_3-TEkNuQPl.webp | Prior UNICA website, photorealistic illustrative therapy scene | Removed |
| team-DB-z1uWQ.webp | Prior UNICA website, centre group photograph | Removed |
| Occupational_therapy-BJsVRAkP.webp | Prior UNICA website, illustration | Removed |
| Speech_therapy-DYXXaZSB.webp | Prior UNICA website, illustration | Removed |
| physio-BIe8wjuY.webp | Prior UNICA website, illustration | Removed |
| Psychological_counselling-BZNC1j4Y.webp | Prior UNICA website, illustration | Removed |
| Special_education-C2zeHziK.webp | Prior UNICA website, illustration | Removed |
| Behavior_therapy-BoTcndHK.webp | Prior UNICA website, illustration | Removed |

## Current visual assets

- `components/PossibilityArt.tsx`: original vector composition authored for this redesign. Stepping stones, an open arch, and a connecting golden path. No reference-site imagery, copied component, or third-party template.
- `public/art/*.svg`: six original geometric therapy symbols authored for this redesign. Abstract symbols, not clinical depictions or outcome claims.
- `public/art/social-cover.png`: original typography and vector composition for social sharing.
- `public/photos/play.webp`: Mikhail Nilov, **Therapist Playing with Redhead Boy**, Pexels photo 8654577. https://www.pexels.com/photo/therapist-playing-with-redhead-boy-8654577/
- `public/photos/connection.webp`: Mikhail Nilov, **Children during Therapy**, Pexels photo 8653970. https://www.pexels.com/photo/children-during-therapy-8653970/
- Photographs are locally served, optimised WebP files, not hotlinks. Both come from Pexels directly, independently of the two reference sites. Pexels permits free website use and modification: https://www.pexels.com/license/ . Captions identify representative stock photography; no claim that the models are actual UNICA patients or staff, or endorse UNICA. Replace with approved, consented UNICA photographs when available.
- Manrope and DM Sans are locally served Google Fonts with SIL Open Font License files beside them in `public/fonts/`. Sources: https://github.com/google/fonts/tree/main/ofl/manrope and https://github.com/google/fonts/tree/main/ofl/dmsans .

The authenticated logo was already supplied through the existing implementation. No replacement logo has been generated. Business phone numbers, founding date, service names, and user-provided map remain unchanged. No current staff roster, qualifications, testimonials, hours, or street address is inferred from removed photographs.
