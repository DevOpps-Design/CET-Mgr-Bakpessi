import { motion } from 'framer-motion';
import { Wrench, Users, BookOpen, Award } from 'lucide-react';

const containerVariants = {
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

const atouts = [
    { titre: 'Formation orientée emploi', description: 'Programmes conçus avec les besoins du terrain pour une insertion rapide.', icon: Wrench, color: 'primary' },
    { titre: 'Encadrement de proximité', description: 'Enseignants disponibles et accompagnement personnalisé garanti.', icon: Users, color: 'accent' },
    { titre: 'Infrastructures adaptées', description: 'Ateliers et salles équipées pour un apprentissage 100% pratique.', icon: BookOpen, color: 'info' },
    { titre: 'Résultats solides', description: 'Taux de réussite exceptionnel aux examens nationaux chaque année.', icon: Award, color: 'success' },
  ];
export default function AtoutsSection() {
  return (
    <motion.section
      className="section py-5 text-white position-relative bg-dark-elegant overflow-hidden"
      style={{ marginTop: '0' }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="container position-relative z-1">
        <div className="row gy-4">
          <motion.div className="col-lg-5 d-flex flex-column justify-content-center" variants={itemVariants}>
            <h2 className="h1 fw-bold mb-3">Pourquoi les familles choisissent le CETMB</h2>
            <p className="fs-5 text-white mb-4">
              Un cadre sérieux, une pédagogie pratique et des résultats reconnus.
            </p>
            <motion.div className="d-flex flex-column gap-2" variants={containerVariants}>
              {atouts.map((a, i) => {
                const Icon = a.icon;
                return (
                  <motion.div key={i} className="d-flex align-items-start gap-3" variants={itemVariants}>
                    <motion.div
                      className={`atout-icon-wrapper flex-shrink-0 p-2`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      style={{ backgroundColor: '#a26c21', color: '#ffffff' }}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <h3 className="h6 fw-bold mb-1 text-white">{a.titre}</h3>
                      <p className="text-white mb-0 small">{a.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div className="col-lg-7" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="h-100">
              <div
                className="w-100 h-100"
                style={{
                  backgroundImage: 'url(/Assets/IMG/home/student4.jpg)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
