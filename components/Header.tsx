'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { image } from '@/lib/content';
const links = [['Our story','/about'],['Our therapies','/therapies'],['Our team','/team'],['Get in touch','/contact']];
export function Header(){
 const [open,setOpen]=useState(false); const button=useRef<HTMLButtonElement>(null);const panel=useRef<HTMLElement>(null);
 useEffect(()=>{if(!open)return;const before=document.body.style.overflow;document.body.style.overflow='hidden';const first=panel.current?.querySelector<HTMLAnchorElement>('a');first?.focus();function key(e:KeyboardEvent){if(e.key==='Escape'){setOpen(false);button.current?.focus();}if(e.key==='Tab'){const items=[button.current,...Array.from(panel.current?.querySelectorAll<HTMLAnchorElement>('a')||[])].filter(Boolean) as HTMLElement[];const first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}}document.addEventListener('keydown',key);return()=>{document.body.style.overflow=before;document.removeEventListener('keydown',key);};},[open]);
 return <><a className="skip-link" href="#main">Skip to content</a><header className="header"><Link href="/" className="brand" aria-label="UNICA home" onClick={()=>setOpen(false)}><Image src={image.logo} alt="UNICA Multi Speciality Therapy Centre" width={58} height={58} priority/></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><Link className="button small header-cta" href="/contact">Book a consultation <ArrowUpRight size={16}/></Link><button className="menu-button" ref={button} aria-expanded={open} aria-controls="mobile-nav" aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>{open&&<nav id="mobile-nav" ref={panel} className="mobile-nav" aria-label="Mobile navigation">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}<ArrowUpRight/></Link>)}<Link className="button" href="/contact" onClick={()=>setOpen(false)}>Book a consultation</Link></nav>}</>;
}
