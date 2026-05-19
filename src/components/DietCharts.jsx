import React, { useState, useMemo } from "react";
import { ArrowLeft, FileText, Search, Leaf, Printer, ShieldAlert } from "lucide-react";

export function DietChartsDashboard({ templates, onSelect, onBack }) {
  const [query, setQuery] = useState("");
  const [choice, setChoice] = useState(templates[0].slug);

  const filteredTemplates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return templates;

    return templates.filter((template) =>
      [template.title, template.subtitle, template.source].some((field) =>
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
          <h1>Diet Charts</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="template-select">Choose a diet chart</label>
        <div className="selector-row">
          <select id="template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
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
          placeholder="Search diet charts"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="template-grid">
        {filteredTemplates.map((template) => (
          <button
            type="button"
            key={template.slug}
            className="template-card"
            onClick={() => onSelect(template.slug)}
            style={{ "--accent": template.accent }}
          >
            <span className="card-icon">
              <Leaf aria-hidden="true" />
            </span>
            <span className="card-title">{template.title}</span>
            <span className="card-copy">{template.subtitle}</span>
            <span className="card-source">{template.source}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export function TemplateColumn({ title, tone, groups }) {
  return (
    <section className={`template-column ${tone}`}>
      <div className="column-heading">
        {tone === "recommended" ? <Leaf aria-hidden="true" /> : <ShieldAlert aria-hidden="true" />}
        <h2>{title}</h2>
      </div>
      {groups.map((group) => (
        <article key={group.category} className="food-group">
          <h3>{group.category}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export function TemplatePage({ template, onBack }) {
  return (
    <section className="template-shell" style={{ "--accent": template.accent }}>
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to dashboard">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Diet Template</p>
          <h1>{template.title}</h1>
          <p>{template.subtitle}</p>
        </div>
        <button type="button" className="icon-button" onClick={() => window.print()} aria-label="Print template">
          <Printer aria-hidden="true" />
        </button>
      </header>

      {template.routine.length > 0 && (
        <div className="routine-grid">
          {template.routine.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="routine-tile">
                <Icon aria-hidden="true" />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      )}

      <div className="list-columns">
        <TemplateColumn title="Recommended" tone="recommended" groups={template.recommended} />
        <TemplateColumn title="Avoid" tone="avoid" groups={template.avoid} />
      </div>
    </section>
  );
}
