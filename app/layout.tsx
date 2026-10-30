import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/Header';
import { SiteInteractions } from '@/components/SiteInteractions';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/content';
import './globals.css';
export const metadata: Metadata = {metadataBase:new URL(site.origin),icons:{icon:'/images/logo-BiscYrva.webp'},title:{default:'UNICA — Every Step Matters.',template:'%s | UNICA Therapy Centre'},description:'Personalised therapy and developmental support for children in Villupuram. Explore occupational therapy, speech therapy, physiotherapy, counselling, special education, and ABA.',openGraph:{title:'UNICA — Every Step Matters.',description:'Because every small step deserves a celebration.',type:'website',locale:'en_IN',images:[{url:'/generated/hero-butterfly.webp',alt:'UNICA — Every Step Matters. AI-generated representative artwork.'}]},twitter:{card:'summary_large_image'},robots:{index:true,follow:true}};
export const viewport:Viewport={width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#fff8ef'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteInteractions/><Header/>{children}<Footer/></body></html>}
