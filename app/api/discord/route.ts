import { NextResponse } from 'next/server';
import { community } from '@/data/site';
export const revalidate = 900;
export async function GET(){try{const r=await fetch(`https://discord.com/api/v10/invites/${community.inviteCode}?with_counts=true`,{next:{revalidate:900},signal:AbortSignal.timeout(2500)});if(!r.ok)throw Error();const d=await r.json();if(typeof d.approximate_member_count!=='number'||typeof d.approximate_presence_count!=='number')throw Error();return NextResponse.json({memberCount:d.approximate_member_count,onlineCount:d.approximate_presence_count,source:'live'});}catch{return NextResponse.json({memberCount:community.fallbackMembers,onlineCount:community.fallbackOnline,source:'snapshot'});}}
