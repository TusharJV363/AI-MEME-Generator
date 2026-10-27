import type { Category, CategoryId } from '../types'
import { CATEGORIES } from '../data/categories'

type Props = {
  activeCategory: CategoryId | null
  disabled: boolean
  onSelect: (id: CategoryId) => void
}

export function CategoryPicker({ activeCategory, disabled, onSelect }: Props) {
  return (
    <div className="category-grid" role="group" aria-label="Meme categories">
      {CATEGORIES.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          active={category.id === activeCategory}
          disabled={disabled}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

type CardProps = {
  category: Category
  active: boolean
  disabled: boolean
  onSelect: (id: CategoryId) => void
}

function CategoryCard({ category, active, disabled, onSelect }: CardProps) {
  return (
    <button
      type="button"
      className={`category-card ${active ? 'category-card--active' : ''}`}
      onClick={() => onSelect(category.id)}
      disabled={disabled}
      aria-pressed={active}
    >
      <span className="category-card__emoji" aria-hidden="true">
        {category.emoji}
      </span>
      <span className="category-card__label">{category.label}</span>
      <span className="category-card__blurb">{category.blurb}</span>
    </button>
  )
}
