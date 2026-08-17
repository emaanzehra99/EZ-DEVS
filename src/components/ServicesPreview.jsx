import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ServicesPreview.css";

gsap.registerPlugin(ScrollTrigger);

function ServicesPreview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      timeline
        .from(".services-eyebrow", {
          y: 25,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".services-statement-line",
          {
            yPercent: 110,
            opacity: 0,
            duration: 1,
            stagger: 0.13,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .from(
          ".services-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ".services-capability",
          {
            y: 35,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".services-cta",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="services-preview"
      ref={sectionRef}
      aria-labelledby="services-preview-title"
    >
      <div className="services-preview-container">

        <div className="services-top">
          <span className="services-eyebrow">
            WHAT WE BRING TO THE TABLE
          </span>

          <span className="services-index">
            04 / 06
          </span>
        </div>


        <div className="services-main">

          <div className="services-statement">
            <div className="services-statement-line-wrap">
              <span className="services-statement-line">
                WE DON'T JUST
              </span>
            </div>

            <div className="services-statement-line-wrap">
              <span className="services-statement-line">
                BUILD
                <em> WEBSITES.</em>
              </span>
            </div>

            <div className="services-statement-line-wrap">
              <span className="services-statement-line services-accent">
                WE BUILD THE
              </span>
            </div>

            <div className="services-statement-line-wrap">
              <span className="services-statement-line">
                EXPERIENCE
              </span>
            </div>

            <div className="services-statement-line-wrap">
              <span className="services-statement-line">
                AROUND THEM.
              </span>
            </div>
          </div>


          <div className="services-side">

            <p className="services-description">
              Your website, your words and your story should
              never feel like separate pieces. We bring them
              together into one digital experience built around
              the business behind it.
            </p>


            <div className="services-capabilities">

              <div className="services-capability">
                <span className="services-capability-number">
                  01
                </span>

                <span className="services-capability-name">
                  WEB EXPERIENCE
                </span>

                <span className="services-capability-arrow">
                  ↗
                </span>
              </div>


              <div className="services-capability">
                <span className="services-capability-number">
                  02
                </span>

                <span className="services-capability-name">
                  CONVERSION COPY
                </span>

                <span className="services-capability-arrow">
                  ↗
                </span>
              </div>


              <div className="services-capability">
                <span className="services-capability-number">
                  03
                </span>

                <span className="services-capability-name">
                  VSL STORYTELLING
                </span>

                <span className="services-capability-arrow">
                  ↗
                </span>
              </div>

            </div>


            <a
              href="/services"
              className="services-cta"
            >
              <span>
                EXPLORE OUR SERVICES
              </span>

              <span className="services-cta-arrow">
                ↗
              </span>
            </a>

          </div>

        </div>


        <div className="services-bottom">
          <span>
            STRATEGY
          </span>

          <span className="services-bottom-line" />

          <span>
            EXPERIENCE
          </span>

          <span className="services-bottom-line" />

          <span>
            STORY
          </span>
        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;