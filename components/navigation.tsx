"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { SakuraLogo } from "./cute-icons"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <SakuraLogo className="w-10 h-10 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold text-foreground leading-none tracking-tight">
                JK&apos;s
              </span>
              <span className="text-[10px] sm:text-xs text-primary font-medium tracking-widest">HAIR SALON</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Gallery
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200">
            <a 
              href="#services" 
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
            >
              Services
            </a>
            <a 
              href="#gallery" 
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
            >
              Gallery
            </a>
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
