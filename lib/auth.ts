import { getAuthToken, refreshAuthToken } from "./blog-api"
import type { AuthTokens } from "@/types/blog"
import { getStoredTokens, setStoredTokens, clearStoredTokens, isTokenExpired } from "./token-utils"

// Client-side auth token management
export class AuthManager {
  private static instance: AuthManager
  private accessToken: string | null = null
  private refreshToken: string | null = null

  private constructor() {
    // Initialize from localStorage if available
    if (typeof window !== "undefined") {
      const tokens = getStoredTokens()
      this.accessToken = tokens.access
      this.refreshToken = tokens.refresh
    }
  }

  static getInstance(): AuthManager {
    if (!AuthManager.instance) {
      AuthManager.instance = new AuthManager()
    }
    return AuthManager.instance
  }

  async login(username: string, password: string): Promise<{ success: boolean; error?: string }> {
    try {
      const tokens = await getAuthToken(username, password)
      this.setTokens(tokens)
      return { success: true }
    } catch (error: any) {
      console.error("Login error:", error)
      return { success: false, error: error.message || "Login failed" }
    }
  }

  setTokens(tokens: AuthTokens) {
    this.accessToken = tokens.access
    this.refreshToken = tokens.refresh

    if (typeof window !== "undefined") {
      setStoredTokens(tokens.access, tokens.refresh)
    }
  }

  getAccessToken(): string | null {
    // Always get fresh token from localStorage
    if (typeof window !== "undefined") {
      const tokens = getStoredTokens()
      this.accessToken = tokens.access
      return this.accessToken
    }
    return this.accessToken
  }

  getRefreshToken(): string | null {
    // Always get fresh token from localStorage
    if (typeof window !== "undefined") {
      const tokens = getStoredTokens()
      this.refreshToken = tokens.refresh
      return this.refreshToken
    }
    return this.refreshToken
  }

  async refreshAccessToken(): Promise<boolean> {
    const refreshToken = this.getRefreshToken()
    if (!refreshToken) return false

    try {
      const tokens = await refreshAuthToken(refreshToken)
      this.setTokens(tokens)
      return true
    } catch (error) {
      console.error("Token refresh failed:", error)
      this.logout()
      return false
    }
  }

  async getValidAccessToken(): Promise<string | null> {
    const accessToken = this.getAccessToken()

    if (!accessToken) return null

    // Check if token is expired
    if (isTokenExpired(accessToken)) {
      console.log("Access token expired, attempting refresh...")
      const refreshed = await this.refreshAccessToken()
      if (refreshed) {
        return this.getAccessToken()
      }
      return null
    }

    return accessToken
  }

  logout() {
    this.accessToken = null
    this.refreshToken = null

    if (typeof window !== "undefined") {
      clearStoredTokens()
    }
  }

  isAuthenticated(): boolean {
    const accessToken = this.getAccessToken()
    return !!accessToken && !isTokenExpired(accessToken)
  }
}

// Client-side auth token retrieval (no server-side cookies)
export function getClientAuthToken(): string | null {
  if (typeof window === "undefined") return null

  try {
    return localStorage.getItem("sanatana_access_token")
  } catch (error) {
    console.error("Error getting client auth token:", error)
    return null
  }
}

// For server actions, we'll pass the token from client-side
export function getAuthTokenForServerAction(): string | null {
  return getClientAuthToken()
}
