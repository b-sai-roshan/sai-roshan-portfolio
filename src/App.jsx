import React from "react";

const GITHUB_LINK = "https://github.com/b-sai-roshan";
const BASE_URL = import.meta.env.BASE_URL;
const PROFILE_IMAGE = `${BASE_URL}my-photo.jpg`;
const RESUME_LINK = `${BASE_URL}resume.pdf`;

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

const strengths = [
  {
    title: "Fast Learner",
    description:
      "I adapt quickly, learn new tools with curiosity, and improve by building consistently."
  },
  {
    title: "AI-First Thinking",
    description:
      "I enjoy using AI to explore ideas, improve workflows, and create better digital experiences."
  },
  {
    title: "Team Leadership",
    description:
      "I communicate clearly, coordinate well with people, and feel confident taking responsibility."
  }
];

export default function App() {
  const [entered, setEntered] = React.useState(false);

  return (
    <div className="app-shell">
      {!entered && (
        <section className="welcome-screen">
          <div className="welcome-orb orb-one" />
          <div className="welcome-orb orb-two" />
          <div className="welcome-card">
            <div className="welcome-photo-ring">
              <img src={PROFILE_IMAGE} alt="B Sai Roshan profile" />
            </div>
            <p className="welcome-tag">Welcome to my portfolio</p>
            <h1>B Sai Roshan</h1>
            <p className="welcome-copy">
              AI-focused student, web development learner, and confident future
              team player.
            </p>
            <div className="welcome-actions">
              <button
                className="button primary"
                type="button"
                onClick={() => setEntered(true)}
              >
                Enter Website
              </button>
              <a
                className="button ghost"
                href={GITHUB_LINK}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      )}

      <div className={`page-shell ${entered ? "is-visible" : "is-hidden"}`}>
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <header className="hero">
          <nav className="topbar">
            <span className="brand">B Sai Roshan</span>
            <div className="nav-links">
              <a href="#projects">Journey</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-grid">
            <section className="hero-copy">
              <p className="eyebrow">Student Portfolio | Bangalore</p>
              <h1>
                <span>AI-focused student.</span>
                <span>Creative builder.</span>
                <span>Future-ready teammate.</span>
              </h1>
              <p className="hero-text">
                I am Sai Roshan from Bangalore, currently studying B.Tech in
                Artificial Intelligence and Machine Learning at S-VYASA Deemed
                to be University. I enjoy using AI for UI ideas, website
                creation, and learning how modern digital products are designed
                and built.
              </p>
              <div className="hero-highlights">
                <span>AIML Student</span>
                <span>AI + Web Development</span>
                <span>Open to Learning</span>
              </div>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  Explore My Journey
                </a>
                <a
                  className="button ghost"
                  href={GITHUB_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="button ghost"
                  href={RESUME_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume
                </a>
              </div>
            </section>

            <aside className="hero-panel">
              <div className="profile-card">
                <div className="profile-visual">
                  <img src={PROFILE_IMAGE} alt="B Sai Roshan portrait" />
                </div>
                <p className="focus-label">Welcome to my portfolio</p>
                <h3>B Sai Roshan</h3>
                <p className="profile-copy">
                  B.Tech AIML student exploring AI, web development, UI ideas,
                  and better digital experiences.
                </p>
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
              <div className="focus-card">
                <p className="focus-label">Current Direction</p>
                <h3>
                  Building a strong foundation in AI, UI thinking, and web
                  development.
                </h3>
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

          <section className="section" id="strengths">
            <div className="section-heading">
              <p className="eyebrow">Why Me</p>
              <h2>Strengths that shape how I work</h2>
            </div>

            <div className="strengths-grid">
              {strengths.map((item) => (
                <article className="strength-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section about-section" id="about">
            <div className="section-heading">
              <p className="eyebrow">About Me</p>
              <h2>Student mindset, builder energy</h2>
            </div>

            <div className="about-grid">
              <div className="about-copy">
                <p>
                  I am very comfortable working with AI-based tools and using
                  them to support design, web development, and website
                  creation. I enjoy learning quickly and improving my technical
                  skills step by step.
                </p>
                <p>
                  I am confident in handling responsibility, managing a team,
                  and coordinating with others smoothly. I connect easily with
                  people, communicate well, and like contributing with both
                  creativity, discipline, and leadership.
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
                I am looking to keep learning, grow through real work, and
                connect with opportunities related to AI, technology, and web
                development.
              </p>
              <div className="contact-links">
                <a href="mailto:rsai98849@gmail.com">rsai98849@gmail.com</a>
                <a href="tel:9108545253">+91 9108545253</a>
                <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={RESUME_LINK} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
