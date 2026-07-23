import { motion } from 'framer-motion';
import { Wrench, Cpu, Zap, Building2, Briefcase, Calculator, ShoppingCart } from 'lucide-react';

const categories = [
  { serie: 'F1', name: 'Mécanique', icon: Wrench },
  { serie: 'F2', name: 'Électronique', icon: Cpu },
  { serie: 'F3', name: 'Électrotechnique', icon: Zap },
  { serie: 'E', name: 'Maths & Tech', icon: Calculator },
  { serie: 'F4', name: 'Génie Civil', icon: Building2 },
  { serie: 'G1', name: 'Secrétaire', icon: Briefcase },
  { serie: 'G2', name: 'Comptabilité', icon: Calculator },
  { serie: 'G3', name: 'Commerce', icon: ShoppingCart },
];

export default function FilieresIntroSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Header centré */}
        <div className="text-center mb-5">
          <h2 className="fw-bolder mb-3 text-dark lh-sm" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', letterSpacing: '-0.03em' }}>
            Explorez nos Filières Populaires
          </h2>
          <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            Découvrez vous-même, acquérez de nouvelles compétences et trouvez votre réussite professionnelle au sein de nos séries.
          </p>
        </div>

        {/* Grille responsive : 2 colonnes mobile, 4 colonnes desktop */}
        <div className="row row-cols-2 row-cols-md-4 g-4 justify-content-center">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                className="col d-flex flex-column align-items-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.45 }}
              >
                <div className="d-flex flex-column align-items-center justify-content-center mb-3 cat-box" style={{
                  width: '88px',
                  height: '88px',
                  backgroundColor: '#a26c21',
                  borderRadius: '0',
                  padding: '0.5rem',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(162,108,33,0.25)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <Icon size={24} strokeWidth={1.5} color="#FFFFFF" />
                  <span className="fw-bold" style={{ fontSize: '0.7rem', color: '#FFFFFF', marginTop: '2px' }}>{cat.serie}</span>
                </div>
                <span className="text-dark text-center fw-medium" style={{ fontSize: '0.95rem' }}>{cat.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
