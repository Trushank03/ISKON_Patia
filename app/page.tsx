// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Header } from "@/components/header"
// import { HeroSection } from "@/components/hero-section"
// import { Footer } from "@/components/footer"
// import { Carousel } from "@/components/carousel"
// import { AnimateOnView } from "@/components/animate-on-view"

// export default function Home() {
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     // Initial check
//     checkIfMobile()

//     // Add event listener
//     window.addEventListener("resize", checkIfMobile)

//     // Clean up
//     return () => window.removeEventListener("resize", checkIfMobile)
//   }, [])

//   const missionVisionItems = [
//     {
//       title: "Revival of Sanatana Dharma",
//       image: "/images/revival-sanatana-dharma.png",
//     },
//     {
//       title: "Spiritual Knowledge Centre",
//       image: "/images/spiritual-knowledge-centre.png",
//     },
//     {
//       title: "Eco-living & Bhakti Lifestyle",
//       image: "/images/bhakti-lifestyle.png",
//     },
//   ]

//   const exploreCentreItems = [
//     {
//       title: "ISKCON Temple & Altars",
//       image: "/images/iskcon-temple.png",
//     },
//     {
//       title: "Satwik Restaurant",
//       subtitle: "(Prasadam Bhojanaalaya)",
//       image: "/images/govindas-restaurant.png",
//     },
//     {
//       title: "Vedic Knowledge Centre",
//       image: "/images/vedic-knowledge-centre.png",
//     },
//     {
//       title: "Premium Cottages",
//       subtitle: "(Investment Opportunity)",
//       image: "/images/premium-cottages.png",
//     },
//   ]

//   const testimonialItems = [1, 2, 3].map((index) => (
//     <div key={index} className="relative group cursor-pointer px-1 sm:px-2 card-hover-effect">
//       <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
//         <Image
//           src="/spiritual-testimonial-thumbnail.png"
//           alt={`Devotee testimonial ${index}`}
//           width={300}
//           height={400}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-10 h-10 sm:w-14 sm:h-14 bg-red-600 rounded-lg flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="white"
//             stroke="none"
//             className="sm:w-[30px] sm:h-[30px]"
//           >
//             <path d="M8 5v14l11-7z" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   ))

//   return (
//     <main className="min-h-screen bg-white">
//       <Header />
//       <HeroSection />

//       {/* Mission & Vision Section */}
//       <section className="py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-8 max-w-7xl mx-auto">
//         <AnimateOnView animation="fade-up">
//           <div className="text-center mb-4 sm:mb-8">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">Our Mission & Vision</h2>
//             <div className="flex justify-center">
//               <div className="w-full" style={{ maxWidth: "22rem" }}>
//                 <Image
//                   src="/images/heading-divider.png"
//                   alt="Decorative divider"
//                   width={350}
//                   height={10}
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </AnimateOnView>

//         <AnimateOnView animation="fade-in" delay={200}>
//           <p className="text-center max-w-4xl mx-auto mb-6 sm:mb-12 text-gray-700 text-sm sm:text-base md:text-lg">
//             In the tranquil groves of Vrindavan, Lord Krishna tended to His cows, spreading love, wisdom, and harmony
//             through every step. Inspired by this eternal spirit, our Eco Retreat Centre is a sacred haven where
//             devotion, knowledge, and a pure way of living blossom together — nurturing generations to come in the
//             timeless light of Sanātana Dharma.
//           </p>
//         </AnimateOnView>

//         {isMobile ? (
//           <div className="mb-6 sm:mb-12">
//             <Carousel compact={true}>
//               {missionVisionItems.map((item, index) => (
//                 <div key={index} className="flex flex-col items-center px-2 sm:px-4">
//                   <div className="w-full max-w-[180px] sm:max-w-xs mb-2 sm:mb-4 card-hover-effect">
//                     <Image
//                       src={item.image || "/placeholder.svg"}
//                       alt={item.title}
//                       width={350}
//                       height={438}
//                       className="w-full h-auto"
//                     />
//                   </div>
//                   <h3 className="text-sm sm:text-base md:text-xl font-semibold text-center">{item.title}</h3>
//                 </div>
//               ))}
//             </Carousel>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-4 sm:mt-8 mb-6 sm:mb-12">
//             {missionVisionItems.map((item, index) => (
//               <AnimateOnView key={index} animation="fade-up" delay={index * 150}>
//                 <div className="flex flex-col items-center">
//                   <div className="w-full max-w-xs md:max-w-sm mb-4 card-hover-effect">
//                     <Image
//                       src={item.image || "/placeholder.svg"}
//                       alt={item.title}
//                       width={350}
//                       height={438}
//                       className="w-full h-auto"
//                     />
//                   </div>
//                   <h3 className="text-xl font-semibold text-center">{item.title}</h3>
//                 </div>
//               </AnimateOnView>
//             ))}
//           </div>
//         )}

