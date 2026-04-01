import { useEffect, useRef } from "react";
import { useUi } from "../context/UIContext";

// ─── Types ────────────────────────────────────────────────────────────────────

type Lang = "lo" | "th" | "en";

interface ServiceItem {
  num: string;
  icon: string;
  title: string;
  subtitle: string;
  accentColor: string;
  items: string[];
}

interface PageText {
  tag: string;
  heading1: string;
  heading2: string;
  sectionLabel: string;
  ctaTitle: string;
  ctaSub: string;
  btnContact: string;
  btnChat: string;
}

// ─── i18n helpers ─────────────────────────────────────────────────────────────

function getPageText(lang: Lang): PageText {
  switch (lang) {
    case "th":
      return {
        tag: "// บริการของเรา",
        heading1: "บริการของเรา",
        heading2: "Services & Solutions",
        sectionLabel: "— สิ่งที่เราให้บริการ / What We Offer —",
        ctaTitle: "ต้องการความช่วยเหลือ?",
        ctaSub: "ติดต่อเราได้เลย · Ready to get started?",
        btnContact: "📞 ติดต่อ",
        btnChat: "💬 WhatsApp / Line",
      };
    case "en":
      return {
        tag: "// OUR SERVICES",
        heading1: "What We Do",
        heading2: "Services & Solutions",
        sectionLabel: "— What We Offer —",
        ctaTitle: "Need Help?",
        ctaSub: "Contact us now · Ready to get started?",
        btnContact: "📞 Contact",
        btnChat: "💬 WhatsApp / Line",
      };
    default: // lo
      return {
        tag: "// ບໍລິການຂອງເຮົາ",
        heading1: "ບໍລິການຟີແລນ",
        heading2: "Services Sulotion & FeeLance",
        sectionLabel: "— ສິ່ງທີ່ເຮົາໃຫ້ບໍລິການ / What We Offer —",
        ctaTitle: "ຕ້ອງການໃຫ້ຊ່ວຍ?",
        ctaSub: "ຕິດຕໍ່ເຮົາໄດ້ເລີຍ · Ready to get started?",
        btnContact: "📞 ຕິດຕໍ່",
        btnChat: "💬 WhatsApp / Line",
      };
  }
}

function getServices(lang: Lang): ServiceItem[] {
  switch (lang) {
    case "th":
      return [
        {
          num: "01", icon: "🖨️",
          title: "ซ่อมปริ้นเตอร์", subtitle: "Printer Repair",
          accentColor: "#00e5ff",
          items: ["ซ่อมทุกยี่ห้อ ทุกรุ่น", "เช็กระบบ ทำความสะอาดหัวพิมพ์", "บริการถึงที่ / On-site service available"],
        },
        {
          num: "02", icon: "💻",
          title: "ลงวินโดว์ / ซ่อมคอม", subtitle: "Windows Installation & PC Repair",
          accentColor: "#7c3aed",
          items: ["ติดตั้ง Windows 10 / 11 ใหม่ทุกเวอร์ชัน", "ติดตั้งโปรแกรม ไดรเวอร์", "แก้ไขไวรัส เครื่องช้า / Virus & performance fix"],
        },
        {
          num: "03", icon: "📷",
          title: "กล้องวงจรปิด CCTV", subtitle: "CCTV Installation & Repair",
          accentColor: "#f59e0b",
          items: ["ติดตั้งกล้องใหม่ วางระบบ", "", ],
        },
        {
          num: "04", icon: "🌐",
          title: "รับเขียนเว็บไซต์ & Web App", subtitle: "Website & Web App Development",
          accentColor: "#10b981",
          items: ["ออกแบบและพัฒนาเว็บไซต์", "ระบบ POS คลัง โรงพยาบาล ร้านค้า", "Custom Web App / Mobile-friendly / SEO ready"],
        },
      ];
    case "en":
      return [
        {
          num: "01", icon: "🖨️",
          title: "Printer Repair", subtitle: "All Brands & Models",
          accentColor: "#00e5ff",
          items: ["All brands and models supported", "System check & printhead cleaning", "On-site service available"],
        },
        {
          num: "02", icon: "💻",
          title: "Windows Installation & PC Repair", subtitle: "Setup & Troubleshooting",
          accentColor: "#7c3aed",
          items: ["Fresh install — Windows 10 / 11", "Software & driver installation", "Virus removal & performance fix"],
        },
        {
          num: "03", icon: "📷",
          title: "CCTV Installation & Repair", subtitle: "Security Camera Systems",
          accentColor: "#f59e0b",
          items: ["New camera installation & system setup", "Repair & signal restoration", "Remote viewing via mobile app"],
        },
        {
          num: "04", icon: "🌐",
          title: "Website & Web App Development", subtitle: "Custom Digital Solutions",
          accentColor: "#10b981",
          items: ["Website design & development", "POS, inventory, hospital & e-commerce systems", "Custom Web App / Mobile-friendly / SEO ready"],
        },
      ];
    default: // lo
      return [
        {
          num: "01", icon: "🖨️",
          title: "ສ້ອມແປງປີ່ນເຕີ", subtitle: "Printer Repair",
          accentColor: "#00e5ff",
          items: ["ສ້ອມແປງທຸກຍີ່ຫໍ້, ທຸກລຸ່ນ", "ກວດເຊັກ, ທຳຄວາມສະອາດຫົວພິມ", "ບໍລິການຮອດບ້ານ / On-site service available"],
        },
        {
          num: "02", icon: "💻",
          title: "ຄອມລົງວິນໂດ", subtitle: "Windows Installation & PC Repair",
          accentColor: "#7c3aed",
          items: ["ລົງ Windows 10 / 11 ໃໝ່", "ຕິດຕັ້ງໂປຣແກຣມ, ໄດເວີ", "ແກ້ໄຂໄວຣັດ, ຄອມຊ້າ / Virus & performance fix"],
        },
        {
          num: "03", icon: "📷",
          title: "ກ້ອງ CCTV", subtitle: "CCTV Installation & Repair",
          accentColor: "#f59e0b",
          items: ["ຕິດຕັ້ງກ້ອງໃໝ່, ວາງລະບົບ", "ສ້ອມແປງ, ສັບລ້ຽງສັນຍານ",],
        },
        {
          num: "04", icon: "🌐",
          title: "ຮັບຂຽນເວັບໄຊ & Web App", subtitle: "Website & Web App Development",
          accentColor: "#10b981",
          items: ["ອອກແບບ ແລະ ພັດທະນາເວັບໄຊ", "ລະບົບ POS, ສາງ, ໂຮງໝໍ, ຮ້ານ", "Custom Web App / Mobile-friendly / SEO ready"],
        },
      ];
  }
}

