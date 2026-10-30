import type { MetadataRoute } from 'next';
import { site, therapies } from '@/lib/content';
export const dynamic="force-static";
export default function sitemap(): MetadataRoute.Sitemap {return ['', '/about','/therapies','/team','/contact','/privacy',...therapies.map(t=>`/therapies/${t.slug}`)].map(path=>({url:`${site.origin}${path}/`,changeFrequency:'monthly',priority:path===''?1:.7}));}
