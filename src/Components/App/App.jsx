import Profile from "assets/linktree-avatar.png";
import { FiLinkedin, FiHome, FiGithub, FiCodesandbox } from "react-icons/fi";
import "Styles/styles.css";

function App() {
  return (
    <div className="App">
      <div className="profile-container">
        <div className="profile">
          <img src={Profile} alt="profile" />
        </div>
      </div>
      <main>
        <ul>
          <li>
            <div className="link-container">
              <span className="icon">
                <FiHome />
              </span>
              <a href="#">Home</a>
            </div>
          </li>
          <li>
            <div className="link-container">
              <span className="icon">
                <FiLinkedin />
              </span>
              <a href="#">LinkedIn</a>
            </div>
          </li>
          <li>
            <div className="link-container">
              <span className="icon">
                <FiGithub />
              </span>
              <a href="#">Github</a>
            </div>
          </li>
          <li>
            <div className="link-container">
              <span className="icon codesandbox">
                <FiCodesandbox />
              </span>
              <a href="#">CodeSandBox</a>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
