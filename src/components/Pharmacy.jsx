import React, { useMemo, useState } from "react";
import { ArrowLeft, FileText, Printer, Search } from "lucide-react";
import { getPharmacyForm } from "../utils/helpers.js";

export function PharmacyDashboard({ templates, onSelect, onBack }) {
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
          <h1>Pharmacy Templates</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="pharmacy-template-select">Choose a pharmacy template</label>
        <div className="selector-row">
          <select id="pharmacy-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
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

export function PharmacyTemplatePage({ template, onBack }) {
  const form = getPharmacyForm(template);

  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to pharmacy list">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Pharmacy Department</p>
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
          <span>Location</span>
          <strong>In-House Pharmacy</strong>
        </article>
      </div>

      <form className="clinical-form" onSubmit={(e) => { e.preventDefault(); alert("Record submitted successfully!"); }}>
        {form.fields && (
          <section className="form-section">
            <h2>Registry / Header Fields</h2>
            <div className="form-grid">
              {form.fields.map((field) => (
                <label key={field}>
                  <span>{field}</span>
                  <input type={field.toLowerCase().includes("date") ? "date" : "text"} />
                </label>
              ))}
            </div>
          </section>
        )}

        {form.type === "table" && form.tableColumns && (
          <section className="form-section">
            <h2>Log Entry Table</h2>
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
                  {Array.from({ length: form.rows || 15 }).map((_, rIdx) => (
                    <tr key={rIdx}>
                      {form.tableColumns.map((col, cIdx) => (
                        <td key={col}>
                          <input
                            type={col.toLowerCase().includes("date") ? "date" : "text"}
                            defaultValue={cIdx === 0 && col.toLowerCase().includes("day") ? rIdx + 1 : ""}
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

        {template.slug.includes("undertaking") && (
          <section className="form-section">
            <h2>Undertaking Declaration</h2>
            <div style={{ padding: "16px", background: "#fbfaf7", border: "1px solid #e5dccb", borderRadius: "6px" }}>
              <p style={{ lineHeight: "1.6", color: "#2d3836" }}>
                We hereby state that all the hormonal medications, ovarian stimulators, and high-value drugs issued by Jaya Fertility Pharmacy will be handled, kept, and stored strictly as directed by the clinical staff. We accept sole accountability for keeping them at the required cold temperatures (+2°C to +8°C) using domestic cooling facilities where required.
              </p>
              <div className="form-grid" style={{ marginTop: "24px" }}>
                <label>
                  <span>Patient / Wife Signature</span>
                  <input type="text" />
                </label>
                <label>
                  <span>Husband Signature</span>
                  <input type="text" />
                </label>
                <label>
                  <span>Witness Sign</span>
                  <input type="text" />
                </label>
                <label>
                  <span>Duty Pharmacist Sign</span>
                  <input type="text" />
                </label>
              </div>
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
