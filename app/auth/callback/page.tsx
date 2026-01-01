'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../../lib/supabase'
import { Loader2 } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (session) {
        router.push('/dashboard')
      } else {
        router.push('/')
      }
    }

    handleAuthCallback()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        router.push('/dashboard')
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy to-navy-800 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-gold animate-spin mx-auto mb-4" />
        <p className="text-white text-xl">Completing sign in...</p>
      </div>
    </div>
  )
}
