import React from "react";
import "../../assets/css/landingCraft.css";

const LandingCraftHeader: React.FC = () => {
  return (
    <header className="lp-header">
      <div
        className="lp-logo"
        style={{ cursor: "pointer" }}
        onClick={() => window.location.replace("/landingCraft")}
      >
        Landing<span>Craft</span>
      </div>
      <nav>
        <ul className="lp-nav">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="/landingCraft/about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button
          className="lp-cta-btn"
          onClick={() => window.location.replace("/dashboard")}
        >
          ← Back to Home
        </button>
        <button className="lp-cta-btn">Get Started →</button>
      </div>{" "}
    </header>
  );
};

export default LandingCraftHeader;
