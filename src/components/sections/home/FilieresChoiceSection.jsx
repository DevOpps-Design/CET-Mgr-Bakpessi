import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench, Calculator, Building, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function FilieresChoiceSection() {
  const filieres = [
    {
      serie: 'F1',
      titre: 'Fabrication mécanique',
      pitch: 'Apprenez à concevoir, usiner et contrôler des pièces mécaniques utilisées dans l\'industrie.',
      icon: Wrench,
      color: 'var(--cetmb-accent)',
      bgSoft: 'rgba(195, 176, 145, 0.15)',
      image: '/Assets/IMG/home/fabrication.jpg'
    },
    {
      serie: 'G1',
      titre: 'Comptabilité',
      pitch: 'Acquérez les bases solides de la comptabilité et de la gestion financière d\'entreprise.',
      icon: Calculator,
      color: 'var(--cetmb-accent)',
      bgSoft: 'rgba(195, 176, 145, 0.15)',
      image: '/Assets/IMG/home/comptabilite.jpg'
    },
    {
      serie: 'F3',
      titre: 'Génie civil',
      pitch: 'Formez-vous aux techniques de construction, de maçonnerie et de travaux publics.',
      icon: Building,
      color: 'var(--cetmb-accent)',
      bgSoft: 'rgba(195, 176, 145, 0.15)',
      image: '/Assets/IMG/home/genie-civil.jpg'
    }
  ];

  return (
    <motion.section
      className="py-5 py-lg-6 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="container">
        {/* Header */}
        <motion.div className="text-center mb-5" variants={itemVariants}>
          <h2 className="display-6 fw-bolder mb-3 text-dark">Choisissez votre filière, préparez votre métier</h2>
          <p className="fs-5 text-secondary mb-0">Chaque parcours ouvre sur des débouchés métiers concrets et immédiats.</p>
        </motion.div>

        {/* Filieres Grid - 3 cards */}
        <div className="row g-4 justify-content-center">
          {filieres.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.serie}
                className="col-md-6 col-lg-4 d-flex"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="card w-100 overflow-hidden d-flex flex-column"
                  style={{ border: '1px solid var(--cetmb-border)', borderRadius: 0 }}
                  whileHover={{ boxShadow: 'none' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Cover Image */}
                  <motion.div
                    className="w-100"
                    style={{
                      height: '240px',
                      backgroundImage: `url(${f.image})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: 'rgba(195, 176, 145, 0.1)'
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="card-body p-4 d-flex flex-column flex-grow-1">
                    {/* Icon & Series */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span className="fw-bold fs-5" style={{ color: f.color }}>{f.serie}</span>
                      <motion.div
                        className="d-flex align-items-center justify-content-center"
                        style={{ width: '48px', height: '48px', backgroundColor: f.bgSoft }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <Icon size={24} style={{ color: f.color }} />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="h5 fw-bold mb-3 text-dark" style={{ lineHeight: '1.4' }}>{f.titre}</h3>

                    {/* Pitch */}
                    <p className="text-secondary small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>{f.pitch}</p>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Link
                        to={`/filieres/${f.serie}`}
                        className="d-inline-flex align-items-center gap-2 px-3 py-2 fw-medium text-decoration-none transition-all"
                        style={{ 
                          color: f.color,
                          border: '1px solid transparent',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#a26c21';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.borderColor = '#a26c21';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = f.color;
                          e.currentTarget.style.borderColor = 'transparent';
                        }}
                      >
                        Découvrir <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-5 pt-4" variants={itemVariants}>
          <Link to="/filieres" className="btn-cetmb-primary">
            Voir toutes nos filières <ArrowRight size={18} className="ms-1" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
