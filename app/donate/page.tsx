"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"
import { Check, ArrowRight, Heart, FileText, Shield, Mail } from "lucide-react"

export default function DonatePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Donation options as shown in the design
  const donationOptions = [
    {
      name: "Brick Seva",
      amount: 1100,
      description: "Contribute one temple brick in your name.",
    },
    {
      name: "Bhakti Floor Seva",
      amount: 5100,
      description: "Sponsor part of the temple floor. Renewed quarterly.",
    },
    {
      name: "Prasadam Seva",
      amount: 11000,
      description: "Sponsor meals for 100 devotees.",
    },
    {
      name: "Deity Ornament Sponsorship",
      amount: 21000,
      description: "Help adorn the deities with new ornaments.",
    },
    {
      name: "Cottage Wing Builder",
      amount: 51000,
      description: "Help complete a full cottage or temple wing.",
    },
  ]

  // Monthly seva options
  const monthlyOptions = [{ amount: 501 }, { amount: 1001 }, { amount: 2100 }]

  // Testimonials
  const testimonials = [
    {
      quote: "Contributing to ISKCON Patia has been the most meaningful act of devotion I've done.",
      name: "Ramesh B, Delhi",
      image: "/images/testimonial1.jpg",
    },
  ]

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <main className="min-h-screen bg-amber-50/30">
      <Header />

      {/* Hero Section - Styled exactly like the About page */}
      <section className="relative w-full bg-amber-50">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/cream-watercolor-texture.jpg" alt="Background texture" fill className="object-cover" />
        </div>

        <div className="relative z-10 px-4 py-6 md:py-8 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h1
                  className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: "#B94A3E" }}
                >
                  Help Us Build a Home for Devotion, Peace, and Knowledge
                </h1>
                <p className="text-primary text-sm sm:text-base md:text-lg">
                  Your support empowers ISKCON to build a divine ecosystem
                </p>
                <p className="text-primary text-sm sm:text-base md:text-lg">that will inspire generations</p>
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

      {/* Bhagavad Gita Quote - Full Width White Background */}
      <section className="w-full bg-white py-6 md:py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-800 text-lg md:text-xl italic mb-2">
              "Even a leaf, a flower, fruit or water offered with devotion is accepted by Krishna. Imagine what a temple
              offered in love can do."
            </p>
            <p className="text-gray-700 italic">– Bhagavad Gita 9:26</p>
          </div>
        </div>
      </section>

      {/* Spiritual Service Section */}
      <section className="relative w-full py-8">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/cream-watercolor-texture.jpg" alt="Background texture" fill className="object-cover" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-center text-2xl font-bold mb-6" style={{ color: "#B94A3E" }}>
              More than a Donation. It's a Spiritual Service.
            </h2>

            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check size={20} className="text-primary" />
                </div>
                <span className="ml-3 text-gray-800 text-lg">Your donation builds Krishna's temple in Odisha</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check size={20} className="text-primary" />
                </div>
                <span className="ml-3 text-gray-800 text-lg">Supports the Vedic Knowledge Centre for youth</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check size={20} className="text-primary" />
                </div>
                <span className="ml-3 text-gray-800 text-lg">Feeds and shelters protected cows in our Goshala</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check size={20} className="text-primary" />
                </div>
                <span className="ml-3 text-gray-800 text-lg">Establishes a retreat for spiritual rejuvenation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Donation Options Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-primary text-2xl font-bold text-center mb-2">Multiple Ways to Contribute</h2>
              <p className="text-center text-gray-700 mb-6">
                Choose your seva. Every donation helps build a spiritual legacy.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Donation Option</th>
                      <th className="py-3 px-4 text-left">Amount (INR)</th>
                      <th className="py-3 px-4 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donationOptions.map((option, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-amber-50/50">
                        <td className="py-3 px-4 font-medium">{option.name}</td>
                        <td className="py-3 px-4">{formatCurrency(option.amount)}</td>
                        <td className="py-3 px-4 text-gray-700">{option.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Payment Options</h3>
                    <p className="text-gray-600 text-sm">Integrated via Razorpay Checkout</p>
                    <p className="text-gray-600 text-sm">Supports: UPI, Debit/Credit Cards, Netbanking, Wallets</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Image
                      src="/images/payment-icon.png"
                      alt="Payment Options"
                      width={80}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Tax Exemption (80G Certified)</h3>
                  <p className="text-gray-600 text-sm">
                    All donations are eligible under Section 80G of the Income Tax Act.
                    <br />
                    Auto-generated tax receipt will be emailed instantly after your donation.
                  </p>
                </div>
              </div>

              <div className="text-center mb-12">
                <Link
                  href="/donate/payment"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md text-lg transition-transform duration-300 hover:scale-105 inline-flex items-center"
                >
                  Donate Now & Support Krishna's Mission
                </Link>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Monthly Bhakti Circle Section */}
      <section className="relative w-full py-8 px-4">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/cream-watercolor-texture.jpg" alt="Background texture" fill className="object-cover" />
        </div>

        <div className="container mx-auto relative z-10">
          <AnimateOnView animation="fade-up">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/95 rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 text-center">
                  <h2 className="text-primary text-2xl font-bold mb-4">Join the Monthly Bhakti Circle</h2>

                  <div className="flex justify-center gap-4 mb-6">
                    {monthlyOptions.map((option, index) => (
                      <div key={index} className="text-center">
                        <span className="block text-lg font-semibold text-gray-800">
                          {formatCurrency(option.amount)}
                        </span>
                        <span className="text-gray-600 text-sm">per month</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Benefits:</h3>
                    <ul className="text-left max-w-md mx-auto space-y-2">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check size={16} className="text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700">Monthly temple updates</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check size={16} className="text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700">Special birthday / anniversary blessings</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check size={16} className="text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700">Digital e-prasad and exclusive livestream invites</span>
                      </li>
                    </ul>
                  </div>

                  <Link
                    href="/donate/payment?plan=monthly"
                    className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300 inline-block"
                  >
                    Join Monthly Seva Plan
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-primary text-2xl font-bold text-center mb-6">Donor Testimonials</h2>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                      <Image
                        src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                        alt="Donor"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4 text-center md:text-left md:pl-6">
                    <p className="text-gray-700 italic mb-2">"{testimonials[activeTestimonial].quote}"</p>
                    <p className="text-primary font-medium">— {testimonials[activeTestimonial].name}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Step-by-Step Section - Redesigned to match the image */}
      <section className="py-12 px-4 bg-amber-50/80">
        <div className="container mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center text-2xl font-bold mb-10" style={{ color: "#B94A3E" }}>
                Step-by-Step: How to Donate
              </h2>

              <div className="flex justify-center">
                <div className="relative">
                  {/* Step 1 */}
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-amber-300 rounded-full flex items-center justify-center">
                        <div className="text-brown-700">
                          <Heart className="w-8 h-8 stroke-[1.5px]" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-medium text-gray-800">Choose your seva</h3>
                    </div>
                  </div>

                  {/* Vertical Line */}
                  <div className="absolute left-10 top-20 w-0.5 h-16 bg-amber-400"></div>

                  {/* Step 2 */}
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="text-brown-700">
                          <FileText className="w-8 h-8 stroke-[1.5px]" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-medium text-gray-800">Fill your details</h3>
                      <p className="text-gray-600">(Name, Email, Phone, PAN)</p>
                    </div>
                  </div>

                  {/* Vertical Line */}
                  <div className="absolute left-10 top-96 mt-[-40px] w-0.5 h-16 bg-amber-400"></div>

                  {/* Step 3 */}
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center">
                        <div className="text-brown-700">
                          <Shield className="w-8 h-8 stroke-[1.5px]" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-medium text-gray-800">Pay securely</h3>
                      <p className="text-gray-600">via Razorpay</p>
                    </div>
                  </div>

                  {/* Vertical Line */}
                  <div className="absolute left-10 top-[172px] mt-24 w-0.5 h-16 bg-amber-400"></div>

                  {/* Step 4 */}
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="text-brown-700">
                          <Mail className="w-8 h-8 stroke-[1.5px]" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-medium text-gray-800">Receive receipt</h3>
                      <p className="text-gray-600">and blessings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-primary text-2xl font-bold text-center mb-2">
                Contact for Custom Donations / CSR / Legacy Giving
              </h2>
              <p className="text-center text-gray-700 mb-6">
                Want to Sponsor an Entire Facility or Donate Through Your Company?
              </p>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div className="relative h-48 md:h-64">
                  <Image
                    src="/images/csr-donation-hands.png"
                    alt="Corporate Social Responsibility"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300 inline-block"
                >
                  Speak to Our Seva Coordinator
                </Link>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Final CTA Section - Updated with Bhubaneswar temple image */}
      <section className="relative w-full py-12 px-4">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/cream-watercolor-texture.jpg" alt="Background texture" fill className="object-cover" />
        </div>

        <div className="container mx-auto relative z-10">
          <AnimateOnView animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-primary text-2xl font-bold mb-4">
                Let the Temple Stand on the Foundation of Your Devotion.
              </h2>
              <p className="text-gray-700 mb-6">Every rupee you give becomes a prayer set in stone.</p>

              <div className="mb-8 flex justify-center">
                <Image
                  src="/images/bhubaneswar-temple.png"
                  alt="Temple in Bhubaneswar"
                  width={320}
                  height={240}
                  className="rounded-md"
                />
              </div>

              <Link
                href="/donate/payment"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md text-lg transition-transform duration-300 hover:scale-105 inline-flex items-center"
              >
                Yes, I Want to Donate to This Divine Cause
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      <Footer />
    </main>
  )
}
