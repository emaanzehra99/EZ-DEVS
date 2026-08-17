import { useEffect, useState } from "react";
import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-top ${visible ? "show" : ""}`}
      onClick={scrollTop}
      aria-label="Back to top"
    >
      <span>BACK TO TOP</span>
      <b>↑</b>
    </button>
  );
}

export default BackToTop;