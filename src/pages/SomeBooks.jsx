import { useState } from 'react'
import { Link } from 'react-router-dom'

// Sample data for the Some Books section
const bookInsights = [
  {
    id: 2,
    title: "Thinking, Fast and Slow",
    excerpt: "Exploring Daniel Kahneman's insights on the two systems that drive how we think.",
    section: "some-books",
    date: "May 10, 2025"
  },
  {
    id: 4,
    title: "Sapiens: A Brief History of Humankind",
    excerpt: "Reflections on Yuval Noah Harari's sweeping exploration of human history.",
    section: "some-books",
    date: "April 22, 2025"
  },
  {
    id: 6,
    title: "The Midnight Library",
    excerpt: "Thoughts on Matt Haig's novel about the infinite possibilities of life.",
    section: "some-books",
    date: "April 18, 2025"
  },
  {
    id: 8,
    title: "Atomic Habits",
    excerpt: "Key takeaways from James Clear's practical guide to building good habits.",
    section: "some-books",
    date: "April 5, 2025"
  }
];

function SomeBooks() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="header-nav">
          <h1 className="text-xl font-medium">
            <Link to="/">Laughing Matter</Link>
          </h1>
          <nav className="nav-links">
            <Link to="/interesting-stuff">Interesting Stuff</Link>
            <Link to="/some-books" className="font-medium">Some Books</Link>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </nav>
        </header>

        <main className="py-8">
          <section className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-medium mb-6">Some Books</h2>
            <p className="mb-8">
              Reflections and insights from books that have shaped my thinking and perspective.
              These articles explore key ideas from both fiction and non-fiction works that offer valuable insights.
            </p>
            
            <div className="space-y-6">
              {bookInsights.map(book => (
                <div key={book.id} className="article-card">
                  <h3 className="text-lg font-medium mb-2">
                    <Link to={`/article/${book.id}`} className="hover:underline">
                      {book.title}
                    </Link>
                  </h3>
                  <p className="text-secondary mb-3">{book.excerpt}</p>
                  <div className="text-sm text-accent">
                    <span>{book.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200">
          <p>© {new Date().getFullYear()} Laughing Matter. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default SomeBooks;
