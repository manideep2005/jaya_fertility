import {
  commonPatientFields,
  iuiFields,
  semenAnalysisSections,
} from "../data/templates.js";

export function getInputType(label) {
  const normalized = label.toLowerCase();
  if (normalized.includes("date") || normalized.includes("expiry")) return "date";
  if (normalized.includes("time")) return "time";
  if (normalized.includes("age") || normalized.includes("year") || normalized.includes("count") || normalized.includes("volume") || normalized.includes("no.")) return "number";
  if (normalized.includes("email")) return "email";
  if (normalized.includes("mobile")) return "tel";
  return "text";
}

export function getEmbryologyForm(template) {
  const source = template.source.toLowerCase();

  if (source.includes("andrology check")) {
    return {
      title: "Andrology Checklist",
      type: "table",
      intro: "Monthly lab checklist for cleaning, equipment, temperature, and verification.",
      fields: ["Month", "Year", "Checked By", "Inspected By"],
      tableColumns: ["Date", "Time", "LAF Cleaning", "LAF Temperature", "Centrifuge", "Refrigerator Temperature", "Lab Cleaning", "Checked By"],
      rows: 12,
    };
  }

  if (source.includes("semen analysis")) {
    return {
      title: "Semen Analysis Report",
      type: "sections",
      intro: "WHO 2021 semen analysis report template.",
      sections: semenAnalysisSections,
    };
  }

  if (source.includes("embryo freezing")) {
    return {
      title: "Embryo Freezing Register",
      type: "table",
      intro: "Embryo freezing media, patient, embryo grade, and storage register.",
      fields: ["Freezing Media Name", "Date of Expiry", "Batch No.", "Lot No.", "Patient Sl. No. for Above Media"],
      tableColumns: ["Sl. No.", "Wife Name / Age", "Husband Name / Age", "Freeze Date", "Freeze Day", "No. Frozen", "Grades", "Tank", "Canister No.", "Daisy Colour", "Goblet Colour", "Cryolock Colour", "Cryolock No.", "Indication", "Comments / Thaw Details", "Doctor"],
      rows: 8,
    };
  }

  if (source.includes("fet register")) {
    return {
      title: "FET Register",
      type: "table",
      intro: "Frozen embryo transfer cycle and thaw details register.",
      fields: ["Month", "Year", "Embryologist"],
      tableColumns: ["Sl. No.", "Patient Name", "Regd. No.", "Age", "FET Date", "Embryo Day", "No. Thawed", "No. Transferred", "Embryo Grade", "Tank", "Canister", "Doctor", "Remarks"],
      rows: 10,
    };
  }

  if (source.includes("ivf") || source.includes("icsi")) {
    return {
      title: "IVF / ICSI Register",
      type: "table",
      intro: "Stimulation, OPU, fertilization, embryo, transfer, and freezing register.",
      fields: ["Month", "Year", "Embryologist"],
      tableColumns: ["Sl. No.", "Patient Name", "Regd. No.", "OPU Date", "No. Oocytes", "MII", "MI", "GV", "IVF / ICSI", "Fertilized", "Embryo Transfer Date", "No. Transferred", "No. Frozen", "Doctor", "Remarks"],
      rows: 10,
    };
  }

  if (source.includes("semen freezing")) {
    return {
      title: "Semen Freezing Register",
      type: "table",
      intro: "Semen freezing, vial, tank, and thaw-use register.",
      fields: ["Month", "Year", "Embryologist"],
      tableColumns: ["Sl. No.", "Name", "Regd. No.", "Age", "Collection Date", "Volume", "Count", "Motility", "No. of Vials", "Tank", "Canister", "Goblet", "Expiry / Review", "Remarks"],
      rows: 10,
    };
  }

  if (source.includes("iui")) {
    return {
      title: template.title,
      type: "sections",
      intro: "Intrauterine insemination procedure and laboratory worksheet.",
      sections: [
        { title: "Patient Details", fields: commonPatientFields },
        { title: "IUI Details", fields: iuiFields },
      ],
    };
  }

  if (source.includes("andro")) {
    return {
      title: "Andrology Worksheet",
      type: "sections",
      intro: "Andrology worksheet for sample collection, processing, and verification.",
      sections: [
        { title: "Patient Details", fields: commonPatientFields },
        { title: "Sample Details", fields: ["Sample Type", "Collection Time", "Received Time", "Abstinence", "Volume", "Count", "Motility", "Morphology", "Processing Method", "Final Volume", "Prepared By", "Checked By"] },
      ],
    };
  }

  if (source.includes("opu") || source.includes("fet") || source.includes("ef")) {
    return {
      title: "OPU / FET / EF Worksheet",
      type: "table",
      intro: "Combined OPU, FET, and embryo freezing tracking sheet.",
      fields: ["Month", "Year", "Embryologist"],
      tableColumns: ["Date", "Patient Name", "Regd. No.", "Procedure", "Oocytes / Embryos", "Grade", "Transfer / Freeze", "Tank", "Doctor", "Remarks"],
      rows: 10,
    };
  }

  return {
    title: template.title,
    type: "sections",
    intro: "Embryology document template.",
    sections: [
      { title: "Patient Details", fields: commonPatientFields },
      { title: "Template Fields", fields: ["Procedure", "Clinical Notes", "Lab Notes", "Prepared By", "Checked By", "Doctor Signature"] },
    ],
  };
}

