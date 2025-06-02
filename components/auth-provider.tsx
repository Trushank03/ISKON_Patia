"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { AuthManager } from "@/lib/auth"

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  refreshToken: () => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated on mount
    const authManager = AuthManager.getInstance()
    setIsAuthenticated(authManager.isAuthenticated())
    setIsLoading(false)
  }, [])

  const login = async (username: string, password: string) => {
    const authManager = AuthManager.getInstance()
    const result = await authManager.login(username, password)
    if (result.success) {
      setIsAuthenticated(true)
    }
    return result
  }

  const logout = () => {
    const authManager = AuthManager.getInstance()
    authManager.logout()
    setIsAuthenticated(false)
  }

  const refreshToken = async () => {
    const authManager = AuthManager.getInstance()
    const success = await authManager.refreshAccessToken()
    if (!success) {
      setIsAuthenticated(false)
    }
    return success
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, refreshToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
