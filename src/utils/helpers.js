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

export function getScanForm(template) {
  if (template.slug === "scan-complete-pelvic") {
    return {
      intro: "Baseline pelvic ultrasonography form covering uterus, endometrium, myometrial lesions, Doppler, endometriosis, adenomyosis, adnexa, ovaries, cavity, ostia, Mullerian anomaly, and final report.",
      headerFields: ["Name", "Age", "MRD", "Route", "LMP", "Frequency of Probe", "Day of Cycle"],
      signatureFields: ["Sonologist / Doctor Signature", "Date", "Final Report By"],
      sections: [
        { title: "Uterus and Endometrium", fields: ["Orientation", "ET mm", "Type of Endometrium", "Echogenicity of Endometrium", "Sub-endometrial Echogenic Lines", "Endo-Myometrial Junctional Zone", "Intracavitary Fluid", "Serosa", "Shadowing", "Cysts", "Hyper-echogenic Islands"], type: "fields" },
        { title: "Lesions Involving Endometrium", fields: ["Echogenicity", "Outline of Lesion", "Localized / Diffuse", "Polyps Present / Absent", "Size", "Location", "Blood Supply", "RI of Blood Supply"], type: "fields" },
        { title: "Myometrial Lesions", columns: ["No.", "Site", "Size in cms", "Outer Lesion Free Margin", "Inner Lesion Free Margin", "Myometrial Penetration", "Extent", "Shape", "Blood Supply", "Remarks / Type"], rows: 6, type: "table" },
        { title: "Uterine Artery Doppler", columns: ["Side", "PI", "RI", "S/D"], rows: 2, type: "table" },
        { title: "Endometriosis / Adenomyosis", items: ["Adenomyosis", "Endometrioma", "Hydrosalpinx", "Deep Disease - Anterior", "Deep Disease - Posterior", "Sliding Sign - Bladder / Uterus", "Sliding Sign - Cervix / Rectum", "Sliding Sign - Uterus / Bowel", "Sliding Sign - B/L Ovaries", "Pain During Examination", "Diffuse Adenomyosis", "Focal Adenomyosis", "Adenomyoma"], type: "checks" },
        { title: "Adnexa and Ovaries", fields: ["Right Ovary Size", "Left Ovary Size", "Right Ovary Volume", "Left Ovary Volume", "Right AFC", "Left AFC", "Dominant Follicle", "Gross Lesions", "Cervical Glands"], type: "fields" },
        { title: "Ovarian Lesion Checklist", items: ["No Lesions", "Functional Cysts", "Clear Cysts", "Cysts with Septations", "Cysts with Echogenicity", "Hemorrhagic Cysts", "Solid Cysts", "Papillary Projections", "Calcifications", "Nodularity", "Colour Flow"], type: "checks" },
        { title: "Cavity / Mullerian Anomaly", fields: ["Cavity Normal / Abnormal", "Endomyometrial Junction", "Right Ostia", "Left Ostia", "Endocavity Lesion", "External Contour", "Medial Endometrial Shape", "Endometrial Tip-Pit Distance", "Fundus Endometrial Tip Distance", "Internal Indentation Angle", "Mullerian Anomaly Type", "Final Report"], type: "fields" },
      ],
    };
  }

  if (template.slug === "scan-early-pregnancy") {
    return {
      intro: "Early pregnancy scan template with conception type, sac details, fetal pole, cardiac activity, adnexa, AGA, EDD, and impression.",
      headerFields: ["Patient Name", "Patient Age", "Patient MRID", "Spouse Name", "Spouse Age", "Spouse MRID", "LMP", "Cycles", "Ovulated on Day", "Type of Conception", "LMP for Clinical Use"],
      signatureFields: ["Doctor Signature", "Date"],
      sections: [
        { title: "Conception Details", items: ["Timed Cycle", "Ovulation Induction with Timed Cycle", "Ovulation Induction with IUI", "Super Ovulation with Timed Cycle", "Super Ovulation with IUI", "IVF / ICSI Fresh", "IVF / ICSI Frozen", "Stage Day 3", "Stage Day 5"], type: "checks" },
        { title: "Sac 1", fields: ["Size of Sac", "AGA with Sac", "Location of Sac", "Yolk Sac", "Size of Yolk Sac", "Fetal Pole", "Crown Rump Length", "AGA with CRL", "Cardiac Activity", "Chorio-Decidual Reaction", "Additional Features"], type: "fields" },
        { title: "Sac 2", fields: ["Applicable / Not Applicable", "Size of Sac", "AGA with Sac", "Location of Sac", "Yolk Sac", "Size of Yolk Sac", "Fetal Pole", "Crown Rump Length", "AGA with CRL", "Cardiac Activity", "Chorio-Decidual Reaction", "Additional Features"], type: "fields" },
        { title: "Uterus / Adnexa / Impression", fields: ["Uterus", "Myometrium", "Right Adnexa", "Left Adnexa", "Corpus Luteum", "AGA with LMP", "AGA with Scan", "EDD with LMP", "EDD with USG", "Impression"], type: "fields" },
      ],
    };
  }

  if (template.slug === "scan-follicular-study") {
    return {
      intro: "Follicular study template with cycle plan, medicines, serial follicular monitoring, post-trigger scan, medication summary, final treatment plan, and cycle outcome.",
      headerFields: ["Name", "LMP", "Menstrual Cycle Number", "Day 2 Cysts", "Plan", "Medicines Taken"],
      signatureFields: ["Doctor Signature", "Date"],
      sections: [
        { title: "Medicines", items: ["Letrozole 5 mg OD x 5 days", "Step-up Regimen", "Clomiphene Citrate 100 mg x 5 days", "Inj. HMG 75 mg", "Other"], type: "checks" },
        { title: "Follicular Monitoring", columns: ["Date", "Day of Cycle", "Right Ovary", "Left Ovary", "Endometrium", "Remarks / Decision"], rows: 10, type: "table" },
        { title: "Post Trigger Scan", fields: ["Orientation of Uterus", "UCL cm", "Cervix cm", "Free Fluid", "RI", "PSV", "VI", "FI", "FV", "Visible Cumulus", "Vascular Network"], type: "fields" },
        { title: "Cycle Closure", fields: ["Total Medication Taken", "Final Treatment Planned", "Outcome of Cycle"], type: "fields" },
      ],
    };
  }

  return {
    intro: "Ovarian cyst work-up template with GI-RADS category, benign and malignant features, menopausal status, USG score, CA-125, and final impression.",
    headerFields: ["Name", "Age", "MRD", "Date", "3D Pelvic USG", "GI-RADS"],
    signatureFields: ["Doctor Signature", "Date"],
    sections: [
      { title: "GI-RADS Category", items: ["1 - Definitive Benign", "2 - Very Probably Benign", "3 - Probably Benign", "4 - Probably Malignant", "5 - Very Probably Malignant"], type: "checks" },
      { title: "Benign Features", items: ["B1 Unilocular", "B2 Solid Component < 7mm", "B3 Acoustic Shadows", "B4 Smooth Multilocular Tumor < 100mm", "B5 No Doppler Blood Flow"], type: "checks" },
      { title: "Malignant Features", items: ["M1 Irregular Solid Tumor", "M2 Ascites", "M3 At Least 4 Papillary Structures", "M4 Smooth Multilocular Tumor > 100mm", "M5 High Doppler Blood Flow"], type: "checks" },
      { title: "Scoring", fields: ["Menopausal Status", "Menopausal Status Score", "Bilaterality", "Ascites", "Metastasis", "Multilocular", "Solid Areas", "USG Feature Score", "CA-125 Absolute Value", "Patient Score", "Final Impression"], type: "fields" },
    ],
  };
}

