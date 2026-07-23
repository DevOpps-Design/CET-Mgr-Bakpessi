import { motion } from 'framer-motion';
import { Calendar, Building, GraduationCap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const etapes = [
    {
      annee: '2005',
      titre: 'Fondation du CETMB',
      texte: 'Ouverture des premières filières techniques avec une ambition claire : offrir une formation professionnelle de qualité aux jeunes de Kara et de la région.',
      icone: Calendar
    },
    {
      annee: '2012',
      titre: 'Expansion et agrément de l\'État',
      texte: 'Reconnaissance officielle par l\'État togolais et création de nouvelles séries pour diversifier l\'offre de formation dans les domaines industriels et tertiaires.',
      icone: Building
    },
    {
      annee: '2020',
      titre: 'Modernisation des infrastructures',
      texte: 'Construction de nouveaux laboratoires, réhabilitation des ateliers et intégration du numérique dans tous les cursus d\'enseignement.',
      icone: GraduationCap
    }
  ];
export default function HistorySection() {
  return (
    <motion.section
      className="section-padding"
      style={{ backgroundColor: '#f4fbfa' }}
      variants={containerVariants}
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
              Une histoire de croissance<br />et d'engagement
            </h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div className="row g-4" variants={containerVariants}>
          {etapes.map((etape, index) => {
            const Icone = etape.icone;
            return (
              <motion.div key={index} className="col-lg-4" variants={itemVariants}>
                <motion.div
                  style={{
                    backgroundColor: index === 1 ? 'var(--cetmb-primary)' : '#ffffff',
                    padding: '3.5rem 2rem',
                    border: '1px solid var(--cetmb-primary)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Grand numéro d'année */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '-2.5rem',
                      left: '1rem',
                      fontSize: 'clamp(80px, 12vw, 140px)',
                      fontWeight: 800,
                      color: index === 1 ? 'rgba(255,255,255,0.15)' : 'rgba(23, 102, 9, 0.08)',
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1,
                      pointerEvents: 'none'
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {etape.annee}
                  </motion.div>

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{
                        width: '48px',
                        height: '48px',
                      backgroundColor: index === 1 ? '#ffffff' : 'var(--cetmb-primary)'
                      }}>
                      <Icone size={24} className={index === 1 ? 'text-dark' : 'text-white'} />
                    </div>
                  </div>
                    <h3 className="h5 mb-3" style={{ fontFamily: 'var(--font-heading)', color: index === 1 ? '#ffffff' : 'inherit' }}>{etape.titre}</h3>
                    <p className="mb-0" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.8, color: index === 1 ? 'rgba(255,255,255,0.85)' : '' }}>{etape.texte}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
