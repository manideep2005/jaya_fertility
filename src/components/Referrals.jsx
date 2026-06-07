import React, { useMemo, useState } from "react";
import { ArrowLeft, FileText, Printer, Search } from "lucide-react";
import { getReferralForm } from "../utils/helpers.js";

export function ReferralsDashboard({ templates, onSelect, onBack }) {
  const [query, setQuery] = useState("");
  const [choice, setChoice] = useState(templates[0].slug);

  const filteredTemplates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return templates;

    return templates.filter((template) =>
      [template.title, template.format, template.source, template.group].some((field) =>
        field.toLowerCase().includes(normalizedQuery)
      )
    );
  }, [query, templates]);

  return (
    <section className="dashboard-shell">
      <header className="template-header compact">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to available options">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Available Option</p>
          <h1>Referral Forms</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="referral-template-select">Choose a referral template</label>
        <div className="selector-row">
          <select id="referral-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
            {templates.map((template) => (
              <option key={template.slug} value={template.slug}>
                {template.title} ({template.group})
              </option>
            ))}
          </select>
          <button type="button" onClick={() => onSelect(choice)}>
            Open Referral
          </button>
        </div>
      </div>

      <div className="toolbar">
        <Search aria-hidden="true" />
        <input
          type="search"
          placeholder="Search templates"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="template-grid">
        {filteredTemplates.map((template) => (
          <button type="button" key={template.slug} className="document-card docx" onClick={() => onSelect(template.slug)}>
            <span className="card-icon">
              <FileText aria-hidden="true" />
            </span>
            <span className="card-title">{template.title}</span>
            <span className="card-copy">{template.group}</span>
            <span className="card-source">{template.source}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export function ReferralTemplatePage({ template, onBack }) {
  const form = getReferralForm(template);
  const [letterBody, setLetterBody] = useState(form.letterBody);

  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to referrals list">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Clinical Referral</p>
          <h1>{template.title}</h1>
          <p>{form.intro}</p>
        </div>
        <button type="button" className="icon-button" onClick={() => window.print()} aria-label="Print template">
          <Printer aria-hidden="true" />
        </button>
      </header>

      <div className="document-summary">
        <article>
          <span>Type</span>
          <strong>Clinical Template</strong>
        </article>
        <article>
          <span>Category</span>
          <strong>{template.group}</strong>
        </article>
        <article>
          <span>From</span>
          <strong>Jaya Fertility Centre</strong>
        </article>
      </div>

      <form className="clinical-form" onSubmit={(e) => { e.preventDefault(); alert("Record submitted successfully!"); }}>
        <section className="form-section clinic-letterhead">
          <h2>Jaya Fertility Centre</h2>
          <p>Centre for Reproductive Medicine, Surgery and Genetics</p>
        </section>

        <section className="form-section">
          <h2>Referral Parameters</h2>
          <div className="form-grid">
            {form.patientFields.map((field) => (
              <label key={field}>
                <span>{field}</span>
                <input type={field.toLowerCase().includes("date") ? "date" : "text"} defaultValue={field.includes("Referring") ? "Dr. Priyanka Chevuturi" : ""} />
              </label>
            ))}
          </div>
        </section>

        <section className="form-section">
          <h2>Referral Letter Body</h2>
          <textarea
            className="full-width-textarea"
            rows="10"
            value={letterBody}
            onChange={(e) => setLetterBody(e.target.value)}
            style={{ fontFamily: "inherit", fontSize: "0.96rem", lineHeight: "1.6" }}
          />
        </section>

        <section className="form-section signature-section">
          <h2>Referring Physician</h2>
          <div className="form-grid">
            <label>
              <span>Signature & Stamp</span>
              <input type="text" defaultValue="Dr. Priyanka Chevuturi" />
            </label>
            <label>
              <span>Date</span>
              <input type="date" defaultValue={new Date().toISOString().split("T")[0]} />
            </label>
          </div>
        </section>
        <div className="form-actions" style={{ display: "flex", gap: "12px", justifyContent: "flex-end", marginTop: "24px" }}>
        <button type="reset" className="sign-out-btn" style={{ padding: "10px 20px" }}>
          Reset Form
        </button>
        <button type="submit" className="auth-submit-btn" style={{ margin: 0, padding: "10px 24px" }}>
          Submit Record
        </button>
      </div>
    </form>
    </section>
  );
}
