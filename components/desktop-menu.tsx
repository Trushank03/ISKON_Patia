"use client"
import { motion } from "framer-motion"
import type React from "react"

import { X } from "lucide-react"
import { useRouter } from "next/navigation"

interface DesktopMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function DesktopMenu({ isOpen, onClose }: DesktopMenuProps) {
  const router = useRouter()

  // Menu items array for easier management
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
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
      className="fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 overflow-y-auto"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="text-xl font-medium text-primary">Menu</h2>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="text-gray-500 hover:text-primary"
        >
          <X size={24} />
        </button>
      </div>

      <div className="py-4">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="border-b border-gray-100">
              <a
                href={item.path}
                className="block w-full text-left py-4 px-6 text-lg hover:bg-primary/10 hover:text-primary transition-colors text-gray-800"
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
