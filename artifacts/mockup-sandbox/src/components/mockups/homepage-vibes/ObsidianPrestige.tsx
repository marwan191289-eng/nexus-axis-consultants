import { ArrowRight, Scale, Briefcase, Users, Globe, Shield, Target, CheckCircle, Award, Star, MessageCircle, Phone, ChevronRight } from "lucide-react";

export function ObsidianPrestige() {
  const services = [
    { icon: Scale, title: "Commercial Litigation", description: "Expert representation across all UAE courts and appellate tribunals." },
    { icon: Briefcase, title: "Corporate Tax Strategy", description: "Strategic tax planning for multinationals in the UAE's evolving fiscal framework." },
    { icon: Users, title: "HR Compliance", description: "Full alignment with UAE and Egyptian labour law and workforce regulation." },
    { icon: Target, title: "Business Setup", description: "End-to-end establishment with VIP licensing channels across the UAE." },
    { icon: Shield, title: "Legal Advisory", description: "Counsel on corporate governance, risk management, and regulatory compliance." },
    { icon: Globe, title: "International Law", description: "Cross-border solutions and multi-jurisdictional advisory for global operations." },
  ];

  return (
    <div style={{ background: "#080C10", color: "#E8E2D6", fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* ── NAV ── */}
      <nav style={{ borderBottom: "1px solid rgba(201,168,76,0.15)", position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(12px)", background: "rgba(8,12,16,0.92)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 1, height: 24, background: "#C9A84C" }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#E8E2D6" }}>NEXUS AXIS</span>
            <div style={{ width: 1, height: 24, background: "rgba(201,168,76,0.3)" }} />
            <span style={{ fontSize: 9, letterSpacing: "0.18em", color: "#C9A84C", textTransform: "uppercase" }}>Consultants</span>
          </div>
          <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
            {["Services", "Team", "About", "Pricing"].map(l => (
              <span key={l} style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(232,226,214,0.5)", cursor: "pointer" }}>{l}</span>
            ))}
            <button style={{ background: "transparent", border: "1px solid rgba(201,168,76,0.4)", color: "#C9A84C", padding: "8px 20px", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer" }}>
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "90vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        {/* Geometric line grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }} />
        {/* Large golden circle accent */}
        <div style={{ position: "absolute", right: -160, top: "50%", transform: "translateY(-50%)", width: 640, height: 640, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)" }} />
        <div style={{ position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)", width: 480, height: 480, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.05)" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 720 }}>
            {/* Thin overline */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
              <div style={{ height: 1, width: 40, background: "#C9A84C" }} />
              <span style={{ fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A84C" }}>UAE & Egypt · Established 2009</span>
            </div>

            <h1 style={{ fontSize: 76, fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#E8E2D6", marginBottom: 0 }}>
              Strategic
            </h1>
            <h1 style={{ fontSize: 76, fontWeight: 200, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#C9A84C", marginBottom: 16, fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
              Legal &amp;
            </h1>
            <h1 style={{ fontSize: 76, fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#E8E2D6", marginBottom: 56 }}>
              Corporate Excellence
            </h1>

            <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(232,226,214,0.55)", marginBottom: 52, maxWidth: 540, fontWeight: 300, letterSpacing: "0.01em" }}>
              For over fifteen years, Nexus Axis Consultants has served as the trusted counsel for businesses navigating the complexities of UAE and Egyptian law. Precision, discretion, results.
            </p>

            <div style={{ display: "flex", gap: 0, marginBottom: 72 }}>
              <button style={{ background: "#C9A84C", color: "#080C10", padding: "16px 36px", border: "none", cursor: "pointer", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 10 }}>
                Schedule Consultation <ArrowRight size={13} />
              </button>
              <button style={{ background: "transparent", color: "rgba(232,226,214,0.6)", padding: "16px 36px", border: "1px solid rgba(201,168,76,0.2)", borderLeft: "none", cursor: "pointer", fontSize: 11, letterSpacing: "0.15em", display: "flex", alignItems: "center", gap: 8 }}>
                <MessageCircle size={13} color="#25D366" /> WhatsApp
              </button>
            </div>

            {/* Stats row — horizontal rule */}
            <div style={{ display: "flex", gap: 0, borderTop: "1px solid rgba(201,168,76,0.15)" }}>
              {[["500+", "Clients Served"], ["15+", "Years"], ["98%", "Success Rate"], ["2", "Offices"]].map(([n, l], i) => (
                <div key={l} style={{ padding: "24px 40px 0", borderRight: i < 3 ? "1px solid rgba(201,168,76,0.1)" : "none", paddingLeft: i === 0 ? 0 : 40 }}>
                  <div style={{ fontSize: 32, fontWeight: 700, color: "#C9A84C", letterSpacing: "-0.02em", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,226,214,0.4)", marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "100px 40px", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 80, alignItems: "start" }}>
            {/* Label column */}
            <div style={{ position: "sticky", top: 80 }}>
              <div style={{ height: 1, width: 40, background: "#C9A84C", marginBottom: 20 }} />
              <div style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 20 }}>Practice Areas</div>
              <h2 style={{ fontSize: 38, fontWeight: 700, color: "#E8E2D6", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 20 }}>Our Legal Services</h2>
              <p style={{ fontSize: 14, color: "rgba(232,226,214,0.45)", lineHeight: 1.8, fontWeight: 300 }}>
                Comprehensive solutions across commercial, corporate, and regulatory law.
              </p>
              <div style={{ marginTop: 32 }}>
                <button style={{ background: "transparent", color: "#C9A84C", padding: "12px 0", border: "none", borderBottom: "1px solid rgba(201,168,76,0.3)", cursor: "pointer", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
                  View All Practice Areas <ArrowRight size={12} />
                </button>
              </div>
            </div>

            {/* Services grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(201,168,76,0.08)" }}>
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} style={{ background: "#080C10", padding: "40px 36px", cursor: "pointer", borderBottom: "1px solid rgba(201,168,76,0.06)", transition: "background 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#0D1318")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#080C10")}>
                    <div style={{ marginBottom: 24 }}>
                      <Icon size={18} color="#C9A84C" />
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: "#E8E2D6", marginBottom: 10, letterSpacing: "-0.01em" }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: "rgba(232,226,214,0.4)", lineHeight: 1.75, fontWeight: 300 }}>{s.description}</p>
                    <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, color: "rgba(201,168,76,0.5)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                      Learn more <ChevronRight size={10} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section style={{ padding: "100px 40px", borderTop: "1px solid rgba(201,168,76,0.1)", background: "#060A0E" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 120, alignItems: "center" }}>
          <div>
            <div style={{ height: 1, width: 40, background: "#C9A84C", marginBottom: 20 }} />
            <h2 style={{ fontSize: 46, fontWeight: 700, color: "#E8E2D6", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 28 }}>
              Trusted Legal Counsel<br />
              <span style={{ color: "#C9A84C", fontWeight: 200, fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>Across Two Nations</span>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(232,226,214,0.5)", lineHeight: 1.9, fontWeight: 300, marginBottom: 40 }}>
              Founded in 2009 by Marwan Negm, Nexus Axis Consultants has grown from a boutique legal practice into one of the region's most respected advisory firms — with offices in Ajman, UAE, and Nasr City, Cairo.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer" }}>
              Our Story <ArrowRight size={12} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(201,168,76,0.06)" }}>
            {[
              { icon: Award, t: "Founded 2009", s: "15+ years of practice" },
              { icon: Scale, t: "Dual Jurisdiction", s: "UAE & Egyptian law" },
              { icon: Shield, t: "Full Confidentiality", s: "Attorney-client privilege" },
              { icon: Star, t: "98% Success Rate", s: "Proven track record" },
            ].map(({ icon: Icon, t, s }, i) => (
              <div key={i} style={{ background: "#060A0E", padding: "32px 28px" }}>
                <Icon size={16} color="#C9A84C" />
                <div style={{ fontSize: 13, fontWeight: 600, color: "#E8E2D6", marginTop: 16, marginBottom: 6, letterSpacing: "-0.01em" }}>{t}</div>
                <div style={{ fontSize: 11, color: "rgba(232,226,214,0.35)", letterSpacing: "0.05em" }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "100px 40px", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 20 }}>Ready to Begin?</div>
            <h2 style={{ fontSize: 56, fontWeight: 700, color: "#E8E2D6", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Transform Your<br />Legal Strategy Today.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 220 }}>
            <button style={{ background: "#C9A84C", color: "#080C10", padding: "16px 32px", border: "none", cursor: "pointer", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              Book Consultation <ArrowRight size={13} />
            </button>
            <button style={{ background: "transparent", color: "rgba(232,226,214,0.5)", padding: "16px 32px", border: "1px solid rgba(201,168,76,0.15)", cursor: "pointer", fontSize: 11, letterSpacing: "0.15em", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Phone size={13} /> +971 585 592 355
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "28px 40px", borderTop: "1px solid rgba(201,168,76,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(232,226,214,0.2)", textTransform: "uppercase" }}>© 2026 Nexus Axis Consultants</span>
        <span style={{ fontSize: 10, letterSpacing: "0.15em", color: "rgba(201,168,76,0.35)", textTransform: "uppercase" }}>Ajman UAE · Nasr City Cairo</span>
      </footer>
    </div>
  );
}