export function getConsentForm(template) {
  const source = template.source.toLowerCase();
  
  let declaration = "We, the undersigned couple, hereby consent to the clinical procedure of IVF / ICSI and related laboratory protocols. We have been fully briefed on the processes, success rates, costs, and risks associated, including ovarian hyperstimulation syndrome (OHSS), multiple pregnancies, and procedural complications.";
  
  if (source.includes("frozen embryo")) {
    declaration = "We hereby request and consent to the thawing and transfer of our frozen embryos. We have been explained the survival rate of embryos post-thaw and the expected clinical outcomes.";
  } else if (source.includes("freezing embryos")) {
    declaration = "We hereby request and consent to the cryopreservation and long-term storage of our embryos. We agree to the storage fee schedule and understand the policies regarding disposal, donation, or release of embryos.";
  } else if (source.includes("oocyte retrieval")) {
    declaration = "I hereby consent to the surgical procedure of transvaginal oocyte retrieval under anesthesia. The risks including internal bleeding, infection, and bowel or bladder injury have been explained to me.";
  } else if (source.includes("tesa") || source.includes("pesa")) {
    declaration = "We hereby consent to the surgical sperm retrieval procedure (TESA/PESA/Micro-TESE) for the male partner. We understand the surgical risks and that retrieval of viable sperm cannot be guaranteed.";
  } else if (source.includes("donor sperm")) {
    declaration = "We hereby request and consent to the use of donor sperm from a licensed semen bank for our treatment cycle. We understand the confidentiality terms and that we will be the legal parents of any child born.";
  } else if (source.includes("donor oocyte") || source.includes("oocyte donor")) {
    declaration = "We hereby consent to the use of donor oocytes in our ICSI treatment. The medical screening of the donor, anonymous nature of the program, and legal custody of the offspring have been explained and agreed to.";
  } else if (source.includes("iui")) {
    declaration = "We hereby consent to the procedure of intrauterine insemination (IUI). We understand the procedure details, the potential need for ovarian stimulation, and the risks of multiple gestation.";
  }

  return {
    title: template.title,
    intro: `Standard print-ready clinical consent form for ${template.title}.`,
    patientFields: ["Wife Name", "Wife Age", "Husband Name", "Husband Age", "Registration No.", "Date"],
    declaration,
    witnessRequired: true,
  };
}

