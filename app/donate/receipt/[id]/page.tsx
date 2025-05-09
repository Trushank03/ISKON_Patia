"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"
import { Download, Printer, Share2, ArrowLeft } from "lucide-react"

// Define donation receipt type
interface DonationReceipt {
  id: string
  transactionId: string
  date: string
  amount: number
  donationType: string
  donorName: string
  donorEmail: string
  donorPhone: string
  donorPanCard?: string
  isRecurring: boolean
  recurringFrequency?: string
  status: "success" | "pending" | "failed"
}

export default function DonationReceiptPage() {
  const params = useParams()
  const router = useRouter()
  const [receipt, setReceipt] = useState<DonationReceipt | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch receipt data
  useEffect(() => {
    const fetchReceipt = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // In a real implementation, this would be an actual API call
        // For example:
        // const response = await fetch(`/api/donations/receipts/${params.id}`)
        // const data = await response.json()

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800))

        // Mock receipt data
        const mockReceipt: DonationReceipt = {
          id: params.id as string,
          transactionId: "TXN123456",
          date: new Date().toISOString(),
          amount: 11000,
          donationType: "Temple Construction",
          donorName: "Rajesh Kumar",
          donorEmail: "rajesh@example.com",
          donorPhone: "9876543210",
          donorPanCard: "ABCDE1234F",
          isRecurring: false,
          status: "success",
        }

        setReceipt(mockReceipt)
      } catch (err) {
        console.error("Error fetching receipt:", err)
        setError("Failed to load donation receipt. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchReceipt()
  }, [params.id])

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

  // Handle print receipt
  const handlePrint = () => {
    window.print()
  }

  // Handle share receipt
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Donation Receipt - Sanatana Dharma Centre",
        text: `Thank you for your donation of ${receipt?.amount ? formatCurrency(receipt.amount) : ""} to Sanatana Dharma Centre.`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Receipt link copied to clipboard!")
    }
  }

  // Handle download receipt
  const handleDownload = () => {
    // In a real implementation, this would generate a PDF
    alert("Receipt download functionality would be implemented here.")
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (error || !receipt) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Receipt Not Found</h1>
            <p className="text-gray-600 mb-8">
              {error || "The donation receipt you're looking for doesn't exist or has been removed."}
            </p>
            <Link
              href="/donate"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300"
            >
              Return to Donation Page
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <AnimateOnView animation="fade-up">
          <div className="max-w-3xl mx-auto">
            <button onClick={() => router.back()} className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
              <ArrowLeft size={16} className="mr-1" />
              Back
            </button>

            {/* Receipt Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8" id="receipt-printable">
              {/* Receipt Header */}
              <div className="bg-primary text-white p-6 flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold">Donation Receipt</h1>
                  <p className="text-white/80">Thank you for your generous contribution</p>
                </div>
                <div className="hidden md:block">
                  <Image
                    src="/images/iskcon-logo.png"
                    alt="ISKCON Logo"
                    width={80}
                    height={60}
                    className="h-16 w-auto"
                  />
                </div>
              </div>

              {/* Receipt Body */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Sanatana Dharma Centre</h2>
                    <p className="text-gray-600">Shanti Bhumi, Pune, Maharashtra</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">Receipt No: {receipt.id}</p>
                    <p className="text-gray-600">Date: {formatDate(receipt.date)}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Donation Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Transaction ID:</p>
                      <p className="font-medium">{receipt.transactionId}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Amount:</p>
                      <p className="font-medium">{formatCurrency(receipt.amount)}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Purpose:</p>
                      <p className="font-medium">{receipt.donationType}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Status:</p>
                      <p
                        className={`font-medium ${
                          receipt.status === "success"
                            ? "text-green-600"
                            : receipt.status === "pending"
                              ? "text-yellow-600"
                              : "text-red-600"
                        }`}
                      >
                        {receipt.status.charAt(0).toUpperCase() + receipt.status.slice(1)}
                      </p>
                    </div>
                    {receipt.isRecurring && (
                      <div>
                        <p className="text-gray-600">Frequency:</p>
                        <p className="font-medium capitalize">{receipt.recurringFrequency}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Donor Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Name:</p>
                      <p className="font-medium">{receipt.donorName}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Email:</p>
                      <p className="font-medium">{receipt.donorEmail}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Phone:</p>
                      <p className="font-medium">{receipt.donorPhone}</p>
                    </div>
                    {receipt.donorPanCard && (
                      <div>
                        <p className="text-gray-600">PAN Card:</p>
                        <p className="font-medium">{receipt.donorPanCard}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">
                      This receipt is valid for tax exemption under Section 80G of the Income Tax Act.
                    </p>
                    <p className="text-gray-600 text-sm">
                      Sanatana Dharma Centre | Reg. No: ABCD12345 | PAN: AAAAA0000A
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handlePrint}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-md transition-colors duration-300 flex items-center"
              >
                <Printer size={16} className="mr-2" />
                Print Receipt
              </button>
              <button
                onClick={handleDownload}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-md transition-colors duration-300 flex items-center"
              >
                <Download size={16} className="mr-2" />
                Download PDF
              </button>
              <button
                onClick={handleShare}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-md transition-colors duration-300 flex items-center"
              >
                <Share2 size={16} className="mr-2" />
                Share Receipt
              </button>
            </div>
          </div>
        </AnimateOnView>
      </div>

      <Footer />
    </main>
  )
}
