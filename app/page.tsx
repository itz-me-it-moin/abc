"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Mic,
  BookOpen,
  Brain,
  Clock,
  Users,
  ChevronRight,
  ArrowRight,
  Smartphone,
  Headphones,
  Sparkles,
  Code,
  Github,
  FileCode,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductShowcase from "@/components/product-showcase"
import FeatureAnimation from "@/components/feature-animation"
import ScrollColorChange from "@/components/scroll-color-change"
import ChatInterface from "@/components/chat-interface"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <ScrollColorChange />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 -z-10"></div>
        <div className="absolute inset-0 overflow-hidden -z-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-300/20 to-blue-300/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-sm font-medium text-blue-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image src="/bangladesh-flag.png" alt="বাংলাদেশের পতাকা" width={16} height={10} className="h-3 w-auto" />
              <span>বিজ্ঞান প্রকল্প</span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">প্রগতি</span> -
              আপনার কণ্ঠস্বরে চালিত অধ্যয়ন সহকারী
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              প্রগতি হল একটি এআই-ভিত্তিক ফিজিক্যাল স্টাডি অ্যাসিস্ট্যান্ট যা আপনার অধ্যয়নকে আরও সহজ, দক্ষ এবং আনন্দদায়ক করে তোলে। বাংলাদেশের
              শিক্ষার্থীদের জন্য বিশেষভাবে ডিজাইন করা এই ডিভাইস এবং অ্যাপ আপনার পড়াশোনার সাথী হবে।
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white group">
                আমাদের সাথে চ্যাট করুন
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                আরও জানুন <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ProductShowcase />
          </motion.div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">প্রগতি ডিভাইস এবং অ্যাপ</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              প্রগতি একটি ফিজিক্যাল ডিভাইস এবং মোবাইল অ্যাপের সমন্বয়ে তৈরি, যা আপনাকে যেকোনো সময় যেকোনো স্থানে অধ্যয়নে সাহায্য করবে।
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="প্রগতি ফিজিক্যাল ডিভাইস"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    প্রগতি ফিজিক্যাল ডিভাইস
                  </h3>
                  <p className="text-gray-700">
                    আধুনিক ডিজাইন এবং উন্নত প্রযুক্তি সম্পন্ন এই ডিভাইসটি আপনার ডেস্কে রাখুন এবং কণ্ঠস্বরে প্রশ্ন করুন।
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <Mic className="h-5 w-5 text-blue-600" />
                      <span>উচ্চ-মানের মাইক্রোফোন</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Headphones className="h-5 w-5 text-blue-600" />
                      <span>ক্রিস্টাল ক্লিয়ার স্পিকার</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-blue-600" />
                      <span>অন-ডিভাইস এআই প্রসেসিং</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="প্রগতি মোবাইল অ্যাপ"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    প্রগতি মোবাইল অ্যাপ
                  </h3>
                  <p className="text-gray-700">
                    আপনার স্মার্টফোনে প্রগতি অ্যাপ ইনস্টল করুন এবং যেকোনো সময় যেকোনো স্থানে অধ্যয়ন করুন।
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-blue-600" />
                      <span>অ্যান্ড্রয়েড এবং আইওএস সমর্থন</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span>২৪/৭ অ্যাকসেস</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-blue-600" />
                      <span>ক্লাউড সিঙ্ক</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">প্রগতির বৈশিষ্ট্যসমূহ</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              প্রগতি আপনার অধ্যয়নকে আরও সহজ, দক্ষ এবং আনন্দদায়ক করে তোলে। এখানে কিছু প্রধান বৈশিষ্ট্য রয়েছে যা আপনাকে সাহায্য করবে।
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-6 w-6 text-blue-600" />,
                title: "কণ্ঠস্বর নিয়ন্ত্রিত অধ্যয়ন",
                description: "আপনার কণ্ঠস্বর দিয়ে প্রশ্ন জিজ্ঞাসা করুন এবং তাৎক্ষণিক উত্তর পান। টাইপ করার প্রয়োজন নেই।",
              },
              {
                icon: <Brain className="h-6 w-6 text-blue-600" />,
                title: "বাংলা ভাষায় এআই সহায়তা",
                description: "বাংলা ভাষায় প্রশ্ন জিজ্ঞাসা করুন এবং বাংলাতেই উত্তর পান। আপনার মাতৃভাষায় শিখুন।",
              },
              {
                icon: <Clock className="h-6 w-6 text-blue-600" />,
                title: "সময় সাশ্রয়ী অধ্যয়ন",
                description: "দ্রুত এবং সঠিক উত্তর পেয়ে আপনার অধ্যয়নের সময় কমান এবং দক্ষতা বাড়ান।",
              },
              {
                icon: <Users className="h-6 w-6 text-blue-600" />,
                title: "ব্যক্তিগতকৃত শিক্ষা",
                description: "আপনার শিক্ষার স্টাইল এবং গতি অনুযায়ী ব্যক্তিগতকৃত শিক্ষা পান। প্রগতি আপনার সাথে শিখে।",
              },
              {
                icon: <BookOpen className="h-6 w-6 text-blue-600" />,
                title: "বাংলাদেশী পাঠ্যক্রম সমর্থন",
                description: "বাংলাদেশের পাঠ্যক্রম অনুযায়ী তৈরি করা। এসএসসি, এইচএসসি এবং বিশ্ববিদ্যালয় পর্যায়ের বিষয়গুলি অন্তর্ভুক্ত।",
              },
              {
                icon: <Smartphone className="h-6 w-6 text-blue-600" />,
                title: "ডিভাইস এবং অ্যাপ সিঙ্ক",
                description: "আপনার ফিজিক্যাল ডিভাইস এবং মোবাইল অ্যাপ সিঙ্ক করে রাখুন। যেকোনো ডিভাইসে আপনার অধ্যয়ন চালিয়ে যান।",
              },
            ].map((feature, index) => (
              <FeatureAnimation key={index} index={index}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </FeatureAnimation>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/features">
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                সব বৈশিষ্ট্য দেখুন <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">প্রগতি এআই চ্যাট</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              প্রগতি এআই-এর সাথে চ্যাট করুন এবং আপনার প্রশ্নের উত্তর পান। টেক্সট বা ভয়েস চ্যাট ব্যবহার করে আপনার অধ্যয়নে সাহায্য নিন।
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">কণ্ঠস্বরে চ্যাট করুন</h3>
              <p className="text-lg text-gray-700">
                প্রগতি এআই-এর সাথে আপনার কণ্ঠস্বরে কথা বলুন। আপনার প্রশ্ন জিজ্ঞাসা করুন এবং তাৎক্ষণিক উত্তর পান। আমাদের উন্নত ভয়েস রেকগনিশন
                সিস্টেম আপনার কণ্ঠস্বর সঠিকভাবে বুঝতে পারে।
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs">১</span>
                  </div>
                  <p>মাইক্রোফোন বাটনে ক্লিক করুন</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs">২</span>
                  </div>
                  <p>আপনার প্রশ্ন বলুন</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs">৩</span>
                  </div>
                  <p>প্রগতি এআই আপনার প্রশ্নের উত্তর দেবে</p>
                </li>
              </ul>
              <div>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                  এখনই চ্যাট করুন
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-6">
                <div className="aspect-video relative bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="h-24 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 0 rgba(0, 128, 0, 0.4)",
                          "0 0 20px rgba(0, 128, 0, 0.6)",
                          "0 0 0 rgba(0, 128, 0, 0.4)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      <Mic className="h-12 w-12 text-white" />
                    </motion.div>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p>আপনি কি জানতে চান?</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                    <p>বাংলাদেশের স্বাধীনতা যুদ্ধ সম্পর্কে আমাকে বলুন।</p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p>
                      বাংলাদেশের স্বাধীনতা যুদ্ধ ১৯৭১ সালে সংঘটিত হয়েছিল। এটি ৯ মাস স্থায়ী হয়েছিল এবং ১৬ ডিসেম্বর বাংলাদেশ স্বাধীনতা লাভ
                      করে।
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">কিভাবে প্রগতি কাজ করে</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              প্রগতি ব্যবহার করা সহজ এবং সরল। এখানে দেখুন কিভাবে এটি আপনার অধ্যয়নকে উন্নত করতে পারে।
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "১",
                title: "প্রগতি ডিভাইস সেটআপ করুন",
                description: "প্রগতি ডিভাইস সেটআপ করুন এবং আপনার স্মার্টফোনে প্রগতি অ্যাপ ডাউনলোড করুন।",
              },
              {
                step: "২",
                title: "আপনার প্রশ্ন জিজ্ঞাসা করুন",
                description: "আপনার কণ্ঠস্বর ব্যবহার করে ডিভাইসে বা অ্যাপে যেকোনো বিষয়ে প্রশ্ন জিজ্ঞাসা করুন।",
              },
              {
                step: "৩",
                title: "তাৎক্ষণিক উত্তর পান",
                description: "প্রগতি আপনার প্রশ্নের উত্তর দেবে, ব্যাখ্যা করবে এবং আপনার বোঝার জন্য সাহায্য করবে।",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl shadow-md text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-200 to-blue-200/20"></div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/how-it-works">
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                বিস্তারিত জানুন <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Developer Documentation Section */}
      <section id="developers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-sm font-medium text-blue-600 mb-4">
              <Code className="h-4 w-4" />
              <span>ডেভেলপার ডকুমেন্টেশন</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">প্রগতি API ইন্টিগ্রেশন</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              প্রগতি API ব্যবহার করে আপনার অ্যাপ্লিকেশনে এআই ফিচার যোগ করুন। আমাদের API সহজেই ইন্টিগ্রেট করা যায় এবং বাংলা ভাষা সমর্থন করে।
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="rest" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="rest">REST API</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript SDK</TabsTrigger>
                <TabsTrigger value="python">Python SDK</TabsTrigger>
              </TabsList>
              <TabsContent value="rest" className="space-y-8">
                <div className="bg-gray-900 text-gray-100 rounded-xl overflow-hidden shadow-xl">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                    <div className="flex items-center gap-2">
                      <FileCode className="h-4 w-4 text-green-400" />
                      <span className="text-sm font-medium">REST API Example</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>
                        {`// POST /api/progoti/chat
// Request
{
  "prompt": "বাংলাদেশের স্বাধীনতা যুদ্ধ সম্পর্কে আমাকে বলুন",
  "max_tokens": 500,
  "temperature": 0.7,
  "language": "bn"
}

// Response
{
  "id": "chat-12345",
  "created": "2023-05-15T10:30:00Z",
  "response": "বাংলাদেশের স্বাধীনতা যুদ্ধ ১৯৭১ সালে সংঘটিত হয়েছিল...",
  "tokens_used": 320,
  "language": "bn"
}`}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">API এন্ডপয়েন্ট</h3>
                  <p className="mb-4">প্রগতি API-এর মূল এন্ডপয়েন্টগুলো:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white text-xs">১</span>
                      </div>
                      <div>
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">/api/progoti/chat</code>
                        <p className="text-gray-600 mt-1">চ্যাট রেসপন্স জেনারেট করার জন্য</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white text-xs">২</span>
                      </div>
                      <div>
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">/api/progoti/voice</code>
                        <p className="text-gray-600 mt-1">ভয়েস ইনপুট প্রসেস করার জন্য</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                        <span className="text-white text-xs">৩</span>
                      </div>
                      <div>
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">/api/progoti/education</code>
                        <p className="text-gray-600 mt-1">শিক্ষামূলক কন্টেন্ট জেনারেট করার জন্য</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="javascript" className="space-y-8">
                <div className="bg-gray-900 text-gray-100 rounded-xl overflow-hidden shadow-xl">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                    <div className="flex items-center gap-2">
                      <FileCode className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium">JavaScript SDK Example</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>
                        {`// Install: npm install progoti-ai-sdk

import { ProgotiAI } from 'progoti-ai-sdk';

// Initialize with your API key
const progoti = new ProgotiAI('your-api-key');

// Text chat example
async function chatExample() {
  try {
    const response = await progoti.chat({
      prompt: 'বাংলাদেশের স্বাধীনতা যুদ্ধ সম্পর্কে আমাকে বলুন',
      maxTokens: 500,
      temperature: 0.7,
      language: 'bn'
    });
    
    console.log(response.text);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Voice chat example
async function voiceChatExample(audioBlob) {
  try {
    const response = await progoti.voiceChat({
      audio: audioBlob,
      language: 'bn'
    });
    
    console.log(response.text);
    // Play audio response
    const audio = new Audio(response.audioUrl);
    audio.play();
  } catch (error) {
    console.error('Error:', error);
  }
}

chatExample();`}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">JavaScript SDK ইনস্টলেশন</h3>
                  <p className="mb-4">npm বা yarn ব্যবহার করে SDK ইনস্টল করুন:</p>
                  <div className="bg-gray-100 p-3 rounded-lg mb-4">
                    <code>npm install progoti-ai-sdk</code>
                    <br />
                    <code>// অথবা</code>
                    <br />
                    <code>yarn add progoti-ai-sdk</code>
                  </div>
                  <p>আমাদের JavaScript SDK React, Vue, Angular, Node.js সহ সকল জাভাস্ক্রিপ্ট ফ্রেমওয়ার্কের সাথে কাজ করে।</p>
                </div>
              </TabsContent>

              <TabsContent value="python" className="space-y-8">
                <div className="bg-gray-900 text-gray-100 rounded-xl overflow-hidden shadow-xl">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                    <div className="flex items-center gap-2">
                      <FileCode className="h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium">Python SDK Example</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>
                        {`# Install: pip install progoti-ai

import progoti_ai

# Initialize with your API key
progoti = progoti_ai.ProgotiAI(api_key="your-api-key")

# Text chat example
def chat_example():
    try:
        response = progoti.chat(
            prompt="বাংলাদেশের স্বাধীনতা যুদ্ধ সম্পর্কে আমাকে বলুন",
            max_tokens=500,
            temperature=0.7,
            language="bn"
        )
        
        print(response.text)
    except Exception as e:
        print(f"Error: {e}")

# Voice chat example
def voice_chat_example(audio_file_path):
    try:
        response = progoti.voice_chat(
            audio_file=audio_file_path,
            language="bn"
        )
        
        print(response.text)
        # Save audio response
        response.save_audio("response.mp3")
    except Exception as e:
        print(f"Error: {e}")

chat_example()`}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Python SDK ইনস্টলেশন</h3>
                  <p className="mb-4">pip ব্যবহার করে SDK ইনস্টল করুন:</p>
                  <div className="bg-gray-100 p-3 rounded-lg mb-4">
                    <code>pip install progoti-ai</code>
                  </div>
                  <p>
                    আমাদের Python SDK Django, Flask, FastAPI সহ সকল পাইথন ফ্রেমওয়ার্কের সাথে কাজ করে। এছাড়া ডাটা সায়েন্স এবং মেশিন
                    লার্নিং প্রজেক্টেও ব্যবহার করা যায়।
                  </p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <Link href="/developers">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                  ডেভেলপার ডকুমেন্টেশন দেখুন <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-sm font-medium text-blue-600 mb-4">
              <Users className="h-4 w-4" />
              <span>আমাদের টিম</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">প্রগতি টিম</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              আমাদের দক্ষ টিম সদস্যরা প্রগতি প্রজেক্ট তৈরি করেছেন। বাংলাদেশের সেরা প্রতিভাবান ইঞ্জিনিয়ার এবং গবেষকদের নিয়ে আমাদের টিম
              গঠিত।
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "তানভীর আহমেদ",
                role: "প্রজেক্ট লিড",
                image: "/placeholder.svg?height=300&width=300",
                bio: "কম্পিউটার সায়েন্সে পিএইচডি, ১০+ বছরের এআই এবং মেশিন লার্নিং অভিজ্ঞতা।",
              },
              {
                name: "সাদিয়া রহমান",
                role: "এআই রিসার্চার",
                image: "/placeholder.svg?height=300&width=300",
                bio: "ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং বিশেষজ্ঞ, বাংলা ভাষা প্রসেসিং নিয়ে গবেষণা করেন।",
              },
              {
                name: "রাফি হাসান",
                role: "সফটওয়্যার ইঞ্জিনিয়ার",
                image: "/placeholder.svg?height=300&width=300",
                bio: "ফুলস্ট্যাক ডেভেলপার, ৭+ বছরের অভিজ্ঞতা, বিভিন্ন এআই প্রজেক্টে কাজ করেছেন।",
              },
              {
                name: "নাফিসা খান",
                role: "হার্ডওয়্যার ইঞ্জিনিয়ার",
                image: "/placeholder.svg?height=300&width=300",
                bio: "ইলেকট্রনিক্স এবং হার্ডওয়্যার ডিজাইন বিশেষজ্ঞ, আইওটি ডিভাইস ডিজাইনে অভিজ্ঞ।",
              },
              {
                name: "আরিফ হোসেন",
                role: "ভয়েস টেকনোলজি স্পেশালিস্ট",
                image: "/placeholder.svg?height=300&width=300",
                bio: "স্পিচ রেকগনিশন এবং ভয়েস প্রসেসিং বিশেষজ্ঞ, বাংলা ভয়েস টেকনোলজি নিয়ে কাজ করেন।",
              },
              {
                name: "ফারহানা আক্তার",
                role: "ইউজার এক্সপেরিয়েন্স ডিজাইনার",
                image: "/placeholder.svg?height=300&width=300",
                bio: "১০+ বছরের UX/UI ডিজাইন অভিজ্ঞতা, এআই ইন্টারফেস ডিজাইনে বিশেষজ্ঞ।",
              },
              {
                name: "মাহমুদুল হাসান",
                role: "ডাটা সায়েন্টিস্ট",
                image: "/placeholder.svg?height=300&width=300",
                bio: "বাংলা ভাষার ডাটা প্রসেসিং এবং মেশিন লার্নিং মডেল তৈরিতে অভিজ্ঞ।",
              },
              {
                name: "সুমাইয়া জামান",
                role: "এডুকেশন কন্টেন্ট স্পেশালিস্ট",
                image: "/placeholder.svg?height=300&width=300",
                bio: "শিক্ষা বিশেষজ্ঞ, বাংলাদেশের পাঠ্যক্রম অনুযায়ী এআই কন্টেন্ট তৈরি করেন।",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  <div className="absolute top-2 right-2">
                    <Image
                      src="/bangladesh-flag.png"
                      alt="বাংলাদেশের পতাকা"
                      width={24}
                      height={14}
                      className="h-4 w-auto"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                      <User className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/10"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 200 + 50}px`,
                    height: `${Math.random() * 200 + 50}px`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.2 }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>

            <div className="absolute top-4 right-4">
              <Image src="/bangladesh-flag.png" alt="বাংলাদেশের পতাকা" width={40} height={24} className="h-6 w-auto" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">আজই প্রগতির সাথে আপনার অধ্যয়ন শুরু করুন</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                বাংলাদেশের প্রথম এআই-ভিত্তিক ফিজিক্যাল স্টাডি অ্যাসিস্ট্যান্ট যা আপনার অধ্যয়নকে আরও সহজ, দক্ষ এবং আনন্দদায়ক করে তোলে।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">এখনই চ্যাট করুন</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  আরও জানুন
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
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
              <div className="mt-4 flex items-center gap-2">
                <Image src="/bangladesh-flag.png" alt="বাংলাদেশের পতাকা" width={24} height={14} className="h-4 w-auto" />
                <span className="text-gray-400">বাংলাদেশে তৈরি</span>
              </div>
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
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84" />
                    </svg>
                  </div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} প্রগতি। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>

      {/* Chat Interface */}
      <ChatInterface />
    </div>
  )
}
