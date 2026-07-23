import { FileText } from 'lucide-react';

const documents = [
    { nom: 'Acte de naissance', details: 'Copie certifiée conforme' },
    { nom: 'Relevés de notes', details: '3 dernières années' },
    { nom: 'Certificat de nationalité', details: 'Original obligatoire' },
    { nom: 'Photos d\'identité', details: '4 photos récentes' },
    { nom: 'Certificat médical', details: 'Moins de 3 mois' },
    { nom: 'Fiche de renseignement', details: 'À télécharger et remplir' }
  ];
export default function PiecesSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#f4fbfa' }}>
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Colonne gauche : Titre + Texte + Bouton */}
          <div className="col-lg-5">
            <div style={{ 
              padding: '0 2.5rem 0 0'
            }}>
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', 
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}>
                Pièces à fournir
              </h2>
              <p className="text-muted mt-3 mb-0" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.8 }}>
                Assurez-vous d'avoir tous les documents originaux lors de votre visite. Tout dossier incomplet ne pourra être traité.
              </p>
            </div>
          </div>

          {/* Colonne droite : Documents en 2 colonnes */}
          <div className="col-lg-7">
            <div className="row g-3">
              {documents.map((doc, index) => (
                <div key={index} className="col-md-6">
                  <div className="h-100" style={{ 
                    padding: '1rem 1.25rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--cetmb-primary)',
                    borderLeft: '1px solid var(--cetmb-primary)'
                  }}>
                    <div className="d-flex align-items-start gap-2">
                      <div 
                        className="d-flex align-items-center justify-content-center flex-shrink-0" 
                        style={{ 
                          width: '32px', 
                          height: '32px', 
                          backgroundColor: 'var(--cetmb-primary)',
                          border: 0
                        }}
                      >
                        <FileText size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className="h6 mb-0" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)' }}>{doc.nom}</h3>
                        <p className="text-muted mb-0" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.8rem)', lineHeight: 1.4 }}>{doc.details}</p>
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
