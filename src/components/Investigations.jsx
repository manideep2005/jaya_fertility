import React, { useState, useMemo } from "react";
import { ArrowLeft, FileText, Search, Printer } from "lucide-react";
import { getInvestigationForm, getInputType } from "../utils/helpers.js";

export function InvestigationsDashboard({ templates, onSelect, onBack }) {
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
          <h1>Investigations</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="investigation-template-select">Choose an investigation template</label>
        <div className="selector-row">
          <select id="investigation-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
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
          placeholder="Search investigation templates"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="template-grid">
        {filteredTemplates.map((template) => (
          <button
            type="button"
            key={template.slug}
            className="document-card docx"
            onClick={() => onSelect(template.slug)}
          >
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

export function InvestigationForm({ form }) {
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

      {form.sections.map((section) => (
        <section className="form-section" key={section.title}>
          <h2>{section.title}</h2>
          <div className="checkbox-grid investigation-grid">
            {section.tests.map((test) => (
              <label key={test}>
                <input type="checkbox" />
                <span>{test}</span>
              </label>
            ))}
          </div>
          {section.needsIndication && (
            <label className="indication-field">
              <span>Indication</span>
              <textarea rows="3" />
            </label>
          )}
        </section>
      ))}

      <section className="form-section">
        <h2>Others / Instructions</h2>
        <textarea className="full-width-textarea" rows="5" />
      </section>

      <section className="form-section signature-section">
        <h2>Signature</h2>
        <div className="form-grid">
          <label>
            <span>Signature with Date</span>
            <input type="text" />
          </label>
          <label>
            <span>Doctor / Consultant</span>
            <input type="text" />
          </label>
          <label>
            <span>Date</span>
            <input type="date" />
          </label>
        </div>
      </section>
    </form>
  );
}

export function InvestigationTemplatePage({ template, onBack }) {
  const form = getInvestigationForm(template);

  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to investigations">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Investigation Template</p>
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
          <strong>Investigations</strong>
        </article>
      </div>

      <InvestigationForm form={form} />
    </section>
  );
}
