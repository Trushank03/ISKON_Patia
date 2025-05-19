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
                <p className="text-primary text-sm sm:text-base md:text-lg">Serving Śrī Krishna. Sustaining Dharma.</p>
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
            The Origin — Why This Temple Was Conceived
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
              In the midst of Bhubaneswar's rising skyline and fast-paced urban life, many hearts cried for a spiritual
              sanctuary. A place where one could breathe freely, and hear the gentle sounds of kīrtana caress the wind.
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
              It was in response to this inner call that the vision of Sri Sri Radha Nilamadhava Cultural and Eco-
              Spiritual Heritage Village was born—a transcendental offering to Śrī Krishna, to create a new Vrindavan in
              Odisha where bhakti (devotion), simplicity, and sustainability co-exist in unprecedented harmony.
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg">
              Just as Lord Kṛṣṇa tended His cows in Vṛndāvana amidst gardens, forests, and Govardhana Hill, here too,
              the Supreme Personality of Godhead will be worshipped in natural beauty, sacred art, and profound
              teachings—a spiritual village for generations to come.
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

      {/* ISKCON Baranga-Patia Mission Section - NEW */}
      <section className="relative w-full py-12 my-8 bg-amber-50/30">
        <div className="px-4 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
              ISKCON Baranga-Patia
            </h2>
          </AnimateOnView>

          <AnimateOnView animation="fade-in" delay={200}>
            <div className="text-center max-w-4xl mx-auto mb-8">
              <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6">
                ISKCON Baranga-Patia, established under the guidance of Srila Prabhupada's divine mission, is a center
                for the propagation of Krishna Consciousness. Our aim is to provide a platform for devotees to engage in
                devotional service (seva), learn the timeless wisdom of the Vedas, and immerse themselves in
                Radha-Krishna bhakti.
              </p>
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
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6">
                  To establish a dynamic spiritual ecosystem rooted in the teachings of Śrīla Prabhupāda, designed to
                  inspire hearts elevate their consciousness, and become a global beacon of Kṛṣṇa consciousness and
                  Vedic lifestyle.
                </p>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Our vision is to spread the glories of Lord Krishna through devotional practices, creating a community
                  dedicated to Bhakti Yoga. We aspire to serve humanity by sharing the teachings of Srila Prabhupada,
                  thus reviving the spiritual essence of the Vedic Tradition.
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
                    To construct a traditional ISKCON temple where Śrī Śrī Radha Nilamadhava are worshipped with full
                    Vedic standards and loving devotion
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span className="text-gray-800 text-sm sm:text-base md:text-lg">
                    To offer a peaceful eco-retreat for those seeking divine purpose in natural surroundings
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span className="text-gray-800 text-sm sm:text-base md:text-lg">
                    To establish a Gurukula and spiritual learning center integrating ancient Vedic wisdom with modern
                    pedagogy
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span className="text-gray-800 text-sm sm:text-base md:text-lg">
                    To preserve and present timeless knowledge through media, theatre, exhibitions, and educational
                    platforms
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span className="text-gray-800 text-sm sm:text-base md:text-lg">
                    To provide holistic sāttvic experiences through prasādam, devotional music, spiritual seva, and
                    conscious community life
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
              "It's Not Just a Temple. It's a Tīrtha for Tomorrow."
            </p>
          </AnimateOnView>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <AnimateOnView animation="fade-in" delay={200} className="md:w-3/5 flex flex-col justify-start">
              <div className="text-gray-800 text-sm sm:text-base md:text-lg space-y-6">
                <p>
                  "This is not merely an architectural endeavor. It is a heart-offering to Śrī Kṛṣṇa. I dedicate to His
                  Divine Grace A. C. Bhaktivedanta Swami Prabhupāda, this village is meant to be a spiritual heritage
                  site—a living example of Vedic culture, devotional life, and conscious living.
                </p>
                <p>
                  With the blessings of our paramparā and the support of the worldwide devotee family, we are building a
                  sanctuary where Kṛṣṇa-bhakti is experienced. A place where our elders can retire in devotion, our
                  children can grow in wisdom, and seekers from all over the world can reconnect with their true
                  identity.
                </p>
                <p>
                  Join us—not just to visit this place, but to build it, serve in it, and be spiritually transformed by
                  it.
                </p>
                <p>
                  As Srila Prabhupada often emphasized, we are not the body, but spirit souls. This center is
                  established to help all individuals connect with their true spiritual identity through devotional
                  service (seva) to Lord Krishna.
                </p>
              </div>
            </AnimateOnView>

            <AnimateOnView animation="fade-in" delay={300} className="md:w-2/5 flex justify-center items-start">
              <div className="rounded-lg overflow-hidden max-w-[280px]">
                <Image
                  src="/images/srila-prabhupada.jpg"
                  alt="His Divine Grace A.C. Bhaktivedanta Swami Prabhupada - Founder-Acharya of ISKCON"
                  width={280}
                  height={350}
                  className="w-full h-auto"
                />
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Our Guiding Lights Section - UPDATED with consistent sizing and animations */}
      <section className="relative w-full py-12 mt-2 mb-8 bg-amber-50/30">
        <div className="px-4 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
              Our Guiding Lights
            </h2>
          </AnimateOnView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "H.D.G A.C Bhaktivedanta Swami Prabhupada",
                role: "Eternal Guru",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/srila-prabhupada-portrait-5WHZNoVXznyHuMriQ9mOwV6BXKBkWE.png",
              },
              {
                name: "HG Tukaram Das",
                role: "Spiritual Guide",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/tukaram-das-IKbLf1Im9lPwNEtqjVLlfjmSBJZwuq.png",
              },
              {
                name: "Bhakti Prabhu",
                role: "Temple President",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/bhakti-prabhu-RDAYbXL9RXxU4vl1ESlBThr9RTdQRE.png",
              },
            ].map((person, index) => (
              <AnimateOnView key={index} animation="fade-up" delay={index * 150} className="flex flex-col items-center">
                <div className="w-full aspect-[3/4] mb-4 overflow-hidden rounded-lg shadow-md">
                  <div className="w-full h-full relative">
                    <Image
                      src={person.image || "/placeholder.svg"}
                      alt={person.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <h3 className="text-gray-800 font-bold text-lg md:text-xl text-center mt-2">{person.name}</h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg text-center">{person.role}</p>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Blessings & Endorsements Section - UPDATED */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold mb-6">Blessings & Endorsements</h2>
        </AnimateOnView>

        <AnimateOnView animation="fade-in" delay={200}>
          <div className="max-w-3xl">
            <p className="text-gray-800 text-base md:text-lg font-medium mb-4">This project is an initiative of:</p>
            <ul className="space-y-2 md:space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-black mr-2 text-lg">•</span>
                <span className="text-gray-800 text-base md:text-lg">
                  ISKCON Bhubaneswar (Founder-Ācārya: Śrīla Gour Govinda Swami)
                </span>
              </li>
            </ul>

            <p className="text-gray-800 text-base md:text-lg italic mb-2">
              "This village will be a lighthouse of Kṛṣṇa consciousness, standing tall for centuries, guiding seekers
              toward the Supreme."
            </p>
            <p className="text-gray-800 text-base md:text-lg">— Quote</p>
          </div>
        </AnimateOnView>
      </section>

      {/* Be a Part Section - COMPLETELY REDESIGNED */}
      <section className="relative w-full py-16 my-8">
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
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              <div className="lg:w-1/2 max-w-2xl mx-auto lg:mx-0">
                <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left">
                  Be a Part of the Spiritual Revolution
                </h2>

                <div className="bg-white/80 rounded-xl p-6 md:p-8 shadow-md backdrop-blur-sm border border-amber-100">
                  <p className="text-gray-800 font-medium text-lg md:text-xl mb-6 text-center lg:text-left">
                    "This Is More Than a Temple — It's a Global Home for Kṛṣṇa Consciousness."
                  </p>

                  <p className="text-gray-800 text-base md:text-lg mb-8">
                    In a world full of noise and distraction, we are building a spiritual refuge. A sanctuary for your
                    soul, your family, and future generations. Your contribution is not just a donation — it's an
                    offering to the Lord. It manifests not just bricks and walls, but śraddhā, bhakti, and community.
                  </p>

                  <div className="space-y-4 mb-8 pl-4">
                    <div className="flex items-start">
                      <span className="text-primary mr-3 text-xl">•</span>
                      <p className="text-gray-800 text-base md:text-lg">Sponsor a Brick / Deity Ornament</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-3 text-xl">•</span>
                      <p className="text-gray-800 text-base md:text-lg">Become a Lifetime Cottage Member</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-3 text-xl">•</span>
                      <p className="text-gray-800 text-base md:text-lg">Serve as a Seva Volunteer</p>
                    </div>
                  </div>

                  <div className="flex justify-center mb-6">
                    <Link
                      href="/donate"
                      className="bg-primary hover:bg-primary/90 text-white font-medium px-10 py-4 rounded-md inline-block text-base md:text-lg w-full max-w-xs text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Donate Now
                    </Link>
                  </div>

                  <div className="text-center space-y-2">
                    <p className="text-gray-800 text-base md:text-lg flex items-center justify-center">
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
                      Contact us: +91-7978776093
                    </p>
                    <p className="text-gray-800 text-base md:text-lg flex items-center justify-center">
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Visit iskconBaranga-Patia.com
                    </p>
                    <p className="text-primary font-medium text-xl mt-4">Hare Krishna!</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 flex justify-center">
                <div className="rounded-xl overflow-hidden shadow-lg max-w-[500px] w-full">
                  <Image
                    src="/images/iskcon-temple-devotees.png"
                    alt="ISKCON Temple with devotees performing aarti ceremony"
                    width={500}
                    height={375}
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
