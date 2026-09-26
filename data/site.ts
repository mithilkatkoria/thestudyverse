export const site = { name: 'The Study Verse', shortName: 'TSV', email: 'ash@thestudyverse.co.uk', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://thestudyverse.co.uk' };
export const socials = { discord: 'https://discord.gg/C5SgDQVyDA', tiktok: 'https://www.tiktok.com/@4zhfn', instagram: 'https://www.instagram.com/studywith4zhfn/', youtube: 'https://www.youtube.com/@4zhfn', linktree: 'https://linktr.ee/4zhfn' };
export const chemistryPaymentLink = 'https://buy.stripe.com/4gM5kv2TXa026jg8HK2Fa00';
export const creatorPosts = [
  { label: 'A moment from Instagram', platform: 'Instagram', href: 'https://www.instagram.com/reel/DU0ByqkjAhV/?stkn=azg4Nzg3c2lsbndn' },
  { label: 'Study with Ash', platform: 'TikTok', href: 'https://vm.tiktok.com/ZGdQbjtV1/' },
  { label: 'A look at the process', platform: 'TikTok', href: 'https://vm.tiktok.com/ZGdQbNmhv/' },
  { label: 'More from Ash', platform: 'TikTok', href: 'https://vm.tiktok.com/ZGdQqwH3n/' },
  { label: 'Keep going', platform: 'TikTok', href: 'https://vm.tiktok.com/ZGdQb6Vmx/' },
  { label: 'Inside the community', platform: 'TikTok', href: 'https://vm.tiktok.com/ZGdQqvcy1/' },
];
export const community = { inviteCode: 'C5SgDQVyDA', fallbackMembers: 2233, fallbackOnline: 142, established: 'October 2025', areas: [
  { name: 'The Lounge', description: 'A place to check in, ask a question and find people who get it.' },
  { name: 'Study VCs', description: 'Show up, settle in and get through the work alongside other students.' },
  { name: 'Study Calls', description: 'Focused time together when structure makes all the difference.' },
  { name: 'TSV VIP', description: 'A dedicated VIP area in the server. Paid membership details are still to come.' },
] };
export const masterclass = {
  slug: 'gcse-chemistry', title: 'GCSE Chemistry Masterclass', price: 39.99, currency: 'GBP', capacity: 200, hours: 10,
  status: 'scheduled' as 'booking-soon' | 'scheduled' | 'sold-out', dateConfirmed: false,
  dates: ['2026-10-24', '2026-10-25'], dateLabel: '24–25 October 2026', dailyTime: '13:00-18:00', timeLabel: '1–6 PM each day', format: 'Live online', deliveryPlatform: 'TBC',
  recording: 'tbc' as 'tbc' | 'included' | 'not-included', presenter: { name: '', confirmed: false, credential: '' },
  paperOne: ['Atomic structure and the periodic table', 'Bonding, structure and properties', 'Quantitative chemistry', 'Chemical changes', 'Energy changes'],
  paperTwo: ['Rates and extent of chemical change', 'Organic chemistry', 'Chemical analysis', 'Chemistry of the atmosphere', 'Using resources'],
};
export const scheduleSummary = () => `${masterclass.dateConfirmed ? 'Confirmed' : 'Proposed'}: ${masterclass.dateLabel}, ${masterclass.timeLabel}.${masterclass.dateConfirmed ? '' : ' Final timing to be confirmed.'}`;
export const legal = { businessAddress: '', companyNumber: '', vatNumber: '', lastReviewed: 'September 2026' };

export const priceLabel = () => new Intl.NumberFormat('en-GB', { style: 'currency', currency: masterclass.currency }).format(masterclass.price);
