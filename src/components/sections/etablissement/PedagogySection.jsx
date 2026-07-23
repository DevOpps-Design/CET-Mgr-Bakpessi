import { motion } from 'framer-motion';
import { Wrench, BookOpen, Shield, Monitor, Users, Briefcase } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const avantages = [
    { titre: 'Équipements Modernes', texte: 'Laboratoires et ateliers équipés pour la pratique réelle.', icone: Wrench },
    { titre: 'Pédagogie Éprouvée', texte: 'Un corps professoral expérimenté et dévoué.', icone: BookOpen },
    { titre: 'Cadre Sécurisé', texte: 'Un environnement sain et discipliné.', icone: Shield },
    { titre: 'Innovation Digitale', texte: 'Initiation au numérique dès la seconde.', icone: Monitor },
    { titre: 'Vie Associative', texte: 'Clubs pour développer le leadership.', icone: Users },
    { titre: 'Insertion Pro', texte: 'Partenariats pour les stages.', icone: Briefcase }
  ];
export default function PedagogySection() {
  return (
    <motion.section
      className="section-padding"
      style={{ backgroundColor: '#f4fbfa' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="container">
        {/* En-tête */}
        <motion.div className="row mb-5" variants={itemVariants}>
          <div className="col-lg-8">
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}>
              Les avantages du CETMB
            </h2>
            <p className="text-muted mt-3" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.8, maxWidth: '600px' }}>
              Au-delà des résultats, nous offrons un environnement propice à la réussite de chaque élève.
            </p>
          </div>
        </motion.div>

        {/* Cartes 3 par ligne */}
        <div className="row g-4">
          {avantages.map((avantage, index) => {
            const Icone = avantage.icone;
            return (
              <motion.div key={index} className="col-md-4 col-12" variants={itemVariants}>
                <motion.div
                  className="h-100"
                  style={{
                    padding: '2.5rem 2rem',
                    backgroundColor: index % 3 === 1 ? 'var(--cetmb-primary)' : '#ffffff',
                    border: '1px solid var(--cetmb-primary)',
                    borderBottom: '1px solid var(--cetmb-primary)'
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="d-flex align-items-center justify-content-center mb-4"
                    style={{ width: '60px', height: '60px', backgroundColor: index % 3 === 1 ? '#ffffff' : 'var(--cetmb-primary)' }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Icone size={28} className={index % 3 === 1 ? 'text-dark' : 'text-white'} />
                  </motion.div>
                  <h3 className="h5 mb-3" style={{ fontFamily: 'var(--font-heading)', color: index % 3 === 1 ? '#ffffff' : 'inherit' }}>{avantage.titre}</h3>
                  <p className="mb-0" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.8, color: index % 3 === 1 ? 'rgba(255,255,255,0.85)' : '' }}>{avantage.texte}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
