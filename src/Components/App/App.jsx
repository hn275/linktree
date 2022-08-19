import { useRef } from "react";
import Profile from "assets/linktree-avatar.png";
import { FiLinkedin, FiHome, FiGithub, FiCodesandbox } from "react-icons/fi";
import { DarkMode } from "Features/DarkMode/DarkMode";
import "Styles/styles.css";

function App() {
  const appRef = useRef(null);
  return (
    <div ref={appRef} className="App" data-theme="light">
      <div className="darkmode-toggle">
        <DarkMode node={appRef} />
      </div>
      <div className="wrapper">
        <div className="profile-container">
          <div className="profile neumorphism--profile">
            <img src={Profile} alt="profile" />
          </div>
        </div>
        <main>
          <ul>
            <li>
              <div className="link-container neumorphism--btn">
                <span className="icon">
                  <FiHome />
                </span>
                <a href="#">Home</a>
              </div>
            </li>
            <li>
              <div className="link-container neumorphism--btn">
                <span className="icon">
                  <FiLinkedin />
                </span>
                <a href="#">LinkedIn</a>
              </div>
            </li>
            <li>
              <div className="link-container neumorphism--btn">
                <span className="icon">
                  <FiGithub />
                </span>
                <a href="#">Github</a>
              </div>
            </li>
            <li>
              <div className="link-container neumorphism--btn">
                <span className="icon codesandbox">
                  <FiCodesandbox />
                </span>
                <a href="#">CodeSandBox</a>
              </div>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
