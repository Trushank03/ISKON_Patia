// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { useRef } from "react"
// import { motion } from "framer-motion"

// export function Footer() {
//   const audioRef = useRef<HTMLAudioElement>(null)

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   }

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const pulseAnimation = {
//     scale: [1, 1.03, 1],
//     transition: {
//       duration: 2,
//       repeat: Number.POSITIVE_INFINITY,
//       repeatType: "reverse" as const,
//     },
//   }

//   const playMantra = () => {
//     if (audioRef.current) {
//       audioRef.current.play()
//     }
//   }

//   return (
//     <footer className="bg-white border-t border-gray-200 pt-10 pb-6 overflow-hidden">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Logo and Maha-mantra */}
//         <motion.div
//           className="flex flex-col items-center mb-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={fadeIn}
//         >
//           <motion.div animate={pulseAnimation}>
//             <Image
//               // src="/images/iskcon-baranga-patia-logo.png"
//               src="/images/output-onlinepngtools.png"

//               alt="ISKCON Baranga-Patia Logo"
//               width={180}
//               height={120}
//               className="h-auto mb-4"
//             />
//           </motion.div>
//           <motion.p
//             className="text-center text-gray-700 italic text-sm max-w-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             "Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare / Hare Rama, Hare Rama, Rama Rama, Hare Hare."
//           </motion.p>
//         </motion.div>

//         {/* Main Footer Content - 3 columns */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
//           variants={staggerChildren}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {/* Column 1: Quick Links */}
//           <motion.div className="flex flex-col items-center md:items-start" variants={fadeIn}>
//             <h3 className="text-primary font-semibold mb-4 text-center md:text-left w-full">
//               Explore Devotional Opportunities
//             </h3>
//             <ul className="space-y-2 text-center md:text-left w-full">
//               {[
//                 { name: "About ISKCON Baranga-Patia", href: "/about" },
//                 { name: "Srila Prabhupada's Teachings", href: "/teachings" },
//                 { name: "Bhakti Yoga Education", href: "/bhakti-yoga" },
//                 { name: "Volunteer / Seva Opportunities", href: "/seva" },
//                 { name: "Make a Donation", href: "/donate" },
//                 { name: "Upcoming Festivals", href: "/events" },
//                 { name: "Plan Your Visit", href: "/contact" },
//               ].map((link, index) => (
//                 <motion.li
//                   key={index}
//                   variants={{
//                     hidden: { opacity: 0, x: -20 },
//                     visible: {
//                       opacity: 1,
//                       x: 0,
//                       transition: { duration: 0.3, delay: index * 0.1 },
//                     },
//                   }}
//                   whileHover={{ x: 5 }}
//                 >
//                   <Link href={link.href} className="text-gray-600 hover:text-primary transition-colors">
//                     {link.name}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Column 2: Spiritual Inspiration */}
//           <motion.div className="flex flex-col items-center md:items-start" variants={fadeIn}>
//             <h3 className="text-primary font-semibold mb-4 text-center md:text-left w-full">Spiritual Inspiration</h3>

//             {/* Quote Section */}
//             <motion.div
//               className="mb-4 text-center md:text-left w-full"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <blockquote className="text-gray-700 italic mb-1">"Chant Hare Krishna and be happy."</blockquote>
//               <p className="text-sm text-gray-600 mb-2">— His Divine Grace A. C. Bhaktivedanta Swami Prabhupada</p>
//               <Link
//                 href="https://gbc.iskcon.org/srila-prabhupada/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-primary hover:underline text-sm font-medium"
//               >
//                 Read More About Srila Prabhupada
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Column 3: Contact Information */}
//           <motion.div className="flex flex-col items-center md:items-start" variants={fadeIn}>
//             <h3 className="text-primary font-semibold mb-4 text-center md:text-left w-full">Contact Us</h3>

