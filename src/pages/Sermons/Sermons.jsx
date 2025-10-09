import React from "react";

const sermons = [
  {
    title: "Walking in Faith",
    date: "2024-06-01",
    speaker: "Pastor John Doe",
    description: "Discover how to strengthen your faith in challenging times.",
  },
  {
    title: "The Power of Prayer",
    date: "2024-05-25",
    speaker: "Pastor Jane Smith",
    description: "Unlock the transformative power of consistent prayer.",
  },
  {
    title: "Grace and Forgiveness",
    date: "2024-05-18",
    speaker: "Pastor Michael Lee",
    description: "Embrace grace and learn to forgive as Christ forgave us.",
  },
];

export default function Sermons() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        padding: "2rem",
        fontFamily: "'Segoe UI', 'Roboto', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(60,72,100,0.12)",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: "#3730a3",
            marginBottom: "2rem",
            letterSpacing: "1px",
          }}
        >
          Sermons
        </h1>
        <div>
          {sermons.map((sermon, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: "2rem",
                padding: "1.5rem",
                borderRadius: 12,
                background: "linear-gradient(90deg, #e0e7ff 60%, #f1f5f9 100%)",
                boxShadow: "0 2px 8px rgba(60,72,100,0.06)",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "1.5rem",
                  color: "#4f46e5",
                  fontWeight: 600,
                }}
              >
                {sermon.title}
              </h2>
              <div
                style={{
                  fontSize: "1rem",
                  color: "#64748b",
                  margin: "0.5rem 0",
                }}
              >
                {sermon.date} &middot; {sermon.speaker}
              </div>
              <p
                style={{
                  color: "#334155",
                  margin: 0,
                }}
              >
                {sermon.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
