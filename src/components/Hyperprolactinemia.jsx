import React, { useState } from "react";
import { ArrowLeft, FileText, Printer } from "lucide-react";
import { getInputType } from "../utils/helpers.js";

export function HyperprolactinemiaForm() {
  return (
    <form className="clinical-form" onSubmit={(e) => { e.preventDefault(); alert("Record submitted successfully!"); }}>
      <section className="form-section">
        <h2>Patient Details</h2>
        <div className="form-grid">
          {["Name", "Age", "MRD", "Hosp. No.", "Date"].map((field) => (
            <label key={field}>
              <span>{field}</span>
              <input type={getInputType(field)} />
            </label>
          ))}
        </div>
      </section>

      <section className="form-section clinic-letterhead">
        <h2>Centre Details</h2>
        <p>Jaya Super-Specialty Fertility Centre & Centre for Reproductive Genetics and Immunology</p>
        <p>Dr. Priyanka Chevuturi, MBBS, MS(OBGYN), M.Ch (Reproductive Medicine and Surgery), Reg No: APMC/FMR/129439</p>
        <p>Contact number: 7093075968</p>
      </section>

      <section className="form-section">
        <h2>Symptoms / Signs</h2>
        <div className="checkbox-grid">
          {["Headaches", "Visual disturbances", "Cycle irregularity", "Amenorrhea", "Thyroid disorders", "Galactorrhoea", "Bone loss", "Others"].map((item) => (
            <label key={item}>
              <input type="checkbox" />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="form-section">
        <h2>Current Visit</h2>
        <div className="form-grid">
          {["Current Medication", "Serum PRL Level", "Diagnosis", "Drug / Dose Planned", "Start Date of Drug"].map((field) => (
            <label key={field} className={field === "Diagnosis" ? "wide-field" : undefined}>
              <span>{field}</span>
              {field === "Diagnosis" ? <textarea rows="4" /> : <input type={getInputType(field)} />}
            </label>
          ))}
        </div>
      </section>

      <section className="form-section">
        <h2>Possibility Of</h2>
        <div className="choice-table">
          {["Offending drugs", "No offending drugs", "Hook Effect", "Stalk Effect", "Macro PRL"].map((item) => (
            <div className="choice-row" key={item}>
              <strong>{item}</strong>
              <label>
                <input type="radio" name={`possibility-${item}`} />
                Yes
              </label>
              <label>
                <input type="radio" name={`possibility-${item}`} />
                No
              </label>
            </div>
          ))}
        </div>
      </section>

      <section className="form-section">
        <h2>Relevant Baseline Blood Tests</h2>
        <div className="choice-table">
          {["TFT", "RFT", "LFT"].map((item) => (
            <div className="choice-row" key={item}>
              <strong>{item}</strong>
              <label>
                <input type="radio" name={`blood-test-${item}`} />
                Normal
              </label>
              <label>
                <input type="radio" name={`blood-test-${item}`} />
                Abnormal
              </label>
            </div>
          ))}
        </div>
      </section>

      <section className="form-section">
        <h2>Need for MRI</h2>
        <div className="choice-table">
          <div className="choice-row">
            <strong>MRI Required</strong>
            <label>
              <input type="radio" name="mri-required" />
              Yes
            </label>
            <label>
              <input type="radio" name="mri-required" />
              No
            </label>
          </div>
        </div>
      </section>

      <section className="form-section">
        <h2>Follow-up Entries</h2>
        <div className="form-table-wrap">
          <table className="form-table">
            <thead>
              <tr>
                {["Date", "Symptoms / Signs", "Current Medication", "Serum PRL Level", "Baseline Tests", "Need for MRI", "Diagnosis", "Drug / Dose Plan"].map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {["Date", "Symptoms / Signs", "Current Medication", "Serum PRL Level", "Baseline Tests", "Need for MRI", "Diagnosis", "Drug / Dose Plan"].map((column) => (
                    <td key={column}>
                      <input aria-label={`${column} follow-up row ${rowIndex + 1}`} type={getInputType(column)} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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

export function HyperprolactinemiaDashboard({ templates, onSelect, onBack }) {
  const [choice, setChoice] = useState(templates[0].slug);

  return (
    <section className="dashboard-shell">
      <header className="template-header compact">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to available options">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Available Option</p>
          <h1>Hyperprolactinemia Bundle</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="hyperprolactinemia-template-select">Choose a hyperprolactinemia template</label>
        <div className="selector-row">
          <select id="hyperprolactinemia-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
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

      <div className="template-grid">
        {templates.map((template) => (
          <button
            type="button"
            key={template.slug}
            className="document-card docx"
            onClick={() => onSelect(template.slug)}
          >
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

export function HyperprolactinemiaTemplatePage({ template, onBack }) {
  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to hyperprolactinemia templates">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Hyperprolactinemia Template</p>
          <h1>{template.title}</h1>
          <p>Follow-up sheet for symptoms, medication, serum PRL, baseline tests, MRI need, diagnosis, and drug plan.</p>
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
          <strong>Hyperprolactinemia Bundle</strong>
        </article>
      </div>

      <HyperprolactinemiaForm />
    </section>
  );
}
