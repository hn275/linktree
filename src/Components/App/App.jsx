import { useRef } from "react";
import Profile from "assets/linktree-avatar.png";
import { FiLinkedin, FiHome, FiGithub, FiCodesandbox } from "react-icons/fi";
import { DarkMode } from "Features/DarkMode/DarkMode";
import "Styles/styles.css";

function App() {
  const appRef = useRef(null);
  return (
    <div ref={appRef} className="App" data-theme="light">
      <div className="wrapper">
        <div className="darkmode-toggle">
          <DarkMode node={appRef} />
        </div>
        <div className="profile-container">
          <div className="profile neumorphism--profile">
            <img src={Profile} alt="profile" />
          </div>
          <h1>haln</h1>
        </div>

        <main>
          <ul>
            {/* TODO: uncomment this */}
            {/* <li> */}
            {/*   <div className="link-container neumorphism--btn"> */}
            {/*     <span className="icon"> */}
            {/*       <FiHome /> */}
            {/*     </span> */}
            {/*     <a href="#">Home</a> */}
            {/*   </div> */}
            {/* </li> */}
            <li>
              <div className="link-container neumorphism--btn">
                <span className="icon">
                  <FiLinkedin />
                </span>
                <a href="https://www.linkedin.com/in/hal-nguyen-48a22b22a/">
                  LinkedIn
                </a>
              </div>
            </li>
            <li>
              <div className="link-container neumorphism--btn">
                <span className="icon">
                  <FiGithub />
                </span>
                <a href="https://github.com/hn275">Github</a>
              </div>
            </li>
            <li>
              <div className="link-container neumorphism--btn">
                <span className="icon codesandbox">
                  <FiCodesandbox />
                </span>
                <a href="https://codesandbox.io/dashboard/all/Frontend%20Mentor?workspace=c954f860-5d82-47a3-acee-2fe30e310659">
                  CodeSandBox
                </a>
              </div>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