export function getInvestigationForm(template) {
  if (template.slug === "investigations-common") {
    return {
      intro: "Common investigation request template with routine, hormonal, metabolic, serology, OHSS, pre-op, RPL, urine, and scan options.",
      patientFields: ["Name", "MRD Number", "Date"],
      sections: [
        { title: "Routine", tests: ["Semen Analysis Detail Study", "CBC", "Activated PTT", "Blood Group & Rh Typing"] },
        { title: "Serology", tests: ["HIV", "HbSAg", "VDRL", "Anti-HCV"] },
        { title: "Hormonal Profile", tests: ["Day 2 - FSH, LH, E2", "AMH", "Prolactin", "TSH", "ATG, ATMA", "T3, T4", "Progesterone", "Testosterone", "Beta-HCG", "E2, P4, LH", "E2, LH", "E2, P4", "E2"] },
        { title: "Metabolic Profile", tests: ["HbA1c", "FBS", "PPBS", "RBS", "Lipid Profile"] },
        { title: "OHSS Profile", tests: ["T. Proteins", "S. Albumin", "CBC", "S. Electrolytes", "PT", "INR"] },
        { title: "Pre-op Profile", tests: ["LFT", "RFT", "ECG-12 Leads", "Chest X Ray PA View"] },
        { title: "RPL Profile", tests: ["ACA-IgG", "ACA-IgM", "ANA", "Lupus Anticoagulant", "Beta 2 Glycoprotein 1 IgM", "Beta 2 Glycoprotein-1 IgG", "Prolactin", "HbA1c", "TSH", "ATG", "ATMA"] },
        { title: "Genetics / Special Tests", tests: ["Azoospermia Factor (Y-Chromosome Microdeletions)", "Karyotyping of Peripheral Blood Cells", "Y-Chromosome Presence", "Semen Cryopreservation Short Term", "Semen Cryopreservation Long Term"] },
        { title: "Urine / Scan", tests: ["Urine RE/ME", "Urine C/S", "Follicular Study", "TVS-2D", "Early Pregnancy Scan", "Saline Salpingography", "3D-Pelvis Ultrasonography", "Pap Smear"] },
      ],
    };
  }

  if (template.slug === "investigations-ivf") {
    return {
      intro: "IVF investigations and instructions template for wife and husband.",
      patientFields: ["Wife Name", "Wife MRD", "Husband Name", "Husband MRD", "Blood Investigations Date"],
      sections: [
        { title: "Wife Blood Investigations", tests: ["HIV", "CBC", "TSH", "FSH", "ATG", "HbSAg", "aPTT", "Prolactin", "LH", "ATMA", "VDRL", "PT-INR", "HbA1c", "E2", "ANA", "Anti-HCV", "AMH", "APLA Profile"] },
        { title: "Husband Blood Investigations", tests: ["HIV", "HbSAg", "VDRL", "Anti-HCV"] },
        { title: "Husband Instructions", tests: ["Antibiotic Course", "Tab. Norflox 400 mg", "Semen for Cryopreservation Short Term", "Backup for IVF"] },
      ],
    };
  }

  if (template.slug === "investigations-male") {
    return {
      intro: "Male investigation template with routine, hormonal, thyroid, genetic, semen, metabolic, serology, and pre-op options.",
      patientFields: ["Name", "MRD Number", "Date"],
      sections: [
        { title: "Routine", tests: ["CBC", "Activated PTT"] },
        { title: "Hormonal Profile", tests: ["FSH", "LH", "E2", "Prolactin", "Testosterone"] },
        { title: "Complete Thyroid Profile", tests: ["T3", "T4", "TSH", "ATG", "ATMA"] },
        { title: "Genetic Tests", tests: ["Karyotyping of Peripheral Blood Cells", "Y-Chromosome Microdeletions"], needsIndication: true },
        { title: "Pre-op Profile", tests: ["LFT", "RFT", "S. Electrolytes", "Blood Group", "Chest X-Ray PA View", "ECG - 12 Leads"] },
        { title: "Semen", tests: ["Semen Analysis Detail", "Semen Analysis", "Semen Cryopreservation Short Term", "Semen Cryopreservation Long Term", "Semen Cryopreservation Short Term (ICSI-ET)"] },
        { title: "Metabolic Profile", tests: ["HbA1c", "RBS", "PPBS", "FBS", "Lipid Profile"] },
        { title: "Serology", tests: ["HIV", "HbSAg", "Anti-HCV", "VDRL"] },
      ],
    };
  }

  return {
    intro: "Female investigation template covering fertility, hormonal, metabolic, PCOS, DOR, RPL, pre-op, serology, urine, scan, and pap smear tests.",
    patientFields: ["Name", "MRD Number", "Date"],
    sections: [
      { title: "Day 2 Profile", tests: ["FSH", "LH", "E2"] },
      { title: "Complete Thyroid Profile", tests: ["T3", "T4", "TSH", "ATG", "ATMA"] },
      { title: "Ovarian Reserve Testing", tests: ["AMH"] },
      { title: "Trigger / FET / Post-trigger Tests", tests: ["LH", "E2", "P4", "FET Decision Day E2", "FET Decision Day P4", "Post-trigger LH", "Post-trigger P4"] },
      { title: "Random Tests", tests: ["HbA1c", "Prolactin", "Testosterone", "Beta-HCG"] },
      { title: "OHSS Profile", tests: ["CBC with Haematocrit", "RFT", "T. Proteins", "Serum Albumin", "Serum Electrolytes"] },
      { title: "Metabolic Profile", tests: ["HbA1c", "RBS", "PPBS", "FBS", "Lipid Profile"] },
      { title: "PCOS Profile", tests: ["Total Testosterone", "SHBG", "OGTT"] },
      { title: "Diminished Ovarian Reserve Profile", tests: ["TSH", "AMH", "ATG", "ATMA", "21-Hydroxylase Antibody", "Morning Cortisol", "S. Calcium", "S. Phosphorus", "Lipid Profile"] },
      { title: "RPL Profile", tests: ["ACA-IgG", "ACA-IgM", "ANA", "Lupus Anticoagulant", "Beta 2 Glycoprotein I-IgG", "Beta 2 Glycoprotein I-IgM", "ATG", "ATMA", "TSH", "T4", "HbA1c", "Prolactin"] },
      { title: "Genetics / Other Tests", tests: ["Karyotyping of Peripheral Blood Cells", "Presence of Y-Chromosome", "FMR Pre-mutation Testing"], needsIndication: true },
      { title: "Pre-op Investigations", tests: ["LFT", "RFT", "Blood Group", "S. Electrolytes", "ECG 12 Leads", "Chest X Ray PA View", "CBC", "aPTT"] },
      { title: "Serology / Urine / Scan", tests: ["HIV", "HbSAg", "VDRL", "Anti-HCV", "DEXA Scan", "Urine Routine", "Urine Microscopy", "Urine Culture & Sensitivity", "3D-Pelvic USG", "Pap Smear"] },
    ],
  };
}

