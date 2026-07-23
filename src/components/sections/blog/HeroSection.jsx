import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section
      className="position-relative d-flex align-items-center overflow-hidden"
      style={{
        minHeight: 'var(--cetmb-hero-min-height, 50vh)',
        paddingTop: 'clamp(80px, 10vw, 140px)',
        paddingBottom: 'clamp(50px, 6vw, 80px)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: 'url(/Assets/IMG/blog/school.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'linear' }}
      />
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1
        }}
      />

      <div className="container position-relative z-2">
        <motion.div
          className="row align-items-center"
          style={{ minHeight: 'var(--cetmb-hero-min-height, 50vh)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="col-lg-8 text-center mx-auto">
            <motion.h1
              className="text-white mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                lineHeight: 1.2,
                fontWeight: 700
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Actualités et blog
            </motion.h1>
            <motion.p
              className="text-white mb-0"
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                lineHeight: 1.8,
                opacity: 0.9
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Restez informé des dernières nouvelles et événements du CETMB.
            </motion.p>
          </div>
        </motion.div>
      </div>

      <div className="position-absolute bottom-0 start-0 w-100" style={{
        height: '3px',
        backgroundColor: 'var(--cetmb-primary)',
        opacity: 0.6,
        zIndex: 2
      }} />
    </motion.section>
  );
}
