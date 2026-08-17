

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Work.css";

import northbridgeImage from "../assets/northbridge-preview.png";
import vectaImage from "../assets/vecta-preview.jpg";
import miracleImage from "../assets/miracle-preview.png";
import iotaImage from "../assets/iota-preview.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    category: "CAPITAL ADVISORY",
    title: "Northbridge Capital",
    description:
      "A refined digital presence designed to make a complex financial service feel clear, credible, and easy to understand.",
    image: northbridgeImage,
    url: "https://northbridge-capital-advisors.vercel.app/",
  },
  {
    number: "02",
    category: "DIGITAL EXPERIENCE",
    title: "Vecta",
    description:
      "A bold digital experience built around movement, clarity, and a modern agency presence.",
    image: vectaImage,
    url: "https://vecta-agency-website.vercel.app/",
  },
  {
    number: "03",
    category: "PERSONAL BRAND",
    title: "Miracle Agitan",
    description:
      "A polished personal-brand experience designed to communicate expertise with clarity and personality.",
    image: miracleImage,
    url: "https://miracle-agitan-website.vercel.app/",
  },
  {
    number: "04",
    category: "INFORMATIONAL EXPERIENCE",
    title: "IOTA World",
    description:
      "A structured digital experience focused on making information easier to explore and understand.",
    image: iotaImage,
    url: "https://iota-world-website.vercel.app/",
  },
];

function Work() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO */

      gsap.fromTo(
        ".work-intro",
        {
          y: 28,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        }
      );

      /* PROJECT REVEALS */

      gsap.utils.toArray(".work-item").forEach((item) => {
        const image = item.querySelector(".work-image-wrap");
        const info = item.querySelector(".work-info");

        gsap.fromTo(
          image,
          {
            y: 45,
            opacity: 0,
            rotateX: 5,
            scale: 0.98,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          info,
          {
            y: 24,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="work-page" ref={pageRef}>

      {/* =========================
          INTRO
      ========================= */}

      <section className="work-intro-section">
        <div className="work-container">
          <div className="work-intro">

            <div className="work-intro-top">
              <span>04 / WORK</span>
              <span>SELECTED EXPERIENCES</span>
            </div>

            <div className="work-intro-bottom">
              <h1>Work we're proud of.</h1>

              <p>
                A selection of digital experiences built to make
                businesses clearer, stronger, and easier to trust.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          PROJECTS
      ========================= */}

      <section className="work-list">
        <div className="work-container">

          {projects.map((project, index) => (
            <article
              className={`work-item ${
                index % 2 !== 0 ? "work-item-reverse" : ""
              }`}
              key={project.number}
            >

              {/* IMAGE */}

              <a
                href={project.url}
                target={project.url === "#" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="work-image-link"
                aria-label={`View ${project.title} website`}
              >
                <div className="work-image-wrap">

                  <div className="work-image-inner">
                    <img
                      src={project.image}
                      alt={`${project.title} website preview`}
                    />
                  </div>

                  <div className="work-image-overlay">
                    <span>VIEW WEBSITE</span>
                    <span>↗</span>
                  </div>

                </div>
              </a>


              {/* INFORMATION */}

              <div className="work-info">

                <div className="work-info-number">
                  {project.number}
                </div>

                <div className="work-info-main">

                  <span className="work-category">
                    {project.category}
                  </span>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <a
                    href={project.url}
                    target={project.url === "#" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="work-text-link"
                  >
                    VIEW EXPERIENCE
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>
      </section>


      {/* =========================
          CLOSING
      ========================= */}

      <section className="work-closing">
        <div className="work-container">

          <div className="work-closing-line" />

          <span>HAVE SOMETHING IN MIND?</span>

          <h2>
            Let's build something
            <em>worth trusting.</em>
          </h2>

          <a
            href="/contact"
            className="work-closing-link"
          >
            START A CONVERSATION
            <span>↗</span>
          </a>

        </div>
      </section>

    </main>
  );
}

export default Work;