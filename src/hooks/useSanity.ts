import { useState, useEffect } from 'react'
import { client } from '../config/sanity'
import type { BlogPost, Service, Page } from '../types/sanity'

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          mainImage,
          categories
        }`
        const result = await client.fetch(query)
        setPosts(result)
      } catch (error) {
        console.error('Erreur lors de la récupération des articles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return { posts, loading }
}

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const query = `*[_type == "service"] {
          _id,
          title,
          description,
          icon,
          content
        }`
        const result = await client.fetch(query)
        setServices(result)
      } catch (error) {
        console.error('Erreur lors de la récupération des services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  return { services, loading }
}
