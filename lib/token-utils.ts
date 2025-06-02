// Token utility functions for consistent token management

// Get tokens from localStorage
export function getStoredTokens(): { access: string | null; refresh: string | null } {
  if (typeof window === "undefined") {
    return { access: null, refresh: null }
  }

  return {
    access: localStorage.getItem("sanatana_access_token"),
    refresh: localStorage.getItem("sanatana_refresh_token"),
  }
}

// Set tokens in localStorage
export function setStoredTokens(accessToken: string, refreshToken: string): void {
  if (typeof window === "undefined") return

  localStorage.setItem("sanatana_access_token", accessToken)
  localStorage.setItem("sanatana_refresh_token", refreshToken)
}

// Clear tokens from localStorage
export function clearStoredTokens(): void {
  if (typeof window === "undefined") return

  localStorage.removeItem("sanatana_access_token")
  localStorage.removeItem("sanatana_refresh_token")
}

// Check if token is expired
export function isTokenExpired(token: string | null): boolean {
  if (!token) return true

  try {
    const payload = JSON.parse(atob(token.split(".")[1]))
    const expiryTime = payload.exp * 1000 // Convert to milliseconds
    return Date.now() >= expiryTime
  } catch (error) {
    console.error("Error checking token expiration:", error)
    return true // If we can't parse the token, consider it expired
  }
}

// Get token from localStorage with expiration check
export function getValidTokenFromStorage(): string | null {
  const token = localStorage.getItem("sanatana_access_token")

  if (!token || isTokenExpired(token)) {
    return null
  }

  return token
}
