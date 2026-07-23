import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function InfosSection() {
  const [formData, setFormData] = useState({ nom: '', email: '', telephone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messages = JSON.parse(localStorage.getItem('cetmb_contact_messages') || '[]');
    messages.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem('cetmb_contact_messages', JSON.stringify(messages));
    setFormData({ nom: '', email: '', telephone: '', message: '' });
    setSubmitted(true);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <div className="mb-4">
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', 
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}>
                Nos coordonnées
              </h2>
            </div>
            <p className="text-muted mb-4" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.8 }}>
              Pour toute information complémentaire sur nos formations ou nos modalités d'inscription, utilisez les coordonnées ci-dessous.
            </p>

            <div style={{ 
              padding: '2.5rem',
              border: '1px solid var(--cetmb-primary)',
              borderLeft: '1px solid var(--cetmb-primary)'
            }}>
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-start gap-3">
                  <div 
                    className="d-flex align-items-center justify-content-center flex-shrink-0" 
                    style={{ 
                      width: '44px', 
                      height: '44px', 
                      backgroundColor: 'var(--cetmb-primary)',
                      border: 0
                    }}
                  >
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="fw-bold mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>Adresse</div>
                    <p className="mb-0 text-muted" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.6 }}>Kara, Togo</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div 
                    className="d-flex align-items-center justify-content-center flex-shrink-0" 
                    style={{ 
                      width: '44px', 
                      height: '44px', 
                      backgroundColor: 'var(--cetmb-primary)',
                      border: 0
                    }}
                  >
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="fw-bold mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>Téléphone</div>
                    <p className="mb-0 text-muted" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.6 }}>+228 72 89 66 02</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div 
                    className="d-flex align-items-center justify-content-center flex-shrink-0" 
                    style={{ 
                      width: '44px', 
                      height: '44px', 
                      backgroundColor: 'var(--cetmb-primary)',
                      border: 0
                    }}
                  >
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="fw-bold mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>Email</div>
                    <p className="mb-0 text-muted" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.6 }}>Contact@institut-bakpessi.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div 
                    className="d-flex align-items-center justify-content-center flex-shrink-0" 
                    style={{ 
                      width: '44px', 
                      height: '44px', 
                      backgroundColor: 'var(--cetmb-primary)',
                      border: 0
                    }}
                  >
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="fw-bold mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>Horaires</div>
                    <p className="mb-0 text-muted" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.6 }}>Lun - Ven: 8h - 17h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7">
            <div className="mb-4">
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', 
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}>
                Envoyez-nous un message
              </h2>
            </div>

            <div style={{ padding: 'clamp(1.25rem, 3vw, 2.5rem)' }}>
              {submitted ? (
                <div style={{ padding: '2rem', backgroundColor: '#f4fbfa', border: '1px solid var(--cetmb-primary)' }}>
                  <h3 className="h5 mb-2" style={{ color: 'var(--cetmb-primary)' }}>Message envoyé ✓</h3>
                  <p className="text-muted mb-0">Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="nom" className="form-label fw-semibold" style={{ fontSize: '0.95rem' }}>Nom</label>
                      <input type="text" className="form-control" id="nom" name="nom" value={formData.nom} onChange={handleChange} placeholder="Votre nom" required style={{ border: '1px solid #dee2e6', padding: '0.75rem 1rem' }} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-semibold" style={{ fontSize: '0.95rem' }}>Email</label>
                      <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Votre email" required style={{ border: '1px solid #dee2e6', padding: '0.75rem 1rem' }} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="telephone" className="form-label fw-semibold" style={{ fontSize: '0.95rem' }}>Téléphone</label>
                      <input type="tel" className="form-control" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="+228 72 89 66 02" style={{ border: '1px solid #dee2e6', padding: '0.75rem 1rem' }} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-semibold" style={{ fontSize: '0.95rem' }}>Message</label>
                      <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Votre message..." required style={{ border: '1px solid #dee2e6', padding: '0.75rem 1rem' }}></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-cetmb-primary" style={{ padding: '0.875rem 3rem', fontSize: '1rem' }}>
                        Envoyer le message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
