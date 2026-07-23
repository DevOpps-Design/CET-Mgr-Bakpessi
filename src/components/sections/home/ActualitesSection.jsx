import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { useBlogPosts } from '../../../lib/useBlogPosts';
import { formatDate } from '../../../utils/formatDate';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function ActualitesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const { posts } = useBlogPosts();

  return (
    <motion.section
      className="py-5 py-lg-6 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="container">
        <motion.div className="d-flex justify-content-between align-items-end mb-4" variants={itemVariants}>
          <h2 className="fw-bolder text-dark">Actualités & Événements</h2>
          <Link to="/blog" className="btn-cetmb-arrow">
            Voir tout <ArrowUpRight size={16} className="ms-1" />
          </Link>
        </motion.div>

        <div className="row g-0">
          <motion.div className="col-lg-6" variants={itemVariants}>
            <div className="bg-light p-4 p-lg-5 h-100 d-flex flex-column justify-content-center">
            {posts.map((a, i) => (
              <Link
                key={a.id}
                to={`/blog/${a.slug}`}
                className={`text-decoration-none ${i < posts.length - 1 ? 'mb-4 pb-4 border-bottom border-2' : ''}`}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredIndex(i)}
              >
                <motion.div
                  className="d-flex align-items-center p-3"
                  style={{
                    backgroundColor: hoveredIndex === i ? '#a26c21' : 'transparent',
                    transition: 'background-color 0.3s ease'
                  }}
                  whileHover={{ x: 5 }}
                >
                  <div className="me-4 me-md-5">
                    <span className="actu-number-outline" style={hoveredIndex === i ? { WebkitTextStrokeColor: '#ffffff' } : undefined}>0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-2" style={{ color: hoveredIndex === i ? '#ffffff' : 'var(--cetmb-primary)' }}>{a.title}</h3>
                    <div className="d-flex flex-wrap gap-3">
                      <div className="d-flex align-items-center small" style={{ color: hoveredIndex === i ? '#ffffff' : 'var(--cetmb-text-muted)' }}>
                        <Calendar size={14} className="me-1" strokeWidth={2} />
                        <span>{formatDate(a.date)}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
            </div>
          </motion.div>

          <motion.div className="col-lg-6 d-none d-lg-block" variants={itemVariants}>
            <motion.img
              src={posts[hoveredIndex]?.image || '/Assets/IMG/home/school.jpg'}
              alt={posts[hoveredIndex]?.title || ''}
              className="w-100 h-100"
              style={{ objectFit: 'cover', minHeight: '450px' }}
              key={hoveredIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
