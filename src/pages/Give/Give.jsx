import React from "react";

const backgroundStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'Inter', sans-serif",
};

const cardStyle = {
  background: "white",
  borderRadius: "1.5rem",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
  padding: "3rem 2.5rem",
  maxWidth: "400px",
  width: "100%",
  textAlign: "center",
};

const buttonStyle = {
  background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
  color: "white",
  border: "none",
  borderRadius: "999px",
  padding: "0.75rem 2rem",
  fontSize: "1.1rem",
  fontWeight: "600",
  cursor: "pointer",
  marginTop: "2rem",
  transition: "box-shadow 0.2s",
  boxShadow: "0 2px 8px rgba(99, 102, 241, 0.15)",
};

const Give = () => (
  <div style={backgroundStyle}>
    <div style={cardStyle}>
      <svg
        width="48"
        height="48"
        fill="none"
        viewBox="0 0 24 24"
        style={{ marginBottom: "1rem" }}
      >
        <circle cx="12" cy="12" r="12" fill="#6366f1" opacity="0.1" />
        <path
          d="M12 21c-4.418 0-8-3.582-8-8 0-3.866 3.134-7 7-7s7 3.134 7 7c0 4.418-3.582 8-8 8zm0-14c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6s6-2.686 6-6c0-3.314-2.686-6-6-6zm1 7h-2v-2h2v-2h2v2h2v2h-2v2h-2v-2z"
          fill="#6366f1"
        />
      </svg>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "0.5rem",
          color: "#3730a3",
        }}
      >
        Give Generously
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
        Your generosity helps us continue our mission. Thank you for supporting
        Faithful Life Bible Church.
      </p>
      <button style={buttonStyle}>Give Now</button>
    </div>
  </div>
);

export default Give;
