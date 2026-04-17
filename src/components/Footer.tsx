import { useState } from 'react';
import { joinWaitlist } from '../api';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setWaitlistStatus('loading');
    await joinWaitlist({ name: 'Waitlist', phone, email });
    setWaitlistStatus('success');
    setPhone('');
    setEmail('');
  };

  const seoLinks = [
    { text: 'Maijdee to Dhaka Bus Schedule', href: '#' },
    { text: 'Sonapur to Sayedabad Ticket Price', href: '#' },
    { text: 'Best AC Bus Noakhali', href: '#' },
    { text: 'Noakhali to Dhaka Night Coach', href: '#' },
    { text: 'Chaumuhani to Dhaka Bus', href: '#' },
    { text: 'Feni to Dhaka Bus Fare', href: '#' },
    { text: 'Himachol Bus Schedule', href: '#' },
    { text: 'Lal Sobuj Bus Ticket Price', href: '#' },
    { text: 'Dhaka to Noakhali Return Trip', href: '#' },
    { text: 'Online Bus Booking Noakhali', href: '#' },
  ];

  const footerLinks = {
    Company: [
      { text: 'About CHOLO', href: '#about' },
      { text: 'Our Mission', href: '#about' },
      { text: 'How It Works', href: '#verified' },
      { text: 'Phase 2 Roadmap', href: '#roadmap' },
      { text: 'Careers', href: '#' },
    ],
    Travelers: [
      { text: 'Search Buses', href: '#hero' },
      { text: 'Pre-booking Guide', href: '#' },
      { text: 'Refund Policy', href: '#' },
      { text: 'Write a Review', href: '#reviews' },
      { text: 'Travel Tips', href: '#' },
    ],
    Operators: [
      { text: 'Become a Partner', href: '#operators' },
      { text: 'List Your Bus', href: '#' },
      { text: 'Partner Dashboard', href: '#' },
      { text: 'Revenue Reports', href: '#' },
    ],
    Legal: [
      { text: 'Privacy Policy', href: '#privacy' },
      { text: 'Terms of Service', href: '#' },
      { text: 'Cookie Policy', href: '#' },
      { text: 'Data Rights', href: '#' },
    ],
  };

  return (
    <footer id="about" style={{ background: 'var(--cholo-text-dark)', color: 'white' }}>
      {/* Roadmap / Phase Banner */}
      <div id="roadmap" style={{
        background: 'linear-gradient(135deg, #003181, #0047AB)',
        padding: '60px 0',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
            {/* Phase 1 */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(0,163,108,0.2)',
                border: '1px solid rgba(0,163,108,0.4)',
                borderRadius: 999,
                padding: '5px 14px',
                marginBottom: 14,
              }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#00A36C', animation: 'pulse-ring 2s infinite' }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: '#00c47f', letterSpacing: 0.5 }}>PHASE 1 — ACTIVE NOW</span>
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 10, color: 'white' }}>
                The Concierge Model
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.75 }}>
                CHOLO currently operates as an <strong style={{ color: 'white' }}>Information Hub + Manual Booking Service</strong> for 
                the Noakhali-Dhaka corridor. You browse verified bus information, submit a booking request, 
                and our on-ground operator physically secures your seat at the counter. You get SMS confirmation 
                within 2 hours. This model builds trust, proves the market, and gives us negotiation leverage 
                with bus owners for full integration.
              </p>
            </div>

            {/* Phase 2 */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,140,0,0.15)',
                border: '1px solid rgba(255,140,0,0.3)',
                borderRadius: 999,
                padding: '5px 14px',
                marginBottom: 14,
              }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#FFa520', letterSpacing: 0.5 }}>⚡ PHASE 2 — Q4 2025</span>
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 10, color: 'white' }}>
                Full Automated Booking
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.75 }}>
                Phase 2 will deliver <strong style={{ color: 'white' }}>real-time seat inventory sync</strong> directly with 
                operator management systems, instant digital ticket issuance, online payment gateway (bKash/Nagad/Card), 
                and a live seat map so you can pick your exact seat. API integrations with all major Noakhali operators 
                will be completed following Phase 1 market validation.
              </p>
            </div>

            {/* Waitlist CTA */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 999, padding: '5px 14px', marginBottom: 14,
              }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: 0.5 }}>🚀 GET EARLY ACCESS</span>
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 10, color: 'white' }}>
                Join the Waitlist
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
                Be the first to know when Phase 2 launches. Get early-bird pricing and priority seat selection.
              </p>
              {waitlistStatus === 'success' ? (
                <div style={{
                  background: 'rgba(0,163,108,0.2)', border: '1px solid rgba(0,163,108,0.4)',
                  borderRadius: 12, padding: '14px 16px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>🎉</div>
                  <div style={{ fontWeight: 700, color: '#00c47f', fontSize: 14 }}>You're on the list!</div>
                  <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12, marginTop: 2 }}>We'll SMS you at launch.</div>
                </div>
              ) : (
                <form onSubmit={handleWaitlist} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <input
                    type="tel"
                    placeholder="Your phone: 01XXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    style={{
                      padding: '12px 16px', borderRadius: 10, border: '1.5px solid rgba(255,255,255,0.2)',
                      background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 14,
                      outline: 'none', fontFamily: 'Inter, sans-serif',
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      padding: '12px 16px', borderRadius: 10, border: '1.5px solid rgba(255,255,255,0.2)',
                      background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 14,
                      outline: 'none', fontFamily: 'Inter, sans-serif',
                    }}
                  />
                  <button
                    type="submit"
                    disabled={waitlistStatus === 'loading'}
                    style={{
                      background: 'linear-gradient(135deg, #FF8C00, #FFa520)',
                      color: 'white', fontWeight: 700, fontSize: 14, padding: '12px',
                      borderRadius: 10, border: 'none', cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(255,140,0,0.35)',
                      opacity: waitlistStatus === 'loading' ? 0.7 : 1,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {waitlistStatus === 'loading' ? 'Joining...' : 'Notify Me at Launch →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Our Commitment Section */}
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        padding: '40px 0',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 800, fontSize: 22, marginBottom: 12, color: 'white' }}>
            🤝 Our Commitment to Noakhali
          </h3>
          <p style={{
            color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.8,
            maxWidth: 760, margin: '0 auto',
          }}>
            CHOLO (চলো) was born in Noakhali to solve a real problem — the nearly 6,000 daily travelers on the 
            Noakhali-Dhaka route have had no reliable online booking option for years. We are starting with truth: 
            physically verified bus audits, honest seat information, and a manual concierge service that actually works. 
            We believe that building trust through transparency — not promises — is the only sustainable way to serve 
            this community. Every review, every audit, and every confirmed booking brings us closer to a fully automated 
            platform that will transform how Noakhali travels.
          </p>
        </div>
      </div>

      {/* SEO Hub */}
      <div style={{
        padding: '40px 0',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(0,0,0,0.15)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: 16, letterSpacing: '1px', textTransform: 'uppercase' }}>
            Popular Search Queries
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {seoLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: 13,
                  textDecoration: 'none',
                  padding: '5px 12px',
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.2s ease',
                  fontWeight: 400,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = 'white';
                  (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)';
                  (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.07)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)';
                  (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  (e.target as HTMLElement).style.background = 'transparent';
                }}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div style={{ padding: '56px 0 40px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32 }}>
            {/* Brand column */}
            <div style={{ gridColumn: 'span 1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ fontSize: 24, fontWeight: 900, background: 'linear-gradient(135deg, #6bb5ff, #00c47f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  CHOLO
                </div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontFamily: "'Noto Sans Bengali', sans-serif" }}>চলো</div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>
                The trusted online bus ticketing platform for Noakhali-Dhaka travelers.
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {['📘', '📷', '▶️'].map((emoji, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 16, textDecoration: 'none', transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
                  >
                    {emoji}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h5 style={{ fontWeight: 700, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 14, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  {category}
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {links.map((link) => (
                    <a
                      key={link.text}
                      href={link.href}
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: 14,
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        fontWeight: 400,
                      }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'white'; }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact bar */}
      <div style={{ padding: '24px 0', background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            {[
              { icon: '📍', label: 'Maijdee, Noakhali, Bangladesh' },
              { icon: '📞', label: '+880-1XXXXXXXXX' },
              { icon: '✉️', label: 'hello@cholo.com.bd' },
              { icon: '🕐', label: 'Support: 8 AM – 11 PM' },
            ].map(({ icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 14 }}>{icon}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: '20px 24px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, lineHeight: 1.5 }}>
          © {new Date().getFullYear()} CHOLO Tickets & Travel. Built with ❤️ in Noakhali, Bangladesh. 
          Designed to connect communities, one journey at a time.
          <br />
          <span style={{ fontSize: 11, marginTop: 4, display: 'block' }}>
            <a href="#privacy" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Privacy Policy</a>
            {' · '}
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Terms</a>
            {' · '}
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Sitemap</a>
          </span>
        </p>
      </div>
    </footer>
  );
}
