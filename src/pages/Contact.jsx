import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import SectionHeading from '../components/SectionHeading';

/* ─── Clean input with floating label ─── */
function FormField({ label, name, type = "text", value, onChange, required, as }) {
  const [focused, setFocused] = useState(false);
  const active = focused || !!value;

  const commonStyle = {
    width: "100%",
    padding: as === "textarea" ? "0.85rem 1rem" : "0.85rem 1rem",
    background: "#1A1A1A",
    border: `1px solid ${focused ? "rgba(255,107,53,0.5)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 8,
    color: "#F5F5F0",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    boxShadow: focused ? "0 0 0 2px rgba(255,107,53,0.08)" : "none",
    transition: "border 0.2s, box-shadow 0.2s",
    resize: as === "textarea" ? "vertical" : undefined,
    minHeight: as === "textarea" ? 130 : undefined,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <label
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: focused ? "#FF6B35" : "#6B6B6B",
          transition: "color 0.2s",
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
        toast.success("Message sent! I'll reply soon.");
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
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "7rem 2rem 5rem" }}>

        {/* Bold editorial heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem" }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#FF6B35",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            05 / Contact
          </span>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#F5F5F0",
              marginBottom: "1rem",
            }}
          >
            Let's Build
            <br />
            <span style={{ color: "#FF6B35" }}>Something Useful.</span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
              color: "#A3A3A3",
              lineHeight: 1.7,
              maxWidth: 480,
              margin: 0,
            }}
          >
            Have an idea, opportunity, or project? Let's talk.
            I'm open to full-time roles, freelance work, and meaningful collaborations.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* ─── Left info panel ─── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Availability badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.25rem",
                background: "#1A1A1A",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.86rem",
                    color: "#F5F5F0",
                    margin: 0,
                  }}
                >
                  Available for Opportunities
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "#6B6B6B",
                    margin: "2px 0 0",
                  }}
                >
                  Open to full-time roles &amp; freelance
                </p>
              </div>
            </div>

            {/* Contact links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                {
                  icon: FaEnvelope,
                  label: "Email",
                  sub: "bhavikrai.dev@gmail.com",
                  href: "mailto:bhavikrai.dev@gmail.com",
                },
                {
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  sub: "bhavik-rai-438a70294",
                  href: "https://www.linkedin.com/in/bhavik-rai-438a70294",
                },
                {
                  icon: FaGithub,
                  label: "GitHub",
                  sub: "Bhavik9696",
                  href: "https://github.com/Bhavik9696",
                },
              ].map(({ icon: Icon, label, sub, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    padding: "1rem 1.25rem",
                    background: "#181818",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 10,
                    textDecoration: "none",
                    transition: "border-color 0.18s, background 0.18s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,107,53,0.3)";
                    e.currentTarget.style.background = "#1E1E1E";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.background = "#181818";
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "#222",
                      border: "1px solid rgba(255,255,255,0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FF6B35",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={15} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.84rem",
                        color: "#F5F5F0",
                        margin: 0,
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "#6B6B6B",
                        margin: "1px 0 0",
                      }}
                    >
                      {sub}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ─── Right: Contact form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                background: "#181818",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12,
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
                  gap: "1rem",
                }}
              >
                <FormField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Subject select */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#6B6B6B",
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
                    padding: "0.85rem 1rem",
                    background: "#1A1A1A",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    color: "#F5F5F0",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    outline: "none",
                    appearance: "none",
                    cursor: "pointer",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(255,107,53,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                >
                  <option style={{ background: "#1A1A1A" }}>General Inquiry</option>
                  <option style={{ background: "#1A1A1A" }}>Job Opportunity</option>
                  <option style={{ background: "#1A1A1A" }}>Freelance Project</option>
                  <option style={{ background: "#1A1A1A" }}>Collaboration</option>
                  <option style={{ background: "#1A1A1A" }}>Feedback</option>
                  <option style={{ background: "#1A1A1A" }}>Other</option>
                </select>
              </div>

              <FormField
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                as="textarea"
              />

              {/* Preferred contact method */}
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#6B6B6B",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.6rem",
                  }}
                >
                  Preferred Contact Method
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {["Email", "Phone"].map((method) => (
                    <label
                      key={method}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        cursor: "pointer",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: formData.contactMethod === method ? "#FF6B35" : "#6B6B6B",
                        transition: "color 0.18s",
                      }}
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={formData.contactMethod === method}
                        onChange={handleChange}
                        style={{ accentColor: "#FF6B35" }}
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </div>

              <FormField
                label="How did you hear about me?"
                name="heardAbout"
                value={formData.heardAbout}
                onChange={handleChange}
              />

              {/* Human check */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  cursor: "pointer",
                  padding: "0.75rem 1rem",
                  background: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 8,
                }}
              >
                <input
                  type="checkbox"
                  name="isHuman"
                  checked={formData.isHuman}
                  onChange={handleChange}
                  style={{ accentColor: "#FF6B35", width: 15, height: 15 }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.84rem",
                    color: "#A3A3A3",
                  }}
                >
                  I'm a human, not a robot 🤖
                </span>
              </label>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={!sending ? { y: -2 } : {}}
                whileTap={!sending ? { scale: 0.98 } : {}}
                style={{
                  padding: "0.9rem 2rem",
                  borderRadius: 8,
                  background: sending ? "#222" : "#FF6B35",
                  border: sending ? "1px solid rgba(255,255,255,0.1)" : "none",
                  color: sending ? "#6B6B6B" : "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  letterSpacing: "0.03em",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  transition: "background 0.2s, box-shadow 0.2s",
                  boxShadow: sending ? "none" : "0 4px 20px rgba(255,107,53,0.3)",
                }}
                onMouseEnter={(e) => {
                  if (!sending) e.currentTarget.style.background = "#ff8a5e";
                }}
                onMouseLeave={(e) => {
                  if (!sending) e.currentTarget.style.background = "#FF6B35";
                }}
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.span
                      key="done"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
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
          background: "#1A1A1A",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#F5F5F0",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.85rem",
        }}
      />
    </div>
  );
}
