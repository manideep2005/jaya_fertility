import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ChevronRight,
  ClipboardList,
  Droplets,
  Dumbbell,
  FileSpreadsheet,
  FileText,
  FolderOpen,
  Leaf,
  Moon,
  Printer,
  Search,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const availableOptions = [
  { slug: "consents-templates", title: "Consents Templates", status: "Folder option" },
  { slug: "diet-charts", title: "Diet Charts", status: "4 templates ready" },
  { slug: "embryology-witness-and-pdf-formats", title: "Embryology Witness and PDF Formats", status: "18 templates ready" },
  { slug: "hyperprolactinemia-bundle", title: "Hyperprolactinemia Bundle", status: "1 template ready" },
  { slug: "investigations", title: "Investigations", status: "4 templates ready" },
  { slug: "jaya-op-and-quick-scan-pdf-formats", title: "Jaya OP and Quick Scan PDF Formats", status: "Folder option" },
  { slug: "jaya-other-consultants-folder", title: "Jaya Other Consultants Folder", status: "Folder option" },
  { slug: "ohss-bundle", title: "OHSS Bundle", status: "Folder option" },
  { slug: "pco-case-sheet", title: "PCO Case Sheet", status: "Folder option" },
  { slug: "pharmacy-work-and-pdf-formats", title: "Pharmacy Work and PDF Formats", status: "Folder option" },
  { slug: "prescriptions", title: "Prescriptions", status: "5 templates ready" },
  { slug: "proformas", title: "Proformas", status: "8 templates ready" },
  { slug: "progesterone-iud-insertion", title: "Progesterone IUD Insertion", status: "Folder option" },
  { slug: "referrals", title: "Referrals", status: "Folder option" },
  { slug: "scan-template", title: "Scan Template", status: "Folder option" },
  { slug: "ssg-bundle", title: "SSG Bundle", status: "Folder option" },
  { slug: "summary", title: "Summary", status: "Folder option" },
  { slug: "testimonial-folder", title: "Testimonial Folder", status: "Folder option" },
];

const hyperprolactinemiaTemplates = [
  {
    slug: "hyperprolactinemia-follow-up",
    title: "Hyperprolactinemia Follow-up",
    format: "DOCX",
    source: "hyperprolactinemia follow-up.docx",
    group: "Follow-up",
  },
];

const investigationTemplates = [
  { slug: "investigations-female", title: "Female Investigations", format: "DOCX", source: "FEMALE INVESTIGATIONS.docx", group: "Female" },
  { slug: "investigations-common", title: "Investigations Common", format: "DOCX", source: "INVESTIGATIONS COMMON.docx", group: "Common" },
  { slug: "investigations-ivf", title: "IVF Investigations Template", format: "DOCX", source: "IVF INVESTIGATIONS TEMPLATE.docx", group: "IVF" },
  { slug: "investigations-male", title: "Male Investigations", format: "DOCX", source: "MALE INVESTIGATIONS.docx", group: "Male" },
];

const prescriptionTemplates = [
  { slug: "prescriptions-fet", title: "FET Prescription", format: "DOCX", source: "FET PRESCRIPTION.docx", group: "Embryo Transfer" },
  { slug: "prescriptions-fresh-transfer", title: "Fresh Transfer Prescription", format: "DOCX", source: "FRESH TRANSFER PRESCRIPTION.docx", group: "Embryo Transfer" },
  { slug: "prescriptions-ivf-instructions", title: "IVF Instructions Prescription", format: "DOCX", source: "IVF INSTRUCTIONS PRESCRIPTION.docx", group: "IVF Instructions" },
  { slug: "prescriptions-female", title: "Prescription Female", format: "DOCX", source: "PRESCRIPTION FEMALE.docx", group: "Female" },
  { slug: "prescriptions-male", title: "Prescription Male", format: "DOCX", source: "PRESCRIPTION MALE.docx", group: "Male" },
];

