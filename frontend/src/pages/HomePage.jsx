import React from "react";

const HomePage = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to the Home Page 🎉</h1>
            <p>
                This is your starting point. Explore our features and enjoy your stay!
            </p>
            <button
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "20px"
                }}
                onClick={() => alert("Thanks for visiting!")}
            >
                Click Me
            </button>
        </div>
    );
};

export default HomePage;