//             {/* Contact Information */}
//             <address className="not-italic text-sm text-gray-600 mb-4 text-center md:text-left w-full">
//               <p className="font-medium text-gray-700 mb-1">Sri Sri Radha Nilamadhava Mandir & Eco-Village</p>
//               <p>ISKCON Baranga-Patia</p>
//               <p>Baranga, Bhubaneswar, Odisha – 754005</p>
//               <motion.p className="mt-2" whileHover={{ scale: 1.05, color: "#b64334" }}>
//                 +91-7978776093
//               </motion.p>
//               <motion.p whileHover={{ scale: 1.05, color: "#b64334" }}>contact@iskconBaranga-Patia.com</motion.p>
//             </address>

//             {/* Temple Hours */}
//             <div className="mb-4 text-sm text-center md:text-left w-full">
//               <p className="font-medium text-gray-700 mb-1">Temple Hours</p>
//               <p>Daily Darshan: 4:30 AM – 8:30 PM</p>
//               <p>Mangala Aarti: 4:30 AM</p>
//               <p>Sandhya Aarti: 7:00 PM</p>
//             </div>

//             {/* Social Media */}
//             <motion.div
//               className="flex justify-center md:justify-start space-x-4 mt-4 w-full"
//               variants={staggerChildren}
//             >
//               {[
//                 {
//                   href: "https://www.facebook.com/profile.php?id=61575899008250",
//                   label: "Facebook",
//                   icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
//                 },
//                 {
//                   href: "https://www.instagram.com/iskcon_baranga_patia/",
//                   label: "Instagram",
//                   icon: (
//                     <>
//                       <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//                       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                       <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//                     </>
//                   ),
//                 },
//                 {
//                   href: "https://www.youtube.com/@ISKCONBaranga-Patia",
//                   label: "YouTube",
//                   icon: (
//                     <>
//                       <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
//                       <path d="m10 15 5-3-5-3z" />
//                     </>
//                   ),
//                 },
//               ].map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className="text-primary hover:text-primary/80"
//                   variants={fadeIn}
//                   whileHover={{
//                     scale: 1.2,
//                     rotate: [0, 5, -5, 0],
//                     transition: { duration: 0.3 },
//                   }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     {social.icon}
//                   </svg>
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Second Row: Combined Subscribe and Chant with Us + Map */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//           {/* Combined Subscribe and Chant with Us Section */}
//           <motion.div
//             className="flex flex-col items-center md:items-start bg-gradient-to-r from-amber-50 to-white p-6 rounded-lg border border-amber-100"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             {/* Updated Subscription Section */}
//             <div className="w-full mb-6">
//               <motion.h3
//                 className="text-primary font-semibold mb-3 text-center md:text-left"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 Subscribe to Our Newsletter
//               </motion.h3>

//               {/* <motion.div
//                 className="space-y-3 mb-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 <p className="text-sm text-gray-700 text-center md:text-left">
//                   Subscribe to our newsletter to receive updates about temple events, festivals, and spiritual programs.
//                 </p>
//                 <p className="text-sm text-gray-700 text-center md:text-left">
//                   Stay connected with our community and never miss an opportunity to engage in devotional service.
//                 </p>
//               </motion.div> */}

//               <motion.div
//                 className="flex"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               >
//                 <input
//                   type="email"
//                   placeholder="Your email address"
//                   className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm"
//                 />
//                 <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-md transition-colors text-sm font-medium">
//                   Subscribe
//                 </button>
//               </motion.div>
//             </div>

//             {/* Chant with Us Section */}
//             <div className="w-full border-t border-amber-100 pt-6">
//               <h3 className="text-primary font-semibold mb-4 text-center md:text-left">Chant with Us</h3>

