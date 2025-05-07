"use client"
import Link from "next/link"

export function MobileMenu() {
  return (
    <div className="md:hidden bg-white border-t border-gray-200 w-full">
      <div className="container mx-auto px-4 py-3">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block py-1 text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block py-1 text-sm">
              About
            </Link>
          </li>
          <li>
            <Link href="/facilities" className="block py-1 text-sm">
              Facilities
            </Link>
          </li>
          <li>
            <Link href="/cottages" className="block py-1 text-sm">
              Cottages
            </Link>
          </li>
          <li>
            <Link href="/events" className="block py-1 text-sm">
              Events
            </Link>
          </li>
          <li>
            <Link href="/donation" className="block py-1 text-sm">
              Donation
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-1 text-sm">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