//         <AnimateOnView animation="fade-up" delay={300}>
//           <div className="text-center">
//             <Link
//               href="/"
//               className="bg-primary hover:bg-primary/90 text-white font-medium px-4 sm:px-8 py-2 sm:py-3 rounded-md inline-block text-sm sm:text-base md:text-lg transition-transform duration-300 hover:scale-105"
//             >
//               Know About Our Purpose
//             </Link>
//           </div>
//         </AnimateOnView>
//       </section>

//       {/* Explore the Centre */}
//       <section className="py-6 sm:py-8 md:py-12 relative w-full">
//         <div className="absolute inset-0 w-full h-full">
//           <Image
//             src="/images/cream-watercolor-bg.png"
//             alt="Cream watercolor background"
//             fill
//             className="object-cover"
//           />
//         </div>
//         {/* White overlay to make background lighter */}
//         <div className="absolute inset-0 w-full h-full bg-white/20 z-[1]"></div>
//         <div className="relative z-10 px-3 sm:px-4 md:px-8">
//           <AnimateOnView animation="fade-up">
//             <div className="text-center mb-4 sm:mb-8">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">Explore the Centre</h2>
//               <div className="flex justify-center">
//                 <div className="w-full" style={{ maxWidth: "22rem" }}>
//                   <Image
//                     src="/images/heading-divider.png"
//                     alt="Decorative divider"
//                     width={350}
//                     height={10}
//                     className="w-full h-auto"
//                   />
//                 </div>
//               </div>
//             </div>
//           </AnimateOnView>

//           {isMobile ? (
//             <div className="max-w-[250px] mx-auto mb-6 sm:mb-8">
//               <Carousel compact={true}>
//                 {exploreCentreItems.map((item, index) => (
//                   <div key={index} className="flex flex-col items-center px-2 sm:px-4">
//                     <div
//                       className="rounded-xl sm:rounded-2xl overflow-hidden shadow-md w-full card-hover-effect"
//                       style={{ maxWidth: "200px" }}
//                     >
//                       <div className="aspect-[3/5] relative group">
//                         <Image
//                           src={item.image || "/placeholder.svg"}
//                           alt={item.title}
//                           fill
//                           className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-start justify-end p-3">
//                           <h3 className="text-sm font-semibold text-white">{item.title}</h3>
//                           {item.subtitle && <p className="text-xs text-amber-100">{item.subtitle}</p>}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Carousel>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto px-2 sm:px-4">
//               {exploreCentreItems.map((item, index) => (
//                 <AnimateOnView key={index} animation="fade-up" delay={index * 100}>
//                   <div className="flex flex-col items-center">
//                     <div
//                       className="rounded-2xl overflow-hidden shadow-md w-full card-hover-effect"
//                       style={{ maxWidth: "260px" }}
//                     >
//                       <div className="aspect-[3/5] relative group">
//                         <Image
//                           src={item.image || "/placeholder.svg"}
//                           alt={item.title}
//                           fill
//                           className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-start justify-end p-4">
//                           <h3 className="text-base sm:text-lg font-semibold text-white">{item.title}</h3>
//                           {item.subtitle && <p className="text-xs sm:text-sm text-amber-100">{item.subtitle}</p>}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </AnimateOnView>
//               ))}
//             </div>
//           )}

//           <AnimateOnView animation="fade-up" delay={300}>
//             <div className="text-center mt-6 sm:mt-10">
//               <Link
//                 href="/facilities"
//                 className="bg-primary hover:bg-primary/90 text-white font-medium px-5 sm:px-10 py-2 sm:py-3 rounded-md inline-block text-sm sm:text-base transition-transform duration-300 hover:scale-105"
//               >
//                 View All Facilities
//               </Link>
//             </div>
//           </AnimateOnView>
//         </div>
//       </section>

//       {/* Support the Mission */}
//       <section className="py-6 sm:py-8 md:py-12 w-full" style={{ backgroundColor: "#fffcf4" }}>
//         <div className="px-3 sm:px-4 md:px-8 max-w-7xl mx-auto">
//           <AnimateOnView animation="fade-up">
//             <div className="text-center mb-4 sm:mb-8">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">Support the Mission</h2>
//               <div className="flex justify-center">
//                 <div className="w-full" style={{ maxWidth: "22rem" }}>
//                   <Image
//                     src="/images/heading-divider.png"
//                     alt="Decorative divider"
//                     width={350}
//                     height={10}
//                     className="w-full h-auto"
//                   />
//                 </div>
//               </div>
//             </div>
//           </AnimateOnView>

