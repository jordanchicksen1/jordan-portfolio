import { useState } from 'react'

function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark')
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          JC
        </a>

        <button
          className={`theme-toggle ${darkMode ? 'dark' : ''}`}
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          <span className="theme-icon">
            {darkMode ? '☾' : '☀'}
          </span>
        </button>
      </div>

      <div className="navbar-links">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#play">Play</a>
        <a href="#contact">Contact</a>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#experience"
          onClick={() => setMenuOpen(false)}
        >
          Experience
        </a>

        <a
          href="#play"
          onClick={() => setMenuOpen(false)}
        >
          Play
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar