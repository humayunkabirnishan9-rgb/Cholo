import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VerifiedAdvantage from './components/VerifiedAdvantage';
import AuditShowcase from './components/AuditShowcase';
import OperatorHub from './components/OperatorHub';
import PassengerVoice from './components/PassengerVoice';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import SearchResultsModal from './components/SearchResultsModal';
import type { SearchQuery, OperatorSchedule } from './api';

function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<SearchQuery | null>(null);
  const [bookingPrefill, setBookingPrefill] = useState<{
    origin?: string; destination?: string; date?: string; operator?: string;
  }>({});
  const [toast, setToast] = useState<{ visible: boolean; message: string; type: 'success' | 'info' }>({
    visible: false,
    message: '',
    type: 'success',
  });

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 4500);
  };

  const handleSearch = (query: SearchQuery) => {
    setSearchQuery(query);
    setSearchModalOpen(true);
  };

  const handleSelectBus = (bus: OperatorSchedule) => {
    setSearchModalOpen(false);
    setBookingPrefill({
      origin: searchQuery?.origin,
      destination: searchQuery?.destination,
      date: searchQuery?.date,
      operator: bus.operator_name,
    });
    setBookingModalOpen(true);
  };

  const handleBookingSuccess = () => {
    showToast('🎉 Booking request sent! SMS confirmation coming within 2 hours.', 'success');
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navbar */}
      <Navbar onBookingClick={() => { setBookingPrefill({}); setBookingModalOpen(true); }} />

      {/* Hero */}
      <Hero
        onSearch={handleSearch}
        onBookingClick={() => { setBookingPrefill({}); setBookingModalOpen(true); }}
      />

      {/* Section 2: Verified Advantage (USP) */}
      <VerifiedAdvantage />

      {/* Section: Audit Showcase */}
      <AuditShowcase />

      {/* Section 3: Operator Hub */}
      <OperatorHub onPartnerClick={() => showToast('Partner inquiry noted! We will reach out soon.', 'info')} />

      {/* Section 4: Passenger Voice / Reviews */}
      <PassengerVoice />

      {/* CTA Mid-section Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #003181 0%, #0047AB 50%, #00A36C 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🚌</div>
          <h2 style={{
            fontWeight: 900,
            fontSize: 'clamp(24px, 3.5vw, 38px)',
            color: 'white',
            lineHeight: 1.2,
            marginBottom: 14,
            letterSpacing: '-0.5px',
          }}>
            Ready to Travel Smarter?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 17, marginBottom: 32, lineHeight: 1.65 }}>
            Join thousands of Noakhali travelers who are done with counter hassles.
            Book smarter. Travel better. Choose CHOLO.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => { setBookingPrefill({}); setBookingModalOpen(true); }}
              style={{
                background: 'linear-gradient(135deg, #FF8C00, #FFa520)',
                color: 'white',
                fontWeight: 800,
                fontSize: 16,
                padding: '16px 36px',
                borderRadius: 14,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 6px 24px rgba(255,140,0,0.45)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 32px rgba(255,140,0,0.6)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(255,140,0,0.45)';
              }}
            >
              🎫 Pre-book Your Seat Now
            </button>
            <a
              href="#verified"
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                fontWeight: 700,
                fontSize: 16,
                padding: '16px 32px',
                borderRadius: 14,
                border: '2px solid rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.6)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)';
              }}
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <SearchResultsModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        searchQuery={searchQuery}
        onSelectBus={handleSelectBus}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => { setBookingModalOpen(false); if (bookingPrefill.operator) handleBookingSuccess(); }}
        prefillData={bookingPrefill}
      />

      {/* Toast Notification */}
      {toast.visible && (
        <div className="toast">
          <div style={{
            width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
            background: toast.type === 'success'
              ? 'linear-gradient(135deg, rgba(0,163,108,0.15), rgba(0,71,171,0.15))'
              : 'rgba(255,140,0,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
          }}>
            {toast.type === 'success' ? '✅' : 'ℹ️'}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--cholo-text-dark)', marginBottom: 2 }}>
              {toast.type === 'success' ? 'Success!' : 'Got it!'}
            </div>
            <div style={{ fontSize: 13, color: 'var(--cholo-text-mid)', lineHeight: 1.5 }}>
              {toast.message}
            </div>
          </div>
          <button
            onClick={() => setToast((t) => ({ ...t, visible: false }))}
            style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: 'auto', color: 'var(--cholo-text-mid)', padding: 4, flexShrink: 0 }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Privacy Policy anchor */}
      <div id="privacy" style={{ height: 1, visibility: 'hidden' }} />
    </div>
  );
}

export default App;