export function getJayaOpForm(template) {
  const slug = template.slug;

  if (slug === "op-follow-up-diary") {
    return {
      title: "Patient Follow-Up Diary",
      type: "table",
      intro: "Follicular scans and medication follow-up diary.",
      fields: ["Patient Name", "MRD No.", "Consultant"],
      tableColumns: ["Date", "Day of Cycle", "Endometrium (mm)", "Right Ovary Follicles", "Left Ovary Follicles", "Medication Prescribed", "Remarks"],
      rows: 10,
    };
  }

  if (slug === "op-appointment-diary") {
    return {
      title: "Appointment Diary",
      type: "table",
      intro: "Clinical daily appointments and attendance log.",
      fields: ["Date", "Checked By"],
      tableColumns: ["Time", "Patient Name", "Reg No.", "Contact Number", "Consultant", "Purpose of Visit", "Status"],
      rows: 12,
    };
  }

  if (slug === "op-instructions") {
    return {
      title: "Instructions to Patients",
      type: "checks",
      intro: "Standard lifestyle and medical instructions for fertility patients.",
      fields: ["Patient Name", "Date"],
      items: [
        "Take all hormonal medications and vitamins strictly on schedule.",
        "Maintain optimal hydration by drinking 2.5 to 3 liters of water daily.",
        "Avoid any strenuous workouts, heavy lifting, or high-impact activities.",
        "Report any signs of severe abdominal pain, vomiting, or breathing difficulty immediately.",
        "Eat fresh, home-cooked meals; avoid outside street food and carbonated drinks.",
        "Ensure you attend all scheduled follicular tracking scans.",
      ],
    };
  }

  if (slug === "op-waiting-slip") {
    return {
      title: "Waiting Time Slip",
      type: "fields",
      intro: "Patient check-in waiting slip.",
      fields: ["Token Number", "Patient Name", "MRD No.", "Check-in Time", "Department / Cabin", "Assigned Doctor"],
    };
  }

  if (slug === "op-register" || slug === "op-scan-register") {
    return {
      title: template.title,
      type: "table",
      intro: `Daily registry log for ${template.title}.`,
      fields: ["Month / Year", "Log Sheet Page"],
      tableColumns: ["Date", "Token No.", "Patient Name", "Age / Sex", "Reg No.", "Consultant", "Service Rendered", "Charge (INR)", "Signature"],
      rows: 10,
    };
  }

  if (slug.startsWith("sop-")) {
    return {
      title: template.title,
      type: "sop",
      intro: `Standard Operating Procedure (SOP) documentation.`,
      fields: ["Doc Ref Number", "Effective Date", "Version Number", "Review Frequency", "Author Name", "Approver Sign"],
      sections: [
        { title: "1. Purpose", text: "To document the standardized protocol for the clinical procedure, ensuring safety, consistency, and compliance." },
        { title: "2. Scope", text: "Applies to all clinical, laboratory, and nursing staff performing this procedure at Jaya Fertility." },
        { title: "3. Prerequisites & Equipment", text: "Sterile procedure kits, calibrated heating blocks, carbon dioxide incubators, sterile media lots, and personal protective equipment (PPE)." },
        { title: "4. Step-by-Step Procedure", text: "Verify patient double-identifiers (Name, DOB, Reg No). Prepare equipment. Follow sterile protocols. Record batch numbers. Securely store and label files/samples." },
        { title: "5. Documentation & Quality Control", text: "Complete procedures logs. Sign off on task lists. Audit registers weekly. Report discrepancies to clinical lead." }
      ]
    };
  }

  return {
    title: template.title,
    type: "fields",
    intro: "Quality control and clinic administration document.",
    fields: ["Document Title", "Date", "In-Charge Staff", "Department", "Key Details", "Sign-off Signature"],
  };
}

