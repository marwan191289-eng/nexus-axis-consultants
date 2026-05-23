import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Nexus Axis Consultants</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Bridging legal excellence with strategic business growth since 2009
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="nexus-accent-line mb-4"></div>
              <h2 className="text-4xl font-bold text-[#1a3a52] mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Founded in 2009, Nexus Axis Consultants emerged from a vision to provide premium legal and corporate advisory services that bridge the gap between legal expertise and strategic business growth. What began as a boutique legal practice has evolved into a comprehensive consulting firm serving clients across UAE and Egypt.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Our name reflects our core philosophy: "Nexus" represents the intersection of legal precision and business strategy, while "Axis" symbolizes the central pivot around which successful enterprises rotate. We serve as that critical nexus for our clients.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, with offices in Ajman (UAE) and Cairo (Egypt), we proudly serve over 500 clients ranging from startups to multinational corporations, delivering consistent excellence across commercial litigation, corporate tax strategy, HR compliance, and business solutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b] rounded-lg p-12 text-white">
              <h3 className="text-2xl font-bold mb-8">Quick Facts</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">15+ Years</p>
                    <p className="text-slate-300 text-sm">of combined legal expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">500+ Clients</p>
                    <p className="text-slate-300 text-sm">across multiple industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">98% Success Rate</p>
                    <p className="text-slate-300 text-sm">in case outcomes and client satisfaction</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">2 International Offices</p>
                    <p className="text-slate-300 text-sm">UAE and Egypt presence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="nexus-card">
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide exceptional legal and corporate advisory services that empower businesses to achieve their strategic objectives with confidence, integrity, and compliance. We are committed to being the trusted nexus between legal excellence and business success for our clients across the Middle East.
              </p>
            </div>
            <div className="nexus-card">
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be recognized as the premier legal and corporate consulting firm in the UAE and Egypt, known for our unwavering commitment to excellence, innovation, and client success. We envision a future where businesses confidently navigate complex legal landscapes with our strategic guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="nexus-accent-line mx-auto mb-4"></div>
            <h2 className="text-4xl font-bold text-[#1a3a52] mb-4">Our Offices</h2>
            <p className="text-lg text-slate-600">Serving clients across UAE and Egypt</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* UAE Office */}
            <div className="nexus-card">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="text-2xl font-bold text-[#1a3a52]">UAE Office</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold">Address</p>
                  <p className="text-lg text-slate-700 font-semibold">
                    Falcon Tower 1409<br />
                    Ajman, United Arab Emirates
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold">Contact</p>
                  <p className="text-slate-700">
                    <a href="tel:+971585592355" className="hover:text-[#D4AF37] transition-colors">
                      +971 585 592 355
                    </a>
                  </p>
                  <p className="text-slate-700">
                    <a href="mailto:info@nexusaxisconsultants.com" className="hover:text-[#D4AF37] transition-colors">
                      info@nexusaxisconsultants.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Egypt Office */}
            <div className="nexus-card">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="text-2xl font-bold text-[#1a3a52]">Egypt Office</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold">Address</p>
                  <p className="text-lg text-slate-700 font-semibold">
                    753 St AlTahrir Bldg<br />
                    Nasr City, Cairo, Egypt
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold">Contact</p>
                  <p className="text-slate-700">
                    <a href="tel:+971585592355" className="hover:text-[#D4AF37] transition-colors">
                      +971 585 592 355
                    </a>
                  </p>
                  <p className="text-slate-700">
                    <a href="mailto:legal@nexusaxisconsultants.com" className="hover:text-[#D4AF37] transition-colors">
                      legal@nexusaxisconsultants.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Growing Client Base</h2>
          <p className="text-lg text-slate-200 mb-8">
            Experience the Nexus Axis difference in legal and corporate advisory
          </p>
          <a
            href="/contact"
            className="bg-[#D4AF37] text-[#1a3a52] px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
