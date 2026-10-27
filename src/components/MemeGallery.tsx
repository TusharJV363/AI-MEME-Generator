import { useState } from 'react'
import type { Meme } from '../types'
import { MemeCard } from './MemeCard'
import { MemeModal } from './MemeModal'

type Props = {
  memes: Meme[]
}

export function MemeGallery({ memes }: Props) {
  const [selected, setSelected] = useState<Meme | null>(null)

  return (
    <>
      <section className="gallery" aria-label="Generated memes">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} onOpen={setSelected} />
        ))}
      </section>
      {selected && <MemeModal meme={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
