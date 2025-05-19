"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"
import { Copy } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [copySuccess, setCopySuccess] = useState<string | null>(null)

  // Copy to clipboard function
  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess(field)
        setTimeout(() => setCopySuccess(null), 2000)
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-amber-50">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/cream-watercolor-texture.jpg" alt="Background texture" fill className="object-cover" />
        </div>

        <div className="relative z-10 px-4 py-6 md:py-8 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
                <p className="text-primary text-sm sm:text-base md:text-lg">
                  "Your journey begins with a single step — towards Krishna."
                </p>
              </div>
              <div className="w-full max-w-[250px] md:max-w-[300px]">
                <Image
                  src="/images/golden-temple-illustration.png"
                  alt="Golden Temple Illustration"
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="px-4 py-10 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-lg shadow-sm p-8 border border-amber-200/50">
            <div className="max-w-3xl mx-auto">
              <AnimateOnView animation="fade-in" delay={200}>
                <p className="text-gray-800 mb-4 leading-relaxed">
                  We welcome you to connect with ISKCON Baranga-Patia, the upcoming Sri Sri Radha Nilamadhava Cultural
                  and Eco-Spiritual Heritage Village — a sanctuary where devotion meets purpose, and service meets
                  transcendence.
                </p>
              </AnimateOnView>

              <AnimateOnView animation="fade-in" delay={400}>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  Whether you're a seeker, supporter, devotee, donor, or well-wisher, your contribution—be it time,
                  talent, or treasure—can help shape a tirtha that will serve generations to come.
                </p>
              </AnimateOnView>

              <AnimateOnView animation="slide-in-right" delay={600}>
                <div className="pl-4 border-l-4 border-primary mb-6">
                  <p className="text-gray-800 font-medium mb-1">Have a desire to serve?</p>
                  <p className="text-gray-800 font-medium mb-1">Want to book a cottage or offer support?</p>
                  <p className="text-gray-800 font-medium">
                    Looking to contribute to a cause that nourishes both the soul and society?
                  </p>
                </div>
              </AnimateOnView>

              <AnimateOnView animation="fade-in" delay={800}>
                <p className="text-gray-800 mb-2 leading-relaxed">
                  Let us know how you'd like to take part in Krishna's divine mission.
                </p>
              </AnimateOnView>

              <AnimateOnView animation="fade-up" delay={1000}>
                <p className="text-primary font-bold text-lg">Reach out. Become a part of something revolutionary.</p>
              </AnimateOnView>
            </div>
          </div>
        </AnimateOnView>
      </section>

      {/* Bank Details Section - NEW */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2">Donation Details</h2>
          <div className="flex justify-center mb-6">
            <div className="w-full" style={{ maxWidth: "22rem" }}>
              <Image
                src="/images/heading-divider.png"
                alt="Decorative divider"
                width={350}
                height={10}
                className="w-full h-auto"
              />
            </div>
          </div>
        </AnimateOnView>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">ISKCON PATIA (Temple Authorised Central Account)</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex flex-col space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Account Number:</span>
                    <button
                      onClick={() => copyToClipboard("50100641155734", "account")}
                      className="text-primary hover:text-primary/80 flex items-center"
                      aria-label="Copy account number"
                    >
                      <Copy size={16} className="mr-1" />
                      {copySuccess === "account" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <span className="text-gray-800 font-semibold">50100641155734</span>
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600 font-medium">Account Name:</span>
                  <span className="text-gray-800 font-semibold">ISKCON PATIA</span>
                </div>

                <div className="flex flex-col space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">IFSC Code:</span>
                    <button
                      onClick={() => copyToClipboard("HDFC0002542", "ifsc")}
                      className="text-primary hover:text-primary/80 flex items-center"
                      aria-label="Copy IFSC code"
                    >
                      <Copy size={16} className="mr-1" />
                      {copySuccess === "ifsc" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <span className="text-gray-800 font-semibold">HDFC0002542</span>
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-gray-600 font-medium">Branch:</span>
                  <span className="text-gray-800 font-semibold">Patia, BBSR</span>
                </div>

                <div className="flex flex-col space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">UPI ID:</span>
                    <button
                      onClick={() => copyToClipboard("iskconpatia.62770644@hdfcbank", "upi")}
                      className="text-primary hover:text-primary/80 flex items-center"
                      aria-label="Copy UPI ID"
                    >
                      <Copy size={16} className="mr-1" />
                      {copySuccess === "upi" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <span className="text-gray-800 font-semibold">iskconpatia.62770644@hdfcbank</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QR%20code%20Patia.jpg-SCgmZ0CEs7EpMcQNrTepcSWy7uHao9.jpeg"
                    alt="ISKCON Patia UPI QR Code"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">Scan to donate via UPI</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                After making your donation, please send the transaction details to +91-7978776093 via WhatsApp for
                receipt.
              </p>
            </div>
          </div>
        </div>

        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2">Get in Touch</h2>
          <div className="flex justify-center mb-6">
            <div className="w-full" style={{ maxWidth: "22rem" }}>
              <Image
                src="/images/heading-divider.png"
                alt="Decorative divider"
                width={350}
                height={10}
                className="w-full h-auto"
              />
            </div>
          </div>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <AnimateOnView animation="fade-in" delay={200} className="md:w-1/2">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="donation">Donation Related</option>
                  <option value="cottage">Cottage Purchase</option>
                  <option value="visit">Schedule a Visit</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-transform duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </AnimateOnView>

          <AnimateOnView animation="fade-in" delay={300} className="md:w-1/2">
            <div className="bg-amber-50/50 p-6 rounded-lg h-full">
              <h3 className="text-primary text-lg font-semibold mb-4">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-primary mr-3 mt-1">
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
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      ISKCON Temple
                      <br />
                      Nandankanan Road, Patia
                      <br />
                      Bhubaneswar, Odisha 751024
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary mr-3 mt-1">
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
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91-7978776093</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary mr-3 mt-1">
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
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">info@sanatanacentre.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary mr-3 mt-1">
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
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Hours</h4>
                    <p className="text-gray-600">
                      Temple: 5:00 AM - 8:30 PM
                      <br />
                      Office: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-primary text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-primary">
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
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
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
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
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
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
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
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2">Visit Us</h2>
          <div className="flex justify-center mb-6">
            <div className="w-full" style={{ maxWidth: "22rem" }}>
              <Image
                src="/images/heading-divider.png"
                alt="Decorative divider"
                width={350}
                height={10}
                className="w-full h-auto"
              />
            </div>
          </div>
        </AnimateOnView>

        <AnimateOnView animation="fade-in" delay={200}>
          <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.6628398573774!2d85.82516421491993!3d20.356312636362096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909abd700711b%3A0x5317e2321ccc3b03!2sISKCON%20Patia!5e0!3m2!1sen!2sin!4v1683900000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ISKCON Patia, Bhubaneswar Location"
              aria-label="Google Maps showing ISKCON Patia location"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/place/ISKCON+Patia/@20.3563126,85.8251642,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1909abd700711b:0x5317e2321ccc3b03!8m2!3d20.3563076!4d85.8277391!16s%2Fg%2F11rr7q0s28?hl=en&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Get Directions
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
                className="ml-1"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </AnimateOnView>
      </section>

      <Footer />
    </main>
  )
}
