"use client";

import AuthForm from "../../components/AuthForm";
import Link from "next/link";

export default function SignupPage() {
  const pageStyles = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: "2rem",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const cardStyles = {
    width: "100%",
    maxWidth: "460px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const logoStyles = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#20bf6b",
    color: "#fff",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
  };

  const titleStyles = {
    fontSize: "24px",
    fontWeight: 600,
    color: "#222",
    marginBottom: "8px",
  };

  const subtitleStyles = {
    fontSize: "14px",
    color: "#666",
    marginBottom: "28px",
  };

  const switchText = {
    fontSize: "14px",
    marginTop: "24px",
    color: "#555",
  };

  const linkStyle = {
    color: "#20bf6b",
    marginLeft: "5px",
    fontWeight: 500,
    textDecoration: "none",
  };

  return (
    <div style={pageStyles}>
      <div style={cardStyles}>
       
        <h2 style={titleStyles}>Create Account</h2>
        <p style={subtitleStyles}>Join us and get started</p>
        <AuthForm type="signup" />

        <p style={switchText}>
          Already have an account?
          <Link href="/login" style={linkStyle}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
