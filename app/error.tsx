'use client';
export default function Error({reset}:{reset:()=>void}){return <section className="wrap not-found"><span className="eyebrow">SOMETHING WENT WRONG</span><h1>One more try.</h1><p>We could not load that page just now.</p><button className="button button-dark" onClick={reset}>Try again ↗</button></section>}
