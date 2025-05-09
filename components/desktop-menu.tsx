"use client"
import { motion } from "framer-motion"
import { X } from "lucide-react"

interface DesktopMenuProps {
  onClose: () => void
}

export function DesktopMenu({ onClose }: DesktopMenuProps) {
  const handleNavigation = (path: string) => {
    // Close the menu first
    onClose()
    // Use a timeout to ensure the menu closes before navigation
    setTimeout(() => {
      window.location.href = path
    }, 100)
  }

  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-20 overflow-y-auto"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="text-xl font-medium text-primary">Menu</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-primary">
          <X size={24} />
        </button>
      </div>

      <div className="py-4">
        <ul>
          <li className="border-b border-gray-100">
            <button
              onClick={() => handleNavigation("/")}
              className="block w-full text-left py-4 px-6 text-lg hover:bg-primary/10 hover:text-primary transition-colors text-gray-800"
            >
              Home
            </button>
          </li>
          <li className="border-b border-gray-100">
            <button
              onClick={() => handleNavigation("/about")}
              className="block w-full text-left py-4 px-6 text-lg hover:bg-primary/10 hover:text-primary transition-colors text-gray-800"
            >
              About
            </button>
          </li>
          <li className="border-b border-gray-100">
            <button
              onClick={() => handleNavigation("/facilities")}
              className="block w-full text-left py-4 px-6 text-lg hover:bg-primary/10 hover:text-primary transition-colors text-gray-800"
            >
              Facilities
            </button>
          </li>
          <li className="border-b border-gray-100">
            <button
              onClick={() => handleNavigation("/cottages")}
              className="block w-full text-left py-4 px-6 text-lg hover:bg-primary/10 hover:text-primary transition-colors text-gray-800"
            >
              Cottages
            </button>
          </li>
          <li className="border-b border-gray-100">
            <button
              onClick={() => handleNavigation("/donate")}
              className="block w-full text-left py-4 px-6 text-lg hover:bg-primary/10 hover:text-primary transition-colors text-gray-800"
            >
              Donation
            </button>
          </li>
          <li className="border-b border-gray-100">
            <button
              onClick={() => handleNavigation("/contact")}
              className="block w-full text-left py-4 px-6 text-lg hover:bg-primary/10 hover:text-primary transition-colors text-gray-800"
            >
              Contact us
            </button>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}
