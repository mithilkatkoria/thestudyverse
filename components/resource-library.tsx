'use client';

import { useState } from 'react';

const collections = [
  { number: '01', subject: 'Chemistry', category: 'Science', title: 'Chemistry, clearly.', detail: 'A dedicated space for Chemistry revision resources when they are ready.', accent: 'lilac', mark: 'Ch' },
  { number: '02', subject: 'Biology', category: 'Science', title: 'Biology, broken down.', detail: 'A home for focused Biology practice and revision notes in development.', accent: 'mint', mark: 'Bio' },
  { number: '03', subject: 'Physics', category: 'Science', title: 'Physics, made useful.', detail: 'Practical Physics revision material is on the roadmap.', accent: 'blue', mark: 'Ph' },
  { number: '04', subject: 'Exam technique', category: 'Study skills', title: 'Work the question.', detail: 'Methods for turning what you know into answers that earn marks.', accent: 'peach', mark: '↗' },
] as const;

const filters = ['All', 'Science', 'Study skills'] as const;

export function ResourceLibrary() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const visible = collections.filter(item => filter === 'All' || item.category === filter);

  return <section className="resource-collection wrap" aria-labelledby="collections-title">
    <div className="resource-collection-head"><div><span className="resource-eyebrow">THE COLLECTIONS / IN DEVELOPMENT</span><h2 id="collections-title">Find your <em>focus.</em></h2></div><p>Explore the subjects we are building for. Every resource will be shown here with a real preview and clear details when it is ready.</p></div>
    <div className="resource-filters" role="group" aria-label="Filter resource collections">{filters.map(option => <button key={option} type="button" className={filter === option ? 'active' : ''} aria-pressed={filter === option} onClick={() => setFilter(option)}>{option}</button>)}</div>
    <div className="resource-grid">{visible.map(item => <article className="resource-tile" key={item.number}><div className={`resource-cover resource-cover-${item.accent}`}><div className="resource-cover-head"><span>THE STUDY VERSE</span><span>{item.number} / 04</span></div><div className="resource-cover-symbol" aria-hidden="true">{item.mark}</div><div className="resource-cover-foot"><span>{item.subject.toUpperCase()}</span><span>COMING SOON</span></div></div><div className="resource-tile-meta"><span>{item.category}</span><span>IN DEVELOPMENT</span></div><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
  </section>;
}