export function getPrescriptionDefault(column, medicine, rowIndex) {
  if (column === "No.") return rowIndex + 1;
  if (column === "Name of Medication") return medicine.name || "";
  if (column === "Dose") return medicine.dose || "";
  if (column === "Route") return medicine.route || "";
  if (column === "Quantity at Once") return medicine.quantity || "";
  if (column === "Time") return medicine.time || "";
  if (column === "Relation with Food") return medicine.food || "";
  if (column === "No. of Days") return medicine.days || "";
  if (column === "Total to Purchase") return medicine.total || "";
  return "";
}

export function getPrescriptionForm(template) {
  const transferMedicines = [
    { name: "INJ. Progesterone", dose: "mg", quantity: "1", time: "Same time everyday", food: "NO", days: "15", total: "15" },
    { name: "INJ. Low Molecular Weight Heparin (*)", dose: "mg", route: "S/C", time: "Preferably night time", food: "NO", days: "15", total: "15" },
    { name: template.slug === "prescriptions-fresh-transfer" ? "INJ. hCG (*)" : "INJ.", dose: "mg", quantity: "1", time: "Anytime", food: "NO" },
    { name: "PROGESTERONE GEL 8%", dose: "90mg", route: "P/V", quantity: "1", time: "N", food: "NO", days: "15", total: "15" },
    { name: "TAB. FOLIC ACID", dose: "5 mg", route: "PO", quantity: "1", time: "M", food: "PC", days: "15", total: "30" },
    { name: "TAB. ECOSPRIN", dose: "75mg", route: "PO", quantity: "1", time: "A", food: "PC", days: "15", total: "15" },
    { name: "TAB. RANTAC", dose: "150 mg", route: "PO", quantity: "1", time: "M-N", food: template.slug === "prescriptions-fresh-transfer" ? "AC" : "PC", days: "15", total: "30" },
    { name: "TAB. DYDROGESTERONE", dose: "10 mg", route: "PO", quantity: "1", time: "M-N", food: "PC", days: "15", total: "30" },
  ];

  const transferInstructions = [
    { title: "Do's", items: ["Get plenty of sleep", "Listen to your body and relax", "Do routine activities that do not stress you", "Take prenatal vitamins and medicines without fail", "Eat a balanced diet", "Drink adequate water", "Have quick baths with lukewarm water"] },
    { title: "Don'ts", items: ["Complete bed rest", "Strenuous physical activity", "Processed or extremely spicy foods", "Sexual intercourse", "Tub baths, swimming pools, or beach bathing", "Extremely hot water baths", "Long distance travel by road"] },
  ];

  if (template.slug === "prescriptions-ivf-instructions") {
    return {
      intro: "IVF instruction prescription with wife and husband investigations, antibiotic course, stimulation, trigger, and OPU instructions.",
      patientFields: ["Woman's Name", "Woman MRD", "Spouse Name", "Spouse MRD", "Hospital Number", "Date of Issue"],
      investigations: ["Wife: HIV", "Wife: CBC", "Wife: TSH", "Wife: FSH", "Wife: ATG", "Wife: HbSAg", "Wife: aPTT", "Wife: Prolactin", "Wife: LH", "Wife: ATMA", "Wife: VDRL", "Wife: PT-INR", "Wife: HbA1c", "Wife: E2", "Wife: ANA", "Wife: Anti-HCV", "Wife: AMH", "Wife: APLA", "Husband: HIV", "Husband: HbSAg", "Husband: VDRL", "Husband: Anti-HCV", "Semen Cryopreservation Short Term", "Backup for IVF", "Antibiotic Course"],
      medications: Array.from({ length: 8 }).map(() => ({})),
      transferFields: ["During Stimulation Follow-up Date", "Trigger Day Date", "Serum Estrogen", "Serum LH", "Serum Progesterone", "Trigger Date", "Trigger Time", "Day After Trigger Date", "Oocyte Pick-up Date", "Hospital Reporting Time"],
      instructions: [
        { title: "Do's", items: ["Store injections in fridge door", "Take injections at the same time everyday", "Use trained personnel for injections", "Eat hygienic cooked food", "Include high proteins", "Hydrate adequately", "May apply ice/hot bag at injection site after 6 hours"] },
        { title: "Don'ts", items: ["Do not store injections in freezer", "Avoid strenuous activity after injections start", "Avoid processed or tinned food", "Avoid spicy foods that may worsen acidity", "Avoid bumpy rides or long road travel", "Avoid sexual intercourse 4-5 days after injections start"] },
        { title: "Patient Instructions", items: ["Book prior appointment", "Send non-emergent queries over WhatsApp", "Call emergency number only for emergencies", "Consultation can be arranged outside routine timings in special situations"] },
      ],
    };
  }

  if (template.slug === "prescriptions-fet" || template.slug === "prescriptions-fresh-transfer") {
    return {
      intro: "Embryo transfer prescription with medication schedule, beta-hCG follow-up, do's and don'ts.",
      patientFields: ["MRD Number / Hosp. No.", "Spouse", "Date"],
      medications: [...transferMedicines, ...(template.slug === "prescriptions-fet" ? [{ name: "TAB. ESTROGEN", dose: "2 mg", route: "PO", food: "PC", days: "15" }] : [])],
      transferFields: ["2nd Beta HCG On"],
      instructions: transferInstructions,
    };
  }

  return {
    intro: `${template.group} prescription template with medication schedule, additional advice, review details, and patient instructions.`,
    patientFields: ["Name", "MRD Number / Hosp. No.", "Spouse", "Date"],
    medications: Array.from({ length: template.slug === "prescriptions-male" ? 8 : 10 }).map(() => ({})),
    instructions: [
      { title: "Instructions to Patients", items: ["Book prior appointment", "Send non-emergent queries over WhatsApp", "Call emergency contact only for emergencies", "Consultation may be arranged outside routine timings in special situations"] },
    ],
  };
}

