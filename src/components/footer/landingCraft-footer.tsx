import React from "react";
import "../../assets/css/landingCraft.css";

const LandingCraftFooter: React.FC = () => {
  return (
    <footer className="lp-footer" id="contact">
      <div className="lp-footer-top">
        <div className="lp-footer-brand">
          <div className="lp-logo">
            Landing<span>Craft</span>
          </div>
          <p>
            Intelligent automation for modern teams. We make AI accessible,
            reliable, and genuinely useful.
          </p>
          {/* Contact Information */}
          <div className="lp-footer-contact" style={{ marginTop: "1.25rem" }}>
            <div className="lp-contact-item" style={{ cursor: "pointer" }}>
              <span>📧</span>
              <a href="mailto:hello@landingcraft.ai">hello@landingcraft.ai</a>
            </div>
            <div className="lp-contact-item">
              <span>📞</span>
              <a href="tel:+1-800-LANDING-1">+1 (800) 526-3464</a>
            </div>
            <div className="lp-contact-item">
              <span>📍</span>
              <span>San Francisco, CA 94105</span>
            </div>
          </div>
        </div>

        <div className="lp-footer-col">
          <h4>Product</h4>
          <ul>
            <li>
              <a href="#!">Features</a>
            </li>
            <li>
              <a href="#!">Integrations</a>
            </li>
            <li>
              <a href="#!">Pricing</a>
            </li>
            <li>
              <a href="#!">Changelog</a>
            </li>
          </ul>
        </div>

        <div className="lp-footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#!">About Us</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
            <li>
              <a href="#!">Careers</a>
            </li>
            <li>
              <a href="#!">Press</a>
            </li>
          </ul>
        </div>

        <div className="lp-footer-col">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#!">Docs</a>
            </li>
            <li>
              <a href="#!">Status</a>
            </li>
            <li>
              <a href="#!">Community</a>
            </li>
            <li>
              <a href="#!">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="lp-footer-divider" />

      <div className="lp-footer-bottom">
        <p>© 2026 LandingCraft, Inc. All rights reserved.</p>
        <p>Privacy Policy · Terms of Service · Cookie Settings</p>
      </div>
    </footer>
  );
};

export default LandingCraftFooter;
