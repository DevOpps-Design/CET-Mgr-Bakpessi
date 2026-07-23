import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subscribers = JSON.parse(localStorage.getItem('cetmb_newsletter') || '[]');
    subscribers.push({ email, date: new Date().toISOString() });
    localStorage.setItem('cetmb_newsletter', JSON.stringify(subscribers));
    setEmail('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="h2 mb-3">Merci ! ✓</h2>
              <p className="mb-0 text-muted">Vous êtes maintenant abonné à notre newsletter.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 className="h2 mb-3">Abonnez-vous à notre Newsletter</h2>
            <p className="mb-4 text-muted">Recevez nos dernières nouvelles et informations directement dans votre boîte mail.</p>
            <form onSubmit={handleSubmit} className="d-flex flex-wrap gap-2 justify-content-center">
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Votre email" required style={{ maxWidth: '300px' }} />
              <button type="submit" className="btn btn-primary">S'abonner</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}