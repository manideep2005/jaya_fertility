import React, { useState, useMemo } from "react";
import { ArrowLeft, FileText, Search, Printer } from "lucide-react";
import { getPrescriptionForm, getPrescriptionDefault, getInputType } from "../utils/helpers.js";

export function PrescriptionsDashboard({ templates, onSelect, onBack }) {
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
          <h1>Prescriptions</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="prescription-template-select">Choose a prescription template</label>
        <div className="selector-row">
          <select id="prescription-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
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
          placeholder="Search prescription templates"
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

export function PrescriptionForm({ form }) {
  const columns = ["No.", "Name of Medication", "Dose", "Route", "Quantity at Once", "Time", "Relation with Food", "No. of Days", "Total to Purchase"];

  return (
    <form className="clinical-form">
      <section className="form-section clinic-letterhead">
        <h2>Centre Details</h2>
        <p>Jaya Super-Specialty Fertility Centre & Centre for Reproductive Genetics and Immunology</p>
        <p>Dr. Priyanka Chevuturi, MBBS, MS(OBGYN), M.Ch (Reproductive Medicine and Surgery), Reg No: APMC/FMR/129439</p>
      </section>

      <section className="form-section">
        <h2>Patient Details</h2>
        <div className="form-grid">
          {form.patientFields.map((field) => (
            <label key={field}>
              <span>{field}</span>
              <input type={getInputType(field)} />
            </label>
          ))}
        </div>
      </section>

      <section className="form-section">
        <h2>Medication Key</h2>
        <div className="abbrev-grid">
          {["TAB.: Tablet", "CAP.: Capsule", "INJ.: Injection", "PES: Pessary", "PO: Orally", "P/V: Per vaginally", "IM: Intramuscular", "S/C: Sub-cutaneous", "LA: Local Application", "M: Morning", "A: Afternoon", "E: Evening", "N: Night", "AC/B: Before food", "PC/A: After food"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      {form.investigations && (
        <section className="form-section">
          <h2>Investigations / Instructions</h2>
          <div className="checkbox-grid investigation-grid">
            {form.investigations.map((item) => (
              <label key={item}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>
      )}

      <section className="form-section">
        <h2>Medication Table</h2>
        <div className="form-table-wrap">
          <table className="form-table prescription-table">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {form.medications.map((medicine, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column) => (
                    <td key={column}>
                      <input
                        aria-label={`${column} medicine row ${rowIndex + 1}`}
                        type={getInputType(column)}
                        defaultValue={getPrescriptionDefault(column, medicine, rowIndex)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {form.transferFields && (
        <section className="form-section">
          <h2>Transfer Follow-up</h2>
          <div className="form-grid">
            {form.transferFields.map((field) => (
              <label key={field}>
                <span>{field}</span>
                <input type={getInputType(field)} />
              </label>
            ))}
          </div>
        </section>
      )}

      {form.instructions.map((section) => (
        <section className="form-section" key={section.title}>
          <h2>{section.title}</h2>
          <div className="checkbox-grid prescription-instructions">
            {section.items.map((item) => (
              <label key={item}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>
      ))}

      <section className="form-section">
        <h2>Additional Advice / Review</h2>
        <div className="form-grid">
          <label className="wide-field">
            <span>Additional Advice</span>
            <textarea rows="4" />
          </label>
          <label>
            <span>Review Again On</span>
            <input type="date" />
          </label>
          <label>
            <span>Review For</span>
            <input type="text" />
          </label>
        </div>
      </section>
    </form>
  );
}

export function PrescriptionTemplatePage({ template, onBack }) {
  const form = getPrescriptionForm(template);

  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to prescriptions">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Prescription Template</p>
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
          <strong>Prescriptions</strong>
        </article>
      </div>

      <PrescriptionForm form={form} />
    </section>
  );
}
