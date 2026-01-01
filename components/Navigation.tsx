'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ['hero', 'problem', 'cpr', 'products', 'how-it-works', 'benefits', 'cta']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
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

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'cpr', label: 'Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Testimonials' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 ${
        isScrolled
          ? 'bg-white shadow-md border-[#F2B81C]'
          : 'bg-white/95 backdrop-blur-sm border-[#F2B81C]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0D1B3F] text-white font-bold text-xl hover:bg-[#162949] hover:ring-2 hover:ring-[#F2B81C] hover:ring-offset-2 transition-all"
              aria-label="Go to home"
            >
              M
            </button>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <>
                  {index > 0 && <span key={`sep-${item.id}`} className="text-gray-400">•</span>}
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-all rounded-md relative ${
                      activeSection === item.id
                        ? 'text-[#0D1B3F] font-semibold'
                        : 'text-gray-700 hover:text-[#0D1B3F]'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#F2B81C] rounded-full" />
                    )}
                  </button>
                </>
              ))}
            </div>
          </div>

          <button
            onClick={() => scrollToSection('cta')}
            className="bg-[#0D1B3F] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#162949] hover:shadow-[0_0_20px_rgba(242,184,28,0.4)] transition-all text-sm border-2 border-transparent hover:border-[#F2B81C]"
            aria-label="Get started with Momentum Mentor"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