//           <AnimateOnView animation="zoom-in" delay={200}>
//             <div className="max-w-4xl mx-auto mb-4 sm:mb-8">
//               <Image
//                 src="/images/prabhupada-quote.png"
//                 alt="Srila Prabhupada with temple illustration and quote"
//                 width={900}
//                 height={300}
//                 className="w-full h-auto rounded-lg shadow-md animate-pulse-soft"
//               />
//             </div>
//           </AnimateOnView>

//           <AnimateOnView animation="fade-in" delay={300}>
//             <div className="text-center mb-6 sm:mb-10">
//               <p className="text-primary text-base sm:text-xl md:text-2xl font-medium">
//                 Support the Revival of Sanatana Dharma – Your Contribution Builds the Temple of Tomorrow.
//               </p>
//             </div>
//           </AnimateOnView>

//           <AnimateOnView animation="fade-up" delay={400}>
//             <div className="flex justify-center">
//               <Link
//                 href="/donate"
//                 className="bg-primary hover:bg-primary/90 text-white font-medium px-8 sm:px-16 py-2 sm:py-4 rounded-md text-sm sm:text-base md:text-xl transition-transform duration-300 hover:scale-105"
//               >
//                 Donate Now
//               </Link>
//             </div>
//           </AnimateOnView>
//         </div>
//       </section>

//       {/* Own a Space Section */}
//       <section className="py-6 sm:py-8 md:py-12 w-full" style={{ backgroundColor: "#fffcf4" }}>
//         <div className="px-3 sm:px-4 md:px-8 max-w-7xl mx-auto">
//           <AnimateOnView animation="fade-up">
//             <div className="text-center mb-4 sm:mb-8">
//               <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-2">
//                 Own a Space of Peace. Invest in Divine Living
//               </h2>
//               <div className="flex justify-center">
//                 <div className="w-full" style={{ maxWidth: "22rem" }}>
//                   <Image
//                     src="/images/heading-divider.png"
//                     alt="Decorative divider"
//                     width={350}
//                     height={10}
//                     className="w-full h-auto"
//                   />
//                 </div>
//               </div>
//             </div>
//           </AnimateOnView>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-start max-w-6xl mx-auto mt-4 sm:mt-10">
//             <AnimateOnView animation="slide-in-left" delay={200}>
//               <div className="space-y-2 sm:space-y-4 flex flex-col items-center">
//                 <div className="w-full max-w-sm sm:max-w-lg card-hover-effect">
//                   <Image
//                     src="/images/cottage-main.jpg"
//                     alt="Cottage for sale - Main view"
//                     width={520}
//                     height={350}
//                     className="w-full h-auto rounded-md"
//                   />
//                 </div>
//                 <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-sm sm:max-w-lg">
//                   {[1, 2, 3].map((index) => (
//                     <div key={index} className="w-full card-hover-effect">
//                       <Image
//                         src="/images/cottage-main.jpg"
//                         alt={`Cottage view ${index}`}
//                         width={170}
//                         height={115}
//                         className="w-full h-auto rounded-md"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </AnimateOnView>

//             <AnimateOnView animation="slide-in-right" delay={300}>
//               <div className="flex flex-col pt-2 sm:pt-4">
//                 <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">
//                   3 bedroom cottage for sale
//                 </h3>
//                 <p className="text-base sm:text-lg text-primary mb-4 sm:mb-10">Iskcon Barang, Patia, Bhubaneswar</p>

//                 <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-12">
//                   <li className="flex items-start">
//                     <span className="text-primary mr-2 sm:mr-3 text-lg sm:text-xl">•</span>
//                     <span className="text-sm sm:text-lg">Tenure: Freehold</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-primary mr-2 sm:mr-3 text-lg sm:text-xl">•</span>
//                     <span className="text-sm sm:text-lg">Eco design</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-primary mr-2 sm:mr-3 text-lg sm:text-xl">•</span>
//                     <span className="text-sm sm:text-lg">Inside Temple campus</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-primary mr-2 sm:mr-3 text-lg sm:text-xl">•</span>
//                     <span className="text-sm sm:text-lg">Buyers fees apply</span>
//                   </li>
//                 </ul>

//                 <div className="mb-4 sm:mb-8">
//                   <h4 className="text-base sm:text-xl font-bold text-primary mb-1 sm:mb-2">Call/WhatsApp us</h4>
//                   <p className="text-xl sm:text-3xl font-bold text-primary">+91-9000000000</p>
//                 </div>

//                 <Link
//                   href="#"
//                   className="bg-primary hover:bg-primary/90 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-md text-center text-sm sm:text-lg w-full transition-transform duration-300 hover:scale-105"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </AnimateOnView>
//           </div>
//         </div>
//       </section>

