import {
  Droplets,
  Dumbbell,
  Moon,
  Sparkles,
} from "lucide-react";

export const availableOptions = [
  { slug: "consents-templates", title: "Consents Templates", status: "17 templates ready" },
  { slug: "diet-charts", title: "Diet Charts", status: "4 templates ready" },
  { slug: "embryology-witness-and-pdf-formats", title: "Embryology Witness and PDF Formats", status: "18 templates ready" },
  { slug: "hyperprolactinemia-bundle", title: "Hyperprolactinemia Bundle", status: "1 template ready" },
  { slug: "investigations", title: "Investigations", status: "4 templates ready" },
  { slug: "jaya-op-and-quick-scan-pdf-formats", title: "Jaya OP and Quality Control", status: "13 templates ready" },
  { slug: "jaya-other-consultants-folder", title: "Jaya Other Consultants", status: "2 templates ready" },
  { slug: "ohss-bundle", title: "OHSS Bundle", status: "3 templates ready" },
  { slug: "pco-case-sheet", title: "PCO Case Sheet", status: "1 case sheet" },
  { slug: "pharmacy-work-and-pdf-formats", title: "Pharmacy Templates", status: "4 templates ready" },
  { slug: "prescriptions", title: "Prescriptions", status: "5 templates ready" },
  { slug: "proformas", title: "Proformas", status: "8 templates ready" },
  { slug: "progesterone-iud-insertion", title: "Progesterone IUD Insertion", status: "1 checklist" },
  { slug: "referrals", title: "Referrals", status: "4 referral forms" },
  { slug: "scan-template", title: "Scan Template", status: "4 templates ready" },
  { slug: "ssg-bundle", title: "SSG Bundle", status: "3 forms ready" },
  { slug: "summary", title: "Summary", status: "6 summary reports" },
  { slug: "testimonial-folder", title: "Testimonial Gallery", status: "Text & Gallery" },
];

export const hyperprolactinemiaTemplates = [
  {
    slug: "hyperprolactinemia-follow-up",
    title: "Hyperprolactinemia Follow-up",
    format: "DOCX",
    source: "hyperprolactinemia follow-up.docx",
    group: "Follow-up",
  },
];

export const investigationTemplates = [
  { slug: "investigations-female", title: "Female Investigations", format: "DOCX", source: "FEMALE INVESTIGATIONS.docx", group: "Female" },
  { slug: "investigations-common", title: "Investigations Common", format: "DOCX", source: "INVESTIGATIONS COMMON.docx", group: "Common" },
  { slug: "investigations-ivf", title: "IVF Investigations Template", format: "DOCX", source: "IVF INVESTIGATIONS TEMPLATE.docx", group: "IVF" },
  { slug: "investigations-male", title: "Male Investigations", format: "DOCX", source: "MALE INVESTIGATIONS.docx", group: "Male" },
];

export const prescriptionTemplates = [
  { slug: "prescriptions-fet", title: "FET Prescription", format: "DOCX", source: "FET PRESCRIPTION.docx", group: "Embryo Transfer" },
  { slug: "prescriptions-fresh-transfer", title: "Fresh Transfer Prescription", format: "DOCX", source: "FRESH TRANSFER PRESCRIPTION.docx", group: "Embryo Transfer" },
  { slug: "prescriptions-ivf-instructions", title: "IVF Instructions Prescription", format: "DOCX", source: "IVF INSTRUCTIONS PRESCRIPTION.docx", group: "IVF Instructions" },
  { slug: "prescriptions-female", title: "Prescription Female", format: "DOCX", source: "PRESCRIPTION FEMALE.docx", group: "Female" },
  { slug: "prescriptions-male", title: "Prescription Male", format: "DOCX", source: "PRESCRIPTION MALE.docx", group: "Male" },
];

