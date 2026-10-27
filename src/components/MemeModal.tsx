import { useEffect } from 'react'
import type { Meme } from '../types'

type Props = {
  meme: Meme
  onClose: () => void
}

export function MemeModal({ meme, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label="Meme preview"
      onClick={onClose}
    >
      <div className="modal__card" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="modal__close"
          aria-label="Close preview"
          autoFocus
          onClick={onClose}
        >
          ×
        </button>
        <img src={meme.imageUrl} alt={meme.caption} className="modal__img" />
        <p className="modal__caption">{meme.caption}</p>
        <a
          href={meme.imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary modal__open"
        >
          Open image in new tab
        </a>
      </div>
    </div>
  )
}
