"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mic, ArrowLeft, Mail, Phone, MessageSquare, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"

export default function SupportPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">সাহায্য এবং সাপোর্ট</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            আমরা আপনাকে সাহায্য করতে এখানে আছি। আপনার যেকোনো প্রশ্ন বা সমস্যা সমাধানে আমাদের সাথে যোগাযোগ করুন।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">আমাদের সাথে যোগাযোগ করুন</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    নাম
                  </label>
                  <Input id="name" placeholder="আপনার নাম" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    ইমেইল
                  </label>
                  <Input id="email" type="email" placeholder="আপনার ইমেইল" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  বিষয়
                </label>
                <Input id="subject" placeholder="আপনার মেসেজের বিষয়" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  মেসেজ
                </label>
                <Textarea id="message" placeholder="আপনার মেসেজ লিখুন" rows={5} />
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 to-blue-600 text-white">
                পাঠান
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">ইমেইল</h3>
                  <p className="text-gray-700">info@progoti.ai</p>
                  <p className="text-gray-700">support@progoti.ai</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">ফোন</h3>
                  <p className="text-gray-700">+880 1700 000000</p>
                  <p className="text-gray-700">+880 2 9876543</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">লাইভ চ্যাট</h3>
                  <p className="text-gray-700">সকাল ৯টা থেকে রাত ৯টা পর্যন্ত</p>
                  <Button variant="link" className="p-0 text-blue-600 hover:text-blue-700">
                    চ্যাট শুরু করুন
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">সাধারণ প্রশ্নাবলী</h3>
                  <p className="text-gray-700">আমাদের সাধারণ প্রশ্নাবলী দেখুন</p>
                  <Button variant="link" className="p-0 text-blue-600 hover:text-blue-700">
                    এফএকিউ দেখুন
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            সাধারণ প্রশ্নাবলী
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "প্রগতি ডিভাইস কিভাবে ব্যবহার করব?",
                answer:
                  "প্রগতি ডিভাইস ব্যবহার করা খুবই সহজ। ডিভাইসটি চার্জ করুন, অন করুন এবং আপনার প্রশ্ন জিজ্ঞাসা করুন। বিস্তারিত জানতে আমাদের টিউটোরিয়াল দেখুন।",
              },
              {
                question: "প্রগতি অ্যাপ কোথায় পাব?",
                answer: "প্রগতি অ্যাপ গুগল প্লে স্টোর এবং অ্যাপল অ্যাপ স্টোরে পাওয়া যায়। সার্চ বারে 'প্রগতি এআই' লিখে সার্চ করুন।",
              },
              {
                question: "প্রগতি ডিভাইস কি ওয়াইফাই ছাড়া কাজ করে?",
                answer: "প্রো প্যাকেজে অফলাইন মোড সাপোর্ট করে। অন্যান্য প্যাকেজে ইন্টারনেট সংযোগ প্রয়োজন।",
              },
              {
                question: "প্রগতি ডিভাইসের ওয়ারেন্টি কত দিন?",
                answer:
                  "প্যাকেজ অনুযায়ী ওয়ারেন্টি ভিন্ন। স্টার্টার প্যাকেজে ৩ মাস, প্রিমিয়াম প্যাকেজে ৬ মাস এবং প্রো প্যাকেজে ১২ মাস ওয়ারেন্টি।",
              },
              {
                question: "প্রগতি ডিভাইস কিভাবে আপডেট করব?",
                answer: "প্রগতি অ্যাপের মাধ্যমে আপনার ডিভাইস আপডেট করতে পারবেন। অ্যাপে 'ডিভাইস আপডেট' অপশনে যান।",
              },
              {
                question: "প্রগতি ডিভাইস কি ইংরেজি ভাষা সাপোর্ট করে?",
                answer: "হ্যাঁ, প্রগতি ডিভাইস বাংলা ছাড়াও ইংরেজি এবং অন্যান্য ভাষা সাপোর্ট করে।",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 to-blue-600 text-white">
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
