import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Thank you. A senior partner will respond within 24 hours.");
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    } catch {
      toast.error("Failed to send. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickContact = [
    {
      icon: Phone,
      title: "Call Directly",
      value: "+971 585 592 355",
      sub: "Speak with our team",
      link: "tel:+971585592355",
      color: "bg-[#1a3a52]",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat Instantly",
      sub: "Direct partner access",
      link: "https://wa.me/message/BSPKDIEB7H22H1",
      color: "bg-[#25D366]",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@nexusaxisconsultants.com",
      sub: "General enquiries",
      link: "mailto:info@nexusaxisconsultants.com",
      color: "bg-[#C9A84C]",
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
          <div className="nexus-tag mb-6 mx-auto w-fit">Get in Touch</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-2">Contact Nexus Axis</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reach our senior partners directly. We respond to all enquiries within 24 hours — urgent matters addressed same day.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 0C1200 30 240 30 0 0L0 40Z" fill="white"/></svg>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickContact.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-0.5">{item.title}</p>
                    <p className="font-bold text-[#1a3a52] text-sm group-hover:text-[#C9A84C] transition-colors">{item.value}</p>
                    <p className="text-slate-400 text-xs">{item.sub}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <div className="nexus-accent-line mb-2" />
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-3">Send an Enquiry</h2>
                <p className="text-slate-500">
                  Complete the form below and a senior partner will respond personally within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1a3a52] mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all bg-slate-50 focus:bg-white text-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a3a52] mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all bg-slate-50 focus:bg-white text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a3a52] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all bg-slate-50 focus:bg-white text-sm"
                      placeholder="+971 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a3a52] mb-2">Company / Organisation</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all bg-slate-50 focus:bg-white text-sm"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a3a52] mb-2">Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all bg-slate-50 focus:bg-white text-sm"
                  >
                    <option value="">Select a practice area</option>
                    <option value="litigation">Commercial Litigation</option>
                    <option value="corporate">Corporate Tax Strategy</option>
                    <option value="hr">HR Compliance & Advisory</option>
                    <option value="business">Business Setup & Licensing</option>
                    <option value="advisory">Legal & Corporate Advisory</option>
                    <option value="international">International Legal Services</option>
                    <option value="other">Other / General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a3a52] mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all resize-none bg-slate-50 focus:bg-white text-sm"
                    placeholder="Please describe your legal matter or enquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full nexus-button-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-xs text-slate-400 text-center">
                  All communications are strictly confidential and protected by attorney-client privilege.
                </p>
              </form>
            </div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* UAE Office */}
              <div className="nexus-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#1a3a52] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#C9A84C] font-semibold tracking-widest uppercase">Primary</p>
                    <h3 className="font-bold text-[#1a3a52]">UAE — Ajman Office</h3>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-slate-600">Falcon Tower, Office 1409<br />Ajman, United Arab Emirates</p>
                  <a href="tel:+971585592355" className="flex items-center gap-2 text-[#1a3a52] hover:text-[#C9A84C] transition-colors font-semibold">
                    <Phone className="w-4 h-4" /> +971 585 592 355
                  </a>
                  <a href="mailto:info@nexusaxisconsultants.com" className="flex items-center gap-2 text-slate-500 hover:text-[#C9A84C] transition-colors break-all">
                    <Mail className="w-4 h-4 flex-shrink-0" /> info@nexusaxisconsultants.com
                  </a>
                  <a href="mailto:receiption@nexusaxisconsultants.com" className="flex items-center gap-2 text-slate-500 hover:text-[#C9A84C] transition-colors break-all">
                    <Mail className="w-4 h-4 flex-shrink-0" /> receiption@nexusaxisconsultants.com
                  </a>
                </div>
              </div>

              {/* Egypt Office */}
              <div className="nexus-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#1a3a52]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#C9A84C] font-semibold tracking-widest uppercase">Regional</p>
                    <h3 className="font-bold text-[#1a3a52]">Egypt — Cairo Office</h3>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-slate-600">753 St AlTahrir Building, Nasr City<br />Cairo, Egypt</p>
                  <a href="tel:+971585592355" className="flex items-center gap-2 text-[#1a3a52] hover:text-[#C9A84C] transition-colors font-semibold">
                    <Phone className="w-4 h-4" /> +971 585 592 355
                  </a>
                  <a href="mailto:legal@nexusaxisconsultants.com" className="flex items-center gap-2 text-slate-500 hover:text-[#C9A84C] transition-colors break-all">
                    <Mail className="w-4 h-4 flex-shrink-0" /> legal@nexusaxisconsultants.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[#FAF8F3] border border-[#C9A84C]/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#C9A84C]" />
                  <h3 className="font-bold text-[#1a3a52]">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="text-slate-500">{day}</span>
                      <span className="text-[#1a3a52] font-semibold">{hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                  Urgent matters handled outside business hours via WhatsApp.
                </p>
                <a
                  href="https://wa.me/message/BSPKDIEB7H22H1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#1da851] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Now
                </a>
              </div>

              {/* All Emails */}
              <div className="nexus-card">
                <h3 className="font-bold text-[#1a3a52] mb-4 text-sm">All Email Contacts</h3>
                <div className="space-y-3">
                  {[
                    { label: "General Enquiries", email: "info@nexusaxisconsultants.com" },
                    { label: "Legal Matters", email: "legal@nexusaxisconsultants.com" },
                    { label: "Reception / Admin", email: "receiption@nexusaxisconsultants.com" },
                  ].map(({ label, email }) => (
                    <a key={email} href={`mailto:${email}`} className="block group">
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{label}</p>
                      <p className="text-[#1a3a52] group-hover:text-[#C9A84C] transition-colors text-sm break-all">{email}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prefer to Speak Directly?</h2>
          <p className="text-slate-300 mb-8">Our senior partners are available to take your call during business hours.</p>
          <a
            href="tel:+971585592355"
            className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0f1f2e] px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors text-sm"
          >
            Call: +971 585 592 355
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
