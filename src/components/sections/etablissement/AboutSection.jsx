export default function AboutSection() {
  return (
    <section className="position-relative section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Image à gauche avec débordement contrôlé */}
          <div className="col-lg-6 position-relative">
            <div className="position-relative" style={{ marginTop: '0', marginBottom: '0' }}>
              <img 
                src="/Assets/Images/student_boy_classroom.jpg" 
                alt="Élève CETMB" 
                className="img-fluid"
                style={{ 
                  width: '100%',
                  height: 'clamp(300px, 50vw, 500px)',
                  objectFit: 'cover',
                  border: 0
                }} 
              />
              {/* Badge années en overlay */}
              <div className="position-absolute" style={{
                bottom: '-1.5rem',
                right: '-1.5rem',
                backgroundColor: 'var(--cetmb-primary)',
                padding: '1.5rem 2rem',
                color: 'white',
                border: 0
              }}>
                <div className="fw-bolder" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                  19
                </div>
                <div style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)', opacity: 0.9 }}>
                  Années d'excellence
                </div>
              </div>
            </div>
          </div>
          
          {/* Texte à droite avec ligne de séparation */}
          <div className="col-lg-6">
             <div className="ps-lg-5">
               <h2 className="mb-4" style={{ 
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', 
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}>
                Une référence de l'enseignement technique au Togo
              </h2>
              <p className="mb-4 text-secondary" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.9 }}>
                Situé au cœur de la ville de Kara, le CETMB est plus qu'un établissement scolaire : c'est un lieu où les jeunes apprennent un métier et développent leur savoir-faire technique.
              </p>
              <p className="mb-4 text-secondary" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.9 }}>
                Le Collège Technique d'Enseignement MGR BAKPESSI (C.E.T.M.B) forme des techniciens et cadres qui contribuent au développement du Togo.
              </p>
              <div className="content-card">
                <p className="mb-0 text-secondary" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.9 }}>
                  Depuis notre création, nous avons pour mission de former une élite technique capable de répondre aux besoins industriels et technologiques du pays, grâce à un équilibre entre cours théoriques et pratique intensive en ateliers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}