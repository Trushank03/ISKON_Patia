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
          <Image src="/images/cream-watercolor-texture.jpg" alt="Background texture" fill className="object-cover" />
        </div>

        <div className="relative z-10 px-4 py-6 md:py-8 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-2">About us:</h1>
                <p className="text-primary text-sm sm:text-base md:text-lg">Serving Krishna. Sustaining Dharma.</p>
                <p className="text-primary text-sm:text-base md:text-lg">Inspiring Generations</p>
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

      {/* The Origin Section */}
      <section className="px-4 py-12 my-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2">
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

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <AnimateOnView animation="fade-in" delay={200} className="md:w-[60%]">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
              In the heart of Bhubaneswar's fast-growing urban sprawl, amidst concrete towers and hurried lives, the
              soul of many began to crave a return — a return to simplicity, nature, and the divine.
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
              This vision took root in the sacred soil of Patia-Barang, to create a space where spirituality thrives in
              harmony with nature. A place where one can pause, breathe deeply, and walk barefoot on grass while hearing
              the gentle kirtans in the background. This temple and retreat centre is not just a structure—it's a refuge
              for modern souls, a new Vrindavan in the making.
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg">
              Just as Lord Krishna tended to His beloved cows in Vrindavan, our centre aims to recreate that divine
              pastoral harmony where devotion, nature, and simplicity coexist in perfect balance.
            </p>
          </AnimateOnView>

          <AnimateOnView animation="fade-in" delay={300} className="md:w-[40%]">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/krishna-with-cows-flute.jpg"
                alt="Lord Krishna playing flute with cows"
                width={400}
                height={320}
                className="w-full h-auto"
              />
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Our Vision & Objectives Section - Combined */}
      <section className="relative w-full py-12 my-8">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/cream-watercolor-texture.jpg" alt="Background texture" fill className="object-cover" />
        </div>

        <div className="relative z-10 px-4 max-w-7xl mx-auto">
          {/* Vision Part */}
          <div className="mb-12">
            <AnimateOnView animation="fade-up">
              <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">Our Vision</h2>
            </AnimateOnView>

            <AnimateOnView animation="fade-in" delay={200}>
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-gray-800 font-medium text-base md:text-lg mb-6 sm:mb-8">
                  "A Sacred Space for Present and Future Generations"
                </p>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                  To become a leading beacon of devotional living in India, nurturing both the soul and society through
                  spiritual practice, sustainable living, and timeless knowledge.
                </p>
              </div>
            </AnimateOnView>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md mx-auto border-t border-primary/20 my-8"></div>

          {/* Objectives Part */}
          <div>
            <AnimateOnView animation="fade-up">
              <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
                Our Objectives
              </h2>
            </AnimateOnView>

            <AnimateOnView animation="fade-in" delay={200}>
              <ul className="max-w-3xl mx-auto space-y-2 md:space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span className="text-gray-800 text-sm sm:text-base md:text-lg">
                    To build a temple where Bhakti is lived and shared daily
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span className="text-gray-800 text-sm sm:text-base md:text-lg">
                    To offer a peaceful eco-retreat for modern minds to reconnect with their divine purpose
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span className="text-gray-800 text-sm sm:text-base md:text-lg">
                    To create a spiritual learning center for all ages and backgrounds
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span className="text-gray-800 text-sm sm:text-base md:text-lg">
                    To preserve and share ancient Vedic wisdom with global relevance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span className="text-gray-800 text-sm sm:text-base md:text-lg">
                    To provide holistic satvic experiences: food, shelter, music, meditation, seva
                  </span>
                </li>
              </ul>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="relative w-full py-12 mt-8 mb-2 bg-amber-50/30">
        <div className="px-4 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4">
              Founder's Message
            </h2>
            <p className="text-center text-gray-800 font-medium text-lg md:text-xl mb-10">
              "It's Not Just a Temple. It's a Tirtha for Tomorrow."
            </p>
          </AnimateOnView>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <AnimateOnView animation="fade-in" delay={200} className="md:w-3/5 flex flex-col justify-start">
              <div className="text-gray-800 text-sm sm:text-base md:text-lg space-y-6">
                <p>
                  "When we envisioned this space, it was not just about constructing a temple. It was about nurturing a
                  generation, healing hearts, and building an oasis where Krishna consciousness can be experienced in
                  its most beautiful, natural form. With Lord Krishna's blessings and the inspiration from Srila
                  Prabhupada, this project is a step toward reviving Sanatana Dharma—not through force or fear, but
                  through love, wisdom, and community. This retreat centre will be a place where devotion meets
                  sustainability, where education meets tradition, and where every visitor finds a deeper connection
                  with the divine within themselves. I invite you not just to visit this place—but to help build it,
                  serve in it, and grow spiritually along with it."
                </p>
              </div>
            </AnimateOnView>

            <AnimateOnView animation="fade-in" delay={300} className="md:w-2/5 flex justify-center items-start">
              <div className="rounded-lg overflow-hidden max-w-[280px]">
                <Image
                  src="/images/srila-prabhupada.jpg"
                  alt="Srila Prabhupada - Founder of ISKCON"
                  width={280}
                  height={350}
                  className="w-full h-auto"
                />
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="relative w-full py-12 mt-2 mb-8 bg-amber-50/30">
        <div className="px-4 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          </AnimateOnView>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 max-w-5xl mx-auto">
            {[
              { name: "Guru Das", role: "Main Co-ordinator" },
              { name: "Swami Maharaj", role: "Spiritual Guide" },
              { name: "Bhakti Prabhu", role: "Temple President" },
            ].map((member, index) => (
              <AnimateOnView key={index} animation="fade-up" delay={index * 150} className="flex flex-col items-center">
                <div className="w-full max-w-[280px] mb-4 overflow-hidden">
                  <Image
                    src={`/images/team-member-${index + 1}.jpg`}
                    alt={member.name}
                    width={280}
                    height={350}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <h3 className="text-gray-800 font-bold text-lg md:text-xl text-center mt-2">{member.name}</h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg text-center">{member.role}</p>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Banner */}
      <section className="relative w-full py-6">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/golden-banner-bg.png" alt="Golden banner background" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-900 font-medium text-base md:text-lg mb-4 sm:mb-0">
            Want to Join Us? Become a Seva Volunteer →
          </p>
          <Link
            href="/join"
            className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md inline-block text-sm sm:text-base md:text-lg transition-transform duration-300 hover:scale-105"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold mb-6">Partnerships & Blessings</h2>
        </AnimateOnView>

        <AnimateOnView animation="fade-in" delay={200}>
          <div className="max-w-3xl">
            <p className="text-gray-800 text-base md:text-lg font-medium mb-4">Supported and blessed by:</p>
            <ul className="space-y-2 md:space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-black mr-2 text-lg">•</span>
                <span className="text-gray-800 text-base md:text-lg">ISKCON Bhubaneswar</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2 text-lg">•</span>
                <span className="text-gray-800 text-base md:text-lg">ISKCON Mayapur</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2 text-lg">•</span>
                <span className="text-gray-800 text-base md:text-lg">Senior Vaishnava Acharyas & Sannyasis</span>
              </li>
            </ul>

            <p className="text-gray-800 text-base md:text-lg italic mb-2">
              "This project will stand as a lighthouse for generations of seekers."
            </p>
            <p className="text-gray-800 text-base md:text-lg">— HH [Spiritual Leader's Name]</p>
          </div>
        </AnimateOnView>
      </section>

      {/* Be a Part Section */}
      <section className="relative w-full py-12 my-8">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/cream-watercolor-texture.jpg"
            alt="Background texture"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="relative z-10 px-4 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                  Be a Part of the Spiritual Revolution
                </h2>
                <p className="text-gray-800 font-medium text-base md:text-lg mb-6">"Be a Part of Something Eternal."</p>

                <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-8">
                  Your contribution is more than a donation — it's an offering of the heart to Lord Krishna. It builds
                  not just walls, but faith. It nurtures souls, supports Seva, and inspires a movement.
                </p>

                <div className="flex justify-center mb-6">
                  <Link
                    href="/donate"
                    className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md inline-block text-sm sm:text-base md:text-lg w-full max-w-xs text-center transition-transform duration-300 hover:scale-105"
                  >
                    Donate Now
                  </Link>
                </div>

                <div className="text-center">
                  <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-2">Sponsor a Brick / Deity Ornament</p>
                  <p className="text-gray-800 text-sm sm:text-base md:text-lg flex items-center justify-center">
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
                      className="mr-2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Talk to Us — +91-0000000000
                  </p>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <div className="rounded-lg overflow-hidden max-w-[400px]">
                  <Image
                    src="/images/krishna-with-cows-flute.jpg"
                    alt="Lord Krishna playing flute with cows"
                    width={400}
                    height={320}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      <Footer />
    </main>
  )
}
