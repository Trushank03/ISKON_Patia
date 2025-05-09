// "use client"

// import type React from "react"

// import { useState } from "react"
// import Image from "next/image"
// import { useRouter } from "next/navigation"
// import { AnimateOnView } from "@/components/animate-on-view"

// export default function AdminLoginPage() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState("")
//   const router = useRouter()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setError("")

//     // In a real application, you would validate credentials against a backend
//     // For demo purposes, we'll use a simple check
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000))

//       // Demo credentials - in a real app, this would be a server-side check
//       if (email === "admin@example.com" && password === "password") {
//         router.push("/admin/event-creation")
//       } else {
//         setError("Invalid email or password")
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <main className="min-h-screen flex flex-col">
//       <div className="relative w-full h-16 bg-primary">
//         <div className="container mx-auto px-4 h-full flex items-center">
//           <div className="flex items-center">
//             <Image src="/images/iskcon-logo.png" alt="ISKCON Logo" width={80} height={60} className="h-12 w-auto" />
//             <span className="ml-3 text-white text-xl font-medium">Admin Portal</span>
//           </div>
//         </div>
//       </div>

//       <div className="flex-1 flex items-center justify-center bg-amber-50/30">
//         <div className="relative w-full max-w-md">
//           <div className="absolute inset-0 w-full h-full">
//             <Image
//               src="/images/cream-watercolor-texture.jpg"
//               alt="Background texture"
//               fill
//               className="object-cover opacity-30"
//             />
//           </div>

//           <div className="relative z-10 bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="p-8">
//               <AnimateOnView animation="fade-up">
//                 <div className="text-center mb-6">
//                   <h1 className="text-2xl font-bold text-primary">Admin Login</h1>
//                   <p className="text-gray-600 mt-2">Sign in to manage temple events and content</p>
//                 </div>

//                 {error && (
//                   <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
//                     {error}
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
//                       Email Address
//                     </label>
//                     <input
//                       id="email"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
//                       placeholder="Enter your email"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
//                       Password
//                     </label>
//                     <input
//                       id="password"
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
//                       placeholder="Enter your password"
//                       required
//                     />
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <input
//                         id="remember-me"
//                         name="remember-me"
//                         type="checkbox"
//                         className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
//                       />
//                       <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                         Remember me
//                       </label>
//                     </div>

//                     <div className="text-sm">
//                       <a href="#" className="text-primary hover:text-primary/80">
//                         Forgot password?
//                       </a>
//                     </div>
//                   </div>

//                   <div>
//                     <button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex justify-center items-center"
//                     >
//                       {isLoading ? (
//                         <svg
//                           className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                       ) : null}
//                       {isLoading ? "Signing in..." : "Sign in"}
//                     </button>
//                   </div>
//                 </form>
//               </AnimateOnView>

//               <div className="mt-6 text-center">
//                 <p className="text-sm text-gray-600">For admin access, please contact the temple management office.</p>
//               </div>
//             </div>

//             <div className="bg-amber-50 py-4 px-8 text-center">
//               <p className="text-xs text-gray-600">© 2025 Sanatana Dharma Centre. All rights reserved.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }


"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { AnimateOnView } from "@/components/animate-on-view"
import { loginUser, isAuthenticated } from "@/lib/api"

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  // Check if user is already authenticated
  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/admin/event-creation")
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const { data, error } = await loginUser({ username, password })

      if (error || !data) {
        setError(error || "Login failed. Please check your credentials.")
        return
      }

      // If login successful, redirect to admin dashboard
      router.push("/admin/event-creation")
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error("Login error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative w-full h-16 bg-primary">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="flex items-center">
            <Image src="/images/iskcon-logo.png" alt="ISKCON Logo" width={80} height={60} className="h-12 w-auto" />
            <span className="ml-3 text-white text-xl font-medium">Admin Portal</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-amber-50/30">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/cream-watercolor-texture.jpg"
              alt="Background texture"
              fill
              className="object-cover opacity-30"
            />
          </div>

          <div className="relative z-10 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <AnimateOnView animation="fade-up">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-primary">Admin Login</h1>
                  <p className="text-gray-600 mt-2">Sign in to manage temple events and content</p>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-1">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Enter your username"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="text-primary hover:text-primary/80">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex justify-center items-center"
                    >
                      {isLoading ? (
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : null}
                      {isLoading ? "Signing in..." : "Sign in"}
                    </button>
                  </div>
                </form>
              </AnimateOnView>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">For admin access, please contact the temple management office.</p>
              </div>
            </div>

            <div className="bg-amber-50 py-4 px-8 text-center">
              <p className="text-xs text-gray-600">© 2025 Sanatana Dharma Centre. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