// ─── ServiceCard ──────────────────────────────────────────────────────────────

function ServiceCard({
  service,
  index,
  isDark,
}: {
  service: ServiceItem;
  index: number;
  isDark: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100 + index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const c = {
    card:      isDark ? "#16161f" : "#ffffff",
    cardHover: isDark ? "#111118" : "#f8fafc",
    text:      isDark ? "#e8e8f0" : "#0f172a",
    sub:       isDark ? "#9999bb" : "#64748b",
    num:       isDark ? "#6b6b8a" : "#94a3b8",
    border:    isDark ? "#2a2a3a" : "#e2e8f0",
    iconBg:    isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
  };

  return (
    <div
      ref={cardRef}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease, background 0.2s ease",
        background: c.card,
        padding: "40px 36px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = c.cardHover;
        const bar = e.currentTarget.querySelector<HTMLDivElement>(".top-bar");
        if (bar) bar.style.transform = "scaleX(1)";
        const icon = e.currentTarget.querySelector<HTMLDivElement>(".card-icon");
        if (icon) icon.style.transform = "scale(1.1) rotate(-3deg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = c.card;
        const bar = e.currentTarget.querySelector<HTMLDivElement>(".top-bar");
        if (bar) bar.style.transform = "scaleX(0)";
        const icon = e.currentTarget.querySelector<HTMLDivElement>(".card-icon");
        if (icon) icon.style.transform = "scale(1) rotate(0deg)";
      }}
    >
      {/* Top accent bar */}
      <div className="top-bar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: service.accentColor, transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s ease" }} />

      {/* Number */}
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: c.num, letterSpacing: "2px", marginBottom: "20px" }}>
        {service.num} /
      </div>

      {/* Icon */}
      <div className="card-icon" style={{ width: "52px", height: "52px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "24px", background: c.iconBg, border: `1px solid ${c.border}`, transition: "transform 0.3s ease" }}>
        {service.icon}
      </div>

      {/* Titles */}
      <div style={{ fontSize: "1.1rem", fontWeight: 700, color: c.text, marginBottom: "4px", lineHeight: 1.4 }}>
        {service.title}
      </div>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "1.5px", textTransform: "uppercase", color: service.accentColor, marginBottom: "20px" }}>
        {service.subtitle}
      </div>

      {/* Items */}
      <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {service.items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.875rem", color: c.sub, lineHeight: 1.5 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", color: service.accentColor, fontSize: "12px", flexShrink: 0, marginTop: "2px" }}>→</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ServicesPage ─────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const { language, theme } = useUi();

  const lang    = language as Lang;
  const isDark  = theme === "dark";
  const text    = getPageText(lang);
  const services = getServices(lang);

  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;600;700&family=Kanit:wght@300;400;600;700&family=Space+Mono:wght@400;700&display=swap";
    document.head.appendChild(link);

    const h = headerRef.current;
    if (h) setTimeout(() => { h.style.opacity = "1"; h.style.transform = "translateY(0)"; }, 50);
    const c = ctaRef.current;
    if (c) setTimeout(() => { c.style.opacity = "1"; c.style.transform = "translateY(0)"; }, 600);
  }, []);

  const colors = {
    bg:     isDark ? "#0a0a0f" : "#f8fafc",
    text:   isDark ? "#e8e8f0" : "#0f172a",
    sub:    isDark ? "#6b6b8a" : "#64748b",
    border: isDark ? "#2a2a3a" : "#e2e8f0",
    ctaBg:  isDark ? "#16161f" : "#ffffff",
    gridLine: isDark ? "rgba(0,229,255,0.03)" : "rgba(0,0,0,0.04)",
  };

