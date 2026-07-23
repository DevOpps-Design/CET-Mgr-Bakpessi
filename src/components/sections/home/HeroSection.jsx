import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck, MoveRight } from 'lucide-react';

const heroImages = [
  '/Assets/IMG/home/student2.jpg',
  '/Assets/IMG/home/school.jpg',
  '/Assets/IMG/home/class2.jpg'
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-cetmb-home position-relative d-flex align-items-center overflow-hidden">
      <div className="hero-bg-pattern position-absolute top-0 start-0 w-100 h-100"></div>

      {/* Image Carousel */}
      <div className="hero-bg-image-wrapper position-absolute top-0 end-0 h-100">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Collège CETMB ${index + 1}`}
            className="hero-bg-img hero-carousel-img"
            style={{
              opacity: currentImage === index ? 1 : 0,
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
        ))}
        <div className="hero-bg-gradient"></div>

        {/* Dots Navigation */}
        <div className="position-absolute bottom-0 end-0 p-4 pb-4 pe-5 z-2 d-none d-md-block">
          <div className="d-flex gap-2 align-items-center">
            {heroImages.map((_, index) => (
              <div
                key={index}
                className={`hero-dot ${currentImage === index ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setCurrentImage(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container position-relative z-1 h-100 pt-5 pt-lg-0">
        <div className="row h-100 align-items-center">
          <div className="col-12 col-lg-7 col-xl-6 hero-content-wrapper py-6">
            <span className="mb-2 d-inline-block fw-bold hero-subtitle d-flex align-items-center gap-2">
              <BadgeCheck size={18} />
              Lycée technique agréé par l'État togolais
            </span>
            <h1 className="display-4 fw-bolder mb-5 hero-title-main lh-sm">
              Former aujourd'hui les techniciens et cadres de demain.
            </h1>

            <div className="row g-3 mb-5 hero-buttons-grid">
              <div className="col-sm-auto d-flex">
                <Link to="/admissions" className="btn-cetmb-primary">
                  Pré-inscription
                </Link>
              </div>
              <div className="col-sm-auto d-flex">
                <Link to="/etablissement" className="btn-cetmb-outline">
                  En savoir plus
                  <MoveRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}