//       {/* Stories Section */}
//       <section className="py-6 sm:py-8 md:py-12 w-full" style={{ backgroundColor: "#fffcf4" }}>
//         <div className="px-3 sm:px-4 md:px-8 max-w-7xl mx-auto">
//           <AnimateOnView animation="fade-up">
//             <div className="text-center mb-4 sm:mb-8">
//               <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-2">
//                 Stories Behind Every Contributions
//               </h2>
//               <div className="flex justify-center">
//                 <div className="w-full" style={{ maxWidth: "22rem" }}>
//                   <Image
//                     src="/images/heading-divider.png"
//                     alt="Decorative divider"
//                     width={350}
//                     height={10}
//                     className="w-full h-auto"
//                   />
//                 </div>
//               </div>
//             </div>
//           </AnimateOnView>

//           {isMobile ? (
//             <div className="max-w-[220px] mx-auto mb-6 sm:mb-8">
//               <Carousel compact={true}>{testimonialItems}</Carousel>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
//               {[0, 1, 2].map((index) => (
//                 <AnimateOnView key={index} animation="fade-up" delay={index * 150}>
//                   {testimonialItems[index]}
//                 </AnimateOnView>
//               ))}
//             </div>
//           )}

//           <AnimateOnView animation="fade-up" delay={300}>
//             <div className="flex justify-center mt-6 sm:mt-10">
//               <Link
//                 href="/donate"
//                 className="bg-primary hover:bg-primary/90 text-white font-medium px-8 sm:px-16 py-2 sm:py-3 rounded-md text-sm sm:text-base md:text-xl transition-transform duration-300 hover:scale-105"
//               >
//                 Donate Now
//               </Link>
//             </div>
//           </AnimateOnView>
//         </div>
//       </section>

//       {/* Events Section */}
//       <section className="py-6 sm:py-8 md:py-12 relative w-full">
//         <div className="absolute inset-0 w-full h-full">
//           <Image
//             src="/images/cream-watercolor-bg.png"
//             alt="Cream watercolor background"
//             fill
//             className="object-cover"
//           />
//         </div>
//         {/* White overlay to make background lighter */}
//         <div className="absolute inset-0 w-full h-full bg-white/20 z-[1]"></div>
//         <div className="relative z-10 px-3 sm:px-4 md:px-8">
//           <AnimateOnView animation="fade-up">
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-primary mb-2">
//               Upcoming Yatras, Festivals, Weekly Kirtans
//             </h2>
//             <div className="flex justify-center mb-4 sm:mb-8">
//               <div className="w-full" style={{ maxWidth: "22rem" }}>
//                 <Image
//                   src="/images/heading-divider.png"
//                   alt="Decorative divider"
//                   width={350}
//                   height={10}
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
//           </AnimateOnView>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
//             {[
//               {
//                 title: "Kartika Deepotsava 2024",
//                 subtitle: "17 Oct - 15 Nov 2024",
//                 image: "/images/kartika-deepotsava.png",
//               },
//               {
//                 title: "Deep Daan in Kartika Month",
//                 subtitle: "Special Lamp Offering Ceremony",
//                 image: "/images/deep-daan-kartika.png",
//               },
//             ].map((item, index) => (
//               <AnimateOnView key={index} animation="slide-in-right" delay={index * 150}>
//                 <div className="relative overflow-hidden rounded-lg group card-hover-effect">
//                   <Image
//                     src={item.image || "/placeholder.svg"}
//                     alt={item.title}
//                     width={600}
//                     height={300}
//                     className="w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-start justify-end p-3 sm:p-6">
//                     <h3 className="text-base sm:text-xl font-semibold text-white">{item.title}</h3>
//                     {item.subtitle && <p className="text-xs sm:text-sm text-amber-100">{item.subtitle}</p>}
//                   </div>
//                 </div>
//               </AnimateOnView>
//             ))}
//           </div>

//           <AnimateOnView animation="fade-up" delay={300}>
//             <div className="text-center mt-4 sm:mt-8">
//               <Link
//                 href="/events"
//                 className="bg-primary hover:bg-primary/90 text-white font-medium px-4 sm:px-6 py-1.5 sm:py-2 rounded-md inline-block text-sm sm:text-base transition-transform duration-300 hover:scale-105"
//               >
//                 View All Events
//               </Link>
//             </div>
//           </AnimateOnView>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-6 sm:py-8 md:py-12 w-full bg-amber-50/70" style={{ backgroundColor: "#fffcf4" }}>
//         <AnimateOnView animation="fade-up">
//           <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch max-w-7xl mx-auto px-3 sm:px-4 md:px-8">
//             <div className="md:w-3/5 p-6 md:p-8">
//               <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
//                 Be a Pillar of Devotion –<br />
//                 Build the Legacy of Bhakti
//               </h2>

