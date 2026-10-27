import type { Meme } from '../types'

type Props = {
  meme: Meme
  onOpen: (meme: Meme) => void
}

export function MemeCard({ meme, onOpen }: Props) {
  return (
    <button
      type="button"
      className="meme-card"
      onClick={() => onOpen(meme)}
      aria-label={`Open meme: ${meme.caption}`}
    >
      <img
        src={meme.imageUrl}
        alt={meme.caption}
        loading="lazy"
        className="meme-card__img"
      />
      <span className="meme-card__caption">{meme.caption}</span>
    </button>
  )
}
