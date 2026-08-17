import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

import teamImage from "/src/assets/ez-team.png";
gsap.registerPlugin(ScrollTrigger);

function Services() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const imageWindowRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    const imageWindow = imageWindowRef.current;

    if (!hero || !image || !imageWindow) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      /* =========================================
         INITIAL STATE
      ========================================= */

      gsap.set(".services-reveal-image", {
        clipPath: "inset(100% 0% 0% 0%)",
        scale: 1.08,
        y: 35,
        opacity: 0,
      });

      gsap.set(".services-light-trail", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      /* =========================================
         HERO ENTRANCE
      ========================================= */

      tl.fromTo(
        ".services-eyebrow",
        {
          y: 18,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        }
      )

        .fromTo(
          ".services-title-line",
          {
            yPercent: 115,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.12,
          },
          "-=0.25"
        )

        /* IMAGE REVEAL */

        .to(
          ".services-reveal-image",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 1.45,
            ease: "power4.inOut",
          },
          "-=0.45"
        )

        /* LIGHT TRAILS */

        .to(
          ".services-light-trail-burgundy",
          {
            scaleX: 1,
            duration: 1.15,
            ease: "power3.inOut",
          },
          "-=1"
        )

        .to(
          ".services-light-trail-blue",
          {
            scaleX: 1,
            duration: 1.15,
            ease: "power3.inOut",
          },
          "<0.12"
        )

        /* SUPPORTING COPY */

        .fromTo(
          ".services-hero-copy",
          {
            y: 22,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.65"
        )

        .fromTo(
          ".services-scroll",
          {
            y: 12,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
          },
          "-=0.3"
        );

      /* =========================================
         IMAGE BREATHING / FLOAT
      ========================================= */

      gsap.to(image, {
        y: -7,
        duration: 5.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* =========================================
         LIGHT TRAIL FADE
      ========================================= */

      gsap.to(
        ".services-light-trail-burgundy",
        {
          opacity: 0.55,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        }
      );

      gsap.to(
        ".services-light-trail-blue",
        {
          opacity: 0.55,
          duration: 4.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        }
      );

      /* =========================================
         DESKTOP MOUSE PARALLAX
      ========================================= */

      const handlePointerMove = (event) => {
        if (window.innerWidth <= 900) return;

        const rect = imageWindow.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY - rect.top) /
            rect.height -
          0.5;

        gsap.to(image, {
          x: x * 12,
          rotateY: x * 3,
          rotateX: y * -3,
          duration: 0.8,
          ease: "power3.out",
          transformPerspective: 1200,
        });

        gsap.to(".services-image-glow", {
          x: x * 18,
          y: y * 18,
          duration: 1,
          ease: "power3.out",
        });
      };

      const resetPointer = () => {
        gsap.to(image, {
          x: 0,
          rotateY: 0,
          rotateX: 0,
          duration: 0.9,
          ease: "power3.out",
        });

        gsap.to(".services-image-glow", {
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      };

      imageWindow.addEventListener(
        "pointermove",
        handlePointerMove
      );

      imageWindow.addEventListener(
        "pointerleave",
        resetPointer
      );

      return () => {
        imageWindow.removeEventListener(
          "pointermove",
          handlePointerMove
        );

        imageWindow.removeEventListener(
          "pointerleave",
          resetPointer
        );
      };
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <main className="services-page">

      <section
        className="services-hero"
        ref={heroRef}
      >

        {/* =====================================
            ATMOSPHERE
        ===================================== */}

        <div
          className="services-ambient services-ambient-burgundy"
          aria-hidden="true"
        />

        <div
          className="services-ambient services-ambient-blue"
          aria-hidden="true"
        />


        <div className="services-hero-container">

          {/* ===================================
              EYEBROW
          =================================== */}

          <div className="services-eyebrow">

            <span>01 / SERVICES</span>

            <span>
              DIGITAL EXPERIENCES WITH PURPOSE
            </span>

          </div>


          {/* ===================================
              HERO STATEMENT
          =================================== */}

          <div className="services-statement">

            <div className="services-title">

              <div className="services-title-mask">
                <h1 className="services-title-line">
                  YOUR WEBSITE
                </h1>
              </div>

              <div className="services-title-mask">
                <h1 className="services-title-line">
                  SHOULDN'T NEED
                </h1>
              </div>

              <div className="services-title-mask">
                <h1 className="services-title-line services-title-muted">
                  EXPLAINING.
                </h1>
              </div>

            </div>


            {/* =================================
                CINEMATIC IMAGE
            ================================= */}

            <div
              className="services-image-window"
              ref={imageWindowRef}
            >

              <div
                className="services-image-glow"
                aria-hidden="true"
              />

              <div
                className="services-reveal-image"
                ref={imageRef}
              >

                <img
                  src={teamImage}
                  alt="EZ Developers team"
                  className="services-team-image"
                />

                <div
                  className="services-image-shade"
                  aria-hidden="true"
                />

              </div>

            </div>


            {/* =================================
                SECOND STATEMENT
            ================================= */}

            <div className="services-bottom-statement">

              <span className="services-bottom-line" />

              <p className="services-hero-copy">
                It should make the case for you <br />
                <strong>
                   before you ever say a word.
                </strong>
              </p>

            </div>

          </div>


          {/* ===================================
              SCROLL INDICATOR
          =================================== */}

          <div className="services-scroll">

            <span>SCROLL TO EXPLORE</span>

            <span className="services-scroll-line" />

          </div>

        </div>

      </section>

      <ServicesStack />
      <ServicesOfferings />
    </main>
  );
}

function ServicesStack() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      number: "01",
      category: "WEB EXPERIENCE",
      title: "WEBSITES THAT\nDO THE TALKING.",
      description:
        "A website should communicate your value before your sales call ever begins. We design and build digital experiences that make the right impression instantly.",
      accent: "burgundy",
    },
    {
      number: "02",
      category: "CONVERSION COPY",
      title: "WORDS THAT\nMOVE PEOPLE.",
      description:
        "Clear positioning. Sharp messaging. Stronger calls to action. We turn what your business does into language your ideal client actually understands.",
      accent: "blue",
    },
    {
      number: "03",
      category: "VSL & SALES",
      title: "ATTENTION IS\nNOT ENOUGH.",
      description:
        "We build the story around your offer — from the opening hook to the moment someone decides they need to know more.",
      accent: "burgundy",
    },
    {
      number: "04",
      category: "DIGITAL POSITIONING",
      title: "LOOK LIKE THE\nBUSINESS YOU ARE.",
      description:
        "Your digital presence should match the level of your ambition. We shape the visual and verbal experience around the trust you want to create.",
      accent: "blue",
    },
    {
      number: "05",
      category: "THE EZ APPROACH",
      title: "DESIGN.\nWORDS.\nDIRECTION.",
      description:
        "Different disciplines. One experience. We bring design, development and conversion thinking together instead of treating them as separate pieces.",
      accent: "burgundy",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      /* =========================================
         INITIAL STACK
      ========================================= */

      cards.forEach((card, index) => {
        gsap.set(card, {
          y: index * 10,
          x: index * 2,
          rotate: index % 2 === 0 ? -1.2 : 1.2,
          scale: 1 - index * 0.025,
          zIndex: cards.length - index,
        });
      });

      /* =========================================
         STACKED CARD SCROLL
      ========================================= */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${cards.length * 900}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];

        /*
          Current card moves away.
          Next card rises from the stack.
        */

        timeline
          .to(
            card,
            {
              yPercent: -125,
              xPercent: -4,
              rotate: index % 2 === 0 ? -7 : 7,
              scale: 0.94,
              duration: 1,
              ease: "power3.inOut",
            }
          )

          .to(
            nextCard,
            {
              y: 0,
              x: 0,
              rotate: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
            },
            "<"
          );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="services-stack-section"
      ref={sectionRef}
    >

      <div className="services-stack-container">

        {/* =====================================
            SECTION INTRO
        ===================================== */}

        <div className="services-stack-intro">

          <div className="services-stack-label">
            <span>02 / WHAT WE DO</span>
            <span>SCROLL TO REVEAL</span>
          </div>

          <h2>
            NOT A LIST
            <br />
            OF <em>SERVICES.</em>
          </h2>

          <p>
            Every service exists for one reason:
            to make your business easier to
            understand, trust, and choose.
          </p>

        </div>


        {/* =====================================
            CARD STAGE
        ===================================== */}

        <div className="services-card-stage">

          <div className="services-card-stack">

            {services.map((service, index) => (
              <article
                key={service.number}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`service-flip-card service-flip-card-${service.accent}`}
              >

                <div className="service-card-top">

                  <span className="service-card-number">
                    {service.number}
                  </span>

                  <span className="service-card-category">
                    {service.category}
                  </span>

                </div>


                <div className="service-card-main">

                  <h3>
                    {service.title
                      .split("\n")
                      .map((line, lineIndex) => (
                        <span key={lineIndex}>
                          {line}
                          <br />
                        </span>
                      ))}
                  </h3>

                </div>


                <div className="service-card-bottom">

                  <p>
                    {service.description}
                  </p>

                  <span className="service-card-arrow">
                    ↗
                  </span>

                </div>


                <span className="service-card-edge" />

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

function ServicesOfferings() {
  const services = [
    {
      number: "01",
      title: "DIGITAL EXPERIENCES",
      description:
        "Websites, landing pages and digital interfaces designed to make your business immediately easier to understand.",
      detail:
        "Strategy · UX · UI · Development",
      accent: "burgundy",
      visual: "browser",
    },
    {
      number: "02",
      title: "CONVERSION COPY",
      description:
        "Words that clarify your offer, sharpen your positioning and move the right people toward action.",
      detail:
        "Messaging · Website Copy · Sales Copy",
      accent: "blue",
      visual: "copy",
    },
    {
      number: "03",
      title: "VSL & SALES",
      description:
        "The story, structure and messaging behind offers that need more than another pretty page.",
      detail:
        "Hooks · Scripts · Story · Offer",
      accent: "burgundy",
      visual: "vsl",
    },
    {
      number: "04",
      title: "DIGITAL POSITIONING",
      description:
        "A stronger digital presence built around how you want your business to be perceived.",
      detail:
        "Positioning · Structure · Experience",
      accent: "blue",
      visual: "position",
    },
  ];

  return (
    <section className="services-offerings">

      <div className="services-offerings-header">

        <div className="services-offerings-eyebrow">
          <span>03 / THE ACTUAL WORK</span>
          <span>BUILT AROUND THE BUSINESS</span>
        </div>

        <div className="services-offerings-heading">

          <h2>
            WE DON'T JUST
            <br />
            <em>MAKE THINGS.</em>
          </h2>

          <p>
            We build the pieces that make your
            business easier to understand,
            remember and choose.
          </p>

        </div>

      </div>


      <div className="services-offerings-list">

        {services.map((service) => (

          <article
            className={`service-offer-row service-offer-${service.accent}`}
            key={service.number}
          >

            <div className="service-offer-number">
              {service.number}
            </div>


            <div className="service-offer-content">

              <div className="service-offer-title-wrap">

                <h3>
                  {service.title}
                </h3>

                <span className="service-offer-arrow">
                  ↗
                </span>

              </div>

              <p>
                {service.description}
              </p>

              <span className="service-offer-detail">
                {service.detail}
              </span>

            </div>


            <div className="service-offer-visual">

              {service.visual === "browser" && (
                <svg
                  className="offer-svg"
                  viewBox="0 0 360 240"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="35"
                    y="38"
                    width="290"
                    height="164"
                    rx="8"
                    className="svg-outline"
                  />

                  <path
                    d="M35 72H325"
                    className="svg-line"
                  />

                  <circle
                    cx="54"
                    cy="55"
                    r="4"
                    className="svg-dot"
                  />

                  <circle
                    cx="69"
                    cy="55"
                    r="4"
                    className="svg-dot"
                  />

                  <circle
                    cx="84"
                    cy="55"
                    r="4"
                    className="svg-dot"
                  />

                  <rect
                    x="65"
                    y="101"
                    width="92"
                    height="11"
                    rx="5"
                    className="svg-fill-burgundy"
                  />

                  <rect
                    x="65"
                    y="125"
                    width="150"
                    height="7"
                    rx="3"
                    className="svg-muted"
                  />

                  <rect
                    x="65"
                    y="142"
                    width="120"
                    height="7"
                    rx="3"
                    className="svg-muted"
                  />

                  <path
                    d="M225 105L280 105L280 160L225 160Z"
                    className="svg-blue-box"
                  />

                  <path
                    d="M235 150L250 135L263 143L280 120"
                    className="svg-blue-line"
                  />
                </svg>
              )}


              {service.visual === "copy" && (
                <svg
                  className="offer-svg"
                  viewBox="0 0 360 240"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M72 65H288"
                    className="svg-line"
                  />

                  <path
                    d="M72 92H245"
                    className="svg-line"
                  />

                  <path
                    d="M72 119H275"
                    className="svg-line"
                  />

                  <path
                    d="M72 146H210"
                    className="svg-line"
                  />

                  <path
                    d="M105 178C145 155 177 195 220 168C242 154 255 147 285 157"
                    className="svg-blue-line"
                  />

                  <circle
                    cx="285"
                    cy="157"
                    r="7"
                    className="svg-fill-blue"
                  />

                  <path
                    d="M55 50L42 63L55 76"
                    className="svg-burgundy-line"
                  />

                  <path
                    d="M305 50L318 63L305 76"
                    className="svg-burgundy-line"
                  />
                </svg>
              )}


              {service.visual === "vsl" && (
                <svg
                  className="offer-svg"
                  viewBox="0 0 360 240"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="43"
                    y="52"
                    width="274"
                    height="136"
                    rx="9"
                    className="svg-outline"
                  />

                  <path
                    d="M151 86L151 154L215 120L151 86Z"
                    className="svg-play"
                  />

                  <path
                    d="M65 205H295"
                    className="svg-line"
                  />

                  <circle
                    cx="92"
                    cy="205"
                    r="5"
                    className="svg-fill-burgundy"
                  />

                  <circle
                    cx="178"
                    cy="205"
                    r="5"
                    className="svg-fill-blue"
                  />

                  <circle
                    cx="260"
                    cy="205"
                    r="5"
                    className="svg-muted-dot"
                  />

                  <path
                    d="M92 205L92 216"
                    className="svg-line"
                  />

                  <path
                    d="M178 205L178 216"
                    className="svg-line"
                  />

                  <path
                    d="M260 205L260 216"
                    className="svg-line"
                  />
                </svg>
              )}


              {service.visual === "position" && (
                <svg
                  className="offer-svg"
                  viewBox="0 0 360 240"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M180 32V208"
                    className="svg-grid"
                  />

                  <path
                    d="M45 120H315"
                    className="svg-grid"
                  />

                  <rect
                    x="92"
                    y="58"
                    width="176"
                    height="124"
                    className="svg-grid-box"
                  />

                  <circle
                    cx="180"
                    cy="120"
                    r="28"
                    className="svg-position-circle"
                  />

                  <circle
                    cx="180"
                    cy="120"
                    r="7"
                    className="svg-fill-blue"
                  />

                  <path
                    d="M180 78V58"
                    className="svg-burgundy-line"
                  />

                  <path
                    d="M180 162V182"
                    className="svg-blue-line"
                  />
                </svg>
              )}

            </div>

          </article>

        ))}

      </div>


      <div className="services-offerings-footer">

        <span>
          DIFFERENT DISCIPLINES.
        </span>

        <strong>
          ONE DIGITAL EXPERIENCE.
        </strong>

      </div>

    </section>
  );
}

export default Services;