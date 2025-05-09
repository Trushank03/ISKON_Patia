"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Calendar, ArrowLeft, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"

// Define the Notice type based on the API structure
interface Notice {
  id: number
  noticeTitle: string
  noticeText: string
  creationTime: string
  globalNoticeID: string
  noticefile: string | null
}

export default function EventDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [notice, setNotice] = useState<Notice | null>(null)
  const [relatedNotices, setRelatedNotices] = useState<Notice[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch notice data
  useEffect(() => {
    const fetchNotice = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // In a real implementation, this would be an actual API call
        // For example:
        // const response = await fetch(`http://127.0.0.1:8000/api/notice/notices/${params.id}/`)
        // const data = await response.json()

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800))

        // Mock data based on the API structure
        const mockNotices: Notice[] = [
          {
            id: 1,
            noticeTitle: "Kartika Deepotsava 2024",
            noticeText:
              "Join us for the auspicious month-long celebration of Kartika, the most sacred month dedicated to Lord Damodara. Every evening, thousands of lamps will be offered to the Lord, creating a divine atmosphere of devotion and light.\n\nKartika month (October-November) is considered the most auspicious time of the year for spiritual practices. During this month, all spiritual activities bear special fruits, and the worship of Lord Damodara (Krishna) is particularly potent.\n\nOur celebration includes:\n\n- Daily lamp offerings (deepdan) to Lord Damodara\n- Special abhishekams (sacred bathing ceremony)\n- Extended kirtan sessions\n- Spiritual discourses on the glories of Kartika\n- Community prasadam feasts\n\nWe invite all devotees to participate in this beautiful tradition. You can sponsor lamps for the entire month or join us for the evening arati ceremonies.",
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

        const noticeId = Number(params.id)
        const foundNotice = mockNotices.find((n) => n.id === noticeId) || null

        setNotice(foundNotice)

        // Get related notices (excluding the current one)
        if (foundNotice) {
          const related = mockNotices.filter((n) => n.id !== noticeId).slice(0, 3)
          setRelatedNotices(related)
        }
      } catch (err) {
        console.error("Error fetching notice:", err)
        setError("Failed to load event details. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchNotice()
  }, [params.id])

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: notice?.noticeTitle,
        text: `Check out this event: ${notice?.noticeTitle}`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="flex justify-center items-center py-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </main>
    )
  }

  if (!notice) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/events"
            className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300"
          >
            View All Events
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Event Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src={notice.noticefile || "/placeholder.svg?height=500&width=1000&query=spiritual event"}
          alt={notice.noticeTitle}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8 md:pb-12">
            <AnimateOnView animation="fade-up">
              <button
                onClick={() => router.push("/events")}
                className="flex items-center text-white mb-4 hover:underline"
              >
                <ArrowLeft size={16} className="mr-1" />
                Back to Events
              </button>
              <div className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-md mb-3">
                {notice.globalNoticeID}
              </div>
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{notice.noticeTitle}</h1>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-md flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {formatDate(notice.creationTime)}
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <AnimateOnView animation="fade-up">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">About This Event</h2>
                  <div className="prose max-w-none text-gray-700">
                    {notice.noticeText.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                    <div className="text-gray-600 text-sm">
                      <span>Event ID: {notice.globalNoticeID}</span>
                    </div>
                    <button onClick={handleShare} className="flex items-center text-primary hover:text-primary/80">
                      <Share2 size={16} className="mr-1" />
                      Share
                    </button>
                  </div>
                </div>
              </AnimateOnView>

              {/* Contact Information */}
              <AnimateOnView animation="fade-up" delay={200}>
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mt-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <span className="font-medium">Email:</span> info@sanatanacentre.org
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Phone:</span> +91-9000000000
                    </p>
                  </div>
                </div>
              </AnimateOnView>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <AnimateOnView animation="fade-up" delay={100}>
                {/* Event Details */}
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Event Details</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-gray-700 font-medium">Date</h3>
                      <p className="text-gray-800">{formatDate(notice.creationTime)}</p>
                    </div>
                    <div>
                      <h3 className="text-gray-700 font-medium">Location</h3>
                      <p className="text-gray-800">Temple Grounds, Sanatana Dharma Centre</p>
                    </div>
                    <div>
                      <h3 className="text-gray-700 font-medium">Entry</h3>
                      <p className="text-gray-800">Free for all devotees</p>
                    </div>
                  </div>
                </div>

                {/* Related Events */}
                {relatedNotices.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Related Events</h2>
                    <div className="space-y-4">
                      {relatedNotices.map((relatedNotice) => (
                        <Link key={relatedNotice.id} href={`/events/${relatedNotice.id}`} className="block group">
                          <div className="flex gap-3">
                            <div className="w-20 h-20 relative flex-shrink-0">
                              <Image
                                src={relatedNotice.noticefile || "/placeholder.svg?height=80&width=80&query=event"}
                                alt={relatedNotice.noticeTitle}
                                fill
                                className="object-cover rounded-md"
                              />
                            </div>
                            <div>
                              <h3 className="text-gray-800 font-medium group-hover:text-primary transition-colors duration-300">
                                {relatedNotice.noticeTitle}
                              </h3>
                              <p className="text-gray-600 text-sm">{formatDate(relatedNotice.creationTime)}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </AnimateOnView>
            </div>
          </div>
        </div>
      </section>

      {/* More Events Section */}
      <section className="py-8 md:py-12 bg-amber-50/50">
        <div className="container mx-auto px-4">
          <AnimateOnView animation="fade-up">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">Explore More Events</h2>
          </AnimateOnView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedNotices.map((otherNotice, index) => (
              <AnimateOnView key={otherNotice.id} animation="fade-up" delay={index * 100}>
                <Link href={`/events/${otherNotice.id}`} className="block group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full card-hover-effect">
                    <div className="relative h-48">
                      <Image
                        src={otherNotice.noticefile || "/placeholder.svg?height=200&width=300&query=event"}
                        alt={otherNotice.noticeTitle}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded">
                        {otherNotice.globalNoticeID}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-gray-800 text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {otherNotice.noticeTitle}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <Calendar size={14} className="mr-1" />
                        <span>{formatDate(otherNotice.creationTime)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnView>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/events"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300 inline-block"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
