'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export function MotionScene({children}:{children:React.ReactNode}){
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   const ctx=gsap.context(()=>{
    const entry=gsap.timeline({defaults:{ease:'power3.out'}});
    entry.from('.hero-title-word',{yPercent:110,rotate:2,duration:1.15}).from('.hero-script',{clipPath:'inset(0 100% 0 -10%)',duration:1.1},.25).from('.dream-hero-copy>p,.dream-hero-actions',{y:14,duration:.8,stagger:.12},.5);
    const heroPath=root.current?.querySelector<SVGPathElement>('.hero-thread-path');const light=root.current?.querySelector<SVGCircleElement>('.hero-thread-light');
    if(heroPath){const length=heroPath.getTotalLength();const progress={value:0};entry.fromTo(heroPath,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,duration:2.3,ease:'power1.inOut'},.3);if(light)entry.to(progress,{value:1,duration:2.3,ease:'power1.inOut',onUpdate:()=>{const point=heroPath.getPointAtLength(length*progress.value);gsap.set(light,{attr:{cx:point.x,cy:point.y}});}},.3);}
    entry.from('.premium-art-scene',{clipPath:'inset(6% 6% 6% 6% round 45%)',scale:.96,duration:1.4},.1).from('.bloom-petal',{scale:.85,transformOrigin:'320px 320px',stagger:.08,duration:1.2},.3);
    gsap.from('.therapy-tile-perspective',{y:40,rotation:5,stagger:.07,duration:1,ease:'power3.out',clearProps:'transform',scrollTrigger:{trigger:'.dream-therapies',start:'top 90%',once:true}});
    gsap.fromTo('.therapy-orbit',{scaleX:.8,rotation:-9},{scaleX:1.04,rotation:3,ease:'none',scrollTrigger:{trigger:'.dream-therapies',start:'top bottom',end:'bottom top',scrub:1}});
    const path=root.current?.querySelector<SVGPathElement>('.journey-line');if(path){const length=path.getTotalLength();gsap.fromTo(path,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:'.visual-journey',start:'top 78%',end:'bottom 48%',scrub:.5}});}
    gsap.utils.toArray<HTMLElement>('.visual-milestone').forEach((el,i)=>{gsap.from(el.querySelector('.milestone-icon'),{scale:.7,rotation:-20,duration:.65,ease:'back.out(1.4)',scrollTrigger:{trigger:'.visual-journey',start:`top ${80-i*6}%`,once:true}});ScrollTrigger.create({trigger:el,start:'top 70%',end:'bottom 25%',toggleClass:'milestone-current'});});
    const stage=root.current?.querySelector<HTMLElement>('.care-story-stage');
    gsap.utils.toArray<HTMLElement>('.care-chapter').forEach((chapter,i)=>{ScrollTrigger.create({trigger:chapter,start:'top 58%',end:'bottom 45%',onEnter:()=>stage?.setAttribute('data-active-scene',String(i)),onEnterBack:()=>stage?.setAttribute('data-active-scene',String(i)),onLeaveBack:()=>{if(i===0)stage?.setAttribute('data-active-scene','0');},toggleClass:'chapter-current'});gsap.from(chapter.querySelector('h3'),{clipPath:'inset(0 0 90% 0)',y:18,duration:.9,ease:'power3.out',scrollTrigger:{trigger:chapter,start:'top 85%',once:true}});});
    const line=root.current?.querySelector<SVGPathElement>('.care-story-stage .care-golden-line');if(line){const len=line.getTotalLength();gsap.fromTo(line,{strokeDasharray:len,strokeDashoffset:len},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:'.care-story-layout',start:'top 65%',end:'bottom 70%',scrub:.7}});}
    gsap.from('.care-story-heading em',{clipPath:'inset(0 100% 0 0)',duration:1.25,ease:'power2.out',scrollTrigger:{trigger:'.care-story-heading',start:'top 80%',once:true}});
    gsap.from('.family-title-line',{yPercent:45,clipPath:'inset(0 0 100% 0)',duration:.9,ease:'power3.out',scrollTrigger:{trigger:'.family-close',start:'top 83%',once:true}});
    gsap.from('.family-message h2 em',{clipPath:'inset(0 100% 0 0)',duration:1.2,ease:'power2.out',scrollTrigger:{trigger:'.family-close',start:'top 77%',once:true}});
    gsap.fromTo('.family-orbit',{rotation:-35,scale:.8},{rotation:0,scale:1.15,ease:'none',scrollTrigger:{trigger:'.family-close',start:'top bottom',end:'bottom top',scrub:1}});
   },root);return()=>{ctx.revert();root.current?.querySelector('.care-story-stage')?.setAttribute('data-active-scene','0');};
  });
  mm.add('(min-width: 960px) and (prefers-reduced-motion: no-preference)',()=>{const ctx=gsap.context(()=>{
   gsap.to('.growth-sculpture',{yPercent:5,rotation:3,ease:'none',scrollTrigger:{trigger:'.dream-hero',start:'top top',end:'bottom top',scrub:1}});
   gsap.fromTo('.visual-journey>img',{scale:1.08,yPercent:-5},{scale:1,yPercent:4,ease:'none',scrollTrigger:{trigger:'.visual-journey',start:'top bottom',end:'bottom top',scrub:1}});
   gsap.fromTo('.care-story-stage .care-hands',{rotation:1,transformOrigin:'350px 420px'},{rotation:-1,ease:'none',scrollTrigger:{trigger:'.care-story-chapters',start:'top 60%',end:'bottom 80%',scrub:1}});
   gsap.fromTo('.care-story-stage .care-bud',{rotation:-5,transformOrigin:'353px 205px'},{rotation:5,ease:'none',scrollTrigger:{trigger:'.care-story-chapters',start:'top bottom',end:'bottom top',scrub:1}});
   gsap.fromTo('.family-close',{clipPath:'inset(3% 2% 0 2% round 55px 55px 0 0)'},{clipPath:'inset(0% 0% 0 0 round 0px)',ease:'none',scrollTrigger:{trigger:'.family-close',start:'top 92%',end:'top 40%',scrub:.5}});
  },root);return()=>ctx.revert();});
  document.fonts.ready.then(()=>ScrollTrigger.refresh());return()=>mm.revert();
 },[]);
 return <div ref={root}>{children}</div>;
}
