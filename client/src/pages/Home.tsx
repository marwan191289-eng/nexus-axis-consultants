import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Scale, Briefcase, Users, Target, Shield, Globe } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Scale,
      title: "Commercial Litigation",
      description: "Expert representation in commercial, civil, labor, and real estate disputes with proven success in courts.",
    },
    {
      icon: Briefcase,
      title: "Corporate Tax Strategy",
      description: "Strategic tax planning and optimization for multinational corporations and complex business structures.",
    },
    {
      icon: Users,
      title: "HR Compliance",
      description: "Comprehensive HR consultancy ensuring full compliance with UAE and Egyptian labor laws.",
    },
    {
      icon: Target,
      title: "Business Setup",
      description: "End-to-end business establishment services with expedited government visa and licensing processes.",
    },
    {
      icon: Shield,
      title: "Legal Advisory",
      description: "Strategic legal counsel for corporate governance, contracts, and regulatory compliance.",
    },
    {
      icon: Globe,
      title: "International Law",
      description: "Cross-border legal solutions and international business advisory services.",
    },
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Success Rate" },
    { number: "2", label: "International Offices" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663651329132/3ceNnuBJtZQLa2Jenp9arD/nexus-hero-bg-HsheNXAtRBRFDvLAnfx3AU.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="fade-in-up">
              <div className="inline-flex items-center px-4 py-2 mb-6 border border-[#D4AF37]/40 rounded-full bg-[#D4AF37]/10">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></span>
                <span className="text-[#1a3a52] font-semibold text-sm">UAE & Egypt • International Expertise</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a3a52] mb-6 leading-tight">
                Strategic Legal &
                <span className="block text-[#D4AF37]">Corporate Excellence</span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Nexus Axis Consultants is your premier partner for legal advisory, corporate strategy, and business solutions. We bridge ambition with governance, delivering exceptional results across UAE and Egypt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <a className="nexus-button-primary inline-flex items-center justify-center gap-2 group">
                    Start Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Link>
                <a
                  href="https://wa.me/971585592355"
                  className="nexus-button-secondary inline-flex items-center justify-center gap-2"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:block">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663651329132/3ceNnuBJtZQLa2Jenp9arD/nexus-logo-RuxhyuZPJB7Sug56RT26Rw.webp"
                alt="Nexus Axis Logo"
                className="w-full max-w-md mx-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1a3a52] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">{stat.number}</p>
                <p className="text-slate-300 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="nexus-accent-line mx-auto"></div>
              <h2 className="nexus-section-title">Our Services</h2>
            </div>
            <p className="nexus-section-subtitle">
              Comprehensive legal and corporate solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="nexus-card group">
                  <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <a className="nexus-button-primary inline-flex items-center gap-2 group">
                View All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Contact our team today for a confidential consultation. Let's discuss how Nexus Axis Consultants can support your strategic objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971585592355"
              className="bg-[#D4AF37] text-[#1a3a52] px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors inline-flex items-center justify-center gap-2"
            >
              Call: +971 585 592 355
            </a>
            <a
              href="mailto:info@nexusaxisconsultants.com"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-[#1a3a52] transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
