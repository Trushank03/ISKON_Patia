import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"
import { CottageInquiryForm } from "@/components/cottage-inquiry-form"

export default function CottagesPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-amber-50">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/cream-watercolor-texture.jpg"
            alt="Background texture"
            fill
            className="object-cover opacity-80"
          />
        </div>

        <div className="relative z-10 px-4 py-6 md:py-8 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:w-3/5">
                <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  Your Spiritual Second Home Awaits
                </h1>
                <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-2">
                  Own a cottage in a 15-acre devotional sanctuary where Bhakti, sustainability, and serenity meet.
                </p>
              </div>
              {/* <div className="w-full max-w-[250px] md:max-w-[300px]">
                <Image
                  src="/images/temple-golden-illustration-new.png"
                  alt="Temple Illustration"
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
              </div> */}
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Live Where the Divine Resides */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
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
                <span className="text-gray-800 text-sm sm:text-base md:text-lg">
                  Live footsteps away from the temple
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm sm:text-base md:text-lg">Serene environment & community</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm sm:text-base md:text-lg">
                  Participate in daily Bhakti & Yoga practices
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm sm:text-base md:text-lg">
                  Spiritual learning at your doorstep
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm sm:text-base md:text-lg">Serve cows & live sustainably</span>
              </li>
            </ul>

            <p className="text-gray-800 text-sm sm:text-base md:text-lg italic mb-6 sm:mb-12">
              "Not just property. It's a spiritual investment in your soul's journey."
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Cottage Details */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">Cottage Details</h2>
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
            <p className="text-center text-gray-800 text-sm sm:text-base md:text-lg mb-4">
              Cottage Type: 1BHK | Approx. 600-1000 sqft (customizable finishes)
            </p>

            <p className="text-center text-gray-800 text-sm sm:text-base md:text-lg mb-6 sm:mb-12">
              Structure: Eco-built, Vaastu-compliant, Satvik architecture
            </p>
          </AnimateOnView>

          <AnimateOnView animation="fade-up" delay={300}>
            <h3 className="text-gray-800 font-semibold text-base md:text-lg mb-4">Facilities Include:</h3>

            <ul className="space-y-2 md:space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm sm:text-base md:text-lg">Attached bath and mini-kitchen</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm sm:text-base md:text-lg">Front veranda and garden space</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm sm:text-base md:text-lg">
                  Power backup, solar panels (optional)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm sm:text-base md:text-lg">
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
          <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4">
            Pricing & Ownership Model
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-8">
            Transparent. Ethical. Devotional.
          </p>
        </AnimateOnView>

        <AnimateOnView animation="fade-in" delay={200}>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 px-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-700">
                    Ownership Type
                  </th>
                  <th className="py-2 px-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-700">
                    Area (Sqft)
                  </th>
                  <th className="py-2 px-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-700">
                    One-Time Price (₹)
                  </th>
                  <th className="py-2 px-3 text-left text-xs sm:text-sm md:text-base font-medium text-gray-700">
                    Benefits
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-3 text-xs sm:text-sm md:text-base text-gray-800">Seva Owner</td>
                  <td className="py-3 px-3 text-xs sm:text-sm md:text-base text-gray-800">600</td>
                  <td className="py-3 px-3 text-xs sm:text-sm md:text-base text-gray-800">₹40,00,000</td>
                  <td className="py-3 px-3 text-xs sm:text-sm md:text-base text-gray-800">
                    Lifetime access, personalized seva
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-3 text-xs sm:text-sm md:text-base text-gray-800">Bhakti Owner</td>
                  <td className="py-3 px-3 text-xs sm:text-sm md:text-base text-gray-800">750</td>
                  <td className="py-3 px-3 text-xs sm:text-sm md:text-base text-gray-800">₹50,00,000</td>
                  <td className="py-3 px-3 text-xs sm:text-sm md:text-base text-gray-800">
                    Priority cottage booking during major festivals
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-3 text-xs sm:text-sm md:text-base text-gray-800">Sankirtan Owner</td>
                  <td className="py-3 px-3 text-xs sm:text-sm md:text-base text-gray-800">Custom Duplex</td>
                  <td className="py-3 px-3 text-xs sm:text-sm md:text-base text-gray-800">Price on Request</td>
                  <td className="py-3 px-3 text-xs sm:text-sm md:text-base text-gray-800">
                    Personalized family nameplates, etc.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimateOnView>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
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
            <p className="text-gray-800 text-sm sm:text-base md:text-lg italic mb-4">
              "Owning a cottage here was the best spiritual decision for our family"
            </p>
            <p className="text-primary text-sm sm:text-base md:text-lg font-medium">
              — Smt. Meera Rao,
              <br />
              Hyderabad
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4">
            Inquiry & Expression of Interest Form
          </h2>
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-gray-800 font-semibold text-base md:text-lg mb-2">
              Reserve Your Cottage – Limited Units Available
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Take the first step towards a devotional lifestyle amidst nature and divinity
            </p>
          </div>
        </AnimateOnView>

        <CottageInquiryForm />
      </section>

      {/* Call to Action */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
            Plant the Roots of Devotion Where It Blossoms Forever
          </h2>
        </AnimateOnView>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AnimateOnView animation="fade-up" delay={200}>
            <Link
              href="/cottages/brochure"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-md inline-block text-sm sm:text-base md:text-lg w-full sm:w-auto text-center transition-transform duration-300 hover:scale-105"
            >
              Request Brochure / Pricing
            </Link>
          </AnimateOnView>

          <AnimateOnView animation="fade-up" delay={300}>
            <Link
              href="/cottages/visit"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-md inline-block text-sm sm:text-base md:text-lg w-full sm:w-auto text-center transition-transform duration-300 hover:scale-105"
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
