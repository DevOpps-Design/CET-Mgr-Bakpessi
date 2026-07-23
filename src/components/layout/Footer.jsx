import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-cetmb pt-5 pb-4">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Logo et description */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <img src="/Assets/Brand/logo.webp" alt="CETMB Logo" style={{ height: '45px', maxWidth: '150px' }} />
              <div className="ms-2 d-flex flex-column justify-content-center" style={{ lineHeight: 1.1 }}>
                <span className="text-white fw-bold">Collège Technique</span>
                <span className="text-white fw-bold">MGR BAKPESSI</span>
              </div>
            </div>
            <p className="small text-white mb-3">
              Collège Technique d'Enseignement MGR BAKPESSI - Un lycée technique de référence à Kara, formant des techniciens et cadets répondus depuis 2005.
            </p>

          </div>

          {/* Filières */}
          <div className="col-6 col-lg-2">
            <h5 className="h6 mb-2 text-white fw-bold">Filières</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1"><Link to="/filieres/F1" className="text-white text-decoration-none small">Fabrication mécanique</Link></li>
              <li className="mb-1"><Link to="/filieres/E" className="text-white text-decoration-none small">Mathématiques & Techniques</Link></li>
              <li className="mb-1"><Link to="/filieres/F2" className="text-white text-decoration-none small">Électronique</Link></li>
              <li className="mb-1"><Link to="/filieres/F3" className="text-white text-decoration-none small">Électrotechnique</Link></li>
              <li className="mb-1"><Link to="/filieres/F4" className="text-white text-decoration-none small">Génie civil</Link></li>
              <li className="mb-1"><Link to="/filieres/G1" className="text-white text-decoration-none small">Secrétaire</Link></li>
              <li className="mb-1"><Link to="/filieres/G2" className="text-white text-decoration-none small">Comptabilité</Link></li>
              <li><Link to="/filieres/G3" className="text-white text-decoration-none small">Commerce</Link></li>
            </ul>
          </div>

          {/* Institution */}
          <div className="col-6 col-lg-2">
            <h5 className="h6 mb-3 text-white fw-bold">Institution</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><Link to="/etablissement" className="text-white text-decoration-none small">À propos de nous</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white text-decoration-none small">Nous contacter</Link></li>
              <li className="mb-2"><Link to="/admissions" className="text-white text-decoration-none small">Admissions</Link></li>
              <li><Link to="/blog" className="text-white text-decoration-none small">Actualités</Link></li>
            </ul>
          </div>

          {/* Contactez-nous */}
          <div className="col-lg-4">
            <h5 className="h6 mb-3 text-white fw-bold">Contactez-nous</h5>
            <ul className="list-unstyled mb-4">
              <li className="d-flex align-items-center mb-3">
                <MapPin size={18} className="me-2 text-white flex-shrink-0" />
                <span className="small text-white">Kara, Togo</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <Phone size={18} className="me-2 text-white flex-shrink-0" />
                <span className="small text-white">+228 72 89 66 02</span>
              </li>
              <li className="d-flex align-items-center">
                <Mail size={18} className="me-2 text-white flex-shrink-0" />
                <span className="small text-white">Contact@institut-bakpessi.com</span>
              </li>
            </ul>
            {/* Réseaux sociaux */}
            <div className="d-flex gap-2">
              <a href="https://www.facebook.com/share/p/1BfneNWtbQ/" target="_blank" rel="noopener noreferrer" className="btn-social-footer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/110435213/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="btn-social-footer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.instagram.com/ismgrbakpessi" target="_blank" rel="noopener noreferrer" className="btn-social-footer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@csu_mgr_bakpessi" target="_blank" rel="noopener noreferrer" className="btn-social-footer" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-white" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <small className="text-white">
              © {currentYear} CETMB - Tous droits réservés.
            </small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link to="/conditions-utilisation" className="text-white text-decoration-none small d-block d-md-inline-block me-md-3 mb-1 mb-md-0">Conditions d'utilisation</Link>
            <Link to="/politique-confidentialite" className="text-white text-decoration-none small d-block d-md-inline-block me-md-3 mb-1 mb-md-0">Politique de confidentialité</Link>
            <Link to="/cookies" className="text-white text-decoration-none small d-block d-md-inline-block">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
