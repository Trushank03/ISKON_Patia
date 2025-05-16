import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-32 mb-4">
              <Image
                src="/images/iskcon-logo.png"
                alt="ISKCON Logo"
                width={150}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <div className="flex space-x-3 mt-2">
              {[
                { icon: "facebook", href: "#" },
                { icon: "instagram", href: "#" },
                { icon: "twitter", href: "#" },
                { icon: "linkedin", href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#b8a99a] flex items-center justify-center transition-transform hover:scale-110"
                >
                  {social.icon === "facebook" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  )}
                  {social.icon === "twitter" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links and Contact */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-primary text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-800 hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/facilities" className="text-gray-800 hover:text-primary">
                    Temple Facilities
                  </Link>
                </li>
                <li>
                  <Link href="/cottages" className="text-gray-800 hover:text-primary">
                    Cottage Enquiry
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="text-gray-800 hover:text-primary">
                    Donate Now
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-800 hover:text-primary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-primary text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-800">ISKCON Patia, Bhubaneswar</li>
                <li className="text-gray-800">+91 1234567890</li>
                <li className="text-gray-800">info@iskconpatia.org</li>
              </ul>
            </div>
          </div>

          {/* Location Map */}
          <div>
            <h3 className="text-primary text-xl font-semibold mb-4">Location Map</h3>
            <div className="h-40 rounded-md relative overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.2825767285577!2d85.82516417597425!3d20.356312586362856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909abd700711b%3A0x5317e2321ccc3b03!2sISKCON%20Patia!5e0!3m2!1sen!2sin!4v1715350402000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ISKCON Patia Location"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mt-2">
              <a
                href="https://www.google.com/maps/place/ISKCON+Patia/@20.3563126,85.8251642,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1909abd700711b:0x5317e2321ccc3b03!8m2!3d20.3563076!4d85.8277391!16s%2Fg%2F11rr7q0s28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm hover:underline flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      {/* <div className="border-t border-gray-200 mt-8">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© 2025, Iskcon Patia, Bhubaneswar, All Rights Reserved</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-primary text-sm">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms-of-use" className="text-gray-600 hover:text-primary text-sm">
              Terms of Use
            </Link>
          </div>
        </div>
      </div> */}



      {/* <div className="border-t border-gray-200 mt-8">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © 2025, Iskcon Patia, Bhubaneswar — All Rights Reserved
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-center">
            <div className="text-gray-600 text-sm">
              <span className="inline-block">Crafted by</span>{' '}
              <a
                href="https://diracai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                DiracAI Pvt. Ltd.
              </a>
            </div>
            <div className="flex space-x-3 justify-center mt-1 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-primary text-sm">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms-of-use" className="text-gray-600 hover:text-primary text-sm">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div> */}



      <div className="bg-white border-t border-gray-200 mt-8">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © 2025 <span className="font-semibold">ISKCON Patia, Bhubaneswar</span> — All Rights Reserved
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-center mt-2 md:mt-0">
            <p className="text-gray-600">
              Crafted by{" "}
              <a
                href="https://diracai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                DiracAI Pvt. Ltd.
              </a>
            </p>
            <div className="hidden sm:block text-gray-400">|</div>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-primary">
              Privacy Policy
            </Link>
            <div className="hidden sm:block text-gray-400">|</div>
            <Link href="/refund-policy" className="text-gray-600 hover:text-primary">
              Refund Policy
            </Link>
            <div className="hidden sm:block text-gray-400">|</div>
            <Link href="/terms-of-use" className="text-gray-600 hover:text-primary">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>


    </footer>
  )
}
