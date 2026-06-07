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
  scanTemplates,
  consentTemplates,
  jayaOpTemplates,
  otherConsultantsTemplates,
  ohssTemplates,
  pcoTemplates,
  pharmacyTemplates,
  progesteroneTemplates,
  referralTemplates,
  ssgTemplates,
  summaryTemplates,
  testimonialTemplates,
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
import { ScansDashboard, ScanTemplatePage } from "./components/Scans.jsx";

// New Components Imports
import { ConsentsDashboard, ConsentTemplatePage } from "./components/Consents.jsx";
import { JayaOpDashboard, JayaOpTemplatePage } from "./components/JayaOp.jsx";
import { JayaConsultantsDashboard, JayaConsultantsTemplatePage } from "./components/JayaConsultants.jsx";
import { OhssDashboard, OhssTemplatePage } from "./components/Ohss.jsx";
import { PcoDashboard, PcoTemplatePage } from "./components/Pco.jsx";
import { PharmacyDashboard, PharmacyTemplatePage } from "./components/Pharmacy.jsx";
import { ProgesteroneDashboard, ProgesteroneTemplatePage } from "./components/Progesterone.jsx";
import { ReferralsDashboard, ReferralTemplatePage } from "./components/Referrals.jsx";
import { SsgDashboard, SsgTemplatePage } from "./components/Ssg.jsx";
import { SummaryDashboard, SummaryTemplatePage } from "./components/Summary.jsx";
import { TestimonialsDashboard, TestimonialTemplatePage } from "./components/Testimonials.jsx";
import Auth from "./components/Auth.jsx";

function getRoute() {
  return window.location.hash.replace("#/", "") || "dashboard";
}

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("jaya_auth_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [route, setRoute] = useState(getRoute);
  
  const selectedTemplate = dietTemplates.find((template) => template.slug === route);
  const selectedEmbryologyTemplate = embryologyTemplates.find((template) => template.slug === route);
  const selectedHyperprolactinemiaTemplate = hyperprolactinemiaTemplates.find((template) => template.slug === route);
  const selectedInvestigationTemplate = investigationTemplates.find((template) => template.slug === route);
  const selectedPrescriptionTemplate = prescriptionTemplates.find((template) => template.slug === route);
  const selectedProformaTemplate = proformaTemplates.find((template) => template.slug === route);
  const selectedScanTemplate = scanTemplates.find((template) => template.slug === route);
  
  // New selections
  const selectedConsentTemplate = consentTemplates.find((t) => t.slug === route);
  const selectedJayaOpTemplate = jayaOpTemplates.find((t) => t.slug === route);
  const selectedOtherConsultantTemplate = otherConsultantsTemplates.find((t) => t.slug === route);
  const selectedOhssTemplate = ohssTemplates.find((t) => t.slug === route);
  const selectedPcoTemplate = pcoTemplates.find((t) => t.slug === route);
  const selectedPharmacyTemplate = pharmacyTemplates.find((t) => t.slug === route);
  const selectedProgesteroneTemplate = progesteroneTemplates.find((t) => t.slug === route);
  const selectedReferralTemplate = referralTemplates.find((t) => t.slug === route);
  const selectedSsgTemplate = ssgTemplates.find((t) => t.slug === route);
  const selectedSummaryTemplate = summaryTemplates.find((t) => t.slug === route);
  const selectedTestimonialTemplate = testimonialTemplates.find((t) => t.slug === route);

  const selectedOption = availableOptions.find((option) => option.slug === route);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (slug) => {
    window.location.hash = slug === "dashboard" ? "#/" : `#/${slug}`;
  };

  const handleLogout = () => {
    localStorage.removeItem("jaya_auth_user");
    setUser(null);
    window.location.hash = "#/";
  };

  if (!user) {
    return <Auth onLogin={setUser} />;
  }

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
      ) : selectedScanTemplate ? (
        <ScanTemplatePage template={selectedScanTemplate} onBack={() => navigate("scan-template")} />
      ) : selectedConsentTemplate ? (
        <ConsentTemplatePage template={selectedConsentTemplate} onBack={() => navigate("consents-templates")} />
      ) : selectedJayaOpTemplate ? (
        <JayaOpTemplatePage template={selectedJayaOpTemplate} onBack={() => navigate("jaya-op-and-quick-scan-pdf-formats")} />
      ) : selectedOtherConsultantTemplate ? (
        <JayaConsultantsTemplatePage template={selectedOtherConsultantTemplate} onBack={() => navigate("jaya-other-consultants-folder")} />
      ) : selectedOhssTemplate ? (
        <OhssTemplatePage template={selectedOhssTemplate} onBack={() => navigate("ohss-bundle")} />
      ) : selectedPcoTemplate ? (
        <PcoTemplatePage template={selectedPcoTemplate} onBack={() => navigate("pco-case-sheet")} />
      ) : selectedPharmacyTemplate ? (
        <PharmacyTemplatePage template={selectedPharmacyTemplate} onBack={() => navigate("pharmacy-work-and-pdf-formats")} />
      ) : selectedProgesteroneTemplate ? (
        <ProgesteroneTemplatePage template={selectedProgesteroneTemplate} onBack={() => navigate("progesterone-iud-insertion")} />
      ) : selectedReferralTemplate ? (
        <ReferralTemplatePage template={selectedReferralTemplate} onBack={() => navigate("referrals")} />
      ) : selectedSsgTemplate ? (
        <SsgTemplatePage template={selectedSsgTemplate} onBack={() => navigate("ssg-bundle")} />
      ) : selectedSummaryTemplate ? (
        <SummaryTemplatePage template={selectedSummaryTemplate} onBack={() => navigate("summary")} />
      ) : selectedTestimonialTemplate ? (
        <TestimonialTemplatePage template={selectedTestimonialTemplate} onBack={() => navigate("testimonial-folder")} />
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
      ) : route === "scan-template" ? (
        <ScansDashboard templates={scanTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "consents-templates" ? (
        <ConsentsDashboard templates={consentTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "jaya-op-and-quick-scan-pdf-formats" ? (
        <JayaOpDashboard templates={jayaOpTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "jaya-other-consultants-folder" ? (
        <JayaConsultantsDashboard templates={otherConsultantsTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "ohss-bundle" ? (
        <OhssDashboard templates={ohssTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "pco-case-sheet" ? (
        <PcoDashboard templates={pcoTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "pharmacy-work-and-pdf-formats" ? (
        <PharmacyDashboard templates={pharmacyTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "progesterone-iud-insertion" ? (
        <ProgesteroneDashboard templates={progesteroneTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "referrals" ? (
        <ReferralsDashboard templates={referralTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "ssg-bundle" ? (
        <SsgDashboard templates={ssgTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "summary" ? (
        <SummaryDashboard templates={summaryTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : route === "testimonial-folder" ? (
        <TestimonialsDashboard templates={testimonialTemplates} onSelect={navigate} onBack={() => navigate("dashboard")} />
      ) : selectedOption ? (
        <OptionPage option={selectedOption} onBack={() => navigate("dashboard")} />
      ) : (
        <Dashboard options={availableOptions} onSelect={navigate} user={user} onLogout={handleLogout} />
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
