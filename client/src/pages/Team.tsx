import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Marwan Negm",
      title: "Founder & Managing Partner",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663651329132/3ceNnuBJtZQLa2Jenp9arD/marwan-enhanced-PCbFtQKob2PvE9VcR75wRG.webp",
      bio: "Visionary legal strategist with 15+ years of experience in corporate law, commercial litigation, and international business advisory. Marwan founded Nexus Axis Consultants to bridge the gap between legal excellence and strategic business growth.",
      expertise: ["Corporate Law", "Commercial Litigation", "Business Strategy", "International Advisory"],
      email: "marwan@nexusaxisconsultants.com",
      phone: "+971 585 592 355",
    },
    {
      name: "Mohab Samy",
      title: "Partner - Legal Services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      bio: "Accomplished legal professional specializing in commercial litigation, labor law, and regulatory compliance. Mohab brings extensive courtroom experience and deep knowledge of UAE and Egyptian legal systems. His strategic approach has successfully resolved complex corporate disputes.",
      expertise: ["Commercial Litigation", "Labor Law", "Regulatory Compliance", "Dispute Resolution"],
      email: "mohab@nexusaxisconsultants.com",
      phone: "+971 585 592 355",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Leadership Team</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional legal and corporate solutions
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {team.map((member, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={idx % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="mb-4">
                    <div className="nexus-accent-line"></div>
                  </div>
                  <h2 className="text-4xl font-bold text-[#1a3a52] mb-2">{member.name}</h2>
                  <p className="text-xl text-[#D4AF37] font-semibold mb-4">{member.title}</p>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{member.bio}</p>

                  <div className="mb-8">
                    <h3 className="font-bold text-[#1a3a52] mb-3">Areas of Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp, eidx) => (
                        <span
                          key={eidx}
                          className="bg-[#D4AF37]/10 text-[#1a3a52] px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-[#1a3a52] hover:text-[#D4AF37] transition-colors font-semibold"
                    >
                      <Mail className="w-5 h-5" />
                      Email
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-[#1a3a52] hover:text-[#D4AF37] transition-colors font-semibold"
                    >
                      <Phone className="w-5 h-5" />
                      Call
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-[#1a3a52] hover:text-[#D4AF37] transition-colors font-semibold"
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="nexus-accent-line mx-auto mb-4"></div>
            <h2 className="text-4xl font-bold text-[#1a3a52] mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "Commitment to the highest standards in every engagement and deliverable",
              },
              {
                title: "Integrity",
                description: "Unwavering ethical standards and transparent business practices",
              },
              {
                title: "Confidentiality",
                description: "Strict protection of client information and privileged communications",
              },
              {
                title: "Innovation",
                description: "Forward-thinking solutions adapted to evolving legal and business landscapes",
              },
            ].map((value, idx) => (
              <div key={idx} className="nexus-card">
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Work With Our Expert Team</h2>
          <p className="text-lg text-slate-200 mb-8">
            Schedule a consultation with our leadership to discuss your legal and corporate needs
          </p>
          <a
            href="/contact"
            className="bg-[#D4AF37] text-[#1a3a52] px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
