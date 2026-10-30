'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export function MotionScene({children}:{children:React.ReactNode}){
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{const ctx=gsap.context(()=>{
 const entry=gsap.timeline({defaults:{ease:'power3.out'}});entry.from('.opening-title>span',{y:35,opacity:.35,duration:1,stagger:.12}).from('.art-stone,.art-arch',{y:24,opacity:.5,stagger:.1,duration:.9},.2);
 const heroPath=root.current?.querySelector<SVGPathElement>('.art-golden-path');if(heroPath){const length=heroPath.getTotalLength();entry.fromTo(heroPath,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,duration:2,ease:'power1.inOut'},.25);}
 gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>gsap.from(el,{y:25,duration:.85,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 94%',once:true}}));
 const path=root.current?.querySelector<SVGPathElement>('.journey-line');if(path){const len=path.getTotalLength();gsap.fromTo(path,{strokeDasharray:len,strokeDashoffset:len},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:'.journey-track',start:'top 70%',end:'bottom 65%',scrub:.6}});}
 gsap.utils.toArray<HTMLElement>('.journey-stage').forEach(el=>{ScrollTrigger.create({trigger:el,start:'top 65%',end:'bottom 30%',toggleClass:'stage-current'});});
 },root);return()=>ctx.revert();});mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)',()=>{const ctx=gsap.context(()=>{gsap.to('.possibility-art',{y:35,ease:'none',scrollTrigger:{trigger:'.opening',start:'top top',end:'bottom top',scrub:1}});gsap.fromTo('.connection-photo img',{scale:1.12,yPercent:-4},{scale:1,yPercent:4,ease:'none',scrollTrigger:{trigger:'.connection-scene',start:'top bottom',end:'bottom top',scrub:1}});},root);return()=>ctx.revert();});return()=>mm.revert();},[]);
 return <div ref={root}>{children}</div>;
}
