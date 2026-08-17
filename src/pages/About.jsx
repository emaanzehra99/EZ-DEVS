
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* =========================================
         GENERAL ABOUT REVEALS
      ========================================= */

      gsap.utils.toArray(".about-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",

            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });


      /* =========================================
         HERO TITLE
      ========================================= */

      gsap.fromTo(
        ".about-hero-title span",
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
        }
      );


      /* =========================================
         HERO COPY
      ========================================= */

      gsap.fromTo(
        ".about-hero-copy",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.35,
          ease: "power3.out",
        }
      );


      /* =========================================
         ABOUT PHOTOS
      ========================================= */

      gsap.utils.toArray(".about-photo").forEach((photo) => {
        gsap.fromTo(
          photo,
          {
            scale: 1.08,
          },
          {
            scale: 1,
            duration: 1.3,
            ease: "power3.out",

            scrollTrigger: {
              trigger: photo,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });


      /* =========================================
         CONNECTION LINE
      ========================================= */

      gsap.fromTo(
        ".connection-line",
        {
          strokeDashoffset: 500,
        },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",

          scrollTrigger: {
            trigger: ".about-connection",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );


      /* =========================================
         WHAT WE BELIEVE
      ========================================= */

      const beliefsTimeline = gsap.timeline({
        paused: true,
      });


      beliefsTimeline

        /* -----------------------------------------
           CLARITY
        ----------------------------------------- */

        .to(".belief-clarity", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "power2.out",
        })


        /* -----------------------------------------
           ARROW ONE
        ----------------------------------------- */

        .to(
          ".belief-arrow-one .belief-arrow-line",
          {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.25"
        )

        .to(
          ".belief-arrow-one .belief-arrow-head",
          {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out",
          },
          "-=0.25"
        )


        /* -----------------------------------------
           CREDIBILITY
        ----------------------------------------- */

        .to(
          ".belief-credibility",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "power2.out",
          },
          "-=0.15"
        )


        /* -----------------------------------------
           ARROW TWO
        ----------------------------------------- */

        .to(
          ".belief-arrow-two .belief-arrow-line",
          {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.25"
        )

        .to(
          ".belief-arrow-two .belief-arrow-head",
          {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out",
          },
          "-=0.25"
        )


        /* -----------------------------------------
           CONVERSION
        ----------------------------------------- */

        .to(
          ".belief-conversion",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "power2.out",
          },
          "-=0.15"
        );


      /* =========================================
         BELIEFS SCROLL CONTROL
      ========================================= */

      ScrollTrigger.create({
        trigger: ".beliefs-flow",

        start: "top 78%",
        end: "bottom 22%",

        onEnter: () => {
          beliefsTimeline.play();
        },

        onLeave: () => {
          beliefsTimeline.reverse();
        },

        onEnterBack: () => {
          beliefsTimeline.play();
        },

        onLeaveBack: () => {
          beliefsTimeline.reverse();
        },
      });

    }, pageRef);


    return () => ctx.revert();

  }, []);

  return (
    <main className="about-page" ref={pageRef}>

      {/* ================================
          HERO
      ================================= */}

      <section className="about-hero">
        <div className="about-container">

          <div className="about-topline">
            <span>ABOUT EZ</span>
            <span>THE PEOPLE BEHIND THE EXPERIENCE</span>
          </div>

          <div className="about-hero-grid">

            <h1 className="about-hero-title">
              <span>NOT A</span>

              <span className="hero-muted">
                BIG AGENCY.
              </span>

              <span>
                JUST A <em>SHARPER</em>
              </span>

              <span>
                WAY TO BUILD.
              </span>
            </h1>

            <div className="about-hero-copy">
              <p>
                EZ brings strategy, words and development
                together — so your digital presence finally
                feels as good as the business behind it.
              </p>

              <span className="about-scroll">
                MEET THE PEOPLE ↓
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* ================================
          EMAAN
      ================================= */}

      <section className="about-person about-person-burgundy">
        <div className="about-container">

          <div className="person-label about-reveal">
            <span>01</span>
            <span>STRATEGY · COPY · POSITIONING</span>
          </div>

          <div className="person-grid">

            <div className="about-photo">
              <img
                src="/src/assets/my image.png"
                alt="Emaan"
              />

              <span className="photo-tag">
                EMAAN / EZ
              </span>
            </div>

            <div className="person-content about-reveal">

              <p className="person-kicker">
                THE THINKING BEFORE THE BUILD
              </p>

              <h2>
                I MAKE SURE
                <br />
                <span>YOUR BUSINESS</span>
                <br />
                MAKES SENSE.
              </h2>

              <p className="person-lead">
                I'm Emaan. I work on the part of EZ that
                happens before someone writes a line of code.
              </p>

              <p>
                What are you really offering? What makes
                someone care? What should a visitor understand
                before they even think about contacting you?
              </p>

              <p>
                I turn those answers into positioning,
                messaging and experiences that actually
                communicate the value of the business.
              </p>

              <div className="person-mark">
                <span>EMAAN</span>
                <i />
                <small>THE MESSAGE</small>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ================================
          BROTHER
      ================================= */}

      <section className="about-person about-person-blue">
        <div className="about-container">

          <div className="person-label about-reveal">
            <span>02</span>
            <span>DEVELOPMENT · DIGITAL BUILD · VSL</span>
          </div>

          <div className="person-grid person-grid-reverse">

            <div className="person-content about-reveal">

              <p className="person-kicker">
                THEN THE THINKING BECOMES REAL
              </p>

              <h2>
                HE MAKES
                <br />
                <span>THE EXPERIENCE</span>
                <br />
                WORK.
              </h2>

              <p className="person-lead">
                My brother handles the other half of EZ —
                turning the strategy into an experience
                people can actually use.
              </p>

              <p>
                Structure, interaction, responsiveness and
                the technical details underneath it all have
                to work together.
              </p>

              <p>
                Because a beautiful website that frustrates
                the person using it isn't a beautiful website.
              </p>

              <div className="person-mark blue-mark">
                <span>EZ</span>
                <i />
                <small>THE BUILD</small>
              </div>

            </div>

            <div className="about-photo">
              <img
                src="/src/assets/qaseem_pfp.jpg"
                alt="EZ development"
              />

              <span className="photo-tag">
                DEVELOPMENT / EZ
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* ================================
          CONNECTION
      ================================= */}

      <section className="about-connection">

        <div className="about-container">

          <div className="connection-top about-reveal">
            <span>03 / WHY TWO?</span>
            <span>ONE EXPERIENCE</span>
          </div>

          <div className="connection-content">

            <h2 className="about-reveal">
              ONE THINKS
              <br />
              ABOUT THE
              <em> MESSAGE.</em>
            </h2>

            <div className="connection-visual">

              <svg
                viewBox="0 0 500 180"
                aria-hidden="true"
              >
                <path
                  d="M20 90 C130 10 210 10 250 90 C290 170 370 170 480 90"
                  className="connection-line connection-burgundy"
                />

                <path
                  d="M20 90 C130 170 210 170 250 90 C290 10 370 10 480 90"
                  className="connection-line connection-blue"
                />

                <circle
                  cx="250"
                  cy="90"
                  r="7"
                  className="connection-dot"
                />
              </svg>

            </div>

            <h2 className="about-reveal">
              ONE MAKES
              <br />
              IT <em>WORK.</em>
            </h2>

          </div>

          <div className="connection-copy about-reveal">
            <p>
              That's the advantage of EZ. The person shaping
              the message and the person building the experience
              are working toward the same outcome.
            </p>
          </div>

        </div>
      </section>


      {/* ================================
          PROCESS
      ================================= */}

      <section className="about-process">
        <div className="about-container">

          <div className="process-heading about-reveal">
            <span>04 / HOW WE WORK</span>

            <h2>
              NO MYSTERY.
              <br />
              NO <em>HAND-OFFS.</em>
            </h2>
          </div>

          <div className="process-list">

            <div className="process-item about-reveal">
              <span>01</span>

              <div>
                <h3>UNDERSTAND</h3>
                <p>
                  We understand the business before deciding
                  what the website should say or look like.
                </p>
              </div>
            </div>

            <div className="process-item about-reveal">
              <span>02</span>

              <div>
                <h3>SHAPE</h3>
                <p>
                  We turn the strategy into a clear structure,
                  message and digital direction.
                </p>
              </div>
            </div>

            <div className="process-item about-reveal">
              <span>03</span>

              <div>
                <h3>BUILD</h3>
                <p>
                  We develop the experience with responsiveness,
                  interaction and detail in mind.
                </p>
              </div>
            </div>

            <div className="process-item about-reveal">
              <span>04</span>

              <div>
                <h3>REFINE</h3>
                <p>
                  We look at the small things because that's
                  usually where premium experiences are won.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* =========================================
    WHAT WE BELIEVE