export const proformaTemplates = [
  { slug: "proformas-fet-form", title: "FET Form", format: "DOCX", source: "FET FORM.docx", group: "FET" },
  { slug: "proformas-hysteroscopy-report", title: "Hysteroscopy Report", format: "DOCX", source: "HYSTEROSCOPY REPORT.docx", group: "Procedure Report" },
  { slug: "proformas-new-infertility-case-sheet", title: "New Infertility Case Sheet", format: "DOCX", source: "NEW INFERTILITY CASE SHEET.docx", group: "Case Sheet" },
  { slug: "proformas-oocyte-donor-screening", title: "Oocyte Donor Screening Sheet", format: "DOCX", source: "OOCYTE DONOR SCREENING SHEET.docx", group: "Screening" },
  { slug: "proformas-pregnancy-checklist", title: "Pregnancy Checklist", format: "DOCX", source: "PREGNANCY CHECKLIST.docx", group: "Pregnancy" },
  { slug: "proformas-recipient-couple-screening", title: "Recipient Couple Screening Sheet", format: "DOCX", source: "RECIPIENT COUPLE SCREENING SHEET.docx", group: "Screening" },
  { slug: "proformas-stimulation-checklist", title: "Stimulation Checklist and Scans Summary", format: "DOCX", source: "STIMULATION CHECKLIST AND SCANS SUMMARY.docx", group: "IVF Stimulation" },
  { slug: "proformas-ot-procedure", title: "Template for OT Procedure", format: "DOCX", source: "TEMPLATE FOR OT PROCEDURE.docx", group: "OT Procedure" },
];

export const scanTemplates = [
  { slug: "scan-complete-pelvic", title: "Complete Pelvic Scan", format: "DOCX", source: "COMPLETE PELVIC SCAN.docx", group: "Pelvic USG" },
  { slug: "scan-early-pregnancy", title: "Early Pregnancy Scan Template", format: "DOCX", source: "EARLY PREGNANCY SCAN TEMPLATE.docx", group: "Pregnancy Scan" },
  { slug: "scan-follicular-study", title: "Follicular Study", format: "DOCX", source: "FOLLICULAR STUDY.docx", group: "Follicular Study" },
  { slug: "scan-ovarian-cyst-workup", title: "Ovarian Cyst Work-up", format: "DOCX", source: "OVARIAN CYST WORK-UP.docx", group: "Ovarian Cyst" },
];