//               <div className="bg-white p-4 rounded-lg border border-amber-200 shadow-sm">
//                 <div className="flex items-center mb-3">
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.1, 1],
//                       opacity: [0.8, 1, 0.8],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Number.POSITIVE_INFINITY,
//                       repeatType: "reverse",
//                     }}
//                     className="mr-3 text-primary"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
//                       <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
//                       <line x1="12" x2="12" y1="19" y2="23" />
//                       <line x1="8" x2="16" y1="23" y2="23" />
//                     </svg>
//                   </motion.div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Listen to Maha-mantra</h4>
//                     <p className="text-sm text-gray-600">Experience the transcendental sound vibration</p>
//                   </div>
//                 </div>

//                 <motion.button
//                   className="w-full bg-amber-100 hover:bg-amber-200 text-primary font-medium py-2.5 px-6 rounded-md transition-colors border border-amber-200 flex items-center justify-center"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={playMantra}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="mr-2"
//                   >
//                     <circle cx="12" cy="12" r="10"></circle>
//                     <polygon points="10 8 16 12 10 16 10 8"></polygon>
//                   </svg>
//                   Play Maha-mantra
//                 </motion.button>
//                 <audio ref={audioRef} src="/audio/maha-mantra.mp3" />

//                 <p className="text-xs text-gray-500 mt-2 text-center italic">
//                   Practiced for thousands of years by devotees worldwide
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Location Map */}
//           <motion.div
//             className="flex flex-col items-center md:items-start"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-primary font-semibold mb-4 text-center md:text-left w-full">Find Us</h3>
//             <div className="w-full">
//               <motion.div
//                 className="h-64 rounded-md relative overflow-hidden border border-gray-200"
//                 whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.2825767285577!2d85.82516417597425!3d20.356312586362856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909abd700711b%3A0x5317e2321ccc3b03!2sISKCON%20Patia!5e0!3m2!1sen!2sin!4v1715350402000!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen={false}
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="ISKCON Patia Location"
//                   className="w-full h-full"
//                 ></iframe>
//               </motion.div>
//               <div className="mt-2 text-center md:text-left">
//                 <motion.a
//                   href="https://www.google.com/maps/place/ISKCON+Patia/@20.3563126,85.8251642,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1909abd700711b:0x5317e2321ccc3b03!8m2!3d20.3563076!4d85.8277391!16s%2Fg%2F11rr7q0s28"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-primary text-sm hover:underline flex items-center justify-center md:justify-start"
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="mr-1"
//                   >
//                     <path d="M9 18l6-6-6-6"></path>
//                   </svg>
//                   Get Directions
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Copyright */}
//         <motion.div
//           className="border-t border-gray-200 pt-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <div className="flex flex-col items-center space-y-2">
//             <p className="text-center text-sm text-gray-600">
//               © 2025 ISKCON Baranga-Patia. All Rights Reserved. | A branch of the International Society for Krishna
//               Consciousness, founded by His Divine Grace A. C. Bhaktivedanta Swami Prabhupada.
//             </p>
//             <p className="text-center text-sm text-gray-600">
//               Crafted by{" "}
//               <a
//                 href="https://diracai.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-primary hover:underline font-medium"
//               >
//                 DiracAI Pvt. Ltd.
//               </a>
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }


"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion } from "framer-motion"

