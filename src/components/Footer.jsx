import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-reveal",
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power4.out",

          scrollTrigger: {
            trigger: footer,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="site-footer" ref={footerRef}>

      {/* =========================================
          ATMOSPHERE
      ========================================= */}

      <div
        className="footer-glow footer-glow-burgundy"
        aria-hidden="true"
      />

      <div
        className="footer-glow footer-glow-blue"
        aria-hidden="true"
      />


      <div className="footer-container">

        {/* =========================================
            TOP
        ========================================= */}

        <div className="footer-top footer-reveal">

          <div className="footer-label">
            <span>EZ DEVELOPERS</span>
            <span>BUILT TO BE REMEMBERED.</span>
          </div>

          <div className="footer-brand">
            EZ
            <span>.</span>
          </div>

        </div>


        {/* =========================================
            BIG CLOSING STATEMENT
        ========================================= */}

        <div className="footer-statement footer-reveal">

          <h2>
            YOUR NEXT
            <br />
            <span>MOVE STARTS HERE.</span>
          </h2>

          <p>
            If your website isn't making people stop,
            understand, and act — let's change that.
          </p>

        </div>


        {/* =========================================
            NAVIGATION + CTA
        ========================================= */}

        <div className="footer-middle">

          <div className="footer-column footer-reveal">

            <span className="footer-column-title">
              EXPLORE
            </span>

            <nav className="footer-links">

              <NavLink to="/">
                Home
              </NavLink>

              <NavLink to="/work">
                Work
              </NavLink>

              <NavLink to="/services">
                Services
              </NavLink>

              <NavLink to="/about">
                About
              </NavLink>

              <NavLink to="/process">
                Process
              </NavLink>

            </nav>

          </div>


          <div className="footer-column footer-reveal">

            <span className="footer-column-title">
              START A CONVERSATION
            </span>

            <NavLink
              to="/contact"
              className="footer-contact-link"
            >
              Let's Talk
              <span>↗</span>
            </NavLink>

          </div>

        </div>


        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="footer-bottom footer-reveal">

          <span>
            © {new Date().getFullYear()} EZ DEVELOPERS
          </span>

          <span>
            DESIGN · DEVELOPMENT · COPY
          </span>

          <span>
            MADE WITH INTENT.
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;