export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f7fbfd 0%, #ffffff 100%)',
        color: '#0f1720',
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: '72px 24px 96px',
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignSelf: 'flex-start',
            padding: '8px 12px',
            borderRadius: 999,
            background: '#e8f4f6',
            color: '#0b6170',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          Temporary site update
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
              lineHeight: 1.04,
              fontWeight: 700,
              letterSpacing: '-0.03em',
            }}
          >
            Dr. Keith Tokuhara’s website is being thoughtfully rebuilt.
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: '1.12rem',
              lineHeight: 1.75,
              color: '#334155',
              maxWidth: 680,
            }}
          >
            For cataract surgery information, appointments, or to learn more about Dr. Tokuhara’s current practice,
            please visit Desert Vision Center.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          <a
            href="https://www.desertvisioncenter.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 22px',
              borderRadius: 999,
              background: '#0b6170',
              color: '#ffffff',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(11, 97, 112, 0.18)',
            }}
          >
            Visit Desert Vision Center
          </a>

          <a
            href="https://www.desertvisioncenter.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 22px',
              borderRadius: 999,
              background: '#ffffff',
              color: '#0b6170',
              fontWeight: 700,
              textDecoration: 'none',
              border: '1px solid #cbd5e1',
            }}
          >
            Contact the practice
          </a>
        </div>

        <section
          style={{
            marginTop: 8,
            padding: 24,
            borderRadius: 24,
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 40px rgba(15, 23, 32, 0.05)',
          }}
        >
          <h2 style={{ margin: '0 0 12px', fontSize: '1.25rem' }}>Desert Vision Center</h2>
          <div style={{ color: '#475569', lineHeight: 1.8, fontSize: '1rem' }}>
            <div>39000 Bob Hope Drive, Wright Building, Suite 105</div>
            <div>Rancho Mirage, CA 92270</div>
            <div>
              Phone:{' '}
              <a href="tel:7603404700" style={{ color: '#0b6170', textDecoration: 'none', fontWeight: 600 }}>
                760.340.4700
              </a>
            </div>
          </div>
        </section>

        <p style={{ margin: 0, color: '#64748b', fontSize: 14, lineHeight: 1.7 }}>
          This temporary page is here while a full redesign is in progress. Previously published material has been
          preserved offline and can be restored later.
        </p>
      </div>
    </main>
  );
}
