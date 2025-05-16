// // pages/refund-policy.tsx
// "use client";

// import Head from "next/head";
// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";

// export default function RefundPolicy() {
//   return (
//     <>
//       <Head>
//         <title>Refund Policy | ISKCON Thane</title>
//       </Head>
//       <main className="bg-[#f8f5e9] text-[#3b3b1f] min-h-screen">
//         <Header />
//         <section className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-green-900">Refund Policy</h1>

//           <p className="mb-6 text-gray-800">
//             Thank you for donating at ISKCON BarangPatia. If for any reason, you are not completely satisfied with making
//             donations, we invite you to review our policy on refunds.
//           </p>

//           <h2 className="text-2xl font-semibold mb-4 text-green-800">Conditions for Refund</h2>
//           <ul className="list-disc list-inside space-y-2 mb-6 text-gray-800">
//             <li>Donations will be refunded if they were made in the last 2 days.</li>
//             <li>In case of a refund, the transaction charges from the payment gateway will be deducted.</li>
//             <li>Donations made accidentally will be refunded after deducting the transaction charges.</li>
//             <li>Donations with any particular cause will not be refunded.</li>
//           </ul>

//           <p className="mb-6 text-sm text-gray-700">
//             For example, if you have donated for any Lunch sponsorship or Flower Garland for the date within the 2 days
//             period, the donations will not be refunded.
//           </p>

//           <h2 className="text-2xl font-semibold mb-4 text-green-800">The following Donations cannot be refunded:</h2>
//           <ul className="list-disc list-inside space-y-2 mb-6 text-gray-800">
//             <li>If the refund is claimed after 2 days of making a donation.</li>
//             <li>
//               Recurring donations cannot be refunded from our end; you need to cancel through the selected payment mode.
//             </li>
//           </ul>

//           <p className="mb-6 text-sm text-gray-700">
//             We reserve the right to refuse a refund of any donation that does not meet the above refund conditions at
//             our sole discretion.
//           </p>

//           <h2 className="text-2xl font-semibold mb-4 text-green-800">
//             In case of a refund, in how many days will the money be refunded?
//           </h2>
//           <p className="text-gray-800">The money will be refunded according to the guidelines above in 7 working days.</p>
//         </section>
//         <Footer />
//       </main>
//     </>
//   );
// }



// "use client";

// import Head from "next/head";
// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";

// export default function RefundPolicy() {
//   return (
//     <>
//       <Head>
//         <title>Refund Policy | Sanatana Dharma Centre</title>
//       </Head>

//       <main className="bg-[#fef9e6] min-h-screen text-[#222]">
//         <Header />

//         {/* Page Title */}
//         <section className="text-center py-10 px-4">
//           <h1 className="text-3xl sm:text-4xl font-bold text-red-700 mb-3">Refund Policy</h1>
//           <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg">
//             Thank you for donating at Sanatana Dharma Centre. If for any reason, you are not completely satisfied with making a donation, we invite you to review our refund policy.
//           </p>
//         </section>

//         {/* Main Content Box */}
//         <section className="max-w-4xl mx-auto px-4 py-10 bg-white border-l-4 border-red-600 shadow-sm space-y-10">
//           {/* Conditions for Refund */}
//           <div>
//             <h2 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3">Conditions for Refund</h2>
//             <ul className="list-disc list-inside text-gray-800 space-y-2">
//               <li>Donations will be refunded if made in the last 2 days.</li>
//               <li>Transaction charges from the payment gateway will be deducted.</li>
//               <li>Accidental donations will be refunded after deduction of charges.</li>
//               <li>Donations made for a specific cause (e.g., lunch sponsorship) will not be refunded.</li>
//             </ul>
//             <p className="mt-3 text-sm text-gray-600">
//               For example, donations for events within the last 2 days (like Flower Garland or Prasadam) are non-refundable.
//             </p>
//           </div>

//           {/* Non-Refundable Donations */}
//           <div>
//             <h2 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3">The following Donations cannot be refunded</h2>
//             <ul className="list-disc list-inside text-gray-800 space-y-2">
//               <li>Refunds requested after 2 days from donation date.</li>
//               <li>Recurring donations (must be canceled via the payment provider).</li>
//             </ul>
//             <p className="mt-3 text-sm text-gray-600">
//               We reserve the right to deny refunds at our sole discretion if they do not meet the conditions above.
//             </p>
//           </div>

//           {/* Refund Timeline */}
//           <div>
//             <h2 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3">
//               In case of a refund, how many days will the money be refunded?
//             </h2>
//             <p className="text-gray-800">
//               The refund will be processed within <strong>7 working days</strong> from approval, as per the guidelines mentioned above.
//             </p>
//           </div>
//         </section>

//         <Footer />
//       </main>
//     </>
//   );
// }


"use client";

import Head from "next/head";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy | Sanatana Dharma Centre</title>
      </Head>

      <main className="bg-[#fef9e6] text-[#222] min-h-screen w-full">
        <Header />

        {/* Banner Section */}
        <section className="text-center py-10 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-700 mb-3">Refund Policy</h1>
          <div className="flex justify-center mb-4">
            <div className="h-[2px] w-32 bg-red-600 rounded-full relative">
              <div className="absolute inset-x-0 -bottom-1 flex justify-center">
                <span className="text-red-600 text-lg font-serif">꧁</span>
              </div>
            </div>
          </div>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700">
            At Sanatana Dharma Centre, we value your trust and strive to maintain transparency. If you're not fully satisfied with your donation experience, here’s our refund policy.
          </p>
        </section>

        {/* Policy Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white border-t-4 border-red-600 rounded shadow-md space-y-10">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-red-700 mb-4">Conditions for Refund</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800 text-base leading-relaxed">
              <li>Donations will be refunded if made within the last 2 days.</li>
              <li>Transaction charges from the payment gateway will be deducted.</li>
              <li>Accidental donations are eligible for a refund after deducting charges.</li>
              <li>Donations tied to specific causes (e.g., Flower Garland or Prasadam) are non-refundable.</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Example: Donations for lunch or events within a 2-day window are non-refundable.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-red-700 mb-4">Non-Refundable Donations</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800 text-base leading-relaxed">
              <li>Refunds requested after 2 days of donation.</li>
              <li>Recurring donations (must be canceled via your payment provider).</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              The centre reserves the right to deny refund requests that don’t meet these criteria.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-red-700 mb-4">Refund Processing Time</h2>
            <p className="text-gray-800 text-base">
              If approved, your refund will be processed within <strong>7 working days</strong>.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}


