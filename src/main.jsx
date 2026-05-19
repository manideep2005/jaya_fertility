import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// Static Data Imports
import {
  availableOptions,
  dietTemplates,
  embryologyTemplates,
  hyperprolactinemiaTemplates,
  investigationTemplates,
  prescriptionTemplates,
  proformaTemplates,
} from "./data/templates.js";

// Components Imports
import Dashboard from "./components/Dashboard.jsx";
import OptionPage from "./components/OptionPage.jsx";
import { DietChartsDashboard, TemplatePage } from "./components/DietCharts.jsx";
import { EmbryologyDashboard, EmbryologyTemplatePage } from "./components/Embryology.jsx";
import {
  HyperprolactinemiaDashboard,
  HyperprolactinemiaTemplatePage,
} from "./components/Hyperprolactinemia.jsx";
import {
  InvestigationsDashboard,
  InvestigationTemplatePage,
} from "./components/Investigations.jsx";
import {
  PrescriptionsDashboard,
  PrescriptionTemplatePage,
} from "./components/Prescriptions.jsx";
import { ProformasDashboard, ProformaTemplatePage } from "./components/Proformas.jsx";

function getRoute() {
  return window.location.hash.replace("#/", "") || "dashboard";
}

function App() {
  const [route, setRoute] = useState(getRoute);
  
  const selectedTemplate = dietTemplates.find((template) => template.slug === route);
  const selectedEmbryologyTemplate = embryologyTemplates.find((template) => template.slug === route);
  const selectedHyperprolactinemiaTemplate = hyperprolactinemiaTemplates.find((template) => template.slug === route);
  const selectedInvestigationTemplate = investigationTemplates.find((template) => template.slug === route);
  const selectedPrescriptionTemplate = prescriptionTemplates.find((template) => template.slug === route);
  const selectedProformaTemplate = proformaTemplates.find((template) => template.slug === route);
  const selectedOption = availableOptions.find((option) => option.slug === route);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (slug) => {
    window.location.hash = slug === "dashboard" ? "#/" : `#/${slug}`;
  };

  return (
    <main>
      {selectedTemplate ? (
        <TemplatePage template={selectedTemplate} onBack={() => navigate("diet-charts")} />
      ) : selectedEmbryologyTemplate ? (
        <EmbryologyTemplatePage template={selectedEmbryologyTemplate} onBack={() => navigate("embryology-witness-and-pdf-formats")} />
      ) : selectedHyperprolactinemiaTemplate ? (
        <HyperprolactinemiaTemplatePage template={selectedHyperprolactinemiaTemplate} onBack={() => navigate("hyperprolactinemia-bundle")} />
      ) : selectedInvestigationTemplate ? (
        <InvestigationTemplatePage template={selectedInvestigationTemplate} onBack={() => navigate("investigations")} />
      ) : selectedPrescriptionTemplate ? (
        <PrescriptionTemplatePage template={selectedPrescriptionTemplate} onBack={() => navigate("prescriptions")} />
      ) : selectedProformaTemplate ? (
        <ProformaTemplatePage template={selectedProformaTemplate} onBack={() => navigate("proformas")} />
      ) : route === "diet-charts" ? (
        <DietChartsDashboard templates={dietTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "embryology-witness-and-pdf-formats" ? (
        <EmbryologyDashboard templates={embryologyTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "hyperprolactinemia-bundle" ? (
        <HyperprolactinemiaDashboard templates={hyperprolactinemiaTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "investigations" ? (
        <InvestigationsDashboard templates={investigationTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "prescriptions" ? (
        <PrescriptionsDashboard templates={prescriptionTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "proformas" ? (
        <ProformasDashboard templates={proformaTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : selectedOption ? (
        <OptionPage option={selectedOption} onBack={() => navigate("dashboard")} />
      ) : (
        <Dashboard options={availableOptions} onSelect={navigate} />
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