//   const langOptions = [
//     { label: "ລາວ", value: "lo" },
//     { label: "ไทย", value: "th" },
//     { label: "ENG", value: "en" },
//   ];

  return (
    <div style={{ background: colors.bg, minHeight: "100vh", color: colors.text, fontFamily: "'Kanit', 'Noto Sans Lao', sans-serif", position: "relative", overflow: "hidden", transition: "background 0.3s, color 0.3s" }}>

      {/* BG grid */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: `linear-gradient(${colors.gridLine} 1px,transparent 1px),linear-gradient(90deg,${colors.gridLine} 1px,transparent 1px)`, backgroundSize: "60px 60px", pointerEvents: "none", zIndex: 0 }} />

      {/* Glow orbs — dark mode only */}
      {isDark && (
        <>
          <div style={{ position: "fixed", width: "400px", height: "400px", borderRadius: "50%", background: "#00e5ff", filter: "blur(80px)", opacity: 0.1, top: "-100px", right: "-100px", zIndex: 0, pointerEvents: "none" }} />
          <div style={{ position: "fixed", width: "300px", height: "300px", borderRadius: "50%", background: "#7c3aed", filter: "blur(80px)", opacity: 0.1, bottom: "10%", left: "-80px", zIndex: 0, pointerEvents: "none" }} />
        </>
      )}

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <div ref={headerRef} style={{ padding: "72px 0 52px", textAlign: "center", opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>

          <div style={{ display: "inline-block", fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#00e5ff", border: "1px solid rgba(0,229,255,0.35)", padding: "6px 16px", borderRadius: "2px", marginBottom: "24px" }}>
            {text.tag}
          </div>

          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 3.8rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: "16px", color: colors.text }}>
            {text.heading1}
            <br />
            <span style={{ background: "linear-gradient(135deg, #00e5ff, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {text.heading2}
            </span>
          </h1>

          {/* <p style={{ color: colors.sub, fontSize: "1rem", fontWeight: 300, marginBottom: "24px" }}>
            {text.subheading}
          </p> */}

          {/* Language switcher */}
          {/* <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
            {langOptions.map((l) => (
              <button
                key={l.value}
                onClick={() => setLanguage(l.value)}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  padding: "5px 14px",
                  borderRadius: "20px",
                  border: language === l.value ? "1px solid #00e5ff" : `1px solid ${colors.border}`,
                  background: language === l.value ? "rgba(0,229,255,0.12)" : "transparent",
                  color: language === l.value ? "#00e5ff" : colors.sub,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {l.label}
              </button>
            ))}
          </div> */}

          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, #00e5ff, transparent)", margin: "28px auto 0" }} />
        </div>

        {/* Section label */}
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: colors.sub, textAlign: "center", marginBottom: "40px" }}>
          {text.sectionLabel}
        </p>

        {/* ── Services Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: colors.border, border: `1px solid ${colors.border}`, borderRadius: "12px", overflow: "hidden", marginBottom: "80px" }}>
          {services.map((service, index) => (
            <ServiceCard key={service.num} service={service} index={index} isDark={isDark} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div ref={ctaRef} style={{ textAlign: "center", paddingBottom: "80px", opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <div style={{ border: `1px solid ${colors.border}`, borderRadius: "16px", padding: "56px 40px", background: colors.ctaBg, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "8px", position: "relative", color: colors.text }}>{text.ctaTitle}</h2>
            <p style={{ color: colors.sub, fontSize: "0.95rem", marginBottom: "32px", position: "relative" }}>{text.ctaSub}</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
              <button
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", borderRadius: "6px", background: "#00e5ff", color: "#000", fontFamily: "'Kanit', sans-serif", fontWeight: 600, fontSize: "0.95rem", cursor: "pointer", border: "none", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(0,229,255,0.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {text.btnContact}
              </button>
              <button
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", borderRadius: "6px", background: "transparent", color: colors.text, fontFamily: "'Kanit', sans-serif", fontWeight: 400, fontSize: "0.95rem", cursor: "pointer", border: `1px solid ${colors.border}`, transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#00e5ff"; e.currentTarget.style.color = "#00e5ff"; e.currentTarget.style.background = "rgba(0,229,255,0.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.text; e.currentTarget.style.background = "transparent"; }}
              >
                {text.btnChat}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}