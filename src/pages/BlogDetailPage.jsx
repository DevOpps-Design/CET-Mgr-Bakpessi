import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowLeft, Clock } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { useBlogPost } from '../lib/useBlogPost'
import { formatDate } from '../utils/formatDate'

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null
      return (
        <figure className="my-4">
          <img
            src={`https://cdn.sanity.io/images/zjezoatn/production/${value.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`}
            alt={value.alt || ''}
            className="w-100 rounded"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
          {value.alt && <figcaption className="text-muted small mt-2 text-center">{value.alt}</figcaption>}
        </figure>
      )
    },
  },
  block: {
    h2: ({ children }) => <h2 className="fw-bold mt-5 mb-3" style={{ color: '#2d2d2d' }}>{children}</h2>,
    h3: ({ children }) => <h3 className="fw-bold mt-4 mb-2" style={{ color: '#2d2d2d' }}>{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-start border-4 ps-4 my-4 py-2" style={{ borderColor: 'var(--cetmb-primary)', background: '#f8f4ef' }}>
        <em className="fs-5" style={{ color: '#555' }}>{children}</em>
      </blockquote>
    ),
    normal: ({ children }) => <p className="mb-3 lh-lg" style={{ color: '#444', fontSize: '1.05rem' }}>{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cetmb-primary)' }}>
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-3 ps-4">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1" style={{ color: '#444' }}>{children}</li>,
  },
}

export default function BlogDetailPage() {
  const { slug } = useParams()
  const { post, loading } = useBlogPost(slug)

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <section className="py-5" style={{ paddingTop: '10rem' }}>
        <div className="container text-center py-5">
          <h2 className="fw-bold mb-3">Article non trouvé</h2>
          <p className="text-muted mb-4">Cet article n'existe pas ou a été retiré.</p>
          <Link to="/blog" className="btn btn-cetmb-primary">
            <ArrowLeft size={16} className="me-2" />Retour au blog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <article style={{ paddingTop: '9rem', paddingBottom: '5rem' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link
            to="/blog"
            className="d-inline-flex align-items-center gap-2 text-decoration-none mb-4 fw-medium"
            style={{ color: 'var(--cetmb-primary)' }}
          >
            <ArrowLeft size={16} /> Retour aux articles
          </Link>

          {post.image && (
            <motion.img
              src={post.image}
              alt={post.imageAlt}
              className="w-100 rounded mb-4"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          )}

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                <span className="badge px-3 py-2 fw-medium" style={{ background: 'var(--cetmb-primary)' }}>
                  {post.category}
                </span>
                <div className="d-flex align-items-center small text-muted">
                  <Calendar size={14} className="me-1" />
                  <span>Publié le {formatDate(post.date)}</span>
                </div>
                {post.eventDate && (
                  <div className="d-flex align-items-center small text-muted">
                    <Clock size={14} className="me-1" />
                    <span>Événement le {formatDate(post.eventDate)}</span>
                  </div>
                )}
              </div>

              <h1 className="fw-bold mb-3" style={{ color: '#2d2d2d', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="fs-5 mb-5" style={{ color: '#666', lineHeight: 1.7 }}>{post.excerpt}</p>
              )}

              <hr className="mb-5" style={{ borderColor: '#e0d5c5' }} />

              {post.body ? (
                <div className="blog-content">
                  <PortableText value={post.body} components={ptComponents} />
                </div>
              ) : (
                <p className="text-muted fst-italic">Contenu non disponible pour cet article.</p>
              )}

              <div className="mt-5 pt-4 border-top d-flex justify-content-between">
                <Link to="/blog" className="btn btn-cetmb-outline d-inline-flex align-items-center gap-2">
                  <ArrowLeft size={16} /> Articles précédents
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
