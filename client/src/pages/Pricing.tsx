import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, MessageCircle, Phone, ArrowRight, Star, Shield, Zap, Building2, FileText, Scale, Users, Briefcase, Globe } from "lucide-react";

const WA = "https://wa.me/message/BSPKDIEB7H22H1";

function waLink(pkg: string, price: string) {
  const msg = encodeURIComponent(
    `Hello Nexus Axis Consultants,\n\nI am interested in the ${pkg} (${price}) and would like to discuss next steps.\n\nPlease contact me at your earliest convenience.`
  );
  return `${WA}?text=${msg}`;
}

export default function Pricing() {
  const retainerPlans = [
    {
      name: "Essential",
      nameAr: "الأساسية",
      price: "AED 2,500",
      period: "/ month",
      tagline: "For startups & small businesses",
      icon: Zap,
      color: "border-slate-200 bg-white",
      headerBg: "bg-[#1a3a52]",
      featured: false,
      features: [
        "Monthly legal health check",
        "2 partner consultations / month",
        "Up to 3 contract reviews / month",
        "Basic employment contract templates",
        "Email legal advisory support",
        "Regulatory updates & alerts",
        "Government liaison (basic)",
      ],
      notIncluded: [
        "Court representation",
        "Tax advisory",
        "International matters",
      ],
    },
    {
      name: "Professional",
      nameAr: "المهنية",
      price: "AED 5,500",
      period: "/ month",
      tagline: "For growing businesses",
      icon: Building2,
      color: "border-[#C9A84C] bg-white",
      headerBg: "bg-gradient-to-br from-[#C9A84C] to-[#b8922e]",
      featured: true,
      features: [
        "Everything in Essential",
        "Unlimited partner consultations",
        "Unlimited contract drafting & review",
        "Full HR compliance advisory",
        "Corporate tax guidance (UAE CT)",
        "Labour dispute & tribunal support",
        "Priority 24-hour response",
        "VIP government liaison & visa processing",
        "Monthly legal strategy session",
      ],
      notIncluded: [
        "Full international arbitration",
      ],
    },
    {
      name: "Enterprise",
      nameAr: "المؤسسية",
      price: "Custom",
      period: "pricing",
      tagline: "For corporations & multinationals",
      icon: Globe,
      color: "border-slate-200 bg-white",
      headerBg: "bg-[#0f1f2e]",
      featured: false,
      features: [
        "Everything in Professional",
        "Dedicated senior partner assignment",
        "Full litigation & court representation",
        "International arbitration & cross-border",
        "M&A advisory & due diligence",
        "Bespoke corporate governance framework",
        "On-site visits (UAE & Egypt)",
        "Multi-entity / group advisory",
        "Custom SLA & reporting",
      ],
      notIncluded: [],
    },
  ];

  const oneTimeServices = [
    {
      icon: Building2,
      service: "Company Formation — Mainland",
      description: "Full UAE mainland company setup including DED licensing, MOA drafting, and government registration.",
      from: "AED 4,500",
    },
    {
      icon: Building2,
      service: "Free Zone Company Setup",
      description: "End-to-end establishment in any UAE free zone with licensing, share certificates, and bank account facilitation.",
      from: "AED 6,000",
    },
    {
      icon: FileText,
      service: "Contract Drafting",
      description: "Professional drafting of commercial, employment, or service agreements tailored to your jurisdiction.",
      from: "AED 1,800",
    },
    {
      icon: FileText,
      service: "Contract Review & Advisory",
      description: "Comprehensive legal review of existing contracts with risk analysis and redline suggestions.",
      from: "AED 900",
    },
    {
      icon: Scale,
      service: "Commercial Litigation (Retainer)",
      description: "Full court representation in UAE commercial, civil, or labour disputes — from filing through enforcement.",
      from: "AED 8,000",
    },
    {
      icon: Briefcase,
      service: "Corporate Tax Registration & Filing",
      description: "UAE Corporate Tax registration, return preparation, and compliance advisory for the current fiscal year.",
      from: "AED 3,500",
    },
    {
      icon: Users,
      service: "HR Compliance Audit",
      description: "Full workforce regulatory audit covering employment contracts, policies, and Labour Law alignment.",
      from: "AED 4,000",
    },
    {
      icon: Globe,
      service: "International Legal Opinion",
      description: "Formal legal opinion on cross-border matters, foreign investment, or multi-jurisdictional transactions.",
      from: "AED 5,000",
    },
  ];

  const faqs = [
    {
      q: "Are the monthly retainer fees inclusive of VAT?",
      a: "All fees listed are exclusive of 5% UAE VAT, which will be applied to invoices as applicable under UAE tax law.",
    },
    {
      q: "How do I make payment?",
      a: "We accept bank transfer (UAE & international), cheque, and cash payments at our Ajman office. Simply contact us via WhatsApp or email to receive an invoice and payment details.",
    },
    {
      q: "Can I start with a one-time service before committing to a retainer?",
      a: "Absolutely. Many clients begin with a single matter and transition to a retainer once they experience the value of ongoing senior partner access.",
    },
    {
      q: "Is there a minimum contract period for retainers?",
      a: "Our standard retainer term is 3 months. Annual engagements receive a 10% discount. Month-to-month arrangements are available at a slight premium.",
    },
    {
      q: "Do you work with clients outside the UAE?",
      a: "Yes — we serve clients across the UAE, Egypt, and internationally. Remote consultations are conducted via video call, and documents can be handled electronically with legal validity.",
    },
    {
      q: "Can fees be negotiated for complex or long-term matters?",
      a: "Yes. Enterprise and long-term engagements are always priced on a bespoke basis following an initial consultation. We are committed to transparent, fair, and commercially appropriate fee structures.",
    },
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
          <div className="nexus-tag mb-6 mx-auto w-fit">Transparent Pricing</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-2">Legal Fees & Packages</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Competitive, transparent pricing for premium legal counsel. All fees are commensurate with UAE market standards and reflective of senior partner involvement.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: Shield, text: "No Hidden Fees" },
              { icon: Star, text: "Senior Partner Delivery" },
              { icon: Check, text: "Transparent Invoicing" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-300 text-sm">
                <Icon className="w-4 h-4 text-[#C9A84C]" />
                {text}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 0C1200 30 240 30 0 0L0 40Z" fill="white"/></svg>
        </div>
      </section>

      {/* Monthly Retainers */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="nexus-tag mb-4 mx-auto w-fit">Retainer Plans</div>
            <h2 className="nexus-section-title mt-4">Monthly Legal Retainers</h2>
            <p className="nexus-section-subtitle mx-auto text-center">
              Ongoing senior partner access and proactive legal support tailored to your business stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {retainerPlans.map((plan) => {
              const Icon = plan.icon;
              const whatsappUrl = plan.price === "Custom"
                ? WA
                : waLink(`${plan.name} Retainer`, `${plan.price} ${plan.period}`);

              return (
                <div key={plan.name} className={`pricing-card border-2 ${plan.featured ? "featured" : "border-slate-100"} relative`}>
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="shimmer-badge bg-[#C9A84C] text-[#0f1f2e] text-xs font-bold px-5 py-1.5 rounded-full tracking-widest uppercase">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className={`${plan.headerBg} p-7 text-white`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg leading-none">{plan.name}</h3>
                        <p className="text-white/60 text-xs">{plan.tagline}</p>
                      </div>
                    </div>
                    <div className="flex items-end gap-2 mt-2">
                      <span className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {plan.price}
                      </span>
                      <span className="text-white/70 text-sm mb-1">{plan.period}</span>
                    </div>
                    {plan.price !== "Custom" && (
                      <p className="text-white/50 text-xs mt-1">+5% VAT · excl. court fees</p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="p-7">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <Check className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{f}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm opacity-45">
                          <span className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center text-slate-400 font-bold">–</span>
                          <span className="text-slate-400 line-through">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${
                        plan.featured
                          ? "bg-[#C9A84C] text-[#0f1f2e] hover:bg-[#b8922e]"
                          : "bg-[#1a3a52] text-white hover:bg-[#0f1f2e]"
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      {plan.price === "Custom" ? "Request Custom Quote" : "Get Started via WhatsApp"}
                    </a>

                    <p className="text-center text-xs text-slate-400 mt-3">
                      Instant response · No commitment required
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm">
              Annual retainers receive a <span className="text-[#C9A84C] font-semibold">10% discount</span>. All retainer fees are billed monthly in advance.
            </p>
          </div>
        </div>
      </section>

      {/* One-Time Services */}
      <section className="nexus-pattern-bg py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="nexus-tag mb-4 mx-auto w-fit">À la Carte</div>
            <h2 className="nexus-section-title mt-4">One-Time Services</h2>
            <p className="nexus-section-subtitle mx-auto text-center">
              Individual legal services billed per engagement. All prices are starting rates — final fees confirmed at consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {oneTimeServices.map((svc) => {
              const Icon = svc.icon;
              const url = waLink(svc.service, svc.from);
              return (
                <div
                  key={svc.service}
                  className="bg-white border border-slate-100 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1a3a52] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className="font-bold text-[#1a3a52] text-base leading-tight">{svc.service}</h3>
                      <div className="flex-shrink-0 text-right">
                        <p className="text-xs text-slate-400 leading-none mb-0.5">From</p>
                        <p className="font-bold text-[#C9A84C] text-lg leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {svc.from}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm mb-3 leading-relaxed">{svc.description}</p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#1a3a52] hover:text-[#C9A84C] text-sm font-semibold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      Enquire via WhatsApp
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1a3a52] mb-2">How to Pay</h2>
            <p className="text-slate-500 text-sm">Simple, flexible payment options to suit your preference</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                emoji: "🏦",
                title: "Bank Transfer",
                description: "UAE & international wire transfers accepted. IBAN details provided with invoice.",
              },
              {
                emoji: "💬",
                title: "WhatsApp Booking",
                description: "Select your package above to send a pre-filled WhatsApp enquiry. We'll confirm and invoice within 2 hours.",
              },
              {
                emoji: "🏢",
                title: "In-Person at Office",
                description: "Pay by cash or cheque at our Falcon Tower, Ajman office during business hours.",
              },
            ].map(({ emoji, title, description }) => (
              <div key={title} className="text-center p-6 rounded-xl border border-slate-100 bg-[#FAF8F3]">
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="font-bold text-[#1a3a52] mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="tel:+971585592355"
              className="inline-flex items-center gap-2 text-[#1a3a52] hover:text-[#C9A84C] transition-colors font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              Questions about payment? Call +971 585 592 355
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="nexus-pattern-bg py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="nexus-tag mb-4 mx-auto w-fit">FAQ</div>
            <h2 className="nexus-section-title mt-4">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-100 rounded-xl p-6 hover:shadow-sm transition-shadow">
                <h3 className="font-bold text-[#1a3a52] mb-3 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#C9A84C] flex-shrink-0 flex items-center justify-center mt-0.5">
                    <span className="text-[#0f1f2e] text-xs font-black">?</span>
                  </span>
                  {q}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed pl-8">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Contact us now via WhatsApp for an instant response, or call to discuss the right package for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1da851] transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: Chat Now
            </a>
            <a
              href="tel:+971585592355"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-sm"
            >
              <Phone className="w-4 h-4" />
              +971 585 592 355
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
