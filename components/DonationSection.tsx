export default function DonationSection() {
  return (
    <section
      className="py-16 px-6 bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/images/cream-watercolor-bg.png')" }}
    >
      {/* Title */}
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#B23A2E] mb-2">
        PLADGE A DONATION
      </h2>

      {/* Divider line */}
      <div className="flex justify-center mb-8">
        <img
          src="/images/heading-divider.png"
          alt="divider"
          className="w-40 md:w-52"
        />
      </div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto">
        {/* 👉 Mobile: swipe horizontally, 👉 Desktop: grid */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
          {/* Card 1 */}
          <div className="snap-center flex-shrink-0 w-72 md:w-auto shadow-md rounded-lg overflow-hidden bg-white/80">
            <img
              src="/images/temple.jpg"
              alt="Temple Services"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Temple Services</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="snap-center flex-shrink-0 w-72 md:w-auto shadow-md rounded-lg overflow-hidden bg-white/80">
            <img
              src="/images/youth.jpg"
              alt="Youth Events"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Youth Events</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="snap-center flex-shrink-0 w-72 md:w-auto shadow-md rounded-lg overflow-hidden bg-white/80">
            <img
              src="/images/kids.jpg"
              alt="Kids’ Corner"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Kids’ Corner</h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="snap-center flex-shrink-0 w-72 md:w-auto shadow-md rounded-lg overflow-hidden bg-white/80">
            <img
              src="/images/sunday.jpg"
              alt="Sunday Programs"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Sunday Programs</h3>
            </div>
          </div>

          {/* Card 5 */}
          <div className="snap-center flex-shrink-0 w-72 md:w-auto shadow-md rounded-lg overflow-hidden bg-white/80">
            <img
              src="/images/projects.jpg"
              alt="Our Projects"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Our Projects</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
