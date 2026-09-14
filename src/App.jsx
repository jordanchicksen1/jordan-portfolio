import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

    const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero">
  <div className="hero-content">
    <p className="hero-intro">HI, I'M</p>

    <h1>Jordan Chicksen</h1>

    <p className="hero-role">
      SOFTWARE & GAME DEVELOPER · PROJECT MANAGER
    </p>

    <p className="hero-description">
      I create interactive experiences through game and
      web development.
    </p>

    <a href="#projects" className="hero-button">
      Explore my work →
    </a>
  </div>

  <div className="hero-image">
    <span>IMAGE</span>
  </div>
</section>

        {/* PROJECTS */}
        <section id="projects" className="projects-section">
          <div className="section-heading">
            <p className="section-label">SELECTED WORK</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="project-grid">

            <article className="project-card">
              <div className="project-image">
                <span>KNIGHTFALL</span>
              </div>

              <div className="project-content">
                <p className="project-type">SINGLE PLAYER</p>
                <h3>Knightfall</h3>
                <p>
                  A retro-inspired 3D action adventure comprised of
                  Soulslike combat, exploration, and environmental puzzles.
                </p>
                <a href="#knightfall">View project →</a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">
                <span>WIZARD WARS</span>
              </div>

              <div className="project-content">
                <p className="project-type">ONLINE MULTIPLAYER</p>
                <h3>Wizard Wars</h3>
                <p>
                  A competitive multiplayer 2D platformer about casting spells and collecting gems. Built with Unity
                  and Netcode for GameObjects.
                </p>
                <a href="#network-game">View project →</a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">
                <span>TINY HORIZONS</span>
              </div>

              <div className="project-content">
                <p className="project-type">LOCAL MULTIPLAYER</p>
                <h3>Tiny Horizons</h3>
                <p>
                  A playful 2-player co-op 3D platformer focused on accessible,
                  fast-paced gameplay and experimentation.
                </p>
                <a href="#tiny-horizons">View project →</a>
              </div>
            </article>

          </div>
        </section>

                {/* PLAY */}
        <section id="play" className="play-section">
          <div className="play-content">
            <p className="section-label">A LITTLE SOMETHING TO PLAY</p>

            <h2>A small game, built for fun.</h2>

            <a href="#play-game" className="play-button">
              Play now →
            </a>
          </div>

          <div className="play-image">
            <span>GAME IMAGE</span>
          </div>
        </section>

                {/* MORE THAN JUST CODE */}
        <section id="about" className="more-section">
          <div className="section-heading">
            <p className="section-label">MORE THAN JUST CODE</p>
            <h2>What I can bring to a project</h2>
          </div>

          <div className="more-grid">
            <article className="more-card">
              <div className="more-icon">✎</div>
              <h3>Design</h3>
              <p>Visual design, UI/UX and creative problem-solving.</p>
            </article>

            <article className="more-card">
              <div className="more-icon">∞</div>
              <h3>Education</h3>
              <p>Workshops, events and creating opportunities for others to learn.</p>
            </article>

            <article className="more-card">
              <div className="more-icon">⇄</div>
              <h3>Project Management</h3>
              <p>Planning, coordination and making sure that creative projects cross the finish line.</p>
            </article>

            <article className="more-card">
              <div className="more-icon">∴</div>
              <h3>Philosophy</h3>
              <p>Critical thinking and different perspectives on technology and creativity.</p>
            </article>
          </div>

          <div className="more-statement">
            <p>
              My work sits at the intersection of technology, design and
              creative problem-solving.
            </p>
          </div>
        </section>

            </main>

      <button
  className={`back-to-top ${showBackToTop ? 'show' : ''}`}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  aria-label="Back to top"
>
  ↑
</button>
    </>
  )
}

export default App