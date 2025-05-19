"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Search, ChevronRight, Book, Users, GraduationCap, Heart, Clock, User } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"
import { fetchEvents } from "@/lib/api"

// Define the Notice type based on the API structure
interface Notice {
  id: number
  noticeTitle: string
  noticeText: string
  creationTime: string
  globalNoticeID: string
  noticefile: string | null
}

export default function EventsPage() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [filteredNotices, setFilteredNotices] = useState<Notice[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch notices when the component mounts
  // useEffect(() => {
  //   fetchNotices()
  // }, [])

  useEffect(() => {
    const loadEvents = async () => {
      setIsLoading(true)
      try {
        const { data, error } = await fetchEvents()
        if (error || !data) {
          setError("Failed to fetch notices")
          return
        }

        setNotices(data.results) // ✅ store only the `results` array
      } catch (err) {
        console.error(err)
        setError("An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    loadEvents()
  }, [])

  // Function to fetch all notices
  const fetchNotices = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // In a real implementation, this would be an actual API call
      // For example:
      // const response = await fetch("http://127.0.0.1:8000/api/notice/notices/")
      // const data = await response.json()

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock data based on the API structure
      const mockNotices: Notice[] = [
        {
          id: 1,
          noticeTitle: "Kartika Deepotsava 2024",
          noticeText:
            "Join us for the auspicious month-long celebration of Kartika, the most sacred month dedicated to Lord Damodara. Every evening, thousands of lamps will be offered to the Lord, creating a divine atmosphere of devotion and light.\n\nKartika month (October-November) is considered the most auspicious time of the year for spiritual practices. During this month, all spiritual activities bear special fruits, and the worship of Lord Damodara (Krishna) is particularly potent.",
          creationTime: "2024-05-01T10:00:00Z",
          globalNoticeID: "NTC001",
          noticefile: "/images/kartika-deepotsava.png",
        },
        {
          id: 2,
          noticeTitle: "Deep Daan in Kartika Month",
          noticeText:
            "Special lamp offering ceremony during the auspicious month of Kartika. Participate in this beautiful tradition of offering lamps to Lord Krishna and receive divine blessings.",
          creationTime: "2024-05-02T14:30:00Z",
          globalNoticeID: "NTC002",
          noticefile: "/images/deep-daan-kartika.png",
        },
        {
          id: 3,
          noticeTitle: "Bhagavad Gita Study Circle",
          noticeText:
            "Weekly study of the Bhagavad Gita with in-depth discussions on its practical applications in modern life. Open to all levels of spiritual seekers.",
          creationTime: "2024-05-03T09:15:00Z",
          globalNoticeID: "NTC003",
          noticefile: "/images/spiritual-knowledge-centre.png",
        },
        {
          id: 4,
          noticeTitle: "Kirtan Mela",
          noticeText:
            "Experience the bliss of congregational chanting with renowned kirtaniyas. This special event brings together devotees from all over to participate in the divine sound vibration of the holy names.",
          creationTime: "2024-05-04T16:00:00Z",
          globalNoticeID: "NTC004",
          noticefile: "/images/kirtan-hall.png",
        },
        {
          id: 5,
          noticeTitle: "Govardhan Puja",
          noticeText:
            "Celebration of the day when Lord Krishna lifted Govardhan Hill. The festival includes a special abhishek ceremony, traditional annakut offering, and cultural performances.",
          creationTime: "2024-05-05T09:00:00Z",
          globalNoticeID: "NTC005",
          noticefile: "/hindu-festival.png",
        },
        {
          id: 6,
          noticeTitle: "Yoga & Meditation Retreat",
          noticeText:
            "A three-day immersive experience combining traditional yoga practices, meditation, and spiritual discourses. Accommodation and sattvic meals included.",
          creationTime: "2024-05-06T07:00:00Z",
          globalNoticeID: "NTC006",
          noticefile: "/images/yoga-retreat.png",
        },
      ]

      setNotices(mockNotices)
      setFilteredNotices(mockNotices)
    } catch (err) {
      console.error("Error fetching notices:", err)
      setError("Failed to load events. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  // Filter notices based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = notices.filter(
        (notice) =>
          notice.noticeTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          notice.noticeText.toLowerCase().includes(searchTerm.toLowerCase()) ||
          notice.noticeText.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredNotices(filtered)
    } else {
      setFilteredNotices(notices)
    }
  }, [searchTerm, notices])

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  // Get featured notices (first 2 for this example)
  const featuredNotices = filteredNotices.slice(0, 2)
  const regularNotices = filteredNotices.slice(2)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-amber-50">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/cream-watercolor-texture.jpg" alt="Background texture" fill className="object-cover" />
        </div>

        <div className="relative z-10 px-4 py-12 md:py-16 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="text-center">
              <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Events & Celebrations</h1>
              <p className="text-gray-800 text-base md:text-xl max-w-3xl mx-auto">
                Join us for divine celebrations, spiritual discourses, and community gatherings that nourish the soul
                and deepen your connection with Krishna.
              </p>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Educational Programs Section - NEWLY ADDED */}
      <section className="py-12 px-4 bg-amber-50/50">
        <div className="max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Educational Programs</h2>
              <p className="text-gray-800 text-base md:text-lg max-w-3xl mx-auto">
                Our educational programs are rooted in the teachings of Lord Chaitanya Mahaprabhu. We offer classes on
                Bhagavad Gita, Srimad Bhagavatam, and other Vedic literatures to help individuals deepen their
                understanding of Krishna Consciousness.
              </p>
            </div>
          </AnimateOnView>

          {/* Three Images as Static Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <AnimateOnView animation="fade-up" delay={0}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bhagavad-gita-class-kaLYpsps1KbTsNFnKlsJ4i6gx5VjEe.png"
                    alt="Bhagavad Gita Class"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold">Bhagavad Gita Class</h3>
                  </div>
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView animation="fade-up" delay={150}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/kirtan-devotees-up1Uu2nFl3s8ZEluuGnmLwPO7HLw39.png"
                    alt="Kirtan Devotees"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold">Kirtan Devotees</h3>
                  </div>
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView animation="fade-up" delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/srimad-bhagavatam-study-group-MnwX14SsXHvXU9rP00upA68rXWYKT4.png"
                    alt="Srimad Bhagavatam Study Group"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold">Srimad Bhagavatam Study</h3>
                  </div>
                </div>
              </div>
            </AnimateOnView>
          </div>

          {/* Bhakti Yoga Section */}
          <AnimateOnView animation="fade-up" delay={150}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image src="/bhakti-yoga.png" alt="Bhakti Yoga Practice" fill className="object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-primary text-xl md:text-2xl font-bold mb-4">Bhakti Yoga: The Path of Devotion</h3>
                  <p className="text-gray-700 mb-4">
                    At ISKCON Baranga-Patia, we emphasize Bhakti Yoga (devotional service) as the most direct and
                    sublime path to spiritual realization. Unlike other forms of yoga that focus primarily on physical
                    postures or mental exercises, Bhakti Yoga centers on developing pure love for Lord Krishna through
                    various devotional practices.
                  </p>
                  <p className="text-gray-700 mb-4">
                    These practices include chanting the Hare Krishna maha-mantra, studying sacred texts, offering
                    service at the temple, participating in kirtans (devotional singing), and honoring Krishna prasadam
                    (sanctified food).
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    <Heart className="mr-2" size={18} />
                    <span>The essence of Bhakti Yoga is to awaken our dormant love for Krishna</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnView>

          {/* Programs Cards */}
          <h3 className="text-primary text-xl md:text-2xl font-bold mb-6">Our Spiritual Education Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <AnimateOnView animation="fade-up" delay={0}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=400&query=bhagavad gita class"
                    alt="Bhagavad Gita Classes"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-primary text-white p-2 rounded-br-lg">
                    <Book size={20} />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-gray-800 text-lg font-bold mb-2">Bhagavad Gita Classes</h4>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Clock size={14} className="mr-1" />
                    <span>Every Sunday, 8:00 AM - 9:30 AM</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Systematic study of the Bhagavad Gita with verse-by-verse explanations and practical applications
                    for modern life. Classes are interactive and include Q&A sessions.
                  </p>
                  <Link
                    href="/programs/bhagavad-gita"
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView animation="fade-up" delay={150}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=400&query=srimad bhagavatam study"
                    alt="Srimad Bhagavatam Study Groups"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-primary text-white p-2 rounded-br-lg">
                    <Users size={20} />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-gray-800 text-lg font-bold mb-2">Srimad Bhagavatam Study Groups</h4>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Clock size={14} className="mr-1" />
                    <span>Weekdays, 7:00 AM - 8:00 AM</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    In-depth exploration of the Srimad Bhagavatam, the ripened fruit of Vedic literature. These study
                    groups focus on understanding the pastimes of Lord Krishna and the philosophical teachings of the
                    text.
                  </p>
                  <Link
                    href="/programs/bhagavatam"
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView animation="fade-up" delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/placeholder-bfgnu.png"
                    alt="ISKCON Education Programs"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-primary text-white p-2 rounded-br-lg">
                    <GraduationCap size={20} />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-gray-800 text-lg font-bold mb-2">ISKCON Education Programs (IEP)</h4>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Clock size={14} className="mr-1" />
                    <span>Various schedules available</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Structured courses on Vaishnava philosophy, culture, and practices. These programs include Bhakti
                    Sastri, Bhakti Vaibhava, and specialized workshops on various aspects of Krishna consciousness.
                  </p>
                  <Link href="/programs/iep" className="text-primary font-medium flex items-center hover:underline">
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </AnimateOnView>
          </div>

          {/* Youth Programs & Retreats */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="p-6">
              <h3 className="text-primary text-xl md:text-2xl font-bold mb-6">Youth Programs & Spiritual Retreats</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <AnimateOnView animation="fade-up" delay={0}>
                  <div className="border border-gray-200 rounded-lg p-5 hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-2 rounded-full mr-4">
                        <User size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">Children's Sunday School</h4>
                        <p className="text-gray-600 text-sm">
                          Age-appropriate classes teaching Vaishnava values, stories from scriptures, and devotional
                          activities for children ages 5-12.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateOnView>

                <AnimateOnView animation="fade-up" delay={150}>
                  <div className="border border-gray-200 rounded-lg p-5 hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-2 rounded-full mr-4">
                        <User size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">Teen Bhakti Program</h4>
                        <p className="text-gray-600 text-sm">
                          Interactive sessions for teenagers to explore Krishna consciousness through discussions,
                          activities, and service opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateOnView>

                <AnimateOnView animation="fade-up" delay={300}>
                  <div className="border border-gray-200 rounded-lg p-5 hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-2 rounded-full mr-4">
                        <User size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">College Outreach</h4>
                        <p className="text-gray-600 text-sm">
                          Programs designed for university students, including philosophical discussions, prasadam
                          distribution, and kirtan events on campus.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateOnView>

                <AnimateOnView animation="fade-up" delay={450}>
                  <div className="border border-gray-200 rounded-lg p-5 hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-2 rounded-full mr-4">
                        <User size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">Spiritual Retreats</h4>
                        <p className="text-gray-600 text-sm">
                          Weekend and week-long immersive experiences focusing on spiritual practices, deep study, and
                          community building.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateOnView>
              </div>

              <div className="bg-amber-50 rounded-lg p-5 mt-6">
                <h4 className="text-gray-800 font-bold mb-2">Upcoming Retreats</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <Calendar size={16} className="mr-2 text-primary" />
                    <span>June 15-17, 2024: Weekend Bhakti Immersion</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Calendar size={16} className="mr-2 text-primary" />
                    <span>July 10-17, 2024: Summer Spiritual Retreat</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Calendar size={16} className="mr-2 text-primary" />
                    <span>August 25-27, 2024: Krishna Janmashtami Special Retreat</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Srila Prabhupada Quote */}
          <AnimateOnView animation="fade-up">
            <div className="bg-primary/5 rounded-lg p-6 md:p-8 mb-12 border-l-4 border-primary">
              <div className="md:flex items-center">
                <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                    <Image src="/srila-prabhupada-portrait.png" alt="Srila Prabhupada" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <blockquote className="text-gray-700 text-lg md:text-xl italic mb-4">
                    "The best way to understand the philosophy of Krishna Consciousness is to engage in devotional
                    service under the guidance of a bona fide spiritual master."
                  </blockquote>
                  <cite className="text-primary font-bold block">
                    — His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
                  </cite>
                  <p className="text-gray-600 mt-2 text-sm">
                    Founder-Acharya of the International Society for Krishna Consciousness
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search events by title or description"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </AnimateOnView>
      </section>

      {/* Featured Events Section */}
      {featuredNotices.length > 0 && (
        <section className="py-8 px-4 max-w-7xl mx-auto">
          <AnimateOnView animation="fade-up">
            <h2 className="text-primary text-2xl sm:text-3xl font-bold mb-6">Featured Events</h2>
          </AnimateOnView>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredNotices.map((notice, index) => (
              <AnimateOnView key={notice.id} animation="fade-up" delay={index * 150}>
                <Link href={`/events/${notice.id}`} className="block group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full card-hover-effect">
                    <div className="relative h-64">
                      <Image
                        src={notice.noticefile || "/placeholder.svg?height=400&width=600&query=event"}
                        alt={notice.noticeTitle}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded">
                        {notice.globalNoticeID}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">{notice.noticeTitle}</h3>
                        <div className="flex flex-wrap gap-3">
                          <div className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {formatDate(notice.creationTime)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start mb-4">
                        <MapPin size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">Temple Grounds</span>
                      </div>
                      <p className="text-gray-600 line-clamp-3 mb-4">{notice.noticeText}</p>
                      <div className="flex justify-end">
                        <span className="text-primary font-medium flex items-center group-hover:underline">
                          View Details <ChevronRight size={16} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnView>
            ))}
          </div>
        </section>
      )}

      {/* All Events Section */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <h2 className="text-primary text-2xl sm:text-3xl font-bold mb-6">All Events</h2>
        </AnimateOnView>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">{error}</div>
        ) : filteredNotices.length === 0 ? (
          <div className="bg-amber-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search criteria, or check back later for new events.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNotices.map((notice, index) => (
              <AnimateOnView key={notice.id} animation="fade-up" delay={index * 100}>
                <Link href={`/events/${notice.id}`} className="block group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full card-hover-effect">
                    <div className="relative h-48">
                      <Image
                        src={notice.noticefile || "/placeholder.svg?height=300&width=400&query=event"}
                        alt={notice.noticeTitle}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded">
                        {notice.globalNoticeID}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-gray-800 text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {notice.noticeTitle}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <Calendar size={14} className="mr-1" />
                        <span>{formatDate(notice.creationTime)}</span>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">{notice.noticeText}</p>
                      <div className="flex justify-end">
                        <span className="text-primary text-sm font-medium flex items-center group-hover:underline">
                          Read More <ChevronRight size={14} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnView>
            ))}
          </div>
        )}
      </section>

      {/* Event Registration CTA */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <AnimateOnView animation="fade-up">
          <div className="bg-amber-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-primary text-2xl sm:text-3xl font-bold mb-4">Want to Stay Updated?</h2>
            <p className="text-gray-800 max-w-2xl mx-auto mb-6">
              Subscribe to our newsletter to receive event notifications, spiritual insights, and exclusive invitations
              to special ceremonies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </AnimateOnView>
      </section>

      <Footer />
    </main>
  )
}
