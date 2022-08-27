import { useState, useEffect, useRef } from "react";
import { FiMoon } from "react-icons/fi";
import "Styles/styles.css";

export const DarkMode = ({ node }) => {
  const darkModeButton = useRef(null);
  const [darkmode, setDarkmode] = useState(false);
  const handleToggle = () => {
    setDarkmode((darkmode) => !darkmode);
  };

  useEffect(() => {
    // set mode according to `darkmode` state
    node.current.dataset.theme = darkmode ? "dark" : "light";
  }, [darkmode, node]);

  useEffect(() => {
    const sliderBtn = darkModeButton.current;
    if (darkmode) sliderBtn.classList.add("active");
    if (!darkmode) sliderBtn.classList.remove("active");
  }, [darkmode]);

  return (
    <div
      aria-label="dark mode toggle"
      onClick={handleToggle}
      className="darkmode-btn neumorphism--btn"
      ref={darkModeButton}
    >
      <FiMoon />
      <div className="indicator"></div>
    </div>
  );
};
