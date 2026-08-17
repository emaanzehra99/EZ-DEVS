import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Process.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "We start with the business, the audience, the offer, and what the experience actually needs to accomplish.",
    tag: "CLARITY FIRST",
  },
  {
    number: "02",
    title: "Shape",
    text: "We turn the strategy into structure, messaging, visual direction, and an experience that feels intentional.",
    tag: "STRATEGY + DIRECTION",
  },
  {
    number: "03",
    title: "Build",
    text: "We bring everything together into a responsive, polished website with thoughtful interactions and details.",
    tag: "DESIGN + DEVELOPMENT",
  },
  {
    number: "04",
    title: "Refine",
    text: "We test, polish, adjust, and remove anything that makes the experience feel unfinished or unclear.",
    tag: "DETAILS MATTER",
  },
  {
    number: "05",
    title: "Deliver",
    text: "You get a finished digital experience that's ready to represent your business with confidence.",
    tag: "READY TO LAUNCH",
  },
];

function Process() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-intro",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        }
      );

      gsap.utils.toArray(".process-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 60,
            opacity: 0,
            rotateX: 8,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            delay: index * 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".process-card");

    const moveGlow = (event, card) => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    cards.forEach((card) => {
      const handler = (event) => moveGlow(event, card);

      card.addEventListener("mousemove", handler);

      return () => {
        card.removeEventListener("mousemove", handler);
      };
    });
  }, []);

  return (
    <main className="process-page" ref={pageRef}>

      {/* INTRO */}

      <section className="process-intro-section">
        <div className="process-container">

          <div className="process-intro">

            <div className="process-intro-top">
              <span>05 / PROCESS</span>
              <span>HOW WE WORK</span>
            </div>

            <div className="process-intro-main">
              <h1>
                From idea
                <span>to experience.</span>
              </h1>

              <p>
                A simple, deliberate process designed to turn
                ideas into digital experiences that feel clear,
                credible, and considered.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* PROCESS CARDS */}

      <section className="process-list">
        <div className="process-container">

          {steps.map((step) => (
            <article
              className="process-card"
              key={step.number}
            >

              <div className="process-card-glow" />

              <div className="process-card-top">
                <span className="process-number">
                  {step.number}
                </span>

                <span className="process-tag">
                  {step.tag}
                </span>
              </div>

              <div className="process-card-content">
                <h2>{step.title}</h2>

                <p>{step.text}</p>
              </div>

              <div className="process-card-corner">
                <span />
              </div>

            </article>
          ))}

        </div>
      </section>


      {/* CLOSING */}

      <section className="process-closing">
        <div className="process-container">

          <div className="process-closing-line" />

          <span className="process-closing-label">
            THE RESULT
          </span>

          <h2>
            No guesswork.
            <span>Just a better experience.</span>
          </h2>

        </div>
      </section>

    </main>
  );
}

export default Process;