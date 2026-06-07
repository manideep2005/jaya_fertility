import React, { useMemo, useState } from "react";
import { ArrowLeft, MessageSquare, Heart, Sparkles, Image, Check, FileText } from "lucide-react";

export function TestimonialsDashboard({ templates, onSelect, onBack }) {
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
          <h1>Testimonial Gallery</h1>
        </div>
        <Heart aria-hidden="true" className="header-symbol" style={{ color: "#d946ef" }} />
      </header>

      <div className="selector-band">
        <label htmlFor="testimonial-template-select">Choose a testimonial section</label>
        <div className="selector-row">
          <select id="testimonial-template-select" value={choice} onChange={(event) => setChoice(event.target.value)}>
            {templates.map((template) => (
              <option key={template.slug} value={template.slug}>
                {template.title} ({template.group})
              </option>
            ))}
          </select>
          <button type="button" onClick={() => onSelect(choice)} style={{ background: "#d946ef" }}>
            Open Section
          </button>
        </div>
      </div>

      <div className="toolbar">
        <Search aria-hidden="true" />
        <input
          type="search"
          placeholder="Search sections"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="template-grid">
        {filteredTemplates.map((template) => (
          <button type="button" key={template.slug} className="document-card docx" onClick={() => onSelect(template.slug)} style={{ borderTopColor: "#d946ef" }}>
            <span className="card-icon" style={{ background: "#fdf2ff", color: "#d946ef" }}>
              <Heart aria-hidden="true" />
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

const writtenReviews = [
  { name: "Suresh & Anitha K.", location: "Visakhapatnam", date: "April 2026", rating: 5, text: "After 7 years of trying multiple clinics, we visited Jaya Fertility Centre. Dr. Priyanka Chevuturi analyzed our previous failures and recommended a personalized ICSI cycle with endometrial scratch. We felt supported at every single step. Now we are blessed with healthy twins! We cannot thank the laboratory team and embryologists enough." },
  { name: "Priya & Rajesh M.", location: "Vijayawada", date: "February 2026", rating: 5, text: "Excellent care and absolute transparency. Unlike other hospitals that keep patient details secret, Jaya Fertility explained every hormone level, egg quality grade, and follicle study scan detail. The embryo freezing facility and SOP systems are top-notch. Highly recommended for couples seeking honest treatment." },
  { name: "Dr. Sandeep & Sneha V.", location: "Hyderabad", date: "January 2026", rating: 5, text: "As a doctor myself, I am extremely particular about laboratory sterile conditions and protocols. Jaya Fertility's SOPs and quality control match global standards. The clinical outcomes speak for themselves. Thank you Dr. Priyanka and the embryology team for our bundle of joy." },
  { name: "Meenakshi & Devadas", location: "Kochi", date: "December 2025", rating: 5, text: "We received excellent counseling. The staff is polite, and waiting times are well managed. We had a successful frozen embryo transfer (FET) in our first attempt itself. The diet plans and routine exercise counseling played a huge role." }
];

const babyPhotos = [
  { url: "/anitha/testimonial folder/pictures/c34a0207-304f-4ccd-a277-27a73a3cb131.jpeg", caption: "Sweet baby smile from our successful IVF couple" },
  { url: "/anitha/testimonial folder/pictures/7427d6a3-0d90-4f41-adb2-610b969b5f01.jpeg", caption: "Heartwarming baby card from Vijayawada" },
  { url: "/anitha/testimonial folder/pictures/Dilesh-k-amritahospitals-kochi.webp", caption: "Baby check-up milestone" },
  { url: "/anitha/testimonial folder/pictures/74fb2a17-c163-4808-be08-de4de1124de0.jpeg", caption: "Blessed parents with newborn baby girl" },
  { url: "/anitha/testimonial folder/pictures/c2c97e04-b9cb-4495-8d70-310cd38138fd.jpeg", caption: "Baby twins sleeping peacefully" },
  { url: "/anitha/testimonial folder/pictures/a60411a8-4c95-410c-827d-6a2da7770be3.jpeg", caption: "Proud father holding baby K." },
  { url: "/anitha/testimonial folder/pictures/5ef59079-a68c-48d1-81ec-92faafaad7ab.jpeg", caption: "Sweet baby boy thank you card" },
  { url: "/anitha/testimonial folder/pictures/IMG_1240.jpeg", caption: "Neonate milestone photos" },
  { url: "/anitha/testimonial folder/pictures/5c07f962-beda-44e0-b0f4-e2c638385d88.jpeg", caption: "Thank you card notes sent to clinic" },
  { url: "/anitha/testimonial folder/pictures/Narayan-Jana.jpg", caption: "Consultant clinician visit" }
];

const digitalReviews = [
  { url: "/anitha/testimonial folder/digital sciences/Screenshot (1196).png", caption: "Happy WhatsApp feedback from patient" },
  { url: "/anitha/testimonial folder/digital sciences/86de832a-c84e-417f-9671-ec2e52c965a4.jpeg", caption: "Successful conception news text" },
  { url: "/anitha/testimonial folder/digital sciences/69805611-1bdc-4870-9c81-d28e457051e8.jpeg", caption: "HCG test confirmation screenshot" },
  { url: "/anitha/testimonial folder/digital sciences/454272c0-e585-4d98-9bfd-0f9260665da5.jpeg", caption: "Positive test report confirmation message" },
  { url: "/anitha/testimonial folder/digital sciences/6d802f6f-7bcd-4019-9277-c9a62f35ea6b.jpeg", caption: "Baby photo sent by happy couple" },
  { url: "/anitha/testimonial folder/digital sciences/7b0a1ef7-f6c0-404e-9004-5ec28e28e855.jpeg", caption: "Beta HCG report update chats" },
  { url: "/anitha/testimonial folder/digital sciences/e8b6676c-ccd1-49b4-a473-65dc9bddf7a6.jpeg", caption: "Delivery update and baby details" },
  { url: "/anitha/testimonial folder/digital sciences/IMG_0682.jpeg", caption: "Clinician gratitude screenshot" },
  { url: "/anitha/testimonial folder/digital sciences/59e62da4-ae1e-4779-82c9-39481569f12c.jpeg", caption: "Discharge scan feedback" },
  { url: "/anitha/testimonial folder/digital sciences/0c9e200c-5c79-4826-a38c-336379eebe56.jpeg", caption: "Heartfelt greeting note" },
  { url: "/anitha/testimonial folder/digital sciences/e56a9c97-af3f-4af9-94b3-acb160182bd8.jpeg", caption: "Discharge instructions text" },
  { url: "/anitha/testimonial folder/digital sciences/38d7afbd-e86d-4995-8080-a33e2df68efe.jpeg", caption: "First fetal heartbeat text" }
];

export function TestimonialTemplatePage({ template, onBack }) {
  const [activeTab, setActiveTab] = useState(
    template.slug === "testimonials-text" ? "written" : template.slug === "testimonials-pictures" ? "photos" : "digital"
  );
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [currentGallery, setCurrentGallery] = useState([]);

  const openLightbox = (gallery, index) => {
    setCurrentGallery(gallery);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section className="template-shell" style={{ "--accent": "#d946ef" }}>
      <header className="template-header">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back to testimonials list">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div>
          <p className="eyebrow">Patient Stories & Gallery</p>
          <h1>Jaya Fertility Testimonials</h1>
          <p>Real experiences, patient cards, and digital messages sharing successful fertility journeys.</p>
        </div>
      </header>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "10px", margin: "20px 0", borderBottom: "1px solid #e5dccb", paddingBottom: "10px" }}>
        <button
          type="button"
          onClick={() => setActiveTab("written")}
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            background: activeTab === "written" ? "#d946ef" : "transparent",
            color: activeTab === "written" ? "white" : "#52605b",
            fontWeight: "bold",
          }}
        >
          Written Stories
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("photos")}
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            background: activeTab === "photos" ? "#d946ef" : "transparent",
            color: activeTab === "photos" ? "white" : "#52605b",
            fontWeight: "bold",
          }}
        >
          Baby Photos & Cards
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("digital")}
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            background: activeTab === "digital" ? "#d946ef" : "transparent",
            color: activeTab === "digital" ? "white" : "#52605b",
            fontWeight: "bold",
          }}
        >
          WhatsApp & Digital Reviews
        </button>
      </div>

      {activeTab === "written" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px", marginTop: "20px" }}>
          {writtenReviews.map((review, idx) => (
            <div key={idx} style={{ background: "white", padding: "24px", borderRadius: "12px", border: "1px solid #e2dbcd", boxShadow: "0 4px 12px rgba(60, 50, 34, 0.04)", position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <div>
                  <h3 style={{ margin: "0", fontSize: "1.1rem", color: "#1c6b5f" }}>{review.name}</h3>
                  <span style={{ fontSize: "0.82rem", color: "#776b58" }}>{review.location} • {review.date}</span>
                </div>
                <div style={{ display: "flex", gap: "2px" }}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} style={{ color: "#eab308", fontSize: "1.2rem" }}>★</span>
                  ))}
                </div>
              </div>
              <p style={{ margin: "0", color: "#4c5a56", fontStyle: "italic", fontSize: "0.96rem", lineHeight: "1.6" }}>
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "photos" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginTop: "20px" }}>
          {babyPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(babyPhotos, idx)}
              style={{
                cursor: "pointer",
                background: "white",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #e2dbcd",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.02)",
                transition: "transform 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div style={{ width: "100%", height: "200px", background: "#f5ece2", borderRadius: "6px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={photo.url} alt={photo.caption} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p style={{ margin: "8px 0 0", fontSize: "0.85rem", color: "#52605b", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "digital" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginTop: "20px" }}>
          {digitalReviews.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(digitalReviews, idx)}
              style={{
                cursor: "pointer",
                background: "white",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #e2dbcd",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.02)",
                transition: "transform 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div style={{ width: "100%", height: "200px", background: "#ebf2f5", borderRadius: "6px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={photo.url} alt={photo.caption} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p style={{ margin: "8px 0 0", fontSize: "0.85rem", color: "#52605b", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentGallery.length > 0 && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10, 15, 15, 0.9)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "24px",
          }}
          onClick={closeLightbox}
        >
          <button
            type="button"
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "transparent",
              color: "white",
              border: "none",
              fontSize: "2rem",
              cursor: "pointer",
            }}
            onClick={closeLightbox}
          >
            ×
          </button>
          <div style={{ maxWidth: "90%", maxHeight: "80vh" }} onClick={(e) => e.stopPropagation()}>
            <img
              src={currentGallery[lightboxIndex].url}
              alt={currentGallery[lightboxIndex].caption}
              style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: "8px", objectFit: "contain" }}
            />
          </div>
          <p style={{ color: "white", marginTop: "16px", fontSize: "1.1rem", fontWeight: "bold", textAlign: "center" }}>
            {currentGallery[lightboxIndex].caption}
          </p>
        </div>
      )}
    </section>
  );
}

// Support simple Search component inside testimonial search toolbar
function Search(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
