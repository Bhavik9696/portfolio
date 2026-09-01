import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

/* ── Direct REST call to Gemini v1 (bypasses SDK versioning issues) ── */
const GEMINI_MODELS = [
  "gemini-1.5-flash",
  "gemini-1.5-pro",
  "gemini-pro",
];

async function callGemini(apiKey, prompt) {
  for (const model of GEMINI_MODELS) {
    const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 512, temperature: 0.7 },
      }),
    });
    if (res.status === 404) continue; // try next model
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message || `HTTP ${res.status}`);
    }
    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "(no response)";
  }
  throw new Error("No available Gemini model found for this API key.");
}

/* ── System prompt — Bhavik's portfolio AI ── */
const SYSTEM_PROMPT = `You are Bhavik Rai's portfolio AI assistant. Your job is to help visitors learn about Bhavik and his work. Be concise, friendly, and professional. Answer in 2–4 sentences unless asked for detail.

About Bhavik Rai:
- Full-Stack Developer & AI Engineer based in India
- B.E. Computer Science Engineering student at St Joseph Engineering College, Mangaluru (2023–2027), CGPA: 8.53/10
- Specialises in MERN stack, FastAPI, RAG systems, LLMs, and multi-agent AI architectures
- Open to full-time roles, freelance work, and meaningful collaborations

Featured Projects:
1. Career Recruit AI — Freelance full-stack campus placement platform with AI microservice (RandomForest placement prediction, NLP résumé parsing, spaCy, FastAPI, MERN, JWT RBAC). Reduced manual screening by ~70%.
2. ProjectLens AI — RAG-powered requirements traceability tool. Extracts requirements from SRS docs and verifies them against real GitHub repos using Gemini AI. Live at project-lens-ai-kappa.vercel.app
3. ALLYVEX — Multi-agent AI sales intelligence engine. Bull, Bear, Detective, and Orchestrator agents produce customer-vs-partner verdicts with confidence scores. Real-time SSE streaming. Stack: Python, FastAPI, React, Groq LLaMA, Mistral.
4. CertiShield — AI + QR certificate fraud verification using OCR (Tesseract), Gemini Vision, and multi-portal validation.
5. Queue-SWAP — MERN platform connecting people to queue-standers for hire with live tracking and payments.
6. Silent Emergency Communication System — AI emergency alert using OpenCV gesture/fall detection with 95% accuracy.

Tech Stack:
Frontend: React, Vite, Next.js, Tailwind CSS, Framer Motion
Backend: Node.js, Express, FastAPI (Python)
AI/ML: Gemini AI, LLaMA (Groq), Mistral, scikit-learn, spaCy, OpenCV, RAG, LLMs, multi-agent systems
Databases: MongoDB, Firebase
Tools: JWT, Docker (basics), GitHub API, EmailJS, pdfplumber

Education:
- St Joseph Engineering College — B.E. CSE (2023–2027), CGPA 8.53
- Vivekananda PU College — Pre-University Science (2021–2023), 91.5%
- Priyadarshini School — SSLC (2011–2021), 91.2%

Contact: bhavikrai.dev@gmail.com | GitHub: Bhavik9696 | LinkedIn: bhavik-rai-438a70294
Currently: Available for opportunities — open to full-time roles and freelance

If asked something outside Bhavik's portfolio/work, politely redirect: "I'm Bhavik's portfolio assistant — I'm best at answering questions about his projects, skills, and experience!"`;

const QUICK_QUESTIONS = [
  "What's your most impressive project?",
  "Are you available for hire?",
  "What AI technologies do you use?",
  "Tell me about ProjectLens AI",
];