export function getOtherConsultantsForm(template) {
  return {
    title: "Dr. Jeevitha Payment Slip",
    intro: "Consultant billing, referral slip, and payment receipt.",
    patientFields: ["Receipt No.", "Date", "Patient Name", "Age", "Referral MRD No.", "Consulting Doctor"],
    sections: [
      {
        title: "Billing Details",
        tests: [
          "Outpatient Consultation - Dr. Jeevitha",
          "Specialist Gynecological Scan / TVS",
          "Procedural Assistance Fees",
          "Diagnostic Review & Counseling",
          "Follow-up Consultation"
        ]
      }
    ],
    billingFields: ["Subtotal Amount (INR)", "Discount / Waiver (INR)", "Total Paid (INR)", "Mode of Payment (Cash/UPI/Card)"]
  };
}

export function getOhssForm(template) {
  const slug = template.slug;

  if (slug === "ohss-monitoring-sheet") {
    return {
      title: "OHSS Daily Monitoring Sheet",
      type: "table",
      intro: "Clinical tracker for patients at risk of Ovarian Hyperstimulation Syndrome (OHSS).",
      fields: ["Patient Name", "MRD No.", "OPU Date", "No. of Oocytes Retrieved", "Trigger Type"],
      tableColumns: ["Date", "Weight (kg)", "Abdominal Girth (cm)", "Urine Output (ml/24h)", "Fluid Intake (ml/24h)", "Shortness of Breath", "Nausea / Vomiting", "Hct / PCV (%)", "Reviewed By"],
      rows: 7,
    };
  }

  if (slug === "ohss-intake-output") {
    return {
      title: "Hourly Fluid Intake-Output Log",
      type: "table",
      intro: "Intensive care/ward chart for fluid balance monitoring.",
      fields: ["Patient Name", "Reg No.", "Date", "Room No."],
      tableColumns: ["Hour / Time", "Oral Fluid Intake (ml)", "IV Fluid Infused (ml)", "Urine Output (ml)", "Vomitus / Drain (ml)", "Pulse Rate", "Blood Pressure", "Nurse Initial"],
      rows: 12,
    };
  }

  return {
    title: "OHSS Prevention Prescription",
    type: "sections",
    intro: "Clinical preventive protocol medications checklist.",
    sections: [
      { title: "Patient Details", fields: ["Patient Name", "MRD No.", "Date"] },
      { title: "Recommended Preventive Regimen", fields: ["Tab. Cabergoline 0.5 mg OD (Bedtime) - 8 Days", "Inj. Human Albumin 20% 100ml IV during OPU", "Tab. GnRH Antagonist (Cetrorelix 0.25mg) S/C", "Ensure High Protein Diet & Hydration (3L/day)", "Tab. Rantac 150 mg BD (AC) - 10 Days"] }
    ]
  };
}

