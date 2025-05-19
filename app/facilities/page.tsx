import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, HeartHandshakeIcon, BookOpenIcon, UsersIcon, ArrowRightIcon } from "lucide-react"

export default function FacilitiesPage() {
  // Most of the code remains the same, only changing the Seva Opportunities section
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
                <h1 className="text-[#B94A3E] text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  Temple Worship & Devotional Services
                </h1>
                <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-2">
                  ISKCON Baranga-Patia is a place where devotees can come together to engage in temple worship, offer
                  prayers, and participate in seva (service) for the pleasure of Lord Krishna.
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

      {/* Daily Temple Services Section */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
            Daily Temple Services
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-12">
            Join us for daily aratis, kirtans, and spiritual programs
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
            <div className="space-y-4">
              {[
                {
                  time: "Mangala Arati (4:30 AM - 5:00 AM)",
                  desc: "Early morning worship of the deities with offerings of incense, lamps, flowers, and food.",
                },
                {
                  time: "Darshan Arati (7:15 AM - 7:45 AM)",
                  desc: "Morning darshan of the deities with bhajans and kirtans.",
                },
                {
                  time: "Bhagavad Gita Class (8:00 AM - 9:00 AM)",
                  desc: "Daily discourse on Bhagavad Gita and other Vedic scriptures.",
                },
                {
                  time: "Sandhya Arati (6:30 PM - 7:00 PM)",
                  desc: "Evening worship with beautiful kirtan and bhajans.",
                },
                {
                  time: "Shayana Arati (8:30 PM - 9:00 PM)",
                  desc: "Final arati of the day before the deities retire for the night.",
                },
              ].map((item, index) => (
                <AnimateOnView
                  key={index}
                  animation="fade-up"
                  delay={100 * (index + 1)}
                  className="transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <ClockIcon className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{item.time}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Srila Prabhupada's Teachings Section */}
      <section className="px-4 py-12 max-w-7xl mx-auto bg-amber-50/30">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
            Srila Prabhupada's Teachings on Temple Worship
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-12">
            Guidance from our Founder-Acharya
          </p>
        </AnimateOnView>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <AnimateOnView animation="slide-in-left" delay={300} className="md:w-2/3">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 italic">
                "In this age of Kali, people who are endowed with sufficient intelligence will worship the Lord, who is
                accompanied by His associates, by performance of sankirtana-yajna."
              </p>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6">
                Srila Prabhupada emphasized that temple worship is essential for spiritual advancement. The temple is
                the house of God where devotees can come to offer their love and devotion to the Lord through various
                services.
              </p>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg">
                "The temple worship is one of the most important features of devotional service. In the beginning one is
                advised to worship the Deity in the temple. There are two kinds of devotees. One is called goṣṭhānandī,
                and the other is called bhajanānandī. The word bhajanānandī refers to the devotee who does not move but
                remains in one place. Such a devotee is always engaged in the devotional service of the Lord."
              </p>
              <div className="mt-4 text-right">
                <p className="text-primary font-medium">- Nectar of Devotion, Chapter 9</p>
              </div>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-in-right" delay={200} className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-md max-w-[250px] mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/srila-prabhupada-portrait-5WHZNoVXznyHuMriQ9mOwV6BXKBkWE.png"
                alt="Srila Prabhupada"
                width={250}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Seva Opportunities Section - FIXED CARD SIZES */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
            Seva Opportunities
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-12">
            Serve the Lord with Love and Devotion
          </p>
        </AnimateOnView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Deity Worship",
              image: "/images/kirtan-hall-interior.png",
              desc: "Assist in deity dressing, altar decoration, garland making, and preparing offerings for the Lord.",
            },
            {
              title: "Kitchen Service",
              image: "/images/satwik-restaurant-interior.png",
              desc: "Help prepare prasadam for the deities and devotees. Learn the art of cooking with devotion.",
            },
            {
              title: "Book Distribution",
              image: "/images/yoga-meditation-space.png",
              desc: "Participate in distributing Srila Prabhupada's books to spread Krishna consciousness.",
            },
            {
              title: "Temple Cleaning",
              image: "/images/spiritual-cottage.png",
              desc: "Help maintain the cleanliness and sanctity of the temple premises.",
            },
            {
              title: "Kirtan & Music",
              image: "/images/vedic-corridor.png",
              desc: "Join the kirtan team to lead or participate in devotional singing and music.",
            },
            {
              title: "Festival Organization",
              image: "/images/iskcon-temple-entrance.png",
              desc: "Help organize and manage festivals like Janmashtami, Gaura Purnima, and Ratha Yatra.",
            },
          ].map((item, index) => (
            <AnimateOnView key={index} animation="fade-up" delay={100 * (index + 1)}>
              {/* Fixed height card with consistent layout */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 h-[420px] flex flex-col">
                {/* Fixed height image container */}
                <div className="h-[180px] relative overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500"></div>
                </div>

                {/* Fixed layout content area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-primary mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>

                  {/* Fixed height description area */}
                  <div className="flex-grow mb-4">
                    <p className="text-gray-700">{item.desc}</p>
                  </div>

                  {/* Button at the bottom */}
                  <div className="mt-auto">
                    <Button className="w-full group overflow-hidden relative">
                      <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 flex items-center justify-center w-full">
                        Sign Up for {item.title} Seva
                        <ArrowRightIcon
                          size={16}
                          className="ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </section>

      {/* The Importance of Seva Section */}
      <section className="px-4 py-12 max-w-7xl mx-auto bg-amber-50/30">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
            The Importance of Seva in ISKCON
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-12">
            Devotional Service as the Path to Spiritual Advancement
          </p>
        </AnimateOnView>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: HeartHandshakeIcon,
              title: "Purification of Heart",
              desc: '"By regularly rendering devotional service, one gradually becomes attached to the Supreme Personality of Godhead. When that attachment is intensified, it becomes love of Godhead." Seva helps purify the heart and develop love for Krishna.',
            },
            {
              icon: BookOpenIcon,
              title: "Spiritual Knowledge",
              desc: '"To those who are constantly devoted to serving Me with love, I give the understanding by which they can come to Me." Through seva, one gains spiritual knowledge and understanding.',
            },
            {
              icon: UsersIcon,
              title: "Association of Devotees",
              desc: '"The devotees of the Lord always speak of the Supreme Lord and hear about Him. Thus they are constantly remembering the Lord." Seva provides the opportunity to associate with like-minded devotees.',
            },
            {
              icon: CalendarIcon,
              title: "Freedom from Material Bondage",
              desc: '"One who engages in full devotional service, unfailing in all circumstances, at once transcends the modes of material nature and thus comes to the level of Brahman." Seva helps one transcend material attachments.',
            },
          ].map((item, index) => (
            <AnimateOnView key={index} animation="fade-up" delay={150 * (index + 1)}>
              <div className="bg-white rounded-lg p-6 shadow-md h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <item.icon className="text-primary mr-3" size={24} />
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>

        <AnimateOnView animation="fade-up" delay={600}>
          <div className="mt-12 text-center">
            <p className="text-gray-800 text-lg mb-6 max-w-3xl mx-auto">
              "Devotional service, beginning with the chanting of the holy name of the Lord, is the ultimate religious
              principle for the living entity in human society."
            </p>
            <p className="text-primary font-medium">- Srimad Bhagavatam 6.3.22</p>
          </div>
        </AnimateOnView>
      </section>

      {/* Festival Calendar Section */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
            Upcoming Festivals & Events
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-12">
            Join us in celebrating these auspicious occasions
          </p>
        </AnimateOnView>

        <AnimateOnView animation="fade-up" delay={200}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-left">Festival</th>
                    <th className="py-3 px-4 text-left hidden sm:table-cell">Activities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      date: "August 19, 2023",
                      festival: "Sri Krishna Janmashtami",
                      activities: "Abhishekam, 24-hour kirtan, midnight arati, feast",
                    },
                    {
                      date: "August 20, 2023",
                      festival: "Srila Prabhupada's Appearance Day",
                      activities: "Pushpanjali, kirtan, feast, Prabhupada katha",
                    },
                    {
                      date: "September 7, 2023",
                      festival: "Radhastami",
                      activities: "Special abhishekam, bhajans, feast",
                    },
                    {
                      date: "October 24, 2023",
                      festival: "Diwali",
                      activities: "Temple decoration, lamp offering, special arati",
                    },
                    {
                      date: "October 25, 2023",
                      festival: "Govardhan Puja",
                      activities: "Govardhan Hill recreation, 56 bhog offering",
                    },
                    {
                      date: "March 24, 2024",
                      festival: "Gaura Purnima",
                      activities: "Abhishekam, 12-hour kirtan, feast",
                    },
                    {
                      date: "July 10, 2024",
                      festival: "Ratha Yatra",
                      activities: "Chariot procession, cultural programs, feast",
                    },
                  ].map((event, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="py-3 px-4">{event.date}</td>
                      <td className="py-3 px-4 font-medium">{event.festival}</td>
                      <td className="py-3 px-4 hidden sm:table-cell">{event.activities}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="block sm:hidden p-4 text-center text-sm text-gray-500">
              * Swipe to see festival activities
            </div>
          </div>
        </AnimateOnView>

        <div className="mt-8 text-center">
          <AnimateOnView animation="bounce" delay={300}>
            <Link
              href="/events"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View All Events
              <ArrowRightIcon size={16} className="ml-2" />
            </Link>
          </AnimateOnView>
        </div>
      </section>

      {/* Join Us Section */}
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
              <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold mb-4">Join Our Spiritual Family</h2>
              <p className="text-primary text-sm sm:text-base md:text-lg mb-12 max-w-3xl mx-auto">
                "The temple is the house of the Lord, and the Lord reciprocates with the devotees. He gives Himself to
                those who surrender unto Him."
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-3xl mx-auto mb-8">
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Become a Temple Member",
                    link: "/contact",
                    buttonText: "Join Now",
                  },
                  {
                    title: "Register for Bhakti Vriksha Program",
                    link: "/contact",
                    buttonText: "Register",
                  },
                  {
                    title: "Support Temple Development",
                    link: "/donate",
                    buttonText: "Donate Now",
                  },
                ].map((item, index) => (
                  <AnimateOnView key={index} animation="fade-up" delay={150 * (index + 1)}>
                    <div className="flex flex-col sm:flex-row justify-between items-center p-3 rounded-lg hover:bg-amber-50/30 transition-colors duration-300">
                      <span className="text-primary text-lg font-medium mb-3 sm:mb-0">{item.title}</span>
                      <Link
                        href={item.link}
                        className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md text-lg w-full sm:w-auto text-center transition-all duration-300 hover:shadow-md hover:scale-105"
                      >
                        {item.buttonText}
                      </Link>
                    </div>
                  </AnimateOnView>
                ))}
              </div>
            </div>

            <AnimateOnView animation="fade-up" delay={600}>
              <div className="text-center">
                <p className="text-primary text-lg font-medium mb-2">
                  Hare Krishna Hare Krishna, Krishna Krishna Hare Hare
                </p>
                <p className="text-primary text-lg font-medium mb-4">Hare Rama Hare Rama, Rama Rama Hare Hare</p>
                <p className="text-primary text-sm">
                  Visit us: ISKCON Baranga-Patia, Bhubaneswar | Contact: +91-7978776093
                </p>
              </div>
            </AnimateOnView>
          </AnimateOnView>
        </div>
      </section>

      <Footer />
    </main>
  )
}
