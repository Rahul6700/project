export default function Home() {
    return (
        <div
            style={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "8px",
                padding: "20px",
                maxWidth: "400px",
                margin: "auto",
                textAlign: "center",
                fontFamily: "'Arial', sans-serif",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"
            }}
        >
            <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Game Name</h1>
            <button
                style={{
                    backgroundColor: "#333",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginBottom: "20px",
                    fontSize: "16px"
                }}
            >
                Create Party
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
                <textarea
                    placeholder="Enter code to join party"
                    style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #444",
                        backgroundColor: "#222",
                        color: "#fff",
                        resize: "none",
                        width: "50%",
                        height: "20px",
                    }}
                ></textarea>
                <button
                    style={{
                        backgroundColor: "#333",
                        color: "#fff",
                        border: "none",
                        padding: "10px 15px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
