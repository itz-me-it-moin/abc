"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mic, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Header from "@/components/header"

export default function PricingPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">আমাদের মূল্য প্যাকেজ</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            আমরা সাশ্রয়ী মূল্যে প্রগতি ডিভাইস এবং অ্যাপ অফার করি। আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "স্টার্টার",
              price: "৪,৯৯৯",
              description: "শিক্ষার্থীদের জন্য আদর্শ",
              features: [
                "প্রগতি ডিভাইস",
                "বেসিক অ্যাপ অ্যাকসেস",
                "৬ মাস সাপোর্ট",
                "এসএসসি পাঠ্যক্রম",
                "৩ মাস ওয়ারেন্টি",
                "১ টি ডিভাইস সাপোর্ট",
                "বেসিক ভয়েস কমান্ড",
              ],
            },
            {
              name: "প্রিমিয়াম",
              price: "৭,৯৯৯",
              description: "সবচেয়ে জনপ্রিয়",
              features: [
                "প্রগতি ডিভাইস",
                "প্রিমিয়াম অ্যাপ অ্যাকসেস",
                "১২ মাস সাপোর্ট",
                "এসএসসি এবং এইচএসসি পাঠ্যক্রম",
                "৬ মাস ওয়ারেন্টি",
                "ফ্রি আপডেট",
                "৩ টি ডিভাইস সাপোর্ট",
                "অ্যাডভান্সড ভয়েস কমান্ড",
                "ক্লাউড স্টোরেজ",
              ],
              highlighted: true,
            },
            {
              name: "প্রো",
              price: "১২,৯৯৯",
              description: "বিশ্ববিদ্যালয় শিক্ষার্থীদের জন্য",
              features: [
                "প্রগতি প্রো ডিভাইস",
                "আনলিমিটেড অ্যাপ অ্যাকসেস",
                "২৪ মাস সাপোর্ট",
                "সকল পাঠ্যক্রম",
                "১২ মাস ওয়ারেন্টি",
                "ফ্রি আপডেট",
                "আনলিমিটেড ডিভাইস সাপোর্ট",
                "প্রিমিয়াম ভয়েস কমান্ড",
                "আনলিমিটেড ক্লাউড স্টোরেজ",
                "প্রিমিয়াম সাপোর্ট",
                "অফলাইন মোড",
              ],
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              className={cn(
                "bg-white p-6 rounded-xl shadow-md relative overflow-hidden",
                plan.highlighted ? "border-2 border-blue-500 transform scale-105" : "",
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-3 py-1 rounded-bl-lg">
                    সেরা মূল্য
                  </div>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold">৳</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={cn(
                  "w-full",
                  plan.highlighted
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    : "bg-white border border-blue-500 text-blue-600 hover:bg-blue-50",
                )}
              >
                এখনই কিনুন
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-24 max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            প্যাকেজ তুলনা
          </motion.h2>

          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-50 to-blue-50">
                    <th className="py-4 px-6 text-left">বৈশিষ্ট্য</th>
                    <th className="py-4 px-6 text-center">স্টার্টার</th>
                    <th className="py-4 px-6 text-center bg-gradient-to-r from-cyan-100 to-blue-100">প্রিমিয়াম</th>
                    <th className="py-4 px-6 text-center">প্রো</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "ডিভাইস টাইপ", starter: "বেসিক", premium: "স্ট্যান্ডার্ড", pro: "প্রিমিয়াম" },
                    { feature: "অ্যাপ অ্যাকসেস", starter: "বেসিক", premium: "প্রিমিয়াম", pro: "আনলিমিটেড" },
                    { feature: "সাপোর্ট", starter: "৬ মাস", premium: "১২ মাস", pro: "২৪ মাস" },
                    { feature: "পাঠ্যক্রম", starter: "এসএসসি", premium: "এসএসসি, এইচএসসি", pro: "সকল" },
                    { feature: "ওয়ারেন্টি", starter: "৩ মাস", premium: "৬ মাস", pro: "১২ মাস" },
                    { feature: "ডিভাইস সাপোর্ট", starter: "১ টি", premium: "৩ টি", pro: "আনলিমিটেড" },
                    { feature: "ভয়েস কমান্ড", starter: "বেসিক", premium: "অ্যাডভান্সড", pro: "প্রিমিয়াম" },
                    { feature: "ক্লাউড স্টোরেজ", starter: "না", premium: "১০ জিবি", pro: "আনলিমিটেড" },
                    { feature: "অফলাইন মোড", starter: "না", premium: "না", pro: "হ্যাঁ" },
                    { feature: "প্রিমিয়াম সাপোর্ট", starter: "না", premium: "না", pro: "হ্যাঁ" },
                    { feature: "মূল্য", starter: "৳৪,৯৯৯", premium: "৳৭,৯৯৯", pro: "৳১২,৯৯৯" },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-6 font-medium">{row.feature}</td>
                      <td className="py-3 px-6 text-center">{row.starter}</td>
                      <td className="py-3 px-6 text-center bg-gradient-to-r from-cyan-50 to-blue-50">{row.premium}</td>
                      <td className="py-3 px-6 text-center">{row.pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            সাধারণ প্রশ্নাবলী
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                question: "প্রগতি ডিভাইস কিনতে কত সময় লাগবে?",
                answer: "অর্ডার করার পর ঢাকার মধ্যে ২৪ ঘন্টা এবং ঢাকার বাইরে ৪৮-৭২ ঘন্টার মধ্যে ডেলিভারি করা হয়।",
              },
              {
                question: "প্রগতি ডিভাইস কি রিটার্ন করা যাবে?",
                answer: "হ্যাঁ, ডেলিভারির ৭ দিনের মধ্যে আপনি প্রগতি ডিভাইস রিটার্ন করতে পারেন। তবে ডিভাইস অক্ষত অবস্থায় থাকতে হবে।",
              },
              {
                question: "প্রগতি অ্যাপ কি বিনামূল্যে?",
                answer: "প্রগতি অ্যাপ ডাউনলোড করা বিনামূল্যে, কিন্তু পূর্ণ ফিচার ব্যবহার করতে প্রগতি ডিভাইস কিনতে হবে।",
              },
              {
                question: "প্রগতি ডিভাইস কি অফলাইনে কাজ করে?",
                answer: "প্রো প্যাকেজে অফলাইন মোড সাপোর্ট করে। অন্যান্য প্যাকেজে ইন্টারনেট সংযোগ প্রয়োজন।",
              },
              {
                question: "প্রগতি ডিভাইসের ব্যাটারি লাইফ কত?",
                answer: "প্রগতি ডিভাইসের ব্যাটারি একবার চার্জে ৮-১২ ঘন্টা পর্যন্ত চলে, ব্যবহারের উপর নির্ভর করে।",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
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
