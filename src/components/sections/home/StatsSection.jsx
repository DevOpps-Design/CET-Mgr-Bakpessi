import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: [0.32, 0.72, 0, 1] }
  })
};

const stats = [
  { valeur: '1 500+', label: 'Élèves formés' },
  { valeur: '98 %', label: 'Réussite aux examens' },
  { valeur: '19', label: "Années d'expérience" },
  { valeur: '45', label: 'Enseignants qualifiés' },
];

export default function StatsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#faf8f5' }}>
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-4 g-4 g-lg-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="col text-center"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <div className="fw-bold" style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: '#a26c21',
                lineHeight: 1.1,
                marginBottom: '0.4rem'
              }}>
                {stat.valeur}
              </div>
              <div style={{
                fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)',
                color: '#555',
                fontWeight: 500
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
