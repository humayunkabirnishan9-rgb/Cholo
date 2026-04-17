export default function VerifiedAdvantage() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
          <defs>
            <linearGradient id="camGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0047AB" />
              <stop offset="1" stopColor="#00A36C" />
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="14" fill="url(#camGrad)" fillOpacity="0.1" />
          <path d="M10 18a3 3 0 013-3h2.5l2-3h9l2 3H31a3 3 0 013 3v14a3 3 0 01-3 3H13a3 3 0 01-3-3V18z" stroke="url(#camGrad)" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="24" cy="25" r="5" stroke="url(#camGrad)" strokeWidth="2.2" />
          <circle cx="33" cy="19" r="1.5" fill="url(#camGrad)" />
          <path d="M17 20l-3 2" stroke="url(#camGrad)" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 30l-2 2m0 0l-2 2M8 32l2 2" stroke="url(#camGrad)" strokeWidth="1.8" strokeLinecap="round" />
          {/* Verification check badge */}
          <circle cx="36" cy="13" r="7" fill="#00A36C" />
          <path d="M33 13l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      badge: 'On-Ground Verified',
      title: 'Real Photos. Real Conditions.',
      highlight: "Don't guess.",
      description:
        "Our team physically visits terminals and captures high-quality photos and videos of every bus interior — AC units, seat quality, legroom measurements, and cleanliness. You see exactly what you're boarding before you pay.",
      metrics: ['Interior legroom measured', 'AC condition graded', 'Seat reclining tested'],
      accentColor: '#0047AB',
      lightColor: 'rgba(0,71,171,0.08)',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
          <defs>
            <linearGradient id="calGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF8C00" />
              <stop offset="1" stopColor="#FF6000" />
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="14" fill="url(#calGrad)" fillOpacity="0.1" />
          <rect x="10" y="14" width="28" height="24" rx="4" stroke="url(#calGrad)" strokeWidth="2.2" />
          <path d="M10 20h28" stroke="url(#calGrad)" strokeWidth="2" />
          <path d="M17 11v6M31 11v6" stroke="url(#calGrad)" strokeWidth="2.2" strokeLinecap="round" />
          {/* Check on calendar */}
          <path d="M18 28l3 3 7-7" stroke="url(#calGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      badge: 'Concierge Model',
      title: 'Zero-Hassle Pre-booking',
      highlight: "We do the queuing.",
      description:
        "Tell us your travel details and we physically secure your ticket at the counter. No more standing in long lines, no more 'seat not available' surprises. Our operator manages the physical booking, you get confirmation via SMS within 2 hours.",
      metrics: ['2-hour SMS confirmation', 'Physical seat secured', 'Refund guarantee'],
      accentColor: '#FF8C00',
      lightColor: 'rgba(255,140,0,0.08)',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 52, height: 52 }}>
          <defs>
            <linearGradient id="locGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00A36C" />
              <stop offset="1" stopColor="#228B22" />
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="14" fill="url(#locGrad)" fillOpacity="0.1" />
          <path d="M24 9C19.03 9 15 13.03 15 18c0 6.75 9 18 9 18s9-11.25 9-18c0-4.97-4.03-9-9-9z" stroke="url(#locGrad)" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="24" cy="18" r="3.5" stroke="url(#locGrad)" strokeWidth="2" />
          {/* Chat bubble */}
          <rect x="28" y="30" width="14" height="10" rx="3" fill="#00A36C" />
          <path d="M29 38l-3 3v-3h3z" fill="#00A36C" />
          <path d="M31 34h8M31 37h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      badge: 'Local First',
      title: 'Rooted in Noakhali',
      highlight: "We know these routes.",
      description:
        "CHOLO is built by Noakhali locals, for Noakhali travelers. We know Maijdee Terminal, Sonapur crossing, and every shortcut between here and Sayedabad. Real local support — not a call center, but a neighbor who knows your bus.",
      metrics: ['Maijdee terminal experts', 'Bangla-first support', 'Local schedule data'],
      accentColor: '#00A36C',
      lightColor: 'rgba(0,163,108,0.08)',
    },
  ];

  return (
    <section id="verified" style={{ background: 'var(--cholo-off-white)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'linear-gradient(135deg, rgba(0,71,171,0.1), rgba(0,163,108,0.1))',
            border: '1px solid rgba(0,71,171,0.2)',
            borderRadius: 999,
            padding: '6px 16px',
            marginBottom: 16,
          }}>
            <svg width="14" height="14" fill="#0047AB" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#0047AB', letterSpacing: '0.5px' }}>THE VERIFIED BY CHOLO ADVANTAGE</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 42px)',
            fontWeight: 900,
            color: 'var(--cholo-text-dark)',
            lineHeight: 1.15,
            marginBottom: 16,
            letterSpacing: '-0.5px',
          }}>
            We Built This on{' '}
            <span className="gradient-text">Truth.</span>
          </h2>
          <p style={{
            fontSize: 17,
            color: 'var(--cholo-text-mid)',
            maxWidth: 560,
            margin: '0 auto',
            lineHeight: 1.65,
          }}>
            Every claim on CHOLO is physically verified. No stock photos. No guesswork. 
            Just honest information that helps you travel smarter.
          </p>
        </div>

        {/* Feature Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 28,
        }}>
          {features.map((feat) => (
            <div
              key={feat.title}
              className="card-feature"
              style={{ cursor: 'default' }}
            >
              {/* Icon */}
              <div style={{ marginBottom: 20 }}>{feat.icon}</div>

              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: feat.lightColor,
                borderRadius: 999,
                padding: '4px 12px',
                marginBottom: 12,
              }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: feat.accentColor, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  {feat.badge}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 20,
                fontWeight: 800,
                color: 'var(--cholo-text-dark)',
                marginBottom: 8,
                lineHeight: 1.2,
              }}>
                {feat.title}
              </h3>

              {/* Highlight */}
              <p style={{
                fontSize: 14,
                fontWeight: 700,
                color: feat.accentColor,
                marginBottom: 10,
              }}>
                {feat.highlight}
              </p>

              {/* Description */}
              <p style={{
                fontSize: 14.5,
                color: 'var(--cholo-text-mid)',
                lineHeight: 1.7,
                marginBottom: 20,
              }}>
                {feat.description}
              </p>

              {/* Metrics */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {feat.metrics.map((m) => (
                  <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="16" height="16" fill={feat.accentColor} viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span style={{ fontSize: 13.5, color: 'var(--cholo-text-mid)', fontWeight: 500 }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div style={{
          marginTop: 56,
          background: 'linear-gradient(135deg, #003181 0%, #0047AB 50%, #00A36C 100%)',
          borderRadius: 20,
          padding: '32px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 6 }}>
              🛡️ The CHOLO Verification Promise
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.55, maxWidth: 520 }}>
              Every bus listed on CHOLO has been physically inspected by our ground team. 
              We audit AC performance, seat condition, driver credentials, and route timing — 
              and we update these audits every 30 days.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 32, flexShrink: 0, flexWrap: 'wrap' }}>
            {[['30-day', 'Audit Cycle'], ['100%', 'Photo Verified'], ['4.6★', 'Avg Rating']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#FFD580' }}>{val}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 2, fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
