"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Mic, ArrowLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 md:py-24">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          হোম পেজে ফিরে যান
        </Link>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">কিভাবে প্রগতি কাজ করে</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            প্রগতি ব্যবহার করা সহজ এবং সরল। এখানে দেখুন কিভাবে এটি আপনার অধ্যয়নকে উন্নত করতে পারে।
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {[
            {
              title: "প্রগতি ডিভাইস কিনুন",
              description:
                "আমাদের ওয়েবসাইট থেকে প্রগতি ডিভাইস কিনুন। আপনার প্রয়োজন অনুযায়ী স্টার্টার, প্রিমিয়াম বা প্রো প্যাকেজ বেছে নিন।",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "প্রগতি অ্যাপ ডাউনলোড করুন",
              description: "আপনার স্মার্টফোনে প্রগতি অ্যাপ ডাউনলোড করুন। অ্যান্ড্রয়েড এবং আইওএস উভয় প্ল্যাটফর্মে উপলব্ধ।",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "ডিভাইস সেটআপ করুন",
              description: "প্রগতি ডিভাইস আনবক্স করুন এবং চার্জ করুন। অ্যাপের মাধ্যমে ডিভাইসের সাথে সংযোগ স্থাপন করুন।",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "আপনার প্রশ্ন জিজ্ঞাসা করুন",
              description: "আপনার কণ্ঠস্বর ব্যবহার করে ডিভাইসে বা অ্যাপে যেকোনো বিষয়ে প্রশ্ন জিজ্ঞাসা করুন।",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "তাৎক্ষণিক উত্তর পান",
              description: "প্রগতি আপনার প্রশ্নের উত্তর দেবে, ব্যাখ্যা করবে এবং আপনার বোঝার জন্য সাহায্য করবে।",
              image: "/placeholder.svg?height=400&width=600",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="mb-20 flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={`md:w-1/2 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl blur-xl opacity-50"></div>
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className={`md:w-1/2 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{step.description}</p>
                {index === 0 && (
                  <Link href="/pricing">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                      প্যাকেজ দেখুন <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
              হোম পেজে ফিরে যান
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Mic className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  প্রগতি
                </h3>
              </div>
              <p className="text-gray-400">
                বাংলাদেশের প্রথম এআই-ভিত্তিক ফিজিক্যাল স্টাডি অ্যাসিস্ট্যান্ট যা আপনার অধ্যয়নকে আরও সহজ, দক্ষ এবং আনন্দদায়ক করে তোলে।
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">কোম্পানি</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    যোগাযোগ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    কেরিয়ার
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    ব্লগ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">সাহায্য</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    সাধারণ প্রশ্নাবলী
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    সাপোর্ট
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    টিউটোরিয়াল
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    গোপনীয়তা নীতি
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">যোগাযোগ করুন</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">ঢাকা, বাংলাদেশ</li>
                <li className="text-gray-400">info@progoti.ai</li>
                <li className="text-gray-400">+880 1700 000000</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} প্রগতি। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
