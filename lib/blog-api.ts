import type { BlogPost, PaginatedBlogPosts, Category, PaginatedCategories, BlogFilters, AuthTokens } from "@/types/blog"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api"
const API_BLOG_URL = `${API_BASE_URL}/blog`
const API_AUTH_URL = API_BASE_URL

// Helper function to get auth token from localStorage
function getAuthTokenFromStorage(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("sanatana_access_token")
}

// Helper function to get refresh token from localStorage
function getRefreshTokenFromStorage(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("sanatana_refresh_token")
}

// Helper function to handle API responses
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorMessage = `API request failed with status ${response.status}`

    try {
      const errorData = await response.json()
      console.error("API Error:", response.status, errorData)

      // Handle specific error cases
      if (response.status === 401) {
        errorMessage = "Authentication failed. Please log in again."
      } else if (response.status === 403) {
        errorMessage = "Access denied. You don't have permission to perform this action."
      } else if (response.status === 404) {
        errorMessage = "Resource not found. Please check if the API endpoint exists."
      } else if (response.status === 500) {
        errorMessage = "Server error. Please try again later."
      } else if (errorData.detail) {
        errorMessage = errorData.detail
      } else if (errorData.message) {
        errorMessage = errorData.message
      } else if (errorData.error) {
        errorMessage = errorData.error
      }
    } catch (parseError) {
      console.error("Error parsing error response:", parseError)
      errorMessage = `${errorMessage}: ${response.statusText}`
    }

    throw new Error(errorMessage)
  }

  // Handle 204 No Content for DELETE requests
  if (response.status === 204) {
    return Promise.resolve(undefined as T)
  }

  return response.json() as Promise<T>
}

// --- Authentication API Functions ---
export async function getAuthToken(username: string, password: string): Promise<AuthTokens> {
  const response = await fetch(`${API_AUTH_URL}/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
  return handleResponse<AuthTokens>(response)
}

export async function refreshAuthToken(refreshToken: string): Promise<AuthTokens> {
  const response = await fetch(`${API_AUTH_URL}/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: refreshToken }),
  })
  return handleResponse<AuthTokens>(response)
}

// --- Blog Post API Functions ---
export async function getBlogPosts(filters: BlogFilters = {}): Promise<PaginatedBlogPosts> {
  const queryParams = new URLSearchParams()

  // Add all filters to query params
  if (filters.category) queryParams.append("category", filters.category)
  if (filters.is_featured !== undefined) queryParams.append("is_featured", String(filters.is_featured))
  if (filters.author_username) queryParams.append("author_username", filters.author_username)
  if (filters.page) queryParams.append("page", String(filters.page))
  if (filters.page_size) queryParams.append("page_size", String(filters.page_size))
  if (filters.search) queryParams.append("search", filters.search)
  if (filters.ordering) queryParams.append("ordering", filters.ordering)

  const response = await fetch(`${API_BLOG_URL}/blogs/?${queryParams.toString()}`)
  return handleResponse<PaginatedBlogPosts>(response)
}

export async function getFeaturedBlogs(): Promise<BlogPost[]> {
  const response = await fetch(`${API_BLOG_URL}/blogs/featured/`)
  return handleResponse<BlogPost[]>(response)
}

export async function getBlogPostBySlug(slug: string, authToken?: string): Promise<BlogPost> {
  const headers: HeadersInit = {}
  if (authToken) {
    headers["Authorization"] = `JWT ${authToken}`
  }

  const response = await fetch(`${API_BLOG_URL}/blogs/${slug}/`, { headers })
  return handleResponse<BlogPost>(response)
}

// --- Category API Functions ---
export async function getCategories(
  page = 1,
  pageSize = 100,
  search = "",
  ordering = "name",
): Promise<PaginatedCategories> {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    page_size: pageSize.toString(),
  })

  if (search) queryParams.append("search", search)
  if (ordering) queryParams.append("ordering", ordering)

  const response = await fetch(`${API_BLOG_URL}/categories/?${queryParams.toString()}`)
  return handleResponse<PaginatedCategories>(response)
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const response = await fetch(`${API_BLOG_URL}/categories/${slug}/`)
  return handleResponse<Category>(response)
}

