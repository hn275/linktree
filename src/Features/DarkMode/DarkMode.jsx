import { useState, useEffect, useRef } from "react";
import "Styles/styles.css";

export const DarkMode = ({ node }) => {
  const slider = useRef(null);
  const [darkmode, setDarkmode] = useState(true);
  const handleToggle = () => {
    setDarkmode((darkmode) => !darkmode);
  };

  useEffect(() => {
    // set mode according to `darkmode` state
    node.current.dataset.theme = darkmode ? "dark" : "light";
  }, [darkmode]);

  useEffect(() => {
    const sliderBtn = slider.current;
    if (darkmode) sliderBtn.classList.add("active");
    if (!darkmode) sliderBtn.classList.remove("active");
  }, [darkmode]);

  return (
    <div onClick={handleToggle} className="darkmode-btn neumorphism--btn">
      <div className="darkmode-slider-container">
        <span ref={slider} className="darkmode-slider"></span>
      </div>
    </div>
  );
};
