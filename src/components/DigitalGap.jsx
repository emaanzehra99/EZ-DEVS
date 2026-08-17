import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./DigitalGap.css";

gsap.registerPlugin(ScrollTrigger);

function DigitalGap() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards.length) return;

    const ctx = gsap.context(() => {
      gsap.from(".digital-gap-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".digital-gap-title", {
        y: 70,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      gsap.from(cards, {
        y: 90,
        opacity: 0,
        rotateX: 8,
        duration: 1,
        stagger: 0.14,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".digital-gap-cards",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".digital-gap-shift", {
        y: 45,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".digital-gap-shift",
          start: "top 85%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const handlePointerMove = (event, card) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.45,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handlePointerLeave = (card) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.45)",
    });

    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  };

  const cards = [
    {
      number: "01",
      title: "UNCLEAR POSITIONING",
      text: "Your visitor shouldn't have to figure out what you do, who it's for, or why it matters.",
    },
    {
      number: "02",
      title: "WEAK DIGITAL EXPERIENCE",
      text: "A generic website can make a strong business feel interchangeable before the conversation even starts.",
    },
    {
      number: "03",
      title: "LOST CONVERSION",
      text: "Every moment of hesitation is another opportunity for a potential client to leave.",
    },
  ];

  return (
    <section
      className="digital-gap"
      ref={sectionRef}
      aria-labelledby="digital-gap-title"
    >
      <div className="digital-gap-container">

        <div className="digital-gap-heading">
          <span className="digital-gap-eyebrow">
            THE DIGITAL GAP
          </span>

          <h2
            className="digital-gap-title"
            id="digital-gap-title"
          >
            Your business may be
            <span> better than the way it looks online.</span>
          </h2>

          <p className="digital-gap-intro">
            You can have a great offer, a strong team, and years
            of experience — but if your digital presence doesn't
            communicate that quickly, potential clients move on
            before they discover what you can actually do.
          </p>
        </div>

        <div className="digital-gap-cards">
          {cards.map((card, index) => (
            <article
              className="digital-gap-card"
              key={card.number}
              ref={(element) => {
                cardsRef.current[index] = element;
              }}
              onPointerMove={(event) =>
                handlePointerMove(event, event.currentTarget)
              }
              onPointerLeave={(event) =>
                handlePointerLeave(event.currentTarget)
              }
            >
              <div className="card-glow" />

              <div className="card-top">
                <span className="card-number">
                  {card.number}
                </span>

                <span className="card-arrow">↗</span>
              </div>

              <div className="card-content">
                <h3>{card.title}</h3>

                <p>{card.text}</p>
              </div>

              <div className="card-line" />
            </article>
          ))}
        </div>

        <div className="digital-gap-shift">
          <span className="shift-line" />

          <div>
            <span className="shift-eyebrow">
              THE SHIFT
            </span>

            <h3>That's the gap we close.</h3>

            <p>
              Strategy, conversion-focused copy, premium web
              development, and VSL expertise — brought together
              around one goal: making your business impossible
              to misunderstand.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DigitalGap;