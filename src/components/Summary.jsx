import React, { useMemo, useState } from "react";
import { ArrowLeft, FileText, Printer, Search } from "lucide-react";
import { getSummaryForm } from "../utils/helpers.js";

export function SummaryDashboard({ templates, onSelect, onBack }) {
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
          <h1>Summary Folder</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="summary-template-select">Choose a summary template</label>
        <div className="selector-row">
          <select id="summary-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
            {templates.map((template) => (
              <option key={template.slug} value={template.slug}>
                {template.title} ({template.group})
              </option>
            ))}
          </select>
          <button type="button" onClick={() => onSelect(choice)}>
            Open Summary
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

export function SummaryTemplatePage({ template, onBack }) {
  const form = getSummaryForm(template);

  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to summaries list">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Clinical Summary</p>
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
          <span>Issuer</span>
          <strong>Jaya Fertility Lab</strong>
        </article>
      </div>

      <form className="clinical-form" onSubmit={(e) => { e.preventDefault(); alert("Record submitted successfully!"); }}>
        <section className="form-section">
          <h2>Patient Details</h2>
          <div className="form-grid">
            {form.fields.map((field) => (
              <label key={field}>
                <span>{field}</span>
                <input type={field.toLowerCase().includes("date") ? "date" : "text"} />
              </label>
            ))}
          </div>
        </section>

        {form.type === "table" && form.tableColumns && (
          <section className="form-section">
            <h2>Summary Data Log</h2>
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
                  {Array.from({ length: form.rows || 6 }).map((_, rIdx) => (
                    <tr key={rIdx}>
                      {form.tableColumns.map((col, cIdx) => (
                        <td key={col}>
                          <input
                            type={col.toLowerCase().includes("date") ? "date" : "text"}
                            defaultValue={cIdx === 0 && col.toLowerCase().includes("no") ? rIdx + 1 : ""}
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
        )}

        {form.type === "fields" && (
          <section className="form-section">
            <h2>Detailed Summary Findings</h2>
            <div style={{ display: "grid", gap: "14px" }}>
              <label className="indication-field">
                <span>Clinical Notes & Primary Indications</span>
                <textarea rows="3" />
              </label>
              <label className="indication-field">
                <span>Summary Findings / Key Parameters</span>
                <textarea rows="4" />
              </label>
              <label className="indication-field">
                <span>Treatment Cycles Completed</span>
                <textarea rows="3" />
              </label>
              <label className="indication-field">
                <span>Prognosis & Medical Advice</span>
                <textarea rows="4" />
              </label>
            </div>
          </section>
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
