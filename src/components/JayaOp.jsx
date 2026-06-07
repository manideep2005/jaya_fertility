import React, { useMemo, useState } from "react";
import { ArrowLeft, FileText, Printer, Search } from "lucide-react";
import { getJayaOpForm } from "../utils/helpers.js";

export function JayaOpDashboard({ templates, onSelect, onBack }) {
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
          <h1>Jaya OP and Quality Control</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="op-template-select">Choose an OP / Quality Control template</label>
        <div className="selector-row">
          <select id="op-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
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

export function JayaOpTemplatePage({ template, onBack }) {
  const form = getJayaOpForm(template);

  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to OP list">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Quality Control & OP</p>
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
          <strong>Quality Control / OP</strong>
        </article>
      </div>

      <form className="clinical-form" onSubmit={(e) => { e.preventDefault(); alert("Record submitted successfully!"); }}>
        {form.fields && form.fields.length > 0 && (
          <section className="form-section">
            <h2>Header Fields</h2>
            <div className="form-grid">
              {form.fields.map((field) => (
                <label key={field}>
                  <span>{field}</span>
                  <input type={field.toLowerCase().includes("date") ? "date" : field.toLowerCase().includes("time") ? "time" : "text"} />
                </label>
              ))}
            </div>
          </section>
        )}

        {form.type === "checks" && form.items && (
          <section className="form-section">
            <h2>Guidelines / Checklist Items</h2>
            <div className="checkbox-grid" style={{ gridTemplateColumns: "1fr", gap: "10px" }}>
              {form.items.map((item, idx) => (
                <label key={idx} style={{ alignItems: "flex-start", gap: "12px", borderBottom: "1px solid #f2ece0", paddingBottom: "10px" }}>
                  <input type="checkbox" style={{ marginTop: "4px" }} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </section>
        )}

        {form.type === "table" && form.tableColumns && (
          <section className="form-section">
            <h2>Log Register Table</h2>
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
                          <input type={col.toLowerCase().includes("date") ? "date" : "text"} defaultValue={cIdx === 0 && col.toLowerCase().includes("no") ? rIdx + 1 : ""} style={{ border: "none", background: "transparent", padding: "0" }} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {form.type === "sop" && form.sections && (
          <section className="form-section">
            <h2>SOP Protocol</h2>
            <div style={{ display: "grid", gap: "18px" }}>
              {form.sections.map((sec, idx) => (
                <div key={idx} style={{ padding: "12px", background: "#fdfdfb", border: "1px solid #ece6da", borderRadius: "6px" }}>
                  <h3 style={{ margin: "0 0 8px", color: "#1c6b5f" }}>{sec.title}</h3>
                  <p style={{ margin: "0", color: "#4c5a56", fontSize: "0.94rem" }}>{sec.text}</p>
                </div>
              ))}
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