//               <p className="text-gray-800 text-sm md:text-base mb-4">
//                 Join us in creating a sacred space where future generations can discover the timeless wisdom of Sanātana
//                 Dharma.
//               </p>

//               <p className="text-gray-800 text-sm md:text-base mb-6">
//                 Every contribution, big or small, brings us one step closer to manifesting this divine vision.
//               </p>

//               <h3 className="text-gray-900 font-bold text-lg md:text-xl mb-2">Donate Today. Be Blessed Forever.</h3>

//               <p className="text-gray-700 text-xs md:text-sm mb-6">
//                 80G Tax Benefits | Secure Payment | Eternal Seva Opportunity
//               </p>

//               <div className="flex items-center">
//                 <Link
//                   href="/donate"
//                   className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md text-sm md:text-base transition-transform duration-300 hover:scale-105"
//                 >
//                   Donate Now
//                 </Link>
//                 <span className="ml-4 text-gray-800 text-sm md:text-base">– Your faith builds this temple.</span>
//               </div>
//             </div>

//             <div className="md:w-2/5 relative flex items-end">
//               <div className="h-auto">
//                 <Image
//                   src="/images/krishna-flute-cows.png"
//                   alt="Lord Krishna playing flute with cows"
//                   width={400}
//                   height={320}
//                   className="w-full h-auto object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </AnimateOnView>
//       </section>

//       {/* Newsletter */}
//       <section className="py-8 sm:py-12 md:py-16 relative w-full">
//         <div className="absolute inset-0 w-full h-full">
//           <Image
//             src="/images/cream-watercolor-bg.png"
//             alt="Cream watercolor background"
//             fill
//             className="object-cover"
//           />
//         </div>
//         {/* White overlay to make background lighter */}
//         <div className="absolute inset-0 w-full h-full bg-white/20 z-[1]"></div>
//         <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
//           <AnimateOnView animation="fade-up">
//             <div className="text-center">
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">
//                 Stay Connected to Bhakti, Wisdom & Service
//               </h2>

//               <p className="text-primary text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
//                 Be the first to receive spiritual insights, temple updates, retreat invitations, volunteer
//                 opportunities, and exclusive stories from the ISKCON Eco Retreat Centre.
//               </p>

//               <p className="text-primary text-sm sm:text-base md:text-lg font-medium mb-6 sm:mb-8">
//                 Let divine inspiration flow into your inbox — once a week, always meaningful.
//               </p>

//               <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm max-w-3xl mx-auto">
//                 <h3 className="text-primary text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
//                   Subscribe to Our Bhakti Bulletin
//                 </h3>

//                 <form className="flex flex-col gap-4">
//                   <input
//                     type="email"
//                     placeholder="Enter your email & stay rooted in Sanātana Dharma"
//                     className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base"
//                     required
//                   />

//                   <button
//                     type="submit"
//                     className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-3 rounded-md text-sm sm:text-base transition-transform duration-300 hover:scale-105"
//                   >
//                     Subscribe Now
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </AnimateOnView>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }



