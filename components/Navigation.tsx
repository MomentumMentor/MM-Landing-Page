'use client'

import { useState, useEffect } from 'react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg border-b-2 border-[#1a2744]/10'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            aria-label="Go to home"
          >
            <img
              src="/MMLOGO.png"
              alt="Momentum Mentor"
              className="w-12 h-12"
            />
            <span className="text-[#1a2744] font-bold text-xl hidden sm:block">
              Momentum Mentor
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-[#1a2744] hover:text-[#D4A017] font-medium transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-[#1a2744] hover:text-[#D4A017] font-medium transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-[#1a2744] hover:text-[#D4A017] font-medium transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('signup')}
              className="bg-[#D4A017] text-white px-6 py-3 rounded-full font-bold hover:bg-[#F4B83C] transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Get started with Momentum Mentor"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => scrollToSection('signup')}
            className="md:hidden bg-[#D4A017] text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-[#F4B83C] transition-all"
            aria-label="Get started"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
