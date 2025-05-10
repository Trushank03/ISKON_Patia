"use client"
import { motion } from "framer-motion"
import type React from "react"

import { X } from "lucide-react"
import { useRouter } from "next/navigation"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const router = useRouter()

  // Menu items array for easier management
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/facilities", label: "Facilities" },
    { path: "/cottages", label: "Cottages" },
    { path: "/donate", label: "Donation" },
    { path: "/contact", label: "Contact us" },
  ]

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    e.stopPropagation()
    onClose()
    setTimeout(() => {
      router.push(path)
    }, 10)
  }

  return (
    <motion.div
      className="fixed top-0 right-0 h-full w-64 md:w-80 bg-white shadow-lg z-50 overflow-y-auto"
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center p-4 md:p-6 border-b">
        <h2 className="text-lg md:text-xl font-medium text-primary">Menu</h2>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="text-gray-500 hover:text-primary"
        >
          <X size={20} />
        </button>
      </div>

      <div className="py-4">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="border-b border-gray-100">
              <a
                href={item.path}
                className="block w-full text-left py-3 px-4 md:py-4 md:px-6 text-gray-800 md:text-lg hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={(e) => handleNavigation(e, item.path)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
