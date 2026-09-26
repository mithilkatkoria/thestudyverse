import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/tsv';
import { priceLabel, scheduleSummary } from '@/data/site';
export const metadata: Metadata = { title: 'Masterclasses', description: 'Live, exam-focused masterclasses from The Study Verse.', alternates: { canonical: '/masterclasses' } };
export default function Page(){return <><section className="page-hero wrap masterclasses-hero"><SectionLabel>LEARN WITH US</SectionLabel><h1>Masterclasses<br /><em>that move.</em></h1><p>Focused sessions built around the work students actually need to do: understand the content, face real questions and get quicker under exam conditions.</p></section><section className="page-section"><div className="wrap"><div className="section-top"><SectionLabel>UP NEXT / 001</SectionLabel></div><div className="product-header"><div><h2>GCSE<br /><em>Chemistry.</em></h2><p>10 hours. 2 days. Paper 1 + Paper 2. {priceLabel()}. {scheduleSummary()}</p><Link className="button button-dark" href="/masterclasses/gcse-chemistry">Explore the masterclass ↗</Link></div></div></div></section></>}
