export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  content: any[]
  excerpt?: string
  publishedAt: string
  mainImage?: any
  categories?: string[]
}

export interface Service {
  _id: string
  title: string
  description: string
  icon?: string
  content: any[]
}

export interface Page {
  _id: string
  title: string
  slug: { current: string }
  content: any[]
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
  }
}
