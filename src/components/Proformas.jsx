import React, { useState, useMemo } from "react";
import { ArrowLeft, FileText, Search, Printer } from "lucide-react";
import { getProformaForm, getInputType } from "../utils/helpers.js";

export function ProformasDashboard({ templates, onSelect, onBack }) {
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
          <h1>Proformas</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="proforma-template-select">Choose a proforma template</label>
        <div className="selector-row">
          <select id="proforma-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
            {templates.map((template) => (
              <option key={template.slug} value={template.slug}>
                {template.title} - {template.format}
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
          placeholder="Search proforma templates"
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
            <span className="format-pill">{template.format}</span>
            <span className="card-title">{template.title}</span>
            <span className="card-copy">{template.group}</span>
            <span className="card-source">{template.source}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export function ProformaForm({ form }) {
  return (
    <form className="clinical-form">
      <section className="form-section clinic-letterhead">
        <h2>Centre Details</h2>
        <p>Jaya Super-Specialty Fertility Centre & Centre for Reproductive Genetics and Immunology</p>
        <p>Dr. Priyanka Chevuturi, MBBS, MS(OBGYN), M.Ch (Reproductive Medicine and Surgery), Reg No: APMC/FMR/129439</p>
      </section>

      <section className="form-section">
        <h2>Header Details</h2>
        <div className="form-grid">
          {form.headerFields.map((field) => (
            <label key={field}>
              <span>{field}</span>
              <input type={getInputType(field)} />
            </label>
          ))}
        </div>
      </section>

      {form.sections.map((section) => (
        <section className="form-section" key={section.title}>
          <h2>{section.title}</h2>
          {section.type === "checks" ? (
            <div className="checkbox-grid investigation-grid">
              {section.items.map((item) => (
                <label key={item}>
                  <input type="checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          ) : section.type === "table" ? (
            <div className="form-table-wrap">
              <table className="form-table">
                <thead>
                  <tr>
                    {section.columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: section.rows || 5 }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                      {section.columns.map((column, columnIndex) => (
                        <td key={column}>
                          <input aria-label={`${column} ${section.title} row ${rowIndex + 1}`} type={getInputType(column)} defaultValue={columnIndex === 0 && column.toLowerCase().includes("no") ? rowIndex + 1 : ""} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="form-grid">
              {section.fields.map((field) => (
                <label key={field} className={field.toLowerCase().includes("history") || field.toLowerCase().includes("note") || field.toLowerCase().includes("remarks") ? "wide-field" : undefined}>
                  <span>{field}</span>
                  {field.toLowerCase().includes("history") || field.toLowerCase().includes("note") || field.toLowerCase().includes("remarks") ? <textarea rows="4" /> : <input type={getInputType(field)} />}
                </label>
              ))}
            </div>
          )}
        </section>
      ))}

      <section className="form-section signature-section">
        <h2>Signatures</h2>
        <div className="form-grid">
          {form.signatureFields.map((field) => (
            <label key={field}>
              <span>{field}</span>
              <input type={getInputType(field)} />
            </label>
          ))}
        </div>
      </section>
    </form>
  );
}

export function ProformaTemplatePage({ template, onBack }) {
  const form = getProformaForm(template);

  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to proformas">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Proforma Template</p>
          <h1>{template.title}</h1>
          <p>{form.intro}</p>
        </div>
        <button type="button" className="icon-button" onClick={() => window.print()} aria-label="Print template">
          <Printer aria-hidden="true" />
        </button>
      </header>

      <div className="document-summary">
        <article>
          <span>Format</span>
          <strong>{template.format}</strong>
        </article>
        <article>
          <span>Category</span>
          <strong>{template.group}</strong>
        </article>
        <article>
          <span>Folder</span>
          <strong>Proformas</strong>
        </article>
      </div>

      <ProformaForm form={form} />
    </section>
  );
}