export function getPcoForm(template) {
  return {
    title: "PCO Case Sheet & Metabolic Work-Up",
    intro: "Comprehensive PCO case sheet, clinical phenotype, ultrasound metrics, and cardiovascular risk stratification.",
    headerFields: ["Patient Name", "MRD No.", "Age", "Date", "Height (cm)", "Weight (kg)", "BMI", "Waist Girth (cm)"],
    sections: [
      {
        title: "Clinical History & Symptoms",
        items: [
          "Oligomenorrhea / Cycle length > 35 days",
          "Amenorrhea (> 3 months)",
          "Hirsutism (Excessive facial/body hair)",
          "Severe Acne",
          "Acanthosis Nigricans (Hyperpigmentation)",
          "Male-pattern Balding (Alopecia)",
          "Primary Infertility / Anovulation"
        ],
        type: "checks"
      },
      {
        title: "Ultrasonographic Parameters (TVS)",
        fields: ["Right Ovary Volume (cc)", "Left Ovary Volume (cc)", "Right Antral Follicle Count", "Left Antral Follicle Count", "Stromal Echogenicity (Normal/Increased)", "Uterine Lining Thickness (mm)"],
        type: "fields"
      },
      {
        title: "Endocrine & Metabolic Assays",
        fields: ["FSH (mIU/ml)", "LH (mIU/ml)", "LH / FSH Ratio", "Serum Prolactin (ng/ml)", "TSH (uIU/ml)", "Fasting Insulin (uIU/ml)", "HbA1c (%)", "Fasting Blood Sugar (mg/dl)", "Post-Prandial Blood Sugar (mg/dl)"],
        type: "fields"
      },
      {
        title: "OSA Assessment (STOP-BANG Score)",
        items: [
          "S - Snoring: Do you snore loudly?",
          "T - Tiredness: Do you feel tired/sleepy during the day?",
          "O - Observed: Has anyone observed you stop breathing in sleep?",
          "P - Pressure: Do you have high blood pressure?",
          "B - BMI: Is BMI greater than 35?",
          "A - Age: Is age over 50 years?",
          "N - Neck: Neck circumference > 40 cm?",
          "G - Gender: Is the patient Male?"
        ],
        type: "checks"
      }
    ],
    signatureFields: ["Clinician Signature", "Review Date"]
  };
}

export function getPharmacyForm(template) {
  const slug = template.slug;

  if (slug === "pharmacy-temp-checklist") {
    return {
      title: "Daily Refrigerator Temperature Log",
      type: "table",
      intro: "Pharmacy cold-chain log. Target: 2.0°C to 8.0°C.",
      fields: ["Month & Year", "Refrigerator ID / Room Name", "Reviewed By Chemist"],
      tableColumns: ["Day", "Morning Temp (°C)", "Morning Sign", "Evening Temp (°C)", "Evening Sign", "Action Taken if Out-of-Range"],
      rows: 15,
    };
  }

  if (slug === "pharmacy-drug-accepting-register") {
    return {
      title: "Drug Accepting & Audit Register",
      type: "table",
      intro: "Medications receipt, patient verification, and dispensing auditor log.",
      fields: ["Month / Year", "Chemist In-Charge"],
      tableColumns: ["Date", "Patient Name", "Reg No.", "Drug Name / Brand", "Batch Number", "Expiry Date", "Qty Issued", "Patient Verification Sign"],
      rows: 10,
    };
  }

  return {
    title: template.title,
    type: "fields",
    intro: "Pharmacy waiver and patient undertaking form.",
    fields: ["Patient Name", "Spouse Name", "MRD No.", "Date", "Medications Dispensed List", "Agreement Signature of Patient", "Pharmacist Signature"],
  };
}

