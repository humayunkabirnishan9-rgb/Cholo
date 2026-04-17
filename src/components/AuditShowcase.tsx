export default function AuditShowcase() {
  const auditData = [
    {
      operator: 'Himachol',
      vehicle: 'Volvo B9R — AC Sleeper',
      auditDate: 'Jun 28, 2025',
      auditorNote: 'Exceptional condition. This is the gold standard for Noakhali operators.',
      metrics: {
        legroom: { score: 5, label: '34 inches', grade: 'A+' },
        ac: { score: 5, label: 'Dual-zone Carrier', grade: 'A+' },
        seats: { score: 5, label: 'Full Reclining Pushback', grade: 'A+' },
        cleanliness: { score: 5, label: 'Spotless', grade: 'A+' },
        driver: { score: 5, label: 'Certified + Licensed', grade: 'A+' },
      },
      overallScore: 4.9,
      accentColor: '#0047AB',
    },
    {
      operator: 'Lal Sobuj',
      vehicle: 'Scania — AC Semi-Sleeper',
      auditDate: 'Jun 30, 2025',
      auditorNote: 'Solid comfort. AC is powerful. Slightly narrow aisle but seats are wide.',
      metrics: {
        legroom: { score: 4, label: '30 inches', grade: 'B+' },
        ac: { score: 5, label: 'Single-zone Samsung', grade: 'A' },
        seats: { score: 4, label: 'Reclining Pushback', grade: 'B+' },
        cleanliness: { score: 4, label: 'Well maintained', grade: 'A-' },
        driver: { score: 5, label: 'Experienced 8 yrs', grade: 'A+' },
      },
      overallScore: 4.5,
      accentColor: '#00A36C',
    },
    {
      operator: 'Ekaishay',
      vehicle: 'BRTC — AC Coach',
      auditDate: 'Jul 1, 2025',
      auditorNote: 'Best legroom-per-taka value. Great choice for tall passengers.',
      metrics: {
        legroom: { score: 5, label: '36 inches (!)' , grade: 'A+' },
        ac: { score: 4, label: 'Single-zone, adequate', grade: 'B+' },
        seats: { score: 4, label: 'Semi-reclining', grade: 'B' },
        cleanliness: { score: 4, label: 'Good', grade: 'B+' },
        driver: { score: 4, label: 'Verified', grade: 'A-' },
      },
      overallScore: 4.3,
      accentColor: '#FF8C00',
    },
  ];

  const renderScoreBar = (score: number, color: string) => (
    <div style={{ background: '#f0f4ff', borderRadius: 4, height: 6, flex: 1, overflow: 'hidden' }}>
      <div style={{
        background: color,
        width: `${(score / 5) * 100}%`,
        height: '100%',
        borderRadius: 4,
      }} />
    </div>
  );

  return (
    <section style={{ background: 'white', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(0,71,171,0.08)',
            border: '1px solid rgba(0,71,171,0.18)',
            borderRadius: 999,
            padding: '6px 16px',
            marginBottom: 14,
          }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#0047AB', letterSpacing: '0.5px' }}>📋 VERIFIED BUS AUDITS</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: 900,
            color: 'var(--cholo-text-dark)',
            lineHeight: 1.15,
            letterSpacing: '-0.5px',
            marginBottom: 12,
          }}>
            On-Ground Inspected.{' '}
            <span className="gradient-text">No Stock Photos.</span>
          </h2>
          <p style={{ color: 'var(--cholo-text-mid)', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
            Our audit team physically visits terminals, boards the buses, measures legroom, 
            checks AC output, and rates every single comfort metric. Updated every 30 days.
          </p>
        </div>

        {/* Audit Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
          marginBottom: 56,
        }}>
          {auditData.map((audit) => (
            <div
              key={audit.operator}
              style={{
                background: 'white',
                borderRadius: 20,
                border: '1.5px solid var(--cholo-grey-light)',
                overflow: 'hidden',
                boxShadow: '0 2px 16px rgba(0,49,129,0.06)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,49,129,0.14)';
                (e.currentTarget as HTMLElement).style.borderColor = audit.accentColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,49,129,0.06)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--cholo-grey-light)';
              }}
            >
              {/* Image placeholder (bus interior) */}
              <div style={{
                height: 200,
                background: `linear-gradient(135deg, ${audit.accentColor}15, ${audit.accentColor}08)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderBottom: '1px solid var(--cholo-grey-light)',
              }}>
                {/* Decorative bus SVG */}
                <svg viewBox="0 0 200 100" style={{ width: '60%', opacity: 0.18 }}>
                  <rect x="10" y="20" width="180" height="65" rx="8" fill={audit.accentColor} />
                  <rect x="20" y="28" width="25" height="18" rx="3" fill="white" />
                  <rect x="52" y="28" width="25" height="18" rx="3" fill="white" />
                  <rect x="84" y="28" width="25" height="18" rx="3" fill="white" />
                  <rect x="116" y="28" width="25" height="18" rx="3" fill="white" />
                  <rect x="148" y="28" width="25" height="18" rx="3" fill="white" />
                  <circle cx="40" cy="85" r="12" fill="#1a2332" />
                  <circle cx="40" cy="85" r="6" fill={audit.accentColor} fillOpacity="0.4" />
                  <circle cx="160" cy="85" r="12" fill="#1a2332" />
                  <circle cx="160" cy="85" r="6" fill={audit.accentColor} fillOpacity="0.4" />
                  <rect x="185" y="35" width="8" height="10" rx="2" fill={audit.accentColor} fillOpacity="0.5" />
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: 12,
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  }}>
                    <svg width="16" height="16" fill={audit.accentColor} viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                    </svg>
                    <span style={{ fontSize: 12, fontWeight: 700, color: audit.accentColor }}>Photos Coming Soon</span>
                  </div>
                </div>

                {/* Score badge */}
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  background: audit.accentColor,
                  color: 'white',
                  borderRadius: 10,
                  padding: '6px 12px',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  <svg width="12" height="12" fill="white" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span style={{ fontWeight: 800, fontSize: 14 }}>{audit.overallScore}</span>
                </div>

                {/* Verified badge */}
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  background: 'rgba(0,163,108,0.9)',
                  backdropFilter: 'blur(4px)',
                  color: 'white', borderRadius: 8, padding: '4px 10px', fontSize: 11, fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  ✓ CHOLO Verified
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '20px' }}>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontWeight: 800, fontSize: 17, color: 'var(--cholo-text-dark)', lineHeight: 1.2 }}>{audit.operator}</div>
                  <div style={{ fontSize: 13, color: 'var(--cholo-text-mid)', marginTop: 2 }}>{audit.vehicle}</div>
                  <div style={{ fontSize: 11, color: 'rgba(0,163,108,0.8)', marginTop: 4, fontWeight: 600 }}>
                    Last audited: {audit.auditDate}
                  </div>
                </div>

                {/* Comfort metrics */}
                <div style={{ marginBottom: 14 }}>
                  {Object.entries(audit.metrics).map(([key, val]) => (
                    <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 72, fontSize: 11, color: 'var(--cholo-text-mid)', fontWeight: 600, textTransform: 'capitalize', flexShrink: 0 }}>
                        {key === 'ac' ? 'AC Quality' : key.charAt(0).toUpperCase() + key.slice(1)}
                      </div>
                      {renderScoreBar(val.score, audit.accentColor)}
                      <span style={{
                        fontSize: 10, fontWeight: 800, color: audit.accentColor,
                        background: `${audit.accentColor}15`, borderRadius: 4,
                        padding: '1px 5px', flexShrink: 0,
                      }}>
                        {val.grade}
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--cholo-text-mid)', flexShrink: 0, maxWidth: 80, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {val.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Auditor note */}
                <div style={{
                  background: `${audit.accentColor}08`,
                  border: `1px solid ${audit.accentColor}20`,
                  borderRadius: 10, padding: '10px 12px', marginBottom: 14,
                }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: audit.accentColor, marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Auditor Note
                  </div>
                  <p style={{ fontSize: 12.5, color: 'var(--cholo-text-mid)', lineHeight: 1.55 }}>{audit.auditorNote}</p>
                </div>

                {/* API reference */}
                <div style={{ fontSize: 10, color: 'rgba(0,0,0,0.3)', fontFamily: 'monospace', background: 'rgba(0,0,0,0.03)', borderRadius: 6, padding: '4px 8px' }}>
                  GET /api/audits/{audit.operator.toLowerCase()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bus interior photo */}
        <div style={{
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 16px 60px rgba(0,49,129,0.15)',
          position: 'relative',
        }}>
          <img
            src="/images/bus-interior.jpg"
            alt="Verified bus interior - CHOLO Audit"
            style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,49,129,0.85) 0%, transparent 50%)',
            display: 'flex', alignItems: 'flex-end', padding: '32px',
          }}>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, fontWeight: 600, letterSpacing: '1px', marginBottom: 6, textTransform: 'uppercase' }}>
                CHOLO Verified Interior
              </div>
              <h3 style={{ color: 'white', fontWeight: 900, fontSize: 24, marginBottom: 8 }}>
                This is what "Verified" actually means.
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, maxWidth: 500, lineHeight: 1.6 }}>
                Our auditors board every bus, sit in every zone, and document every detail. 
                The Ekaishay 10:30 PM trip genuinely has excellent legroom — we measured it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
