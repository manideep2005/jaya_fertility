import React, { useState, useMemo } from "react";
import { FolderOpen, Search, FileText, ChevronRight } from "lucide-react";

export default function Dashboard({ options, onSelect, user, onLogout }) {
  const [query, setQuery] = useState("");
  const [choice, setChoice] = useState("diet-charts");

  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return options;

    return options.filter((option) =>
      [option.title, option.status].some((field) => field.toLowerCase().includes(normalizedQuery))
    );
  }, [query, options]);

  return (
    <section className="dashboard-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Jaya Fertility Centre</p>
          <h1>Available Options</h1>
        </div>
        {user && (
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="animate-fade-in">
            <div className="user-profile-status">
              <span className="profile-avatar">{user.name.charAt(0)}</span>
              <div className="profile-info">
                <span className="profile-name">{user.name}</span>
                <span className="profile-role">{user.role}</span>
              </div>
            </div>
            <button type="button" className="sign-out-btn" onClick={onLogout}>
              Sign Out
            </button>
          </div>
        )}
      </header>

      <div className="selector-band">
        <label htmlFor="option-select">Choose an option</label>
        <div className="selector-row">
          <select id="option-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
            {options.map((option) => (
              <option key={option.slug} value={option.slug}>
                {option.title}
              </option>
            ))}
          </select>
          <button type="button" onClick={() => onSelect(choice)}>
            Open Option
          </button>
        </div>
      </div>

      <div className="toolbar">
        <Search aria-hidden="true" />
        <input
          type="search"
          placeholder="Search available options"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="options-list">
        {filteredOptions.map((option) => (
          <button
            type="button"
            key={option.slug}
            className="option-row active"
            onClick={() => onSelect(option.slug)}
          >
            <span className="option-icon">
              <FileText aria-hidden="true" />
            </span>
            <span className="option-title">{option.title}</span>
            <span className="option-status">{option.status}</span>
            <ChevronRight aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  );
}
