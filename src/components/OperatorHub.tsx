interface OperatorHubProps {
  onPartnerClick: () => void;
}

export default function OperatorHub({ onPartnerClick }: OperatorHubProps) {
  const operators = [
    {
      id: 'lal-sobuj',
      name: 'Lal Sobuj',
      namebn: 'লাল সবুজ',
      status: 'In Negotiation',
      statusColor: '#FF8C00',
      routes: ['Noakhali → Dhaka', 'Chaumuhani → Dhaka'],
      busType: 'AC / Non-AC',
      trips: 6,
      icon: '🚌',
    },
    {
      id: 'himachol',
      name: 'Himachol',
      namebn: 'হিমাচল',
      status: 'Partner Verified',
      statusColor: '#00A36C',
      routes: ['Noakhali → Dhaka', 'Maijdee → Dhaka'],
      busType: 'Volvo AC',
      trips: 4,
      icon: '🏔️',
    },
    {
      id: 'ekaishay',
      name: 'Ekaishay',
      namebn: 'একাইশয়',
      status: 'In Negotiation',
      statusColor: '#FF8C00',
      routes: ['Sonapur → Dhaka'],
      busType: 'AC',
      trips: 3,
      icon: '⭐',
    },
    {
      id: 'royal',
      name: 'Royal',
      namebn: 'রয়্যাল',
      status: 'Coming Soon',
      statusColor: '#8b98a9',
      routes: ['Noakhali → Dhaka'],
      busType: 'Non-AC',
      trips: 5,
      icon: '👑',
    },
  ];

  return (
    <section id="operators" style={{ background: 'white', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,140,0,0.1)',
              border: '1px solid rgba(255,140,0,0.25)',
              borderRadius: 999,
              padding: '6px 16px',
              marginBottom: 14,
            }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#FF8C00', letterSpacing: '0.5px' }}>🤝 OPERATOR PARTNERS</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 900,
              color: 'var(--cholo-text-dark)',
              lineHeight: 1.15,
              letterSpacing: '-0.5px',
              marginBottom: 10,
            }}>
              All Noakhali Operators,{' '}
              <span className="gradient-text">One Platform.</span>
            </h2>
            <p style={{ color: 'var(--cholo-text-mid)', fontSize: 16, maxWidth: 440, lineHeight: 1.6 }}>
              We are building direct partnerships with every major bus operator on the 
              Noakhali-Dhaka corridor. See their schedules, verified conditions, and 
              available seats — all in one place.
            </p>
          </div>

          {/* B2B CTA */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,49,129,0.05), rgba(0,163,108,0.05))',
            border: '1px solid rgba(0,71,171,0.15)',
            borderRadius: 16,
            padding: '24px',
            maxWidth: 280,
            textAlign: 'center',
            flexShrink: 0,
          }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>🚌</div>
            <h4 style={{ fontWeight: 800, color: 'var(--cholo-text-dark)', marginBottom: 6, fontSize: 15 }}>
              Own a Bus Company?
            </h4>
            <p style={{ color: 'var(--cholo-text-mid)', fontSize: 13, lineHeight: 1.55, marginBottom: 16 }}>
              Join CHOLO and fill your seats. Reach 6,000+ daily travelers who are actively searching online.
            </p>
            <button
              onClick={onPartnerClick}
              style={{
                background: 'linear-gradient(135deg, #0047AB, #00A36C)',
                color: 'white',
                fontWeight: 700,
                fontSize: 13,
                padding: '10px 20px',
                borderRadius: 10,
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,71,171,0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              Join CHOLO as Partner →
            </button>
          </div>
        </div>

        {/* Operator Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
          marginBottom: 48,
        }}>
          {operators.map((op) => (
            <div
              key={op.id}
              style={{
                background: 'white',
                borderRadius: 18,
                border: '1.5px solid var(--cholo-grey-light)',
                padding: '24px',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = op.statusColor;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px rgba(0,49,129,0.12)`;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--cholo-grey-light)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Greyscale logo block */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                marginBottom: 18,
                filter: op.status === 'Coming Soon' ? 'grayscale(1) opacity(0.5)' : 'grayscale(0.5) opacity(0.75)',
                transition: 'filter 0.3s ease',
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.filter = 'grayscale(0) opacity(1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.filter = op.status === 'Coming Soon'
                    ? 'grayscale(1) opacity(0.5)'
                    : 'grayscale(0.5) opacity(0.75)';
                }}
              >
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #f0f4ff, #e8f5ee)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  flexShrink: 0,
                }}>
                  {op.icon}
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--cholo-text-dark)', lineHeight: 1 }}>
                    {op.name}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--cholo-text-mid)', fontFamily: "'Noto Sans Bengali', sans-serif", marginTop: 2 }}>
                    {op.namebn}
                  </div>
                </div>
              </div>

              {/* Status badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                background: `${op.statusColor}15`,
                border: `1px solid ${op.statusColor}40`,
                borderRadius: 999,
                padding: '4px 10px',
                marginBottom: 14,
              }}>
                <div style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: op.statusColor,
                  animation: op.status === 'Partner Verified' ? 'pulse-ring 2s infinite' : 'none',
                }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: op.statusColor, letterSpacing: '0.3px' }}>
                  {op.status}
                </span>
              </div>

              {/* Info rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                {[
                  { icon: '🛣️', label: op.routes[0] },
                  { icon: '❄️', label: op.busType },
                  { icon: '🕐', label: `${op.trips} daily trips` },
                ].map((info) => (
                  <div key={info.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 13 }}>{info.icon}</span>
                    <span style={{ fontSize: 13, color: 'var(--cholo-text-mid)', fontWeight: 500 }}>{info.label}</span>
                  </div>
                ))}
              </div>

              {/* Coming soon overlay note */}
              {op.status === 'Coming Soon' && (
                <div style={{
                  background: 'rgba(248,249,252,0.9)',
                  borderRadius: 10,
                  padding: '10px 14px',
                  fontSize: 12,
                  color: 'var(--cholo-text-mid)',
                  border: '1px dashed var(--cholo-grey-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}>
                  <svg width="13" height="13" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Integration in progress — launching Q3 2025
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Route Map placeholder */}
        <div style={{
          background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f5ee 100%)',
          borderRadius: 20,
          padding: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          flexWrap: 'wrap',
        }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h4 style={{ fontWeight: 800, fontSize: 17, color: 'var(--cholo-text-dark)', marginBottom: 6 }}>
              📍 Coverage: Noakhali District → Dhaka
            </h4>
            <p style={{ color: 'var(--cholo-text-mid)', fontSize: 14, lineHeight: 1.6 }}>
              We cover all major departure points: Maijdee, Sonapur, Chaumuhani, Feni — 
              with arrivals at Sayedabad and Mohakhali Bus Terminals in Dhaka.
            </p>
          </div>

          {/* Route stops visualization */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Maijdee', 'Sonapur', 'Feni', 'Cumilla', 'Sayedabad'].map((stop, i, arr) => (
              <div key={stop} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  background: i === 0 || i === arr.length - 1
                    ? 'linear-gradient(135deg, #0047AB, #00A36C)'
                    : 'white',
                  color: i === 0 || i === arr.length - 1 ? 'white' : 'var(--cholo-text-dark)',
                  borderRadius: 10,
                  padding: '8px 14px',
                  fontSize: 12,
                  fontWeight: 700,
                  border: '1.5px solid',
                  borderColor: i === 0 || i === arr.length - 1 ? 'transparent' : 'var(--cholo-grey-light)',
                  whiteSpace: 'nowrap',
                }}>
                  {stop}
                </div>
                {i < arr.length - 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}>
                    <svg width="20" height="8" fill="none">
                      <path d="M0 4h16M12 1l4 3-4 3" stroke="#00A36C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
