import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'cgkd8ncv', // À remplacer par votre vrai Project ID
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  // Ajout de la configuration pour éviter les problèmes CORS
  withCredentials: false,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)
