export default function LegalLayout({ title, date, children }) {
  return (
    <section style={{ paddingTop: '140px', paddingBottom: '7rem', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="mb-5">
              <h1 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}>
                {title}
              </h1>
              {date && (
                <p className="text-muted mt-3" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                  {date}
                </p>
              )}
            </div>
            <div style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
