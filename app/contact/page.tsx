import type { Metadata } from 'next';
import { ContactSection } from '@/components/ContactSection';
export const metadata:Metadata={title:'Contact & Consultation',description:'Call UNICA on 7200701127 or enquire through WhatsApp. Find directions to our therapy centre in Villupuram, Tamil Nadu.',alternates:{canonical:'/contact/'}};
export default function Contact(){return <main id="main" className="inner-page contact-page"><h1 className="sr-only">Contact UNICA and book a consultation</h1><ContactSection/></main>}
