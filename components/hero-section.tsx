import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full h-[450px] md:h-[600px] lg:h-[700px]">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/iskcon-temple-kharghar.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <Image
            src="/placeholder.svg?key=qol9y"
            alt="Aerial view of ISKCON Temple Kharghar"
            fill
            className="object-cover"
          />
        </video>
      </div>

      {/* Overlay with text and buttons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 bg-black/20">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 max-w-4xl animate-float">
          "Experience the Divine Bliss of
          <br className="hidden sm:block" />
          Bhakti in Nature's Lap"
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-8">
          <Link
            href="/donate"
            className="bg-primary hover:bg-primary/90 text-white font-medium px-6 sm:px-10 py-2 sm:py-4 rounded-md text-base sm:text-xl transition-transform duration-300 hover:scale-105"
          >
            Donate Now
          </Link>
          <Link
            href="/vision"
            className="bg-white hover:bg-gray-100 text-green-600 font-medium px-6 sm:px-10 py-2 sm:py-4 rounded-md text-base sm:text-xl border border-green-600 transition-transform duration-300 hover:scale-105"
          >
            Explore The Vision
          </Link>
        </div>
      </div>
    </section>
  )
}
