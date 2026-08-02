import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import SectionHeading from '../components/SectionHeading';
import FloatingDock from '../components/FloatingDock';

/* ─── Floating label input ─── */
function FloatingInput({ label, name, type = "text", value, onChange, required, as }) {
  const [focused, setFocused] = useState(false);
  const active = focused || !!value;

  const commonStyle = {
    width: "100%",
    padding: "1.2rem 1rem 0.5rem",
    background: "rgba(18,18,22,0.85)",
    border: `1px solid ${focused ? "rgba(0,245,255,0.5)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 12,
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.92rem",
    outline: "none",
    boxShadow: focused ? "0 0 0 2px rgba(0,245,255,0.1), 0 0 20px rgba(0,245,255,0.08)" : "none",
    transition: "border 0.2s, box-shadow 0.2s",
    resize: as === "textarea" ? "vertical" : undefined,
    minHeight: as === "textarea" ? 120 : undefined,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  return (
    <div style={{ position: "relative" }}>
      <label
        style={{
          position: "absolute",
          left: "1rem",
          top: active ? "0.45rem" : "1rem",
          fontSize: active ? "0.68rem" : "0.9rem",
          color: focused ? "#00F5FF" : "#94A3B8",
          fontFamily: "'Inter', sans-serif",
          fontWeight: active ? 600 : 400,
          letterSpacing: active ? "0.08em" : "0.01em",
          textTransform: active ? "uppercase" : "none",
          transition: "all 0.2s ease",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {label}{required && " *"}
      </label>
      {as === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          style={commonStyle}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          style={commonStyle}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    contactMethod: 'Email',
    heardAbout: '',
    isHuman: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.isHuman) {
      toast.error("Please verify you're not a robot.");
      return;
    }
    setSending(true);

    emailjs.sendForm(
      'service_97idowe',
      'template_s66o2dn',
      formRef.current,
      'jVQkhPxJlBL7NP-E5'
    )
      .then(() => {
        setSending(false);
        setSubmitted(true);
        toast.success("Message sent successfully! I'll reply soon 🚀");
        setFormData({
          name: '', email: '', subject: 'General Inquiry',
          message: '', contactMethod: 'Email', heardAbout: '', isHuman: false,
        });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((err) => {
        setSending(false);
        console.error("EmailJS Error:", err);
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
        position: "relative",
        zIndex: 1,
      }}
    >
      <FloatingDock />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 1.25rem 4rem" }}>
        <SectionHeading label="Get In Touch" title="Contact Me" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          {/* ─── Left info panel ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {/* Availability */}
            <div
              style={{
                background: "rgba(20,241,149,0.06)",
                border: "1px solid rgba(20,241,149,0.2)",
                borderRadius: 16,
                padding: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#14F195",
                  boxShadow: "0 0 10px rgba(20,241,149,0.8)",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: "#14F195", margin: 0 }}>
                  Available for Opportunities
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#94A3B8", margin: "2px 0 0" }}>
                  Open to full-time roles & freelance
                </p>
              </div>
            </div>

            {/* Email card */}
            <div
              style={{
                background: "rgba(18,18,22,0.85)",
                border: "1px solid rgba(0,245,255,0.12)",
                borderRadius: 16,
                padding: "1.25rem",
                backdropFilter: "blur(16px)",
                transition: "border 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid rgba(0,245,255,0.3)";
                e.currentTarget.style.boxShadow = "0 0 24px rgba(0,245,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid rgba(0,245,255,0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
                <FaEnvelope style={{ color: "#00F5FF" }} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#fff" }}>Email</span>
              </div>
              <a
                href="mailto:bhavikrai.dev@gmail.com"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  color: "#94A3B8",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#00F5FF")}
                onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
              >
                bhavikrai.dev@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { icon: FaGithub, href: "https://github.com/Bhavik9696", label: "GitHub", color: "#fff" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/bhavik-rai-438a70294", label: "LinkedIn", color: "#0A66C2" },
              ].map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.85rem",
                    background: "rgba(18,18,22,0.85)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    textDecoration: "none",
                    backdropFilter: "blur(12px)",
                    color,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    transition: "border 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = `1px solid ${color}44`;
                    e.currentTarget.style.boxShadow = `0 0 16px ${color}22`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Icon size={16} />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ─── Right: Contact form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                background: "rgba(18,18,22,0.85)",
                border: "1px solid rgba(0,245,255,0.1)",
                borderRadius: 20,
                padding: "2rem",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: "1rem" }}>
                <FloatingInput
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FloatingInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Subject select */}
              <div style={{ position: "relative" }}>
                <label
                  style={{
                    position: "absolute",
                    left: "1rem",
                    top: "0.45rem",
                    fontSize: "0.68rem",
                    color: "#00F5FF",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                >
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "1.2rem 1rem 0.5rem",
                    background: "rgba(18,18,22,0.85)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 12,
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.92rem",
                    outline: "none",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    appearance: "none",
                    cursor: "none",
                  }}
                >
                  <option style={{ background: "#0B1120" }}>General Inquiry</option>
                  <option style={{ background: "#0B1120" }}>Job Opportunity</option>
                  <option style={{ background: "#0B1120" }}>Freelance Project</option>
                  <option style={{ background: "#0B1120" }}>Collaboration</option>
                  <option style={{ background: "#0B1120" }}>Feedback</option>
                  <option style={{ background: "#0B1120" }}>Other</option>
                </select>
              </div>

              <FloatingInput
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                as="textarea"
              />

              {/* Preferred contact */}
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "#00F5FF", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                  Preferred Contact Method
                </p>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {["Email", "Phone"].map((method) => (
                    <label
                      key={method}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        cursor: "none",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: formData.contactMethod === method ? "#00F5FF" : "#94A3B8",
                        transition: "color 0.2s",
                      }}
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={formData.contactMethod === method}
                        onChange={handleChange}
                        style={{ accentColor: "#00F5FF" }}
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </div>

              <FloatingInput
                label="How did you hear about me?"
                name="heardAbout"
                value={formData.heardAbout}
                onChange={handleChange}
              />

              {/* Not a robot */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  cursor: "none",
                  padding: "0.75rem 1rem",
                  background: "rgba(0,245,255,0.04)",
                  border: "1px solid rgba(0,245,255,0.1)",
                  borderRadius: 10,
                }}
              >
                <input
                  type="checkbox"
                  name="isHuman"
                  checked={formData.isHuman}
                  onChange={handleChange}
                  style={{ accentColor: "#00F5FF", width: 16, height: 16 }}
                />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.84rem", color: "#94A3B8" }}>
                  I'm a human, not a robot 🤖
                </span>
              </label>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={!sending ? { scale: 1.02, y: -1 } : {}}
                whileTap={!sending ? { scale: 0.98 } : {}}
                style={{
                  padding: "1rem 2rem",
                  borderRadius: 50,
                  background: sending
                    ? "rgba(0,245,255,0.1)"
                    : "linear-gradient(135deg, #00F5FF, #7C3AED)",
                  border: sending ? "1px solid rgba(0,245,255,0.3)" : "none",
                  color: "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.04em",
                  cursor: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  boxShadow: sending
                    ? "none"
                    : "0 0 30px rgba(0,245,255,0.4), 0 0 60px rgba(0,245,255,0.15)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.span
                      key="done"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#14F195" }}
                    >
                      <FaCheckCircle /> Message Sent!
                    </motion.span>
                  ) : sending ? (
                    <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
                    >
                      <FaPaperPlane /> Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>


      <ToastContainer
        position="top-right"
        autoClose={4000}
        toastStyle={{
          background: "rgba(11,17,32,0.95)",
          border: "1px solid rgba(0,245,255,0.2)",
          color: "#fff",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.85rem",
          backdropFilter: "blur(20px)",
        }}
      />
    </div>
  );
}
