"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Mic } from "lucide-react"

export default function ProductShowcase() {
  const [activeSpot, setActiveSpot] = useState(0)
  const controls = useAnimation()

  const spots = [
    { x: "20%", y: "30%", label: "উচ্চ-মানের মাইক্রোফোন" },
    { x: "80%", y: "40%", label: "ক্রিস্টাল ক্লিয়ার স্পিকার" },
    { x: "50%", y: "70%", label: "টাচ ইন্টারফেস" },
    { x: "30%", y: "60%", label: "এআই প্রসেসিং ইউনিট" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpot((prev) => (prev + 1) % spots.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [spots.length])

  useEffect(() => {
    controls.start({
      scale: [1, 1.03, 1], // Reduced scale for smoother animation
      transition: { duration: 2, ease: "easeInOut" },
    })
  }, [activeSpot, controls])

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
      <motion.div
        className="relative bg-white p-6 rounded-3xl shadow-xl"
        animate={controls}
        initial={false} // Prevents initial animation
      >
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-50 to-blue-50">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="প্রগতি এআই সহকারী"
            width={600}
            height={600}
            className="object-contain"
            priority // Prioritize loading
          />

          {spots.map((spot, index) => (
            <div key={index} className="absolute" style={{ left: spot.x, top: spot.y }}>
              <motion.div
                className={`h-6 w-6 rounded-full flex items-center justify-center cursor-pointer ${
                  activeSpot === index
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                    : "bg-white border border-gray-300"
                }`}
                whileHover={{ scale: 1.1 }} // Reduced scale for smoother animation
                onClick={() => setActiveSpot(index)}
              >
                <span className="text-white text-xs">{index + 1}</span>
              </motion.div>

              <AnimatePresence>
                {activeSpot === index && (
                  <motion.div
                    className="absolute left-8 -top-2 bg-white p-2 rounded-lg shadow-lg whitespace-nowrap"
                    initial={{ opacity: 0, x: -5 }} // Reduced movement
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    transition={{ duration: 0.3 }} // Faster transition
                  >
                    <p className="text-sm font-medium">{spot.label}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }} // Reduced opacity for smoother animation
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="h-20 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
              <Mic className="h-10 w-10 text-white" />
            </div>
          </motion.div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
          <p className="text-gray-700 font-medium">"প্রগতি, আমাকে বাংলাদেশের স্বাধীনতা যুদ্ধ সম্পর্কে বলো।"</p>
          <motion.div
            className="mt-3 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  )
}
