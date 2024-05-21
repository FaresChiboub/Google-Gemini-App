import { useContext } from "react";
import { assets } from "../assets/assets";
import "./Main.css";
import { Context } from "../context/Context";

function Main() {
  const {
    input,
    setInput,
    recentPrompts,
    showResult,
    loading,
    resultData,
    onSend,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <img className="google-icon" src="/Google.png" alt="Gemini.png" />
        <img src={assets.user_icon} alt="profile.png" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p className="CardText">
                  Suggestion: Explore the impact of renewable energy on the
                  environment
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p className="CardText">
                  What were the key milestones in the early days of space
                  exploration?
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p className="CardText">
                  React is a JavaScript library for building user interfaces
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p className="CardText">
                  Improve the readability of the following code
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompts}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                  </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img onClick={() => onSend()} src={assets.send_icon} alt="" />
          </div>
          <p className="bottom-info">
            Gemini can make mistakes. Check important info
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
