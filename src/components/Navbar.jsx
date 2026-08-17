import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const mobileNavClass = ({ isActive }) =>
    isActive ? "mobile-nav-link active" : "mobile-nav-link";

  return (
    <header className="navbar-wrap">
      <nav
        className={`navbar ${menuOpen ? "menu-open" : ""}`}
        aria-label="Main navigation"
      >
        {/* LOGO */}
        <NavLink
          to="/"
          end
          className="navbar-logo"
          aria-label="EZ Developers home"
          onClick={closeMenu}
        >
          <span className="logo-mark" aria-hidden="true">
            <span className="logo-e">E</span>
            <span className="logo-z">Z</span>
          </span>

          <span className="logo-text">EZ DEVELOPERS</span>
        </NavLink>


        {/* DESKTOP NAVIGATION */}
        <div className="navbar-links">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/services" className={navClass}>
            Services
          </NavLink>

          <NavLink to="/work" className={navClass}>
            Work
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/process" className={navClass}>
            Process
          </NavLink>
        </div>


        {/* DESKTOP CTA */}
        <NavLink to="/contact" className="navbar-cta">
          <span>Let's Talk</span>
          <span className="cta-arrow">↗</span>
        </NavLink>


        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-menu"
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((previous) => !previous)
          }
        >
          <span></span>
          <span></span>
        </button>


        {/* MOBILE NAVIGATION */}
        <div
          className={`mobile-menu ${
            menuOpen ? "active" : ""
          }`}
        >
          <NavLink
            to="/"
            end
            className={mobileNavClass}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={mobileNavClass}
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/work"
            className={mobileNavClass}
            onClick={closeMenu}
          >
            Work
          </NavLink>

          <NavLink
            to="/about"
            className={mobileNavClass}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/process"
            className={mobileNavClass}
            onClick={closeMenu}
          >
            Process
          </NavLink>

          <NavLink
            to="/contact"
            className="mobile-menu-cta"
            onClick={closeMenu}
          >
            Let's Talk <span>↗</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;