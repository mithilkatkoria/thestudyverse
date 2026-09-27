import type { Metadata, Viewport } from 'next';
import { Footer, Header } from '@/components/tsv';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'The Study Verse | Masterclasses, Community & Study Resources', template: '%s | The Study Verse' },
  description: 'A student-built study community by Ash offering GCSE masterclasses, study resources, tutoring and a community of thousands of students.',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true, nosnippet: true } },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' }], apple: '/apple-touch-icon.png' },
};
export const viewport: Viewport = { themeColor: '#f7f4fb', colorScheme: 'light' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body></html>;
}
