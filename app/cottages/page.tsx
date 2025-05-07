import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"

export default function CottagesPage() {
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
                <h1 className="text-primary text-2xl md:text-3xl font-bold mb-2">Your Spiritual Second Home Awaits</h1>
                <p className="text-primary text-sm md:text-base">
                  Own a cottage in a 15-acre devotional sanctuary where Bhakti, sustainability, and serenity meet.
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

      {/* Live Where the Divine Resides */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
            Live Where the Divine Resides
          </h2>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <AnimateOnView animation="slide-in-left" delay={200} className="md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/cottage-main.jpg"
                alt="Spiritual Cottage"
                width={500}
                height={350}
                className="w-full h-auto"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-in-right" delay={300} className="md:w-1/2">
            <h3 className="text-primary text-lg md:text-xl font-semibold mb-4">Why Own a Cottage Here?</h3>

            <ul className="space-y-2 md:space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">Live footsteps away from the temple</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">Serene environment & community</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">Participate in daily Bhakti & Yoga practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">Spiritual learning at your doorstep</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">Serve cows & live sustainably</span>
              </li>
            </ul>

            <p className="text-gray-800 text-sm md:text-base italic">
              "Not just property. It's a spiritual investment in your soul's journey."
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Cottage Details */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8">Cottage Details</h2>
        </AnimateOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
          <AnimateOnView animation="fade-in" delay={200}>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/cottage-layout-1.png"
                alt="Cottage Layout - Aerial View"
                width={500}
                height={350}
                className="w-full h-auto"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in" delay={300}>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/cottage-layout-2.png"
                alt="Cottage Layout - Side View"
                width={500}
                height={350}
                className="w-full h-auto"
              />
            </div>
          </AnimateOnView>
        </div>

        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className={`h-2 w-2 rounded-full ${index === 1 ? "bg-primary" : "bg-gray-300"}`}></div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimateOnView animation="fade-up" delay={200}>
            <p className="text-center text-gray-800 text-sm md:text-base mb-4">
              Cottage Type: 1BHK | Approx. 600-1000 sqft (customizable finishes)
            </p>

            <p className="text-center text-gray-800 text-sm md:text-base mb-6">
              Structure: Eco-built, Vaastu-compliant, Satvik architecture
            </p>
          </AnimateOnView>

          <AnimateOnView animation="fade-up" delay={300}>
            <h3 className="text-gray-800 font-semibold text-base md:text-lg mb-4">Facilities Include:</h3>

            <ul className="space-y-2 md:space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">Attached bath and mini-kitchen</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">Front veranda and garden space</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">Power backup, solar panels (optional)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">
                  Access to temple, prasadam, library, wellness areas
                </span>
              </li>
            </ul>
          </AnimateOnView>
        </div>
      </section>

      {/* Pricing & Ownership */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4">
            Pricing & Ownership Model
          </h2>
          <p className="text-center text-gray-700 text-sm md:text-base mb-8">Transparent. Ethical. Devotional.</p>
        </AnimateOnView>

        <AnimateOnView animation="fade-in" delay={200}>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 px-3 text-left text-xs md:text-sm font-medium text-gray-700">Ownership Type</th>
                  <th className="py-2 px-3 text-left text-xs md:text-sm font-medium text-gray-700">Area (Sqft)</th>
                  <th className="py-2 px-3 text-left text-xs md:text-sm font-medium text-gray-700">
                    One-Time Price (₹)
                  </th>
                  <th className="py-2 px-3 text-left text-xs md:text-sm font-medium text-gray-700">Benefits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">Seva Owner</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">600</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">₹40,00,000</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">Lifetime access, personalized seva</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">Bhakti Owner</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">750</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">₹50,00,000</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">
                    Priority cottage booking during major festivals
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">Sankirtan Owner</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">Custom Duplex</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">Price on Request</td>
                  <td className="py-3 px-3 text-xs md:text-sm text-gray-800">Personalized family nameplates, etc.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimateOnView>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8">
            Testimonials from Spiritual Property Owners
          </h2>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center max-w-4xl mx-auto">
          <AnimateOnView animation="fade-in" delay={200} className="md:w-1/3">
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src="/images/testimonial-owner.png"
                  alt="Cottage Owner"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in" delay={300} className="md:w-2/3">
            <p className="text-gray-800 text-sm md:text-base italic mb-4">
              "Owning a cottage here was the best spiritual decision for our family"
            </p>
            <p className="text-primary text-sm md:text-base font-medium">
              — Smt. Meera Rao,
              <br />
              Hyderabad
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8">
            Inquiry & Expression of Interest Form
          </h2>
        </AnimateOnView>

        <AnimateOnView animation="fade-up" delay={200}>
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-gray-800 font-semibold text-base md:text-lg mb-2">
              Reserve Your Cottage – Limited Units Available
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Take the first step towards a devotional lifestyle amidst nature and divinity
            </p>
          </div>
        </AnimateOnView>

        <AnimateOnView animation="fade-in" delay={300}>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h4 className="text-gray-800 font-medium text-sm md:text-base mb-4">Form Fields:</h4>
              <ul className="space-y-1 text-gray-700 text-xs md:text-sm">
                <li>Full Name (Text Input)</li>
                <li>Phone Number (Text Input – Mobile validation)</li>
                <li>Email Address (Text Input – Email validation)</li>
                <li>Preferred Unit Size (Select Dropdown):</li>
                <li>Seva Owner – 600 sqft</li>
                <li>Bhakti Owner – 750 sqft</li>
                <li>Sankirtan Duplex – Custom</li>
                <li>Message (Optional) (Multiple Lines)</li>
              </ul>
            </div>

            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-4 h-4 border border-primary rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-sm"></div>
              </div>
              <span className="text-gray-800 text-xs md:text-sm">I wish to schedule a site visit or video call</span>
            </div>

            <div className="flex justify-center mb-6">
              <button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md text-sm md:text-base transition-transform duration-300 hover:scale-105">
                Submit
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-primary text-xs">✓</span>
              </div>
              <span className="text-gray-800 text-xs md:text-sm">Request a Call from Seva Coordinator</span>
            </div>

            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-primary text-xs">✓</span>
              </div>
              <span className="text-gray-800 text-xs md:text-sm">Auto-Reply Message (on submission)</span>
            </div>

            <p className="text-center text-primary text-xs md:text-sm italic">
              "Thank you! Our team will connect with you within 24 hours with availability and details. Hare Krishna!"
            </p>
          </div>
        </AnimateOnView>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl font-bold text-center mb-8">
            Plant the Roots of Devotion Where It Blossoms Forever
          </h2>
        </AnimateOnView>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AnimateOnView animation="fade-up" delay={200}>
            <Link
              href="/cottages/brochure"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-md inline-block text-sm md:text-base w-full sm:w-auto text-center transition-transform duration-300 hover:scale-105"
            >
              Request Brochure / Pricing
            </Link>
          </AnimateOnView>

          <AnimateOnView animation="fade-up" delay={300}>
            <Link
              href="/cottages/visit"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-md inline-block text-sm md:text-base w-full sm:w-auto text-center transition-transform duration-300 hover:scale-105"
            >
              Book a Site Visit
            </Link>
          </AnimateOnView>
        </div>
      </section>

      <Footer />
    </main>
  )
}
