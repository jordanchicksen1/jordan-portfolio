function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        JC
      </a>

      <div className="navbar-links">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#play">Play</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="menu-button" aria-label="Open menu">
        ☰
      </button>
    </nav>
  )
}

export default Navbar