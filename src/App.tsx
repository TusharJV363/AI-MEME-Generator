import { CATEGORIES } from './data/categories'
import { useMemeGenerator } from './hooks/useMemeGenerator'
import { Header } from './components/Header'
import { CategoryPicker } from './components/CategoryPicker'
import { EmptyState } from './components/EmptyState'
import { Spinner } from './components/Spinner'
import { Button } from './components/Button'
import { MemeGallery } from './components/MemeGallery'

function App() {
  const { memes, activeCategory, loading, error, generate } = useMemeGenerator()
  const hasMemes = memes.length > 0
  const activeLabel = CATEGORIES.find((c) => c.id === activeCategory)?.label

  return (
    <div className="app">
      <Header />

      <main className="app__main">
        <section className="pitch">
          <h2 className="pitch__title">Instant memes, zero effort</h2>
          <p className="pitch__text">
            Choose a vibe and get five ready-to-share memes in seconds.
          </p>
        </section>

        <CategoryPicker
          activeCategory={activeCategory}
          disabled={loading}
          onSelect={generate}
        />

        {error && (
          <p className="error" role="alert">
            {error}
          </p>
        )}
        {loading && <Spinner label={`Cooking up ${activeLabel ?? ''} memes…`} />}
        {!loading && hasMemes && (
          <>
            <div className="results-bar">
              <h2 className="results-bar__title">{activeLabel} memes</h2>
              <Button
                variant="ghost"
                onClick={() => {
                  if (activeCategory) generate(activeCategory)
                }}
              >
                🔀 Shuffle again
              </Button>
            </div>
            <MemeGallery memes={memes} />
          </>
        )}
        {!loading && !hasMemes && !error && <EmptyState />}
      </main>

      <footer className="app-footer">
        <p>
          Make your choice, Memes make your days sensible. 
          {/* Captions by AI via OpenRouter · */}
          Images by memegen.link
        </p>
      </footer>
    </div>
  )
}

export default App
