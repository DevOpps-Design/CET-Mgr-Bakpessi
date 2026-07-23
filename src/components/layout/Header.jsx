import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/etablissement', label: 'Établissement' },
    { to: '/filieres', label: 'Filières' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  const navLinkClass = "nav-link px-2 py-2 fw-light text-white text-decoration-none transition-all small";

  return (
    <header
      className="header-cetmb fixed-top"
      style={{
        backgroundColor: scrolled ? '#176609' : 'rgba(23, 102, 9, 0.85)',
        backdropFilter: scrolled ? 'none' : 'blur(10px)',
      }}
    >
      <nav className="container d-flex align-items-center justify-content-between py-2 py-lg-3">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img src="/Assets/Brand/logo.webp" alt="CETMB" style={{ height: '45px' }} />
          <div className="ms-2">
            <div className="text-white fw-bold lh-1" style={{ fontSize: '0.8rem' }}>College Technique</div>
            <div className="text-white fw-bold lh-1" style={{ fontSize: '0.8rem' }}>MGR BAKPESSI</div>
          </div>
        </Link>

        <ul className="d-none d-lg-flex align-items-center gap-1 mb-0">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={navLinkClass}
                style={{
                  borderBottom: location.pathname === link.to ? '2px solid white' : '2px solid transparent',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="d-flex align-items-center gap-3">
          <Link 
            to="/admissions" 
            className="d-none d-lg-block btn-cetmb-outline"
            style={{ backgroundColor: '#FFFFFF', color: '#176609' }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = '#a26c21'; e.target.style.color = '#FFFFFF'; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = '#FFFFFF'; e.target.style.color = '#176609'; }}
          >
            Pré-inscription
          </Link>

          <button
            className="d-lg-none btn p-0 d-flex align-items-center justify-content-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ width: '44px', height: '44px' }}
          >
            {menuOpen ? <X className="text-white" size={28} /> : <Menu className="text-white" size={28} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div 
          className="d-lg-none position-absolute w-100"
          style={{ 
            top: '100%', 
            backgroundColor: '#176609',
            zIndex: 1000,
            maxHeight: 'calc(100dvh - 70px)',
            overflowY: 'auto',
          }}
        >
          <ul className="flex-column mb-0 py-3">
            {navLinks.map((link) => (
              <li key={link.to} className="border-bottom border-white border-opacity-10">
                <Link
                  to={link.to}
                  className="d-block px-4 py-3 text-white fw-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-4 pt-3">
              <Link to="/admissions" className="btn-cetmb-primary w-100" style={{ backgroundColor: '#FFFFFF', color: '#176609' }}>
                Pré-inscription
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}