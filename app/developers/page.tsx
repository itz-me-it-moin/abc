"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Mic, ArrowLeft, Code, FileCode, Github, Copy, Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import Header from "@/components/header"

// Define a custom color palette
const colors = {
  primary: {
    light: "from-cyan-400 to-blue-500",
    default: "from-cyan-500 to-blue-500",
    dark: "from-cyan-600 to-blue-600",
  },
  secondary: {
    light: "from-red-400 to-green-500",
    default: "from-red-500 to-green-500",
    dark: "from-red-600 to-green-600",
  },
  background: {
    light: "from-cyan-50 to-blue-50",
    paper: "bg-white",
    code: "bg-slate-800",
  },
  text: {
    primary: "text-slate-900",
    secondary: "text-slate-700",
    accent: "text-blue-600",
  },
}

export default function DevelopersPage() {
  const [copiedTab, setCopiedTab] = useState<string | null>(null)

  const copyToClipboard = (text: string, tab: string) => {
    navigator.clipboard.writeText(text)
    setCopiedTab(tab)
    setTimeout(() => setCopiedTab(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 text-slate-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 md:py-24">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-600 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          হোম পেজে ফিরে যান
        </Link>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-sm font-medium text-blue-800 mb-4">
            <Code className="h-4 w-4" />
            <span>ডেভেলপার ডকুমেন্টেশন</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">প্রগতি API ডকুমেন্টেশন</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            প্রগতি API ব্যবহার করে আপনার অ্যাপ্লিকেশনে এআই ফিচার যোগ করুন। আমাদের API সহজেই ইন্টিগ্রেট করা যায় এবং বাংলা ভাষা সমর্থন করে।
          </p>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          className="mb-16 bg-white p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">ওভারভিউ</h2>
          <p className="mb-4">
            প্রগতি API হল একটি শক্তিশালী এআই API যা আপনার অ্যাপ্লিকেশনে বাংলা ভাষা সমর্থন সহ এআই ফিচার যোগ করতে সাহায্য করে। এটি
            নিম্নলিখিত ফিচারগুলি সমর্থন করে:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div>
                <strong>টেক্সট চ্যাট</strong> - বাংলা এবং ইংরেজি ভাষায় প্রশ্নের উত্তর দেয়
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div>
                <strong>ভয়েস চ্যাট</strong> - বাংলা ভাষায় কথা বলে প্রশ্ন করা এবং উত্তর পাওয়া
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div>
                <strong>শিক্ষামূলক কন্টেন্ট</strong> - বাংলাদেশের পাঠ্যক্রম অনুযায়ী শিক্ষামূলক কন্টেন্ট জেনারেট করা
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div>
                <strong>ইমেজ জেনারেশন</strong> - টেক্সট থেকে বাংলাদেশ-থিমড ইমেজ জেনারেট করা
              </div>
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
              API কী পান <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
              <Github className="mr-2 h-4 w-4" /> GitHub রিপোজিটরি
            </Button>
          </div>
        </motion.div>

        {/* API Documentation */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">API ডকুমেন্টেশন</h2>

          <Tabs defaultValue="rest" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="rest">REST API</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript SDK</TabsTrigger>
              <TabsTrigger value="python">Python SDK</TabsTrigger>
            </TabsList>

            <TabsContent value="rest" className="space-y-8">
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">API এন্ডপয়েন্ট</h3>
                <p className="mb-4">প্রগতি API-এর বেস URL:</p>
                <div className="bg-gray-100 p-3 rounded-lg mb-6 flex justify-between items-center">
                  <code>https://api.progoti.ai/v1</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("https://api.progoti.ai/v1", "base-url")}
                    className="h-8 w-8"
                  >
                    {copiedTab === "base-url" ? (
                      <Check className="h-4 w-4 text-blue-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>

                <p className="mb-4">প্রগতি API-এর মূল এন্ডপয়েন্টগুলো:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                      <span className="text-white text-xs">১</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">/chat</code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard("https://api.progoti.ai/v1/chat", "chat-endpoint")}
                          className="h-8 w-8"
                        >
                          {copiedTab === "chat-endpoint" ? (
                            <Check className="h-4 w-4 text-blue-600" />
                          ) : (
                            <Copy className="h-4 w-4 text-gray-500" />
                          )}
                        </Button>
                      </div>
                      <p className="text-gray-600 mt-1">চ্যাট রেসপন্স জেনারেট করার জন্য</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                      <span className="text-white text-xs">২</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">/voice</code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard("https://api.progoti.ai/v1/voice", "voice-endpoint")}
                          className="h-8 w-8"
                        >
                          {copiedTab === "voice-endpoint" ? (
                            <Check className="h-4 w-4 text-blue-600" />
                          ) : (
                            <Copy className="h-4 w-4 text-gray-500" />
                          )}
                        </Button>
                      </div>
                      <p className="text-gray-600 mt-1">ভয়েস ইনপুট প্রসেস করার জন্য</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                      <span className="text-white text-xs">৩</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">/education</code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard("https://api.progoti.ai/v1/education", "education-endpoint")}
                          className="h-8 w-8"
                        >
                          {copiedTab === "education-endpoint" ? (
                            <Check className="h-4 w-4 text-blue-600" />
                          ) : (
                            <Copy className="h-4 w-4 text-gray-500" />
                          )}
                        </Button>
                      </div>
                      <p className="text-gray-600 mt-1">শিক্ষামূলক কন্টেন্ট জেনারেট করার জন্য</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                      <span className="text-white text-xs">৪</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">/images</code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard("https://api.progoti.ai/v1/images", "images-endpoint")}
                          className="h-8 w-8"
                        >
                          {copiedTab === "images-endpoint" ? (
                            <Check className="h-4 w-4 text-blue-600" />
                          ) : (
                            <Copy className="h-4 w-4 text-gray-500" />
                          )}
                        </Button>
                      </div>
                      <p className="text-gray-600 mt-1">ইমেজ জেনারেট করার জন্য</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 text-gray-100 rounded-xl overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 bg-blue-900">
                  <div className="flex items-center gap-2">
                    <FileCode className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm font-medium">চ্যাট API উদাহরণ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(
                          `// POST /api/progoti/chat
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
}`,
                          "chat-example",
                        )
                      }
                      className="h-8 w-8 text-gray-300 hover:text-white"
                    >
                      {copiedTab === "chat-example" ? (
                        <Check className="h-4 w-4 text-cyan-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
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

              <div className="bg-slate-800 text-gray-100 rounded-xl overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 bg-blue-900">
                  <div className="flex items-center gap-2">
                    <FileCode className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm font-medium">ভয়েস API উদাহরণ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(
                          `// POST /api/progoti/voice
// Request (multipart/form-data)
{
  "audio": [binary audio file],
  "language": "bn",
  "response_format": "audio" // or "text"
}

// Response
{
  "id": "voice-12345",
  "created": "2023-05-15T10:35:00Z",
  "text": "বাংলাদেশের স্বাধীনতা যুদ্ধ সম্পর্কে আমাকে বলুন",
  "response": "বাংলাদেশের স্বাধীনতা যুদ্ধ ১৯৭১ সালে সংঘটিত হয়েছিল...",
  "audio_url": "https://api.progoti.ai/v1/audio/response-12345.mp3" // if response_format is "audio"
}`,
                          "voice-example",
                        )
                      }
                      className="h-8 w-8 text-gray-300 hover:text-white"
                    >
                      {copiedTab === "voice-example" ? (
                        <Check className="h-4 w-4 text-cyan-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm">
                    <code>
                      {`// POST /api/progoti/voice
// Request (multipart/form-data)
{
  "audio": [binary audio file],
  "language": "bn",
  "response_format": "audio" // or "text"
}

// Response
{
  "id": "voice-12345",
  "created": "2023-05-15T10:35:00Z",
  "text": "বাংলাদেশের স্বাধীনতা যুদ্ধ সম্পর্কে আমাকে বলুন",
  "response": "বাংলাদেশের স্বাধীনতা যুদ্ধ ১৯৭১ সালে সংঘটিত হয়েছিল...",
  "audio_url": "https://api.progoti.ai/v1/audio/response-12345.mp3" // if response_format is "audio"
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">অথেনটিকেশন</h3>
                <p className="mb-4">প্রগতি API ব্যবহার করতে API কী প্রয়োজন। API কী হেডারে যোগ করুন:</p>
                <div className="bg-gray-100 p-3 rounded-lg mb-4">
                  <code>Authorization: Bearer YOUR_API_KEY</code>
                </div>
                <p>
                  API কী পেতে{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    ডেভেলপার পোর্টালে
                  </a>{" "}
                  যান এবং একটি নতুন প্রজেক্ট তৈরি করুন।
                </p>
              </div>
            </TabsContent>

            <TabsContent value="javascript" className="space-y-8">
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">JavaScript SDK ইনস্টলেশন</h3>
                <p className="mb-4">npm বা yarn ব্যবহার করে SDK ইনস্টল করুন:</p>
                <div className="bg-gray-100 p-3 rounded-lg mb-4 flex justify-between items-center">
                  <code>npm install progoti-ai-sdk</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("npm install progoti-ai-sdk", "npm-install")}
                    className="h-8 w-8"
                  >
                    {copiedTab === "npm-install" ? (
                      <Check className="h-4 w-4 text-blue-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg mb-4 flex justify-between items-center">
                  <code>yarn add progoti-ai-sdk</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("yarn add progoti-ai-sdk", "yarn-add")}
                    className="h-8 w-8"
                  >
                    {copiedTab === "yarn-add" ? (
                      <Check className="h-4 w-4 text-blue-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
                <p>আমাদের JavaScript SDK React, Vue, Angular, Node.js সহ সকল জাভাস্ক্রিপ্ট ফ্রেমওয়ার্কের সাথে কাজ করে।</p>
              </div>

              <div className="bg-slate-800 text-gray-100 rounded-xl overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 bg-blue-900">
                  <div className="flex items-center gap-2">
                    <FileCode className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-medium">JavaScript SDK উদাহরণ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(
                          `// Install: npm install progoti-ai-sdk

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

chatExample();`,
                          "js-example",
                        )
                      }
                      className="h-8 w-8 text-gray-300 hover:text-white"
                    >
                      {copiedTab === "js-example" ? (
                        <Check className="h-4 w-4 text-cyan-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
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

              <div className="bg-slate-800 text-gray-100 rounded-xl overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 bg-blue-900">
                  <div className="flex items-center gap-2">
                    <FileCode className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-medium">React উদাহরণ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(
                          `import { useState } from 'react';
import { ProgotiAI } from 'progoti-ai-sdk';

// Initialize the SDK
const progoti = new ProgotiAI('your-api-key');

function ProgotiChatComponent() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const result = await progoti.chat({
        prompt: input,
        language: 'bn'
      });
      
      setResponse(result.text);
    } catch (error) {
      console.error('Error:', error);
      setResponse('দুঃখিত, একটি সমস্যা হয়েছে।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">প্রগতি এআই চ্যাট</h2>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="আপনার প্রশ্ন লিখুন..."
          className="w-full p-2 border rounded mb-2"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {loading ? 'অপেক্ষা করুন...' : 'জিজ্ঞাসা করুন'}
        </button>
      </form>
      
      {response && (
        <div className="p-3 bg-gray-100 rounded">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default ProgotiChatComponent;`,
                          "react-example",
                        )
                      }
                      className="h-8 w-8 text-gray-300 hover:text-white"
                    >
                      {copiedTab === "react-example" ? (
                        <Check className="h-4 w-4 text-cyan-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm">
                    <code>
                      {`import { useState } from 'react';
import { ProgotiAI } from 'progoti-ai-sdk';

// Initialize the SDK
const progoti = new ProgotiAI('your-api-key');

function ProgotiChatComponent() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const result = await progoti.chat({
        prompt: input,
        language: 'bn'
      });
      
      setResponse(result.text);
    } catch (error) {
      console.error('Error:', error);
      setResponse('দুঃখিত, একটি সমস্যা হয়েছে।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">প্রগতি এআই চ্যাট</h2>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="আপনার প্রশ্ন লিখুন..."
          className="w-full p-2 border rounded mb-2"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {loading ? 'অপেক্ষা করুন...' : 'জিজ্ঞাসা করুন'}
        </button>
      </form>
      
      {response && (
        <div className="p-3 bg-gray-100 rounded">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default ProgotiChatComponent;`}
                    </code>
                  </pre>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="python" className="space-y-8">
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Python SDK ইনস্টলেশন</h3>
                <p className="mb-4">pip ব্যবহার করে SDK ইনস্টল করুন:</p>
                <div className="bg-gray-100 p-3 rounded-lg mb-4 flex justify-between items-center">
                  <code>pip install progoti-ai</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("pip install progoti-ai", "pip-install")}
                    className="h-8 w-8"
                  >
                    {copiedTab === "pip-install" ? (
                      <Check className="h-4 w-4 text-blue-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
                <p>
                  আমাদের Python SDK Django, Flask, FastAPI সহ সকল পাইথন ফ্রেমওয়ার্কের সাথে কাজ করে। এছাড়া ডাটা সায়েন্স এবং মেশিন
                  লার্নিং প্রজেক্টেও ব্যবহার করা যায়।
                </p>
              </div>

              <div className="bg-slate-800 text-gray-100 rounded-xl overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 bg-blue-900">
                  <div className="flex items-center gap-2">
                    <FileCode className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium">Python SDK উদাহরণ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(
                          `# Install: pip install progoti-ai

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

              <div className="bg-slate-800 text-gray-100 rounded-xl overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 bg-blue-900">
                  <div className="flex items-center gap-2">
                    <FileCode className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium">Django উদাহরণ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(
                          `# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import progoti_ai

# Initialize the SDK
progoti = progoti_ai.ProgotiAI(api_key="your-api-key")

@csrf_exempt
def chat_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            prompt = data.get('prompt', '')
            
            if not prompt:
                return JsonResponse({'error': 'Prompt is required'}, status=400)
                
            response = progoti.chat(
                prompt=prompt,
                language="bn"
            )
            
            return JsonResponse({
                'response': response
            })
            
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
            
    return JsonResponse({'error': 'Method not allowed'}, status=405)`,
                          "django-example",
                        )
                      }
                      className="h-8 w-8 text-gray-300 hover:text-white"
                    >
                      {copiedTab === "django-example" ? (
                        <Check className="h-4 w-4 text-cyan-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm">
                    <code>
                      {`# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import progoti_ai

# Initialize the SDK
progoti = progoti_ai.ProgotiAI(api_key="your-api-key")

@csrf_exempt
def chat_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            prompt = data.get('prompt', '')
            
            if not prompt:
                return JsonResponse({'error': 'Prompt is required'}, status=400)
                
            response = progoti.chat(
                prompt=prompt,
                language="bn"\
            )
            
            return JsonResponse({
                'response': response.text,
            })
            
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
            
    return JsonResponse({'error': 'Method not allowed'}, status=405)`}
                    </code>
                  </pre>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Rate Limits Section */}
        <motion.div
          className="mb-16 bg-white p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">রেট লিমিট</h2>
          <p className="mb-6">
            প্রগতি API-এর রেট লিমিট আপনার প্ল্যান অনুযায়ী নির্ধারিত হয়। নিম্নলিখিত টেবিলে বিভিন্ন প্ল্যানের রেট লিমিট দেখানো হয়েছে:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-100 to-blue-100">
                  <th className="border p-3 text-left">প্ল্যান</th>
                  <th className="border p-3 text-left">রিকোয়েস্ট/মিনিট</th>
                  <th className="border p-3 text-left">রিকোয়েস্ট/দিন</th>
                  <th className="border p-3 text-left">টোকেন/মিনিট</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border p-3">ফ্রি</td>
                  <td className="border p-3">10</td>
                  <td className="border p-3">1,000</td>
                  <td className="border p-3">10,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">বেসিক</td>
                  <td className="border p-3">60</td>
                  <td className="border p-3">10,000</td>
                  <td className="border p-3">100,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-3">প্রো</td>
                  <td className="border p-3">120</td>
                  <td className="border p-3">50,000</td>
                  <td className="border p-3">500,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">এন্টারপ্রাইজ</td>
                  <td className="border p-3">কাস্টম</td>
                  <td className="border p-3">কাস্টম</td>
                  <td className="border p-3">কাস্টম</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            রেট লিমিট বাড়াতে বা কাস্টম প্ল্যান সম্পর্কে জানতে{" "}
            <a href="#" className="text-blue-600 hover:underline">
              আমাদের সাথে যোগাযোগ করুন
            </a>
            ।
          </p>
        </motion.div>

        {/* Support Section */}
        <motion.div
          className="mb-16 bg-white p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">সাপোর্ট</h2>
          <p className="mb-6">প্রগতি API সম্পর্কে কোন প্রশ্ন বা সমস্যা থাকলে আমাদের সাথে যোগাযোগ করুন। আমরা সাহায্য করতে সর্বদা প্রস্তুত।</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-cyan-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">ডকুমেন্টেশন</h3>
              <p className="mb-4">আমাদের বিস্তারিত ডকুমেন্টেশন দেখুন।</p>
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                ডকুমেন্টেশন দেখুন
              </Button>
            </div>
            <div className="bg-white border border-cyan-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="mb-4">আমাদের GitHub রিপোজিটরি দেখুন এবং কন্ট্রিবিউট করুন।</p>
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </div>
            <div className="bg-white border border-cyan-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">ইমেইল সাপোর্ট</h3>
              <p className="mb-4">আমাদের ইমেইল করুন যেকোনো প্রশ্ন বা সমস্যার জন্য।</p>
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                api-support@progoti.ai
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
              হোম পেজে ফিরে যান
            </Button>
          </Link>
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
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} প্রগতি। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
