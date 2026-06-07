import React, { useMemo, useState } from "react";
import { ArrowLeft, FileText, Printer, Search } from "lucide-react";
import { getPcoForm } from "../utils/helpers.js";

export function PcoDashboard({ templates, onSelect, onBack }) {
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
          <h1>PCO Case Sheet</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="pco-template-select">Choose a PCO template</label>
        <div className="selector-row">
          <select id="pco-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
            {templates.map((template) => (
              <option key={template.slug} value={template.slug}>
                {template.title} ({template.group})
              </option>
            ))}
          </select>
          <button type="button" onClick={() => onSelect(choice)}>
            Open Case Sheet
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

export function PcoTemplatePage({ template, onBack }) {
  const form = getPcoForm(template);
  const [stopBangAnswers, setStopBangAnswers] = useState(Array(8).fill(false));

  const stopBangScore = useMemo(() => {
    return stopBangAnswers.filter(Boolean).length;
  }, [stopBangAnswers]);

  const toggleStopBang = (index) => {
    setStopBangAnswers((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to PCO list">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Case Sheet Bundle</p>
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
          <span>Type</span>
          <strong>Case Sheet</strong>
        </article>
      </div>

      <form className="clinical-form" onSubmit={(e) => { e.preventDefault(); alert("Record submitted successfully!"); }}>
        <section className="form-section">
          <h2>Patient Vital Parameters</h2>
          <div className="form-grid">
            {form.headerFields.map((field) => (
              <label key={field}>
                <span>{field}</span>
                <input
                  type={
                    field.toLowerCase().includes("date")
                      ? "date"
                      : field.toLowerCase().includes("age") ||
                        field.toLowerCase().includes("height") ||
                        field.toLowerCase().includes("weight") ||
                        field.toLowerCase().includes("bmi") ||
                        field.toLowerCase().includes("girth")
                      ? "number"
                      : "text"
                  }
                />
              </label>
            ))}
          </div>
        </section>

        {form.sections.map((section, sIdx) => (
          <section className="form-section" key={sIdx}>
            <h2>{section.title}</h2>
            {section.type === "checks" && !section.title.includes("STOP-BANG") && (
              <div className="checkbox-grid">
                {section.items.map((item, itemIdx) => (
                  <label key={itemIdx}>
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            )}

            {section.type === "fields" && (
              <div className="form-grid">
                {section.fields.map((field) => (
                  <label key={field}>
                    <span>{field}</span>
                    <input type="text" />
                  </label>
                ))}
              </div>
            )}

            {section.title.includes("STOP-BANG") && (
              <div>
                <div className="checkbox-grid" style={{ gridTemplateColumns: "1fr", gap: "10px" }}>
                  {section.items.map((item, itemIdx) => (
                    <label key={itemIdx} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <input
                        type="checkbox"
                        checked={stopBangAnswers[itemIdx]}
                        onChange={() => toggleStopBang(itemIdx)}
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: "16px",
                    padding: "12px",
                    background: "#fdf8ef",
                    border: "1px solid #e5d8be",
                    borderRadius: "6px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <strong>STOP-BANG Score: {stopBangScore} / 8</strong>
                    <p style={{ margin: "4px 0 0", fontSize: "0.85rem", color: "#6b5f45" }}>
                      {stopBangScore >= 5
                        ? "High Risk for Moderate-to-Severe Obstructive Sleep Apnea"
                        : stopBangScore >= 3
                        ? "Intermediate Risk for Sleep Apnea"
                        : "Low Risk for Sleep Apnea"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}

        <section className="form-section signature-section">
          <h2>Clinical Approval</h2>
          <div className="form-grid">
            {form.signatureFields.map((field) => (
              <label key={field}>
                <span>{field}</span>
                <input type={field.toLowerCase().includes("date") ? "date" : "text"} />
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
