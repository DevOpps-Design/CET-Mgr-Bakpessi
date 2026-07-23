import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cetmb_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cetmb_cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleRefuse = () => {
    localStorage.setItem('cetmb_cookie_consent', 'refused');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="position-fixed bottom-0 start-0 w-100"
      style={{
        zIndex: 9999,
        backgroundColor: '#a26c21',
        color: 'white',
        padding: '1.5rem 0'
      }}
    >
      <div className="container">
        <div className="row align-items-center g-3">
          <div className="col-lg-8">
            <div className="d-flex align-items-center">
              <Cookie size={96} className="me-3 flex-shrink-0" />
              <p className="mb-0" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies strictement nécessaires au bon fonctionnement du site (session, sécurité).
                Conformément au RGPD, vous pouvez accepter ou refuser ces cookies à tout moment.
                <a href="/cookies" className="text-white text-decoration-underline ms-1" style={{ fontWeight: 600 }}>
                  En savoir plus
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <div className="d-flex gap-3 justify-content-lg-end">
              <button
                onClick={handleRefuse}
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  padding: '0.75rem 2rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderRadius: 0
                }}
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                style={{
                  backgroundColor: 'white',
                  color: '#a26c21',
                  border: '2px solid white',
                  padding: '0.75rem 2rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderRadius: 0
                }}
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
