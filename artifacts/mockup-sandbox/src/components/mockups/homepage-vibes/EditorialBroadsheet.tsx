import { ArrowRight, Scale, Briefcase, Users, Globe, Shield, Target, CheckCircle, Award, Star, MessageCircle, Phone, ArrowUpRight } from "lucide-react";

export function EditorialBroadsheet() {
  const services = [
    { icon: Scale, title: "Commercial Litigation", label: "01", description: "Expert representation across all UAE courts and appellate tribunals with a proven track record." },
    { icon: Briefcase, title: "Corporate Tax Strategy", label: "02", description: "Strategic tax planning and compliance for multinationals in the UAE's evolving fiscal landscape." },
    { icon: Users, title: "HR Compliance", label: "03", description: "Full alignment with UAE and Egyptian labour law, employment contracts, and workforce regulation." },
    { icon: Target, title: "Business Setup", label: "04", description: "End-to-end establishment with expedited government visa processing and VIP licensing channels." },
    { icon: Shield, title: "Legal Advisory", label: "05", description: "Strategic counsel on corporate governance, risk management, and regulatory compliance." },
    { icon: Globe, title: "International Law", label: "06", description: "Cross-border solutions, international arbitration, and multi-jurisdictional advisory." },
  ];

  return (
    <div style={{ background: "#F5F2EC", color: "#0D1117", fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* ── NAV ── */}
      <nav style={{ borderBottom: "2px solid #0D1117", background: "#F5F2EC" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.05em", color: "#0D1117", fontFamily: "'Playfair Display', serif" }}>NEXUS AXIS</span>
            <div style={{ height: 20, width: 1, background: "#0D1117", opacity: 0.2 }} />
            <span style={{ fontSize: 9, letterSpacing: "0.2em", color: "#C9A84C", textTransform: "uppercase", fontWeight: 600 }}>Consultants</span>
          </div>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {["Services", "Team", "About", "Pricing"].map(l => (
              <span key={l} style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(13,17,23,0.5)", cursor: "pointer" }}>{l}</span>
            ))}
            <button style={{ background: "#0D1117", color: "#F5F2EC", padding: "8px 20px", border: "none", cursor: "pointer", fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Contact →
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO — Asymmetric editorial grid ── */}
      <section style={{ borderBottom: "2px solid #0D1117", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          {/* Newspaper-style date strip */}
          <div style={{ borderBottom: "1px solid rgba(13,17,23,0.15)", padding: "10px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 9, letterSpacing: "0.25em", color: "rgba(13,17,23,0.4)", textTransform: "uppercase" }}>Est. 2009 · Ajman, UAE & Nasr City, Cairo</span>
            <span style={{ fontSize: 9, letterSpacing: "0.2em", color: "#C9A84C", textTransform: "uppercase", fontWeight: 600 }}>Legal & Corporate Advisory</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "80vh" }}>
            {/* Left — Giant type block */}
            <div style={{ padding: "64px 0 64px", borderRight: "2px solid #0D1117", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingRight: 56 }}>
              <div>
                {/* Kicker tag */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#C9A84C", padding: "4px 12px", marginBottom: 28 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#0D1117" }}>Regional Market Leaders</span>
                </div>

                {/* Super-sized editorial headline */}
                <h1 style={{ fontSize: 80, fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.04em", color: "#0D1117", marginBottom: 0, fontFamily: "'Playfair Display', serif" }}>
                  Strategic
                </h1>
                <h1 style={{ fontSize: 80, fontWeight: 400, lineHeight: 0.92, letterSpacing: "-0.04em", color: "#0D1117", marginBottom: 0, fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
                  Legal &amp;
                </h1>
                <h1 style={{ fontSize: 80, fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.04em", color: "#C9A84C", marginBottom: 36, fontFamily: "'Playfair Display', serif" }}>
                  Corporate
                </h1>
                <h1 style={{ fontSize: 80, fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.04em", color: "#0D1117", marginBottom: 48, fontFamily: "'Playfair Display', serif" }}>
                  Excellence
                </h1>

                <p style={{ fontSize: 15, lineHeight: 1.85, color: "rgba(13,17,23,0.6)", marginBottom: 0, maxWidth: 420, fontWeight: 300 }}>
                  Nexus Axis Consultants is your premier partner for legal advisory, corporate strategy, and business solutions — bridging ambition with governance across the UAE and Egypt.
                </p>
              </div>

              <div>
                <div style={{ height: 2, background: "#0D1117", marginBottom: 28 }} />
                <div style={{ display: "flex", gap: 12 }}>
                  <button style={{ background: "#0D1117", color: "#F5F2EC", padding: "14px 28px", border: "none", cursor: "pointer", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 8 }}>
                    Schedule Consultation <ArrowRight size={13} />
                  </button>
                  <button style={{ background: "transparent", color: "#0D1117", padding: "14px 28px", border: "2px solid #0D1117", cursor: "pointer", fontSize: 11, letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: 8 }}>
                    <MessageCircle size={13} color="#25D366" /> WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Right — Stats + Feature column */}
            <div style={{ paddingLeft: 56, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 0 64px 56px" }}>
              {/* Pull quote */}
              <div style={{ borderLeft: "4px solid #C9A84C", paddingLeft: 24, marginBottom: 48 }}>
                <p style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.35, color: "#0D1117", marginBottom: 12, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                  "15 years of precision, discretion, and results across two nations."
                </p>
                <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(13,17,23,0.45)", textTransform: "uppercase" }}>— Marwan Negm, Founding Partner</span>
              </div>

              {/* Stats in editorial table style */}
              <div>
                {[["500+", "Clients Served", "Across UAE & Egypt"], ["98%", "Success Rate", "Litigation & Advisory"], ["15+", "Years Practice", "Est. Ajman, 2009"], ["2", "Offices", "UAE & Cairo"]].map(([n, l, s], i) => (
                  <div key={l} style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", alignItems: "baseline", gap: 16, borderTop: i === 0 ? "2px solid #0D1117" : "1px solid rgba(13,17,23,0.12)", padding: "16px 0" }}>
                    <span style={{ fontSize: 36, fontWeight: 900, color: "#C9A84C", letterSpacing: "-0.03em", lineHeight: 1, fontFamily: "'Playfair Display', serif" }}>{n}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#0D1117", textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</span>
                    <span style={{ fontSize: 10, color: "rgba(13,17,23,0.4)", letterSpacing: "0.05em" }}>{s}</span>
                  </div>
                ))}
                <div style={{ borderTop: "2px solid #0D1117" }} />
              </div>

              {/* Contact strip */}
              <div style={{ background: "#0D1117", padding: "24px", marginTop: 32 }}>
                <div style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 10 }}>Direct Contact</div>
                <div style={{ fontSize: 16, color: "#F5F2EC", fontWeight: 600, letterSpacing: "-0.01em" }}>+971 585 592 355</div>
                <div style={{ fontSize: 11, color: "rgba(245,242,236,0.4)", marginTop: 4 }}>info@nexusaxisconsultants.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES — Magazine list ── */}
      <section style={{ padding: "80px 40px", borderBottom: "2px solid #0D1117" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 60 }}>
            {/* Header column */}
            <div>
              <div style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: 12 }}>Practice Areas</div>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#0D1117", lineHeight: 1.1, letterSpacing: "-0.03em", fontFamily: "'Playfair Display', serif" }}>
                Our Legal Services
              </h2>
            </div>

            {/* Service rows */}
            <div>
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "48px 1fr auto", gap: 24, alignItems: "start", borderTop: i === 0 ? "2px solid #0D1117" : "1px solid rgba(13,17,23,0.1)", padding: "28px 0", cursor: "pointer" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(13,17,23,0.25)", letterSpacing: "0.1em", paddingTop: 3 }}>{s.label}</span>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0D1117", marginBottom: 8, letterSpacing: "-0.02em", fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
                      <p style={{ fontSize: 13, color: "rgba(13,17,23,0.55)", lineHeight: 1.75, fontWeight: 300 }}>{s.description}</p>
                    </div>
                    <div style={{ paddingTop: 4 }}>
                      <ArrowUpRight size={18} color="rgba(13,17,23,0.2)" />
                    </div>
                  </div>
                );
              })}
              <div style={{ borderTop: "2px solid #0D1117" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: "80px 40px", background: "#0D1117", borderBottom: "2px solid #C9A84C" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, background: "rgba(201,168,76,0.15)" }}>
          {/* Large text block */}
          <div style={{ gridColumn: "span 2", background: "#0D1117", padding: "60px", borderRight: "2px solid rgba(201,168,76,0.2)" }}>
            <div style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 24 }}>Trusted Legal Counsel</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, color: "#F5F2EC", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 28, fontFamily: "'Playfair Display', serif" }}>
              Across<br /><span style={{ color: "#C9A84C", fontStyle: "italic", fontWeight: 400 }}>Two Nations.</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "rgba(245,242,236,0.55)", marginBottom: 20, fontWeight: 300 }}>
              Founded in 2009 by Marwan Negm, Nexus Axis Consultants has grown from a boutique legal practice into one of the region's most respected advisory firms — with offices in Ajman, UAE, and Nasr City, Cairo.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "rgba(245,242,236,0.55)", fontWeight: 300 }}>
              We serve startups, SMEs, and multinationals with the same unwavering commitment: legal precision married to strategic business acumen.
            </p>
          </div>
          {/* Credential column */}
          <div style={{ background: "#0D1117", padding: "60px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {[
              { icon: Award, t: "Founded 2009", s: "15+ years of practice" },
              { icon: Scale, t: "Dual Jurisdiction", s: "UAE & Egypt" },
              { icon: Shield, t: "Full Confidentiality", s: "Attorney-client privilege" },
              { icon: Star, t: "98% Success Rate", s: "Proven track record" },
            ].map(({ icon: Icon, t, s }, i) => (
              <div key={i} style={{ paddingTop: i > 0 ? 28 : 0, marginTop: i > 0 ? 28 : 0, borderTop: i > 0 ? "1px solid rgba(201,168,76,0.12)" : "none" }}>
                <Icon size={14} color="#C9A84C" />
                <div style={{ fontSize: 13, fontWeight: 600, color: "#F5F2EC", marginTop: 10, marginBottom: 4 }}>{t}</div>
                <div style={{ fontSize: 11, color: "rgba(245,242,236,0.35)" }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US — Editorial checklist ── */}
      <section style={{ padding: "80px 40px", borderBottom: "2px solid #0D1117" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48 }}>
            <h2 style={{ fontSize: 48, fontWeight: 900, color: "#0D1117", letterSpacing: "-0.03em", fontFamily: "'Playfair Display', serif" }}>
              The Nexus Axis<br /><span style={{ color: "#C9A84C", fontStyle: "italic", fontWeight: 400 }}>Difference.</span>
            </h2>
            <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(13,17,23,0.35)" }}>Why Nexus Axis</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0 60px" }}>
            {[
              { t: "Senior-Led Counsel", d: "Every matter personally handled by senior partners — never delegated to junior associates." },
              { t: "Dual Jurisdiction", d: "Deep expertise in both UAE and Egyptian legal frameworks from a single unified firm." },
              { t: "VIP Government Channels", d: "Expedited processing through direct relationships with UAE government agencies." },
              { t: "Strict Confidentiality", d: "Attorney-client privilege rigorously observed with advanced NDA protocols." },
              { t: "Bilingual Service", d: "Full services delivered fluently in English and Arabic for seamless interaction." },
              { t: "Proven Track Record", d: "98% success rate across litigation, compliance, and advisory engagements over 15 years." },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(13,17,23,0.1)", padding: "24px 0", display: "flex", gap: 20, alignItems: "start" }}>
                <div style={{ width: 24, height: 24, border: "2px solid #C9A84C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <CheckCircle size={12} color="#C9A84C" />
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0D1117", marginBottom: 6, letterSpacing: "-0.01em" }}>{item.t}</h3>
                  <p style={{ fontSize: 12, color: "rgba(13,17,23,0.55)", lineHeight: 1.75, fontWeight: 300 }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — Full-bleed editorial ── */}
      <section style={{ background: "#C9A84C", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(13,17,23,0.5)", marginBottom: 20 }}>Ready to Begin?</div>
            <h2 style={{ fontSize: 64, fontWeight: 900, color: "#0D1117", lineHeight: 0.95, letterSpacing: "-0.04em", fontFamily: "'Playfair Display', serif" }}>
              Transform Your<br />Legal Strategy<br />
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>Today.</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 240 }}>
            <button style={{ background: "#0D1117", color: "#F5F2EC", padding: "18px 32px", border: "none", cursor: "pointer", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              Book Consultation <ArrowRight size={13} />
            </button>
            <button style={{ background: "transparent", color: "#0D1117", padding: "18px 32px", border: "2px solid #0D1117", cursor: "pointer", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Phone size={13} /> +971 585 592 355
            </button>
            <button style={{ background: "transparent", color: "rgba(13,17,23,0.6)", padding: "18px 32px", border: "1px solid rgba(13,17,23,0.3)", cursor: "pointer", fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <MessageCircle size={13} color="#25D366" /> Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0D1117", borderTop: "2px solid #C9A84C", padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "-0.03em", color: "#F5F2EC", fontFamily: "'Playfair Display', serif" }}>NEXUS AXIS</span>
        <span style={{ fontSize: 9, letterSpacing: "0.2em", color: "rgba(245,242,236,0.3)", textTransform: "uppercase" }}>© 2026 · Ajman UAE · Nasr City Cairo</span>
      </footer>
    </div>
  );
}
