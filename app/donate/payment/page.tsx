"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"
import { CreditCard, Landmark, Smartphone, Check, ChevronRight, ArrowLeft, AlertCircle } from "lucide-react"

// Define donation types
const DONATION_TYPES = [
  {
    id: "brick",
    name: "Brick Seva",
    amount: 1100,
    description: "Contribute one temple brick in your name.",
    image: "/images/temple-golden-illustration.png",
  },
  {
    id: "floor",
    name: "Bhakti Floor Seva",
    amount: 5100,
    description: "Sponsor part of the temple floor. Renewed quarterly.",
    image: "/images/temple-golden-illustration.png",
  },
  {
    id: "prasadam",
    name: "Prasadam Seva",
    amount: 11000,
    description: "Sponsor meals for 100 devotees.",
    image: "/images/satwik-restaurant.png",
  },
  {
    id: "ornament",
    name: "Deity Ornament Sponsorship",
    amount: 21000,
    description: "Help adorn the deities with new ornaments.",
    image: "/images/temple-golden-illustration.png",
  },
  {
    id: "cottage",
    name: "Cottage Wing Builder",
    amount: 51000,
    description: "Help complete a full cottage or temple wing.",
    image: "/images/premium-cottages.png",
  },
]

// Monthly seva options
const MONTHLY_OPTIONS = [
  { id: "monthly-501", amount: 501 },
  { id: "monthly-1001", amount: 1001 },
  { id: "monthly-2100", amount: 2100 },
]

