import { useState, useEffect } from 'react';
import { searchInventory, type OperatorSchedule, type SearchQuery } from '../api';

interface SearchResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: SearchQuery | null;
  onSelectBus: (bus: OperatorSchedule) => void;
}

export default function SearchResultsModal({ isOpen, onClose, searchQuery, onSelectBus }: SearchResultsModalProps) {
  const [loading, setLoading] = useState(false);
  const [operators, setOperators] = useState<OperatorSchedule[]>([]);

  useEffect(() => {
    if (isOpen && searchQuery) {
      setLoading(true);
      searchInventory(searchQuery).then((res) => {
        if (res.success && res.data) setOperators(res.data.operators);
        setLoading(false);
      });
    }
  }, [isOpen, searchQuery]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const renderStars = (score: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 20 20" fill={i < Math.floor(score) ? '#f59e0b' : i < score ? '#fcd34d' : '#e5e7eb'}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));

  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box" style={{ maxWidth: 640 }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #003181 0%, #0047AB 50%, #00A36C 100%)',
          borderRadius: '24px 24px 0 0',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            <h2 style={{ color: 'white', fontWeight: 900, fontSize: 18, lineHeight: 1.2 }}>
              {searchQuery?.origin} → {searchQuery?.destination}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, marginTop: 2 }}>
              {searchQuery?.date ? new Date(searchQuery.date).toLocaleDateString('en-BD', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : ''}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%',
              width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'white',
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          {loading && (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                border: '3px solid var(--cholo-grey-light)', borderTopColor: '#0047AB',
                animation: 'spin 0.8s linear infinite', margin: '0 auto 16px',
              }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              <p style={{ color: 'var(--cholo-text-mid)', fontSize: 14 }}>Checking seat availability...</p>
            </div>
          )}

          {!loading && operators.length > 0 && (
            <>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 16, flexWrap: 'wrap', gap: 8,
              }}>
                <p style={{ fontSize: 13, color: 'var(--cholo-text-mid)' }}>
                  <strong style={{ color: 'var(--cholo-text-dark)' }}>{operators.length} operators</strong> found for this route
                </p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: 'rgba(0,163,108,0.08)', borderRadius: 8, padding: '4px 12px',
                }}>
                  <svg width="12" height="12" fill="#00A36C" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span style={{ fontSize: 12, color: '#00A36C', fontWeight: 600 }}>Data Verified by CHOLO</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {operators.map((op) => (
                  <div
                    key={op.trip_id}
                    style={{
                      background: 'white',
                      borderRadius: 16,
                      border: '1.5px solid var(--cholo-grey-light)',
                      padding: '18px 20px',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#0047AB';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,71,171,0.12)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--cholo-grey-light)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                      <div style={{ flex: 1 }}>
                        {/* Operator name + type */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                          <span style={{ fontWeight: 800, fontSize: 16, color: 'var(--cholo-text-dark)' }}>{op.operator_name}</span>
                          <span style={{
                            fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 999,
                            background: op.vehicle_type === 'AC' || op.vehicle_type === 'Volvo AC'
                              ? 'rgba(0,71,171,0.08)' : 'rgba(0,0,0,0.05)',
                            color: op.vehicle_type === 'AC' || op.vehicle_type === 'Volvo AC'
                              ? '#0047AB' : '#6b7280',
                          }}>
                            ❄️ {op.vehicle_type}
                          </span>
                          {op.verified && (
                            <span style={{
                              fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 999,
                              background: 'rgba(0,163,108,0.08)', color: '#00A36C',
                            }}>
                              ✓ Verified
                            </span>
                          )}
                        </div>

                        {/* Time & Rating */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 13, color: 'var(--cholo-text-mid)' }}>🕐 {op.time}</span>
                          <span style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            {renderStars(op.comfort_score)}
                            <span style={{ fontSize: 12, color: 'var(--cholo-text-mid)', marginLeft: 3 }}>{op.comfort_score}</span>
                          </span>
                          <span style={{
                            fontSize: 12,
                            color: op.available_seats < 10 ? '#ef4444' : '#00A36C',
                            fontWeight: 600,
                          }}>
                            {op.available_seats} seats left
                          </span>
                        </div>
                      </div>

                      {/* Price + Book */}
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--cholo-text-dark)', lineHeight: 1 }}>
                          ৳{op.price}
                        </div>
                        <div style={{ fontSize: 11, color: 'var(--cholo-text-mid)', marginBottom: 10 }}>per seat</div>
                        <button
                          onClick={() => onSelectBus(op)}
                          style={{
                            background: 'linear-gradient(135deg, #FF8C00, #FFa520)',
                            color: 'white',
                            fontWeight: 700,
                            fontSize: 13,
                            padding: '9px 18px',
                            borderRadius: 10,
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 3px 12px rgba(255,140,0,0.35)',
                            transition: 'all 0.2s ease',
                            whiteSpace: 'nowrap',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                          }}
                        >
                          Pre-book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--cholo-text-mid)', marginTop: 16 }}>
                Pre-booking uses CHOLO's concierge model. Your seat is physically secured at the terminal counter.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
