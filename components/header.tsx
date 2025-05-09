"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mic, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "হোম" },
    { href: "/features", label: "বৈশিষ্ট্য" },
    { href: "/how-it-works", label: "কিভাবে কাজ করে" },
    { href: "/developers", label: "ডেভেলপার" },
    { href: "/#team", label: "টিম" },
  ]

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname?.startsWith(path)
  }

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrollY > 50 ? "rgba(255, 255, 255, 0.9)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
        boxShadow: scrollY > 50 ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
            <Mic className="h-5 w-5 text-white" />
          </div>
          <h1
            className={cn(
              "text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent",
              scrollY > 50 ? "text-xl" : "text-2xl",
            )}
          >
            প্রগতি
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-gray-700 hover:text-blue-600 transition-colors",
                isActive(item.href) && "text-blue-600 font-medium",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Image src="/bangladesh-flag.png" alt="বাংলাদেশের পতাকা" width={24} height={14} className="h-4 w-auto" />
          <Button className="hidden md:flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
            বিজ্ঞান প্রকল্প
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">মেনু খুলুন</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <SheetHeader className="mb-6">
                <SheetTitle>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Mic className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      প্রগতি
                    </span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "py-2 px-4 rounded-md transition-colors",
                      isActive(item.href) ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-100",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="h-px bg-gray-200 my-2"></div>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                >
                  বিজ্ঞান প্রকল্প
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
