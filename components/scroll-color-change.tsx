"use client"

import { useState, useEffect, useRef } from "react"

export default function ScrollColorChange() {
  const [scrollY, setScrollY] = useState(0)
  const requestRef = useRef<number | null>(null)
  const previousScrollY = useRef(0)

  // Smooth scroll handler with requestAnimationFrame
  const animateScroll = () => {
    setScrollY(window.scrollY)
    previousScrollY.current = window.scrollY
    requestRef.current = requestAnimationFrame(animateScroll)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateScroll)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  // Calculate color intensity based on scroll position with reduced complexity
  const calculateColor = () => {
    const maxScroll = 2000 // Adjust based on your page length
    const scrollRatio = Math.min(scrollY / maxScroll, 1)

    // Simplified color transition with fewer cycles
    const cycle = Math.floor(scrollRatio * 2) % 2
    const intensity = 0.05 + scrollRatio * 0.05

    if (cycle === 0) {
      return `linear-gradient(to bottom right, rgba(6, 182, 212, ${intensity}), rgba(59, 130, 246, ${intensity}))`
    } else {
      return `linear-gradient(to bottom right, rgba(59, 130, 246, ${intensity}), rgba(6, 182, 212, ${intensity}))`
    }
  }

  return (
    <div
      className="fixed inset-0 -z-20 pointer-events-none"
      style={{
        background: calculateColor(),
        transition: "background 0.8s ease-out",
      }}
    />
  )
}
