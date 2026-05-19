import React from "react";
import { ArrowLeft, FolderOpen } from "lucide-react";

export default function OptionPage({ option, onBack }) {
  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to available options">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Available Option</p>
          <h1>{option.title}</h1>
          <p>This option is listed on the dashboard. Add documents for this folder to generate its templates here.</p>
        </div>
        <FolderOpen aria-hidden="true" className="header-symbol" />
      </header>
    </section>
  );
}
