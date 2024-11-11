import React, { useState, useEffect, lazy, Suspense } from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import './index.css';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';

    const AboutMe = lazy(() => import('./pages/AboutMe'));
    const Blog = lazy(() => import('./pages/Blog'));
    const BlogPost = lazy(() => import('./pages/BlogPost'));
    const News = lazy(() => import('./pages/News'));
    const Projects = lazy(() => import('./pages/Projects'));
    const Contact = lazy(() => import('./pages/Contact'));

    function App() {
      const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      }, [theme]);

      const changeTheme = (selectedTheme) => {
        setTheme(selectedTheme);
      };

      return (
        <Router>
          <Navbar changeTheme={changeTheme} currentTheme={theme} />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/news" element={<News />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      );
    }

    ReactDOM.render(<App />, document.getElementById('root'));
