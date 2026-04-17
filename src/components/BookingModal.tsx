import { useState, useEffect } from 'react';
import { submitBookingRequest, type BookingRequest } from '../api';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: { origin?: string; destination?: string; date?: string };
}

type Step = 'form' | 'loading' | 'success' | 'error';

export default function BookingModal({ isOpen, onClose, prefillData }: BookingModalProps) {
  const [step, setStep] = useState<Step>('form');
  const [requestId, setRequestId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState<BookingRequest>({
    passenger_name: '',
    phone: '',
    email: '',
    origin: prefillData?.origin || 'Noakhali',
    destination: prefillData?.destination || 'Dhaka',
    desired_date: prefillData?.date || new Date().toISOString().split('T')[0],
    time_slot: '',
    operator_preference: '',
    seat_count: 1,
  });

  useEffect(() => {
    if (prefillData) {
      setForm((prev) => ({
        ...prev,
        origin: prefillData.origin || prev.origin,
        destination: prefillData.destination || prev.destination,
        desired_date: prefillData.date || prev.desired_date,
      }));
    }
  }, [prefillData]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep('form');
      setFormErrors({});
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    if (!form.passenger_name.trim()) errors.passenger_name = 'Name is required';
    if (!form.phone.trim()) errors.phone = 'Phone number is required';
    else if (!/^(?:\+880|880|0)?1[3-9]\d{8}$/.test(form.phone.replace(/\s/g, ''))) {
      errors.phone = 'Enter a valid Bangladeshi phone number';
    }
    if (!form.desired_date) errors.desired_date = 'Please select a date';
    if (!form.time_slot) errors.time_slot = 'Please select a preferred time';
    return Object.keys(errors).length === 0 ? true : (setFormErrors(errors), false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStep('loading');

    const result = await submitBookingRequest(form);

    if (result.success && result.data) {
      setRequestId(result.data.request_id);
      setStep('success');
    } else {
      setErrorMsg(result.message || 'Something went wrong. Please try again.');
      setStep('error');
    }
  };

  const updateField = (field: keyof BookingRequest, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) setFormErrors((prev) => ({ ...prev, [field]: '' }));
  };

  if (!isOpen) return null;

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 10,
    border: '1.5px solid var(--cholo-grey-light)',
    fontSize: 14,
    color: 'var(--cholo-text-dark)',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.2s ease',
    background: 'white',
  };

  const errorStyle: React.CSSProperties = {
    fontSize: 12,
    color: '#ef4444',
    marginTop: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--cholo-text-dark)',
    marginBottom: 6,
    display: 'block',
  };

  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        {/* Modal Header */}
        <div style={{
          background: 'linear-gradient(135deg, #003181 0%, #0047AB 50%, #00A36C 100%)',
          borderRadius: '24px 24px 0 0',
          padding: '24px 28px',
          position: 'relative',
        }}>
          {/* Logo mark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <div style={{
              width: 32,
              height: 32,
              background: 'rgba(255,255,255,0.2)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
            }}>
              🚌
            </div>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: 600, letterSpacing: 1 }}>CHOLO TICKETS & TRAVEL</span>
          </div>
          <h2 style={{ color: 'white', fontWeight: 900, fontSize: 22, lineHeight: 1.2 }}>
            Request Your Booking
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, marginTop: 4 }}>
            We'll confirm your seat via SMS within 2 hours.
          </p>

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.35)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.2)'; }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px' }}>
          {/* STEP: FORM */}
          {step === 'form' && (
            <form onSubmit={handleSubmit} noValidate>
              {/* Concierge notice */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(0,71,171,0.06), rgba(0,163,108,0.06))',
                border: '1px solid rgba(0,71,171,0.15)',
                borderRadius: 12,
                padding: '12px 16px',
                marginBottom: 24,
                display: 'flex',
                gap: 10,
                alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>ℹ️</span>
                <p style={{ fontSize: 12.5, color: 'var(--cholo-text-mid)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--cholo-blue)' }}>Phase 1 Concierge Model:</strong> Submit your request and our ground team will 
                  physically secure your seat at the terminal counter. You'll receive SMS confirmation within 2 hours.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {/* Passenger Name */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>
                    Full Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rafiqul Islam"
                    value={form.passenger_name}
                    onChange={(e) => updateField('passenger_name', e.target.value)}
                    style={{
                      ...inputStyle,
                      borderColor: formErrors.passenger_name ? '#ef4444' : 'var(--cholo-grey-light)',
                    }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#0047AB'; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = formErrors.passenger_name ? '#ef4444' : 'var(--cholo-grey-light)'; }}
                  />
                  {formErrors.passenger_name && <div style={errorStyle}>⚠ {formErrors.passenger_name}</div>}
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>
                    Phone Number <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    style={{
                      ...inputStyle,
                      borderColor: formErrors.phone ? '#ef4444' : 'var(--cholo-grey-light)',
                    }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#0047AB'; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = formErrors.phone ? '#ef4444' : 'var(--cholo-grey-light)'; }}
                  />
                  {formErrors.phone && <div style={errorStyle}>⚠ {formErrors.phone}</div>}
                </div>

                {/* Email (optional) */}
                <div>
                  <label style={labelStyle}>Email (Optional)</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#0047AB'; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--cholo-grey-light)'; }}
                  />
                </div>

                {/* Origin */}
                <div>
                  <label style={labelStyle}>
                    From <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <select
                    value={form.origin}
                    onChange={(e) => updateField('origin', e.target.value)}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#0047AB'; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--cholo-grey-light)'; }}
                  >
                    <option value="Noakhali">Noakhali (Maijdee)</option>
                    <option value="Sonapur">Sonapur</option>
                    <option value="Chaumuhani">Chaumuhani</option>
                    <option value="Feni">Feni</option>
                  </select>
                </div>

                {/* Destination */}
                <div>
                  <label style={labelStyle}>
                    To <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <select
                    value={form.destination}
                    onChange={(e) => updateField('destination', e.target.value)}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#0047AB'; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--cholo-grey-light)'; }}
                  >
                    <option value="Dhaka">Dhaka (Sayedabad)</option>
                    <option value="Dhaka_Mohakhali">Dhaka (Mohakhali)</option>
                    <option value="Cumilla">Cumilla</option>
                    <option value="Chittagong">Chittagong</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label style={labelStyle}>
                    Travel Date <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="date"
                    value={form.desired_date}
                    onChange={(e) => updateField('desired_date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    style={{
                      ...inputStyle,
                      cursor: 'pointer',
                      borderColor: formErrors.desired_date ? '#ef4444' : 'var(--cholo-grey-light)',
                    }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#0047AB'; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = formErrors.desired_date ? '#ef4444' : 'var(--cholo-grey-light)'; }}
                  />
                  {formErrors.desired_date && <div style={errorStyle}>⚠ {formErrors.desired_date}</div>}
                </div>

                {/* Time Slot */}
                <div>
                  <label style={labelStyle}>
                    Preferred Time <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <select
                    value={form.time_slot}
                    onChange={(e) => updateField('time_slot', e.target.value)}
                    style={{
                      ...inputStyle,
                      cursor: 'pointer',
                      borderColor: formErrors.time_slot ? '#ef4444' : 'var(--cholo-grey-light)',
                    }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#0047AB'; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = formErrors.time_slot ? '#ef4444' : 'var(--cholo-grey-light)'; }}
                  >
                    <option value="">Select time slot</option>
                    <option value="08:00 PM">08:00 PM — Evening</option>
                    <option value="10:00 PM">10:00 PM — Night (Himachol)</option>
                    <option value="10:30 PM">10:30 PM — Night (Ekaishay)</option>
                    <option value="11:00 PM">11:00 PM — Late Night</option>
                    <option value="flexible">Flexible — Any Available</option>
                  </select>
                  {formErrors.time_slot && <div style={errorStyle}>⚠ {formErrors.time_slot}</div>}
                </div>

                {/* Operator Preference */}
                <div>
                  <label style={labelStyle}>Operator Preference</label>
                  <select
                    value={form.operator_preference}
                    onChange={(e) => updateField('operator_preference', e.target.value)}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#0047AB'; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--cholo-grey-light)'; }}
                  >
                    <option value="">No preference (best available)</option>
                    <option value="Lal Sobuj">Lal Sobuj</option>
                    <option value="Himachol">Himachol (Volvo AC)</option>
                    <option value="Ekaishay">Ekaishay</option>
                    <option value="Royal">Royal</option>
                  </select>
                </div>

                {/* Seat Count */}
                <div>
                  <label style={labelStyle}>Number of Seats</label>
                  <select
                    value={form.seat_count}
                    onChange={(e) => updateField('seat_count', Number(e.target.value))}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#0047AB'; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--cholo-grey-light)'; }}
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n} seat{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Privacy note */}
              <p style={{ fontSize: 11.5, color: 'var(--cholo-text-mid)', marginTop: 16, lineHeight: 1.6 }}>
                🔒 Your information is safe. We only use your phone number to send booking confirmation SMS. 
                We never sell your data. See our{' '}
                <a href="#privacy" style={{ color: 'var(--cholo-blue)', fontWeight: 600 }}>Privacy Policy</a>.
              </p>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #FF8C00, #FFa520)',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: 15,
                  padding: '15px',
                  borderRadius: 12,
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: 20,
                  boxShadow: '0 4px 16px rgba(255,140,0,0.4)',
                  transition: 'all 0.25s ease',
                  letterSpacing: '0.3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(255,140,0,0.5)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(255,140,0,0.4)';
                }}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Submit Booking Request
              </button>
            </form>
          )}

          {/* STEP: LOADING */}
          {step === 'loading' && (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                border: '4px solid var(--cholo-grey-light)',
                borderTopColor: '#0047AB',
                animation: 'spin 0.8s linear infinite',
                margin: '0 auto 24px',
              }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: 'var(--cholo-text-dark)', marginBottom: 8 }}>
                Processing your request...
              </h3>
              <p style={{ color: 'var(--cholo-text-mid)', fontSize: 14 }}>
                Our team is checking seat availability for you.
              </p>
            </div>
          )}

          {/* STEP: SUCCESS */}
          {step === 'success' && (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(0,163,108,0.15), rgba(0,71,171,0.15))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: 36,
              }}>
                🎉
              </div>
              <h3 style={{ fontWeight: 900, fontSize: 22, color: 'var(--cholo-text-dark)', marginBottom: 8 }}>
                Request Submitted!
              </h3>
              <div style={{
                background: 'linear-gradient(135deg, rgba(0,71,171,0.06), rgba(0,163,108,0.06))',
                border: '1px solid rgba(0,163,108,0.2)',
                borderRadius: 12,
                padding: '16px',
                margin: '16px 0',
              }}>
                <div style={{ fontSize: 12, color: 'var(--cholo-text-mid)', marginBottom: 4 }}>Your Request ID</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--cholo-blue)', letterSpacing: 1 }}>{requestId}</div>
              </div>
              <p style={{ color: 'var(--cholo-text-mid)', fontSize: 14, lineHeight: 1.65, marginBottom: 20, maxWidth: 320, margin: '0 auto 20px' }}>
                You'll receive an SMS confirmation within 2 hours. Our team will physically secure your seat at the terminal.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { icon: '📱', text: 'SMS confirmation sent to your phone' },
                  { icon: '🎫', text: 'Seat physically held at terminal counter' },
                  { icon: '✅', text: 'Full refund if unavailable' },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(0,163,108,0.05)', borderRadius: 10, padding: '10px 14px' }}>
                    <span>{icon}</span>
                    <span style={{ fontSize: 13, color: 'var(--cholo-text-mid)', fontWeight: 500 }}>{text}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={onClose}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #0047AB, #00A36C)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: 15,
                  padding: '14px',
                  borderRadius: 12,
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: 24,
                  boxShadow: '0 4px 16px rgba(0,71,171,0.3)',
                }}
              >
                Done — I'll wait for my SMS
              </button>
            </div>
          )}

          {/* STEP: ERROR */}
          {step === 'error' && (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>😞</div>
              <h3 style={{ fontWeight: 800, fontSize: 20, color: 'var(--cholo-text-dark)', marginBottom: 8 }}>
                Something went wrong
              </h3>
              <p style={{ color: '#ef4444', fontSize: 14, marginBottom: 24 }}>{errorMsg}</p>
              <button
                onClick={() => setStep('form')}
                style={{
                  background: 'linear-gradient(135deg, #0047AB, #00A36C)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: 14,
                  padding: '12px 28px',
                  borderRadius: 12,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
