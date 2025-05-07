"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  children: React.ReactNode[]
  showControls?: boolean
  autoScroll?: boolean
  scrollInterval?: number
  compact?: boolean
}

export function Carousel({
  children,
  showControls = true,
  autoScroll = false,
  scrollInterval = 5000,
  compact = false,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalItems = children.length

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        nextSlide()
      }, scrollInterval)

      return () => clearInterval(interval)
    }
  }, [autoScroll, currentIndex, scrollInterval])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {showControls && totalItems > 1 && (
        <>
          <button
            onClick={prevSlide}
            className={`absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 rounded-full ${
              compact ? "p-0.5" : "p-1"
            } shadow-md z-10`}
            aria-label="Previous slide"
          >
            <ChevronLeft className={`${compact ? "h-4 w-4" : "h-6 w-6"} text-primary`} />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 rounded-full ${
              compact ? "p-0.5" : "p-1"
            } shadow-md z-10`}
            aria-label="Next slide"
          >
            <ChevronRight className={`${compact ? "h-4 w-4" : "h-6 w-6"} text-primary`} />
          </button>
        </>
      )}

      {/* Indicators */}
      <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-1">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              currentIndex === index ? "w-3 bg-primary" : "w-1.5 bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
