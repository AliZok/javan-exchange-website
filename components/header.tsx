"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { smoothScroll } from "@/lib/smooth-scroll"

const navItems = [
  { label: "صفحه اصلی", href: "#" },
  { label: "نرخ ارز", href: "#rates" },
  { label: "تبدیل ارز", href: "#converter" },
  { label: "خدمات", href: "#services" },
  { label: "تماس با ما", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="صرافی جوان"
              width={120}
              height={60}
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={(e) => {
                  e.preventDefault()
                  smoothScroll(item.href)
                }}
                className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="منو"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScroll(item.href)
                    setMobileMenuOpen(false)
                  }}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2 text-right cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
