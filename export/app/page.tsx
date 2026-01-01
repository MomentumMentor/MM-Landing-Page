'use client'

import { Hero } from '../components/Hero'
import { ProblemStatement } from '../components/ProblemStatement'
import { CPRFramework } from '../components/CPRFramework'
import { ProductSuite } from '../components/ProductSuite'
import { HowItWorks } from '../components/HowItWorks'
import { Benefits } from '../components/Benefits'
import { FinalCTA } from '../components/FinalCTA'
import { Footer } from '../components/Footer'
import { useAuth } from '../hooks/useAuth'
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

  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <CPRFramework />
      <ProductSuite />
      <HowItWorks />
      <Benefits />
      <FinalCTA />
      <Footer />
    </main>
  )
}