'use client'

import { Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

export function BetaBanner() {
  const scrollToCTA = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a2744] text-white py-3 px-4 text-center border-b border-[#D4A017]/20"
    >
      <div className="flex items-center justify-center gap-2 flex-wrap text-sm sm:text-base">
        <Rocket className="w-4 h-4 text-[#D4A017]" />
        <span className="font-medium">
          Beta Access Now Open — Join the Waitlist for Early Access
        </span>
        <button
          onClick={scrollToCTA}
          className="text-[#D4A017] hover:text-[#F4B83C] font-semibold transition-colors ml-2"
          aria-label="Get started with beta access"
        >
          Get Started →
        </button>
      </div>
    </motion.div>
  )
}
