import { useState, useEffect } from 'react'
import { client, urlFor } from './sanity'
import { blogPosts as fallback } from '../data/blogPosts'

const query = `*[_type == "blogPost"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  eventDate,
  image,
  "imageAlt": image.alt
}`

export function useBlogPosts() {
  const [posts, setPosts] = useState(fallback)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!client) return

    setLoading(true)
    client.fetch(query)
      .then((data) => {
        if (data?.length) {
          const mapped = data.map((p) => ({
            id: p._id,
            title: p.title,
            slug: p.slug,
            excerpt: p.excerpt,
            category: p.category,
            date: p.publishedAt,
            eventDate: p.eventDate,
            image: p.image ? urlFor(p.image).width(800).url() : fallback.find(f => f.slug === p.slug)?.image || '/Assets/IMG/home/school.jpg',
            imageAlt: p.imageAlt || p.title,
          }))
          setPosts(mapped)
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return { posts, loading }
}
