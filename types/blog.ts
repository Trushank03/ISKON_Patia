export interface Category {
  id: number
  name: string
  slug: string
  description?: string
}

export interface Author {
  id: number
  username: string
  first_name?: string
  last_name?: string
  full_name?: string
  avatar?: string
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  content: string
  excerpt?: string
  featured_image: string | null
  is_published: boolean
  is_featured: boolean
  reading_time: number
  author: Author
  categories: Category[]
  created_at: string
  updated_at: string
  published_at: string | null
}

export interface PaginatedBlogPosts {
  count: number
  next: string | null
  previous: string | null
  results: BlogPost[]
}

export interface PaginatedCategories {
  count: number
  next: string | null
  previous: string | null
  results: Category[]
}

export interface BlogFilters {
  category?: string
  is_featured?: boolean
  author_username?: string
  page?: number
  page_size?: number
  search?: string
  ordering?: string
}

export interface AuthTokens {
  access: string
  refresh: string
}