export const embryologyTemplates = [
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

export const commonPatientFields = [
  "Date",
  "Registration No.",
  "Wife Name",
  "Wife Age",
  "Husband Name",
  "Husband Age",
  "Mobile No.",
  "Consultant / Ref. Dr.",
];

export const iuiFields = [
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

export const semenAnalysisSections = [
  { title: "Patient Details", fields: ["Date", "Husband Name", "Husband Age", "Wife Name", "Wife Age", "Regd. No.", "Occupation", "Mobile No.", "Smoke", "Alcohol", "Patient Email", "Serology"] },
  { title: "Collection Details", fields: ["Days of Abstinence", "Time of Collection", "Method of Collection", "Time of Examination", "Bill No.", "Ref. Dr."] },
  { title: "Physical Examination", fields: ["Liquefaction", "Appearance", "Volume", "Viscosity", "pH"] },
  { title: "Microscopic Examination", fields: ["Sperm Concentration (mi/ml)", "Agglutination", "Clumping", "Granular Debris"] },
  { title: "Sperm Motility", fields: ["Total Motility", "Rapid Progressive Motility", "Sluggish Progressive Motility", "Non-Progressive Motility", "Non-Mobile"] },
  { title: "Sperm Morphology", fields: ["Normal Sperms", "Head Defects", "Neck & Mid Piece Defects", "Tail Defects", "Multiple Defects"] },
  { title: "Cellular Element & Optional Tests", fields: ["Epithelial Cells", "WBC", "RBCs", "Fructose", "ASA", "Hypo-Osmotic Swelling Test (HOS)", "Impression"] },
];

export const dietTemplates = [
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

export const consentTemplates = [
  { slug: "consents-icsi-couple", title: "Consent Form by Couple", format: "DOCX", source: "Consent form  by couple.docx", group: "IVF Consent" },
  { slug: "consents-frozen-transfer", title: "Consent for Frozen Embryo Transfer", format: "DOCX", source: "consent for frozen embryo transfer.docx", group: "Embryo Transfer" },
  { slug: "consents-freezing-embryos", title: "Consent for Freezing Embryos", format: "DOCX", source: "consent for freezing embryos.docx", group: "Freezing" },
  { slug: "consents-fresh-transfer", title: "Consent for Fresh Embryo Transfer", format: "DOCX", source: "consent for fresh embryo transfer.docx", group: "Embryo Transfer" },
  { slug: "consents-oocyte-retrieval", title: "Consent for Oocyte Retrieval", format: "DOCX", source: "consent for oocyte retrieval.docx", group: "Procedure" },
  { slug: "consents-multiple-transfer", title: "Consent for Transfer of Multiple Embryos", format: "DOCX", source: "consent for transfer of multiple embryos.docx", group: "Embryo Transfer" },
  { slug: "consents-freezing-oocytes", title: "Consent for Freezing Oocytes", format: "DOCX", source: "consent for freezing oocytes.docx", group: "Freezing" },
  { slug: "consents-freezing-sperms", title: "Consent for Freezing Sperms", format: "DOCX", source: "consent for freezing sperms.docx", group: "Freezing" },
  { slug: "consents-semen-freezing-short", title: "Consent for Short Term Semen Freezing", format: "DOCX", source: "consent for short term semen freezing.docx", group: "Freezing" },
  { slug: "consents-icsi-donor-sperm", title: "Consent for ICSI with Donor Sperm", format: "DOCX", source: "consent for icsi with donor sperm.docx", group: "Donor Related" },
  { slug: "consents-sperm-donor", title: "Consent by Sperm Donor", format: "DOCX", source: "consent by sperm donor.docx", group: "Donor Related" },
  { slug: "consents-oocyte-donor", title: "Consent by Oocyte Donor", format: "DOCX", source: "consent by oocyte donor.docx", group: "Donor Related" },
  { slug: "consents-tesa-pesa", title: "Consent for TESA, PESA and Micro-TESE", format: "DOCX", source: "consent for TESA, PESA and Micro-TESE.docx", group: "Procedure" },
  { slug: "consents-iui-husband", title: "Consent for IUI with Husband Semen", format: "DOCX", source: "consent for IUI with husband semen.docx", group: "IUI" },
  { slug: "consents-iui-donor", title: "Consent for IUI with Donor Semen", format: "DOCX", source: "iui with donor semen.docx", group: "IUI" },
  { slug: "consents-minor-oocyte", title: "Minor Oocyte Freezing Consent", format: "DOCX", source: "minor oocyte freezing.docx", group: "Freezing" },
  { slug: "consents-minor-sperm", title: "Minor Sperm Freezing Consent", format: "DOCX", source: "minor sperm freezing.docx", group: "Freezing" },
];

export const jayaOpTemplates = [
  { slug: "op-follow-up-diary", title: "Patient Follow-Up Diary", format: "DOCX", source: "PATIENT FOLLOW UP DIARY.docx", group: "Diary" },
  { slug: "op-appointment-diary", title: "Appointment Diary", format: "DOCX", source: "APPOINTMENT DIARY.docx", group: "Diary" },
  { slug: "op-instructions", title: "Instructions to Patients", format: "DOCX", source: "INSTRUCTIONS TO PATIENTS.docx", group: "Instructions" },
  { slug: "op-waiting-slip", title: "Waiting Time Slip", format: "DOCX", source: "WAITING TIME SLIP.docx", group: "Slip" },
  { slug: "op-treatment-options", title: "Treatment Options", format: "DOCX", source: "TREATMENT OPTIONS.docx", group: "Information" },
  { slug: "op-undertaking-patient", title: "Undertaking by Patient JFC", format: "DOCX", source: "undertaking by the patient JFC.docx", group: "Undertaking" },
  { slug: "op-register", title: "OP Register", format: "DOCX", source: "OP REGISTER.docx", group: "Register" },
  { slug: "op-scan-register", title: "Scan Register", format: "DOCX", source: "SCAN REGISTER.docx", group: "Register" },
  { slug: "sop-hycosy", title: "SOP - HyCoSy POP", format: "DOCX", source: "SOP FOLDER/HYCOSY POP.docx", group: "SOP" },
  { slug: "sop-mtp", title: "SOP - Patient Visit MTP Case", format: "DOCX", source: "SOP FOLDER/PATIENT VISIT - MTP CASE.docx", group: "SOP" },
  { slug: "sop-semen-analysis", title: "SOP - Semen Analysis SOP", format: "DOCX", source: "SOP FOLDER/SEMEN ANALYSIS SOP.docx", group: "SOP" },
  { slug: "sop-pregnant-patient", title: "SOP - Pregnant Patient SOP", format: "DOCX", source: "SOP FOLDER/PREGNANT PATIENT SOP.docx", group: "SOP" },
  { slug: "sop-iui", title: "SOP - IUI SOP", format: "DOCX", source: "SOP FOLDER/IUI SOP.docx", group: "SOP" },
];

export const otherConsultantsTemplates = [
  { slug: "jeevitha-payment-slip-docx", title: "Dr. Jeevitha Payment Slip", format: "DOCX", source: "DR. JEEVITHA/PAYMENT SLIP.docx", group: "Payment Slip" },
  { slug: "jeevitha-payment-slip-pdf", title: "Dr. Jeevitha Payment Slip (PDF Reference)", format: "PDF", source: "DR. JEEVITHA/PAYMENT SLIP.pdf", group: "Reference" },
];

export const ohssTemplates = [
  { slug: "ohss-monitoring-sheet", title: "OHSS Monitoring Sheet", format: "DOCX", source: "OHSS MONITORING SHEET.docx", group: "Monitoring" },
  { slug: "ohss-intake-output", title: "Intake-Output Chart", format: "DOCX", source: "INTAKE OUTPUT CHART.docx", group: "Monitoring" },
  { slug: "ohss-prevention-prescription", title: "OHSS Prevention Prescription", format: "DOCX", source: "OHSS PREVENTION PRESCRIPTION.docx", group: "Prescription" },
];

export const pcoTemplates = [
  { slug: "pco-case-sheet", title: "PCO Case Sheet", format: "DOCX", source: "PCO CASE SHEET.docx", group: "Case Sheet" },
];

export const pharmacyTemplates = [
  { slug: "pharmacy-temp-checklist", title: "Temperature Checklist", format: "PDF", source: "temperature check list (2).pdf", group: "Checklist" },
  { slug: "pharmacy-drug-accepting-register", title: "Drug Accepting Register", format: "DOCX", source: "DRUG ACCEPTING REGISTER.docx", group: "Register" },
  { slug: "pharmacy-undertaking-couple", title: "Final Undertaking by Couple - Pharmacy", format: "PDF", source: "final undertaking by the couple - pharmacy.pdf", group: "Undertaking" },
  { slug: "pharmacy-undertaking-patient", title: "Undertaking by Patient - Pharmacy", format: "DOCX", source: "undertaking by patient-pharmacy (1).docx", group: "Undertaking" },
];

export const progesteroneTemplates = [
  { slug: "progesterone-iud-insertion", title: "Emily IUD Insertion", format: "DOCX", source: "emily insertion.docx", group: "Insertion" },
];

export const referralTemplates = [
  { slug: "referral-obg-fetal-med", title: "Fetal Med NT and OBG Referral", format: "DOCX", source: "FETAL MED NT AND OBG REFERRAL.docx", group: "Referral Form" },
  { slug: "referral-general", title: "General Referral Form", format: "DOCX", source: "GENERAL REFERRAL FORM.docx", group: "Referral Form" },
  { slug: "referral-oncofert", title: "Oncofert Referral Form", format: "DOCX", source: "oncofert referral form.docx", group: "Referral Form" },
  { slug: "referral-surgery", title: "Fertility Enhancing Surgery Referral Form", format: "DOCX", source: "FERTILITY ENHANCING SURGERY REFERRAL FORM.docx", group: "Referral Form" },
];

export const ssgTemplates = [
  { slug: "ssg-report", title: "SSG Report", format: "DOCX", source: "SSG REPORT.docx", group: "Report" },
  { slug: "ssg-consent", title: "Consent for SSG", format: "DOCX", source: "CONSENT FOR SSG.docx", group: "Consent" },
  { slug: "ssg-note", title: "SSG Note", format: "DOCX", source: "SSG NOTE.docx", group: "Clinical Note" },
];

export const summaryTemplates = [
  { slug: "summary-semen-freezing", title: "Semen Freezing Report", format: "DOCX", source: "SEMEN FREEZING REPORT.docx", group: "Freezing" },
  { slug: "summary-icsi-consent", title: "ICSI Summary Consent Form", format: "DOCX", source: "icsi summary consent form.docx", group: "Consent" },
  { slug: "summary-oocyte-freezing", title: "Oocyte Freezing Report", format: "DOCX", source: "OOCYTE FREEZING REPORT.docx", group: "Freezing" },
  { slug: "summary-tesa-pesa", title: "Trial TESA-PESA Report", format: "DOCX", source: "TRIAL TESA-PESA REPORT.docx", group: "Report" },
  { slug: "summary-iui", title: "IUI Summary", format: "DOCX", source: "IUI SUMMARY.docx", group: "IUI" },
  { slug: "summary-fertility-screening", title: "Fertility Screening Report", format: "DOCX", source: "FERTILITY SCREENING REPORT.docx", group: "Screening" },
];

export const testimonialTemplates = [
  { slug: "testimonials-text", title: "Patient Written Testimonials", format: "DOCX", source: "testimonials.docx", group: "Written" },
  { slug: "testimonials-pictures", title: "Baby Pictures & Cards", format: "Gallery", source: "pictures/", group: "Photos" },
  { slug: "testimonials-digital", title: "Digital Science Reviews", format: "Gallery", source: "digital sciences/", group: "Reviews" },
];
