import { Mail, MapPin, Phone, MessageCircle, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1f2e] text-white">
      {/* Top Gold Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 flex-shrink-0">
                <rect width="44" height="44" rx="8" fill="#C9A84C"/>
                <path d="M9 8.5h6.2L28.8 26.3V8.5H35V35.5h-6.2L15.2 17.7V35.5H9V8.5z" fill="#0f1f2e"/>
              </svg>
              <div>
                <div className="font-bold text-base tracking-wide text-white leading-none">NEXUS AXIS</div>
                <div className="text-[10px] font-semibold text-[#C9A84C] tracking-[0.2em] leading-none mt-0.5">CONSULTANTS</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Premier legal and corporate advisory firm bridging legal excellence with strategic business growth across UAE and Egypt since 2009.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "https://linkedin.com/company/nexus-axis-consultants", label: "LinkedIn" },
                { icon: Facebook, href: "https://facebook.com/nexusaxisconsultants", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com/nexusaxisconsultants", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-[#C9A84C] tracking-widest uppercase">Navigate</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/team", label: "Our Team" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="flex items-center gap-2 text-slate-400 hover:text-[#C9A84C] transition-colors text-sm group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-[#C9A84C] tracking-widest uppercase">Practice Areas</h4>
            <ul className="space-y-3">
              {[
                { href: "/services#litigation", label: "Commercial Litigation" },
                { href: "/services#corporate", label: "Corporate Tax Strategy" },
                { href: "/services#hr", label: "HR Compliance" },
                { href: "/services#business", label: "Business Setup" },
                { href: "/services#advisory", label: "Legal Advisory" },
                { href: "/services#international", label: "International Law" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex items-center gap-2 text-slate-400 hover:text-[#C9A84C] transition-colors text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-5 text-[#C9A84C] tracking-widest uppercase">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:+971585592355"
                className="flex items-start gap-3 group"
              >
                <Phone className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-slate-300 text-sm group-hover:text-[#C9A84C] transition-colors">+971 585 592 355</p>
                </div>
              </a>
              <a
                href="https://wa.me/message/BSPKDIEB7H22H1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="text-slate-300 text-sm group-hover:text-[#C9A84C] transition-colors">Chat Directly</p>
                </div>
              </a>
              <a
                href="mailto:info@nexusaxisconsultants.com"
                className="flex items-start gap-3 group"
              >
                <Mail className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">General</p>
                  <p className="text-slate-300 text-sm group-hover:text-[#C9A84C] transition-colors break-all">info@nexusaxisconsultants.com</p>
                </div>
              </a>
              <a
                href="mailto:legal@nexusaxisconsultants.com"
                className="flex items-start gap-3 group"
              >
                <Mail className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Legal</p>
                  <p className="text-slate-300 text-sm group-hover:text-[#C9A84C] transition-colors break-all">legal@nexusaxisconsultants.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-10" />

        {/* Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-[#C9A84C]" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm mb-1">UAE — Ajman Office</h5>
              <p className="text-slate-400 text-sm">Falcon Tower, Office 1409</p>
              <p className="text-slate-400 text-sm">Ajman, United Arab Emirates</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-[#C9A84C]" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm mb-1">Egypt — Cairo Office</h5>
              <p className="text-slate-400 text-sm">753 St AlTahrir Building, Nasr City</p>
              <p className="text-slate-400 text-sm">Cairo, Egypt</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Nexus Axis Consultants. All rights reserved.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <a href="#" className="text-slate-500 hover:text-[#C9A84C] transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-[#C9A84C] transition-colors text-xs">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-[#C9A84C] transition-colors text-xs">Legal Disclaimer</a>
            <a href="#" className="text-slate-500 hover:text-[#C9A84C] transition-colors text-xs">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
