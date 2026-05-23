import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
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
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Thank you! We'll be in touch shortly.");
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+971 585 592 355",
      link: "tel:+971585592355",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/971585592355",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@nexusaxisconsultants.com",
      link: "mailto:info@nexusaxisconsultants.com",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Contact Info Cards */}
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  key={idx}
                  href={info.link}
                  className="nexus-card flex flex-col items-center text-center hover:border-[#D4AF37] group"
                >
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <Icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-2">{info.title}</h3>
                  <p className="text-slate-600 hover:text-[#D4AF37] transition-colors">{info.value}</p>
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <div className="nexus-accent-line"></div>
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">Send us a Message</h2>
                <p className="text-slate-600">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1a3a52] mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a3a52] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a3a52] mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-colors"
                      placeholder="+971 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a3a52] mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a3a52] mb-2">Service Interest *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="litigation">Commercial Litigation</option>
                    <option value="corporate">Corporate Tax Strategy</option>
                    <option value="hr">HR Compliance</option>
                    <option value="business">Business Setup</option>
                    <option value="advisory">Legal Advisory</option>
                    <option value="international">International Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a3a52] mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full nexus-button-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <div className="mb-8">
                <div className="nexus-accent-line"></div>
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">Office Locations</h2>
                <p className="text-slate-600">
                  Visit us at either of our offices or connect with us remotely.
                </p>
              </div>

              <div className="space-y-8">
                {/* UAE Office */}
                <div className="nexus-card">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">UAE Office</h3>
                      <p className="text-slate-600 mb-4">
                        Falcon Tower 1409<br />
                        Ajman, United Arab Emirates
                      </p>
                      <div className="space-y-2">
                        <a
                          href="tel:+971585592355"
                          className="block text-[#1a3a52] hover:text-[#D4AF37] transition-colors font-semibold"
                        >
                          +971 585 592 355
                        </a>
                        <a
                          href="mailto:info@nexusaxisconsultants.com"
                          className="block text-[#1a3a52] hover:text-[#D4AF37] transition-colors font-semibold"
                        >
                          info@nexusaxisconsultants.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Egypt Office */}
                <div className="nexus-card">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Egypt Office</h3>
                      <p className="text-slate-600 mb-4">
                        753 St AlTahrir Bldg, Nasr City<br />
                        Cairo, Egypt
                      </p>
                      <div className="space-y-2">
                        <a
                          href="tel:+971585592355"
                          className="block text-[#1a3a52] hover:text-[#D4AF37] transition-colors font-semibold"
                        >
                          +971 585 592 355
                        </a>
                        <a
                          href="mailto:legal@nexusaxisconsultants.com"
                          className="block text-[#1a3a52] hover:text-[#D4AF37] transition-colors font-semibold"
                        >
                          legal@nexusaxisconsultants.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-[#D4AF37]/10 rounded-lg p-6 border border-[#D4AF37]/20">
                  <h3 className="font-bold text-[#1a3a52] mb-4">Business Hours</h3>
                  <div className="space-y-2 text-slate-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-sm mt-4">
                      Available for urgent consultations outside business hours via WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prefer to Call?</h2>
          <p className="text-lg text-slate-200 mb-8">
            Speak directly with our team for immediate assistance
          </p>
          <a
            href="tel:+971585592355"
            className="bg-[#D4AF37] text-[#1a3a52] px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors inline-block"
          >
            Call Now: +971 585 592 355
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
