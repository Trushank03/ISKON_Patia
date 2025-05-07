"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimateOnViewProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-right" | "slide-in-left" | "zoom-in" | "bounce"
  delay?: number
  threshold?: number
  once?: boolean
}

export function AnimateOnView({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimateOnViewProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  const animationClasses = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-in": "opacity-0",
    "slide-in-right": "opacity-0 translate-x-8",
    "slide-in-left": "opacity-0 -translate-x-8",
    "zoom-in": "opacity-0 scale-95",
    bounce: "opacity-0 translate-y-4",
  }

  const visibleClass = "opacity-100 translate-y-0 translate-x-0 scale-100"

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        animationClasses[animation],
        isVisible && visibleClass,
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
