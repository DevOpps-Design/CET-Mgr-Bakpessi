import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const testimonials = [
  {
    nom: 'Mme. Akouvi K.',
    message: 'Mon fils a intégré le CETMB en F1 après son BEPC. Dès le premier trimestre, nous avons vu un changement remarquable dans sa rigueur et sa motivation. L\'encadrement est sérieux et les enseignants sont disponibles.'
  },
  {
    nom: 'Kossi M.',
    message: 'Je suis en Terminale G2 et grâce aux cours pratiques et au soutien de mes professeurs, je me sens prête pour le concours d\'entrée en grande école. Les ateliers nous donnent une vraie avance sur le terrain.'
  },
  {
    nom: 'M. Essowè D.',
    message: 'En tant que parent d\'élève en F3, je suis impressionné par la qualité des infrastructures et le suivi pédagogique. Le lycée donne à nos enfants les moyens de réussir et de croire en leur avenir.'
  },
  {
    nom: 'Afiwa S.',
    message: 'Ce qui me motive au CETMB, c\'est la vie associative en plus des cours. J\'ai pu participer à des projets concrets qui m\'ont aidé à développer mon sens du leadership et du travail d\'équipe.'
  },
];

const VISIBLE = 3;

export default function TestimonialsSection() {
  const [offset, setOffset] = useState(0);

  const total = testimonials.length - VISIBLE + 1;

  const next = useCallback(() => {
    setOffset((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}>
            Ce que disent nos familles
          </h2>
          <p className="text-muted mt-3" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
            Des témoignages authentiques de parents et d'élèves qui font la force du CETMB.
          </p>
        </div>

        <div className="row g-4" style={{ overflow: 'hidden' }}>
          <AnimatePresence mode='wait'>
            {[...Array(VISIBLE)].map((_, i) => {
              const idx = (offset + i) % testimonials.length;
              const t = testimonials[idx];
              return (
                <motion.div
                  key={`${offset}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="col-lg-4"
                >
                  <div
                    className="h-100"
                    style={{
                      padding: '2.5rem 2rem',
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--cetmb-primary)',
                      position: 'relative'
                    }}
                  >
                    <p className="mb-4" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)', lineHeight: 1.7, color: '#333' }}>
                      "{t.message}"
                    </p>

                    <div className="d-flex align-items-center justify-content-between">
                      <div className="fw-bold text-dark" style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}>{t.nom}</div>
                      <span style={{ color: 'rgba(23, 102, 9, 0.25)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1 }}>,,</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="d-flex justify-content-center gap-2 mt-4">
          {[...Array(total)].map((_, index) => (
            <button
              key={index}
              onClick={() => setOffset(index)}
              aria-label={`Témoignage ${index + 1}`}
              style={{
                width: index === offset ? '44px' : '12px',
                height: '44px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0'
              }}
            >
              <span style={{
                width: index === offset ? '32px' : '12px',
                height: '12px',
                backgroundColor: index === offset ? 'var(--cetmb-primary)' : '#cccccc',
                borderRadius: '0',
                display: 'block',
                transition: 'all 0.3s ease',
              }} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
