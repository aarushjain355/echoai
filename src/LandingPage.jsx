import React, { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage(`Thanks for signing up, ${email}! We’ll be in touch soon.`);
    setEmail("");
    // TODO: Connect to your backend or mailing list here
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Discover Your Next Startup Idea</h1>
      <p style={styles.lead}>
        Sign up now to get early access to our pain points discovery app. Validate your ideas faster with AI-powered insights.
      </p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Get Early Access
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
      <footer style={styles.footer}>© 2025 Your Startup Name. All rights reserved.</footer>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "auto",
    padding: "60px 20px",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#fff",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "3rem",
    marginBottom: 20,
    fontWeight: 700,
  },
  lead: {
    fontSize: "1.25rem",
    marginBottom: 40,
    lineHeight: 1.5,
  },
  form: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  input: {
    padding: "15px 20px",
    width: "70%",
    maxWidth: 350,
    border: "none",
    borderRadius: "30px 0 0 30px",
    fontSize: "1rem",
    outline: "none",
  },
  button: {
    padding: "15px 30px",
    border: "none",
    backgroundColor: "#ff6f61",
    color: "white",
    fontSize: "1rem",
    borderRadius: "0 30px 30px 0",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  message: {
    marginTop: 20,
    fontSize: "1rem",
    color: "#fff",
  },
  footer: {
    marginTop: 60,
    fontSize: "0.9rem",
    color: "#ddd",
  },
};
