// Retire the previously published sitemap while keeping normal site URLs working.
export function GET() {
  return new Response(null, { status: 410 });
}
