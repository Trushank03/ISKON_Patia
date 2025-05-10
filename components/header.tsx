"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "./mobile-menu"
import { DesktopMenu } from "./desktop-menu"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDesktopMenu = () => {
    setIsDesktopMenuOpen(!isDesktopMenuOpen)
  }

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsDesktopMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-white py-1 sm:py-2 px-2 sm:px-4 text-center">
        <p className="text-xs sm:text-sm md:text-lg">New Iskcon Temple going to be inaugurated on june .......</p>
      </div>

      {/* Main Header */}
      <header className="bg-white relative z-20">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/iskcon-logo.png"
                  alt="ISKCON Logo"
                  width={80}
                  height={60}
                  className="h-10 sm:h-12 md:h-16 w-auto"
                />
              </Link>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-6">
              <button
                onClick={toggleDesktopMenu}
                className="hidden md:flex items-center text-primary text-2xl font-medium cursor-pointer"
              >
                Menu
                <div className="ml-3 flex flex-col space-y-1.5">
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <div className="w-8 h-0.5 bg-primary"></div>
                </div>
              </button>

              <Link
                href="/donate"
                className="bg-primary hover:bg-primary/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-md text-xs sm:text-sm md:text-lg font-medium"
              >
                Donate Now
              </Link>

              <div className="md:hidden">
                <button className="text-primary" onClick={toggleMobileMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {isMobileMenuOpen ? (
                      <>
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </>
                    ) : (
                      <>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menus and Overlays */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <MobileMenu isOpen={true} onClose={() => setIsMobileMenuOpen(false)} />
        </>
      )}

      {isDesktopMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsDesktopMenuOpen(false)}
            aria-hidden="true"
          />
          <DesktopMenu isOpen={true} onClose={() => setIsDesktopMenuOpen(false)} />
        </>
      )}
    </>
  )
}
