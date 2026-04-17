import { useState } from 'react';

interface HeroProps {
  onSearch: (query: { origin: string; destination: string; date: string }) => void;
  onBookingClick: () => void;
}

export default function Hero({ onSearch, onBookingClick }: HeroProps) {
  const [origin, setOrigin] = useState('Noakhali');
  const [destination, setDestination] = useState('Dhaka');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ origin, destination, date });
  };

  const stats = [
    { value: '6,000+', label: 'Daily Travelers' },
    { value: '4', label: 'Verified Operators' },
    { value: '60s', label: 'Booking Time' },
    { value: '100%', label: 'Verified Buses' },
  ];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0,49,129,0.93) 0%, rgba(0,71,171,0.87) 45%, rgba(0,163,108,0.82) 100%)',
        }}
      />

      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        top: -100,
        right: -100,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,163,108,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -150,
        left: -80,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,140,0,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '120px 24px 80px',
      }}>
        {/* Route badge */}
        <div style={{ marginBottom: 24, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <span className="route-tag">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Noakhali → Dhaka
          </span>
          <span className="route-tag">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verified by CHOLO
          </span>
          <span className="route-tag" style={{ background: 'rgba(255,140,0,0.2)', borderColor: 'rgba(255,140,0,0.4)', color: '#FFD580' }}>
            🚀 Phase 1 Live — Pre-booking Open
          </span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 58px)',
          fontWeight: 900,
          color: 'white',
          lineHeight: 1.1,
          maxWidth: 780,
          marginBottom: 20,
          letterSpacing: '-1px',
        }}>
          No More Counter Hassles.{' '}
          <span style={{
            background: 'linear-gradient(135deg, #FFD580, #FF8C00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Book Your Noakhali-Dhaka Seats Online.
          </span>
        </h1>

        {/* Sub-headline */}
        <p style={{
          fontSize: 'clamp(15px, 2vw, 19px)',
          color: 'rgba(255,255,255,0.85)',
          maxWidth: 620,
          marginBottom: 40,
          lineHeight: 1.65,
          fontWeight: 400,
        }}>
          See actual bus conditions, check legroom, pick your favorite seat, and get your ticket in{' '}
          <strong style={{ color: '#FFD580', fontWeight: 700 }}>60 seconds</strong>.
          All Noakhali operators in one place.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} style={{ maxWidth: 780, marginBottom: 20 }}>
          <div className="search-bar" style={{ flexWrap: 'wrap' }}>
            {/* Origin */}
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 120, gap: 8 }}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--cholo-blue)" strokeWidth="2" style={{ flexShrink: 0, marginLeft: 8 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="search-input"
                style={{ appearance: 'none', cursor: 'pointer', fontWeight: 500, color: 'var(--cholo-text-dark)' }}
              >
                <option value="Noakhali">Noakhali (Maijdee)</option>
                <option value="Sonapur">Sonapur</option>
                <option value="Chaumuhani">Chaumuhani</option>
                <option value="Feni">Feni</option>
              </select>
            </div>

            {/* Swap button */}
            <button
              type="button"
              onClick={() => { const t = origin; setOrigin(destination); setDestination(t); }}
              style={{
                background: 'var(--cholo-grey-light)',
                border: 'none',
                borderRadius: 8,
                padding: '8px 10px',
                cursor: 'pointer',
                color: 'var(--cholo-blue)',
                transition: 'all 0.2s ease',
                flexShrink: 0,
              }}
              title="Swap"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>

            {/* Destination */}
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 120, gap: 8 }}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--cholo-green)" strokeWidth="2" style={{ flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="search-input"
                style={{ appearance: 'none', cursor: 'pointer', fontWeight: 500 }}
              >
                <option value="Dhaka">Dhaka (Sayedabad)</option>
                <option value="Dhaka_Mohakhali">Dhaka (Mohakhali)</option>
                <option value="Cumilla">Cumilla</option>
                <option value="Chittagong">Chittagong</option>
              </select>
            </div>

            <div className="search-divider" />

            {/* Date */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 140 }}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--cholo-orange)" strokeWidth="2" style={{ flexShrink: 0, marginLeft: 8 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="search-input"
                style={{ cursor: 'pointer', fontWeight: 500 }}
              />
            </div>

            {/* Search button */}
            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #FF8C00, #FFa520)',
                color: 'white',
                fontWeight: 800,
                fontSize: 15,
                padding: '14px 28px',
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(255,140,0,0.4)',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                whiteSpace: 'nowrap',
                letterSpacing: '0.3px',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 22px rgba(255,140,0,0.55)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(255,140,0,0.4)';
              }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              SEARCH BUSES
            </button>
          </div>
        </form>

        {/* Pre-booking note */}
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, marginBottom: 48, display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Can't find your slot? &nbsp;
          <button onClick={onBookingClick} style={{ color: '#FFD580', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, textDecoration: 'underline', fontSize: 13 }}>
            Request a Pre-booking →
          </button>
        </p>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
          gap: 16,
          maxWidth: 560,
        }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: 'rgba(255,255,255,0.10)',
                backdropFilter: 'blur(8px)',
                borderRadius: 14,
                padding: '16px 12px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
            >
              <div style={{ fontSize: 26, fontWeight: 900, color: 'white', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', marginTop: 4, fontWeight: 500, letterSpacing: '0.3px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        animation: 'float 2s ease-in-out infinite',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, letterSpacing: 2, fontWeight: 500 }}>SCROLL</span>
        <svg width="20" height="20" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