// --- Admin API Functions (Blog Posts) ---
export async function createBlogPostWithJSON(data: any, authToken: string): Promise<BlogPost> {
  const response = await fetch(`${API_BLOG_URL}/blogs/`, {
    method: "POST",
    headers: {
      Authorization: `JWT ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return handleResponse<BlogPost>(response)
}

export async function createBlogPostWithFormData(formData: FormData, authToken: string): Promise<BlogPost> {
  const response = await fetch(`${API_BLOG_URL}/blogs/`, {
    method: "POST",
    headers: { Authorization: `JWT ${authToken}` },
    body: formData,
  })
  return handleResponse<BlogPost>(response)
}

export async function updateBlogPost(slug: string, formData: FormData, authToken: string): Promise<BlogPost> {
  const response = await fetch(`${API_BLOG_URL}/blogs/${slug}/`, {
    method: "PUT",
    headers: { Authorization: `JWT ${authToken}` },
    body: formData,
  })
  return handleResponse<BlogPost>(response)
}

export async function updateBlogPostWithJSON(slug: string, data: any, authToken: string): Promise<BlogPost> {
  const response = await fetch(`${API_BLOG_URL}/blogs/${slug}/`, {
    method: "PUT",
    headers: {
      Authorization: `JWT ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return handleResponse<BlogPost>(response)
}

export async function patchBlogPost(slug: string, data: any, authToken: string): Promise<BlogPost> {
  const response = await fetch(`${API_BLOG_URL}/blogs/${slug}/`, {
    method: "PATCH",
    headers: {
      Authorization: `JWT ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return handleResponse<BlogPost>(response)
}

export async function deleteBlogPost(slug: string, authToken: string): Promise<void> {
  const response = await fetch(`${API_BLOG_URL}/blogs/${slug}/`, {
    method: "DELETE",
    headers: { Authorization: `JWT ${authToken}` },
  })
  await handleResponse<void>(response)
}

// --- Admin API Functions (Categories) ---
export async function createCategory(
  data: { name: string; slug?: string; description?: string },
  authToken: string,
): Promise<Category> {
  const response = await fetch(`${API_BLOG_URL}/categories/`, {
    method: "POST",
    headers: {
      Authorization: `JWT ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return handleResponse<Category>(response)
}

export async function updateCategory(
  slug: string,
  data: { name?: string; slug?: string; description?: string },
  authToken: string,
): Promise<Category> {
  const response = await fetch(`${API_BLOG_URL}/categories/${slug}/`, {
    method: "PUT",
    headers: {
      Authorization: `JWT ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return handleResponse<Category>(response)
}

export async function patchCategory(
  slug: string,
  data: { name?: string; slug?: string; description?: string },
  authToken: string,
): Promise<Category> {
  const response = await fetch(`${API_BLOG_URL}/categories/${slug}/`, {
    method: "PATCH",
    headers: {
      Authorization: `JWT ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return handleResponse<Category>(response)
}

export async function deleteCategory(slug: string, authToken: string): Promise<void> {
  const response = await fetch(`${API_BLOG_URL}/categories/${slug}/`, {
    method: "DELETE",
    headers: { Authorization: `JWT ${authToken}` },
  })
  await handleResponse<void>(response)
}

// --- Admin-specific API Functions ---
export async function getBlogPostsAdmin(
  page = 1,
  pageSize = 100,
  search = "",
  categorySlug = "",
  authToken?: string,
): Promise<PaginatedBlogPosts> {
  const filters: BlogFilters = {
    page,
    page_size: pageSize,
    search,
    category: categorySlug,
    ordering: "-created_at", // Show newest first for admin
  }

  const queryParams = new URLSearchParams()
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      queryParams.append(key, String(value))
    }
  })

  const headers: HeadersInit = {}
  if (authToken) {
    headers["Authorization"] = `JWT ${authToken}`
  }

  const response = await fetch(`${API_BLOG_URL}/blogs/?${queryParams.toString()}`, { headers })
  return handleResponse<PaginatedBlogPosts>(response)
}

export async function getCategoriesAdmin(page = 1, pageSize = 100, authToken?: string): Promise<PaginatedCategories> {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    page_size: pageSize.toString(),
    ordering: "name",
  })

  const headers: HeadersInit = {}
  if (authToken) {
    headers["Authorization"] = `JWT ${authToken}`
  }

  const response = await fetch(`${API_BLOG_URL}/categories/?${queryParams.toString()}`, { headers })
  return handleResponse<PaginatedCategories>(response)
}
