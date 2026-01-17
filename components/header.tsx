"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between md:py-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/download.png"
              alt="Kilifi Investment Corporation Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>

          <div className="hidden sm:block leading-tight">
            <h1 className="font-bold text-primary text-lg">
              Kilifi Investment Corporation
            </h1>
            <p className="text-xs text-muted-foreground">
              County Government of Kilifi
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#why" className="hover:text-primary transition">
            Why Invest
          </a>
          <a href="#opportunities" className="hover:text-primary transition">
            Opportunities
          </a>
          <a href="#about" className="hover:text-primary transition">
            About Us
          </a>
          <a href="#news" className="hover:text-primary transition">
            News
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border p-4 md:hidden flex flex-col gap-4">
            <a href="#why" onClick={() => setIsOpen(false)}>Why Invest</a>
            <a href="#opportunities" onClick={() => setIsOpen(false)}>Opportunities</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="#news" onClick={() => setIsOpen(false)}>News</a>
          </div>
        )}
      </nav>
    </header>
  )
}