const proformaTemplates = [
  { slug: "proformas-fet-form", title: "FET Form", format: "DOCX", source: "FET FORM.docx", group: "FET" },
  { slug: "proformas-hysteroscopy-report", title: "Hysteroscopy Report", format: "DOCX", source: "HYSTEROSCOPY REPORT.docx", group: "Procedure Report" },
  { slug: "proformas-new-infertility-case-sheet", title: "New Infertility Case Sheet", format: "DOCX", source: "NEW INFERTILITY CASE SHEET.docx", group: "Case Sheet" },
  { slug: "proformas-oocyte-donor-screening", title: "Oocyte Donor Screening Sheet", format: "DOCX", source: "OOCYTE DONOR SCREENING SHEET.docx", group: "Screening" },
  { slug: "proformas-pregnancy-checklist", title: "Pregnancy Checklist", format: "DOCX", source: "PREGNANCY CHECKLIST.docx", group: "Pregnancy" },
  { slug: "proformas-recipient-couple-screening", title: "Recipient Couple Screening Sheet", format: "DOCX", source: "RECIPIENT COUPLE SCREENING SHEET.docx", group: "Screening" },
  { slug: "proformas-stimulation-checklist", title: "Stimulation Checklist and Scans Summary", format: "DOCX", source: "STIMULATION CHECKLIST AND SCANS SUMMARY.docx", group: "IVF Stimulation" },
  { slug: "proformas-ot-procedure", title: "Template for OT Procedure", format: "DOCX", source: "TEMPLATE FOR OT PROCEDURE.docx", group: "OT Procedure" },
];

const embryologyTemplates = [
  { slug: "embryology-clinician-embryologist-book-pdf", title: "Clinician Embryologist Book", format: "PDF", source: "clinician embryologist book.pdf", group: "Reference Book" },
  { slug: "embryology-andro-1-xlsx", title: "ANDRO", format: "XLSX", source: "ANDRO (1).xlsx", group: "Andrology" },
  { slug: "embryology-andro-xlsx", title: "ANDRO", format: "XLSX", source: "ANDRO.xlsx", group: "Andrology" },
  { slug: "embryology-andrology-check-list-docx", title: "Andrology Check List", format: "DOCX", source: "ANDROLOGY CHECK LIST (1).docx", group: "Checklist" },
  { slug: "embryology-clinician-embryologist-book-docx", title: "Clinician Embryologist Book", format: "DOCX", source: "clinician embryologist book.docx", group: "Reference Book" },
  { slug: "embryology-embryo-freezing-register-docx", title: "Embryo Freezing Register", format: "DOCX", source: "Embryo Freezing Register.docx", group: "Register" },
  { slug: "embryology-fet-register-docx", title: "FET Register", format: "DOCX", source: "FET Register.docx", group: "Register" },
  { slug: "embryology-iui-d-bw-docx", title: "Intrauterine Insemination (IUI-D) BW", format: "DOCX", source: "INTRAUTERINE INSEMINATION (IUI-D) (1) bw.docx", group: "IUI" },
  { slug: "embryology-iui-d-pdf", title: "Intrauterine Insemination (IUI-D)", format: "PDF", source: "INTRAUTERINE INSEMINATION (IUI-D) (1).pdf", group: "IUI" },
  { slug: "embryology-ivf-icsi-register-docx", title: "IVF - ICSI Register", format: "DOCX", source: "IVF - ICSI REGISTER (1).docx", group: "Register" },
  { slug: "embryology-iui-h-final-bw-pdf", title: "Jaya Intrauterine Insemination (IUI-H) Final BW", format: "PDF", source: "jaya INTRAUTERINE INSEMINATION (IUI-H) (1) final bw.pdf", group: "IUI" },
  { slug: "embryology-iui-h-docx", title: "Jaya Intrauterine Insemination (IUI-H)", format: "DOCX", source: "jaya INTRAUTERINE INSEMINATION (IUI-H).docx", group: "IUI" },
  { slug: "embryology-semen-analysis-docx", title: "Jaya Semen Analysis Report Final BW", format: "DOCX", source: "jaya Semen Analysis Report final bw.docx", group: "Andrology" },
  { slug: "embryology-semen-analysis-pdf", title: "Jaya Semen Analysis Report Final BW", format: "PDF", source: "jaya Semen Analysis Report final bw.pdf", group: "Andrology" },
  { slug: "embryology-new-pain-time-table-pdf", title: "New Pain Time Table", format: "PDF", source: "NEW PAIN TIME TABLE (1).pdf", group: "Schedule" },
  { slug: "embryology-opu-fet-ef-xlsx", title: "OPU, FET, EF", format: "XLSX", source: "OPU , FET , EF.xlsx", group: "Register" },
  { slug: "embryology-semen-freezing-register-pdf", title: "Semen Freezing Register", format: "PDF", source: "Semen Freezing Register-1.pdf", group: "Register" },
  { slug: "embryology-semen-freezing-register-docx", title: "Semen Freezing Register", format: "DOCX", source: "Semen Freezing Register.docx", group: "Register" },
];