export function getProformaForm(template) {
  if (template.slug === "proformas-fet-form") {
    return {
      intro: "FET preparation form with embryo details, previous cycles, trial ET, scan follow-up, transfer consent, procedure details, and post-transfer medications.",
      headerFields: ["Name / Age", "MRD", "Hosp. No.", "No. of Embryos Remaining", "No. of Straws Remaining", "Age of Embryo Frozen", "Cause of Infertility"],
      signatureFields: ["Wife Signature", "Husband Signature", "Doctor Signature", "Date"],
      sections: [
        { title: "Clinical Background", fields: ["Surgical History", "Obstetric History", "Fresh Transfer Outcome", "FET Number Present Cycle", "TSH", "HbA1c", "Prolactin", "Relevant Serology", "Medical / Endocrine Problems"], type: "fields" },
        { title: "Previous / Mock Cycles", columns: ["Cycle / FET No.", "Type", "Drug Used and Dose", "ET at End", "Result", "Remarks"], rows: 6, type: "table" },
        { title: "Trial ET and Transfer Plan", fields: ["Easy / Difficult", "Speculum Type", "Uterine Position", "UCL", "Uterine Length", "Cervical Length", "Anesthesia Need", "Date of Transfer", "No. of Embryos Advised", "Final Number Transferred"], type: "fields" },
        { title: "Scan Follow-up", columns: ["Date", "Findings", "Medications", "Endometrium mm", "Left Ovary", "Right Ovary", "Clinical Decision"], rows: 4, type: "table" },
        { title: "Post-transfer Medications", items: ["Folic Acid", "Ecosprin", "Progesterone Vaginal Gel", "Progesterone Injection", "Dydrogesterone", "LMWH", "Steroid", "Metformin", "hCG Injection"], type: "checks" },
      ],
    };
  }

  if (template.slug === "proformas-hysteroscopy-report") {
    return {
      intro: "Hysteroscopy procedure report with indication, equipment, anesthesia, cavity findings, pathology, biopsy, impression, and complications.",
      headerFields: ["Patient Name", "MRD No.", "Date", "Age", "Surgeon", "LMP"],
      signatureFields: ["Surgeon Signature", "Doctor Signature", "Date"],
      sections: [
        { title: "Procedure Details", fields: ["Gynecological History", "OCP", "Indication", "Procedure Length", "Hysteroscope Type", "Resectoscope", "Distension Media", "Instruments / Energy Sources", "Anesthesia"], type: "fields" },
        { title: "Findings", fields: ["Cervix", "Cervical Canal", "Uterine Cavity Morphology", "Endometrium", "Right Ostia Visible", "Left Ostia Visible", "Intrauterine Pathology", "Endometrial Biopsy", "Clinical Impression", "Complications"], type: "fields" },
      ],
    };
  }

  if (template.slug === "proformas-pregnancy-checklist") {
    return {
      intro: "Pregnancy checklist for routine blood investigations, urine tests, scans, vaccines, and pregnancy milestones.",
      headerFields: ["Name", "LMP / ET", "Blood Group", "Medical History"],
      signatureFields: ["Doctor Signature", "Date"],
      sections: [
        { title: "Routine Blood Investigations", items: ["TSH", "HbA1c", "OGTT", "CBC", "Serology"], type: "checks" },
        { title: "Urine Tests", items: ["Urine Routine", "Urine Microscopy", "Urine C/S"], type: "checks" },
        { title: "Pregnancy Milestones", columns: ["Date", "Pregnancy Milestone / USG", "Remarks", "Additional Testing / Vaccines"], rows: 10, type: "table" },
      ],
    };
  }

  if (template.slug === "proformas-oocyte-donor-screening" || template.slug === "proformas-recipient-couple-screening") {
    const donor = template.slug.includes("oocyte");
    return {
      intro: donor ? "Gamete donor screening sheet for donor identity, history, examination, family history, obstetric history, and investigations." : "Gamete recipient couple screening sheet for identity, address, donor gamete reason, medical history, semen analysis, and treatment summary.",
      headerFields: donor ? ["Date of Filling Form", "Oocyte Donor Name", "Age", "Date of Birth", "Aadhar Card Number", "Registration ID", "Contact Numbers"] : ["Date of Filling Form", "Wife Name", "Husband Name", "Wife Aadhar", "Husband Aadhar", "Wife Age", "Husband Age", "Registration Number", "Wife MRID", "Husband MRID"],
      signatureFields: donor ? ["Person Who Filled Form", "Clinician Name", "Clinician Signature", "Date"] : ["Clinician Signature / Stamp", "Wife Signature", "Husband Signature", "Date"],
      sections: [
        { title: "Address and Identity", fields: ["Present Address", "Permanent Address", "Education Background", "Occupation", "Religion", "Marital Status", "Spouse / Partner Details"], type: "fields" },
        { title: "Medical / Family History", fields: ["Medical Problems", "Blood Group", "Hypertension", "Diabetes", "Thyroid Disorder", "Bleeding Disorder", "Genetic Disorders", "Hospitalization History", "Substance Abuse"], type: "fields" },
        { title: donor ? "Obstetric History" : "Treatment Summary", columns: donor ? ["Child", "Age", "Mode of Delivery", "Status", "Disabilities", "Genetic Conditions"] : ["Treatment", "Count / Date", "Result", "Remarks"], rows: donor ? 3 : 6, type: "table" },
        { title: donor ? "General Examination / Investigations" : "Semen Analysis / Screening", columns: donor ? ["Test Name", "Date", "Place", "Result"] : ["Factor / Test", "Date", "Result", "Remarks"], rows: 12, type: "table" },
      ],
    };
  }

  if (template.slug === "proformas-stimulation-checklist") {
    return {
      intro: "IVF stimulation checklist and scan summary covering risk factors, trial ET, semen details, scans, follicular monitoring, trigger, OPU, embryo record, and transfer details.",
      headerFields: ["Female Partner / Age", "Male Partner / Age", "Wife MRD", "Husband MRD", "Hosp. No.", "Plan for IVF", "Indication", "Previous Obstetric History"],
      signatureFields: ["Wife Signature", "Husband Signature", "Doctor Signature", "Date"],
      sections: [
        { title: "Contraindications / Risk Factors", items: ["Liver Disorders", "Thromboembolism Family History", "Stroke", "Untreated Thyroid Disorder", "Cancer", "Migraine", "Hyperprolactinemia", "Heart Disease", "Diabetes", "Smoking", "Renal Impairment", "Hypertension", "Undiagnosed Vaginal Bleeding"], type: "checks" },
        { title: "Pre-stimulation Scan", fields: ["LMP", "DOC of Stimulation", "Ovarian Cysts", "Paraovarian Pathology", "AFC", "Ovarian Volume", "LH/FSH Ratio", "Starting Dose", "Adjuvants Added", "Remarks"], type: "fields" },
        { title: "Follicular Monitoring", columns: ["Date", "Cycle Day", "Uterus", "Endometrium", "Right Ovary", "Left Ovary", "E2", "P4", "LH", "Meds", "Trigger"], rows: 8, type: "table" },
        { title: "Trigger / OPU / Embryology", fields: ["Date / Time of Trigger", "Type of Trigger", "Date of Pick-up", "Time of Pick-up", "No. of Follicles", "No. of Oocytes", "No. of MII", "No. Fertilized", "No. Cleaved", "No. Frozen", "Quality of Oocyte", "Quality of Sperm"], type: "fields" },
      ],
    };
  }

  if (template.slug === "proformas-ot-procedure") {
    return {
      intro: "OT procedure template with admission details, clinical history, examination, clinical tests, pre-op advice, intra-op notes, discharge prescription, and follow-up.",
      headerFields: ["Name", "Age", "MRD No.", "Date of Procedure", "Married For", "Date of Admission", "Diagnosis", "Procedure Planned", "Indication"],
      signatureFields: ["Primary Surgeon", "Assistant Surgeon", "Anesthesiologist", "Doctor Signature", "Date"],
      sections: [
        { title: "Clinical History", fields: ["Drug Allergies", "Cycle Details", "Obstetric Score", "Family History", "Medication on Admission", "Past History", "Medical Complications", "Previous Surgeries"], type: "fields" },
        { title: "Clinical Examination", fields: ["General Physical Examination", "BP", "PR", "Height", "Weight", "BMI", "CVS", "RS", "CNS", "GI", "Gynecological Examination"], type: "fields" },
        { title: "Tests and Pre-op Advice", fields: ["TVS", "3D TVS", "MRI", "SSG", "Previous Treatment", "Investigations", "NPO From", "Consent Date", "Alprazolam Time", "Misoprostol Time"], type: "fields" },
        { title: "Intra-op / OT Note", fields: ["Procedure Done", "Indication", "Surgeon and Anesthesiologist", "OT Note", "Laparoscopy Findings", "Hysteroscopy Findings", "Added Procedures", "Specimen for HPE"], type: "fields" },
        { title: "Discharge Prescription", columns: ["No.", "Medication", "Dose", "Route", "Quantity", "Time", "Food", "Days", "Total"], rows: 6, type: "table" },
      ],
    };
  }

  return {
    intro: "Complete couple sub-fertility work-up case sheet covering history, examination, investigations, treatment history, IVF/FET cycles, scans, consent, and progress sheets.",
    headerFields: ["Female Partner / Age", "Male Partner / Age", "Wife MRD", "Husband MRD", "Hosp. No.", "Address", "Contact Numbers", "Referred By"],
    signatureFields: ["Wife Signature", "Husband Signature", "Witness", "Doctor Signature", "Date and Time"],
    sections: [
      { title: "Couple History", fields: ["Married For", "Trying to Conceive Since", "Consanguinity", "Type of Subfertility", "Obstetric Score", "Contraception Used", "Concerns / Fears", "Allergies"], type: "fields" },
      { title: "Female Partner", fields: ["Menstrual History", "Coital Function", "Obstetric History", "Tubal Function", "Medical History", "General Examination", "Gynecological Examination"], type: "fields" },
      { title: "Male Partner", fields: ["Sexual Function", "Childhood History", "Medical Problems", "Surgical History", "Social History", "Occupational History", "Genital Examination"], type: "fields" },
      { title: "Investigations", columns: ["Test / Factor", "Outside Hospital", "Jaya Fertility", "Remarks"], rows: 14, type: "table" },
      { title: "Previous Treatment", columns: ["Month / Year", "Place", "Treatment Done", "Evaluation", "Result"], rows: 8, type: "table" },
      { title: "Summary and Plan", fields: ["Treatment History", "Medical / Endocrine Conditions", "No. of OI + TC", "No. of OI + IUI", "No. of IVF / ICSI", "No. of FET", "Final Diagnosis", "Initial Plan of Treatment"], type: "fields" },
    ],
  };
}
