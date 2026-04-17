import { useState, useEffect } from 'react';

interface NavbarProps {
  onBookingClick: () => void;
}

export default function Navbar({ onBookingClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Routes', href: '#operators' },
    { label: 'Verified Buses', href: '#verified' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(255,255,255,0.97)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,49,129,0.10)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? 64 : 76,
          transition: 'height 0.3s ease',
        }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* SVG Bus Icon */}
            <div style={{ position: 'relative', width: 44, height: 44 }}>
              <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#003181" />
                    <stop offset="100%" stopColor="#00A36C" />
                  </linearGradient>
                </defs>
                {/* Bus body */}
                <rect x="4" y="12" width="36" height="20" rx="4" fill="url(#logoGrad)" />
                {/* Windows */}
                <rect x="8" y="15" width="7" height="5" rx="1.5" fill="white" fillOpacity="0.9" />
                <rect x="18" y="15" width="7" height="5" rx="1.5" fill="white" fillOpacity="0.9" />
                <rect x="28" y="15" width="7" height="5" rx="1.5" fill="white" fillOpacity="0.9" />
                {/* Front grill */}
                <rect x="36" y="18" width="4" height="2.5" rx="1" fill="white" fillOpacity="0.7" />
                {/* Wheels */}
                <circle cx="12" cy="33" r="4" fill="#1a2332" />
                <circle cx="12" cy="33" r="2" fill="white" fillOpacity="0.4" />
                <circle cx="32" cy="33" r="4" fill="#1a2332" />
                <circle cx="32" cy="33" r="2" fill="white" fillOpacity="0.4" />
                {/* Speed lines */}
                <line x1="2" y1="20" x2="6" y2="20" stroke="url(#logoGrad)" strokeWidth="2" strokeLinecap="round" />
                <line x1="1" y1="24" x2="5" y2="24" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div style={{
                fontSize: 24,
                fontWeight: 900,
                background: scrolled
                  ? 'linear-gradient(135deg, #003181 0%, #00A36C 100%)'
                  : 'linear-gradient(135deg, #ffffff 0%, #a8f0d8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.5px',
                lineHeight: 1,
              }}>
                CHOLO
              </div>
              <div style={{
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: 2,
                color: scrolled ? 'var(--cholo-green)' : 'rgba(255,255,255,0.75)',
                marginTop: 1,
                lineHeight: 1,
              }}>
                TICKETS & TRAVEL
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="hidden md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: scrolled ? 'var(--cholo-text-mid)' : 'rgba(255,255,255,0.9)',
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: 'none',
                  padding: '8px 14px',
                  borderRadius: 8,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = scrolled
                    ? 'rgba(0,71,171,0.08)'
                    : 'rgba(255,255,255,0.15)';
                  (e.target as HTMLElement).style.color = scrolled ? 'var(--cholo-blue)' : 'white';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = 'transparent';
                  (e.target as HTMLElement).style.color = scrolled ? 'var(--cholo-text-mid)' : 'rgba(255,255,255,0.9)';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={onBookingClick}
              style={{
                background: 'linear-gradient(135deg, #FF8C00, #FFa520)',
                color: 'white',
                fontWeight: 700,
                fontSize: 14,
                padding: '10px 22px',
                borderRadius: 10,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(255,140,0,0.35)',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-1px)';
                (e.target as HTMLElement).style.boxShadow = '0 6px 20px rgba(255,140,0,0.5)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)';
                (e.target as HTMLElement).style.boxShadow = '0 4px 14px rgba(255,140,0,0.35)';
              }}
            >
              Book Now
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                color: scrolled ? 'var(--cholo-blue-dark)' : 'white',
                display: 'none',
              }}
              className="block md:hidden"
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <line x1="4" y1="4" x2="18" y2="18" />
                    <line x1="18" y1="4" x2="4" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="19" y2="6" />
                    <line x1="3" y1="11" x2="19" y2="11" />
                    <line x1="3" y1="16" x2="19" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div style={{
            background: 'white',
            borderRadius: 16,
            padding: 16,
            marginBottom: 12,
            boxShadow: '0 8px 32px rgba(0,49,129,0.12)',
            animation: 'slideUp 0.2s ease',
          }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  color: 'var(--cholo-text-dark)',
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: 'none',
                  padding: '12px 16px',
                  borderRadius: 10,
                  transition: 'background 0.2s ease',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
