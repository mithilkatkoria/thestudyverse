import type { Metadata, Viewport } from 'next';
import { Footer, Header } from '@/components/tsv';
import { site, socials } from '@/data/site';
import './globals.css';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://thestudyverse.co.uk';
export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: 'The Study Verse | Masterclasses, Community & Study Resources', template: '%s | The Study Verse' },
  description: 'A student-built study community by Ash offering GCSE masterclasses, study resources, tutoring and a community of thousands of students.',
  alternates: { canonical: '/' },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' }], apple: '/apple-touch-icon.png' },
  openGraph: { type: 'website', siteName: 'The Study Verse', title: 'The Study Verse', description: 'Study smarter. Move faster.', images: ['/opengraph-image.png'] },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image.png'] },
};
export const viewport: Viewport = { themeColor: '#f7f5f9', colorScheme: 'light' };
const schema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'Organization', name: site.name, url: site.url, email: site.email, sameAs: [socials.tiktok, socials.instagram, socials.youtube, socials.discord] },
  { '@type': 'WebSite', name: site.name, url: site.url },
] };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></head><body><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body></html>;
}
