import { FileText, Search, MessageSquare, CheckCircle } from 'lucide-react';

export default function ProcessSection() {
  const etapes = [
    { numero: '01', titre: 'Soumission du dossier', description: 'Remplissez le formulaire de pré-inscription en ligne.', icone: FileText },
    { numero: '02', titre: 'Étude de dossier', description: 'Notre équipe examine votre demande sous 48h.', icone: Search },
    { numero: '03', titre: 'Entretien', description: 'Un entretien (si nécessaire) avec notre service admissions.', icone: MessageSquare },
    { numero: '04', titre: 'Inscription', description: 'Confirmez votre place et finalisez l\'inscription.', icone: CheckCircle },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* En-tête */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', 
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}>
              Processus simplifié
            </h2>
            <p className="text-muted mt-3" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.8, maxWidth: '600px' }}>
              Nous avons conçu notre processus d'admission pour qu'il soit transparent, rapide et accessible à tous.
            </p>
          </div>
        </div>

        {/* Cartes 4 par ligne */}
        <div className="row g-4">
          {etapes.map((etape) => {
            const Icon = etape.icone;
            return (
              <div key={etape.numero} className="col-12 col-sm-6 col-lg-3">
                <div className="h-100" style={{ 
                  padding: '2.5rem 2rem',
                  backgroundColor: '#f4fbfa',
                  border: '1px solid var(--cetmb-primary)',
                  borderBottom: '1px solid var(--cetmb-primary)'
                }}>
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <div 
                      className="d-flex align-items-center justify-content-center" 
                      style={{ 
                        width: '56px', 
                        height: '56px', 
                        backgroundColor: 'var(--cetmb-primary)',
                        border: 0
                      }}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <div style={{ 
                      fontSize: 'clamp(2rem, 4vw, 3rem)', 
                      fontWeight: 800, 
                      color: 'rgba(23, 102, 9, 0.1)',
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1
                    }}>
                      {etape.numero}
                    </div>
                  </div>
                  <h3 className="h5 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{etape.titre}</h3>
                  <p className="text-muted mb-0" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.8 }}>{etape.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
