import React, { useMemo, useState } from "react";
import { ArrowLeft, FileText, Printer, Search } from "lucide-react";
import { getOtherConsultantsForm } from "../utils/helpers.js";

export function JayaConsultantsDashboard({ templates, onSelect, onBack }) {
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
          <h1>Jaya Other Consultants</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="consultant-template-select">Choose a consultant template</label>
        <div className="selector-row">
          <select id="consultant-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
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
          placeholder="Search templates"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="template-grid">
        {filteredTemplates.map((template) => (
          <button type="button" key={template.slug} className={`document-card ${template.format.toLowerCase()}`} onClick={() => onSelect(template.slug)}>
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

export function JayaConsultantsTemplatePage({ template, onBack }) {
  const form = getOtherConsultantsForm(template);

  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to consultants list">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Other Consultants Folder</p>
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
          <span>Consultant</span>
          <strong>Dr. Jeevitha</strong>
        </article>
      </div>

      <form className="clinical-form" onSubmit={(e) => { e.preventDefault(); alert("Record submitted successfully!"); }}>
        <section className="form-section clinic-letterhead">
          <h2>Jaya Super-Specialty Fertility Centre</h2>
          <p>Consultant Payment Slip / Account Receipt</p>
        </section>

        <section className="form-section">
          <h2>Patient Details</h2>
          <div className="form-grid">
            {form.patientFields.map((field) => (
              <label key={field}>
                <span>{field}</span>
                <input type={field.toLowerCase().includes("date") ? "date" : "text"} defaultValue={field.includes("Doctor") ? "Dr. Jeevitha" : ""} />
              </label>
            ))}
          </div>
        </section>

        <section className="form-section">
          <h2>Itemized Services</h2>
          <div className="checkbox-grid" style={{ gridTemplateColumns: "1fr", gap: "10px" }}>
            {form.sections[0].tests.map((item, index) => (
              <label key={index} style={{ justifyContent: "space-between", borderBottom: "1px solid #f2ece0", paddingBottom: "8px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <input type="checkbox" defaultChecked={index === 0} />
                  <span>{item}</span>
                </div>
                <input type="number" placeholder="Cost" style={{ width: "120px", height: "32px", padding: "4px" }} />
              </label>
            ))}
          </div>
        </section>

        <section className="form-section">
          <h2>Billing & Payment</h2>
          <div className="form-grid">
            {form.billingFields.map((field) => (
              <label key={field}>
                <span>{field}</span>
                <input type={field.includes("Total") || field.includes("Amount") ? "number" : "text"} />
              </label>
            ))}
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
