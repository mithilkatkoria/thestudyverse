import { NextResponse } from 'next/server';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: unknown; consent?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!emailPattern.test(email) || email.length > 254) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json({ error: 'Please agree to receive updates.' }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const segment = process.env.RESEND_SEGMENT_ID || process.env.RESEND_AUDIENCE_ID;
  if (!key || !segment) {
    return NextResponse.json({ error: 'The email list is not open yet. Please try again later.' }, { status: 503 });
  }

  const headers = { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' };
  const create = await fetch('https://api.resend.com/contacts', {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, unsubscribed: false }),
  });
  if (!create.ok && create.status !== 409) {
    console.error('Resend contact creation failed', create.status);
    return NextResponse.json({ error: 'We could not add you right now. Please try again.' }, { status: 502 });
  }

  const add = await fetch(`https://api.resend.com/contacts/${encodeURIComponent(email)}/segments/${encodeURIComponent(segment)}`, {
    method: 'POST',
    headers,
  });
  if (!add.ok && add.status !== 409) {
    console.error('Resend segment assignment failed', add.status);
    return NextResponse.json({ error: 'We could not add you right now. Please try again.' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
