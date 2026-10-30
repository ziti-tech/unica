/** Original SVG composition: individual stepping stones connect into an open arch. */
export function PossibilityArt({className=''}:{className?:string}) {
 return <svg className={className} viewBox="0 0 1200 480" fill="none" aria-hidden="true">
 <defs><linearGradient id="archBlue" x1="660" y1="120" x2="850" y2="400" gradientUnits="userSpaceOnUse"><stop stopColor="#7CA9E2"/><stop offset="1" stopColor="#2E64AC"/></linearGradient><linearGradient id="stoneBlue" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#B5D0EE"/><stop offset="1" stopColor="#80A9DC"/></linearGradient><filter id="softShadow"><feGaussianBlur stdDeviation="13"/></filter><pattern id="artGrid" width="65" height="65" patternUnits="userSpaceOnUse"><path d="M65 0H0V65" stroke="#648AB2" strokeOpacity=".12"/></pattern></defs>
 <path d="M0 390L600 145 1200 390 600 650Z" fill="url(#artGrid)"/>
 <ellipse cx="625" cy="400" rx="340" ry="24" fill="#194777" opacity=".09" filter="url(#softShadow)"/>
 <g className="art-stone stone-one"><path d="M211 331Q211 315 245 315H355Q389 315 389 331V370Q389 395 300 395Q211 395 211 370Z" fill="#87A9CB"/><ellipse cx="300" cy="329" rx="89" ry="27" fill="#BCD3EB"/><ellipse cx="300" cy="329" rx="60" ry="17" stroke="#E3EEF9" strokeWidth="1.5"/></g>
 <g className="art-stone stone-two"><path d="M379 271Q379 250 420 250H510Q551 250 551 271V325Q551 350 465 350Q379 350 379 325Z" fill="#4D78AF"/><ellipse cx="465" cy="271" rx="86" ry="28" fill="#8BB2E1"/><path d="M448 271H482M465 254V288" stroke="#F6F5EE" strokeWidth="2"/></g>
 <g className="art-arch"><path d="M625 332V199C625 60 858 60 858 199V332L817 351V204C817 117 691 117 691 204V351Z" fill="#204E88"/><path d="M584 351V204C584 65 817 65 817 204V351H755V205C755 145 647 145 647 205V351Z" fill="url(#archBlue)"/><path d="M584 351V204C584 65 817 65 817 204" stroke="#C1D6F2" strokeWidth="1.5"/><path d="M647 351L691 332V205" stroke="#30639C" strokeWidth="1.5"/><path d="M755 351L796 332H858L817 351" fill="#254E82"/></g>
 <g className="art-stone stone-three"><path d="M817 343Q817 325 851 325H947Q981 325 981 343V371Q981 397 899 397Q817 397 817 371Z" fill="#C29235"/><ellipse cx="899" cy="343" rx="82" ry="26" fill="#F1C76A"/><ellipse cx="899" cy="343" rx="54" ry="16" stroke="#FAE6AC" strokeWidth="1.5"/></g>
 <path className="art-golden-path" d="M82 401C184 424 207 301 300 329C361 350 386 237 465 271S588 392 657 348C726 307 705 213 749 220C799 230 777 337 899 343C976 346 995 272 1115 281" stroke="#D9A333" strokeWidth="3" strokeLinecap="round"/>
 <g className="art-sun" stroke="#C39439" strokeWidth="2"><circle cx="1010" cy="138" r="25"/><path d="M1010 98V88M1010 188V178M970 138H960M1060 138H1050M982 110L975 103M1045 173L1038 166M982 166L975 173M1045 103L1038 110"/></g>
 <g fill="#1B4575"><circle cx="134" cy="266" r="4"/><circle cx="1050" cy="355" r="4"/></g><g stroke="#4078AD" strokeWidth="1.5"><path d="M161 211H181M171 201V221M987 414H1003M995 406V422"/></g>
 </svg>;
}
