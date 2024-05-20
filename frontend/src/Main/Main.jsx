import { assets } from "../assets/assets";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="nav">
        <img className="google-icon" src="/Google.png" alt="Gemini.png" />
        <img src={assets.user_icon} alt="profile.png" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>
              Suggestion: Explore the impact of renewable energy on the
              environment
            </p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>
              What were the key milestones in the early days of space
              exploration?
            </p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>React is a JavaScript library for building user interfaces</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />

            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info,users should remain
            vigilant and verify information from multiple sources for accuracy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
