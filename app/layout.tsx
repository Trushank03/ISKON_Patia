import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import WhatsAppButton from "@/components/WhatsAppButton"
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ISKCON Baranga-Patia",
  description:
    "Welcome to ISKCON Baranga-Patia – A Spiritual Oasis of Lord Krishna's Mercy",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {/* Wrap children with client wrapper */}
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>

        <WhatsAppButton />
      </body>
    </html>
  )
}
