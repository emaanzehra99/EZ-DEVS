import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Solution.css";

gsap.registerPlugin(ScrollTrigger);

function Solution() {
  const sectionRef = useRef(null);
  const panelsRef = useRef([]);

  const panels = [
    {
      number: "01",
      title: "UNDERSTAND",
      description:
        "Before we touch the interface, we understand your offer, audience, positioning and the action you actually need visitors to take.",
      label: "START WITH THE BUSINESS",
    },
    {
      number: "02",
      title: "POSITION",
      description:
        "We turn that understanding into messaging and a visual direction that gives your business a clear place in the client's mind.",
      label: "MAKE THE VALUE CLEAR",
    },
    {
      number: "03",
      title: "BUILD",
      description:
        "Then we build the experience — responsive, intentional and engineered around the journey we want the right visitor to take.",
      label: "TURN STRATEGY INTO EXPERIENCE",
    },
    {
      number: "04",
      title: "AMPLIFY",
      description:
        "When the business needs more than a website, conversion-focused storytelling and VSL expertise extend the same strategy beyond the screen.",
      label: "EXTEND THE EXPERIENCE",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".solution-eyebrow", {
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

      gsap.from(".solution-title-line", {
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

      gsap.from(".solution-intro-text", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solution-intro-text",
          start: "top 82%",
          once: true,
        },
      });

      panelsRef.current.forEach((panel, index) => {
        if (!panel) return;

        const fromLeft = index % 2 === 0;

        gsap.fromTo(
          panel,
          {
            x: fromLeft ? -120 : 120,
            y: 45,
            opacity: 0,
            scale: 0.96,
            filter: "blur(8px)",
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.05,
            delay: index * 0.12,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".solution-panels",
              start: "top 78%",
              once: true,
            },
          }
        );
      });

      gsap.from(".solution-bottom", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solution-bottom",
          start: "top 88%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const handlePointerMove = (event) => {
    const panel = event.currentTarget;

    if (window.matchMedia("(hover: none)").matches) return;

    const rect = panel.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    panel.style.setProperty("--pointer-x", `${x}px`);
    panel.style.setProperty("--pointer-y", `${y}px`);

    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -2.2;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 2.2;

    gsap.to(panel, {
      rotateX,
      rotateY,
      duration: 0.45,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handlePointerEnter = (event) => {
    const panel = event.currentTarget;

    if (window.matchMedia("(hover: none)").matches) return;

    panel.classList.add("is-hovered");

    panelsRef.current.forEach((otherPanel) => {
      if (otherPanel && otherPanel !== panel) {
        otherPanel.classList.add("is-neighbor");
      }
    });
  };

  const handlePointerLeave = (event) => {
    const panel = event.currentTarget;

    panel.classList.remove("is-hovered");

    panelsRef.current.forEach((otherPanel) => {
      if (otherPanel) {
        otherPanel.classList.remove("is-neighbor");
      }
    });

    gsap.to(panel, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  return (
    <section
      className="solution"
      ref={sectionRef}
      aria-labelledby="solution-title"
    >
      <div className="solution-container">

        <div className="solution-intro">
          <span className="solution-eyebrow">
            HOW WE THINK
          </span>

          <h2
            className="solution-title"
            id="solution-title"
          >
            <span className="solution-title-line">
              A better website
            </span>

            <span className="solution-title-line">
              starts <em>before</em>
            </span>

            <span className="solution-title-line solution-title-accent">
              the website.
            </span>
          </h2>

          <p className="solution-intro-text">
            We don't begin with a blank canvas. We begin with
            your business — then build the digital experience
            around what it actually needs to accomplish.
          </p>
        </div>

        <div className="solution-panels">
          {panels.map((panel, index) => (
            <article
              key={panel.number}
              ref={(element) => {
                panelsRef.current[index] = element;
              }}
              className={`solution-panel solution-panel-${index + 1}`}
              onPointerEnter={handlePointerEnter}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
            >
              <div className="solution-panel-glow" />

              <div className="solution-panel-top">
                <span className="solution-panel-number">
                  {panel.number}
                </span>

                <span className="solution-panel-label">
                  {panel.label}
                </span>

                <span className="solution-panel-arrow">
                  ↗
                </span>
              </div>

              <div className="solution-panel-main">
                <span className="solution-panel-watermark">
                  {panel.number}
                </span>

                <h3>{panel.title}</h3>

                <p>{panel.description}</p>
              </div>

              <div className="solution-panel-footer">
                <span className="solution-panel-line" />

                <span>
                  EZ DEVELOPERS
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="solution-bottom">
          <div className="solution-bottom-line" />

          <div className="solution-bottom-content">
            <span>THE RESULT</span>

            <p>
              A digital presence that feels as credible
              <strong> as the business behind it.</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Solution;