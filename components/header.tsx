"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">SoftwareCo</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Portfolio
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium">
                Portfolio
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
