import React from "react";

const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', 'Roboto', sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px rgba(60, 72, 88, 0.15)",
          padding: "3rem 2.5rem",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#4338ca",
            marginBottom: "1rem",
            letterSpacing: "1px",
          }}
        >
          About Us
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: "#334155",
            marginBottom: "2rem",
            lineHeight: 1.7,
          }}
        >
          Welcome to Faithful Life Bible Church! We are a vibrant community
          dedicated to spiritual growth, fellowship, and service. Join us as we
          journey together in faith, hope, and love.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <a
            href="/"
            style={{
              background: "#6366f1",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
              boxShadow: "0 2px 8px rgba(99, 102, 241, 0.15)",
              transition: "background 0.2s",
            }}
          >
            Home
          </a>
          <a
            href="/contact"
            style={{
              background: "#f1f5f9",
              color: "#4338ca",
              padding: "0.75rem 1.5rem",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
              border: "1px solid #e0e7ff",
              transition: "background 0.2s",
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
