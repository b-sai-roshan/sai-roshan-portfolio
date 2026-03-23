import React from "react";

const learningAreas = [
  {
    title: "AI-Assisted Website Creation",
    type: "Current Focus",
    description:
      "Exploring how AI tools can speed up planning, design ideas, content creation, and website building workflows.",
    stack: ["AI Tools", "Website Planning", "Creative Thinking"]
  },
  {
    title: "Frontend Learning Journey",
    type: "Student Growth",
    description:
      "Building a foundation in web development by learning how modern websites are structured, styled, and presented.",
    stack: ["HTML", "CSS", "React Basics"]
  },
  {
    title: "Leadership and Team Coordination",
    type: "Personal Strength",
    description:
      "Bringing confidence, communication, and responsibility into collaborative work, especially in team-based environments.",
    stack: ["Leadership", "Communication", "Collaboration"]
  }
];

const skills = [
  "AI Tools",
  "UI Design",
  "Website Creation",
  "Web Development",
  "Team Coordination",
  "Leadership"
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <span className="brand">PORTFOLIO//01</span>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <p className="eyebrow">Student Portfolio | B.Tech AIML</p>
            <h1>
              B Sai Roshan is an AIML student exploring AI, web development,
              and creative digital building.
            </h1>
            <p className="hero-text">
              I am Sai Roshan from Bangalore, currently studying B.Tech in
              Artificial Intelligence and Machine Learning at S-VYASA Deemed to
              be University. I enjoy using AI for UI ideas, website creation,
              and learning how technical products come together.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button ghost" href="#contact">
                Contact Me
              </a>
            </div>
          </section>

          <aside className="hero-panel">
            <div className="terminal-card">
              <div className="terminal-top">
                <span />
                <span />
                <span />
              </div>
              <div className="terminal-body">
                <p>{">"} name: B Sai Roshan</p>
                <p>{">"} field: B.Tech AIML</p>
                <p>{">"} focus: AI + web development</p>
                <p>{">"} status: open to opportunities</p>
              </div>
            </div>
            <div className="stats-grid">
              <article>
                <strong>03</strong>
                <span>Learning areas</span>
              </article>
              <article>
                <strong>06</strong>
                <span>Core skills</span>
              </article>
              <article>
                <strong>01</strong>
                <span>Goal: grow and contribute</span>
              </article>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Current Journey</p>
            <h2>What I am learning and building toward</h2>
          </div>

          <div className="projects-grid">
            {learningAreas.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>A portfolio with room to grow</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I am very comfortable working with AI-based tools and using them
                to support design, web development, and website creation. I
                enjoy learning quickly and improving my technical skills step by
                step.
              </p>
              <p>
                I am confident in handling responsibility, managing a team, and
                coordinating with others smoothly. I connect easily with people,
                communicate well, and like contributing with both creativity,
                discipline, and leadership.
              </p>
            </div>

            <div className="skills-card">
              <p className="skills-title">Strengths & Skills</p>
              <div className="tag-row">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Get In Touch</p>
            <h2>Ready to collaborate</h2>
          </div>

          <div className="contact-card">
            <p>
              I am looking to keep learning, grow through real work, and connect
              with opportunities related to AI, technology, and web
              development.
            </p>
            <div className="contact-links">
              <a href="mailto:rsai98849@gmail.com">rsai98849@gmail.com</a>
              <a href="tel:9108545253">+91 9108545253</a>
              <a href="#about">Based in Bangalore</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
