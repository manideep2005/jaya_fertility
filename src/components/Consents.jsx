import React, { useMemo, useState } from "react";
import { ArrowLeft, FileText, Printer, Search } from "lucide-react";
import { getConsentForm } from "../utils/helpers.js";

export function ConsentsDashboard({ templates, onSelect, onBack }) {
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
          <h1>Consents Templates</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="consent-template-select">Choose a consent template</label>
        <div className="selector-row">
          <select id="consent-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
            {templates.map((template) => (
              <option key={template.slug} value={template.slug}>
                {template.title} ({template.group})
              </option>
            ))}
          </select>
          <button type="button" onClick={() => onSelect(choice)}>
            Open Template
          </button>
        </div>
      </div>

      <div className="toolbar">
        <Search aria-hidden="true" />
        <input
          type="search"
          placeholder="Search consent templates"
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

export function ConsentTemplatePage({ template, onBack }) {
  const form = getConsentForm(template);

  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to consents">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Consent Template</p>
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
          <span>Folder</span>
          <strong>Consents Templates</strong>
        </article>
      </div>

      <form className="clinical-form" onSubmit={(e) => { e.preventDefault(); alert("Record submitted successfully!"); }}>
        <section className="form-section clinic-letterhead">
          <h2>Jaya Fertility Centre</h2>
          <p>Centre for Reproductive Medicine, Genetics and Immunology</p>
        </section>

        <section className="form-section">
          <h2>Patient & Spouse Details</h2>
          <div className="form-grid">
            {form.patientFields.map((field) => (
              <label key={field}>
                <span>{field}</span>
                <input type={field.toLowerCase().includes("date") ? "date" : field.toLowerCase().includes("age") ? "number" : "text"} />
              </label>
            ))}
          </div>
        </section>

        <section className="form-section">
          <h2>Consent Declaration</h2>
          <div className="declaration-text" style={{ padding: "12px", background: "#fbfaf7", border: "1px solid #e2dbcd", borderRadius: "6px", color: "#2e3a38", fontSize: "0.96rem", lineHeight: "1.6" }}>
            <p>{form.declaration}</p>
            <p style={{ marginTop: "12px" }}>We acknowledge that we have read, or had read to us, this entire document and understand its contents. We sign this voluntarily with full knowledge of its clinical consequences.</p>
          </div>
        </section>

        <section className="form-section signature-section">
          <h2>Signatures & Verification</h2>
          <div className="form-grid">
            <label>
              <span>Wife's Signature</span>
              <input type="text" placeholder="Sign" />
            </label>
            <label>
              <span>Husband's Signature</span>
              <input type="text" placeholder="Sign" />
            </label>
            <label>
              <span>Witness Signature</span>
              <input type="text" placeholder="Sign" />
            </label>
            <label>
              <span>Doctor / Consultant Sign</span>
              <input type="text" defaultValue="Dr. Priyanka Chevuturi" />
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
