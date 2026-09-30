import type { Metadata } from 'next';
import Link from 'next/link';
import { ResourceLibrary } from '@/components/resource-library';
import { socials } from '@/data/site';
import './resources.css';

export const metadata: Metadata = { title: 'Resources' };

export default function ResourcesPage() {
  return <>
    <section className="resource-hero"><div className="wrap resource-hero-inner"><div><span className="resource-eyebrow">THE STUDY VERSE / RESOURCES</span><h1>Better tools.<br /><em>Less guesswork.</em></h1><p>A growing home for study guides, practice and useful revision material from The Study Verse. We are preparing the first releases now.</p><a className="resource-hero-link" href="#collections">Explore the collections <span aria-hidden="true">↓</span></a></div><div className="resource-hero-art" aria-hidden="true"><div className="resource-art-sheet sheet-back"><span>TSV / STUDY NOTES</span><strong>LEARN IT.<br />USE IT.</strong><small>01 / THE START</small></div><div className="resource-art-sheet sheet-front"><span>THE STUDY VERSE</span><strong>STUDY<br /><i>BETTER.</i></strong><small>RESOURCES / 2026</small></div><span className="resource-art-orbit" /></div></div></section>
    <section className="resource-guide wrap"><div className="resource-guide-copy"><span className="resource-eyebrow">FIRST DROP / FREE GUIDE</span><h2>A good place<br />to <em>start.</em></h2><p>A free Study Verse guide is in the works. It will appear here when the content is finished, with a direct download and a clear look at what is inside.</p><a href={socials.discord} target="_blank" rel="noopener noreferrer">Join the community for updates <span aria-hidden="true">↗</span></a></div><div className="resource-guide-art" aria-hidden="true"><span>FREE GUIDE</span><div>START<br />HERE<span>.</span></div><small>THE STUDY VERSE / COMING SOON</small></div></section>
    <div id="collections"><ResourceLibrary /></div>
    <section className="resource-ending"><div className="wrap"><span className="resource-eyebrow">STUDY TOGETHER</span><h2>More is on<br /><em>the way.</em></h2><p>While the library grows, you can join the community or explore the first live masterclass.</p><div className="resource-ending-links"><Link href="/masterclasses/gcse-chemistry">Explore Chemistry <span aria-hidden="true">↗</span></Link><a href={socials.discord} target="_blank" rel="noopener noreferrer">Join Discord <span aria-hidden="true">↗</span></a></div></div></section>
  </>;
}
