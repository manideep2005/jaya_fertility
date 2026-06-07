import React, { useMemo, useState } from "react";
import { ArrowLeft, FileText, Printer, Search } from "lucide-react";
import { getSsgForm } from "../utils/helpers.js";

export function SsgDashboard({ templates, onSelect, onBack }) {
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
          <h1>SSG Bundle</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="ssg-template-select">Choose an SSG template</label>
        <div className="selector-row">
          <select id="ssg-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
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

export function SsgTemplatePage({ template, onBack }) {
  const form = getSsgForm(template);

  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to SSG list">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Procedure Bundle</p>
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
          <span>Method</span>
          <strong>Saline Salpingography</strong>
        </article>
      </div>

      <form className="clinical-form" onSubmit={(e) => { e.preventDefault(); alert("Record submitted successfully!"); }}>
        <section className="form-section">
          <h2>Patient Details</h2>
          <div className="form-grid">
            {form.headerFields.map((field) => (
              <label key={field}>
                <span>{field}</span>
                <input type={field.toLowerCase().includes("date") ? "date" : "text"} />
              </label>
            ))}
          </div>
        </section>

        {template.slug === "ssg-consent" ? (
          <section className="form-section">
            <h2>SSG Consent Declaration</h2>
            <div style={{ padding: "16px", background: "#fbfaf7", border: "1px solid #e5dccb", borderRadius: "6px" }}>
              <p style={{ lineHeight: "1.6", color: "#2d3836" }}>
                I hereby consent to the performance of Saline Salpingography (SSG) to evaluate my uterine cavity and tubal patency. I have been informed that the procedure involves injecting sterile saline into the uterus under transvaginal ultrasound monitoring. I understand that the risks include mild discomfort, uterine cramping, and post-procedural infection or vasovagal episode.
              </p>
              <div className="form-grid" style={{ marginTop: "24px" }}>
                <label>
                  <span>Patient Signature</span>
                  <input type="text" />
                </label>
                <label>
                  <span>Witness Signature</span>
                  <input type="text" />
                </label>
                <label>
                  <span>Doctor Signature</span>
                  <input type="text" defaultValue="Dr. Priyanka Chevuturi" />
                </label>
              </div>
            </div>
          </section>
        ) : (
          <>
            {form.sections.map((section, sIdx) => (
              <section className="form-section" key={sIdx}>
                <h2>{section.title}</h2>
                <div className="form-grid">
                  {section.fields.map((field) => (
                    <label key={field}>
                      <span>{field}</span>
                      <input type="text" />
                    </label>
                  ))}
                </div>
              </section>
            ))}

            <section className="form-section signature-section">
              <h2>Procedure Signatures</h2>
              <div className="form-grid">
                {form.signatureFields.map((field) => (
                  <label key={field}>
                    <span>{field}</span>
                    <input type={field.toLowerCase().includes("date") ? "date" : "text"} />
                  </label>
                ))}
              </div>
            </section>
          </>
        )}
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
