"use client";
import { useState } from "react";

export default function Chatbox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: "user123",
          query: input,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.response || "⚠️ Empty response from server." },
      ]);
    } catch (err) {
      console.error("Fetch error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `⚠️ Failed to fetch response: ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <div
        style={{
          height: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "1rem",
          marginBottom: "1rem",
          borderRadius: "8px",
          background: "#fafafa",
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: "1rem" }}>
            <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
          </div>
        ))}
        {loading && <div><em>Bot is typing...</em></div>}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about stocks..."
        style={{
          width: "100%",
          padding: "0.75rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
