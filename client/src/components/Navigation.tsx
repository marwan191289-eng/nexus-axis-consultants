import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const navLinks = [
    { href: "/",         label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing",  label: "Pricing" },
    { href: "/team",     label: "Our Team" },
    { href: "/about",    label: "About" },
    { href: "/contact",  label: "Contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <>
      <nav
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(10, 25, 41, 0.97)"
            : "#0a1929",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(201,168,76,0.18)",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.35)" : "none",
        }}
      >
        {/* Top accent line */}
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #C9A84C 30%, #E8D4A8 50%, #C9A84C 70%, transparent)", opacity: 0.7 }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[68px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              {/* Icon mark */}
              <div className="relative flex-shrink-0" style={{ width: 44, height: 44 }}>
                <img
                  src="/nexus-logo-mark.png"
                  alt="Nexus Axis"
                  className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-200"
                  style={{ filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))" }}
                />
              </div>

              {/* Word-mark */}
              <div className="hidden sm:flex flex-col leading-none">
                <span
                  className="font-bold tracking-[0.12em] uppercase"
                  style={{
                    fontSize: 15,
                    color: "#ffffff",
                    letterSpacing: "0.14em",
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: 1,
                  }}
                >
                  Nexus Axis
                </span>
                <span
                  className="tracking-[0.28em] uppercase mt-[3px]"
                  style={{
                    fontSize: 8.5,
                    color: "#C9A84C",
                    letterSpacing: "0.32em",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  Consultants
                </span>
                {/* Gold underline accent */}
                <div
                  style={{
                    height: 1,
                    background: "linear-gradient(90deg, #C9A84C, transparent)",
                    marginTop: 4,
                    width: "70%",
                    opacity: 0.6,
                  }}
                />
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-2 text-[13px] font-medium transition-all duration-200 rounded"
                  style={{
                    color: isActive(link.href) ? "#C9A84C" : "rgba(255,255,255,0.72)",
                    letterSpacing: "0.03em",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={e => { if (!isActive(link.href)) (e.target as HTMLElement).style.color = "#ffffff"; }}
                  onMouseLeave={e => { if (!isActive(link.href)) (e.target as HTMLElement).style.color = "rgba(255,255,255,0.72)"; }}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span
                      className="absolute bottom-0 left-3.5 right-3.5 rounded-full"
                      style={{ height: 1.5, background: "#C9A84C" }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* ── Desktop CTAs ── */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://wa.me/message/BSPKDIEB7H22H1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded transition-all duration-200"
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "'Inter', sans-serif",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.22)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>

              <a
                href="tel:+971585592355"
                className="flex items-center gap-2 px-5 py-2.5 rounded font-semibold transition-all duration-200"
                style={{
                  fontSize: 13,
                  background: "linear-gradient(135deg, #C9A84C, #B8922A)",
                  color: "#0a1929",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.03em",
                  boxShadow: "0 2px 12px rgba(201,168,76,0.35)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #E8D4A8, #C9A84C)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 18px rgba(201,168,76,0.5)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #C9A84C, #B8922A)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(201,168,76,0.35)";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
            </div>

            {/* ── Mobile toggle ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded transition-colors"
              style={{ color: "rgba(255,255,255,0.8)" }}
              aria-label="Toggle menu"
            >
              {isOpen
                ? <X className="w-5 h-5" />
                : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Nav ── */}
        {isOpen && (
          <div
            className="lg:hidden"
            style={{
              background: "#071220",
              borderTop: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center px-4 py-3 text-sm font-medium rounded transition-all duration-200"
                  style={{
                    color: isActive(link.href) ? "#C9A84C" : "rgba(255,255,255,0.65)",
                    background: isActive(link.href) ? "rgba(201,168,76,0.08)" : "transparent",
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.03em",
                    borderLeft: isActive(link.href) ? "2px solid #C9A84C" : "2px solid transparent",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex gap-2 mt-3 pt-3" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
                <a
                  href="https://wa.me/message/BSPKDIEB7H22H1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded font-semibold text-sm"
                  style={{ border: "1px solid rgba(201,168,76,0.35)", color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif" }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="tel:+971585592355"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded font-semibold text-sm"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #B8922A)", color: "#0a1929", fontFamily: "'Inter', sans-serif" }}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── Floating WhatsApp ── */}
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
