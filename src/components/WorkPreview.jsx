import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WorkPreview.css";

gsap.registerPlugin(ScrollTrigger);

function WorkPreview() {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  const projects = [
    {
      number: "01",
      name: "VECTA",
      category: "DIGITAL AGENCY",
      description:
        "A premium digital experience designed around movement, clarity and conversion.",
      tech: "REACT  /  TAILWIND  /  GSAP",
      image: "/src/assets/vecta-preview.jpg",
    },
    {
      number: "02",
      name: "NB",
      category: "FINANCIAL ADVISORY",
      description:
        "A polished digital presence built to communicate credibility, authority and trust.",
      tech: "REACT  /  JAVASCRIPT  /  CSS",
      image: "/src/assets/northbridge-preview.png",
    },
    {
      number: "03",
      name: "IOTA",
      category: "CORPORATE / INFORMATIONAL",
      description:
        "A clear, modern experience focused on communicating complex information without friction.",
      tech: "REACT  /  CSS  /  JAVASCRIPT",
      image: "/src/assets/iota-preview.png",
    },
    {
      number: "04",
      name: "MIRACLE AGITAN",
      category: "BRAND STRATEGY — CONCEPT",
      description:
        "An editorial personal-brand concept built around authority, clarity and visual storytelling.",
      tech: "REACT  /  CSS  /  GSAP",
      image: "/src/assets/miracle-preview.png",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".work-eyebrow", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".work-heading-line", {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      gsap.from(".work-intro", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".work-intro",
          start: "top 82%",
          once: true,
        },
      });

      projectsRef.current.forEach((project, index) => {
        if (!project) return;

        gsap.fromTo(
          project,
          {
            opacity: 0,
            y: 90,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.08,
            ease: "power4.out",
            scrollTrigger: {
              trigger: project,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const handlePointerMove = (event) => {
    if (window.matchMedia("(hover: none)").matches) return;

    const project = event.currentTarget;
    const visual = project.querySelector(".work-project-visual");
    const glow = project.querySelector(".work-project-glow");

    if (!visual) return;

    const rect = project.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY =
      ((x - rect.width / 2) / (rect.width / 2)) * 2;

    const rotateX =
      ((y - rect.height / 2) / (rect.height / 2)) * -2;

    project.style.setProperty("--mouse-x", `${x}px`);
    project.style.setProperty("--mouse-y", `${y}px`);

    gsap.to(visual, {
      rotateX,
      rotateY,
      scale: 1.015,
      duration: 0.5,
      ease: "power2.out",
    });

    if (glow) {
      glow.style.opacity = "1";
    }
  };

  const handlePointerLeave = (event) => {
    const project = event.currentTarget;
    const visual = project.querySelector(".work-project-visual");
    const glow = project.querySelector(".work-project-glow");

    if (visual) {
      gsap.to(visual, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
      });
    }

    if (glow) {
      glow.style.opacity = "0";
    }
  };

  return (
    <section
      className="work-preview"
      ref={sectionRef}
      aria-labelledby="work-title"
    >
      <div className="work-container">

        {/* HEADER */}

        <div className="work-header">

          <div>
            <span className="work-eyebrow">
              SELECTED WORK
            </span>

            <h2
              className="work-title"
              id="work-title"
            >
              <span className="work-heading-line">
                Work that
              </span>

              <span className="work-heading-line work-heading-accent">
                moves business.
              </span>
            </h2>
          </div>

          <p className="work-intro">
            Different businesses demand different
            experiences. We don't force every brand
            into the same digital shape.
          </p>

        </div>


        {/* PROJECTS */}

        <div className="work-projects">

          {projects.map((project, index) => (
            <article
              className="work-project"
              key={project.number}
              ref={(element) => {
                projectsRef.current[index] = element;
              }}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
            >

              <div className="work-project-meta">

                <span className="work-project-number">
                  {project.number}
                </span>

                <span className="work-project-category">
                  {project.category}
                </span>

                <span className="work-project-arrow">
                  ↗
                </span>

              </div>


              <div className="work-project-content">

                <div className="work-project-copy">

                  <h3>
                    {project.name}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <span className="work-project-tech">
                    {project.tech}
                  </span>

                  <a
                    href="/work"
                    className="work-project-link"
                  >
                    VIEW PROJECT
                    <span>↗</span>
                  </a>

                </div>


                <div className="work-project-frame">

                  <div className="work-project-glow" />

                  <div className="work-project-visual">

                    <img
                      src={project.image}
                      alt={`${project.name} website preview`}
                      loading="lazy"
                    />

                    <div className="work-project-overlay">
                      <span>
                        EXPLORE
                      </span>

                      <span>
                        ↗
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* ALL WORK */}

        <div className="work-all">

          <a href="/work">
            <span>
              VIEW ALL WORK
            </span>

            <span className="work-all-arrow">
              ↗
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default WorkPreview;