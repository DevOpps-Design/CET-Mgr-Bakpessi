import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { useBlogPosts } from '../../../lib/useBlogPosts';
import { formatDate } from '../../../utils/formatDate';

export default function ArticlesSection({ activeFilter }) {
  const { posts } = useBlogPosts();

  const filtered = activeFilter === 'Tous'
    ? posts
    : posts.filter((a) => a.category === activeFilter);

  return (
    <section style={{ paddingTop: '7rem', paddingBottom: '7rem', backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <AnimatePresence mode='wait'>
          {filtered.length > 0 ? (
            <motion.div
              key={activeFilter}
              className="row g-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((article) => (
                <div key={article.id} className="col-md-6 col-lg-4 d-flex align-items-stretch">
                  <Link
                    to={`/blog/${article.slug}`}
                    className="text-decoration-none w-100"
                    style={{ display: 'flex' }}
                  >
                    <motion.div
                      className="card w-100 overflow-hidden d-flex flex-column"
                      style={{ border: '1px solid var(--cetmb-border)', borderRadius: 0, height: '100%' }}
                      whileHover={{ y: -8, boxShadow: 'none' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <motion.img
                        src={article.image}
                        alt={article.title}
                        className="w-100"
                        style={{ height: '220px', objectFit: 'cover' }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />

                      <div className="card-body p-4 d-flex flex-column flex-grow-1">
                        <div className="d-flex align-items-center mb-2 small" style={{ color: 'var(--cetmb-primary)' }}>
                          <Calendar size={14} className="me-1" strokeWidth={2} />
                          <span>{formatDate(article.date)}</span>
                        </div>

                        <h3 className="h5 fw-bold mb-3 text-dark" style={{ lineHeight: '1.4' }}>{article.title}</h3>

                        <p className="text-secondary small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>{article.excerpt}</p>

                        <div className="mt-auto">
                          <span
                            className="d-inline-flex align-items-center gap-2 px-3 py-2 fw-medium text-decoration-none transition-all"
                            style={{
                              color: 'var(--cetmb-primary)',
                              border: '1px solid transparent',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#a26c21';
                              e.currentTarget.style.color = '#ffffff';
                              e.currentTarget.style.borderColor = '#a26c21';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'var(--cetmb-primary)';
                              e.currentTarget.style.borderColor = 'transparent';
                            }}
                          >
                            Lire l'article <ArrowRight size={16} />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-5"
            >
              <p className="text-muted fs-5">Aucun article dans cette catégorie.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
