import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="container">
        <div className="position-relative overflow-visible" style={{ backgroundColor: '#a26c21', padding: '2rem 3rem' }}>
          <div className="row g-4 g-lg-5">
            <div className="col-lg-7">
              <h2 className="fw-bolder mb-4 lh-sm" style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-heading)',
                color: '#ffffff'
              }}>
                Façonnez votre avenir avec notre accompagnement !
              </h2>

              <p className="mb-4" style={{ fontSize: '1rem', lineHeight: '1.8', maxWidth: '520px', color: 'rgba(255,255,255,0.85)' }}>
                Depuis Kara, nous formons des professionnels compétents et déterminés, prêts à bâtir l'avenir avec excellence et ambition.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn-cetmb-primary" style={{ backgroundColor: '#ffffff', color: '#176609' }}>
                  Nous contacter <ArrowRight size={16} className="ms-2" />
                </Link>
                <Link to="/filieres" className="btn-cetmb-outline" style={{ borderColor: '#ffffff', color: '#ffffff' }}>
                  Nos filières
                </Link>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-flex align-items-end justify-content-center position-absolute end-0 bottom-0 pe-4">
              <img
                src="/Assets/Images/cta_img_home.webp"
                alt="Établissement CETMB"
                className="img-fluid"
                style={{ maxHeight: '420px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
