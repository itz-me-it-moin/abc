"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Mic,
  BookOpen,
  Brain,
  Clock,
  Users,
  ArrowLeft,
  Smartphone,
  Headphones,
  Sparkles,
  Globe,
  BookMarked,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function FeaturesPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">প্রগতির সকল বৈশিষ্ট্য</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            প্রগতি ফিজিক্যাল ডিভাইস এবং মোবাইল অ্যাপের সমন্বয়ে তৈরি, যা আপনার অধ্যয়নকে আরও সহজ, দক্ষ এবং আনন্দদায়ক করে তোলে।
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
              icon: <BookMarked className="h-6 w-6 text-blue-600" />,
              title: "বাংলাদেশী পাঠ্যক্রম সমর্থন",
              description: "বাংলাদেশের পাঠ্যক্রম অনুযায়ী তৈরি করা। এসএসসি, এইচএসসি এবং বিশ্ববিদ্যালয় পর্যায়ের বিষয়গুলি অন্তর্ভুক্ত।",
            },
            {
              icon: <Smartphone className="h-6 w-6 text-blue-600" />,
              title: "ডিভাইস এবং অ্যাপ সিঙ্ক",
              description: "আপনার ফিজিক্যাল ডিভাইস এবং মোবাইল অ্যাপ সিঙ্ক করে রাখুন। যেকোনো ডিভাইসে আপনার অধ্যয়ন চালিয়ে যান।",
            },
            {
              icon: <Headphones className="h-6 w-6 text-blue-600" />,
              title: "উচ্চ-মানের অডিও",
              description: "ক্রিস্টাল ক্লিয়ার স্পিকার এবং উন্নত মাইক্রোফোন সিস্টেম যা আপনার কণ্ঠস্বর সঠিকভাবে শুনতে পারে।",
            },
            {
              icon: <Sparkles className="h-6 w-6 text-blue-600" />,
              title: "অফলাইন অ্যাকসেস",
              description: "ইন্টারনেট সংযোগ ছাড়াও প্রগতি ব্যবহার করুন। অন-ডিভাইস এআই প্রসেসিং আপনাকে যেকোনো সময় সাহায্য করবে।",
            },
            {
              icon: <Globe className="h-6 w-6 text-blue-600" />,
              title: "বহুভাষিক সমর্থন",
              description: "বাংলার পাশাপাশি ইংরেজি এবং অন্যান্য ভাষায়ও প্রশ্ন করতে পারেন। বহুভাষিক শিক্ষার সুবিধা নিন।",
            },
            {
              icon: <Zap className="h-6 w-6 text-blue-600" />,
              title: "দীর্ঘ ব্যাটারি লাইফ",
              description: "প্রগতি ডিভাইসের ব্যাটারি একবার চার্জে ১২ ঘন্টা পর্যন্ত চলে। দীর্ঘ অধ্যয়ন সেশনের জন্য আদর্শ।",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-blue-600" />,
              title: "নিয়মিত আপডেট",
              description: "নিয়মিত সফটওয়্যার আপডেট এবং নতুন বৈশিষ্ট্য যোগ করা হয়। আপনার প্রগতি ডিভাইস সর্বদা আপডেটেড থাকবে।",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
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
