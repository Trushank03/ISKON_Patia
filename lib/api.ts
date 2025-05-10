// // API base URL
// const API_BASE_URL = "http://127.0.0.1:8000/api"

// // Token storage keys
// const ACCESS_TOKEN_KEY = "sanatana_access_token"
// const REFRESH_TOKEN_KEY = "sanatana_refresh_token"

// // Types
// interface LoginCredentials {
//   username: string
//   password: string
// }

// interface AuthTokens {
//   access: string
//   refresh: string
// }

// interface ApiResponse<T> {
//   data: T | null
//   error: string | null
// }

// // Token management functions
// export const getAccessToken = (): string | null => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem(ACCESS_TOKEN_KEY)
//   }
//   return null
// }

// export const getRefreshToken = (): string | null => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem(REFRESH_TOKEN_KEY)
//   }
//   return null
// }

// export const setTokens = (tokens: AuthTokens): void => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem(ACCESS_TOKEN_KEY, tokens.access)
//     localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refresh)
//   }
//   console.log("Tokens set:", tokens)
// }

// export const clearTokens = (): void => {
//   if (typeof window !== "undefined") {
//     localStorage.removeItem(ACCESS_TOKEN_KEY)
//     localStorage.removeItem(REFRESH_TOKEN_KEY)
//   }
// }

// export const isAuthenticated = (): boolean => {
//   return !!getAccessToken()
// }

// // API request helper with authorization
// const apiRequest = async <T>(
//   endpoint: string,
//   method: string = 'GET',
//   data?: any,
//   requiresAuth: boolean = true
// )
// : Promise<ApiResponse<T>> =>
// {
//   try {
//     const url = `${API_BASE_URL}${endpoint}`
//     const headers: HeadersInit = {
//       "Content-Type": "application/json",
//     }

//     // Add authorization header if required and token exists
//     if (requiresAuth) {
//       const token = getAccessToken()
//       if (token) {
//         headers["Authorization"] = `JWT ${token}`
//       } else {
//         return { data: null, error: 'Authentication required' };
//       }
//     }

//     const options: RequestInit = {
//       method,
//       headers,
//       body: data ? JSON.stringify(data) : undefined,
//     }

//     const response = await fetch(url, options)

//     // Handle unauthorized errors (token expired)
//     if (response.status === 401) {
//       // Could implement token refresh here
//       clearTokens()
//       return { data: null, error: 'Session expired. Please login again.' };
//     }

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}))
//       return {
//         data: null,
//         error: errorData.detail || `Error: ${response.status} ${response.statusText}`
//       };
//     }

//     // For endpoints that don't return JSON
//     if (response.status === 204) {
//       return { data: null, error: null };
//     }

//     const responseData = await response.json()
//     return { data: responseData, error: null };
//   } catch (error) {
//     console.error("API request failed:", error)
//     return {
//       data: null,
//       error: error instanceof Error ? error.message : 'Unknown error occurred'
//     };
//   }
// }

// // Authentication API functions
// // Authentication API functions
// export const loginUser = async (credentials: LoginCredentials): Promise<ApiResponse<AuthTokens>> => {
//   const response = await apiRequest<AuthTokens>("/token/", "POST", credentials, false)

//   // If login was successful, save the tokens
//   if (response.data && response.error === null) {
//     setTokens(response.data)
//   }

//   return response
// }

// export const logoutUser = (): void => {
//   clearTokens()
// }

// // Token refresh function (can be implemented if needed)
// export const refreshAuthToken = async (): Promise<ApiResponse<{ access: string }>> => {
//   const refreshToken = getRefreshToken()
//   if (!refreshToken) {
//     return { data: null, error: "No refresh token available" }
//   }

//   return apiRequest<{ access: string }>("/token/refresh/", "POST", { refresh: refreshToken }, false)
// }

// // Example of other API functions that would use the token
// export const fetchUserProfile = async (): Promise<ApiResponse<any>> => {
//   return apiRequest("/user/profile/", "GET")
// }

// export const createEvent = async (eventData: any): Promise<ApiResponse<any>> => {
//   return apiRequest("/notice/notices/", "POST", eventData)
// }

// export const updateEvent = async (id: number, eventData: any): Promise<ApiResponse<any>> => {
//   return apiRequest(`/notice/notices/${id}/update/`, "PUT", eventData)
// }

// export const deleteEvent = async (id: number): Promise<ApiResponse<any>> => {
//   return apiRequest(`/notice/notices/${id}/delete/`, "DELETE")
// }

