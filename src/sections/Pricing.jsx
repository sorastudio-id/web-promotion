import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'

const Pricing = () => {
  // Countdown timer - resets on page refresh (gimmick)
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds -= 1
        } else if (minutes > 0) {
          minutes -= 1
          seconds = 59
        } else if (hours > 0) {
          hours -= 1
          minutes = 59
          seconds = 59
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const features = [
    "9000+ Asset Premium",
    "20+ Kategori Lengkap",
    "Akses Seumur Hidup",
    "Update Gratis Selamanya",
    "Lisensi Komersial",
    "Terorganisir Rapi",
    "Support Multi-Platform"
  ]

  const formatTime = (num) => num.toString().padStart(2, '0')

  return (
    <SectionWrapper id="pricing" className="relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 sm:mb-5"
          >
            <span className="bg-gradient-to-r from-warning to-orange-500 text-white text-sm sm:text-base font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full animate-pulse">
              🔥 PENAWARAN TERBATAS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5"
          >
            Investasi Sekali,
            <br className="hidden sm:block" />
            <span className="gradient-text"> Manfaat Selamanya</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto"
          >
            Harga spesial untuk kamu yang action sekarang. 
            Tidak ada biaya langganan, tidak ada biaya tersembunyi.
          </motion.p>
        </div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="max-w-md mx-auto mb-8 sm:mb-10"
        >
          <div className="glass-card p-4 sm:p-5 border border-warning/30">
            <p className="text-center text-warning text-sm sm:text-base font-medium mb-3">
              ⏰ Promo berakhir dalam:
            </p>
            <div className="flex justify-center items-center gap-2 sm:gap-3">
              <div className="text-center">
                <div className="bg-warning/20 text-warning text-2xl sm:text-3xl md:text-4xl font-bold px-3 py-2 sm:px-4 sm:py-3 rounded-lg min-w-[60px] sm:min-w-[70px]">
                  {formatTime(timeLeft.hours)}
                </div>
                <p className="text-text-muted text-xs mt-1">Jam</p>
              </div>
              <span className="text-warning text-2xl sm:text-3xl font-bold">:</span>
              <div className="text-center">
                <div className="bg-warning/20 text-warning text-2xl sm:text-3xl md:text-4xl font-bold px-3 py-2 sm:px-4 sm:py-3 rounded-lg min-w-[60px] sm:min-w-[70px]">
                  {formatTime(timeLeft.minutes)}
                </div>
                <p className="text-text-muted text-xs mt-1">Menit</p>
              </div>
              <span className="text-warning text-2xl sm:text-3xl font-bold">:</span>
              <div className="text-center">
                <div className="bg-warning/20 text-warning text-2xl sm:text-3xl md:text-4xl font-bold px-3 py-2 sm:px-4 sm:py-3 rounded-lg min-w-[60px] sm:min-w-[70px]">
                  {formatTime(timeLeft.seconds)}
                </div>
                <p className="text-text-muted text-xs mt-1">Detik</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-lg mx-auto"
        >
          <div className="glass-card p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-primary/50 relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-gradient-to-r from-primary to-accent text-white text-xs sm:text-sm font-bold px-6 sm:px-8 py-1.5 transform rotate-45 translate-x-6 sm:translate-x-8 translate-y-3 sm:translate-y-4">
                BEST VALUE
              </div>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Paket Lengkap</h3>
              <p className="text-text-secondary text-sm sm:text-base">Akses semua asset + bonus eksklusif</p>
            </div>

            {/* Price */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                <span className="text-lg sm:text-xl md:text-2xl text-text-muted line-through">Rp 129.000</span>
                <span className="bg-success/20 text-success text-xs sm:text-sm font-bold px-2 py-1 rounded">
                  HEMAT 73%
                </span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-text-secondary text-base sm:text-lg">Rp</span>
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text">35</span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">.000</span>
              </div>
              <p className="text-text-muted text-sm sm:text-base mt-2 sm:mt-3">Sekali bayar, akses selamanya</p>
            </div>

            {/* Features list */}
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 md:mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-secondary text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button href="#payment" size="lg" pulse className="w-full">
              🚀 Dapatkan Akses Sekarang
            </Button>

            {/* Urgency */}
            <div className="mt-5 sm:mt-7 text-center space-y-3">
              <p className="text-warning text-sm sm:text-base flex items-center justify-center gap-2">
                <span className="animate-pulse">⏰</span>
                Harga naik setelah promo berakhir
              </p>
              
              {/* Stock Indicator */}
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <span className="text-success animate-pulse">🔥</span>
                <span className="text-text-secondary">
                  Sisa <span className="text-white font-bold">47 slot</span> lagi dengan harga promo!
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Pricing
