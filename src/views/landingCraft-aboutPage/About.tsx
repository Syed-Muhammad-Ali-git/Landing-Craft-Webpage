import React from "react";
import LandingCraftHeader from "../../components/header/LandingCraftHeader";
import LandingCraftFooter from "../../components/footer/landingCraft-footer";
import "../../assets/css/landingCraft-about.css";

const NovaAbout: React.FC = () => {
  return (
    <div className="lp-root">
      {/* ── HEADER ── */}
      <LandingCraftHeader />

      <main>
        <section className="lp-hero">
          <div
            className="lp-hero-content"
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <div className="lp-hero-badge fade-up">Our Mission</div>
            <h1
              className="lp-hero-title fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Democratizing <span className="highlight">Intelligence</span>
            </h1>
            <p
              className="lp-hero-desc fade-up"
              style={{ margin: "1.25rem auto 0", animationDelay: "0.2s" }}
            >
              LandingCraft was founded on the belief that cutting-edge
              artificial intelligence should be accessible to teams of all
              sizes, not just tech giants.
            </p>
          </div>
        </section>

        <section className="lp-features">
          <div className="lp-section-label">Our Story</div>
          <h2 className="lp-section-title">
            Built by thinkers, for innovators
          </h2>
          <div className="lp-features-grid">
            <div className="lp-feature-card">
              <div className="lp-feature-name">Founded 2024</div>
              <p className="lp-feature-text">
                Started in a small garage in San Francisco, LandingCraft has
                grown from a prototype to a platform serving thousands of users.
              </p>
            </div>
            <div className="lp-feature-card">
              <div className="lp-feature-name">Integrity First</div>
              <p className="lp-feature-text">
                We believe in ethical AI. Your data is your property, and we
                ensure it stays that way with SOC-2 compliance.
              </p>
            </div>
            <div className="lp-feature-card">
              <div className="lp-feature-name">Scale Daily</div>
              <p className="lp-feature-text">
                From startups to enterprises, LandingCraft scales with your
                needs effortlessly.
              </p>
            </div>
          </div>
        </section>

        <section className="lp-stats">
          {[
            { num: "12+", label: "Global Offices" },
            { num: "500+", label: "Employees" },
            { num: "1B+", label: "Predictions/Day" },
          ].map((s) => (
            <div className="lp-stat" key={s.label}>
              <div className="lp-stat-num">{s.num}</div>
              <div className="lp-stat-label">{s.label}</div>
            </div>
          ))}
        </section>
      </main>

      <LandingCraftFooter />
    </div>
  );
};

export default NovaAbout;
