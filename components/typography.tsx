import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function Heading1({ children, className }: TypographyProps) {
  return <h1 className={cn("text-2xl sm:text-3xl md:text-4xl font-bold text-primary", className)}>{children}</h1>
}

export function Heading2({ children, className }: TypographyProps) {
  return <h2 className={cn("text-xl sm:text-2xl md:text-3xl font-bold text-primary", className)}>{children}</h2>
}

export function Heading3({ children, className }: TypographyProps) {
  return <h3 className={cn("text-lg sm:text-xl md:text-2xl font-semibold text-primary", className)}>{children}</h3>
}

export function Paragraph({ children, className }: TypographyProps) {
  return <p className={cn("text-sm sm:text-base md:text-lg text-gray-800", className)}>{children}</p>
}

export function SmallText({ children, className }: TypographyProps) {
  return <p className={cn("text-xs sm:text-sm md:text-base text-gray-700", className)}>{children}</p>
}

export function ButtonText({ children, className }: TypographyProps) {
  return <span className={cn("text-sm sm:text-base md:text-lg font-medium", className)}>{children}</span>
}
