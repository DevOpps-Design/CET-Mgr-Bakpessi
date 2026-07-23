import { motion } from 'framer-motion';


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

export default function LocationSection() {
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
        <div className="row g-5 align-items-center">
          {/* Texte à gauche */}
          <motion.div className="col-lg-6" variants={itemVariants}>
            <div className="pe-lg-5">
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}>
                Un cadre d'étude propice à la réussite
              </h2>
              <motion.div
                style={{
                  borderLeft: '1px solid var(--cetmb-primary)',
                  paddingLeft: '1.5rem',
                  marginBottom: '2rem'
                }}
                variants={itemVariants}
              >
                <p className="text-secondary mb-0" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.9 }}>
                  Le CETMB est implanté dans un quartier accessible de Kara, dans un environnement calme et sécurisé. Les infrastructures, la discipline et la vie scolaire contribuent à créer un climat de travail sérieux et motivant.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Carte Google Maps à droite */}
          <motion.div className="col-lg-6" variants={itemVariants}>
            <div className="position-relative" style={{ overflow: 'hidden' }}>
              <div style={{
                position: 'absolute',
                top: '-1.5rem',
                left: '-1.5rem',
                right: '1.5rem',
                bottom: '1.5rem',
                border: '1px solid var(--cetmb-primary)',
                pointerEvents: 'none',
                zIndex: 1
              }}></div>
              <div style={{ position: 'relative', zIndex: 2, lineHeight: 0 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3934.4927651464473!2d1.1930370750253556!3d9.552720990531045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMzMnMDkuOCJOIDHCsDExJzQ0LjIiRQ!5e0!3m2!1sfr!2stg!4v1784826598482!5m2!1sfr!2stg"
                  width="100%"
                  height="400"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Localisation CETMB - Kara, Togo"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