const commonPatientFields = [
  "Date",
  "Registration No.",
  "Wife Name",
  "Wife Age",
  "Husband Name",
  "Husband Age",
  "Mobile No.",
  "Consultant / Ref. Dr.",
];

const iuiFields = [
  "Cycle No.",
  "Indication",
  "Donor / Husband",
  "Sample Collection Time",
  "Sample Processing Time",
  "Insemination Time",
  "Pre-wash Count",
  "Post-wash Count",
  "Motility",
  "Catheter Used",
  "Remarks",
  "Embryologist Signature",
  "Doctor Signature",
];

const semenAnalysisSections = [
  { title: "Patient Details", fields: ["Date", "Husband Name", "Husband Age", "Wife Name", "Wife Age", "Regd. No.", "Occupation", "Mobile No.", "Smoke", "Alcohol", "Patient Email", "Serology"] },
  { title: "Collection Details", fields: ["Days of Abstinence", "Time of Collection", "Method of Collection", "Time of Examination", "Bill No.", "Ref. Dr."] },
  { title: "Physical Examination", fields: ["Liquefaction", "Appearance", "Volume", "Viscosity", "pH"] },
  { title: "Microscopic Examination", fields: ["Sperm Concentration (mi/ml)", "Agglutination", "Clumping", "Granular Debris"] },
  { title: "Sperm Motility", fields: ["Total Motility", "Rapid Progressive Motility", "Sluggish Progressive Motility", "Non-Progressive Motility", "Non-Mobile"] },
  { title: "Sperm Morphology", fields: ["Normal Sperms", "Head Defects", "Neck & Mid Piece Defects", "Tail Defects", "Multiple Defects"] },
  { title: "Cellular Element & Optional Tests", fields: ["Epithelial Cells", "WBC", "RBCs", "Fructose", "ASA", "Hypo-Osmotic Swelling Test (HOS)", "Impression"] },
];

