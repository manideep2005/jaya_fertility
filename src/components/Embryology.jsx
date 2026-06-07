import React, { useState, useMemo } from "react";
import { ArrowLeft, FileText, FileSpreadsheet, Search, Printer } from "lucide-react";
import { getEmbryologyForm, getInputType } from "../utils/helpers.js";

export function EmbryologyDashboard({ templates, onSelect, onBack }) {
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
          <h1>Embryology Witness and PDF Formats</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="embryology-template-select">Choose an embryology template</label>
        <div className="selector-row">
          <select id="embryology-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
            {templates.map((template) => (
              <option key={template.slug} value={template.slug}>
                {template.title}
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
          placeholder="Search embryology templates"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="template-grid">
        {filteredTemplates.map((template) => (
          <button
            type="button"
            key={template.slug}
            className={`document-card ${template.format.toLowerCase()}`}
            onClick={() => onSelect(template.slug)}
          >
            <span className="card-icon">
              {template.format === "XLSX" ? <FileSpreadsheet aria-hidden="true" /> : <FileText aria-hidden="true" />}
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

export function EmbryologyForm({ form }) {
  return (
    <form className="clinical-form" onSubmit={(e) => { e.preventDefault(); alert("Record submitted successfully!"); }}>
      {form.fields && (
        <section className="form-section">
          <h2>Header Details</h2>
          <div className="form-grid">
            {form.fields.map((field) => (
              <label key={field}>
                <span>{field}</span>
                <input type={getInputType(field)} />
              </label>
            ))}
          </div>
        </section>
      )}

      {form.type === "sections" &&
        form.sections.map((section) => (
          <section className="form-section" key={section.title}>
            <h2>{section.title}</h2>
            <div className="form-grid">
              {section.fields.map((field) => (
                <label key={field} className={field.toLowerCase().includes("notes") || field.toLowerCase().includes("impression") ? "wide-field" : undefined}>
                  <span>{field}</span>
                  {field.toLowerCase().includes("notes") || field.toLowerCase().includes("impression") ? (
                    <textarea rows="4" />
                  ) : (
                    <input type={getInputType(field)} />
                  )}
                </label>
              ))}
            </div>
          </section>
        ))}

      {form.type === "table" && (
        <section className="form-section">
          <h2>Register Entries</h2>
          <div className="form-table-wrap">
            <table className="form-table">
              <thead>
                <tr>
                  {form.tableColumns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: form.rows }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {form.tableColumns.map((column, columnIndex) => (
                      <td key={column}>
                        <input aria-label={`${column} row ${rowIndex + 1}`} type={getInputType(column)} defaultValue={columnIndex === 0 ? rowIndex + 1 : ""} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="form-section signature-section">
        <h2>Verification</h2>
        <div className="form-grid">
          <label>
            <span>Prepared By</span>
            <input type="text" />
          </label>
          <label>
            <span>Checked By</span>
            <input type="text" />
          </label>
          <label>
            <span>Doctor / Embryologist Signature</span>
            <input type="text" />
          </label>
          <label>
            <span>Date</span>
            <input type="date" />
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
  );
}

export function EmbryologyTemplatePage({ template, onBack }) {
  const form = getEmbryologyForm(template);

  return (
    <section className="template-shell embryology-detail">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to embryology templates">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Embryology Template</p>
          <h1>{form.title}</h1>
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
          <strong>Embryology Witness and PDF Formats</strong>
        </article>
      </div>

      <EmbryologyForm form={form} />
    </section>
  );
}
