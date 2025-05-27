import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import InterestingStuff from './pages/InterestingStuff.jsx'
import SomeBooks from './pages/SomeBooks.jsx'
import Article from './pages/Article.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/interesting-stuff" element={<InterestingStuff />} />
        <Route path="/some-books" element={<SomeBooks />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
