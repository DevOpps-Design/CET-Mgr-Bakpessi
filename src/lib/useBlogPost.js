import { useState, useEffect } from 'react'
import { client, urlFor } from './sanity'

const query = `*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  eventDate,
  image,
  "imageAlt": image.alt,
  body
}`

export function useBlogPost(slug) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug || !client) {
      setLoading(false)
      return
    }

    setLoading(true)
    client.fetch(query, { slug })
      .then((data) => {
        if (data) {
          setPost({
            id: data._id,
            title: data.title,
            slug: data.slug,
            excerpt: data.excerpt,
            category: data.category,
            date: data.publishedAt,
            eventDate: data.eventDate,
            image: data.image ? urlFor(data.image).width(1200).url() : null,
            imageAlt: data.imageAlt || data.title,
            body: data.body,
          })
        } else {
          setPost(null)
        }
      })
      .catch(() => setPost(null))
      .finally(() => setLoading(false))
  }, [slug])

  return { post, loading }
}
