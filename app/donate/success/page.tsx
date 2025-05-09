"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"
import { Check, Download, ArrowRight } from "lucide-react"

export default function DonationSuccessPage() {
  const searchParams = useSearchParams()
  const [transactionDetails, setTransactionDetails] = useState({
    transactionId: "",
    amount: 0,
    donationType: "",
    date: new Date().toISOString(),
    receiptId: "",
  })

  useEffect(() => {
    // Get transaction details from URL params
    const txnId =
      searchParams.get("txnId") ||
      `TXN${Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0")}`
    const amount = searchParams.get("amount") ? Number.parseInt(searchParams.get("amount") as string) : 11000
    const type = searchParams.get("type") || "Temple Construction"
    const receiptId =
      searchParams.get("receiptId") ||
      `RCPT${Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0")}`

    setTransactionDetails({
      transactionId: txnId,
      amount: amount,
      donationType: type,
      date: new Date().toISOString(),
      receiptId: receiptId,
    })
  }, [searchParams])

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <AnimateOnView animation="fade-up">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary text-white p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-primary" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Donation Successful!</h1>
              <p className="text-white/90">Thank you for your generous contribution to Sanatana Dharma Centre</p>
            </div>

            <div className="p-8">
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Transaction Details</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transaction ID:</span>
                    <span className="font-medium">{transactionDetails.transactionId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">{formatCurrency(transactionDetails.amount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purpose:</span>
                    <span className="font-medium">{transactionDetails.donationType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{formatDate(transactionDetails.date)}</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-gray-600 mb-4">
                  Your donation receipt has been sent to your email address. You can also download it here.
                </p>
                <Link
                  href={`/donate/receipt/${transactionDetails.receiptId}`}
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300 inline-flex items-center"
                >
                  <Download size={16} className="mr-2" />
                  View Receipt
                </Link>
              </div>

              <div className="border-t border-gray-200 pt-6 text-center">
                <p className="text-gray-600 mb-4">
                  Your contribution will help us in our mission to spread spiritual knowledge and values.
                </p>
                <Link href="/" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                  Return to Home
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>

      <Footer />
    </main>
  )
}
