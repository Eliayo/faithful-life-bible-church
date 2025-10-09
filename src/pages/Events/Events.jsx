import React from "react";

const events = [
  {
    title: "Sunday Worship",
    date: "Every Sunday, 10:00 AM",
    description: "Join us for uplifting worship and inspiring messages.",
  },
  {
    title: "Bible Study",
    date: "Wednesdays, 6:30 PM",
    description: "Deepen your faith with our weekly Bible study sessions.",
  },
  {
    title: "Youth Fellowship",
    date: "Fridays, 5:00 PM",
    description: "A vibrant gathering for the youth to connect and grow.",
  },
];

export default function Events() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
        padding: "40px 0",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          background: "rgba(255,255,255,0.85)",
          borderRadius: 24,
          boxShadow: "0 8px 32px rgba(60,60,120,0.15)",
          padding: "40px 32px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: 36,
            marginBottom: 32,
            color: "#4b2e83",
            letterSpacing: 1,
          }}
        >
          Upcoming Events
        </h1>
        <div>
          {events.map((event, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: 28,
                padding: "24px 20px",
                borderRadius: 16,
                background: "linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%)",
                boxShadow: "0 2px 8px rgba(120,120,180,0.08)",
                transition: "transform 0.2s",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: 24,
                  color: "#3a2066",
                  fontWeight: 600,
                }}
              >
                {event.title}
              </h2>
              <p
                style={{
                  margin: "8px 0 0 0",
                  color: "#5e4b8b",
                  fontWeight: 500,
                }}
              >
                {event.date}
              </p>
              <p
                style={{
                  margin: "12px 0 0 0",
                  color: "#3a2066",
                  opacity: 0.85,
                }}
              >
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
