import { CheckCircle2 } from 'lucide-react';

const criteres = [
    'Être titulaire du BEPC ou équivalent',
    'Avoir un dossier scolaire satisfaisant',
    'Passer l\'entretien de motivation (selon la filière)',
    'Résider à Kara ou environnement proche'
  ];
const niveaux = [
    { niveau: 'Seconde', details: 'Toutes séries', color: 'var(--cetmb-primary)' },
    { niveau: 'Première', details: 'Toutes séries', color: '#E8843A' },
    { niveau: 'Terminale', details: 'BT/DECF', color: '#3B82F6' }
  ];
export default function ConditionsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#f4fbfa' }}>
      <div className="container">
        <div className="row g-5">
          {/* Critères d'admission */}
          <div className="col-lg-6">
            <div className="mb-4">
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', 
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}>
                Conditions d'admission
              </h2>
            </div>

            <div style={{ 
              padding: '2.5rem',
              backgroundColor: '#ffffff',
              border: '1px solid var(--cetmb-primary)',
              borderLeft: '1px solid var(--cetmb-primary)'
            }}>
              <ul className="list-unstyled mb-0">
                {criteres.map((critere, index) => (
                  <li key={index} className="d-flex align-items-start gap-3" style={{ marginBottom: index < criteres.length - 1 ? '1.5rem' : '0' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--cetmb-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.6 }}>{critere}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Niveaux et filières */}
          <div className="col-lg-6">
            <div className="mb-4">
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', 
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}>
                Niveaux et filières
              </h2>
            </div>

            <div className="row g-2">
              {niveaux.map((item, index) => (
                <div key={index} className="col-12">
                  <div style={{ 
                    padding: '0.875rem 1.5rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--cetmb-primary)',
                    borderLeft: `1px solid ${item.color}`
                  }}>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div className="fw-bold" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>{item.niveau}</div>
                        <div className="text-muted" style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>{item.details}</div>
                      </div>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        border: '1px solid var(--cetmb-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 600,
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--cetmb-primary)'
                      }}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