========================================= */}

<section className="about-beliefs">

  <div className="about-container">

    <div className="beliefs-intro about-reveal">
      <span>05 / WHAT WE BELIEVE</span>

      <h2>
        WE DON'T BUILD
        <br />
        FOR THE SAKE OF
        <br />
        <em>BUILDING.</em>
      </h2>

      <p>
        We build so the right person understands
        why they should stay.
      </p>
    </div>


    <div className="beliefs-flow">

      {/* =====================================
          CLARITY
      ===================================== */}

      <article className="belief belief-clarity">

        <span className="belief-number">01</span>

        <h3>CLARITY</h3>

        <p>
          If people don't understand what you do,
          nothing else matters.
        </p>

      </article>


      {/* =====================================
          ARROW ONE
      ===================================== */}

      <div className="belief-arrow belief-arrow-one" aria-hidden="true">

        <svg
          viewBox="0 0 220 90"
          preserveAspectRatio="none"
        >
          <path
            className="belief-arrow-line"
            d="M5 20 C70 20 125 75 205 65"
          />

          <path
            className="belief-arrow-head"
            d="M190 54 L207 65 L190 75"
          />
        </svg>

      </div>


      {/* =====================================
          CREDIBILITY
      ===================================== */}

      <article className="belief belief-credibility">

        <span className="belief-number">02</span>

        <h3>CREDIBILITY</h3>

        <p>
          Your digital presence should make the
          right person feel confident about you.
        </p>

      </article>


      {/* =====================================
          ARROW TWO
      ===================================== */}

      <div className="belief-arrow belief-arrow-two" aria-hidden="true">

        <svg
          viewBox="0 0 220 90"
          preserveAspectRatio="none"
        >
          <path
            className="belief-arrow-line"
            d="M5 65 C80 75 135 20 205 20"
          />

          <path
            className="belief-arrow-head"
            d="M190 9 L207 20 L190 31"
          />
        </svg>

      </div>


      {/* =====================================
          CONVERSION
      ===================================== */}

      <article className="belief belief-conversion">

        <span className="belief-number">03</span>

        <h3>CONVERSION</h3>

        <p>
          Beautiful is nice.
          Beautiful and effective is the point.
        </p>

      </article>

    </div>

  </div>

</section>

      {/* ================================
          FINAL
      ================================= */}

      <section className="about-final">
        <div className="about-container">

          <span className="final-label">
            SO, THAT'S US.
          </span>

          <h2 className="about-reveal">
            NOW LET'S TALK
            <br />
            ABOUT <em>YOU.</em>
          </h2>

          <a
            href="/contact"
            className="about-final-link"
          >
            <span>START A CONVERSATION</span>
            <strong>↗</strong>
          </a>

        </div>
      </section>

    </main>
  );
}

export default About;
