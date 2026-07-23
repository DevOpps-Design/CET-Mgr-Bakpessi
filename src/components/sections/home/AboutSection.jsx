import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

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

export default function AboutSection() {
  return (
    <motion.section
      className="section py-5 py-lg-6 bg-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="container">
        <div className="row align-items-center gy-5">
          <motion.div className="col-lg-6 position-relative pe-lg-5" variants={itemVariants}>
            <div className="about-image-grid">
              <img src="/Assets/IMG/home/class.jpg" alt="Salle de classe" className="img-fluid w-100" />
            </div>
          </motion.div>
          <motion.div className="col-lg-6 ps-lg-4" variants={itemVariants}>
            <span className="text-uppercase text-primary-cetmb fw-bold letter-spacing-md fs-7 mb-3 d-block">Notre Identité</span>
            <h2 className="display-6 fw-bold mb-4 text-dark lh-sm">Un lycée technique engagé pour l'avenir des jeunes</h2>
            <p className="lead text-muted mb-4 fs-6 lh-lg">
              Situé à Kara, le Collège Technique d'Enseignement MGR BAKPESSI (C.E.T.M.B) offre une formation technique exigeante et accessible.
            </p>
            <p className="text-muted mb-5 lh-lg">
              Notre mission est d'accompagner chaque élève vers un métier concret, en combinant cours théoriques, pratique en ateliers et encadrement pédagogique de proximité.
            </p>
            <ul className="list-unstyled custom-bullet-list mb-5">
              <li className="mb-3 d-flex align-items-start">
                <CheckCircle size={20} className="text-primary-cetmb mt-1 me-3 flex-shrink-0" />
                <span className="text-dark fw-medium">Pédagogie orientée vers la pratique en atelier</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <CheckCircle size={20} className="text-primary-cetmb mt-1 me-3 flex-shrink-0" />
                <span className="text-dark fw-medium">Encadrement rigoureux par des professionnels</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <CheckCircle size={20} className="text-primary-cetmb mt-1 me-3 flex-shrink-0" />
                <span className="text-dark fw-medium">Partenariats solides avec les entreprises locales</span>
              </li>
            </ul>
            <Link to="/etablissement" className="btn btn-outline-primary btn-lg btn-hover-scale">
              Découvrir le campus <ArrowRight size={18} className="ms-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}