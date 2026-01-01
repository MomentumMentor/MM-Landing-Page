'use client'

import { BetaBanner } from '../components/BetaBanner'
import { Navigation } from '../components/Navigation'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { HowItWorks } from '../components/HowItWorks'
import { EmailSignup } from '../components/EmailSignup'
import { FAQ } from '../components/FAQ'
import { Footer } from '../components/Footer'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../lib/supabase'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard')
    }
  }, [user, loading, router])

  const handleEmailSignup = async (email: string) => {
    try {
      const { error } = await supabase.from('beta_signups').insert([{ email }])

      if (error) {
        if (error.code === '23505') {
          alert('This email is already registered for beta access!')
        } else {
          throw error
        }
      } else {
        alert('Thank you for signing up! We will notify you when beta access is available.')
      }
    } catch (error) {
      console.error('Error signing up:', error)
      alert('There was an error signing up. Please try again.')
    }
  }

  return (
    <>
      <a href="#hero" className="skip-to-content">
        Skip to main content
      </a>
      <BetaBanner />
      <main id="main-content" className="min-h-screen">
        <Navigation />
        <Hero />
        <Features />
        <HowItWorks />
        <EmailSignup onSubmit={handleEmailSignup} />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}