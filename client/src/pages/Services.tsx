import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      id: "litigation",
      title: "Commercial Litigation",
      description: "Expert legal representation in commercial, civil, labor, and real estate disputes with proven track record in enforcement, appeals, and cassation cases.",
      benefits: [
        "Specialized litigation team with 15+ years experience",
        "Representation in all UAE courts and tribunals",
        "Strategic case management and negotiation",
        "Enforcement and appeal expertise",
        "Confidential and efficient dispute resolution",
      ],
    },
    {
      id: "corporate",
      title: "Corporate Tax Strategy",
      description: "Strategic tax planning, optimization, and compliance services for multinational corporations and complex business structures.",
      benefits: [
        "Tax efficiency planning and structuring",
        "Corporate tax compliance and filings",
        "Transfer pricing advisory",
        "Tax dispute resolution",
        "International tax planning",
      ],
    },
    {
      id: "hr",
      title: "HR Compliance & Advisory",
      description: "Comprehensive human resources consultancy ensuring full compliance with UAE and Egyptian labor laws and best practices.",
      benefits: [
        "Employment contract drafting and review",
        "Labor law compliance audits",
        "Workforce planning and optimization",
        "Employee relations advisory",
        "Government liaison services",
      ],
    },
    {
      id: "business",
      title: "Business Setup & Licensing",
      description: "End-to-end business establishment services with expedited government visa and licensing processes through direct VIP channels.",
      benefits: [
        "Company formation and registration",
        "Visa and licensing expedited processing",
        "Government liaison and coordination",
        "Regulatory compliance setup",
        "Business infrastructure establishment",
      ],
    },
    {
      id: "advisory",
      title: "Legal & Corporate Advisory",
      description: "Strategic legal counsel for corporate governance, contracts, regulatory compliance, and business operations.",
      benefits: [
        "Corporate governance advisory",
        "Contract drafting and negotiation",
        "Regulatory compliance consulting",
        "Risk assessment and mitigation",
        "Confidential business advisory",
      ],
    },
    {
      id: "international",
      title: "International Legal Services",
      description: "Cross-border legal solutions and international business advisory services for global operations.",
      benefits: [
        "International contract management",
        "Cross-border transaction advisory",
        "Multi-jurisdictional compliance",
        "International dispute resolution",
        "Global business expansion support",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Comprehensive legal and corporate solutions designed to address your unique business challenges
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((service, idx) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="mb-4">
                    <div className="nexus-accent-line"></div>
                  </div>
                  <h2 className="text-4xl font-bold text-[#1a3a52] mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit, bidx) => (
                      <div key={bidx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                        <span className="text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="nexus-button-primary inline-block"
                  >
                    Learn More
                  </a>
                </div>

                {/* Visual */}
                <div className={`bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b] rounded-lg p-12 text-white flex items-center justify-center min-h-96 ${
                  idx % 2 === 1 ? "lg:col-start-1" : ""
                }`}>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[#D4AF37] mb-4 opacity-20">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="nexus-accent-line mx-auto mb-4"></div>
            <h2 className="text-4xl font-bold text-[#1a3a52] mb-4">Why Choose Nexus Axis?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine legal expertise with strategic business acumen to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "15+ years of combined experience in legal and corporate advisory across UAE and Egypt",
              },
              {
                title: "Client-Focused",
                description: "Personalized solutions tailored to your specific business needs and objectives",
              },
              {
                title: "Proven Track Record",
                description: "98% success rate with 500+ satisfied clients across multiple industries",
              },
              {
                title: "Confidentiality",
                description: "Strict NDAs and advanced protocols protecting your sensitive information",
              },
              {
                title: "Efficiency",
                description: "Expedited processes through direct VIP channels with government agencies",
              },
              {
                title: "Global Reach",
                description: "International expertise with local market knowledge in UAE and Egypt",
              },
            ].map((item, idx) => (
              <div key={idx} className="nexus-card">
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-slate-200 mb-8">
            Contact our team for a confidential consultation about your specific needs
          </p>
          <a
            href="/contact"
            className="bg-[#D4AF37] text-[#1a3a52] px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors inline-block"
          >
            Schedule Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
