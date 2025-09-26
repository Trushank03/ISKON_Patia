"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react" // 👈 icons

export function Header() {
  const [isTransparent, setIsTransparent] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // 👈 mobile toggle

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        setIsTransparent(rect.top <= 0 && rect.bottom > 0)
      } else {
        setIsTransparent(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Education & Programs" },
    { path: "/facilities", label: "Temples & Seva" },
    { path: "/cottages", label: "Cottages" },
    { path: "/donate", label: "Donation" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact us" },
  ]

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        isTransparent ? "bg-transparent" : "bg-white shadow"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/output-onlinepngtools.png"
            alt="ISKCON Logo"
            width={80}
            height={60}
            className="h-10 sm:h-12 md:h-16 w-auto mix-blend-multiply"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path} legacyBehavior>
                  <a
                    className={`transition-colors ${
                      isTransparent
                        ? "text-white hover:text-gray-200"
                        : "text-gray-800 hover:text-secondary"
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Donate Button (desktop only) */}
        <div className="hidden md:block">
          <Link
            href="/donate"
            className={`px-4 py-2 rounded-md text-sm font-medium ml-8 transition-colors ${
              isTransparent
                ? "bg-white text-primary hover:bg-gray-100"
                : "bg-primary text-white hover:bg-primary/90"
            }`}
          >
            Pladge Payment
          </Link>
        </div>

        {/* Mobile Hamburger */}
        {/* Mobile Hamburger */}
<button
  className="md:hidden"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? (
    <X size={28} className={isTransparent ? "text-white" : "text-gray-800"} />
  ) : (
    <Menu size={28} className={isTransparent ? "text-white" : "text-gray-800"} />
  )}
</button>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden px-6 py-4 space-y-4 ${
            isTransparent ? "bg-black/70 text-white" : "bg-white text-gray-800"
          }`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="block hover:text-secondary"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {item.label}
            </Link>
          ))}

          {/* Donate Button in mobile */}
          <Link
            href="/donate"
            className={`block w-full text-center px-4 py-2 rounded-md text-sm font-medium ${
              isTransparent
                ? "bg-white text-primary hover:bg-gray-100"
                : "bg-primary text-white hover:bg-primary/90"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Pladge Payment
          </Link>
        </div>
      )}
    </header>
  )
}
