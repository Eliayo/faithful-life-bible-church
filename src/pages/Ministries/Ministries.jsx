import React from "react";

const ministries = [
    {
        name: "Worship Team",
        description: "Leading the congregation in heartfelt praise and worship.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
    },
    {
        name: "Youth Ministry",
        description: "Empowering the next generation to grow in faith and fellowship.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
    {
        name: "Outreach",
        description: "Serving our community and sharing the love of Christ.",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    {
        name: "Children's Ministry",
        description: "Nurturing young hearts with biblical truths and fun activities.",
        image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    },
];

export default function Ministries() {
    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
            padding: "2rem 0"
        }}>
            <h1 style={{
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#3730a3",
                marginBottom: "2rem",
                letterSpacing: "1px"
            }}>
                Our Ministries
            </h1>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
                maxWidth: "1100px",
                margin: "0 auto"
            }}>
                {ministries.map((ministry) => (
                    <div key={ministry.name} style={{
                        background: "#fff",
                        borderRadius: "1.25rem",
                        boxShadow: "0 4px 24px rgba(55, 48, 163, 0.08)",
                        overflow: "hidden",
                        transition: "transform 0.2s",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <img
                            src={ministry.image}
                            alt={ministry.name}
                            style={{
                                width: "100%",
                                height: "180px",
                                objectFit: "cover",
                                borderTopLeftRadius: "1.25rem",
                                borderTopRightRadius: "1.25rem"
                            }}
                        />
                        <div style={{ padding: "1.5rem", textAlign: "center" }}>
                            <h2 style={{
                                fontSize: "1.3rem",
                                fontWeight: "600",
                                color: "#3730a3",
                                marginBottom: "0.5rem"
                            }}>
                                {ministry.name}
                            </h2>
                            <p style={{
                                color: "#64748b",
                                fontSize: "1rem",
                                lineHeight: "1.6"
                            }}>
                                {ministry.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}