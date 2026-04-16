export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">Rijo Thomas</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="container">
        <section id="home" className="hero">
          <img src="/profile.jpg" alt="Rijo Thomas" className="avatar" />
          <h1>Rijo Thomas</h1>
          <p className="subtitle">
            Lead AI / Data Engineer building elegant, production-ready systems
            across healthcare, Snowflake, AWS, machine learning, and applied AI.
          </p>

          <div className="socials">
            <a href="mailto:rijouea@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/rijo-thomas-824b58156"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rijoblockchain"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="grid">
            <article className="card">
              <h3>UK Rail Intelligence Platform</h3>
              <p>
                AI-powered assistant for ticket intelligence, delay prediction,
                and disruption support.
              </p>
            </article>

            <article className="card">
              <h3>SnowWatch</h3>
              <p>
                AI-driven observability platform using Snowflake Cortex for
                enrichment, root cause analysis, and prioritization.
              </p>
            </article>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="stack">
            <article className="card">
              <h3>Lead - AI / Data Engineering</h3>
              <p>UST · London, UK</p>
            </article>
            <article className="card">
              <h3>Lead - Software Engineering (AI / ML / Data)</h3>
              <p>UST · Trivandrum, India</p>
            </article>
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <div className="stack">
            <article className="card">
              <h3>MSc Advanced Computing Science</h3>
              <p>University of East Anglia</p>
            </article>
            <article className="card">
              <h3>Master's in Computer Science by Research</h3>
              <p>Liverpool John Moores University</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p className="contact-text">
            Open to AI, data engineering, and applied ML opportunities.
          </p>
        </section>
      </main>
    </div>
  );
}