import { CreatorGallery, NewsletterForm } from '@/components/tsv';
import { community, masterclass, priceLabel, scheduleSummary } from '@/data/site';
import { afterNewsletter, beforeNewsletter } from './referenceMarkup';
import './reference.css';

export const revalidate = 900;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] || character);
}

async function getMembers() {
  try {
    const response = await fetch(`https://discord.com/api/v10/invites/${community.inviteCode}?with_counts=true`, {
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(2500),
    });
    if (!response.ok) throw new Error('Discord unavailable');
    const data = await response.json();
    if (typeof data.approximate_member_count !== 'number') throw new Error('Count unavailable');
    return { value: data.approximate_member_count as number, live: true };
  } catch {
    return { value: community.fallbackMembers, live: false };
  }
}

export default async function Home() {
  const count = await getMembers();
  const markup = beforeNewsletter
    .replaceAll('__MEMBERS__', count.value.toLocaleString('en-GB'))
    .replaceAll('__COUNT_QUALIFIER__', count.live ? 'students currently' : 'students at last snapshot')
    .replaceAll('__SNAPSHOT_LABEL__', count.live ? '' : '(last snapshot)')
    .replaceAll('__PRICE__', escapeHtml(priceLabel()))
    .replaceAll('__CAPACITY__', String(masterclass.capacity))
    .replaceAll('__SCHEDULE__', escapeHtml(scheduleSummary()));
  const marker = '<section class="future"';
  const index = markup.indexOf(marker);
  const first = index >= 0 ? markup.slice(0, index) : markup;
  const second = index >= 0 ? markup.slice(index) : '';
  const tail = afterNewsletter.replaceAll('__PRICE__', escapeHtml(priceLabel()));
  return <div className="reference-home" id="top">
    <div dangerouslySetInnerHTML={{ __html: first }} />
    <section className="social-clips" aria-labelledby="social-clips-title"><div className="shell"><div className="section-kicker">REAL CONTENT FROM ASH</div><h2 id="social-clips-title">WATCH THE <em>WORK.</em></h2><CreatorGallery /></div></section>
    <div dangerouslySetInnerHTML={{ __html: second }} />
    <section className="newsletter" id="newsletter" aria-labelledby="newsletter-title"><div className="shell newsletter-card"><div className="newsletter-copy"><div className="section-kicker">LOW-NOISE EMAIL</div><h2 id="newsletter-title">USEFUL EMAILS.<br /><em>NOT SPAM.</em></h2><p>New masterclasses, useful study drops and important TSV updates. Around one or two emails a month.</p><div className="newsletter-note">Unsubscribe any time</div></div><div className="signup"><NewsletterForm enabled={Boolean(process.env.RESEND_API_KEY && (process.env.RESEND_SEGMENT_ID || process.env.RESEND_AUDIENCE_ID))} /></div></div></section>
    <div dangerouslySetInnerHTML={{ __html: tail }} />
  </div>;
}
