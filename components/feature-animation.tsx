"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureAnimationProps {
  children: ReactNode
  index: number
}

export default function FeatureAnimation({ children, index }: FeatureAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Reduced movement
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5, // Faster animation
        delay: index * 0.05, // Reduced delay
      }}
      viewport={{ once: true, margin: "-50px" }} // Improved viewport detection
      whileHover={{ y: -5 }} // Reduced hover movement
    >
      {children}
    </motion.div>
  )
}