// export const fetchEvents = async (): Promise<ApiResponse<any[]>> => {
//   return apiRequest("/notice/notices/", "GET")
// }

// export const fetchEventById = async (id: number): Promise<ApiResponse<any>> => {
//   return apiRequest(`/notice/notices/${id}/`, "GET")
// }

// API base URL
const API_BASE_URL = "http://127.0.0.1:8000/api"
// const PRODUCTION_API_BASE_URL = "https://iskconbarangapatia.com/api"

// Token storage keys
const ACCESS_TOKEN_KEY = "sanatana_access_token"
const REFRESH_TOKEN_KEY = "sanatana_refresh_token"

// Types
interface LoginCredentials {
  username: string
  password: string
}

interface AuthTokens {
  access: string
  refresh: string
}

interface ApiResponse<T> {
  data: T | null
  error: string | null
}

// Token management functions
export const getAccessToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
  }
  return null
}

export const getRefreshToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(REFRESH_TOKEN_KEY)
  }
  return null
}

export const setTokens = (tokens: AuthTokens): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.access)
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refresh)
  }
}

export const clearTokens = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  }
}

export const isAuthenticated = (): boolean => {
  return !!getAccessToken()
}

// API request helper with authorization
const apiRequest = async <T>(
  endpoint: string,
  method: string = 'GET',
  data?: any,
  requiresAuth: boolean = true,
  isFormData: boolean = false
)
: Promise<ApiResponse<T>> =>
{
  try {
    const url = `${API_BASE_URL}${endpoint}`
    const headers: HeadersInit = {}

    // Set content type only if not FormData
    if (!isFormData) {
      headers["Content-Type"] = "application/json"
    }

    // Add authorization header if required and token exists
    if (requiresAuth) {
      const token = getAccessToken()
      if (token) {
        headers["Authorization"] = `JWT ${token}`
      } else {
        return { data: null, error: 'Authentication required' };
      }
    }

    const options: RequestInit = {
      method,
      headers,
      // Don't stringify if it's FormData
      body: isFormData ? data : data ? JSON.stringify(data) : undefined,
    }

    const response = await fetch(url, options)

    // Handle unauthorized errors (token expired)
    if (response.status === 401) {
      clearTokens()
      return { data: null, error: 'Session expired. Please login again.' };
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return { 
        data: null, 
        error: errorData.detail || `Error: ${response.status} ${response.statusText}` 
      };
    }

    // For endpoints that don't return JSON
    if (response.status === 204) {
      return { data: null, error: null };
    }

    const responseData = await response.json()
    return { data: responseData, error: null };
  } catch (error) {
    console.error("API request failed:", error)
    return { 
      data: null, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}

// Authentication API functions
export const loginUser = async (credentials: LoginCredentials): Promise<ApiResponse<AuthTokens>> => {
  const response = await apiRequest<AuthTokens>("/token/", "POST", credentials, false)

  // If login was successful, save the tokens
  if (response.data && response.error === null) {
    setTokens(response.data)
  }

  return response
}

export const logoutUser = (): void => {
  clearTokens()
}

// Token refresh function (can be implemented if needed)
export const refreshAuthToken = async (): Promise<ApiResponse<{ access: string }>> => {
  const refreshToken = getRefreshToken()
  if (!refreshToken) {
    return { data: null, error: "No refresh token available" }
  }

  return apiRequest<{ access: string }>("/token/refresh/", "POST", { refresh: refreshToken }, false)
}

// Example of other API functions that would use the token
export const fetchUserProfile = async (): Promise<ApiResponse<any>> => {
  return apiRequest("/user/profile/", "GET", undefined, true)
}

export const createEvent = async (eventData: FormData): Promise<ApiResponse<any>> => {
  return apiRequest("/notice/notices/", "POST", eventData, true, true)
}

export const updateEvent = async (id: number, eventData: FormData): Promise<ApiResponse<any>> => {
  return apiRequest(`/notice/notices/${id}/update/`, "PUT", eventData, true, true)
}

export const deleteEvent = async (id: number): Promise<ApiResponse<any>> => {
  return apiRequest(`/notice/notices/${id}/delete/`, "DELETE", undefined, true)
}

export const fetchEvents = async (): Promise<ApiResponse<any[]>> => {
  return apiRequest("/notice/notices/published/?page=1&page_size=10", "GET", undefined, true)
}

export const fetchEventById = async (id: number): Promise<ApiResponse<any>> => {
  return apiRequest(`/notice/notices/${id}/`, "GET", undefined, true)
}