"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { Carousel } from "@/components/carousel"
import { AnimateOnView } from "@/components/animate-on-view"
import { fetchEvents } from "@/lib/api"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [events, setEvents] = useState<any[]>([])


  useEffect(() => {
    const loadEvents = async () => {
      const { data, error } = await fetchEvents()
      if (data?.results) {
        setEvents(data.results)
      }
    }

    loadEvents()
  }, [])

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const missionVisionItems = [
    {
      title: "Revival of Sanatana Dharma",
      image: "/images/revival-sanatana-dharma.png",
    },
    {
      title: "Spiritual Knowledge Centre",
      image: "/images/spiritual-knowledge-centre.png",
    },
    {
      title: "Eco-living & Bhakti Lifestyle",
      image: "/images/bhakti-lifestyle.png",
    },
  ]

  const exploreCentreItems = [
    {
      title: "ISKCON Temple & Altars",
      image: "/images/iskcon-temple.png",
    },
    {
      title: "Satwik Restaurant",
      subtitle: "(Prasadam Bhojanaalaya)",
      image: "/images/govindas-restaurant.png",
    },
    {
      title: "Vedic Knowledge Centre",
      image: "/images/vedic-knowledge-centre.png",
    },
    {
      title: "Premium Cottages",
      subtitle: "(Investment Opportunity)",
      image: "/images/premium-cottages.png",
    },
  ]

  const testimonialItems = [1, 2, 3].map((index) => (
    <div key={index} className="relative group cursor-pointer px-1 sm:px-2 card-hover-effect">
      <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
        <Image
          src="/spiritual-testimonial-thumbnail.png"
          alt={`Devotee testimonial ${index}`}
          width={300}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-10 h-10 sm:w-14 sm:h-14 bg-red-600 rounded-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
            stroke="none"
            className="sm:w-[30px] sm:h-[30px]"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  ))

  return (
    <main className="min-h-screen bg-white overflow-x-hidden w-full">
      <Header />
      <HeroSection />

      {/* Mission & Vision Section */}
      <section className="py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-8 max-w-7xl mx-auto w-full">
        <AnimateOnView animation="fade-up">
          <div className="text-center mb-4 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">Our Mission & Vision</h2>
            <div className="flex justify-center">
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
          </div>
        </AnimateOnView>

        <AnimateOnView animation="fade-in" delay={200}>
          <p className="text-center max-w-4xl mx-auto mb-6 sm:mb-12 text-gray-700 text-sm sm:text-base md:text-lg">
            In the tranquil groves of Vrindavan, Lord Krishna tended to His cows, spreading love, wisdom, and harmony
            through every step. Inspired by this eternal spirit, our Eco Retreat Centre is a sacred haven where
            devotion, knowledge, and a pure way of living blossom together — nurturing generations to come in the
            timeless light of Sanātana Dharma.
          </p>
        </AnimateOnView>

        {isMobile ? (
          <div className="mb-6 sm:mb-12">
            <Carousel compact={true}>
              {missionVisionItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center px-2 sm:px-4">
                  <div className="w-full max-w-[180px] sm:max-w-xs mb-2 sm:mb-4 card-hover-effect">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={350}
                      height={438}
                      className="w-full h-auto"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold text-center">{item.title}</h3>
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-4 sm:mt-8 mb-6 sm:mb-12">
            {missionVisionItems.map((item, index) => (
              <AnimateOnView key={index} animation="fade-up" delay={index * 150}>
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-xs md:max-w-sm mb-4 card-hover-effect">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={350}
                      height={438}
                      className="w-full h-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                </div>
              </AnimateOnView>
            ))}
          </div>
        )}

        <AnimateOnView animation="fade-up" delay={300}>
          <div className="text-center">
            <Link
              href="/about"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-4 sm:px-8 py-2 sm:py-3 rounded-md inline-block text-sm sm:text-base md:text-lg transition-transform duration-300 hover:scale-105"
            >
              Know About Our Purpose
            </Link>
          </div>
        </AnimateOnView>
      </section>

      {/* Explore the Centre */}
      <section className="py-6 sm:py-8 md:py-12 relative w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/cream-watercolor-bg.png"
            alt="Cream watercolor background"
            fill
            className="object-cover"
          />
        </div>
        {/* White overlay to make background lighter */}
        <div className="absolute inset-0 w-full h-full bg-white/20 z-[1]"></div>
        <div className="relative z-10 px-3 sm:px-4 md:px-8 w-full">
          <AnimateOnView animation="fade-up">
            <div className="text-center mb-4 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">Explore the Centre</h2>
              <div className="flex justify-center">
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
            </div>
          </AnimateOnView>

          {isMobile ? (
            <div className="max-w-[250px] mx-auto mb-6 sm:mb-8">
              <Carousel compact={true}>
                {exploreCentreItems.map((item, index) => (
                  <div key={index} className="flex flex-col items-center px-2 sm:px-4">
                    <div
                      className="rounded-xl sm:rounded-2xl overflow-hidden shadow-md w-full card-hover-effect"
                      style={{ maxWidth: "200px" }}
                    >
                      <div className="aspect-[3/5] relative group">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-start justify-end p-3">
                          <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                          {item.subtitle && <p className="text-xs text-amber-100">{item.subtitle}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto px-2 sm:px-4">
              {exploreCentreItems.map((item, index) => (
                <AnimateOnView key={index} animation="fade-up" delay={index * 100}>
                  <div className="flex flex-col items-center">
                    <div
                      className="rounded-2xl overflow-hidden shadow-md w-full card-hover-effect"
                      style={{ maxWidth: "260px" }}
                    >
                      <div className="aspect-[3/5] relative group">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-start justify-end p-4">
                          <h3 className="text-base sm:text-lg font-semibold text-white">{item.title}</h3>
                          {item.subtitle && <p className="text-xs sm:text-sm text-amber-100">{item.subtitle}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          )}

          <AnimateOnView animation="fade-up" delay={300}>
            <div className="text-center mt-6 sm:mt-10">
              <Link
                href="/facilities"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-5 sm:px-10 py-2 sm:py-3 rounded-md inline-block text-sm sm:text-base transition-transform duration-300 hover:scale-105"
              >
                View All Facilities
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Support the Mission */}
      <section className="py-6 sm:py-8 md:py-12 w-full" style={{ backgroundColor: "#fffcf4" }}>
        <div className="px-3 sm:px-4 md:px-8 max-w-7xl mx-auto w-full">
          <AnimateOnView animation="fade-up">
            <div className="text-center mb-4 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">Support the Mission</h2>
              <div className="flex justify-center">
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
            </div>
          </AnimateOnView>

          <AnimateOnView animation="zoom-in" delay={200}>
            <div className="max-w-4xl mx-auto mb-4 sm:mb-8">
              <Image
                src="/images/prabhupada-quote.png"
                alt="Srila Prabhupada with temple illustration and quote"
                width={900}
                height={300}
                className="w-full h-auto rounded-lg shadow-md animate-pulse-soft"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-in" delay={300}>
            <div className="text-center mb-6 sm:mb-10">
              <p className="text-primary text-base sm:text-xl md:text-2xl font-medium">
                Support the Revival of Sanatana Dharma – Your Contribution Builds the Temple of Tomorrow.
              </p>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-up" delay={400}>
            <div className="flex justify-center">
              <Link
                href="/donate"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 sm:px-16 py-2 sm:py-4 rounded-md text-sm sm:text-base md:text-xl transition-transform duration-300 hover:scale-105"
              >
                Donate Now
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Own a Space Section */}
      <section className="py-6 sm:py-8 md:py-12 w-full" style={{ backgroundColor: "#fffcf4" }}>
        <div className="px-3 sm:px-4 md:px-8 max-w-7xl mx-auto w-full">
          <AnimateOnView animation="fade-up">
            <div className="text-center mb-4 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-2">
                Own a Space of Peace. Invest in Divine Living
              </h2>
              <div className="flex justify-center">
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
            </div>
          </AnimateOnView>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-start max-w-6xl mx-auto mt-4 sm:mt-10">
            <AnimateOnView animation="slide-in-left" delay={200}>
              <div className="space-y-2 sm:space-y-4 flex flex-col items-center">
                <div className="w-full max-w-sm sm:max-w-lg card-hover-effect">
                  <Image
                    src="/images/cottage-main.jpg"
                    alt="Cottage for sale - Main view"
                    width={520}
                    height={350}
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-sm sm:max-w-lg">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="w-full card-hover-effect">
                      <Image
                        src="/images/cottage-main.jpg"
                        alt={`Cottage view ${index}`}
                        width={170}
                        height={115}
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView animation="slide-in-right" delay={300}>
              <div className="flex flex-col pt-2 sm:pt-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">
                  3 bedroom cottage for sale
                </h3>
                <p className="text-base sm:text-lg text-primary mb-4 sm:mb-10">Iskcon Barang, Patia, Bhubaneswar</p>

                <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-12">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 sm:mr-3 text-lg sm:text-xl">•</span>
                    <span className="text-sm sm:text-lg">Tenure: Freehold</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 sm:mr-3 text-lg sm:text-xl">•</span>
                    <span className="text-sm sm:text-lg">Eco design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 sm:mr-3 text-lg sm:text-xl">•</span>
                    <span className="text-sm sm:text-lg">Inside Temple campus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 sm:mr-3 text-lg sm:text-xl">•</span>
                    <span className="text-sm sm:text-lg">Buyers fees apply</span>
                  </li>
                </ul>

                <div className="mb-4 sm:mb-8">
                  <h4 className="text-base sm:text-xl font-bold text-primary mb-1 sm:mb-2">Call/WhatsApp us</h4>
                  <p className="text-xl sm:text-3xl font-bold text-primary">+91-9000000000</p>
                </div>

                <Link
                  href="/cottages"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-md text-center text-sm sm:text-lg w-full transition-transform duration-300 hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-6 sm:py-8 md:py-12 w-full" style={{ backgroundColor: "#fffcf4" }}>
        <div className="px-3 sm:px-4 md:px-8 max-w-7xl mx-auto w-full">
          <AnimateOnView animation="fade-up">
            <div className="text-center mb-4 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-2">
                Stories Behind Every Contributions
              </h2>
              <div className="flex justify-center">
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
            </div>
          </AnimateOnView>

          {isMobile ? (
            <div className="max-w-[220px] mx-auto mb-6 sm:mb-8">
              <Carousel compact={true}>{testimonialItems}</Carousel>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {[0, 1, 2].map((index) => (
                <AnimateOnView key={index} animation="fade-up" delay={index * 150}>
                  {testimonialItems[index]}
                </AnimateOnView>
              ))}
            </div>
          )}

          <AnimateOnView animation="fade-up" delay={300}>
            <div className="flex justify-center mt-6 sm:mt-10">
              <Link
                href="/donate"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 sm:px-16 py-2 sm:py-3 rounded-md text-sm sm:text-base md:text-xl transition-transform duration-300 hover:scale-105"
              >
                Donate Now
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-6 sm:py-8 md:py-12 relative w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/cream-watercolor-bg.png"
            alt="Cream watercolor background"
            fill
            className="object-cover"
          />
        </div>
        {/* White overlay to make background lighter */}
        <div className="absolute inset-0 w-full h-full bg-white/20 z-[1]"></div>
        <div className="relative z-10 px-3 sm:px-4 md:px-8 w-full">
          <AnimateOnView animation="fade-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-primary mb-2">
              Upcoming Yatras, Festivals, Weekly Kirtans
            </h2>
            <div className="flex justify-center mb-4 sm:mb-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {events.slice(0, 2).map((item, index) => (
              <AnimateOnView key={index} animation="slide-in-right" delay={index * 150}>
                <div className="relative overflow-hidden rounded-lg group card-hover-effect">
                  <Image
                    src={item.noticefile || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={300}
                    className="w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-start justify-end p-3 sm:p-6">
                    <h3 className="text-base sm:text-xl font-semibold text-white">{item.title}</h3>
                    {item.subtitle && <p className="text-xs sm:text-sm text-amber-100">{item.subtitle}</p>}
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>

          <AnimateOnView animation="fade-up" delay={300}>
            <div className="text-center mt-4 sm:mt-8">
              <Link
                href="/events"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-4 sm:px-6 py-1.5 sm:py-2 rounded-md inline-block text-sm sm:text-base transition-transform duration-300 hover:scale-105"
              >
                View All Events
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-6 sm:py-8 md:py-12 w-full bg-amber-50/70" style={{ backgroundColor: "#fffcf4" }}>
        <AnimateOnView animation="fade-up">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch max-w-7xl mx-auto px-3 sm:px-4 md:px-8">
            <div className="md:w-3/5 p-6 md:p-8">
              <h2 className="text-primary text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                Be a Pillar of Devotion –<br />
                Build the Legacy of Bhakti
              </h2>

              <p className="text-gray-800 text-sm md:text-base mb-4">
                Join us in creating a sacred space where future generations can discover the timeless wisdom of Sanātana
                Dharma.
              </p>

              <p className="text-gray-800 text-sm md:text-base mb-6">
                Every contribution, big or small, brings us one step closer to manifesting this divine vision.
              </p>

              <h3 className="text-gray-900 font-bold text-lg md:text-xl mb-2">Donate Today. Be Blessed Forever.</h3>

              <p className="text-gray-700 text-xs md:text-sm mb-6">
                80G Tax Benefits | Secure Payment | Eternal Seva Opportunity
              </p>

              <div className="flex items-center">
                <Link
                  href="/donate"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md text-sm md:text-base transition-transform duration-300 hover:scale-105"
                >
                  Donate Now
                </Link>
                <span className="ml-4 text-gray-800 text-sm md:text-base">– Your faith builds this temple.</span>
              </div>
            </div>

            <div className="md:w-2/5 relative flex items-end">
              <div className="h-auto">
                <Image
                  src="/images/krishna-flute-cows.png"
                  alt="Lord Krishna playing flute with cows"
                  width={400}
                  height={320}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </AnimateOnView>
      </section>

      {/* Newsletter */}
      <section className="py-8 sm:py-12 md:py-16 relative w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/cream-watercolor-bg.png"
            alt="Cream watercolor background"
            fill
            className="object-cover"
          />
        </div>
        {/* White overlay to make background lighter */}
        <div className="absolute inset-0 w-full h-full bg-white/20 z-[1]"></div>
        <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
          <AnimateOnView animation="fade-up">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">
                Stay Connected to Bhakti, Wisdom & Service
              </h2>

              <p className="text-primary text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                Be the first to receive spiritual insights, temple updates, retreat invitations, volunteer
                opportunities, and exclusive stories from the ISKCON Eco Retreat Centre.
              </p>

              <p className="text-primary text-sm sm:text-base md:text-lg font-medium mb-6 sm:mb-8">
                Let divine inspiration flow into your inbox — once a week, always meaningful.
              </p>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm max-w-3xl mx-auto">
                <h3 className="text-primary text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                  Subscribe to Our Bhakti Bulletin
                </h3>

                <form className="flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email & stay rooted in Sanātana Dharma"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base"
                    required
                  />

                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-3 rounded-md text-sm sm:text-base transition-transform duration-300 hover:scale-105"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      <Footer />
    </main>
  )
}
