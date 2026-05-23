import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Users, Target, Award, Scale, Globe, Shield, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const milestones = [
    { year: "2009", title: "Foundation", description: "Marwan Negm establishes Nexus Axis Consultants as a boutique legal practice in Ajman, UAE." },
    { year: "2013", title: "Egypt Expansion", description: "Opens Cairo office in Nasr City to serve the North African market and Egyptian client base." },
    { year: "2017", title: "Corporate Practice Growth", description: "Launches dedicated corporate tax strategy and business setup divisions to meet growing demand." },
    { year: "2021", title: "International Division", description: "Formalises international legal services practice for cross-border and multi-jurisdictional mandates." },
    { year: "2024", title: "500+ Clients", description: "Surpasses 500 active client relationships across the UAE, Egypt, and international markets." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a1929] via-[#1a3a52] to-[#2d5a7b] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="nexus-tag mb-6 mx-auto w-fit">About the Firm</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-2">Nexus Axis Consultants</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bridging legal excellence with strategic business growth across the UAE and Egypt since 2009.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 0C1200 30 240 30 0 0L0 40Z" fill="white"/></svg>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <div className="nexus-accent-line mb-2" />
              <h2 className="text-4xl font-bold text-[#1a3a52] mb-6">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Founded in 2009 by Marwan Negm, Nexus Axis Consultants emerged from a clear and compelling vision: to build a legal and corporate advisory firm that combined the rigour and authority of elite legal practice with the strategic, commercially-minded counsel that businesses genuinely need to thrive.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Our name is deliberate. "Nexus" reflects the intersection of legal precision and business strategy — the point where law and commerce converge to create value. "Axis" symbolises the central, stabilising force around which successful enterprises are built. We serve as that critical nexus and axis for our clients.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                What began as a boutique practice in Ajman has grown — through merit, reputation, and an uncompromising commitment to client outcomes — into a comprehensive advisory firm serving over 500 clients across the UAE, Egypt, and international markets. Our expansion to Cairo reflects both our dedication to the Egyptian market and our ability to provide true dual-jurisdiction expertise from a single, unified firm.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, whether advising a regional conglomerate on a multi-jurisdictional transaction or guiding a startup entrepreneur through their first UAE business setup, we bring the same level of dedication, expertise, and personalised attention to every engagement.
              </p>
            </div>

            <div className="space-y-6">
              {/* Quick Facts */}
              <div className="bg-gradient-to-br from-[#1a3a52] to-[#0f1f2e] rounded-2xl p-10 text-white">
                <h3 className="text-xl font-bold mb-8 text-[#C9A84C]">At a Glance</h3>
                <div className="space-y-6">
                  {[
                    { icon: Award, label: "Established", value: "2009 — 15+ Years of Practice" },
                    { icon: Users, label: "Clients Served", value: "500+ Across UAE, Egypt & Beyond" },
                    { icon: Target, label: "Success Rate", value: "98% Across All Practice Areas" },
                    { icon: MapPin, label: "Offices", value: "Ajman (UAE) & Cairo (Egypt)" },
                    { icon: Globe, label: "Jurisdictions", value: "UAE, Egypt & International" },
                    { icon: Scale, label: "Practice Areas", value: "6 Core Legal Disciplines" },
                  ].map(({ icon: Icon, label, value }, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b border-white/8 last:border-0 last:pb-0">
                      <Icon className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                        <p className="text-white font-semibold text-sm">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div className="text-center mb-12">
              <div className="nexus-tag mb-4 mx-auto w-fit">Our Journey</div>
              <h2 className="text-4xl font-bold text-[#1a3a52] mt-4">Milestones</h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C]/40 via-[#C9A84C] to-[#C9A84C]/40" />
              <div className="space-y-8">
                {milestones.map((item, idx) => (
                  <div key={idx} className={`relative flex gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                    <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} pl-12 md:pl-0`}>
                      <div className="nexus-card inline-block text-left">
                        <p className="text-[#C9A84C] font-bold text-sm mb-1">{item.year}</p>
                        <h3 className="font-bold text-[#1a3a52] mb-2">{item.title}</h3>
                        <p className="text-slate-500 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full bg-[#C9A84C] border-4 border-white shadow-md flex items-center justify-center -translate-x-1/2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="nexus-pattern-bg py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="nexus-tag mb-4 mx-auto w-fit">Our Purpose</div>
            <h2 className="nexus-section-title mt-4">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="nexus-card border-l-4 border-[#C9A84C]">
              <div className="w-12 h-12 rounded-xl bg-[#1a3a52] flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#C9A84C]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide exceptional legal and corporate advisory services that empower businesses to achieve their strategic objectives with confidence, integrity, and compliance. We are committed to being the trusted nexus between legal excellence and business success for our clients across the Middle East and North Africa — delivering clarity where there is complexity, and certainty where there is risk.
              </p>
            </div>
            <div className="nexus-card border-l-4 border-[#1a3a52]">
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C] flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-[#1a3a52]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be recognised as the premier legal and corporate consulting firm in the UAE and Egypt — known for our unwavering commitment to excellence, our commercially intelligent counsel, and our genuine dedication to client success. We envision a future in which businesses across the region can navigate their most complex legal and strategic challenges with confidence, guided by partners who are invested in their long-term outcomes.
              </p>
            </div>
          </div>

          {/* Core Commitments */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Absolute Confidentiality", description: "Every engagement is governed by strict attorney-client privilege and binding NDAs. Your information never leaves our control." },
              { icon: Scale, title: "Legal Precision", description: "We combine rigorous legal analysis with clear, actionable advice — ensuring you understand exactly where you stand and what your options are." },
              { icon: Briefcase, title: "Commercial Intelligence", description: "Our counsel is never purely legal in isolation. We understand the business context and provide advice that serves your commercial objectives." },
            ].map(({ icon: Icon, title, description }, idx) => (
              <div key={idx} className="bg-white rounded-xl p-7 border border-slate-100 shadow-sm">
                <Icon className="w-6 h-6 text-[#C9A84C] mb-4" />
                <h3 className="font-bold text-[#1a3a52] mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="nexus-tag mb-4 mx-auto w-fit">Our Locations</div>
            <h2 className="nexus-section-title mt-4">Our Offices</h2>
            <p className="nexus-section-subtitle mx-auto text-center">
              Strategically located to serve clients across the Gulf region and North Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* UAE */}
            <div className="nexus-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1a3a52] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-semibold">Primary Office</p>
                  <h3 className="text-2xl font-bold text-[#1a3a52]">UAE — Ajman</h3>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Address</p>
                  <p className="text-slate-700 font-semibold">Falcon Tower, Office 1409</p>
                  <p className="text-slate-600">Ajman, United Arab Emirates</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Contact</p>
                  <a href="tel:+971585592355" className="block text-[#1a3a52] hover:text-[#C9A84C] transition-colors font-semibold">+971 585 592 355</a>
                  <a href="mailto:info@nexusaxisconsultants.com" className="block text-slate-600 hover:text-[#C9A84C] transition-colors text-sm">info@nexusaxisconsultants.com</a>
                  <a href="mailto:receiption@nexusaxisconsultants.com" className="block text-slate-600 hover:text-[#C9A84C] transition-colors text-sm">receiption@nexusaxisconsultants.com</a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Commercial Litigation", "Corporate Tax", "Business Setup", "HR Compliance"].map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-[#1a3a52]/8 text-[#1a3a52] font-semibold">{s}</span>
                ))}
              </div>
            </div>

            {/* Egypt */}
            <div className="nexus-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#1a3a52]" />
                </div>
                <div>
                  <p className="text-xs text-[#C9A84C] uppercase tracking-widest font-semibold">Regional Office</p>
                  <h3 className="text-2xl font-bold text-[#1a3a52]">Egypt — Cairo</h3>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Address</p>
                  <p className="text-slate-700 font-semibold">753 St AlTahrir Building</p>
                  <p className="text-slate-600">Nasr City, Cairo, Egypt</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Contact</p>
                  <a href="tel:+971585592355" className="block text-[#1a3a52] hover:text-[#C9A84C] transition-colors font-semibold">+971 585 592 355</a>
                  <a href="mailto:legal@nexusaxisconsultants.com" className="block text-slate-600 hover:text-[#C9A84C] transition-colors text-sm">legal@nexusaxisconsultants.com</a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Egyptian Law", "International Advisory", "Legal Compliance", "Corporate Advisory"].map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-[#C9A84C]/10 text-[#1a3a52] font-semibold">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join 500+ Satisfied Clients</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Experience the Nexus Axis difference. Senior partner counsel, proven results, and an unwavering commitment to your success.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0f1f2e] px-10 py-4 rounded-lg font-bold hover:bg-white transition-colors text-sm">
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
