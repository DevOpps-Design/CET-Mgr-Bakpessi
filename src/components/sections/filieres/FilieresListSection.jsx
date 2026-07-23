import { Link } from 'react-router-dom';

const filieres = [
    {
      categorie: 'Filières industrielles',
      description: 'Les filières industrielles du CETMB forment des techniciens qualifiés capables de intervenir dans les domaines de la mécanique, de l\'électricité, de l\'électronique et des systèmes techniques modernes.',
        filieres: [
          { serie: 'F1', titre: 'Construction mécanique', description: 'Maîtrisez la conception et la fabrication de systèmes mécaniques complexes.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
          { serie: 'F2', titre: 'Electrotechnique', description: 'Apprenez à gérer la production et la distribution de l\'énergie électrique.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
          { serie: 'F3', titre: 'Electronique', description: 'Plongez au cœur des circuits et des systèmes embarqués.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
          { serie: 'E', titre: 'Mathématiques et Techniques', description: 'Formation scientifique avancée mêlant mathématiques, physique et technologie.', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
          { serie: 'F4', titre: 'Génie civil', description: 'Bâtiment, travaux publics et dessin technique.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        ],
    },
    {
      categorie: 'Filières tertiaires',
      description: 'Les filières tertiaires du CETMB forment des élèves capables d\'évoluer dans les domaines de la gestion, de l\'administration et de la comptabilité.',
        filieres: [
          { serie: 'G1', titre: 'Secrétariat', description: 'Formation axée sur la bureautique et l\'organisation administrative.', image: 'https://images.unsplash.com/photo-1587825140708-dfaf98ae5b6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
          { serie: 'G2', titre: 'Comptabilité', description: 'Apprentissage des bases de la comptabilité et de la gestion financière.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
          { serie: 'G3', titre: 'Gestion', description: 'Formation orientée vers la gestion des entreprises.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        ],
    },
  ];
export default function FilieresListSection() {
  return (
    <>
      {filieres.map((group, groupIndex) => (
        <section 
          key={group.categorie} 
          style={{ 
            paddingTop: '7rem', 
            paddingBottom: '7rem', 
            backgroundColor: groupIndex === 0 ? '#ffffff' : '#f4fbfa' 
          }}
        >
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
                  {group.categorie}
                </h2>
                <p className="text-muted mt-3" style={{ fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '600px' }}>
                  {group.description}
                </p>
              </div>
            </div>

            {/* Cartes 3 par ligne */}
            <div className="row g-4">
              {group.filieres.map((filiere) => (
                <div key={filiere.serie} className="col-md-6 col-lg-4">
                  <div className="h-100 d-flex flex-column" style={{ 
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--cetmb-primary)',
                    borderBottom: '1px solid var(--cetmb-primary)',
                    overflow: 'hidden'
                  }}>
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                      <img 
                        src={filiere.image} 
                        alt={filiere.titre}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="d-flex flex-column flex-grow-1 p-4">
                      <div className="d-flex align-items-center mb-3">
                        <span 
                          className="fw-bold me-2 px-2 py-1 flex-shrink-0"
                          style={{ backgroundColor: '#a26c21', color: '#ffffff', fontSize: '0.75rem' }}
                        >
                          {filiere.serie}
                        </span>
                        <h3 className="h5 mb-0" style={{ fontFamily: 'var(--font-heading)' }}>{filiere.titre}</h3>
                      </div>
                      <p className="text-muted mb-4 flex-grow-1" style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>{filiere.description}</p>
                      <Link 
                        to={`/filieres/${filiere.serie}`} 
                        className="btn-cetmb-outline d-inline-block align-self-start" 
                        style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem', textDecoration: 'none' }}
                      >
                        En Savoir plus <span style={{ marginLeft: '0.5rem' }}>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
