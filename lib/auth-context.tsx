"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { clearTokens, isAuthenticated } from "@/lib/api"

interface AuthContextType {
  isLoggedIn: boolean
  loading: boolean
  logout: () => void
  checkAuthStatus: () => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = () => {
      const authenticated = isAuthenticated()
      setIsLoggedIn(authenticated)
      setLoading(false)
    }

    checkAuth()
  }, [])

  const logout = () => {
    clearTokens()
    setIsLoggedIn(false)
    router.push("/loginadmin")
  }

  const checkAuthStatus = (): boolean => {
    const authenticated = isAuthenticated()
    setIsLoggedIn(authenticated)
    return authenticated
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading, logout, checkAuthStatus }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Auth protection HOC for client components
export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    const { isLoggedIn, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!loading && !isLoggedIn) {
        router.push("/loginadmin")
      }
    }, [isLoggedIn, loading, router])

    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )
    }

    if (!isLoggedIn) {
      return null
    }

    return <Component {...props} />
  }
}
