import {
  Droplets,
  Dumbbell,
  Moon,
  Sparkles,
} from "lucide-react";

export const availableOptions = [
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
