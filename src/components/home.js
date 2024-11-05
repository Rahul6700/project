export default function Home() {
    return (
        <div
            style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "60px",
                maxWidth: "800px",
                margin: "auto",
                textAlign: "center",
                fontFamily: "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                boxShadow: "5px 5px 8px rgb(0,0,100)",
                borderRadius: "15px"
            }}
        >
            <button
                style={{
                    backgroundColor: "#333",
                    color: "#fff",
                    border: "none",
                    padding: "20px 30px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginBottom: "5px",
                    fontSize: "24px"
                }}
            >
                Create Party
            </button>
            <h1>OR</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
                <textarea
                    placeholder="Enter code"
                    style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #444",
                        backgroundColor: "#222",
                        color: "#ffffff",
                        resize: "none",
                        width: "60%",
                        height: "24px",
                        fontSize: "16px"
                    }}
                ></textarea>
                <button
                    style={{
                        backgroundColor: "#333",
                        color: "#fff",
                        border: "none",
                        padding: "10px 30px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "20px"
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
