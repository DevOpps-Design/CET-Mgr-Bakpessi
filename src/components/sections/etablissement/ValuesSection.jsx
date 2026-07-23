import { motion } from 'framer-motion';
import { Eye, Target, Quote, FileCheck } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const valeurs = [
    {
      titre: 'Vision',
      texte: 'Devenir le pôle d\'excellence de la région de Kara pour l\'enseignement technique et technologique.',
      icone: Eye
    },
    {
      titre: 'Mission',
      texte: 'Offrir une éducation technique de haut niveau, accessible, pratique et alignée sur les besoins du marché du travail.',
      icone: Target
    },
    {
      titre: 'Devise',
      texte: 'Travail – Discipline – Réussite.',
      icone: Quote
    }
  ];
export default function ValuesSection() {
  return (
    <motion.section
      className="section-padding"
      style={{ backgroundColor: '#ffffff' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Colonne gauche : Textes */}
          <motion.div className="col-lg-6" variants={itemVariants}>
            <div className="mb-5">
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}>
                Les piliers de notre excellence
              </h2>
            </div>

            <motion.div className="d-flex flex-column gap-4" variants={sectionVariants}>
              {valeurs.map((valeur, index) => {
                const Icone = valeur.icone;
                return (
                  <motion.div key={index} className="d-flex align-items-start gap-3" variants={itemVariants}>
                    <motion.div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: '56px',
                        height: '56px',
                        backgroundColor: 'var(--cetmb-primary)'
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <Icone size={28} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="h5 fw-bold mb-2">{valeur.titre}</h3>
                      <p className="text-muted mb-0" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.8 }}>{valeur.texte}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Statut mis en exergue */}
            <motion.div
              className="mt-5"
              style={{
                padding: '2rem 2.5rem',
                backgroundColor: 'var(--cetmb-primary)',
                border: 'none'
              }}
              variants={itemVariants}
            >
              <div className="d-flex align-items-start gap-3">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <FileCheck size={28} className="text-dark" />
                </div>
                <div>
                  <h3 className="h5 fw-bold mb-2 text-white">Statut</h3>
                  <p className="mb-0 text-white" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.8, fontWeight: 600, opacity: 0.9 }}>
                    Établissement technique privé, reconnu et agréé par l'État togolais.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne droite : Image */}
          <motion.div className="col-lg-6" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/Assets/Images/children_classroom_2.jpg"
                alt="Élèves CETMB"
                className="img-fluid"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: 'clamp(300px, 50vw, 500px)',
                  objectFit: 'cover',
                  border: 0
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
