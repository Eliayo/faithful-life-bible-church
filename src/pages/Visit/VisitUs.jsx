import React from "react";

const backgroundStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
};

const cardStyle = {
  background: "rgba(255,255,255,0.85)",
  borderRadius: "24px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
  padding: "48px 36px",
  maxWidth: "420px",
  width: "100%",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#4b2e83",
  marginBottom: "16px",
  letterSpacing: "1px",
};

const subheadingStyle = {
  fontSize: "1.2rem",
  color: "#333",
  marginBottom: "32px",
};

const buttonStyle = {
  background: "linear-gradient(90deg, #8ec5fc 0%, #e0c3fc 100%)",
  border: "none",
  borderRadius: "24px",
  color: "#fff",
  fontWeight: 600,
  fontSize: "1rem",
  padding: "14px 36px",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(142,197,252,0.2)",
  transition: "transform 0.1s",
};

export default function VisitUs() {
  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Visit Us</h1>
        <p style={subheadingStyle}>
          Experience a warm welcome at Faithful Life Bible Church.
          <br />
          Join us for worship, fellowship, and community.
        </p>
        <div
          style={{ marginBottom: "24px", color: "#4b2e83", fontWeight: 500 }}
        >
          <div>Sunday Service: 10:00 AM</div>
          <div>123 Faithful Avenue, Lagos</div>
        </div>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button style={buttonStyle}>Get Directions</button>
        </a>
      </div>
    </div>
  );
}
