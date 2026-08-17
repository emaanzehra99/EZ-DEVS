import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhyEZ.css";

gsap.registerPlugin(ScrollTrigger);

function WhyEZ() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                paused: true,
            });

            tl.fromTo(
                ".why-eyebrow",
                {
                    y: 20,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                }
            )

                .fromTo(
                    ".why-title-line",
                    {
                        yPercent: 110,
                        opacity: 0,
                    },
                    {
                        yPercent: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.12,
                        ease: "power4.out",
                    },
                    "-=0.3"
                )

                .fromTo(
                    ".why-specialist",
                    {
                        y: 30,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power4.out",
                    },
                    "-=0.45"
                )

                .fromTo(
                    ".why-path-burgundy",
                    {
                        strokeDashoffset: 900,
                    },
                    {
                        strokeDashoffset: 0,
                        duration: 1.8,
                        ease: "power2.inOut",
                    },
                    "-=0.35"
                )

                .fromTo(
                    ".why-path-blue",
                    {
                        strokeDashoffset: 900,
                    },
                    {
                        strokeDashoffset: 0,
                        duration: 1.8,
                        ease: "power2.inOut",
                    },
                    "<0.15"
                )

                .fromTo(
                    ".why-path-burgundy-soft",
                    {
                        strokeDashoffset: 900,
                    },
                    {
                        strokeDashoffset: 0,
                        duration: 2,
                        ease: "power2.inOut",
                    },
                    "-=1.3"
                )

                .fromTo(
                    ".why-path-blue-soft",
                    {
                        strokeDashoffset: 900,
                    },
                    {
                        strokeDashoffset: 0,
                        duration: 2,
                        ease: "power2.inOut",
                    },
                    "<0.15"
                )

                .fromTo(
                    ".why-svg-dot",
                    {
                        opacity: 0,
                        scale: 0.5,
                    },
                    {
                        opacity: 0.9,
                        scale: 1,
                        duration: 0.5,
                        ease: "power3.out",
                    },
                    "-=0.35"
                )

                .fromTo(
                    ".why-svg-label",
                    {
                        opacity: 0,
                        y: 10,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    "-=0.2"
                )

                .fromTo(
                    ".why-bottom",
                    {
                        y: 25,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.35"
                );

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
            className="why-ez"
            ref={sectionRef}
            aria-labelledby="why-ez-title"
        >
            <div className="why-glow why-glow-burgundy" />
            <div className="why-glow why-glow-blue" />

            <div className="why-container">

                {/* TOP */}

                <div className="why-top">
                    <span className="why-eyebrow">
                        THE EZ DIFFERENCE
                    </span>

                    <span className="why-index">
                        05 / 06
                    </span>
                </div>


                {/* MAIN STATEMENT */}

                <div className="why-title" id="why-ez-title">

                    <div className="why-title-line-wrap">
                        <span className="why-title-line">
                            ONE SPECIALIST
                        </span>
                    </div>

                    <div className="why-title-line-wrap">
                        <span className="why-title-line">
                            BUILDS THE <em>EXPERIENCE.</em>
                        </span>
                    </div>

                    <div className="why-title-line-wrap">
                        <span className="why-title-line why-title-accent">
                            ANOTHER BUILDS
                        </span>
                    </div>

                    <div className="why-title-line-wrap">
                        <span className="why-title-line">
                            THE STORY.
                        </span>
                    </div>

                </div>


                {/* SPECIALISTS */}

                <div className="why-specialists">

                    <div className="why-specialist why-specialist-left">

                        <span className="why-specialist-number">
                            01
                        </span>

                        <div className="why-specialist-info">

                            <span className="why-specialist-role">
                                WEB + COPY
                            </span>

                            <h3>
                                EMAAN
                            </h3>

                            <p>
                                Digital experiences and conversion-focused
                                messaging designed to make your business
                                easier to understand and trust.
                            </p>

                        </div>

                    </div>


                    <div className="why-specialist why-specialist-right">

                        <span className="why-specialist-number">
                            02
                        </span>

                        <div className="why-specialist-info">

                            <span className="why-specialist-role">
                                VSL + STORY
                            </span>

                            <h3>
                                S. QASEEM
                            </h3>

                            <p>
                                Conversion-driven video storytelling
                                built to turn attention into understanding,
                                desire and action.
                            </p>

                        </div>

                    </div>

                </div>


                {/* SVG CONVERGENCE */}

                <div className="why-svg-wrap" aria-hidden="true">

                    <svg
                        className="why-svg"
                        viewBox="0 0 1200 300"
                        preserveAspectRatio="none"
                    >

                        {/* BURGUNDY PATH */}

                        <path
                            className="why-path why-path-burgundy"
                            d="
                M 0 55
                C 180 55,
                  250 65,
                  360 105
                C 450 138,
                  500 150,
                  600 150
              "
                        />

                        {/* BLUE PATH */}

                        <path
                            className="why-path why-path-blue"
                            d="
                M 1200 245
                C 1020 245,
                  950 235,
                  840 195
                C 750 162,
                  700 150,
                  600 150
              "
                        />

                        {/* BURGUNDY CONTINUATION */}

                        <path
                            className="why-path why-path-burgundy-soft"
                            d="
                M 600 150
                C 690 150,
                  750 138,
                  840 105
                C 950 65,
                  1020 55,
                  1200 55
              "
                        />

                        {/* BLUE CONTINUATION */}

                        <path
                            className="why-path why-path-blue-soft"
                            d="
                M 600 150
                C 510 150,
                  450 162,
                  360 195
                C 250 235,
                  180 245,
                  0 245
              "
                        />

                        {/* CENTRAL INTERSECTION */}

                        <circle
                            className="why-svg-dot"
                            cx="600"
                            cy="150"
                            r="3"
                        />

                    </svg>

                    <div className="why-svg-label">
                        <span>EZ CONNECTS BOTH</span>
                    </div>

                </div>


                {/* BOTTOM */}

                <div className="why-bottom">

                    <div className="why-bottom-copy">

                        <span className="why-bottom-eyebrow">
                            WHY THIS MATTERS
                        </span>

                        <p>
                            Your website shouldn't feel disconnected
                            from the message selling it.
                        </p>

                    </div>


                    <div className="why-bottom-statement">

                        <span>
                            DIFFERENT DISCIPLINES.
                        </span>

                        <span>
                            ONE DIRECTION.
                        </span>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default WhyEZ;