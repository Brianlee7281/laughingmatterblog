import { useState } from 'react'
import { Link } from 'react-router-dom'

// Sample data for the Interesting Stuff section
const interestingArticles = [
  {
    id: 1,
    title: "The Paradox of Choice",
    excerpt: "Why more options can lead to less happiness and how to navigate decision fatigue.",
    section: "interesting-stuff",
    date: "May 15, 2025"
  },
  {
    id: 3,
    title: "The Art of Noticing",
    excerpt: "How paying attention to the overlooked details can transform your perspective.",
    section: "interesting-stuff",
    date: "May 5, 2025"
  },
  {
    id: 5,
    title: "The Illusion of Control",
    excerpt: "Examining how we overestimate our influence on outcomes and why letting go matters.",
    section: "interesting-stuff",
    date: "April 28, 2025"
  },
  {
    id: 7,
    title: "The Value of Boredom",
    excerpt: "Why embracing moments of nothing might be the key to creativity and mental clarity.",
    section: "interesting-stuff",
    date: "April 15, 2025"
  }
];

function InterestingStuff() {
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
            <Link to="/interesting-stuff" className="font-medium">Interesting Stuff</Link>
            <Link to="/some-books">Some Books</Link>
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
            <h2 className="text-2xl font-medium mb-6">Interesting Stuff</h2>
            <p className="mb-8">
              Explorations of philosophical ideas, thought experiments, and observations about life and society.
              These articles examine the curious aspects of human experience and challenge conventional thinking.
            </p>
            
            <div className="space-y-6">
              {interestingArticles.map(article => (
                <div key={article.id} className="article-card">
                  <h3 className="text-lg font-medium mb-2">
                    <Link to={`/article/${article.id}`} className="hover:underline">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-secondary mb-3">{article.excerpt}</p>
                  <div className="text-sm text-accent">
                    <span>{article.date}</span>
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

export default InterestingStuff;
