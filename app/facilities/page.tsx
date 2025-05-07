import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"

export default function FacilitiesPage() {
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
                  Explore the Divine Facilities that Elevate the Spirit
                </h1>
                <p className="text-primary text-sm md:text-base">
                  Each space in this retreat is built to connect you deeper with the Divine, Nature, and Yourself.
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

      {/* ISKCON Temple Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl md:text-2xl font-bold mb-2">The ISKCON Temple</h2>
          <p className="text-center text-gray-700 text-sm md:text-base mb-8">A Divine Abode of Lord Krishna</p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <AnimateOnView animation="slide-in-left" delay={200} className="md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/iskcon-temple-interior.jpg"
                alt="ISKCON Temple Interior"
                width={500}
                height={350}
                className="w-full h-auto"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-in-right" delay={300} className="md:w-1/2">
            <p className="text-gray-800 text-sm md:text-base">
              A sacred space where devotees can engage in daily darshan, arati, bhajan, and adharma. The temple houses
              beautifully adorned deities of Radha-Krishna, and be a center for traditional Vaishnava festivals.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Vedic Knowledge Centre */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl md:text-2xl font-bold text-primary mb-2">Vedic Knowledge Centre</h2>
          <p className="text-center text-gray-700 text-sm md:text-base mb-8">Learn, Reflect, Grow</p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-center">
          <AnimateOnView animation="slide-in-right" delay={200} className="md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/vedic-knowledge-centre.jpg"
                alt="Vedic Knowledge Centre"
                width={500}
                height={350}
                className="w-full h-auto"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-in-left" delay={300} className="md:w-1/2">
            <p className="text-gray-800 text-sm md:text-base">
              This centre will offer spiritual classes, Vedic philosophy, Bhagavad Gita study, and youth development
              workshops guided by trained ISKCON teachers.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Kirtan & Meditation Hall */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl md:text-2xl font-bold text-primary mb-2">Kirtan & Meditation Hall</h2>
          <p className="text-center text-gray-700 text-sm md:text-base mb-8">Chant, Meditate, Experience Joy</p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <AnimateOnView animation="slide-in-left" delay={200} className="md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/kirtan-hall.png"
                alt="Kirtan & Meditation Hall"
                width={500}
                height={350}
                className="w-full h-auto"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-in-right" delay={300} className="md:w-1/2">
            <p className="text-gray-800 text-sm md:text-base">
              An acoustically designed hall for soulful kirtans, bhajan sessions, spiritual discourses, and visiting
              speaker satsangs.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Satwik Restaurant */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl md:text-2xl font-bold text-primary mb-2">
            Satwik Restaurant & Prasadam Hall
          </h2>
          <p className="text-center text-gray-700 text-sm md:text-base mb-8">
            Eat with Devotion – Prasadam for the Soul
          </p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-center">
          <AnimateOnView animation="slide-in-right" delay={200} className="md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/satwik-restaurant.png"
                alt="Satwik Restaurant"
                width={500}
                height={350}
                className="w-full h-auto"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-in-left" delay={300} className="md:w-1/2">
            <p className="text-gray-800 text-sm md:text-base">
              Enjoy pure, freshly cooked meals offered to Krishna. The restaurant will also serve the visiting public
              and pilgrims with satwic meals in a peaceful setting.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Cottages Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl md:text-2xl font-bold text-primary mb-2">Cottages for Divine Living</h2>
          <p className="text-center text-gray-700 text-sm md:text-base mb-8">
            Live Closer to Krishna – Book or Own a Cottage
          </p>
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
            <p className="text-gray-800 text-sm md:text-base mb-6">
              Premium eco-cottages nestled in lush greenery, available for purchase for a lifetime. Each cottage is a
              blend of comfort and calm, overlooking the temple skyline.
            </p>

            <Link
              href="/cottages"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-md inline-block text-sm md:text-base transition-transform duration-300 hover:scale-105"
            >
              Enquire About Owning a Cottage
            </Link>
          </AnimateOnView>
        </div>
      </section>

      {/* Wellness & Yoga Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl md:text-2xl font-bold text-primary mb-2">Wellness & Yoga Retreats</h2>
          <p className="text-center text-gray-700 text-sm md:text-base mb-8">Heal the Body, Awaken the Soul</p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-center">
          <AnimateOnView animation="slide-in-right" delay={200} className="md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/yoga-retreat.png"
                alt="Yoga and Wellness Retreat"
                width={500}
                height={350}
                className="w-full h-auto"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-in-left" delay={300} className="md:w-1/2">
            <p className="text-gray-800 text-sm md:text-base">
              Surrounded by nature's stillness and spiritual vibrations, our upcoming Wellness & Yoga Retreats will
              offer the perfect sanctuary for inner balance and rejuvenation. Through satvik living, guided meditation,
              and ancient yogic practices, participants will experience healing not just for the body, but for the soul.
              This sacred space will nurture conscious healing and holistic well-being for all.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Help Us Build Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto bg-amber-50/50">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl md:text-2xl font-bold text-primary mb-4">
            Help Us Build the Abode of Bhakti
          </h2>
          <p className="text-center text-primary text-sm md:text-base mb-8">
            Your donation empowers us to complete this divine facility and serve thousands of souls for years to come.
          </p>
        </AnimateOnView>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
          <AnimateOnView animation="fade-up" delay={200}>
            <Link
              href="/donate"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-md inline-block text-sm md:text-base w-full sm:w-auto text-center transition-transform duration-300 hover:scale-105"
            >
              Donate Now
            </Link>
          </AnimateOnView>

          <AnimateOnView animation="fade-up" delay={300}>
            <Link
              href="/donate#sponsor"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-md inline-block text-sm md:text-base w-full sm:w-auto text-center transition-transform duration-300 hover:scale-105"
            >
              Sponsor a Facility / Brick / Deity Ornament
            </Link>
          </AnimateOnView>

          <AnimateOnView animation="fade-up" delay={400}>
            <Link
              href="/donate#monthly"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-md inline-block text-sm md:text-base w-full sm:w-auto text-center transition-transform duration-300 hover:scale-105"
            >
              Monthly Seva Plan
            </Link>
          </AnimateOnView>
        </div>

        <AnimateOnView animation="fade-in" delay={500}>
          <p className="text-center text-gray-700 text-xs md:text-sm mt-6">
            Donate Today. Be Blessed Forever.
            <br />
            80G Tax Benefits | Secure Payment | Divine Seva Opportunity
          </p>
        </AnimateOnView>
      </section>

      <Footer />
    </main>
  )
}
