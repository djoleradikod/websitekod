import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import './Navbar.css';

    function Navbar({ changeTheme, currentTheme }) {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      return (
        <nav className="navbar" role="navigation" aria-label="Main Navigation">
          <div className="navbar-container">
            <button
              className="menu-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              ☰
            </button>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <Link to="/news" onClick={() => setIsMenuOpen(false)}>News</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Me</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <motion.select
                className="theme-dropdown"
                value={currentTheme}
                onChange={(e) => changeTheme(e.target.value)}
                aria-label="Select theme"
                whileHover={{ scale: 1.05 }}
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="theme1">Theme 1</option>
                <option value="theme2">Theme 2</option>
                <option value="theme3">Theme 3</option>
                <option value="theme4">Theme 4</option>
                <option value="theme5">Theme 5</option>
                <option value="theme6">Theme 6</option>
                <option value="theme7">Theme 7</option>
                <option value="theme8">Theme 8</option>
                <option value="theme9">Theme 9</option>
                <option value="theme10">Theme 10</option>
              </motion.select>
            </div>
          </div>
        </nav>
      );
    }

    export default Navbar;
