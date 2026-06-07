import React, { useState } from "react";
import { Lock, Mail, User, ShieldCheck, ArrowRight } from "lucide-react";

export default function Auth({ onLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("Clinician / Doctor");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all credentials.");
      return;
    }

    if (isSignUp && !name.trim()) {
      setError("Please enter your name.");
      return;
    }

    // Simulate authentication
    const userData = {
      email: email.trim(),
      name: isSignUp ? name.trim() : email.split("@")[0].toUpperCase(),
      role,
      token: "simulated-jwt-token-12345",
    };

    localStorage.setItem("jaya_auth_user", JSON.stringify(userData));
    onLogin(userData);
  };

  return (
    <section className="auth-shell">
      {/* Brand & Left Grid Banner */}
      <div className="auth-brand-side">
        <div className="gradient-background"></div>
        <div className="brand-content animate-fade-in">
          <p className="eyebrow-light">Jaya Fertility</p>
          <h1>Advanced Reproductive Care</h1>
          <p className="brand-subtitle">
            Welcome to the Jaya Fertility clinical database. Log in to access patient records, stimulation checklists, consents, and laboratory registers securely.
          </p>
          <div className="features-list">
            <article className="feature-item">
              <ShieldCheck className="feature-icon" />
              <div>
                <h3>Authorized Staff Access Only</h3>
                <p>Protected health information and clinical checklists.</p>
              </div>
            </article>
            <article className="feature-item">
              <ShieldCheck className="feature-icon" />
              <div>
                <h3>Audited & Encrypted Logs</h3>
                <p>Embryology registers and Quality Control protocols.</p>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="auth-form-side">
        <div className="glass-auth-card animate-slide-up">
          <header className="auth-card-header">
            <h2>{isSignUp ? "Create Staff Account" : "Staff Log In"}</h2>
            <p>{isSignUp ? "Register to access clinical templates" : "Enter your credentials to continue"}</p>
          </header>

          {error && <div className="auth-error-banner animate-fade-in">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            {isSignUp && (
              <div className="auth-input-group">
                <label htmlFor="auth-name">Full Name</label>
                <div className="input-icon-wrapper">
                  <User className="input-icon" />
                  <input
                    id="auth-name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="auth-input-group">
              <label htmlFor="auth-email">Email Address</label>
              <div className="input-icon-wrapper">
                <Mail className="input-icon" />
                <input
                  id="auth-email"
                  type="email"
                  placeholder="yourname@jayafertility.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="auth-input-group">
              <label htmlFor="auth-password">Password</label>
              <div className="input-icon-wrapper">
                <Lock className="input-icon" />
                <input
                  id="auth-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="auth-input-group">
              <label htmlFor="auth-role">Staff Role</label>
              <select
                id="auth-role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="auth-role-select"
              >
                <option value="Clinician / Doctor">Clinician / Doctor</option>
                <option value="Embryologist / Lab Staff">Embryologist / Lab Staff</option>
                <option value="Reception / Admin">Reception / Admin</option>
              </select>
            </div>

            <button type="submit" className="auth-submit-btn">
              <span>{isSignUp ? "Register Account" : "Access Database"}</span>
              <ArrowRight className="btn-arrow" />
            </button>
          </form>

          <footer className="auth-card-footer">
            <button
              type="button"
              className="toggle-auth-mode"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
              }}
            >
              {isSignUp ? "Already have an account? Sign In" : "Request access? Create Account"}
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
}
