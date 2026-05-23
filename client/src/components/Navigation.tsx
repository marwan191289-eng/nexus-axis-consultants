import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-[#1a3a52] rounded-lg flex items-center justify-center">
                <span className="text-[#D4AF37] font-bold text-xl">N</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-bold text-[#1a3a52] leading-none">
                  NEXUS AXIS
                </span>
                <span className="text-xs font-semibold text-[#D4AF37] tracking-wider">
                  CONSULTANTS
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-sm font-semibold text-slate-700 hover:text-[#D4AF37] transition-colors duration-300">
                  {link.label}
                </a>
              </Link>
            ))}
            <a
              href="tel:+971585592355"
              className="bg-[#D4AF37] text-[#1a3a52] px-6 py-2 rounded-lg font-semibold hover:bg-[#1a3a52] hover:text-[#D4AF37] transition-all duration-300"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#1a3a52]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1a3a52]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className="block px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#D4AF37] hover:bg-slate-50 rounded transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <a
                href="tel:+971585592355"
                className="mx-4 bg-[#D4AF37] text-[#1a3a52] px-4 py-2 rounded-lg font-semibold text-center hover:bg-[#1a3a52] hover:text-[#D4AF37] transition-all"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
