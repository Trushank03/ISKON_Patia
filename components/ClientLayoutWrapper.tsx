"use client"

import { usePathname } from "next/navigation"

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isNotHome = pathname !== "/"

  return (
    <main className={isNotHome ? "pt-24" : ""}>
      {children}
    </main>
  )
}