export default function DonationPaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDonationType, setSelectedDonationType] = useState<string | null>(null)
  const [donationAmount, setDonationAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [isRecurring, setIsRecurring] = useState(false)
  const [recurringFrequency, setRecurringFrequency] = useState("monthly")

  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    panCard: "",
    address: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    donateInHonorOf: "",
    isAnonymous: false,
  })

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [transactionId, setTransactionId] = useState<string | null>(null)

  // Initialize from URL params
  useEffect(() => {
    const type = searchParams.get("type")
    const plan = searchParams.get("plan")
    const amount = searchParams.get("amount")

    if (type) {
      const donationType = DONATION_TYPES.find((t) => t.id === type)
      if (donationType) {
        setSelectedDonationType(type)
        setDonationAmount(donationType.amount)
        setCurrentStep(2) // Skip to amount step
      }
    }

    if (plan === "monthly") {
      setIsRecurring(true)
      setRecurringFrequency("monthly")
      // Set a default monthly amount if none specified
      if (!amount) {
        setDonationAmount(MONTHLY_OPTIONS[0].amount)
      }
    }

    if (amount) {
      setDonationAmount(Number(amount))
      if (!type) {
        setCurrentStep(2) // Skip to amount step
      }
    }
  }, [searchParams])

  // Get the selected donation type object
  const selectedDonation = DONATION_TYPES.find((type) => type.id === selectedDonationType)

  // Handle donation type selection
  const handleDonationTypeSelect = (typeId: string) => {
    const donationType = DONATION_TYPES.find((t) => t.id === typeId)
    setSelectedDonationType(typeId)
    if (donationType) {
      setDonationAmount(donationType.amount)
      setCustomAmount("")
    }
  }

  // Handle amount selection
  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount)
    setCustomAmount("")
  }

  // Handle custom amount input
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "")
    setCustomAmount(value)
    setDonationAmount(value ? Number.parseInt(value) : null)
  }

  // Handle donor info changes
  const handleDonorInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setDonorInfo({
      ...donorInfo,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  // Handle payment method selection
  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method)
    setPaymentError(null)
  }

  // Handle form submission for each step
  const handleNextStep = () => {
    if (currentStep === 1 && !selectedDonationType) {
      alert("Please select a donation type")
      return
    }

    if (currentStep === 2 && !donationAmount) {
      alert("Please select or enter a donation amount")
      return
    }

    if (currentStep === 3) {
      // Validate donor information
      if (!donorInfo.name || !donorInfo.email || !donorInfo.phone) {
        alert("Please fill in all required fields")
        return
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(donorInfo.email)) {
        alert("Please enter a valid email address")
        return
      }

      // Basic phone validation
      if (!/^\d{10}$/.test(donorInfo.phone)) {
        alert("Please enter a valid 10-digit phone number")
        return
      }
    }

    if (currentStep === 4 && !selectedPaymentMethod) {
      alert("Please select a payment method")
      return
    }

    if (currentStep === 4) {
      // Process payment
      processPayment()
      return
    }

    setCurrentStep(currentStep + 1)
  }

  // Handle going back to previous step
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Simulate payment processing
  const processPayment = async () => {
    setIsProcessing(true)
    setPaymentError(null)

    try {
      // Simulate API call to payment gateway
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Generate a random transaction ID
      const txnId =
        "TXN" +
        Math.floor(Math.random() * 1000000)
          .toString()
          .padStart(6, "0")

      // Generate a random receipt ID
      const receiptId =
        "RCPT" +
        Math.floor(Math.random() * 1000000)
          .toString()
          .padStart(6, "0")

      // Redirect to success page with transaction details
      router.push(
        `/donate/success?txnId=${txnId}&amount=${donationAmount}&type=${
          selectedDonation?.name || "General Donation"
        }&receiptId=${receiptId}`,
      )
    } catch (error) {
      setPaymentError("Payment processing failed. Please try again.")
      setIsProcessing(false)
    }
  }

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <main className="min-h-screen bg-amber-50/30">
      <Header />

      {/* Donation Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === step
                      ? "bg-primary text-white"
                      : currentStep > step
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {currentStep > step ? <Check size={16} /> : step}
                </div>
                <span className="text-xs mt-1 text-gray-500 hidden sm:block">
                  {step === 1 ? "Purpose" : step === 2 ? "Amount" : step === 3 ? "Details" : "Payment"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <AnimateOnView animation="fade-up">
          {/* Step 1: Select Donation Type */}
          {currentStep === 1 && (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-2">Select Donation Purpose</h1>
              <p className="text-gray-600 text-center mb-8">Choose where you would like your donation to be directed</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {DONATION_TYPES.map((type) => (
                  <div
                    key={type.id}
                    className={`border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md ${
                      selectedDonationType === type.id ? "border-primary ring-2 ring-primary/30" : "border-gray-200"
                    }`}
                    onClick={() => handleDonationTypeSelect(type.id)}
                  >
                    <div className="relative h-40">
                      <Image src={type.image || "/placeholder.svg"} alt={type.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{type.name}</h3>
                      <p className="text-gray-600 text-sm">{type.description}</p>
                      <p className="text-primary font-medium mt-2">{formatCurrency(type.amount)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <Link href="/donate" className="flex items-center text-gray-600 hover:text-gray-800">
                  <ArrowLeft size={16} className="mr-1" />
                  Back
                </Link>
                <button
                  onClick={handleNextStep}
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300"
                >
                  Continue
                  <ChevronRight size={16} className="inline ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Select Donation Amount */}
          {currentStep === 2 && (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-2">Select Donation Amount</h1>
              <p className="text-gray-600 text-center mb-8">
                Choose an amount to donate for {selectedDonation?.name || "your selected purpose"}
              </p>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                {selectedDonation ? (
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Selected Donation Type</h2>
                    <div className="flex items-center">
                      <div className="w-16 h-16 relative flex-shrink-0 mr-4">
                        <Image
                          src={selectedDonation.image || "/placeholder.svg"}
                          alt={selectedDonation.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{selectedDonation.name}</h3>
                        <p className="text-gray-600 text-sm">{selectedDonation.description}</p>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Choose Amount</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {(selectedDonation
                      ? [selectedDonation.amount]
                      : isRecurring
                        ? MONTHLY_OPTIONS.map((opt) => opt.amount)
                        : [1100, 5100, 11000, 21000]
                    ).map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`border rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md ${
                          donationAmount === amount
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-gray-200 text-gray-700"
                        }`}
                      >
                        <span className="block text-lg font-semibold">{formatCurrency(amount)}</span>
                      </button>
                    ))}
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Or enter a custom amount</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="text"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Enter amount"
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  {!isRecurring && !selectedDonation?.id.startsWith("monthly") && (
                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex items-center mb-4">
                        <input
                          id="recurring"
                          type="checkbox"
                          checked={isRecurring}
                          onChange={() => setIsRecurring(!isRecurring)}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <label htmlFor="recurring" className="ml-2 block text-gray-700">
                          Make this a recurring donation
                        </label>
                      </div>

                      {isRecurring && (
                        <div className="ml-6 mb-4">
                          <label className="block text-gray-700 text-sm font-medium mb-2">Frequency</label>
                          <select
                            value={recurringFrequency}
                            onChange={(e) => setRecurringFrequency(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          >
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="yearly">Yearly</option>
                          </select>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button onClick={handlePreviousStep} className="flex items-center text-gray-600 hover:text-gray-800">
                  <ArrowLeft size={16} className="mr-1" />
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={!donationAmount}
                  className={`bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300 ${
                    !donationAmount ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Continue
                  <ChevronRight size={16} className="inline ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Donor Information */}
          {currentStep === 3 && (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-2">Your Information</h1>
              <p className="text-gray-600 text-center mb-8">
                Please provide your details for donation receipt and tax benefits
              </p>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={donorInfo.name}
                      onChange={handleDonorInfoChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={donorInfo.email}
                      onChange={handleDonorInfoChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={donorInfo.phone}
                      onChange={handleDonorInfoChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="panCard" className="block text-gray-700 text-sm font-medium mb-2">
                      PAN Card (for 80G tax benefits)
                    </label>
                    <input
                      type="text"
                      id="panCard"
                      name="panCard"
                      value={donorInfo.panCard}
                      onChange={handleDonorInfoChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={donorInfo.address}
                    onChange={handleDonorInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label htmlFor="city" className="block text-gray-700 text-sm font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={donorInfo.city}
                      onChange={handleDonorInfoChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-gray-700 text-sm font-medium mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={donorInfo.state}
                      onChange={handleDonorInfoChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="pincode" className="block text-gray-700 text-sm font-medium mb-2">
                      Pincode
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={donorInfo.pincode}
                      onChange={handleDonorInfoChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="mb-4">
                    <label htmlFor="donateInHonorOf" className="block text-gray-700 text-sm font-medium mb-2">
                      Donate in Honor/Memory of (Optional)
                    </label>
                    <input
                      type="text"
                      id="donateInHonorOf"
                      name="donateInHonorOf"
                      value={donorInfo.donateInHonorOf}
                      onChange={handleDonorInfoChange}
                      placeholder="Enter name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="isAnonymous"
                      name="isAnonymous"
                      type="checkbox"
                      checked={donorInfo.isAnonymous}
                      onChange={handleDonorInfoChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="isAnonymous" className="ml-2 block text-gray-700">
                      Make my donation anonymous
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button onClick={handlePreviousStep} className="flex items-center text-gray-600 hover:text-gray-800">
                  <ArrowLeft size={16} className="mr-1" />
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300"
                >
                  Continue
                  <ChevronRight size={16} className="inline ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Payment Method */}
          {currentStep === 4 && (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-2">Payment Method</h1>
              <p className="text-gray-600 text-center mb-8">Choose your preferred payment method</p>

              {paymentError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6 flex items-center">
                  <AlertCircle size={16} className="mr-2" />
                  {paymentError}
                </div>
              )}

              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Donation Summary</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Donation Type:</span>
                      <span className="font-medium">{selectedDonation?.name || "General Donation"}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-medium">{donationAmount ? formatCurrency(donationAmount) : "-"}</span>
                    </div>
                    {isRecurring && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Frequency:</span>
                        <span className="font-medium capitalize">{recurringFrequency}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Select Payment Method</h2>

                  <div className="space-y-3">
                    <div
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-sm ${
                        selectedPaymentMethod === "card" ? "border-primary bg-primary/5" : "border-gray-200"
                      }`}
                      onClick={() => handlePaymentMethodSelect("card")}
                    >
                      <div className="flex items-center">
                        <div className="bg-primary/10 rounded-full p-2 mr-3">
                          <CreditCard size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">Credit/Debit Card</h3>
                          <p className="text-sm text-gray-500">Visa, Mastercard, RuPay, and more</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-sm ${
                        selectedPaymentMethod === "upi" ? "border-primary bg-primary/5" : "border-gray-200"
                      }`}
                      onClick={() => handlePaymentMethodSelect("upi")}
                    >
                      <div className="flex items-center">
                        <div className="bg-primary/10 rounded-full p-2 mr-3">
                          <Smartphone size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">UPI</h3>
                          <p className="text-sm text-gray-500">Google Pay, PhonePe, Paytm, and more</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-sm ${
                        selectedPaymentMethod === "netbanking" ? "border-primary bg-primary/5" : "border-gray-200"
                      }`}
                      onClick={() => handlePaymentMethodSelect("netbanking")}
                    >
                      <div className="flex items-center">
                        <div className="bg-primary/10 rounded-full p-2 mr-3">
                          <Landmark size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">Net Banking</h3>
                          <p className="text-sm text-gray-500">All major banks supported</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center mb-4">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms & Conditions
                      </Link>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button onClick={handlePreviousStep} className="flex items-center text-gray-600 hover:text-gray-800">
                  <ArrowLeft size={16} className="mr-1" />
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={!selectedPaymentMethod || isProcessing}
                  className={`bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300 flex items-center ${
                    !selectedPaymentMethod || isProcessing ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isProcessing && (
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                  )}
                  {isProcessing ? "Processing..." : "Make Payment"}
                </button>
              </div>
            </div>
          )}
        </AnimateOnView>
      </div>

      <Footer />
    </main>
  )
}
