# Connected motion design — UNICA

## Visual direction

The supplied navy/ivory closing-section sample guides the whole site: warm ivory surfaces, deep navy care panels, restrained golden threads, Manrope/DM Sans typography and handwritten Caveat accents. Supporting pages now use the same buttons, form surfaces, service treatments, heading accents, contact links and footer interactions.

## Motion ownership

- `components/MotionScene.tsx` owns homepage choreography. The hero uses an overflow mask for the headline, a drawn golden thread with a travelling light, and desktop parallax. Therapy tiles enter as a staggered composition and the orbit changes with scroll. The journey line draws with scroll, individual milestones receive focus, and the background changes depth. The closing typography and orbit have their own reveal and scroll treatment.
- `components/CareStory.tsx` is a three-chapter story: Connection, Discovery, Possibility. Desktop keeps the illustration in a native CSS sticky frame while GSAP ScrollTrigger changes the scene, blocks, conversation and celebration symbols as each chapter enters. The illustration arm and hanging shapes respond to scroll; a golden line connects the activity. Native sticky avoids spacer jumps and leaves the content readable without JavaScript.
- `components/CareIllustration.tsx` is original SVG artwork depicting an Indian therapist and child with warm brown skin, a navy kurta, gold jewellery, and a purposeful building-block activity. It is an illustration, not a claim about actual staff or patients. The former stock photographs have been removed from the homepage, About page and public assets.
- `components/TherapyExperience.tsx` provides pointer-responsive depth, touch press feedback, selectable tiles, a detailed expanding care panel, three relevant support areas, and a direct service-page link. All six tiles remain independently keyboard focusable; arrows/Home/End move focus, Enter/Space activate, Escape closes. Touch needs no hover.
- `components/SiteInteractions.tsx` owns shared route-scoped animation, pointer delegation and the reading progress line. Supporting-page image masks, heading reveals, service rows and team links use the same motion language. A debounced ResizeObserver refreshes scroll measurements after content expansion without per-frame layout work.
- `app/template.tsx` remounts an incoming page surface and short golden transition line on navigation. No navigation action is delayed or intercepted; browser back/forward and Next.js links retain their normal behaviour.
- `app/globals.css` owns button sheen, press state, animated arrows, drawn underlines, nav feedback, input focus rings, map disclosure and footer feedback.

## Device and accessibility behaviour

Desktop (`min-width: 960px`) receives the sticky story, image-depth transforms and scene parallax. Tablets use a two-column unpinned narrative. Phones use one contained illustration followed by compact chapter blocks, a vertical journey and three-by-two therapy controls. No pinned mobile scene or scroll hijacking is used.

`prefers-reduced-motion` removes kinetic transforms, page transitions, depth, click pulses and progress animation. Artwork and every chapter remain visible; reduced-motion desktop uses a shorter static composition. Navigation, focus, form validation and disclosure states still work. Semantic content is not dependent on animations finishing. Decorative scene changes do not announce continuously to screen readers.

Every GSAP matchMedia context is reverted on teardown. Route-scoped observers, timers and delegated listeners are removed on navigation. Pointer feedback only runs for fine pointers with normal motion. No smooth-scroll dependency, 3D canvas, autoplay video or new runtime package was added.

## Verification

Browser QA checks all requested widths in reduced and normal motion, including all routes, image loading, overflow, mobile menu/Escape, validation, WhatsApp drafts, map disclosure, service selection/keyboard control, pointer response, and all three story states. A desktop assertion verifies that the visual stays at 105px while the middle chapter scrolls. Browser console hydration failures and runtime exceptions fail QA. Screenshots cover the expanded service panel, pinned story stages, About page, and desktop/mobile closing sections.
