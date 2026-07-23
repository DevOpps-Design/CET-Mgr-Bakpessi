import { useState, useEffect, useRef } from 'react';
import { Send, Calendar, Clock, CheckCircle } from 'lucide-react';

const STORAGE_KEY = 'cetmb_preinscription_draft';

function loadDraft() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return null;
}

export default function FormSection() {
  const [formData, setFormData] = useState(loadDraft() || {
    nom: '', prenom: '', email: '', telephone: '',
    niveau: '', serie: '', dateVisite: '', heureVisite: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      setSaving(true);
      setTimeout(() => setSaving(false), 600);
    }, 400);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [formData]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem('cetmb_preinscriptions') || '[]');
    submissions.push({ ...formData, dateSoumission: new Date().toISOString() });
    localStorage.setItem('cetmb_preinscriptions', JSON.stringify(submissions));
    localStorage.removeItem(STORAGE_KEY);
    setFormData({ nom: '', prenom: '', email: '', telephone: '', niveau: '', serie: '', dateVisite: '', heureVisite: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const creneaux = [
    '08h00 - 09h00', '09h00 - 10h00', '10h00 - 11h00',
    '14h00 - 15h00', '15h00 - 16h00'
  ];

  return (
    <section id="preinscription" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}>
              Pré-inscription et visite sur place
            </h2>
            <p className="text-muted mt-3" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.8 }}>
              Remplissez ce formulaire pour commencer votre pré-inscription et réserver votre date de passage dans nos locaux pour finaliser l'inscription.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div style={{
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              backgroundColor: '#f4fbfa',
              border: '1px solid var(--cetmb-primary)',
              borderTop: '1px solid var(--cetmb-primary)'
            }}>
              {submitted ? (
                <div className="text-center py-5">
                  <CheckCircle size={48} style={{ color: 'var(--cetmb-primary)' }} className="mb-3" />
                  <h4 className="fw-bold mb-2">Demande envoyée avec succès !</h4>
                  <p className="text-muted mb-0">Nous vous confirmerons le rendez-vous par email.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label htmlFor="nom" className="form-label fw-semibold" style={{ fontSize: '0.95rem' }}>Nom</label>
                      <input type="text" className="form-control" id="nom" name="nom"
                        value={formData.nom} onChange={handleChange}
                        placeholder="Nom de l'élève" required
                        style={{ border: '1px solid #dee2e6', padding: '0.75rem 1rem' }} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="prenom" className="form-label fw-semibold" style={{ fontSize: '0.95rem' }}>Prénom</label>
                      <input type="text" className="form-control" id="prenom" name="prenom"
                        value={formData.prenom} onChange={handleChange}
                        placeholder="Prénom de l'élève" required
                        style={{ border: '1px solid #dee2e6', padding: '0.75rem 1rem' }} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-semibold" style={{ fontSize: '0.95rem' }}>Email</label>
                      <input type="email" className="form-control" id="email" name="email"
                        value={formData.email} onChange={handleChange}
                        placeholder="email@exemple.com" required
                        style={{ border: '1px solid #dee2e6', padding: '0.75rem 1rem' }} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="telephone" className="form-label fw-semibold" style={{ fontSize: '0.95rem' }}>Téléphone</label>
                      <input type="tel" className="form-control" id="telephone" name="telephone"
                        value={formData.telephone} onChange={handleChange}
                        placeholder="+228 72 89 66 02" required
                        style={{ border: '1px solid #dee2e6', padding: '0.75rem 1rem' }} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="niveau" className="form-label fw-semibold" style={{ fontSize: '0.95rem' }}>Niveau actuel</label>
                      <select className="form-select" id="niveau" name="niveau"
                        value={formData.niveau} onChange={handleChange} required
                        style={{ border: '1px solid #dee2e6', padding: '0.75rem 1rem' }}>
                        <option value="">Sélectionner...</option>
                        <option value="seconde">Seconde</option>
                        <option value="premiere">Première</option>
                        <option value="terminale">Terminale</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="serie" className="form-label fw-semibold" style={{ fontSize: '0.95rem' }}>Filière souhaitée</label>
                      <select className="form-select" id="serie" name="serie"
                        value={formData.serie} onChange={handleChange} required
                        style={{ border: '1px solid #dee2e6', padding: '0.75rem 1rem' }}>
                        <option value="">Sélectionner...</option>
                        <option value="F1">Série F1 - Construction mécanique</option>
                        <option value="E">Série E - Mathématiques et Techniques</option>
                        <option value="F2">Série F2 - Electrotechnique</option>
                        <option value="F3">Série F3 - Electronique</option>
                        <option value="F4">Série F4 - Génie civil</option>
                        <option value="G1">Série G1 - Secrétariat</option>
                        <option value="G2">Série G2 - Comptabilité</option>
                        <option value="G3">Série G3 - Gestion</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="dateVisite" className="form-label fw-semibold" style={{ fontSize: '0.95rem' }}>Date de visite</label>
                      <div className="input-group">
                        <span className="input-group-text" style={{ backgroundColor: '#ffffff', border: '1px solid #dee2e6' }}>
                          <Calendar size={18} style={{ color: 'var(--cetmb-primary)' }} />
                        </span>
                        <input type="date" className="form-control" id="dateVisite" name="dateVisite"
                          value={formData.dateVisite} onChange={handleChange} required
                          style={{ border: '1px solid #dee2e6', padding: '0.75rem 1rem' }} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="heureVisite" className="form-label fw-semibold" style={{ fontSize: '0.95rem' }}>Heure de visite</label>
                      <div className="input-group">
                        <span className="input-group-text" style={{ backgroundColor: '#ffffff', border: '1px solid #dee2e6' }}>
                          <Clock size={18} style={{ color: 'var(--cetmb-primary)' }} />
                        </span>
                        <select className="form-select" id="heureVisite" name="heureVisite"
                          value={formData.heureVisite} onChange={handleChange} required
                          style={{ border: '1px solid #dee2e6', padding: '0.75rem 1rem' }}>
                          <option value="">Choisir un créneau...</option>
                          {creneaux.map((c, i) => (
                            <option key={i} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <div className="d-flex align-items-center justify-content-center gap-3">
                        <button type="submit" className="btn-cetmb-primary" style={{ padding: '0.875rem 3rem', fontSize: '1rem' }}>
                          <Send size={18} className="me-2" />
                          Soumettre la demande
                        </button>
                        {saving && <small className="text-muted" style={{ fontSize: '0.75rem' }}>Sauvegarde automatique...</small>}
                      </div>
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
