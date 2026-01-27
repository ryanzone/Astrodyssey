"use client";

import { useEffect, useRef, useState } from "react";
import { sendChat } from "@/core/api";

type Message = {
  role: "user" | "ai";
  content: string;
};

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content: "🌌 Hi explorer. Ask me anything about space.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend() {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await sendChat(userMsg.content);
      setMessages((m) => [...m, { role: "ai", content: res.reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "ai", content: "⚠️ Error. Try again." },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="h-screen bg-black text-white flex flex-col">

      {/* Header */}
      <header className="px-4 py-3 border-b border-white/10 bg-black/60 backdrop-blur">
        <h1 className="text-base font-semibold">🚀 SpaceGen AI</h1>
        <p className="text-xs text-gray-400">Ask about the universe</p>
      </header>

      {/* Chat area */}
      <main className="flex-1 overflow-y-auto px-3 py-4 space-y-3 max-w-2xl w-full mx-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`px-4 py-3 rounded-xl text-sm leading-relaxed ${
              msg.role === "user"
                ? "ml-auto bg-purple-600 text-white max-w-[85%]"
                : "mr-auto bg-white/10 border border-white/10 max-w-[90%]"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="text-xs text-gray-400 px-2 animate-pulse">
            SpaceGen is thinking…
          </div>
        )}

        <div ref={bottomRef} />
      </main>

      {/* Input bar */}
      <footer className="p-3 border-t border-white/10 bg-black/70 backdrop-blur">
        <div className="flex gap-2 max-w-2xl mx-auto">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about planets, stars, missions..."
            className="flex-1 px-4 py-2 rounded-lg bg-black/80 border border-white/10 text-sm outline-none focus:border-purple-500"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-purple-600 text-sm font-medium disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
}
