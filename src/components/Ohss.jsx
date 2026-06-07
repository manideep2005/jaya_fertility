import React, { useMemo, useState } from "react";
import { ArrowLeft, FileText, Printer, Search } from "lucide-react";
import { getOhssForm } from "../utils/helpers.js";

export function OhssDashboard({ templates, onSelect, onBack }) {
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
          <h1>OHSS Bundle</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="ohss-template-select">Choose an OHSS template</label>
        <div className="selector-row">
          <select id="ohss-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
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

export function OhssTemplatePage({ template, onBack }) {
  const form = getOhssForm(template);

  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to OHSS list">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">OHSS Bundle</p>
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
          <span>Scope</span>
          <strong>Clinical Monitoring</strong>
        </article>
      </div>

      <form className="clinical-form" onSubmit={(e) => { e.preventDefault(); alert("Record submitted successfully!"); }}>
        {template.slug === "ohss-prevention-prescription" ? (
          <>
            <section className="form-section">
              <h2>Patient Information</h2>
              <div className="form-grid">
                {form.sections[0].fields.map((field) => (
                  <label key={field}>
                    <span>{field}</span>
                    <input type={field.toLowerCase().includes("date") ? "date" : "text"} />
                  </label>
                ))}
              </div>
            </section>
            <section className="form-section">
              <h2>OHSS Prevention Medications</h2>
              <div className="checkbox-grid" style={{ gridTemplateColumns: "1fr", gap: "10px" }}>
                {form.sections[1].fields.map((med, idx) => (
                  <label key={idx} style={{ gap: "12px", borderBottom: "1px solid #f2ece0", paddingBottom: "10px" }}>
                    <input type="checkbox" defaultChecked />
                    <span>{med}</span>
                  </label>
                ))}
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="form-section">
              <h2>Header Fields</h2>
              <div className="form-grid">
                {form.fields.map((field) => (
                  <label key={field}>
                    <span>{field}</span>
                    <input type={field.toLowerCase().includes("date") ? "date" : "text"} />
                  </label>
                ))}
              </div>
            </section>

            <section className="form-section">
              <h2>Monitoring Log Table</h2>
              <div className="form-table-wrap">
                <table className="form-table">
                  <thead>
                    <tr>
                      {form.tableColumns.map((col) => (
                        <th key={col}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: form.rows || 8 }).map((_, rIdx) => (
                      <tr key={rIdx}>
                        {form.tableColumns.map((col, cIdx) => (
                          <td key={col}>
                            <input
                              type={
                                col.toLowerCase().includes("date")
                                  ? "date"
                                  : col.toLowerCase().includes("time") || col.toLowerCase().includes("hour")
                                  ? "time"
                                  : col.toLowerCase().includes("breath") || col.toLowerCase().includes("nausea")
                                  ? "text"
                                  : "text"
                              }
                              placeholder={
                                col.toLowerCase().includes("breath") || col.toLowerCase().includes("nausea")
                                  ? "Yes / No"
                                  : ""
                              }
                              style={{ border: "none", background: "transparent", padding: "0" }}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
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
