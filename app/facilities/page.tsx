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
                <h1 className="text-[#B94A3E] text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  Explore the Divine Facilities that Elevate the Spirit
                </h1>
                <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-2">
                  Each space in this retreat is built to connect you deeper with the Divine, Nature, and Yourself.
                </p>
              </div>
              <div className="w-full max-w-[250px] md:max-w-[300px]">
                <Image
                  src="/images/temple-golden-illustration-new.png"
                  alt="Temple Illustration"
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ISKCON Temple Section */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">The ISKCON Temple</h2>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-12">
            A Divine Abode of Lord Krishna
          </p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <AnimateOnView animation="slide-in-left" delay={200} className="md:w-2/5">
            <div className="rounded-lg overflow-hidden shadow-lg max-w-[450px] mx-auto">
              <Image
                src="/images/iskcon-temple-entrance.png"
                alt="ISKCON Temple Entrance"
                width={450}
                height={340}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-in-right" delay={300} className="md:w-3/5">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 sm:mb-12">
              A sacred space where devotees can engage in daily darshan, aarti, bhajan, and sadhana. The temple will
              house beautifully adorned deities of Radha-Krishna, and be a centre for traditional Vaishnava festivals.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Vedic Knowledge Centre */}
      <section className="px-4 py-12 max-w-7xl mx-auto bg-amber-50/30">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
            Vedic Knowledge Centre
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-12">
            Learn, Reflect, Grow
          </p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
          <AnimateOnView animation="slide-in-right" delay={200} className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/vedic-corridor.png"
                alt="Vedic Knowledge Centre"
                width={550}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-in-left" delay={300} className="md:w-1/2">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6">
              This centre will offer spiritual classes, Vedic philosophy, Bhagavad Gita study, and youth development
              workshops guided by trained ISKCON teachers.
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg">
              The architecture combines modern design with traditional elements, creating spaces that inspire learning
              and contemplation. The center features reading areas, discussion halls, and multimedia facilities for
              comprehensive spiritual education.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Kirtan & Meditation Hall */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
            Kirtan & Meditation Hall
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-12">
            Chant, Meditate, Experience Joy
          </p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <AnimateOnView animation="slide-in-left" delay={200} className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/kirtan-hall-interior.png"
                alt="Kirtan & Meditation Hall"
                width={550}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-in-right" delay={300} className="md:w-1/2">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6">
              An acoustically designed hall for soulful kirtans, bhajan sessions, spiritual discourses, and visiting
              speaker satsangs.
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg">
              The hall features a stunning ornate dome with intricate patterns and beautiful lighting that creates a
              divine atmosphere. The space accommodates devotees for regular kirtan sessions, with traditional
              instruments and comfortable seating arrangements for extended meditation and chanting.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Satwik Restaurant */}
      <section className="px-4 py-12 max-w-7xl mx-auto bg-amber-50/30">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
            Satwik Restaurant & Prasadam Hall
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-12">
            Eat with Devotion – Prasadam for the Soul
          </p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
          <AnimateOnView animation="slide-in-right" delay={200} className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/satwik-restaurant-interior.png"
                alt="Satwik Restaurant"
                width={550}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-in-left" delay={300} className="md:w-1/2">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6">
              Enjoy pure, freshly cooked meals offered to Krishna. The restaurant will also serve the visiting public
              and pilgrims with satwic meals in a peaceful setting.
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg">
              The restaurant features natural wooden furniture, abundant greenery, and a warm, inviting atmosphere. The
              space is designed to enhance the dining experience with natural light, comfortable seating, and a serene
              environment that complements the pure vegetarian cuisine prepared with devotion.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Cottages Section */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
            Cottages for Divine Living
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-12">
            Live Closer to Krishna – Book or Own a Cottage
          </p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <AnimateOnView animation="slide-in-left" delay={200} className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/spiritual-cottage.png"
                alt="Spiritual Cottage"
                width={550}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-in-right" delay={300} className="md:w-1/2">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6">
              Premium eco-cottages nestled in lush greenery, available for purchase for a lifetime. Each cottage is a
              blend of comfort and calm, overlooking the temple skyline.
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6">
              The cottages feature traditional architecture with modern amenities, surrounded by beautiful gardens and
              natural landscapes. These serene living spaces provide the perfect environment for spiritual practice and
              peaceful living.
            </p>

            <Link
              href="/cottages"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-md inline-block text-sm sm:text-base md:text-lg transition-transform duration-300 hover:scale-105"
            >
              Enquire About Owning a Cottage
            </Link>
          </AnimateOnView>
        </div>
      </section>

      {/* Wellness & Yoga Section */}
      <section className="px-4 py-12 max-w-7xl mx-auto bg-amber-50/30">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
            Wellness & Yoga Retreats
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-12">
            Heal the Body, Awaken the Soul
          </p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
          <AnimateOnView animation="slide-in-right" delay={200} className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/yoga-meditation-space.png"
                alt="Yoga and Wellness Retreat"
                width={550}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-in-left" delay={300} className="md:w-1/2">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6">
              Surrounded by nature's stillness and spiritual vibrations, our upcoming Wellness & Yoga Retreats will
              offer the perfect sanctuary for inner balance and rejuvenation.
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg">
              The retreat spaces feature minimalist design with natural materials, creating a serene environment for
              yoga and meditation. These thoughtfully designed spaces use wood, natural light, and open layouts to
              foster a deep connection with oneself and the divine, perfect for spiritual practices and holistic
              healing.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Help Us Build Section */}
      <section className="relative w-full mt-12">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/cream-watercolor-texture.jpg"
            alt="Background texture"
            fill
            className="object-cover opacity-80"
          />
        </div>

        <div className="relative z-10 px-4 py-12 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="text-center">
              <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Help Us Build the Abode of Bhakti
              </h2>
              <p className="text-primary text-sm sm:text-base md:text-lg mb-12 max-w-3xl mx-auto">
                Your donation empowers us to complete this divine facility and serve thousands of souls for years to
                come.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto mb-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <span className="text-primary text-lg font-medium mb-3 sm:mb-0">(One-time Contribution)</span>
                  <Link
                    href="/donate"
                    className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md text-lg w-full sm:w-auto text-center"
                  >
                    Donate Now
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <span className="text-primary text-lg font-medium mb-3 sm:mb-0">
                    Sponsor a Facility / Brick / Deity Ornament
                  </span>
                  <Link
                    href="/donate#sponsor"
                    className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md text-lg w-full sm:w-auto text-center"
                  >
                    Donate Now
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <span className="text-primary text-lg font-medium mb-3 sm:mb-0">Monthly Seva Plan</span>
                  <Link
                    href="/donate#monthly"
                    className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md text-lg w-full sm:w-auto text-center"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-primary text-lg font-medium mb-2">Donate Today. Be Blessed Forever.</p>
              <p className="text-primary text-sm">80G Tax Benefits | Secure Payment | Eternal Seva Opportunity</p>
            </div>
          </AnimateOnView>
        </div>
      </section>

      <Footer />
    </main>
  )
}
