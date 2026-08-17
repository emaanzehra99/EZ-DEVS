import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FinalCTA.css";

gsap.registerPlugin(ScrollTrigger);

function FinalCTA() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            const burgundyArrow = document.querySelector(
                ".cta-drawn-arrow-burgundy"
            );

            const blueArrow = document.querySelector(
                ".cta-drawn-arrow-blue"
            );

            const burgundyLength =
                burgundyArrow?.getTotalLength() || 1400;

            const blueLength =
                blueArrow?.getTotalLength() || 1200;

            const tl = gsap.timeline({
                paused: true,
            });

            /* -----------------------------------------
               INITIAL SVG STATE
            ----------------------------------------- */

            gsap.set(burgundyArrow, {
                strokeDasharray: burgundyLength,
                strokeDashoffset: burgundyLength,
            });

            gsap.set(blueArrow, {
                strokeDasharray: blueLength,
                strokeDashoffset: blueLength,
            });

            /* -----------------------------------------
               TEXT
            ----------------------------------------- */

            tl.fromTo(
                ".cta-eyebrow",
                {
                    y: 20,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.65,
                    ease: "power3.out",
                }
            )

                .fromTo(
                    ".cta-title-line",
                    {
                        yPercent: 110,
                        opacity: 0,
                    },
                    {
                        yPercent: 0,
                        opacity: 1,
                        duration: 0.95,
                        stagger: 0.12,
                        ease: "power4.out",
                    },
                    "-=0.3"
                )

                /* -----------------------------------------
                   BURGUNDY DRAW
                ----------------------------------------- */

                .to(
                    burgundyArrow,
                    {
                        strokeDashoffset: 0,
                        duration: 2.1,
                        ease: "power2.inOut",
                    },
                    "-=0.25"
                )

                /* -----------------------------------------
                   BLUE DRAW
                ----------------------------------------- */

                .to(
                    blueArrow,
                    {
                        strokeDashoffset: 0,
                        duration: 1.9,
                        ease: "power2.inOut",
                    },
                    "<0.2"
                )

                /* -----------------------------------------
                   COPY
                ----------------------------------------- */

                .fromTo(
                    ".cta-copy",
                    {
                        y: 25,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        ease: "power3.out",
                    },
                    "-=1"
                )

                /* -----------------------------------------
                   BUTTON
                ----------------------------------------- */

                .fromTo(
                    ".cta-button",
                    {
                        y: 20,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        ease: "power3.out",
                    },
                    "-=0.45"
                );

            /* -----------------------------------------
               SCROLL ENTER / EXIT
            ----------------------------------------- */

            ScrollTrigger.create({
                trigger: section,

                start: "top 75%",
                end: "bottom 25%",

                onEnter: () => {
                    tl.play();
                },

                onLeave: () => {
                    tl.reverse();
                },

                onEnterBack: () => {
                    tl.play();
                },

                onLeaveBack: () => {
                    tl.reverse();
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="final-cta"
            ref={sectionRef}
            aria-labelledby="final-cta-title"
        >

            {/* =========================================
          AMBIENT GLOWS
      ========================================= */}

            <div
                className="cta-glow cta-glow-burgundy"
                aria-hidden="true"
            />

            <div
                className="cta-glow cta-glow-blue"
                aria-hidden="true"
            />


            <div className="cta-container">

                {/* =========================================
            EYEBROW
        ========================================= */}

                <div className="cta-eyebrow">

                    <span>06 / 06</span>

                    <span>SOMETHING FEELING OFF?</span>

                </div>


                {/* =========================================
            MAIN CTA
        ========================================= */}

                <div className="cta-main">


                    {/* =========================================
              HEADLINE
          ========================================= */}

                    <div
                        className="cta-heading"
                        id="final-cta-title"
                    >

                        <div className="cta-title-mask">
                            <h2 className="cta-title-line">
                                YOUR BUSINESS
                            </h2>
                        </div>

                        <div className="cta-title-mask">
                            <h2 className="cta-title-line">
                                ISN'T THE <em>PROBLEM.</em>
                            </h2>
                        </div>

                        <div className="cta-title-mask">
                            <h2 className="cta-title-line cta-title-muted">
                                THE EXPERIENCE
                            </h2>
                        </div>

                        <div className="cta-title-mask">
                            <h2 className="cta-title-line cta-title-accent">
                                MIGHT BE.
                            </h2>
                        </div>

                    </div>


                    <div class="arrow-wrapper">
                        <svg viewBox="0 0 100 250" preserveAspectRatio="xMidYMid meet" class="breathing-arrow">
                            <defs>
                                <marker id="arrowhead" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                                    <path d="M 0 1 L 9 5 L 0 9 z" fill="#3B82F6" />
                                </marker>
                            </defs>
                            <path d="M 20 10 Q 90 100 40 235" fill="none" stroke="#3B82F6" stroke-width="3" marker-end="url(#arrowhead)" />
                        </svg>
                    </div>
                    {/* =========================================
              BOTTOM CONTENT
          ========================================= */}

                    <div className="cta-bottom">

                        <p className="cta-copy">

                            Website. Story. Conversion.

                            <br />

                            If something isn't connecting,
                            <strong> let's find the gap.</strong>

                        </p>


                        <a
                            href="/contact"
                            className="cta-button"
                            aria-label="Tell us about your project"
                        >

                            <span>
                                TELL US ABOUT IT
                            </span>

                            <span className="cta-button-arrow">
                                ↗
                            </span>

                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default FinalCTA;