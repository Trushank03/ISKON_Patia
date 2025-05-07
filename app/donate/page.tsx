import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-amber-50">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/cream-watercolor-bg.png" alt="Background texture" fill className="object-cover" />
        </div>

        <div className="relative z-10 px-4 py-8 md:py-12 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:w-3/4">
                <h1 className="text-primary text-2xl md:text-3xl font-bold mb-2">
                  Help Us Build a Home for Devotion, Peace, and Knowledge
                </h1>
                <p className="text-primary text-sm md:text-base">
                  Your support empowers ISKCON to build a divine ecosystem that will inspire generations.
                </p>
              </div>
              <div className="w-full max-w-[200px] md:max-w-[250px]">
                <Image
                  src="/images/temple-illustration.png"
                  alt="Temple Illustration"
                  width={250}
                  height={150}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Inspiration Quote */}
      <section className="px-4 py-6 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-in">
          <p className="text-center text-gray-800 text-sm md:text-base italic">
            Even a leaf, a flower, fruit or water offered with devotion is accepted by Krishna. Imagine what treasures
            are offered in love can do – Bhagavad Gita 9:26
          </p>
        </AnimateOnView>
      </section>

      {/* More than a Donation */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl font-bold mb-6">
            More than a Donation. It's a Spiritual Service.
          </h2>
        </AnimateOnView>

        <AnimateOnView animation="fade-in" delay={200}>
          <ul className="space-y-2 md:space-y-3 mb-8 max-w-3xl">
            <li className="flex items-start">
              <span className="text-primary mr-2 text-lg">•</span>
              <span className="text-gray-800 text-sm md:text-base">
                Your donation builds Krishna's temple in Odisha
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 text-lg">•</span>
              <span className="text-gray-800 text-sm md:text-base">Supports the Vedic Knowledge Centre for youth</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 text-lg">•</span>
              <span className="text-gray-800 text-sm md:text-base">
                Feeds and shelters protected cows in our Goshala
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 text-lg">•</span>
              <span className="text-gray-800 text-sm md:text-base">
                Establishes a retreat for spiritual rejuvenation
              </span>
            </li>
          </ul>
        </AnimateOnView>
      </section>

      {/* Donation Options */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl font-bold mb-2">Multiple Ways to Contribute</h2>
          <p className="text-gray-700 text-sm md:text-base mb-6">
            Choose your seva. Every donation helps build a spiritual legacy.
          </p>
        </AnimateOnView>

        <AnimateOnView animation="fade-in" delay={200}>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 px-3 text-left text-xs md:text-sm font-medium text-gray-700">Donation Option</th>
                  <th className="py-2 px-3 text-left text-xs md:text-sm font-medium text-gray-700">Amount (INR)</th>
                  <th className="py-2 px-3 text-left text-xs md:text-sm font-medium text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">Brick Seva</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">₹1,100</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">
                    Contribute one temple brick in your name.
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">Bhakti Floor Seva</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">₹5,100</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">
                    Sponsor part of the temple floor. Renewed quarterly.
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">Prasadam Seva</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">₹11,000</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">Sponsor meals for 100 devotees.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">Deity Ornament Sponsorship</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">₹21,000</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">
                    Help adorn the deities with new ornaments.
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">Cottage Wing Builder</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">₹51,000</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">
                    Help complete a full cottage or temple wing.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimateOnView>

        <AnimateOnView animation="fade-up" delay={300}>
          <div className="flex items-center justify-center mb-6">
            <div className="w-6 h-6 mr-2">
              <Image
                src="/images/payment-icon.png"
                alt="Payment Options"
                width={24}
                height={24}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-sm md:text-base">Payment Options</h3>
          </div>

          <p className="text-center text-gray-700 text-xs md:text-sm mb-6">
            Integrated via Razorpay Checkout
            <br />
            Supports: UPI, Debit/Credit Cards, Netbanking, Wallets
          </p>

          <div className="bg-amber-50/50 p-3 rounded-md text-center text-gray-700 text-xs md:text-sm mb-8">
            <p>
              <strong>Tax Exemption (80G Certified)</strong>
              <br />
              All donations are eligible under Section 80G of the Income Tax Act.
              <br />
              Auto-generated tax receipt will be emailed instantly after your donation.
            </p>
          </div>
        </AnimateOnView>

        <AnimateOnView animation="fade-up" delay={400}>
          <div className="flex justify-center mb-10">
            <Link
              href="/donate/checkout"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md inline-block text-sm md:text-base transition-transform duration-300 hover:scale-105"
            >
              Donate Now & Support Krishna's Mission
            </Link>
          </div>
        </AnimateOnView>
      </section>

      {/* Monthly Bhakti Circle */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
            <h2 className="text-primary text-xl md:text-2xl font-bold text-center mb-6">
              "Join the Monthly Bhakti Circle"
            </h2>

            <div className="text-center mb-6">
              <p className="text-gray-800 text-base md:text-lg font-medium mb-2">₹501 / ₹1001 / ₹2100 per month</p>
            </div>

            <h3 className="text-gray-800 font-medium text-sm md:text-base mb-4">Benefits:</h3>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">Monthly temple updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">Special birthday / anniversary blessings</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">
                  Digital e-prasad and exclusive livestream invites
                </span>
              </li>
            </ul>

            <div className="flex justify-center">
              <Link
                href="/donate/monthly"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md inline-block text-sm md:text-base transition-transform duration-300 hover:scale-105"
              >
                Join Monthly Seva Plan
              </Link>
            </div>
          </div>
        </AnimateOnView>
      </section>

      {/* Donor Testimonials */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl font-bold text-center mb-8">Donor Testimonials</h2>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center max-w-4xl mx-auto">
          <AnimateOnView animation="fade-in" delay={200} className="md:w-1/3">
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src="/images/donor-testimonial.png"
                  alt="Donor Testimonial"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in" delay={300} className="md:w-2/3">
            <p className="text-gray-800 text-sm md:text-base italic mb-4">
              "Contributing to ISKCON Patia has been the most meaningful act of devotion I've done."
            </p>
            <p className="text-primary text-sm md:text-base font-medium">— Ramesh B, Delhi</p>
          </AnimateOnView>
        </div>
      </section>

      {/* Step by Step */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl font-bold text-center mb-8">Step-by-Step: How to Donate</h2>
        </AnimateOnView>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {[
            {
              icon: "/images/donation-step1.png",
              text: "Choose your seva",
            },
            {
              icon: "/images/donation-step2.png",
              text: "Fill your details (Name, Email, Phone, PAN)",
            },
            {
              icon: "/images/donation-step3.png",
              text: "Pay securely via Razorpay",
            },
            {
              icon: "/images/donation-step4.png",
              text: "Receive receipt and blessings",
            },
          ].map((step, index) => (
            <AnimateOnView key={index} animation="fade-up" delay={index * 150}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4">
                  <Image
                    src={step.icon || "/placeholder.svg"}
                    alt={`Donation Step ${index + 1}`}
                    width={64}
                    height={64}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-gray-800 text-xs md:text-sm">{step.text}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      {/* Custom Donations */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl font-bold text-center mb-4">
            Contact for Custom Donations / CSR / Legacy Giving
          </h2>
          <p className="text-center text-gray-700 text-sm md:text-base mb-6">
            Want to Sponsor an Entire Facility or Donate Through Your Company?
          </p>
        </AnimateOnView>

        <AnimateOnView animation="fade-in" delay={200}>
          <div className="max-w-3xl mx-auto mb-6">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/csr-donation.png"
                alt="Corporate Social Responsibility Donation"
                width={600}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </AnimateOnView>

        <AnimateOnView animation="fade-up" delay={300}>
          <div className="flex justify-center">
            <Link
              href="/donate/contact"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md inline-block text-sm md:text-base transition-transform duration-300 hover:scale-105"
            >
              Speak to Our Seva Coordinator
            </Link>
          </div>
        </AnimateOnView>
      </section>

      {/* Final Call to Action */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl font-bold text-center mb-6">
            Let the Temple Stand on the Foundation of Your Devotion.
          </h2>
          <p className="text-center text-gray-700 text-sm md:text-base mb-8">
            Every rupee you give becomes a prayer set in stone.
          </p>
        </AnimateOnView>

        <AnimateOnView animation="fade-in" delay={200}>
          <div className="max-w-3xl mx-auto mb-8">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/temple-sunset.png"
                alt="Temple at sunset"
                width={600}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </AnimateOnView>

        <AnimateOnView animation="fade-up" delay={300}>
          <div className="flex justify-center">
            <Link
              href="/donate/checkout"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md inline-block text-sm md:text-base transition-transform duration-300 hover:scale-105"
            >
              Yes, I Want to Donate to This Divine Cause
            </Link>
          </div>
        </AnimateOnView>
      </section>

      <Footer />
    </main>
  )
}
