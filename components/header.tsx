"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between md:py-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">KC</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-primary text-lg">Kilifi County</h1>
            <p className="text-xs text-muted-foreground">Government</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#why" className="text-foreground hover:text-primary transition">
            Why Invest
          </a>
          <a href="#opportunities" className="text-foreground hover:text-primary transition">
            Opportunities
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition">
            About Us
          </a>
           <a href="#news" className="text-foreground hover:text-primary transition">
            News
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border p-4 md:hidden flex flex-col gap-4">
            <a href="#why" className="text-foreground hover:text-primary transition">
              Why Invest
            </a>
            <a href="#opportunities" className="text-foreground hover:text-primary transition">
              Opportunities
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition">
              About Us
            </a>
           <a href="#news" className="text-foreground hover:text-primary transition">
              News
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
