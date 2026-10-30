import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/content';
import './globals.css';
export const metadata: Metadata = {metadataBase:new URL(site.origin),title:{default:'UNICA — Every Child. Every Possibility.',template:'%s | UNICA Therapy Centre'},description:'Personalised therapy and developmental support for children in Villupuram. Explore occupational therapy, speech therapy, physiotherapy, counselling, special education, and ABA.',openGraph:{title:'UNICA — Every Child. Every Possibility.',description:'Because every small step deserves a celebration.',type:'website',locale:'en_IN',images:[{url:'/images/therapy_banner2-Duinhy3i.webp',alt:'Child therapy at UNICA'}]},twitter:{card:'summary_large_image'},robots:{index:true,follow:true}};
export const viewport:Viewport={width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#faf7f0'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
