import { ArrowRight, Scale, Briefcase, Users, Globe, Shield, Target, CheckCircle, Award, Star, MessageCircle, Phone } from "lucide-react";

export function WarmAntiquarian() {
  const services = [
    { icon: Scale, title: "Commercial Litigation", description: "Expert representation across all UAE courts and appellate tribunals with a proven track record spanning three decades." },
    { icon: Briefcase, title: "Corporate Tax Strategy", description: "Strategic tax planning and compliance for multinational corporations navigating the UAE's evolving fiscal framework." },
    { icon: Users, title: "HR Compliance", description: "Comprehensive consultancy ensuring full alignment with UAE and Egyptian labour law, contracts, and workforce regulation." },
    { icon: Target, title: "Business Setup", description: "End-to-end establishment with expedited government visa processing and VIP licensing channels across the UAE." },
    { icon: Shield, title: "Legal Advisory", description: "Strategic counsel on corporate governance, risk management, and regulatory compliance at the executive level." },
    { icon: Globe, title: "International Law", description: "Cross-border solutions, international arbitration, and multi-jurisdictional advisory for global business operations." },
  ];

  return (
    <div style={{ fontFamily: "'Playfair Display', Georgia, serif", background: "#FAF6EE", color: "#2C1A0E" }}>
      {/* ── NAV ── */}
      <nav style={{ background: "#2C1A0E", borderBottom: "3px solid #B8860B" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid #B8860B", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Scale size={16} color="#B8860B" />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#FAF6EE", letterSpacing: "0.08em", textTransform: "uppercase" }}>Nexus Axis</div>
              <div style={{ fontSize: 9, color: "#B8860B", letterSpacing: "0.15em", textTransform: "uppercase" }}>Consultants</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {["Services", "Team", "About", "Pricing", "Contact"].map(l => (
              <span key={l} style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C8AA70", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>{l}</span>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg, #2C1A0E 0%, #4A2C0E 40%, #3D2512 100%)", minHeight: "88vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        {/* Ornamental background pattern */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30Z' fill='none' stroke='%23B8860B' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='8' fill='none' stroke='%23B8860B' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }} />

        {/* Amber glow blobs */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,134,11,0.15) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -120, left: -60, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,134,11,0.08) 0%, transparent 70%)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            {/* Left */}
            <div>
              {/* Ornamental rule */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ height: 1, width: 32, background: "#B8860B" }} />
                <span style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", fontFamily: "'Inter', sans-serif" }}>UAE & Egypt · Est. 2009</span>
                <div style={{ height: 1, width: 32, background: "#B8860B" }} />
              </div>

              <h1 style={{ fontSize: 60, lineHeight: 1.08, color: "#FAF6EE", marginBottom: 8, fontWeight: 700 }}>
                Strategic Legal
              </h1>
              <h1 style={{ fontSize: 60, lineHeight: 1.08, color: "#B8860B", marginBottom: 24, fontWeight: 400, fontStyle: "italic" }}>
                &amp; Corporate Excellence
              </h1>

              <p style={{ fontSize: 17, lineHeight: 1.75, color: "#C8AA70", marginBottom: 36, maxWidth: 500, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                For over fifteen years, Nexus Axis Consultants has served as the trusted legal counsel for businesses navigating the complexities of UAE and Egyptian law. Precision, discretion, and results.
              </p>

              <div style={{ display: "flex", gap: 16, marginBottom: 48 }}>
                <button style={{ background: "#B8860B", color: "#2C1A0E", padding: "14px 32px", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: 8 }}>
                  Schedule Consultation <ArrowRight size={14} />
                </button>
                <button style={{ background: "transparent", color: "#C8AA70", padding: "14px 32px", border: "1px solid rgba(184,134,11,0.4)", cursor: "pointer", fontSize: 13, letterSpacing: "0.08em", fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: 8 }}>
                  <MessageCircle size={14} color="#25D366" /> WhatsApp
                </button>
              </div>

              {/* Trust row */}
              <div style={{ display: "flex", gap: 32 }}>
                {[["500+", "Clients Served"], ["98%", "Success Rate"], ["15+", "Years Practice"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 28, fontWeight: 700, color: "#B8860B" }}>{n}</div>
                    <div style={{ fontSize: 10, color: "#8A6840", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — decorative frame */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: 420, height: 480 }}>
                {/* Outer frame */}
                <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(184,134,11,0.25)" }} />
                <div style={{ position: "absolute", inset: 12, border: "1px solid rgba(184,134,11,0.12)" }} />
                {/* Corner ornaments */}
                {[["0","0","tl"],["0","auto","tr"],["auto","0","bl"],["auto","auto","br"]].map(([t,b,pos]) => (
                  <div key={pos} style={{ position: "absolute", top: t === "0" ? 0 : "auto", bottom: t !== "0" ? 0 : "auto", left: b === "0" ? 0 : "auto", right: b === "auto" ? 0 : "auto", width: 24, height: 24, borderTop: pos[0]==="t" ? "2px solid #B8860B" : "none", borderBottom: pos[0]==="b" ? "2px solid #B8860B" : "none", borderLeft: pos[1]==="l" ? "2px solid #B8860B" : "none", borderRight: pos[1]==="r" ? "2px solid #B8860B" : "none" }} />
                ))}

                {/* Inner content */}
                <div style={{ position: "absolute", inset: 24, background: "rgba(184,134,11,0.04)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32 }}>
                  <div style={{ width: 80, height: 80, border: "2px solid rgba(184,134,11,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                    <Scale size={36} color="#B8860B" />
                  </div>
                  <div style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#B8860B", marginBottom: 16, fontFamily: "'Inter', sans-serif" }}>Nexus Axis Consultants</div>
                  <div style={{ width: 40, height: 1, background: "#B8860B", marginBottom: 16 }} />
                  <p style={{ textAlign: "center", fontSize: 14, lineHeight: 1.8, color: "#C8AA70", fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
                    "Bridging legal precision with strategic business acumen across two nations."
                  </p>
                  <div style={{ width: 40, height: 1, background: "#B8860B", marginTop: 16 }} />
                  <div style={{ marginTop: 20, display: "flex", gap: 16 }}>
                    {["UAE", "EGYPT"].map(c => (
                      <div key={c} style={{ fontSize: 9, letterSpacing: "0.3em", color: "#8A6840", fontFamily: "'Inter', sans-serif" }}>{c}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: "#FAF6EE", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ height: 1, width: 48, background: "#B8860B" }} />
              <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#B8860B", fontFamily: "'Inter', sans-serif" }}>Practice Areas</span>
              <div style={{ height: 1, width: 48, background: "#B8860B" }} />
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 700, color: "#2C1A0E", marginBottom: 16 }}>Our Legal Services</h2>
            <p style={{ fontSize: 16, color: "#8A6840", maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Comprehensive legal and corporate solutions, meticulously crafted to address your most complex business challenges.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} style={{ background: i % 2 === 0 ? "#F5EDD8" : "#EFE4C8", padding: "40px 36px", borderTop: "3px solid #B8860B", cursor: "pointer" }}>
                  <div style={{ width: 48, height: 48, background: "#2C1A0E", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={20} color="#B8860B" />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#2C1A0E", marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "#6B4A2A", lineHeight: 1.8, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{s.description}</p>
                  <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, color: "#B8860B", fontSize: 12, fontFamily: "'Inter', sans-serif", letterSpacing: "0.08em" }}>
                    Learn more <ArrowRight size={12} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section style={{ background: "#2C1A0E", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ height: 1, width: 32, background: "#B8860B" }} />
              <span style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", fontFamily: "'Inter', sans-serif" }}>Our Story</span>
            </div>
            <h2 style={{ fontSize: 40, color: "#FAF6EE", lineHeight: 1.2, marginBottom: 20, fontWeight: 700 }}>
              Trusted Legal Counsel<br /><span style={{ color: "#B8860B", fontStyle: "italic" }}>Across Two Nations</span>
            </h2>
            <p style={{ fontSize: 15, color: "#C8AA70", lineHeight: 1.8, marginBottom: 16, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Founded in 2009 by Marwan Negm, Nexus Axis Consultants has grown from a boutique legal practice into one of the region's most respected advisory firms — with offices in Ajman, UAE, and Nasr City, Cairo.
            </p>
            <p style={{ fontSize: 15, color: "#C8AA70", lineHeight: 1.8, marginBottom: 32, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              We serve startups, SMEs, and multinationals with the same unwavering commitment: legal precision married to strategic business acumen.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#B8860B", fontSize: 13, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
              Our Story <ArrowRight size={14} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { icon: Award, t: "Founded 2009", s: "15+ years of practice" },
              { icon: Scale, t: "Dual Jurisdiction", s: "UAE & Egyptian law" },
              { icon: Shield, t: "Full Confidentiality", s: "Attorney-client privilege" },
              { icon: Star, t: "98% Success Rate", s: "Proven track record" },
            ].map(({ icon: Icon, t, s }, i) => (
              <div key={i} style={{ border: "1px solid rgba(184,134,11,0.25)", padding: "28px 24px" }}>
                <Icon size={20} color="#B8860B" />
                <div style={{ fontSize: 14, fontWeight: 700, color: "#FAF6EE", marginTop: 14, marginBottom: 6 }}>{t}</div>
                <div style={{ fontSize: 12, color: "#8A6840", fontFamily: "'Inter', sans-serif" }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background: "#F5EDD8", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ height: 1, width: 48, background: "#B8860B" }} />
              <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#B8860B", fontFamily: "'Inter', sans-serif" }}>Why Nexus Axis</span>
              <div style={{ height: 1, width: 48, background: "#B8860B" }} />
            </div>
            <h2 style={{ fontSize: 40, fontWeight: 700, color: "#2C1A0E" }}>The Nexus Axis Difference</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { t: "Senior-Led Counsel", d: "Every matter personally handled by senior partners — never delegated to junior associates." },
              { t: "Dual Jurisdiction", d: "Deep expertise in both UAE and Egyptian legal frameworks from a single unified firm." },
              { t: "VIP Government Channels", d: "Expedited processing through direct relationships with UAE government agencies." },
              { t: "Strict Confidentiality", d: "Attorney-client privilege rigorously observed with advanced NDA protocols." },
              { t: "Bilingual Service", d: "Full services delivered fluently in English and Arabic for seamless interaction." },
              { t: "Proven Track Record", d: "98% success rate across litigation, compliance, and advisory engagements over 15 years." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#FAF6EE", padding: "32px 28px", borderLeft: "3px solid #B8860B" }}>
                <div style={{ width: 28, height: 28, background: "#2C1A0E", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <CheckCircle size={14} color="#B8860B" />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#2C1A0E", marginBottom: 10 }}>{item.t}</h3>
                <p style={{ fontSize: 13, color: "#6B4A2A", lineHeight: 1.8, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#2C1A0E", padding: "80px 32px", textAlign: "center", borderTop: "3px solid #B8860B" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ height: 1, flex: 1, maxWidth: 80, background: "rgba(184,134,11,0.4)" }} />
            <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#B8860B", fontFamily: "'Inter', sans-serif" }}>Ready to Begin?</span>
            <div style={{ height: 1, flex: 1, maxWidth: 80, background: "rgba(184,134,11,0.4)" }} />
          </div>
          <h2 style={{ fontSize: 40, color: "#FAF6EE", marginBottom: 16, fontWeight: 700, lineHeight: 1.2 }}>Transform Your Legal Strategy Today</h2>
          <p style={{ fontSize: 15, color: "#C8AA70", lineHeight: 1.8, marginBottom: 36, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Contact us for a confidential consultation. Our senior partners are ready to assess your situation and chart the optimal path forward.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            <button style={{ background: "#B8860B", color: "#2C1A0E", padding: "16px 36px", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
              Book Consultation
            </button>
            <button style={{ background: "transparent", color: "#C8AA70", padding: "16px 36px", border: "1px solid rgba(184,134,11,0.3)", cursor: "pointer", fontSize: 13, fontFamily: "'Inter', sans-serif" }}>
              <Phone size={14} style={{ display: "inline", marginRight: 8 }} />
              +971 585 592 355
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#1A0E06", borderTop: "1px solid rgba(184,134,11,0.2)", padding: "40px 32px", textAlign: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#8A6840", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
          © 2026 Nexus Axis Consultants · Ajman, UAE · Nasr City, Cairo
        </div>
      </footer>
    </div>
  );
}