function getEmbryologyForm(template) {
  const source = template.source.toLowerCase();
  const title = template.title.toLowerCase();

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

const dietTemplates = [
  {
    slug: "oocyte-quality",
    title: "Good Oocyte Quality",
    subtitle: "Nutrition and lifestyle template to support egg quality.",
    accent: "#0f8b6f",
    source: "diet for good oocyte quality.docx",
    recommended: [
      { category: "Vegetables", items: ["Green leafy vegetables: Spinach, Kale, Broccoli", "Beans", "Tomatoes"] },
      { category: "Fruits", items: ["Blueberries, Raspberries, Strawberries", "Avocados and Peaches", "Citrus fruits"] },
      { category: "Meat & Protein", items: ["Fish: Salmon, Sardines, Mackerel", "Egg whites"] },
      { category: "Grains", items: ["Brown rice", "Oats", "Soy"] },
      { category: "Seeds", items: ["Sesame seeds", "Flax seeds", "Chia seeds", "Pumpkin seeds", "Sunflower seeds"] },
      { category: "Nuts", items: ["Almonds", "Walnuts", "Brazil nuts"] },
      { category: "Spices", items: ["Cinnamon", "Ginger", "Turmeric", "Garlic"] },
    ],
    routine: [
      { icon: Droplets, title: "Hydration", text: "2.5-3 liters per day to support blood supply and egg health." },
      { icon: Dumbbell, title: "Exercise", text: "Regular activity to improve blood supply and overall reproductive health." },
      { icon: Sparkles, title: "Supplements", text: "Omega 3 fatty acids, folic acid, Co-enzyme Q10, melatonin, and resveratrol." },
      { icon: Moon, title: "Sleep Cycle", text: "Maintain a regular 7-8 hour sleep cycle for hormonal balance." },
    ],
    avoid: [
      { category: "Pesticide Exposure", items: ["Avoid vegetables and fruits with pesticide exposure where possible."] },
      { category: "Plastic Food Containers", items: ["Avoid storing food in plastic containers that may release toxic compounds."] },
      {
        category: "Heavy Metal Exposure",
        items: [
          "Farmed fish or seafood with possible heavy metal exposure",
          "Living near industrial areas",
          "Lead or battery industry exposure",
          "Heavy metals in cosmetics",
        ],
      },
      {
        category: "Foods High in Trans Fats",
        items: [
          "Cakes, cookies, pies, french fries, doughnuts, frozen pizzas, biscuits, rolls",
          "Samosas, vegetable puffs, bhujiya, peanut butter, chips, popcorn",
          "Sausages and processed meat",
        ],
      },
      { category: "Caffeinated Drinks", items: ["Colas", "Coffee", "Caffeinated teas"] },
      { category: "Perfume and Deodorant Use", items: ["Reduce exposure where possible."] },
    ],
  },
  {
    slug: "pcos-pcod",
    title: "PCOS / PCOD",
    subtitle: "Food choices grouped into recommended and avoid sections.",
    accent: "#8a5a00",
    source: "diet for pcos or pcod.docx",
    recommended: [
      {
        category: "Vegetables",
        items: [
          "Eggplant (Brinjal)",
          "Green beans",
          "Green capsicum",
          "Carrot in moderation",
          "Cucumber",
          "Lettuce",
          "Dark green leafy vegetables",
          "Cauliflower",
          "Bhindi (Lady's finger)",
          "Kale",
          "Broccoli",
        ],
      },
      {
        category: "Fruits",
        items: ["Kiwi", "Orange", "Blueberries", "All berry fruits", "Apples", "Pears", "Plums", "Gooseberry", "Indian Blackberry (Jamun)", "Peaches", "Avocados"],
      },
      { category: "Dairy Products", items: ["Almond milk", "Lactose free milk", "Low fat cheese", "Curd (Yogurt)"] },
      { category: "Protein Source", items: ["Eggs", "Beans", "Chickpeas", "Peanuts", "Black beans", "Kidney beans", "Black eyed peas", "Moong dal", "Black gram"] },
      { category: "Breads and Grains", items: ["Oats", "Whole grains", "Quinoa flakes"] },
      { category: "Sugars", items: ["Dark chocolate in moderation", "Rice malt syrup"] },
      { category: "Nuts and Seeds", items: ["Peanuts", "Almonds", "Walnuts", "Chia", "Pistachios"] },
      { category: "Meat", items: ["Salmon", "Sardines", "Tuna", "Mackerel"] },
      { category: "Additionally", items: ["Turmeric", "Cinnamon"] },
    ],
    routine: [],
    avoid: [
      { category: "Vegetables", items: ["Potato", "Sweet potato", "Corn", "Peas", "Beets in moderation", "Cassava", "Green beans in moderation"] },
      { category: "Fruits", items: ["Pineapple", "Banana", "Papaya", "Cherries with artificial sweetener", "Dried and sweetened fruits", "Mangoes", "Watermelon"] },
      { category: "Dairy Products", items: ["Cow and buffalo milk", "Custard", "Evaporated milk", "Sweetened condensed milk"] },
      { category: "Protein Source", items: ["Plain cooked meats", "Seafood", "Most pulses", "Marinated meats", "Processed meats"] },
      { category: "Breads and Grains", items: ["Wheat/Rye/Barley based breads", "Breakfast cereals", "Biscuits", "Snack products"] },
      { category: "Sugars", items: ["Honey", "High fructose corn syrup", "Cakes", "Pastries"] },
      { category: "Nuts and Seeds", items: ["Cashews"] },
      { category: "Meat", items: ["Red meat like beef and pork", "Processed meat: salami and sausages"] },
      { category: "Additionally", items: ["Alcohol", "Caffeine", "Gluten", "Fried foods: pizzas and burgers", "Sodas, colas, and energy drinks"] },
    ],
  },
  {
    slug: "thin-endometrium",
    title: "Thin Endometrium",
    subtitle: "Nutrition template to support endometrial thickness.",
    accent: "#9d3c68",
    source: "diet for thin endometrium.docx",
    recommended: [
      { category: "Vegetables", items: ["Green leafy vegetables: Spinach, Kale, Broccoli", "Beans", "Tomatoes"] },
      { category: "Fruits", items: ["Blueberries, Raspberries, Strawberries", "Avocados and Peaches", "Citrus fruits"] },
      { category: "Meat & Protein", items: ["Fish: Salmon, Sardines, Mackerel", "Egg whites"] },
      { category: "Grains", items: ["Brown rice", "Oats", "Soy"] },
      { category: "Seeds", items: ["Sesame seeds", "Flax seeds", "Chia seeds", "Pumpkin seeds", "Sunflower seeds"] },
      { category: "Nuts", items: ["Almonds", "Walnuts", "Brazil nuts"] },
      { category: "Spices", items: ["Cinnamon", "Ginger", "Turmeric", "Garlic"] },
    ],
    routine: [
      { icon: Droplets, title: "Hydration", text: "2.5-3 liters per day to support circulation." },
      { icon: Dumbbell, title: "Exercise", text: "Regular activity to improve blood supply." },
      { icon: Sparkles, title: "Supplements", text: "Omega 3 fatty acids, folic acid, Co-enzyme Q10, melatonin, and resveratrol." },
      { icon: Moon, title: "Sleep Cycle", text: "Maintain a regular 7-8 hour sleep cycle." },
    ],
    avoid: [
      { category: "Pesticide Exposure", items: ["Avoid vegetables and fruits with pesticide exposure where possible."] },
      { category: "Plastic Food Containers", items: ["Avoid storing food in plastic containers that may release toxic compounds."] },
      {
        category: "Heavy Metal Exposure",
        items: ["Farmed fish or seafood", "Industrial-area exposure", "Lead or battery industry exposure", "Heavy metals in cosmetics"],
      },
      {
        category: "Foods High in Trans Fats",
        items: ["Cakes, cookies, pies, french fries, doughnuts, frozen pizzas, biscuits, rolls", "Samosas, vegetable puffs, bhujiya, chips, popcorn", "Sausages and processed meat"],
      },
      { category: "Caffeinated Drinks", items: ["Colas", "Coffee", "Caffeinated teas"] },
      { category: "Perfume and Deodorant Use", items: ["Reduce exposure where possible."] },
    ],
  },
  {
    slug: "endometriosis",
    title: "Endometriosis",
    subtitle: "Recommended and avoid food template for endometriosis support.",
    accent: "#316b9f",
    source: "endometriosis diet.docx",
    recommended: [
      { category: "Vegetables", items: ["Eggplant (Brinjal)", "Green beans", "Green capsicum", "Carrot", "Cucumber", "Lettuce", "Potato in moderation"] },
      { category: "Fruits", items: ["Kiwi", "Orange", "Blueberries", "All berry fruits"] },
      { category: "Dairy Products", items: ["Almond milk", "Lactose free milk", "Soy milk made from soy protein", "Hard cheeses"] },
      { category: "Protein Source", items: ["Eggs", "Firm tofu", "Plain cooked meats", "Seafood", "Most pulses"] },
      { category: "Breads and Cereals", items: ["Oats", "Quinoa flakes", "Rice", "Wheat/Rye/Barley free breads"] },
      { category: "Sugars", items: ["Dark chocolate", "Rice malt syrup"] },
      { category: "Nuts and Seeds", items: ["Peanuts", "Pumpkin seeds", "Walnuts", "Chia", "Pistachios"] },
      { category: "Meat", items: ["Salmon", "Sardines", "Chicken"] },
    ],
    routine: [],
    avoid: [
      { category: "Vegetables", items: ["Dark green leafy vegetables", "Cauliflower", "Green peas", "Mushrooms", "Onions", "Cabbage", "Broccoli"] },
      { category: "Fruits", items: ["Apples", "Cherries", "Dried fruits", "Mangoes", "Peaches", "Pears", "Watermelon"] },
      { category: "Dairy Products", items: ["Cow's milk", "Custard", "Evaporated milk", "Sweetened condensed milk"] },
      { category: "Protein Source", items: ["Marinated meats", "Processed meats"] },
      { category: "Breads and Cereals", items: ["Wheat/Rye/Barley based breads", "Breakfast cereals", "Biscuits", "Snack products"] },
      { category: "Sugars", items: ["Honey", "High fructose corn syrup"] },
      { category: "Meat", items: ["Red meat like beef and pork"] },
      { category: "Additionally", items: ["Alcohol", "Caffeine", "Gluten"] },
    ],
  },
];

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

function Dashboard({ options, onSelect }) {
  const [query, setQuery] = useState("");
  const [choice, setChoice] = useState("diet-charts");

  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return options;

    return options.filter((option) =>
      [option.title, option.status].some((field) => field.toLowerCase().includes(normalizedQuery))
    );
  }, [query, options]);

  return (
    <section className="dashboard-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Jaya Fertility</p>
          <h1>Available Options</h1>
        </div>
        <FolderOpen aria-hidden="true" />
      </header>

      <div className="selector-band">
        <label htmlFor="option-select">Choose an option</label>
        <div className="selector-row">
          <select id="option-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
            {options.map((option) => (
              <option key={option.slug} value={option.slug}>
                {option.title}
              </option>
            ))}
          </select>
          <button type="button" onClick={() => onSelect(choice)}>
            Open Option
          </button>
        </div>
      </div>

      <div className="toolbar">
        <Search aria-hidden="true" />
        <input
          type="search"
          placeholder="Search available options"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="options-list">
        {filteredOptions.map((option) => (
          <button
            type="button"
            key={option.slug}
            className={["diet-charts", "embryology-witness-and-pdf-formats", "hyperprolactinemia-bundle", "investigations", "prescriptions", "proformas"].includes(option.slug) ? "option-row active" : "option-row"}
            onClick={() => onSelect(option.slug)}
          >
            <span className="option-icon">
              {["diet-charts", "embryology-witness-and-pdf-formats", "hyperprolactinemia-bundle", "investigations", "prescriptions", "proformas"].includes(option.slug) ? <FileText aria-hidden="true" /> : <FolderOpen aria-hidden="true" />}
            </span>
            <span className="option-title">{option.title}</span>
            <span className="option-status">{option.status}</span>
            <ChevronRight aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  );
}

function DietChartsDashboard({ templates, onSelect, onBack }) {
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

function EmbryologyDashboard({ templates, onSelect, onBack }) {
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
          <h1>Embryology Witness and PDF Formats</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="embryology-template-select">Choose an embryology template</label>
        <div className="selector-row">
          <select id="embryology-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
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
          placeholder="Search embryology templates"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="template-grid">
        {filteredTemplates.map((template) => (
          <button
            type="button"
            key={template.slug}
            className={`document-card ${template.format.toLowerCase()}`}
            onClick={() => onSelect(template.slug)}
          >
            <span className="card-icon">
              {template.format === "XLSX" ? <FileSpreadsheet aria-hidden="true" /> : <FileText aria-hidden="true" />}
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

function EmbryologyTemplatePage({ template, onBack }) {
  const form = getEmbryologyForm(template);

  return (
    <section className="template-shell embryology-detail">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to embryology templates">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Embryology Template</p>
          <h1>{form.title}</h1>
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
          <strong>Embryology Witness and PDF Formats</strong>
        </article>
      </div>

      <EmbryologyForm form={form} />
    </section>
  );
}

function EmbryologyForm({ form }) {
  return (
    <form className="clinical-form">
      {form.fields && (
        <section className="form-section">
          <h2>Header Details</h2>
          <div className="form-grid">
            {form.fields.map((field) => (
              <label key={field}>
                <span>{field}</span>
                <input type={getInputType(field)} />
              </label>
            ))}
          </div>
        </section>
      )}

      {form.type === "sections" &&
        form.sections.map((section) => (
          <section className="form-section" key={section.title}>
            <h2>{section.title}</h2>
            <div className="form-grid">
              {section.fields.map((field) => (
                <label key={field} className={field.toLowerCase().includes("notes") || field.toLowerCase().includes("impression") ? "wide-field" : undefined}>
                  <span>{field}</span>
                  {field.toLowerCase().includes("notes") || field.toLowerCase().includes("impression") ? (
                    <textarea rows="4" />
                  ) : (
                    <input type={getInputType(field)} />
                  )}
                </label>
              ))}
            </div>
          </section>
        ))}

      {form.type === "table" && (
        <section className="form-section">
          <h2>Register Entries</h2>
          <div className="form-table-wrap">
            <table className="form-table">
              <thead>
                <tr>
                  {form.tableColumns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: form.rows }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {form.tableColumns.map((column, columnIndex) => (
                      <td key={column}>
                        <input aria-label={`${column} row ${rowIndex + 1}`} type={getInputType(column)} defaultValue={columnIndex === 0 ? rowIndex + 1 : ""} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="form-section signature-section">
        <h2>Verification</h2>
        <div className="form-grid">
          <label>
            <span>Prepared By</span>
            <input type="text" />
          </label>
          <label>
            <span>Checked By</span>
            <input type="text" />
          </label>
          <label>
            <span>Doctor / Embryologist Signature</span>
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

function getInputType(label) {
  const normalized = label.toLowerCase();
  if (normalized.includes("date") || normalized.includes("expiry")) return "date";
  if (normalized.includes("time")) return "time";
  if (normalized.includes("age") || normalized.includes("year") || normalized.includes("count") || normalized.includes("volume") || normalized.includes("no.")) return "number";
  if (normalized.includes("email")) return "email";
  if (normalized.includes("mobile")) return "tel";
  return "text";
}

function HyperprolactinemiaDashboard({ templates, onSelect, onBack }) {
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
                {template.title} - {template.format}
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

function HyperprolactinemiaTemplatePage({ template, onBack }) {
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
          <span>Format</span>
          <strong>{template.format}</strong>
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

function InvestigationsDashboard({ templates, onSelect, onBack }) {
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

function InvestigationTemplatePage({ template, onBack }) {
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

function InvestigationForm({ form }) {
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

function getInvestigationForm(template) {
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

function PrescriptionsDashboard({ templates, onSelect, onBack }) {
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

function PrescriptionTemplatePage({ template, onBack }) {
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

function PrescriptionForm({ form }) {
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

function getPrescriptionDefault(column, medicine, rowIndex) {
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

function getPrescriptionForm(template) {
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

function ProformasDashboard({ templates, onSelect, onBack }) {
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
          <h1>Proformas</h1>
        </div>
        <FileText aria-hidden="true" className="header-symbol" />
      </header>

      <div className="selector-band">
        <label htmlFor="proforma-template-select">Choose a proforma template</label>
        <div className="selector-row">
          <select id="proforma-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
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
          placeholder="Search proforma templates"
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

function ProformaTemplatePage({ template, onBack }) {
  const form = getProformaForm(template);

  return (
    <section className="template-shell">
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to proformas">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Proforma Template</p>
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
          <strong>Proformas</strong>
        </article>
      </div>

      <ProformaForm form={form} />
    </section>
  );
}

function ProformaForm({ form }) {
  return (
    <form className="clinical-form">
      <section className="form-section clinic-letterhead">
        <h2>Centre Details</h2>
        <p>Jaya Super-Specialty Fertility Centre & Centre for Reproductive Genetics and Immunology</p>
        <p>Dr. Priyanka Chevuturi, MBBS, MS(OBGYN), M.Ch (Reproductive Medicine and Surgery), Reg No: APMC/FMR/129439</p>
      </section>

      <section className="form-section">
        <h2>Header Details</h2>
        <div className="form-grid">
          {form.headerFields.map((field) => (
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
          {section.type === "checks" ? (
            <div className="checkbox-grid investigation-grid">
              {section.items.map((item) => (
                <label key={item}>
                  <input type="checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          ) : section.type === "table" ? (
            <div className="form-table-wrap">
              <table className="form-table">
                <thead>
                  <tr>
                    {section.columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: section.rows || 5 }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                      {section.columns.map((column, columnIndex) => (
                        <td key={column}>
                          <input aria-label={`${column} ${section.title} row ${rowIndex + 1}`} type={getInputType(column)} defaultValue={columnIndex === 0 && column.toLowerCase().includes("no") ? rowIndex + 1 : ""} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="form-grid">
              {section.fields.map((field) => (
                <label key={field} className={field.toLowerCase().includes("history") || field.toLowerCase().includes("note") || field.toLowerCase().includes("remarks") ? "wide-field" : undefined}>
                  <span>{field}</span>
                  {field.toLowerCase().includes("history") || field.toLowerCase().includes("note") || field.toLowerCase().includes("remarks") ? <textarea rows="4" /> : <input type={getInputType(field)} />}
                </label>
              ))}
            </div>
          )}
        </section>
      ))}

      <section className="form-section signature-section">
        <h2>Signatures</h2>
        <div className="form-grid">
          {form.signatureFields.map((field) => (
            <label key={field}>
              <span>{field}</span>
              <input type={getInputType(field)} />
            </label>
          ))}
        </div>
      </section>
    </form>
  );
}

function getProformaForm(template) {
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

function HyperprolactinemiaForm() {
  return (
    <form className="clinical-form">
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
    </form>
  );
}

function OptionPage({ option, onBack }) {
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

function TemplatePage({ template, onBack }) {
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

function TemplateColumn({ title, tone, groups }) {
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

createRoot(document.getElementById("root")).render(<App />);
