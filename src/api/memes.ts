import type { CategoryId, Meme } from '../types'

export async function generateMemes(category: CategoryId): Promise<Meme[]> {
  const res = await fetch('/api/memes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category }),
  })
  
  // fetch resolves even on 4xx/5xx — always check res.ok (Week 1, Slide 22).
  if (!res.ok) {
    // Log the server's reason so a failing deploy is debuggable from devtools.
    // The user still sees one friendly message.
    console.error(
      `POST /api/memes -> ${res.status}`,
      await res.text().catch(() => ""),
    );
    throw new Error("Couldn't generate memes. Please try again.");
  }

  const data = await res.json();
  return data.memes as Meme[];
}
