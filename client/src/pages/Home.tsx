import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Scale, Briefcase, Users, Target, Shield, Globe, CheckCircle, Award, Star, MessageCircle } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Scale,
      title: "Commercial Litigation",
      description: "Expert representation in commercial, civil, labour, and real estate disputes with proven success across all UAE courts and appellate tribunals.",
    },
    {
      icon: Briefcase,
      title: "Corporate Tax Strategy",
      description: "Strategic tax planning, optimisation, and compliance for multinational corporations navigating the UAE's evolving tax framework.",
    },
    {
      icon: Users,
      title: "HR Compliance",
      description: "Comprehensive HR consultancy ensuring full compliance with UAE and Egyptian labour laws, employment contracts, and workforce regulations.",
    },
    {
      icon: Target,
      title: "Business Setup",
      description: "End-to-end business establishment with expedited government visa processing and VIP licensing channels across the UAE.",
    },
    {
      icon: Shield,
      title: "Legal Advisory",
      description: "Strategic legal counsel on corporate governance, risk management, contract negotiation, and regulatory compliance.",
    },
    {
      icon: Globe,
      title: "International Law",
      description: "Cross-border legal solutions, international arbitration, and multi-jurisdictional advisory for global business operations.",
    },
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "15+", label: "Years of Excellence" },
    { number: "98%", label: "Success Rate" },
    { number: "2", label: "International Offices" },
  ];

  const whyUs = [
    { title: "Senior-Led Counsel", description: "Every matter is personally handled by senior partners — not delegated to junior associates." },
    { title: "Dual Jurisdiction Expertise", description: "Deep expertise in both UAE and Egyptian legal frameworks from a single, unified firm." },
    { title: "VIP Government Channels", description: "Expedited processing through direct relationships with UAE government agencies." },
    { title: "Strict Confidentiality", description: "Attorney-client privilege rigorously observed with advanced NDA protocols on every engagement." },
    { title: "Bilingual Service", description: "Full services delivered fluently in English and Arabic for seamless international client interaction." },
    { title: "Proven Track Record", description: "98% success rate across litigation, compliance, and advisory engagements over 15 years." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1929] via-[#1a3a52] to-[#2d5a7b]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663651329132/3ceNnuBJtZQLa2Jenp9arD/nexus-hero-bg-HsheNXAtRBRFDvLAnfx3AU.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Subtle geometric overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-7 fade-in-up">
              {/* Badge */}
              <div className="nexus-hero-badge w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse flex-shrink-0" />
                <span className="text-[#C9A84C] font-semibold text-xs tracking-widest uppercase">
                  UAE & Egypt · Established 2009
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
                Strategic Legal &{" "}
                <span className="block" style={{ color: "#C9A84C" }}>Corporate Excellence</span>
              </h1>

              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Nexus Axis Consultants is your premier partner for legal advisory, corporate strategy, and business solutions. We bridge ambition with governance — delivering exceptional results for clients across the UAE and Egypt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="nexus-button-primary inline-flex items-center justify-center gap-2 group">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/message/BSPKDIEB7H22H1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border-2 border-[#C9A84C]/50 text-white font-semibold text-sm hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-6">
                {[
                  "Commercial Litigation",
                  "Corporate Tax",
                  "Business Setup",
                  "International Law",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Logo / Visual */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#C9A84C]/5 blur-3xl scale-150" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663651329132/3ceNnuBJtZQLa2Jenp9arD/nexus-logo-RuxhyuZPJB7Sug56RT26Rw.webp"
                  alt="Nexus Axis Consultants"
                  className="relative w-full max-w-sm mx-auto drop-shadow-2xl opacity-90"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 0C1200 45 240 45 0 0L0 60Z" fill="#FAF8F3"/>
          </svg>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="nexus-pattern-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#C9A84C]/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="nexus-stat-card">
                <p className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.number}
                </p>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="nexus-tag mb-4">Practice Areas</div>
            <h2 className="nexus-section-title mt-4">Our Legal Services</h2>
            <p className="nexus-section-subtitle mx-auto text-center">
              Comprehensive legal and corporate solutions, meticulously crafted to address your most complex business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="nexus-card group">
                  <div className="nexus-service-icon">
                    <Icon className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="nexus-button-primary inline-flex items-center gap-2 group">
              View All Practice Areas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Strip ── */}
      <section className="bg-gradient-to-r from-[#0f1f2e] to-[#1a3a52] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="nexus-accent-line mb-2" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Trusted Legal Counsel<br />
                <span className="text-[#C9A84C]">Across Two Nations</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Founded in 2009 by Marwan Negm, Nexus Axis Consultants has grown from a boutique legal practice into one of the region's most respected legal and corporate advisory firms — with offices in Ajman, UAE, and Nasr City, Cairo.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                We serve startups, SMEs, and multinational corporations with the same unwavering commitment: legal precision married to strategic business acumen.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:gap-3 transition-all">
                Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, title: "Founded 2009", sub: "15+ years of practice" },
                { icon: Scale, title: "Dual Jurisdiction", sub: "UAE & Egyptian law" },
                { icon: Shield, title: "Full Confidentiality", sub: "Attorney-client privilege" },
                { icon: Star, title: "98% Success Rate", sub: "Proven track record" },
              ].map(({ icon: Icon, title, sub }, idx) => (
                <div key={idx} className="bg-white/5 border border-white/8 rounded-xl p-6">
                  <Icon className="w-6 h-6 text-[#C9A84C] mb-3" />
                  <p className="font-bold text-sm mb-1">{title}</p>
                  <p className="text-slate-400 text-xs">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="nexus-pattern-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="nexus-tag mb-4">Why Nexus Axis</div>
            <h2 className="nexus-section-title mt-4">The Nexus Axis Difference</h2>
            <p className="nexus-section-subtitle mx-auto text-center">
              What distinguishes our practice from other legal advisory firms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-7 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
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

      {/* ── CTA ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a52] to-[#0f1f2e]" />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">Ready to Begin?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transform Your Legal Strategy Today
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact Nexus Axis Consultants for a confidential consultation. Our senior partners are ready to assess your situation and chart the optimal legal and corporate path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0f1f2e] px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors text-sm">
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+971585592355"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-sm"
            >
              +971 585 592 355
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
