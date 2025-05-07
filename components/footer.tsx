import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <Link href="/about" className="text-sm sm:text-base text-gray-600 hover:text-primary mb-1 sm:mb-2">
              About
            </Link>
            <Link href="/facilities" className="text-sm sm:text-base text-gray-600 hover:text-primary mb-1 sm:mb-2">
              Centre Facilities
            </Link>
            <Link href="/cottages" className="text-sm sm:text-base text-gray-600 hover:text-primary mb-1 sm:mb-2">
              Cottages
            </Link>
            <Link href="/events" className="text-sm sm:text-base text-gray-600 hover:text-primary mb-1 sm:mb-2">
              Events
            </Link>
            <Link href="/donation" className="text-sm sm:text-base text-gray-600 hover:text-primary mb-1 sm:mb-2">
              Donation
            </Link>
            <Link href="/contact" className="text-sm sm:text-base text-gray-600 hover:text-primary mb-1 sm:mb-2">
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Sanatana Dharma Centre</p>
            <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Shanti Bhumi, Pune, Maharashtra</p>
            <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">India</p>
            <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Phone: +91-9000000000</p>
            <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">Email: info@sanatanacentre.org</p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Location Map</h3>
            <div className="h-32 sm:h-40 bg-gray-200 rounded-md relative">
              <Image src="/map-location-pin.png" alt="Location Map" fill className="object-cover rounded-md" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-3 sm:mb-4">
              <Image
                src="/placeholder.svg?key=2m4cp"
                alt="Sanatana Dharma Centre Logo"
                width={40}
                height={40}
                className="mr-2 sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]"
              />
              <span className="font-semibold text-sm sm:text-base">Sanatana Dharma Centre</span>
            </div>

            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              A spiritual centre dedicated to the teachings of Sanatana Dharma, offering a sanctuary for sincere
              bhaktas.
            </p>

            <div className="flex space-x-4 mb-3 sm:mb-4">
              <Link href="#" className="text-gray-600 hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-5 sm:h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-5 sm:h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-5 sm:h-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-5 sm:h-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-gray-600 text-xs sm:text-sm">
          <p>© 2024 Sanatana Dharma Centre. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-1 sm:mt-2">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-primary">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
