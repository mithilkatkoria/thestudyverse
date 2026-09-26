import type { MetadataRoute } from 'next';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/',disallow:['/api/','/masterclasses/gcse-chemistry/success']},sitemap:`${process.env.NEXT_PUBLIC_SITE_URL||'https://thestudyverse.co.uk'}/sitemap.xml`};}
