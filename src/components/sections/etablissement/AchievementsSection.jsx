import { motion } from 'framer-motion';
import { Award, MapPin, Gift, Quote, TrendingUp, GraduationCap } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { delay: 0.1 * i, duration: 0.4, ease: 'easeOut' }
  })
};

export default function AchievementsSection() {
  const highlights = [
    { icon: MapPin, label: 'Région', value: '1er de la région' },
    { icon: Award, label: 'Mention', value: 'Bien' },
    { icon: Gift, label: 'Prix', value: '80 000 F CFA + fournitures' },
    { icon: GraduationCap, label: 'Filière', value: 'un F4' }
  ];

  return (
    <motion.section
      className="section-padding"
      style={{ backgroundColor: '#f4fbfa' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={sectionVariants}
    >
      <div className="container">
        <div className="row g-5 align-items-stretch">
          {/* Colonne image */}
          <div className="col-lg-6">
            <div style={{
              height: '100%',
              minHeight: '360px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                color: '#fff'
              }}>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <Quote size={18} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                    BAC 1 – JUIN 2025
                  </span>
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  BADAYODI Mendepoudola Parfait
                </h3>
                <p style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', opacity: 0.85, margin: '0.2rem 0 0' }}>
                  1er de la région dans sa spécialité
                </p>
              </div>
            </div>
          </div>

          {/* Colonne texte */}
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: 'var(--cetmb-primary)'
            }}>
              Un lauréat,<br />
              <span style={{ color: '#222' }}>une fierté pour tout le CETMB</span>
            </h2>

            <p style={{
              fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
              lineHeight: 1.8,
              color: '#444',
              marginTop: '1rem',
              maxWidth: '540px'
            }}>
              Invité personnellement à Lomé parmi les meilleurs élèves de la région, <strong>BADAYODI Mendepoudola Parfait</strong> a été honoré pour son excellence. Avec <strong>80 000 F CFA</strong> et des fournitures scolaires, il incarne le niveau d'exigence et la qualité de formation qui font la renommée de notre établissement.
            </p>

            {/* Grille des highlights */}
            <div className="row g-3 mt-2">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.label}
                    className="col-12 col-sm-6"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={statVariants}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.7rem 0.9rem',
                      backgroundColor: '#fff',
                      border: '1px solid #e0e7e5'
                    }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'var(--cetmb-primary)',
                        flexShrink: 0
                      }}>
                        <Icon size={16} className="text-white" />
                      </div>
                      <div>
                        <span style={{ fontSize: 'clamp(0.65rem, 1.2vw, 0.7rem)', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {h.label}
                        </span>
                        <p style={{ margin: 0, fontWeight: 600, fontSize: 'clamp(0.8rem, 1.5vw, 0.85rem)', color: '#222', lineHeight: 1.2 }}>
                          {h.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Call to action */}
            <div style={{
              marginTop: '1.8rem',
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--cetmb-primary)',
              borderLeft: '4px solid #0d4a04'
            }}>
              <div className="d-flex align-items-center gap-2 mb-1">
                <TrendingUp size={18} className="text-white" />
                <span style={{ fontWeight: 700, fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', color: '#fff' }}>
                  Et votre enfant pourrait être le prochain
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 'clamp(0.8rem, 1.5vw, 0.88rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                Offrez-lui une formation technique d'excellence. Au CETMB, chaque élève est accompagné vers la réussite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
