import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a3a52] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <span className="text-[#1a3a52] font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">NEXUS AXIS</h3>
                <p className="text-xs text-[#D4AF37]">CONSULTANTS</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Strategic Legal & Corporate Consultants providing premium advisory services across UAE and Egypt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-slate-300 hover:text-[#D4AF37] transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-slate-300 hover:text-[#D4AF37] transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a className="text-slate-300 hover:text-[#D4AF37] transition-colors">Team</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-slate-300 hover:text-[#D4AF37] transition-colors">About</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services#litigation" className="text-slate-300 hover:text-[#D4AF37] transition-colors text-sm">
                  Commercial Litigation
                </a>
              </li>
              <li>
                <a href="/services#corporate" className="text-slate-300 hover:text-[#D4AF37] transition-colors text-sm">
                  Corporate Tax Strategy
                </a>
              </li>
              <li>
                <a href="/services#hr" className="text-slate-300 hover:text-[#D4AF37] transition-colors text-sm">
                  HR Compliance
                </a>
              </li>
              <li>
                <a href="/services#business" className="text-slate-300 hover:text-[#D4AF37] transition-colors text-sm">
                  Business Setup
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-slate-400 uppercase">Phone</p>
                  <a href="tel:+971585592355" className="text-slate-300 hover:text-[#D4AF37] transition-colors">
                    +971 585 592 355
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-slate-400 uppercase">WhatsApp</p>
                  <a href="https://wa.me/971585592355" className="text-slate-300 hover:text-[#D4AF37] transition-colors">
                    Chat with us
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-slate-400 uppercase">Email</p>
                  <a href="mailto:info@nexusaxisconsultants.com" className="text-slate-300 hover:text-[#D4AF37] transition-colors text-sm">
                    info@nexusaxisconsultants.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-12"></div>

        {/* Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
            <div>
              <h5 className="font-bold text-[#D4AF37] mb-2">UAE Office</h5>
              <p className="text-slate-300 text-sm">
                Falcon Tower 1409<br />
                Ajman, UAE
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
            <div>
              <h5 className="font-bold text-[#D4AF37] mb-2">Egypt Office</h5>
              <p className="text-slate-300 text-sm">
                753 St AlTahrir Bldg, Nasr City<br />
                Cairo, Egypt
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Nexus Axis Consultants. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-[#D4AF37] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-[#D4AF37] transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-[#D4AF37] transition-colors text-sm">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