/* ── Typing dots animation ── */
function TypingDots() {
  return (
    <div style={{ display: "flex", gap: "4px", alignItems: "center", padding: "0.2rem 0" }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--accent)",
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}

/* ── Single message bubble ── */
function MessageBubble({ msg }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        display: "flex",
        gap: "0.6rem",
        alignItems: "flex-start",
        flexDirection: isUser ? "row-reverse" : "row",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: isUser ? "var(--accent)" : "var(--surface-hi)",
          border: "1px solid var(--border-md)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: isUser ? "#fff" : "var(--accent)",
        }}
      >
        {isUser ? <User size={13} /> : <Bot size={13} />}
      </div>

      {/* Bubble */}
      <div
        style={{
          maxWidth: "78%",
          padding: "0.65rem 0.9rem",
          borderRadius: isUser ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
          background: isUser ? "var(--accent)" : "var(--surface)",
          border: isUser ? "none" : "1px solid var(--border)",
          color: isUser ? "#fff" : "var(--text)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.84rem",
          lineHeight: 1.65,
          boxShadow: isUser ? "0 2px 12px rgba(232,92,32,0.2)" : "var(--shadow-card)",
        }}
      >
        {msg.content}
      </div>
    </motion.div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Bhavik's AI assistant 👋 Ask me anything about his projects, skills, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiReady, setApiReady] = useState(false);
  const apiKey = useRef(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Store API key on mount
  useEffect(() => {
    const key = import.meta.env.VITE_GEMINI_API_KEY;
    if (key && key !== "your_gemini_api_key_here") {
      apiKey.current = key;
      setApiReady(true);
    }
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
  }, [open]);

  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;
    setInput("");

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    if (!apiReady || !geminiModel.current) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Add your VITE_GEMINI_API_KEY to the .env file and restart the dev server.",
        },
      ]);
      setLoading(false);
      return;
    }

    try {
      const history = newMessages
        .slice(1)
        .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
        .join("\n");
      const prompt = `${SYSTEM_PROMPT}\n\n${history}\nAssistant:`;
      const reply = await callGemini(apiKey.current, prompt);
      setMessages((prev) => [...prev, { role: "assistant", content: reply.trim() }]);
    } catch (err) {
      console.error("Gemini error:", err?.message || err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `⚠️ ${err?.message || "Unknown error"}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1,   y: 0  }}
            exit={{    opacity: 0, scale: 0.9, y: 20  }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              position: "fixed",
              bottom: "5.5rem",
              left: "1.25rem",
              width: "min(360px, calc(100vw - 2.5rem))",
              height: "min(520px, calc(100vh - 8rem))",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-md)",
              borderRadius: 18,
              boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px var(--border)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 900,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.1rem",
                background: "var(--surface)",
                borderBottom: "1px solid var(--border)",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                <Sparkles size={15} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "var(--text)",
                    lineHeight: 1.2,
                  }}
                >
                  Portfolio Assistant
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--muted)",
                  cursor: "pointer",
                  padding: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 6,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                <X size={17} />
              </button>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem",
              }}
            >
              {messages.map((msg, i) => (
                <MessageBubble key={i} msg={msg} />
              ))}

              {/* Typing indicator */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "var(--surface-hi)",
                      border: "1px solid var(--border-md)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--accent)",
                    }}
                  >
                    <Bot size={13} />
                  </div>
                  <div
                    style={{
                      padding: "0.65rem 0.9rem",
                      borderRadius: "14px 14px 14px 4px",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <TypingDots />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick question chips — only show on first message */}
            {messages.length === 1 && !loading && (
              <div
                style={{
                  padding: "0 1rem 0.75rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  flexShrink: 0,
                }}
              >
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    style={{
                      padding: "0.3rem 0.75rem",
                      borderRadius: 20,
                      background: "var(--surface)",
                      border: "1px solid var(--border-md)",
                      color: "var(--muted)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      cursor: "pointer",
                      transition: "border-color 0.2s, color 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-md)";
                      e.currentTarget.style.color = "var(--muted)";
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                borderTop: "1px solid var(--border)",
                background: "var(--surface)",
                flexShrink: 0,
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about projects, skills..."
                style={{
                  flex: 1,
                  padding: "0.6rem 0.9rem",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  color: "var(--text)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
              <motion.button
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
                whileTap={{ scale: 0.92 }}
                aria-label="Send message"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: input.trim() && !loading ? "var(--accent)" : "var(--surface-hi)",
                  border: "none",
                  color: input.trim() && !loading ? "#fff" : "var(--muted-dark)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: input.trim() && !loading ? "pointer" : "default",
                  transition: "background 0.2s, color 0.2s",
                  flexShrink: 0,
                }}
              >
                <Send size={15} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAB Button ── */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Open portfolio chat assistant"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "1.25rem",
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: open ? "var(--surface-hi)" : "var(--accent)",
          border: "1px solid var(--border-md)",
          color: open ? "var(--text)" : "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: open
            ? "var(--shadow-card)"
            : "0 4px 20px rgba(232,92,32,0.4), 0 0 0 1px rgba(232,92,32,0.15)",
          transition: "background 0.25s, color 0.25s, box-shadow 0.25s",
          zIndex: 901,
          cursor: "pointer",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={{    rotate:  90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90,  opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={{    rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Unread dot when closed */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            style={{
              position: "fixed",
              bottom: "calc(1.5rem + 38px)",
              left: "calc(1.25rem + 36px)",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#22c55e",
              border: "2px solid var(--bg-primary)",
              zIndex: 902,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
