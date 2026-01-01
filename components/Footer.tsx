export function Footer() {
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

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 MomentumMentor.net. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
