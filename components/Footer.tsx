import { Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0D1B3F] via-[#162949] to-[#0A1429] text-white py-12 border-t-4 border-[#F2B81C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/MMLOGO.png" alt="Momentum Mentor" className="w-14 h-14 sm:w-16 sm:h-16 mb-4 hover:scale-110 transition-transform duration-300" />
            <p className="text-gray-300 font-medium text-sm sm:text-base">Stop Planning. Start Proving.</p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-[#F2B81C] text-base sm:text-lg">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#F2B81C] transition-all duration-200 hover:translate-x-1 inline-block text-sm sm:text-base">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#F2B81C] transition-all duration-200 hover:translate-x-1 inline-block text-sm sm:text-base">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#F2B81C] transition-all duration-200 hover:translate-x-1 inline-block text-sm sm:text-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#F2B81C] transition-all duration-200 hover:translate-x-1 inline-block text-sm sm:text-base">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-[#F2B81C] text-base sm:text-lg">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#F2B81C] transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#F2B81C] transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#F2B81C] transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#F2B81C]/30 pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2025 Momentum Mentor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