export function getProgesteroneForm(template) {
  return {
    title: "Progesterone IUD Insertion Protocol",
    intro: "Emily / Mirena IUD insertion procedure logs, checks, and patient instructions.",
    headerFields: ["Patient Name", "MRD No.", "Date of Insertion", "IUD Type", "Batch No.", "Expiry Date"],
    sections: [
      {
        title: "Pre-requisite Checklist",
        items: [
          "Urine Pregnancy Test: Negative",
          "Pelvic Examination done",
          "Patient Informed Consent signed",
          "Vaginal Swab / Pap Smear reviewed",
          "No active pelvic infection"
        ],
        type: "checks"
      },
      {
        title: "Procedure Log",
        fields: ["Uterine Sound Depth (cm)", "Speculum Examination Findings", "Ease of Insertion (Easy/Moderate/Difficult)", "Post-insertion Scan confirmation", "Threads trimmed to (cm)", "Anesthesia / Block used"],
        type: "fields"
      },
      {
        title: "Instructions to Patient",
        items: [
          "Expect mild cramping and spotting for a few days.",
          "Do not insert anything in the vagina (tampons, intercourse) for 48 hours.",
          "Check the presence of threads monthly after periods.",
          "Contact the hospital if you experience fever, foul discharge, or severe pain."
        ],
        type: "checks"
      }
    ],
    signatureFields: ["Gynaecologist Signature", "Date"]
  };
}

export function getReferralForm(template) {
  return {
    title: template.title,
    intro: "Standard medical referral letter template.",
    patientFields: ["Referring Doctor", "Referral Date", "To Doctor Name", "Specialty / Hospital", "Patient Name", "Age / Sex", "Reg No.", "Primary Diagnosis", "Reason for Referral"],
    letterBody: "Dear Doctor,\n\nReferring the above-mentioned patient who is undergoing reproductive treatment at our centre. Kindly evaluate the patient for specialized management/opinion and share your findings.\n\nThank you,\nDr. Priyanka Chevuturi"
  };
}

export function getSsgForm(template) {
  return {
    title: "Saline Salpingography (SSG) Note",
    intro: "SSG procedure logging sheet, uterine cavity assessment, and tubal patency evaluation.",
    headerFields: ["Patient Name", "Age", "MRD No.", "Date of Procedure", "LMP", "Day of Cycle"],
    sections: [
      {
        title: "SSG Protocol Logs",
        fields: ["Speculum / Tenaculum Used", "Catheter Size", "Volume of Saline Infused (ml)", "Ease of Instillation", "Pain Score (1-10)", "Uterine Cavity Morphology (Normal/Septum/Arcuate)"],
        type: "fields"
      },
      {
        title: "Tubal Patency Findings",
        fields: ["Right Tubal Spill (Patent/Blocked/Spasmodic)", "Left Tubal Spill (Patent/Blocked/Spasmodic)", "Pelvic Fluid Collection (Normal/Deficient)", "Clinical Impression", "Post-Procedure Medications", "Follow-up Advice"],
        type: "fields"
      }
    ],
    signatureFields: ["Surgeon Signature", "Witness", "Date"]
  };
}

export function getSummaryForm(template) {
  const slug = template.slug;

  if (slug.includes("freezing")) {
    return {
      title: template.title,
      type: "table",
      intro: "Laboratory report summary of frozen gametes/embryos.",
      fields: ["Patient Name", "Wife MRD", "Husband MRD", "Date of Freeze", "Embryologist Signature"],
      tableColumns: ["Straw No.", "Number Frozen", "Freeze Stage / Day", "Quality Grade", "Cane / Goblet Color", "Canister Location", "Tank No.", "Thaw Date / Remarks"],
      rows: 6,
    };
  }

  if (slug === "summary-iui") {
    return {
      title: "IUI Procedure Summary",
      type: "table",
      intro: "Cycle summary and laboratory statistics for IUI cycle.",
      fields: ["Patient Name", "Reg No.", "Wife Name", "Husband Name"],
      tableColumns: ["Cycle No.", "Date", "Follicles (R)", "Follicles (L)", "Endo (mm)", "Semen Vol (ml)", "Post-wash Count (M/ml)", "Motility (%)", "Doctor", "Result"],
      rows: 6,
    };
  }

  return {
    title: template.title,
    type: "fields",
    intro: "General patient summary report.",
    fields: ["Patient Name", "MRD No.", "Date", "Clinical Indications", "Diagnostic Results Summary", "Treatments Conducted", "Prognosis & Recommendations", "Primary Consultant Signature"],
  };
}
