import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Scale, Briefcase, Users, Target, Shield, Globe, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const serviceCategories = [
    {
      id: "litigation",
      icon: Scale,
      title: "Commercial Litigation",
      subtitle: "Dispute Resolution & Court Representation",
      description:
        "When commercial disputes arise, Nexus Axis Consultants provides authoritative representation across all levels of the UAE and Egyptian judiciary. Our litigation team combines deep procedural knowledge with strategic courtroom instinct to protect our clients' rights and enforce their entitlements.",
      benefits: [
        "Full-spectrum representation in UAE federal and emirate courts",
        "Commercial, civil, labour, and real estate dispute handling",
        "Appellate and cassation court expertise",
        "Provisional attachment and enforcement proceedings",
        "International arbitration and ADR representation",
        "Strategic pre-litigation negotiation and settlement",
      ],
      color: "from-[#1a3a52] to-[#2d5a7b]",
    },
    {
      id: "corporate",
      icon: Briefcase,
      title: "Corporate Tax Strategy",
      subtitle: "Tax Planning, Compliance & Advisory",
      description:
        "Navigating the UAE's evolving corporate tax landscape demands specialist counsel. Our tax strategy team provides proactive, commercially intelligent guidance — helping businesses optimise their tax position, maintain full compliance, and avoid costly pitfalls as the regulatory environment develops.",
      benefits: [
        "UAE Corporate Tax registration and compliance management",
        "Tax efficiency planning and entity structuring",
        "Transfer pricing documentation and advisory",
        "Tax dispute resolution and authority correspondence",
        "Cross-border international tax planning",
        "VAT advisory and compliance support",
      ],
      color: "from-[#2d5a7b] to-[#1a3a52]",
    },
    {
      id: "hr",
      icon: Users,
      title: "HR Compliance & Advisory",
      subtitle: "Employment Law & Workforce Regulation",
      description:
        "Employment law compliance is a critical but frequently underestimated risk for businesses operating in the UAE and Egypt. Our HR advisory practice provides comprehensive support — from employment contract architecture to regulatory audits — ensuring your workforce practices are legally sound and commercially robust.",
      benefits: [
        "Employment contract drafting, review, and localisation",
        "UAE Labour Law and DIFC Employment Law compliance audits",
        "Egyptian Labour Law advisory and compliance",
        "Disciplinary processes, termination, and redundancy advisory",
        "Workforce planning and restructuring support",
        "Government liaison for Ministry of Human Resources matters",
      ],
      color: "from-[#1a3a52] to-[#0f1f2e]",
    },
    {
      id: "business",
      icon: Target,
      title: "Business Setup & Licensing",
      subtitle: "Company Formation & Government Liaison",
      description:
        "Establishing a business presence in the UAE involves navigating a complex array of licensing requirements, government approvals, and regulatory obligations. Nexus Axis Consultants manages this entire process — leveraging direct VIP channels with government authorities to deliver rapid, efficient business setup outcomes.",
      benefits: [
        "Mainland and Free Zone company formation",
        "Trade licensing and activity registration",
        "Expedited visa and residency processing",
        "Corporate bank account facilitation",
        "Regulatory compliance framework setup",
        "Branch office and subsidiary establishment",
      ],
      color: "from-[#0f1f2e] to-[#1a3a52]",
    },
    {
      id: "advisory",
      icon: Shield,
      title: "Legal & Corporate Advisory",
      subtitle: "Governance, Risk & Strategic Counsel",
      description:
        "Beyond litigation, Nexus Axis Consultants serves as a trusted ongoing legal partner to its clients — providing the kind of senior-level, commercially aware counsel that helps businesses make better decisions, manage legal risk, and structure their operations for long-term success.",
      benefits: [
        "Corporate governance frameworks and board advisory",
        "Commercial contract drafting and negotiation",
        "Joint venture structuring and partnership agreements",
        "Regulatory compliance and risk assessment",
        "Confidential legal opinion and due diligence",
        "Dispute prevention and pre-emptive legal strategy",
      ],
      color: "from-[#1a3a52] to-[#2d5a7b]",
    },
    {
      id: "international",
      icon: Globe,
      title: "International Legal Services",
      subtitle: "Cross-Border Transactions & Global Expansion",
      description:
        "For clients with operations spanning multiple jurisdictions, Nexus Axis Consultants provides seamless multi-jurisdictional legal support — coordinating complex cross-border matters with the clarity and efficiency that global commerce demands.",
      benefits: [
        "International commercial contract management",
        "Cross-border M&A and transaction advisory",
        "Multi-jurisdictional compliance frameworks",
        "International dispute resolution and arbitration",
        "Foreign investment structuring in UAE and Egypt",
        "Global business expansion strategy and support",
      ],
      color: "from-[#2d5a7b] to-[#0f1f2e]",
    },
  ];

  const whyChoose = [
    { title: "Partner-Led Delivery", description: "Senior partners personally oversee every client matter — ensuring consistent quality and accountability at the highest level." },
    { title: "Client-First Philosophy", description: "Your objectives drive our strategy. We provide tailored, commercially intelligent solutions — not generic legal templates." },
    { title: "Proven Track Record", description: "98% success rate across litigation, compliance, and advisory mandates. 500+ clients. 15+ years of continuous practice." },
    { title: "Strict Confidentiality", description: "All engagements are governed by binding NDAs and stringent information security protocols." },
    { title: "VIP Government Access", description: "Direct relationships with UAE government agencies enable expedited processing for licensing, visas, and regulatory approvals." },
    { title: "Bilingual Capability", description: "Full legal services in English and Arabic — essential for seamless client communication and court proceedings." },
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
          <div className="nexus-tag mb-6 mx-auto w-fit">Practice Areas</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-2">Legal Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive legal and corporate solutions — designed to address your most complex business challenges with precision and authority.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 0C1200 30 240 30 0 0L0 40Z" fill="white"/></svg>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceCategories.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                >
                  {/* Content */}
                  <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="nexus-accent-line mb-2" />
                    <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-2">{service.subtitle}</p>
                    <h2 className="text-4xl font-bold text-[#1a3a52] mb-4">{service.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-8">{service.description}</p>

                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, bidx) => (
                        <li key={bidx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="nexus-button-primary inline-flex items-center gap-2 group">
                      Enquire About This Service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={`rounded-2xl overflow-hidden shadow-xl min-h-80 lg:min-h-96 flex items-center justify-center relative ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`} />
                    <div className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
                        backgroundSize: "40px 40px",
                      }}
                    />
                    <div className="relative text-center p-12">
                      <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-10 h-10 text-[#C9A84C]" />
                      </div>
                      <div className="text-7xl font-bold text-[#C9A84C]/15 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="nexus-pattern-bg py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="nexus-tag mb-4 mx-auto w-fit">Why Nexus Axis</div>
            <h2 className="nexus-section-title mt-4">Why Choose Nexus Axis Consultants?</h2>
            <p className="nexus-section-subtitle mx-auto text-center">
              We combine legal expertise with strategic business acumen to deliver results that matter
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="nexus-card">
                <div className="w-10 h-10 rounded-lg bg-[#1a3a52] flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3 className="font-bold text-[#1a3a52] mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Discuss Your Matter?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Contact our senior partners for a confidential consultation tailored to your specific legal and corporate needs.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0f1f2e] px-10 py-4 rounded-lg font-bold hover:bg-white transition-colors text-sm">
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
