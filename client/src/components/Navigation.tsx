import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Our Team" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md border-b border-slate-100 shadow-sm"
            : "bg-white border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
                <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <rect width="44" height="44" rx="8" fill="#1a3a52"/>
                    <path d="M9 8.5h6.2L28.8 26.3V8.5H35V35.5h-6.2L15.2 17.7V35.5H9V8.5z" fill="#C9A84C"/>
                  </svg>
                </div>
                <div className="hidden sm:flex flex-col leading-none">
                  <span className="text-base font-bold text-[#1a3a52] tracking-wide leading-none">
                    NEXUS AXIS
                  </span>
                  <span className="text-[10px] font-semibold text-[#C9A84C] tracking-[0.2em] leading-none mt-0.5">
                    CONSULTANTS
                  </span>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg ${
                    isActive(link.href)
                      ? "text-[#C9A84C]"
                      : "text-slate-600 hover:text-[#1a3a52]"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#C9A84C] rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/message/BSPKDIEB7H22H1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-[#1a3a52] hover:text-[#C9A84C] transition-colors px-3 py-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp
              </a>
              <a
                href="tel:+971585592355"
                className="flex items-center gap-2 bg-[#1a3a52] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0f1f2e] transition-all duration-200 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-[#1a3a52]" />
              ) : (
                <Menu className="w-5 h-5 text-[#1a3a52]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "text-[#C9A84C] bg-[#C9A84C]/8"
                      : "text-slate-600 hover:text-[#1a3a52] hover:bg-slate-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-3 pt-3 border-t border-slate-100">
                <a
                  href="https://wa.me/message/BSPKDIEB7H22H1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#C9A84C] text-[#1a3a52] rounded-lg text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  WhatsApp
                </a>
                <a
                  href="tel:+971585592355"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1a3a52] text-white rounded-lg text-sm font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/message/BSPKDIEB7H22H1"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white relative z-10">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
