import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import emaanImage from "../assets/my image.png";
import brotherImage from "../assets/qaseem_pfp.jpg";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const introTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      introTimeline
        .from(".hero-eyebrow", {
          y: 24,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".hero-title-line",
          {
            y: 70,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.45"
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-actions",
          {
            y: 25,
            opacity: 0,
            duration: 0.75,
          },
          "-=0.45"
        )
        .from(
          ".hero-portraits",
          {
            scale: 0.94,
            opacity: 0,
            duration: 1.1,
          },
          "-=0.7"
        )
        .from(
          ".portrait-you",
          {
            x: 35,
            y: -20,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.8"
        )
        .from(
          ".portrait-brother",
          {
            x: -35,
            y: 20,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.75"
        )
        .from(
          ".hero-bottom",
          {
            y: 15,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        );

      /* Burgundy glow */

      gsap.to(".hero-glow-burgundy", {
        scale: 1.18,
        x: -25,
        y: 20,
        opacity: 0.2,
        duration: 4.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* Blue glow */

      gsap.to(".hero-glow-blue", {
        scale: 1.16,
        x: 45,
        y: -30,
        opacity: 0.38,
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* Intersection glow */

      gsap.to(".portrait-intersection-glow", {
        scale: 1.18,
        opacity: 0.72,
        duration: 5.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* Portrait floating */

      gsap.to(".portrait-you", {
        y: -7,
        duration: 4.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".portrait-brother", {
        y: 7,
        duration: 5.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* Tiny eyebrow pulse */

      gsap.to(".hero-eyebrow-dot", {
        scale: 1.25,
        opacity: 0.65,
        duration: 1.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-glow hero-glow-burgundy"></div>
        <div className="hero-glow hero-glow-blue"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-container">

        <div className="hero-main">

          {/* LEFT — COPY */}

          <div className="hero-content">

            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot"></span>
              DIGITAL STUDIO · WEB · COPY · VSL
            </div>

            <h1 className="hero-title">
              <span className="hero-title-line">
                We build digital
              </span>

              <span className="hero-title-line hero-title-accent">
                experiences
              </span>

              <span className="hero-title-line">
                that mean business.
              </span>
            </h1>

            <p className="hero-description">
              EZ Developers is a small, hands-on digital studio combining
              high-end web development, conversion-focused copy, and VSL
              expertise to help businesses show up with clarity and confidence.
            </p>

            <div className="hero-actions">
              <a href="#work" className="hero-primary-btn">
                <span>Explore Our Work</span>
                <span className="hero-btn-arrow">↗</span>
              </a>

              <a href="#contact" className="hero-secondary-btn">
                Start a Conversation
              </a>
            </div>

          </div>


          {/* RIGHT — PORTRAITS */}

          <div className="hero-portraits">

            <div className="portrait-orbit"></div>

            <div className="portrait-glow portrait-glow-burgundy"></div>
            <div className="portrait-glow portrait-glow-blue"></div>

            <div className="portrait-intersection-glow"></div>


            {/* YOUR PORTRAIT */}

            <div className="portrait portrait-you">

              <div className="portrait-ring">
                <img
                  src={emaanImage}
                  alt="Emaan — EZ Developers"
                />
              </div>

              <div className="portrait-label">
                <span>EMAAN</span>
                <small>WEB · COPY</small>
              </div>

            </div>


            {/* BROTHER'S PORTRAIT */}

            <div className="portrait portrait-brother">

              <div className="portrait-ring">
                <img
                  src={brotherImage}
                  alt="EZ Developers VSL specialist"
                />
              </div>

              <div className="portrait-label">
                <span>QASEEM</span>
                <small>VIDEO · CONVERSION</small>
              </div>

            </div>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="hero-bottom">

          <div className="hero-scroll">
            <span className="hero-scroll-line"></span>
            <span>SCROLL TO EXPLORE</span>
          </div>

          <div className="hero-location">
            <span>EZ DEVELOPERS</span>
            <span>BUILT WITH INTENTION</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;