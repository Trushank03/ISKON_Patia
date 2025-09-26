export default function ConnectSection() {
  return (
    <section className="bg-white py-16 px-6 text-center rounded-2xl max-w-7xl mx-auto my-12">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
        CONNECT WITH US
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
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-8 md:overflow-visible">
        {/* Card 1 */}
        <div className="snap-center flex-shrink-0 w-72 md:w-auto bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <img src="/icons/community.png" alt="Community" className="w-17 h-16 mb-4" />
          <h3 className="text-lg font-medium mb-4">Join our community</h3>
          <a
            href="https://forms.gle/MB5Ebu3ZG1umXirg8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition w-full"
          >
            Join Now
          </a>
        </div>

        {/* Card 2 */}
        <div className="snap-center flex-shrink-0 w-72 md:w-auto bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <img src="/icons/kids.png" alt="Kids Community" className="w-18 h-16 mb-4" />
          <h3 className="text-lg font-medium mb-4">Kids Community</h3>
          <a
            href="https://forms.gle/MB5Ebu3ZG1umXirg8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition w-full"
          >
            Join Now
          </a>
        </div>

        {/* Card 3 */}
        <div className="snap-center flex-shrink-0 w-72 md:w-auto bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <img src="/icons/house.png" alt="House Program" className="w-17 h-16 mb-4" />
          <h3 className="text-lg font-medium mb-4">House Program</h3>
          <a
            href="https://forms.gle/MB5Ebu3ZG1umXirg8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition w-full"
          >
            Join Now
          </a>
        </div>

        {/* Card 4 */}
        <div className="snap-center flex-shrink-0 w-72 md:w-auto bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <img src="/icons/youth.png" alt="ISKCON Youth Forum" className="w-14 h-14 mb-4" />
          <h3 className="text-lg font-medium mb-4">ISKCON Youth Forum</h3>
          <a
            href="https://forms.gle/MB5Ebu3ZG1umXirg8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition w-full"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}