export function Footer() {
  const audioRef = useRef<HTMLAudioElement>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const pulseAnimation = {
    scale: [1, 1.03, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
    },
  }

  const playMantra = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6 overflow-hidden">
      {/* <div className="bg-primary text-white py-1 sm:py-2 px-2 sm:px-4 text-center">
        <p className="text-xs sm:text-sm md:text-lg">New Iskcon Temple going to be inaugurated on june .......</p>
      </div> */}
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Logo and Maha-mantra */}
        <motion.div
          className="flex flex-col items-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <motion.div animate={pulseAnimation}>
            <Image
              // src="/images/iskcon-baranga-patia-logo.png"
              src="/images/output-onlinepngtools.png"
              alt="ISKCON Baranga-Patia Logo"
              width={180}
              height={120}
              className="h-auto mb-4"
            />
          </motion.div>
          <motion.p
            className="text-center text-gray-700 italic text-sm max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            "Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare / Hare Rama, Hare Rama, Rama Rama, Hare Hare."
          </motion.p>
        </motion.div>

        {/* Main Footer Content - 3 columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Column 1: Quick Links */}
          <motion.div className="flex flex-col items-center md:items-start" variants={fadeIn}>
            <h3 className="text-primary font-semibold mb-4 text-center md:text-left w-full">
              Explore Devotional Opportunities
            </h3>
            <ul className="space-y-2 text-center md:text-left w-full">
              {[
                { name: "About ISKCON Baranga-Patia", href: "/about" },
                { name: "Srila Prabhupada's Teachings", href: "/teachings" },
                { name: "Bhakti Yoga Education", href: "/bhakti-yoga" },
                { name: "Volunteer / Seva Opportunities", href: "/seva" },
                { name: "Make a Donation", href: "/donate" },
                { name: "Upcoming Festivals", href: "/events" },
                { name: "Plan Your Visit", href: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3, delay: index * 0.1 },
                    },
                  }}
                  whileHover={{ x: 5 }}
                >
                  <Link href={link.href} className="text-gray-600 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Spiritual Inspiration */}
          <motion.div className="flex flex-col items-center md:items-start" variants={fadeIn}>
            <h3 className="text-primary font-semibold mb-4 text-center md:text-left w-full">Spiritual Inspiration</h3>

            {/* Quote Section */}
            <motion.div
              className="mb-4 text-center md:text-left w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-gray-700 italic mb-1">"Chant Hare Krishna and be happy."</blockquote>
              <p className="text-sm text-gray-600 mb-2">— His Divine Grace A. C. Bhaktivedanta Swami Prabhupada</p>
              <Link
                href="https://gbc.iskcon.org/srila-prabhupada/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                Read More About Srila Prabhupada
              </Link>
            </motion.div>
          </motion.div>

          {/* Column 3: Contact Information */}
          <motion.div className="flex flex-col items-center md:items-start" variants={fadeIn}>
            <h3 className="text-primary font-semibold mb-4 text-center md:text-left w-full">Contact Us</h3>

            {/* Contact Information */}
            <address className="not-italic text-sm text-gray-600 mb-4 text-center md:text-left w-full">
              <p className="font-medium text-gray-700 mb-1">Sri Sri Radha Nilamadhava Mandir & Eco-Village</p>
              <p>ISKCON Baranga-Patia</p>
              <p>Baranga, Bhubaneswar, Odisha – 754005</p>
              <motion.p className="mt-2" whileHover={{ scale: 1.05, color: "#b64334" }}>
                +91-7978776093
              </motion.p>
              <motion.p whileHover={{ scale: 1.05, color: "#b64334" }}>contact@iskconBaranga-Patia.com</motion.p>
            </address>

            {/* Temple Hours */}
            <div className="mb-4 text-sm text-center md:text-left w-full">
              <p className="font-medium text-gray-700 mb-1">Temple Hours</p>
              <p>Daily Darshan: 4:30 AM – 8:30 PM</p>
              <p>Mangala Aarti: 4:30 AM</p>
              <p>Sandhya Aarti: 7:00 PM</p>
            </div>

            {/* Social Media */}
            <motion.div
              className="flex justify-center md:justify-start space-x-4 mt-4 w-full"
              variants={staggerChildren}
            >
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61575899008250",
                  label: "Facebook",
                  icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
                },
                {
                  href: "https://www.instagram.com/iskcon_baranga_patia/",
                  label: "Instagram",
                  icon: (
                    <>
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </>
                  ),
                },
                {
                  href: "https://www.youtube.com/@ISKCONBaranga-Patia",
                  label: "YouTube",
                  icon: (
                    <>
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </>
                  ),
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-primary hover:text-primary/80"
                  variants={fadeIn}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.3 },
                  }}
                >
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
                  >
                    {social.icon}
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Second Row: Combined Subscribe and Chant with Us + Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Combined Subscribe and Chant with Us Section */}
          <motion.div
            className="flex flex-col items-center md:items-start bg-gradient-to-r from-amber-50 to-white p-6 rounded-lg border border-amber-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Updated Subscription Section */}
            <div className="w-full mb-6">
              <motion.h3
                className="text-primary font-semibold mb-3 text-center md:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Subscribe to Our Newsletter
              </motion.h3>

              <motion.div
                className="space-y-3 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-sm text-gray-700 text-center md:text-left">
                  Subscribe to our newsletter to receive updates about temple events, festivals, and spiritual programs.
                </p>
                <p className="text-sm text-gray-700 text-center md:text-left">
                  Stay connected with our community and never miss an opportunity to engage in devotional service.
                </p>
              </motion.div>

              <motion.div
                className="flex"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                />
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-md transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </motion.div>
            </div>

            {/* Chant with Us Section */}
            <div className="w-full border-t border-amber-100 pt-6">
              <h3 className="text-primary font-semibold mb-4 text-center md:text-left">Chant with Us</h3>

              <div className="bg-white p-4 rounded-lg border border-amber-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="mr-3 text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" x2="12" y1="19" y2="23" />
                      <line x1="8" x2="16" y1="23" y2="23" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-gray-800">Listen to Maha-mantra</h4>
                    <p className="text-sm text-gray-600">Experience the transcendental sound vibration</p>
                  </div>
                </div>

                <motion.button
                  className="w-full bg-amber-100 hover:bg-amber-200 text-primary font-medium py-2.5 px-6 rounded-md transition-colors border border-amber-200 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={playMantra}
                >
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
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  Play Maha-mantra
                </motion.button>
                <audio ref={audioRef} src="/audio/maha-mantra.mp3" />

                <p className="text-xs text-gray-500 mt-2 text-center italic">
                  Practiced for thousands of years by devotees worldwide
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location Map */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-primary font-semibold mb-4 text-center md:text-left w-full">Find Us</h3>
            <div className="w-full">
              <motion.div
                className="h-64 rounded-md relative overflow-hidden border border-gray-200"
                whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.2825767285577!2d85.82516417597425!3d20.356312586362856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909abd700711b%3A0x5317e2321ccc3b03!2sISKCON%20Patia!5e0!3m2!1sen!2sin!4v1715350402000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ISKCON Patia Location"
                  className="w-full h-full"
                ></iframe>
              </motion.div>
              <div className="mt-2 text-center md:text-left">
                <motion.a
                  href="https://www.google.com/maps/place/ISKCON+Patia/@20.3563126,85.8251642,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1909abd700711b:0x5317e2321ccc3b03!8m2!3d20.3563076!4d85.8277391!16s%2Fg%2F11rr7q0s28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm hover:underline flex items-center justify-center md:justify-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="M9 18l6-6-6-6"></path>
                  </svg>
                  Get Directions
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Admin Login Button */}
<motion.div
  className="flex justify-center mt-6"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <Link
    href="/admin-login"
    className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-md shadow-md 
               hover:bg-primary/90 transition-colors"
  >
    Admin Login
  </Link>
</motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-200 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center space-y-2">
            <p className="text-center text-sm text-gray-600">
              © 2025 ISKCON Baranga-Patia. All Rights Reserved. | A branch of the International Society for Krishna
              Consciousness, founded by His Divine Grace A. C. Bhaktivedanta Swami Prabhupada.
            </p>
            <p className="text-center text-sm text-gray-600">
              Crafted by{" "}
              <a
                href="https://diracai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                DiracAI Pvt. Ltd.
              </a>
            </p>
          </div>
          {/* Legal Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-xs text-gray-500 hover:text-primary transition-colors">
              Terms of Use
            </Link>
            <Link href="/refund-policy" className="text-xs text-gray-500 hover:text-primary transition-colors">
              Refund Policy
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
