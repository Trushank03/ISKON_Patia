"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-white py-1 sm:py-2 px-2 sm:px-4 text-center">
        <p className="text-xs sm:text-sm md:text-lg">New Iskcon Temple going to be inaugurated on june .......</p>
      </div>

      {/* Main Header */}
      <header className="bg-white">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/placeholder.svg?key=iolir"
                  alt="ISKCON Logo"
                  width={150}
                  height={80}
                  className="h-10 sm:h-12 md:h-16 w-auto"
                />
              </Link>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-6">
              <div className="hidden md:flex items-center text-primary text-2xl font-medium">
                Menu
                <div className="ml-3 flex flex-col space-y-1.5">
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <div className="w-8 h-0.5 bg-primary"></div>
                </div>
              </div>

              <Link
                href="/donate"
                className="bg-primary hover:bg-primary/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-md text-xs sm:text-sm md:text-lg font-medium"
              >
                Donate Now
              </Link>

              <button className="md:hidden text-primary" onClick={toggleMenu}>
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
                  {isMenuOpen ? (
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
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu />}
    </>
  )
}
