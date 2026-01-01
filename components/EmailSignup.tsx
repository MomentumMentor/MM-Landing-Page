'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check } from 'lucide-react'

interface EmailSignupProps {
  onSubmit: (email: string) => Promise<void>
}

export function EmailSignup({ onSubmit }: EmailSignupProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || loading) return

    try {
      setLoading(true)
      await onSubmit(email)
      setEmail('')
    } catch (error) {
      console.error('Error submitting email:', error)
    } finally {
      setLoading(false)
    }
  }

  const benefits = [
    'No credit card required',
    'Free for beta users until launch',
    'Beta users providing feedback receive 90 days free post-launch',
  ]

  return (
    <section id="signup" ref={ref} className="py-20 bg-gradient-to-br from-[#1a2744] to-[#0f1729]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Momentum?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of professionals who are achieving more with less stress.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 max-w-md px-6 py-4 rounded-full text-lg bg-white text-[#1a2744] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#D4A017]/50"
            />
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D4A017] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F4B83C] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Get Beta Access'}
            </motion.button>
          </form>

          <div className="flex flex-col items-center space-y-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center text-white"
              >
                <Check className="w-5 h-5 text-[#D4A017] mr-3" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
