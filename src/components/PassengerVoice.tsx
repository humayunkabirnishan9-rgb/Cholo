export default function PassengerVoice() {
  const reviews = [
    {
      id: 1,
      name: 'Rafiqul Islam',
      initials: 'RI',
      avatarColor: '#0047AB',
      location: 'Maijdee, Noakhali',
      operator: 'Himachol',
      trip: 'Noakhali → Dhaka, 10:00 PM',
      rating: 5,
      date: '15 Jun 2025',
      title: 'Best AC bus on this route!',
      review:
        'The seats were incredibly comfortable — I actually slept the entire journey! The AC was perfect, not too cold. Driver was professional and arrived exactly on time at Sayedabad. CHOLO\'s photos matched exactly what I saw in real life.',
      photos: true,
      tags: ['Great Legroom', 'Punctual', 'Clean AC'],
      comfort_score: { legroom: 5, ac: 5, cleanliness: 5, driving: 5 },
      verified: true,
    },
    {
      id: 2,
      name: 'Nasrin Akter',
      initials: 'NA',
      avatarColor: '#00A36C',
      location: 'Sonapur, Noakhali',
      operator: 'Ekaishay',
      trip: 'Sonapur → Dhaka, 10:30 PM',
      rating: 4,
      date: '22 Jun 2025',
      title: 'Excellent legroom — finally!',
      review:
        'I am 6 feet tall and always struggle with bus seats. The Ekaishay 10:30 PM trip has genuinely excellent legroom — I was shocked. The AC could be slightly colder but otherwise it was a smooth 5-hour ride. Will book again through CHOLO.',
      photos: false,
      tags: ['Best Legroom', 'Good Value', 'Smooth Ride'],
      comfort_score: { legroom: 5, ac: 4, cleanliness: 4, driving: 4 },
      verified: true,
    },
    {
      id: 3,
      name: 'Karim Uddin',
      initials: 'KU',
      avatarColor: '#FF8C00',
      location: 'Chaumuhani, Noakhali',
      operator: 'Lal Sobuj',
      trip: 'Noakhali → Dhaka, 8:00 PM',
      rating: 5,
      date: '28 Jun 2025',
      title: 'Pre-booking was seamless!',
      review:
        'I used CHOLO\'s pre-booking service for the first time. Got an SMS confirmation within 90 minutes. When I arrived at the terminal, my seat was actually held. No arguments with the counter staff. This is exactly what Noakhali needed!',
      photos: true,
      tags: ['Easy Booking', 'Seat Secured', 'Great Service'],
      comfort_score: { legroom: 4, ac: 5, cleanliness: 5, driving: 5 },
      verified: true,
    },
    {
      id: 4,
      name: 'Shirin Begum',
      initials: 'SB',
      avatarColor: '#6366f1',
      location: 'Maijdee, Noakhali',
      operator: 'Himachol',
      trip: 'Dhaka → Noakhali, 9:30 PM',
      rating: 4,
      date: '5 Jul 2025',
      title: 'Return journey was comfortable',
      review:
        'Booked the return journey too. The bus was slightly delayed by 20 minutes from Sayedabad due to traffic, but the ride itself was great. Seats were clean, no unpleasant smell, and the driver kept a steady pace. Highly recommended for ladies traveling alone — very safe.',
      photos: false,
      tags: ['Safe for Women', 'Clean Seats', 'Good Driver'],
      comfort_score: { legroom: 4, ac: 4, cleanliness: 5, driving: 5 },
      verified: true,
    },
  ];

  const renderStars = (rating: number, size = 16) =>
    Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill={i < rating ? '#f59e0b' : '#e5e7eb'}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));

  const renderComfortBar = (label: string, score: number, color: string) => (
    <div key={label} style={{ marginBottom: 6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <span style={{ fontSize: 11, color: 'var(--cholo-text-mid)', fontWeight: 500 }}>{label}</span>
        <span style={{ fontSize: 11, fontWeight: 700, color }}>{score}/5</span>
      </div>
      <div style={{ background: '#f0f4ff', borderRadius: 4, height: 5, overflow: 'hidden' }}>
        <div style={{
          background: color,
          width: `${(score / 5) * 100}%`,
          height: '100%',
          borderRadius: 4,
          transition: 'width 1s ease',
        }} />
      </div>
    </div>
  );

  return (
    <section id="reviews" style={{ background: 'var(--cholo-off-white)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(245,158,11,0.1)',
            border: '1px solid rgba(245,158,11,0.25)',
            borderRadius: 999,
            padding: '6px 16px',
            marginBottom: 14,
          }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#d97706', letterSpacing: '0.5px' }}>
              ⭐ REAL PASSENGER REVIEWS
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: 900,
            color: 'var(--cholo-text-dark)',
            lineHeight: 1.15,
            letterSpacing: '-0.5px',
            marginBottom: 12,
          }}>
            The Passenger Voice
          </h2>
          <p style={{
            color: 'var(--cholo-text-mid)',
            fontSize: 16,
            maxWidth: 500,
            margin: '0 auto',
            lineHeight: 1.65,
          }}>
            Real trips. Real seats. Real ratings from verified CHOLO travelers who post 
            photos and comfort scores after every journey.
          </p>

          {/* Aggregate stats */}
          <div style={{
            display: 'inline-flex',
            gap: 32,
            background: 'white',
            borderRadius: 16,
            padding: '16px 32px',
            boxShadow: '0 4px 20px rgba(0,49,129,0.08)',
            marginTop: 28,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {[
              { value: '4.7', label: 'Avg Rating', suffix: '★' },
              { value: '247', label: 'Reviews', suffix: '' },
              { value: '89%', label: 'Would Rebook', suffix: '' },
              { value: '156', label: 'Photos Uploaded', suffix: '' },
            ].map(({ value, label, suffix }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 24,
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #0047AB, #00A36C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {value}{suffix}
                </div>
                <div style={{ fontSize: 12, color: 'var(--cholo-text-mid)', fontWeight: 500, marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          marginBottom: 48,
        }}>
          {reviews.map((review) => (
            <article
              key={review.id}
              style={{
                background: 'white',
                borderRadius: 20,
                padding: '24px',
                boxShadow: '0 2px 16px rgba(0,49,129,0.06)',
                border: '1px solid rgba(0,71,171,0.07)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,49,129,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,49,129,0.06)';
              }}
            >
              {/* Reviewer header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: review.avatarColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 14,
                  fontWeight: 800,
                  flexShrink: 0,
                }}>
                  {review.initials}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--cholo-text-dark)' }}>{review.name}</span>
                    {review.verified && (
                      <svg width="14" height="14" fill="#00A36C" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--cholo-text-mid)' }}>{review.location}</div>
                </div>
                <div style={{ fontSize: 12, color: 'var(--cholo-text-mid)', whiteSpace: 'nowrap' }}>{review.date}</div>
              </div>

              {/* Trip info */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(0,71,171,0.06), rgba(0,163,108,0.06))',
                borderRadius: 10,
                padding: '8px 12px',
                marginBottom: 14,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                flexWrap: 'wrap',
              }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--cholo-blue)' }}>🚌 {review.operator}</span>
                <span style={{ fontSize: 11, color: 'var(--cholo-text-mid)' }}>·</span>
                <span style={{ fontSize: 12, color: 'var(--cholo-text-mid)' }}>{review.trip}</span>
              </div>

              {/* Rating */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 10 }}>
                {renderStars(review.rating)}
              </div>

              {/* Title */}
              <h4 style={{ fontWeight: 800, fontSize: 15, color: 'var(--cholo-text-dark)', marginBottom: 8, lineHeight: 1.3 }}>
                "{review.title}"
              </h4>

              {/* Review text */}
              <p style={{ fontSize: 13.5, color: 'var(--cholo-text-mid)', lineHeight: 1.65, marginBottom: 16 }}>
                {review.review}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {review.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: 'rgba(0,71,171,0.07)',
                      color: 'var(--cholo-blue)',
                      fontSize: 11,
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: 999,
                      border: '1px solid rgba(0,71,171,0.12)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
                {review.photos && (
                  <span style={{
                    background: 'rgba(0,163,108,0.08)',
                    color: '#00A36C',
                    fontSize: 11,
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: 999,
                    border: '1px solid rgba(0,163,108,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                  }}>
                    📸 Photos Added
                  </span>
                )}
              </div>

              {/* Comfort metrics */}
              <div style={{ borderTop: '1px solid var(--cholo-grey-light)', paddingTop: 14 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--cholo-text-mid)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Comfort Scores
                </div>
                {renderComfortBar('Legroom', review.comfort_score.legroom, '#0047AB')}
                {renderComfortBar('AC Quality', review.comfort_score.ac, '#00A36C')}
                {renderComfortBar('Cleanliness', review.comfort_score.cleanliness, '#FF8C00')}
                {renderComfortBar('Driver Safety', review.comfort_score.driving, '#6366f1')}
              </div>
            </article>
          ))}
        </div>

        {/* UGC CTA */}
        <div style={{
          textAlign: 'center',
          background: 'white',
          borderRadius: 20,
          padding: '40px',
          boxShadow: '0 4px 20px rgba(0,49,129,0.06)',
          border: '1px dashed rgba(0,71,171,0.2)',
        }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>📸</div>
          <h3 style={{ fontWeight: 800, fontSize: 20, color: 'var(--cholo-text-dark)', marginBottom: 8 }}>
            Traveled recently? Share your experience.
          </h3>
          <p style={{ color: 'var(--cholo-text-mid)', fontSize: 14, maxWidth: 420, margin: '0 auto 20px', lineHeight: 1.65 }}>
            Help fellow passengers by uploading photos and rating your specific trip. 
            Your review helps build the most accurate bus guide in Noakhali.
          </p>
          <button
            style={{
              background: 'linear-gradient(135deg, #FF8C00, #FFa520)',
              color: 'white',
              fontWeight: 700,
              fontSize: 14,
              padding: '12px 28px',
              borderRadius: 12,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(255,140,0,0.35)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(255,140,0,0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(255,140,0,0.35)';
            }}
          >
            Write a Review + Upload Photos
          </button>
          <p style={{ fontSize: 12, color: 'var(--cholo-text-mid)', marginTop: 10 }}>
            Reviews are verified against actual booking records. No fake reviews allowed.
          </p>
        </div>
      </div>
    </section>
  );
}
