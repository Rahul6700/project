import React, { useState } from 'react';
import { customAlphabet } from 'nanoid';

export default function Home() {
    const [roomCode, setRoomCode] = useState(''); //the room code that is created
    const [inputCode, setInputCode] = useState(''); //the user input in textarea

    const createParty = () => {
        const generateRoomId = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);
        setRoomCode(generateRoomId());
    };

    const handleCode = () => {
        // logic to reroute if the code is correct else error handling
    };

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
                borderRadius: "15px",
            }}
        >
            <button onClick={createParty}
                style={{
                    backgroundColor: "#333",
                    color: "#fff",
                    border: "none",
                    padding: "20px 30px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginBottom: "5px",
                    fontSize: "24px",
                }}
            >
                Create Party
            </button>
            {roomCode && <h2>Room Code: {roomCode}</h2>}
            <h1>OR</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
                <textarea
                    placeholder="Enter code"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #444",
                        backgroundColor: "#222",
                        color: "#ffffff",
                        resize: "none",
                        width: "60%",
                        height: "24px",
                        fontSize: "16px",
                    }}
                ></textarea>
                <button onClick={handleCode}
                    style={{
                        backgroundColor: "#333",
                        color: "#fff",
                        border: "none",
                        padding: "10px 30px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "20px",
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
