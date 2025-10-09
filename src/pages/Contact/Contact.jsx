import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px rgba(31, 41, 55, 0.15)",
          padding: "2.5rem 2rem",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2
          style={{
            marginBottom: "1.5rem",
            color: "#3730a3",
            fontWeight: 700,
            letterSpacing: "0.02em",
            textAlign: "center",
          }}
        >
          Contact Us
        </h2>
        <form>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#6366f1",
                fontWeight: 500,
              }}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid #c7d2fe",
                outline: "none",
                fontSize: "1rem",
                transition: "border 0.2s",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#6366f1",
                fontWeight: 500,
              }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid #c7d2fe",
                outline: "none",
                fontSize: "1rem",
                transition: "border 0.2s",
              }}
            />
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              htmlFor="message"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#6366f1",
                fontWeight: 500,
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Type your message..."
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid #c7d2fe",
                outline: "none",
                fontSize: "1rem",
                resize: "vertical",
                transition: "border 0.2s",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(99, 102, 241, 0.15)",
              transition: "background 0.2s",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
