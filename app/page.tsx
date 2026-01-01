'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Target, TrendingUp, BarChart3, ChevronDown, Check, Rocket, Star } from 'lucide-react';

// Star Background Component
function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: Array<{ x: number; y: number; size: number; opacity: number; speed: number }> = [];
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.05,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.opacity += star.speed;
        if (star.opacity > 1 || star.opacity < 0.3) {
          star.speed = -star.speed;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}

// Navigation Component
function Navigation({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            onClick={() => onScrollTo('hero')}
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
              onClick={() => onScrollTo('features')}
              className="text-[#1a2744] hover:text-[#D4A017] font-medium transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => onScrollTo('how-it-works')}
              className="text-[#1a2744] hover:text-[#D4A017] font-medium transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => onScrollTo('testimonials')}
              className="text-[#1a2744] hover:text-[#D4A017] font-medium transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => onScrollTo('signup')}
              className="bg-[#D4A017] text-white px-6 py-3 rounded-full font-bold hover:bg-[#F4B83C] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => onScrollTo('signup')}
            className="md:hidden bg-[#D4A017] text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-[#F4B83C] transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

// Beta Banner Component
function BetaBanner({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-[#1a2744] text-white py-3 px-4 text-center border-b border-[#D4A017]/20">
      <div className="flex items-center justify-center gap-2 flex-wrap text-sm sm:text-base">
        <Rocket className="w-4 h-4 text-[#D4A017]" />
        <span className="font-medium">
          Beta Access Now Open — Join the Waitlist for Early Access
        </span>
        <button
          onClick={() => onScrollTo('signup')}
          className="text-[#D4A017] hover:text-[#F4B83C] font-semibold transition-colors ml-2"
        >
          Get Started →
        </button>
      </div>
    </div>
  );
}

// Hero Section
function HeroSection({ onGetStarted, loading }: { onGetStarted: () => void; loading: boolean }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f1729] via-[#1a2744] to-[#0f1729] text-white overflow-hidden pt-32">
      <StarBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4A017] opacity-40 blur-[120px] rounded-full" />
              <div className="relative bg-white rounded-full p-8 sm:p-12 lg:p-16 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center shadow-2xl">
                <img
                  src="/MMLOGO.png"
                  alt="Momentum Mentor"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">ACCELERATE</span>
              <span className="block text-[#D4A017] mt-2">YOUR FUTURE</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Expert mentorship for professional growth.
            </p>

            <button
              onClick={onGetStarted}
              disabled={loading}
              className="bg-[#D4A017] text-[#0f1729] px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-[#F4B83C] transition-all duration-300 shadow-[0_0_30px_rgba(212,160,23,0.5)] hover:shadow-[0_0_50px_rgba(212,160,23,0.8)] uppercase tracking-wider disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'GET STARTED'}
            </button>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.3em] uppercase">
            MOMENTUM MENTOR
          </p>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Target,
      title: 'Strategic Goal Planning',
      items: [
        'Set ambitious, measurable goals across all life areas',
        'Visual progress tracking and milestone celebration',
        'Smart recommendations based on your patterns',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Daily Momentum Building',
      items: [
        'Turn goals into daily habits and actions',
        'Track consistency and build streaks',
        'Real-time feedback on your progress',
      ],
    },
    {
      icon: BarChart3,
      title: 'Integrated Analytics',
      items: [
        'See what drives your success with data insights',
        'Connect habits to goal outcomes',
        'Optimize your approach with AI-powered suggestions',
      ],
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-4">
            One Platform. Complete Control.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Momentum Mentor combines proven productivity frameworks with intelligent tracking to keep
            you on target.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#D4A017]" />
                </div>

                <h3 className="text-xl font-bold text-[#1a2744] mb-4">{feature.title}</h3>

                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-sm">
                      <span className="text-[#D4A017] mr-2 mt-1">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Define Your Vision',
      description: 'Set clear goals across all areas of life. Choose what matters most to you.',
    },
    {
      number: '02',
      title: 'Track Your Progress',
      description: 'Monitor daily actions and weekly achievements. Build consistency through habit tracking.',
    },
    {
      number: '03',
      title: 'Optimize & Scale',
      description: 'Review analytics and identify patterns. Refine your approach, watch momentum compound.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to build sustainable momentum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-[#D4A017] to-[#B88714] w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6 shadow-lg">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-[#1a2744] mb-4">{step.title}</h3>

              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Email Signup Section
function EmailSignupSection({ onSubmit, loading }: { onSubmit: (email: string) => void; loading: boolean }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
    }
  };

  const benefits = [
    'No credit card required',
    'Free for beta users until launch',
    'Beta users providing feedback receive 90 days free post-launch',
  ];

  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-[#1a2744] to-[#0f1729]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
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
            <button
              type="submit"
              disabled={loading}
              className="bg-[#D4A017] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F4B83C] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Get Beta Access'}
            </button>
          </form>

          <div className="flex flex-col items-center space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-white">
                <Check className="w-5 h-5 text-[#D4A017] mr-3" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      quote: "I'm accomplishing more and feeling less overwhelmed thanks to using the Momentum Mentor tools. The system keeps me focused on what truly matters, and I'm finally making consistent progress on my goals without burning out.",
      name: 'Taylor',
      role: 'Marketing Professional',
    },
    {
      rating: 5,
      quote: "I always had trouble wrapping up one task before jumping into another. The processes I learned here have made me much more productive. Now I finish what I start, and my output has skyrocketed.",
      name: 'Jonathan',
      role: 'Consultant',
    },
    {
      rating: 5,
      quote: "Keeping my commitments top of mind means they just get scheduled and done without slipping off the plate. I used to constantly forget important tasks, but now everything flows smoothly and nothing falls through the cracks.",
      name: 'Ann',
      role: 'Homemaker',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Real results from people building real momentum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#1a2744] font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-[#1a2744]">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2744] mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#1a2744] pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  return (
    <footer className="bg-[#0f1729] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4">
            <img src="/MMLOGO.png" alt="Momentum Mentor" className="w-12 h-12" />
            <div>
              <p className="font-bold text-lg">Momentum Mentor</p>
              <p className="text-gray-400 text-sm">Building unstoppable momentum, daily.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://bolt.new"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <span className="text-sm">Made in Bolt</span>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 MomentumMentor.net. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (err) {
      console.error('Error signing in with Google:', err);
      setLoading(false);
    }
  };

  const handleEmailSubmit = async (email: string) => {
    setLoading(true);
    try {
      // Navigate to beta waitlist with email prefilled
      window.location.href = `/beta-waitlist?email=${encodeURIComponent(email)}`;
    } catch (err) {
      console.error('Error:', err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onScrollTo={scrollToSection} />
      <BetaBanner onScrollTo={scrollToSection} />
      <HeroSection onGetStarted={handleGoogleSignIn} loading={loading} />
      <FeaturesSection />
      <HowItWorksSection />
      <EmailSignupSection onSubmit={handleEmailSubmit} loading={loading} />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
