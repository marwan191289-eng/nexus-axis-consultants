import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MessageCircle, Award, BookOpen, Briefcase, Scale, Shield, Globe, Users, Target } from "lucide-react";

const marwanPhoto = "/marwan-negm.jpg";

export default function Team() {
  const leadership = [
    {
      name: "Marwan Negm",
      title: "Founder & Managing Partner",
      image: marwanPhoto,
      bio: [
        "Marwan Negm is the visionary Founder and Managing Partner of Nexus Axis Consultants — a firm he built from the ground up into one of the UAE and Egypt's most respected legal and corporate advisory practices.",
        "With over 15 years of distinguished experience spanning corporate law, commercial litigation, and international business advisory, Marwan has consistently delivered transformative legal solutions for clients ranging from ambitious startups to global multinationals. His strategic acumen and deep knowledge of both UAE and Egyptian legal frameworks make him uniquely positioned to navigate the complexities of cross-border transactions and multi-jurisdictional disputes.",
        "Known for his meticulous legal reasoning, his ability to distil complex legal matters into clear strategic direction, and his unwavering commitment to client success, Marwan has earned a reputation as a trusted counsellor to business leaders, entrepreneurs, and executives across the Gulf region and North Africa.",
      ],
      expertise: [
        "Corporate Law & Governance",
        "Commercial Litigation",
        "International Business Advisory",
        "Business Setup & Licensing",
        "Mergers & Acquisitions",
        "Contract Negotiation",
      ],
      email: "info@nexusaxisconsultants.com",
      phone: "+971 585 592 355",
      whatsapp: "https://wa.me/message/BSPKDIEB7H22H1",
      credentials: [
        { icon: Award, text: "Founder, Nexus Axis Consultants (2009)" },
        { icon: Scale, text: "15+ Years Corporate & Litigation Practice" },
        { icon: Globe, text: "UAE & Egyptian Bar Qualified" },
        { icon: Briefcase, text: "500+ Successfully Managed Client Matters" },
      ],
    },
    {
      name: "Mohab Samy",
      title: "Partner — Legal Services",
      image: "/mohab-samy.png",
      bio: [
        "Mohab Samy is a Partner at Nexus Axis Consultants, leading the firm's legal services division with a distinguished career focused on commercial litigation, labour law, and regulatory compliance across the UAE and Egypt.",
        "A seasoned litigator and legal strategist, Mohab brings an exceptional command of UAE court procedure, arbitration processes, and employment regulation. He has successfully represented corporate clients in complex multi-party commercial disputes, labour tribunal proceedings, and enforcement actions before the UAE's federal and emirate-level courts. His methodical approach to case preparation and his deep familiarity with judicial temperament across jurisdictions have yielded a proven record of favourable outcomes.",
        "Mohab advises a diverse client base — from family-owned businesses to listed corporations — on dispute resolution strategy, employment contract structuring, workforce regulatory compliance, and the full spectrum of legal risk management. His counsel is characterised by analytical rigour, pragmatic judgement, and an absolute commitment to protecting client interests.",
      ],
      expertise: [
        "Commercial Litigation",
        "Labour & Employment Law",
        "Regulatory Compliance",
        "Dispute Resolution & Arbitration",
        "Corporate Legal Advisory",
        "Contract Law & Enforcement",
      ],
      email: "info@nexusaxisconsultants.com",
      phone: "+971 585 592 355",
      whatsapp: "https://wa.me/message/BSPKDIEB7H22H1",
      credentials: [
        { icon: Scale, text: "UAE Courts & Tribunals Specialist" },
        { icon: Users, text: "Labour Law & Employment Expert" },
        { icon: Shield, text: "Regulatory Compliance Advisor" },
        { icon: Target, text: "Dispute Resolution & Arbitration" },
      ],
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We hold ourselves to the highest professional standards in every brief, every filing, and every client interaction.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Unwavering ethical practice and absolute transparency form the foundation of every client relationship.",
    },
    {
      icon: BookOpen,
      title: "Confidentiality",
      description: "Attorney-client privilege is sacrosanct. Your information is protected by rigorous protocols and binding NDAs.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We bring forward-thinking, commercially aware legal solutions to complex and evolving challenges.",
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
          <div className="nexus-tag mb-6 mx-auto w-fit">Our Leadership</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-2">The Minds Behind Nexus Axis</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Senior legal professionals with a combined 25+ years of practice across the UAE, Egypt, and international jurisdictions.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 0C1200 30 240 30 0 0L0 40Z" fill="white"/></svg>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {leadership.map((member, idx) => (
              <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                {/* Photo */}
                <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative">
                    {/* Gold frame accent */}
                    <div className="absolute -top-4 -left-4 w-3/4 h-3/4 border border-[#C9A84C]/30 rounded-2xl" />
                    <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 border border-[#C9A84C]/15 rounded-2xl" />
                    <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${idx === 0 ? "photo-bg-premium" : "bg-gradient-to-br from-[#1a3a52] to-[#0f1f2e]"}`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full aspect-[4/5] object-cover object-top ${idx === 0 ? "photo-reveal" : ""}`}
                      />
                      {/* Overlay gradient at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#0a1929]/90 via-[#0a1929]/40 to-transparent" />
                      {/* Gold shimmer line at top */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <a
                          href={member.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1da851] transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp Direct
                        </a>
                      </div>
                    </div>
                    {/* Credentials sidebar */}
                    <div className="mt-4 grid grid-cols-1 gap-3">
                      {member.credentials.map(({ icon: Icon, text }, cidx) => (
                        <div key={cidx} className="flex items-center gap-3 bg-[#FAF8F3] border border-slate-100 rounded-lg px-4 py-3">
                          <Icon className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="nexus-accent-line mb-2" />
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-1">{member.name}</h2>
                  <p className="text-lg text-[#C9A84C] font-semibold mb-6">{member.title}</p>

                  <div className="space-y-4 mb-8">
                    {member.bio.map((para, pidx) => (
                      <p key={pidx} className="text-slate-600 leading-relaxed">{para}</p>
                    ))}
                  </div>

                  {/* Expertise */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-[#1a3a52] uppercase tracking-widest mb-4">Areas of Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp, eidx) => (
                        <span
                          key={eidx}
                          className="px-4 py-2 rounded-full text-sm font-semibold text-[#1a3a52] border border-[#C9A84C]/30 bg-[#C9A84C]/8"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row gap-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-[#1a3a52] hover:text-[#C9A84C] transition-colors font-semibold text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 text-[#1a3a52] hover:text-[#C9A84C] transition-colors font-semibold text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="nexus-pattern-bg py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="nexus-tag mb-4 mx-auto w-fit">Our Principles</div>
            <h2 className="nexus-section-title mt-4">Core Values</h2>
            <p className="nexus-section-subtitle mx-auto text-center">
              The principles that govern how we serve our clients and conduct our practice
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="nexus-card text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1a3a52] flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{value.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] text-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Work Directly with Our Partners</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            At Nexus Axis, senior partners personally handle your matter. Speak directly with Marwan or Mohab to discuss your legal and corporate needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0f1f2e] px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors text-sm"
            >
              Schedule Consultation
            </a>
            <a
              href="https://wa.me/message/BSPKDIEB7H22H1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
