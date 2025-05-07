import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"

export default function AboutPage() {
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
              <div className="mb-6 md:mb-0">
                <h1 className="text-primary text-2xl md:text-3xl font-bold mb-2">About us:</h1>
                <p className="text-primary text-sm md:text-base">Serving Krishna. Sustaining Dharma.</p>
                <p className="text-primary text-sm md:text-base">Inspiring Generations</p>
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

      {/* The Origin Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2">
            The Origin: Why This Temple Was Conceived?
          </h2>
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

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <AnimateOnView animation="fade-in" delay={200} className="md:w-3/5">
            <p className="text-gray-800 text-sm md:text-base mb-4">
              In the heart of Bhubaneswar's fast-growing urban sprawl, amidst concrete towers and hurried lives, the
              soul of many began to crave a return — a return to simplicity, nature, and the divine.
            </p>
            <p className="text-gray-800 text-sm md:text-base mb-4">
              This vision took root in the sacred soil of Patia-Barang, to create a space where spirituality thrives in
              harmony with nature. A place where one can pause, breathe deeply, and walk barefoot on grass while hearing
              the gentle kirtans in the background. This temple and retreat centre is not just a structure—it's a refuge
              for modern souls, a new Vrindavan in the making.
            </p>
          </AnimateOnView>

          <AnimateOnView animation="fade-in" delay={300} className="md:w-2/5">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/krishna-with-cows.jpg"
                alt="Lord Krishna with cows"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2">Our Vision</h2>
          <div className="flex justify-center mb-4">
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
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-gray-800 font-medium text-base md:text-lg mb-4">
              "A Sacred Space for Present and Future Generations"
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              To become a leading beacon of devotional living in India, nurturing both the soul and society through
              spiritual practice, sustainable living, and timeless knowledge.
            </p>
          </div>
        </AnimateOnView>
      </section>

      {/* Our Objectives Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2">Our Objectives</h2>
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
          <ul className="max-w-3xl mx-auto space-y-2 md:space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2 text-lg">•</span>
              <span className="text-gray-800 text-sm md:text-base">
                To build a temple where Bhakti is lived and shared daily
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 text-lg">•</span>
              <span className="text-gray-800 text-sm md:text-base">
                To offer a peaceful eco-retreat for modern minds to reconnect with their divine purpose
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 text-lg">•</span>
              <span className="text-gray-800 text-sm md:text-base">
                To create a spiritual learning center for all ages and backgrounds
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 text-lg">•</span>
              <span className="text-gray-800 text-sm md:text-base">
                To preserve and share ancient Vedic wisdom with global relevance
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 text-lg">•</span>
              <span className="text-gray-800 text-sm md:text-base">
                To provide holistic satvic experiences: food, shelter, music, meditation, seva
              </span>
            </li>
          </ul>
        </AnimateOnView>
      </section>

      {/* Founder's Message Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2">Founder's Message</h2>
          <div className="flex justify-center mb-4">
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
          <p className="text-center text-gray-800 font-medium text-base md:text-lg mb-6">
            "It's Not Just a Temple. It's a Tirtha for Tomorrow."
          </p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <AnimateOnView animation="fade-in" delay={200} className="md:w-3/5">
            <p className="text-gray-800 text-sm md:text-base mb-4">
              "When we envisioned this space, it was not just about constructing a temple. It was about nurturing a
              generation, healing hearts, and building an oasis where Krishna consciousness can be experienced in its
              most beautiful, natural form.
            </p>
            <p className="text-gray-800 text-sm md:text-base mb-4">
              With Lord Krishna's blessings and the inspiration from Srila Prabhupada, this project is a step toward
              reviving Sanatana Dharma—not through force or fear, but through love, wisdom, and community.
            </p>
            <p className="text-gray-800 text-sm md:text-base mb-4">
              This retreat centre will be a place where devotion meets sustainability, where education meets tradition,
              and where every visitor finds a deeper connection with the divine within themselves.
            </p>
            <p className="text-gray-800 text-sm md:text-base mb-4">
              I invite you not just to visit this place—but to help build it, serve in it, and grow spiritually along
              with it."
            </p>
          </AnimateOnView>

          <AnimateOnView animation="fade-in" delay={300} className="md:w-2/5">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/founder-image.jpg"
                alt="Founder with devotees"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2">Meet Our Team</h2>
          <div className="flex justify-center mb-8">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[1, 2, 3].map((index) => (
            <AnimateOnView key={index} animation="fade-up" delay={index * 150}>
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[200px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/team-member-${index}.jpg`}
                    alt={`Team member ${index}`}
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-gray-800 font-semibold text-base md:text-lg text-center">
                  {index === 1 ? "Guru Das" : `Team Member ${index}`}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {index === 1 ? "Main Co-ordinator" : `Role ${index}`}
                </p>
              </div>
            </AnimateOnView>
          ))}
        </div>

        <div className="mt-10 text-center">
          <AnimateOnView animation="fade-up">
            <p className="text-gray-800 font-medium text-base md:text-lg mb-4">
              Want to Join Us? Become a Seva Volunteer →
            </p>
            <Link
              href="/join"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md inline-block text-sm md:text-base transition-transform duration-300 hover:scale-105"
            >
              Join Now
            </Link>
          </AnimateOnView>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2">
            Partnerships & Blessings
          </h2>
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
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-800 text-sm md:text-base mb-4">Supported and blessed by:</p>
            <ul className="space-y-2 md:space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">ISKCON Bhubaneswar</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">ISKCON Mayapur</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span className="text-gray-800 text-sm md:text-base">Senior Vaishnava Acharyas & Sannyasis</span>
              </li>
            </ul>

            <p className="text-gray-800 text-sm md:text-base italic text-center mb-2">
              "This project will stand as a lighthouse for generations of seekers."
            </p>
            <p className="text-gray-800 text-sm md:text-base text-center">— HH [Spiritual Leader's Name]</p>
          </div>
        </AnimateOnView>
      </section>

      {/* Be a Part Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2">
            Be a Part of the Spiritual Revolution
          </h2>
          <div className="flex justify-center mb-4">
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
          <p className="text-center text-gray-800 font-medium text-base md:text-lg mb-6">
            "Be a Part of Something Eternal"
          </p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <AnimateOnView animation="fade-in" delay={200} className="md:w-3/5">
            <p className="text-gray-800 text-sm md:text-base mb-4">
              Your contribution is more than a donation — it's an offering of the heart to Lord Krishna. It builds not
              just walls, but faith. It nurtures souls, supports Seva, and inspires a movement.
            </p>

            <div className="mt-6 flex justify-center">
              <Link
                href="/donate"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md inline-block text-sm md:text-base transition-transform duration-300 hover:scale-105"
              >
                Donate Now
              </Link>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-800 text-sm md:text-base mb-2">Sponsor a Brick / Deity Ornament</p>
              <p className="text-gray-800 text-sm md:text-base">Talk to Us → +91-0000000000</p>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in" delay={300} className="md:w-2/5">
            <div className="w-full max-w-[250px] mx-auto">
              <Image
                src="/images/temple-illustration.png"
                alt="Temple Illustration"
                width={250}
                height={150}
                className="w-full h-auto"
              />
            </div>
          </AnimateOnView>
        </div>
      </section>

      <Footer />
    </main>
  )
}
