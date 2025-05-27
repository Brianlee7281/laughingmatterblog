import { useState } from 'react'
import { Link } from 'react-router-dom'

// Sample data for the blog
const recentArticles = [
  {
    id: 1,
    title: "The Paradox of Choice",
    excerpt: "Why more options can lead to less happiness and how to navigate decision fatigue.",
    section: "interesting-stuff",
    date: "May 15, 2025"
  },
  {
    id: 2,
    title: "Thinking, Fast and Slow",
    excerpt: "Exploring Daniel Kahneman's insights on the two systems that drive how we think.",
    section: "some-books",
    date: "May 10, 2025"
  },
  {
    id: 3,
    title: "The Art of Noticing",
    excerpt: "How paying attention to the overlooked details can transform your perspective.",
    section: "interesting-stuff",
    date: "May 5, 2025"
  }
];

function App() {
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
            <h2 className="text-2xl font-medium mb-6">Welcome to Laughing Matter</h2>
            <p className="mb-4">
              This is a minimalist blog focused on sharing thoughts about interesting philosophical concepts and book insights. 
              The design emphasizes readability and content, allowing ideas to take center stage.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="section-box">
                <h3 className="text-xl font-medium mb-3">Interesting Stuff</h3>
                <p className="mb-4">
                  Explorations of philosophical ideas, thought experiments, and observations about life and society.
                </p>
                <Link to="/interesting-stuff" className="text-accent underline">
                  Browse all
                </Link>
              </div>
              
              <div className="section-box">
                <h3 className="text-xl font-medium mb-3">Some Books</h3>
                <p className="mb-4">
                  Reflections and insights from books that have shaped my thinking and perspective.
                </p>
                <Link to="/some-books" className="text-accent underline">
                  Browse all
                </Link>
              </div>
            </div>
            
            <section className="mt-12">
              <h3 className="text-xl font-medium mb-6">Recent Articles</h3>
              <div className="space-y-6">
                {recentArticles.map(article => (
                  <div key={article.id} className="article-card">
                    <h4 className="text-lg font-medium mb-2">
                      <Link to={`/article/${article.id}`} className="hover:underline">
                        {article.title}
                      </Link>
                    </h4>
                    <p className="text-secondary mb-3">{article.excerpt}</p>
                    <div className="flex justify-between text-sm text-accent">
                      <span>{article.section === 'interesting-stuff' ? 'Interesting Stuff' : 'Some Books'}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </main>

        <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200">
          <p>© {new Date().getFullYear()} Laughing Matter. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
