'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What makes Momentum Mentor different from other goal-tracking apps?',
      answer:
        'Momentum Mentor combines strategic goal planning with daily habit tracking and comprehensive analytics. Unlike single-purpose apps, we provide an integrated system that connects your long-term vision to daily actions, giving you real-time insights into what drives your success.',
    },
    {
      question: 'How does the beta access work?',
      answer:
        'Beta access is completely free and gives you full access to all features. There is no credit card required. Beta users who provide feedback will receive 90 days of free access after launch. Simply sign up with your email to join the waitlist.',
    },
    {
      question: 'Can I use this for both personal and professional goals?',
      answer:
        'Absolutely! Momentum Mentor is designed to help you track goals across all areas of life - career, health, relationships, personal development, and more. The system adapts to your priorities and helps you maintain balance across multiple domains.',
    },
    {
      question: 'Is my data secure and private?',
      answer:
        'Yes, your data security and privacy are our top priorities. We use industry-standard encryption, secure authentication, and follow best practices for data protection. Your personal information and progress data are never shared with third parties.',
    },
    {
      question: 'What platforms does Momentum Mentor support?',
      answer:
        'Momentum Mentor is a web-based platform accessible from any modern browser on desktop, tablet, or mobile devices. This ensures your progress is always synced and accessible wherever you are.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[#1a2744] pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
