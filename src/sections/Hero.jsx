import { motion } from 'framer-motion'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 sm:px-5 sm:py-2.5 rounded-full mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-sm sm:text-base text-text-secondary">🎬 Koleksi Asset Video Editing Terlengkap</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8"
        >
          Hemat{' '}
          <span className="gradient-text">Waktu Editing</span>
          <br />
          Tingkatkan{' '}
          <span className="gradient-text">Kualitas Video</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Akses ribuan asset premium siap pakai: transisi, overlays, sound effects, 
          LUT, dan masih banyak lagi. Semua yang kamu butuhkan dalam satu paket lengkap.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-10 sm:mb-14"
        >
          <Button href="#pricing" size="lg" pulse className="w-full sm:w-auto">
            🚀 Dapatkan Akses Sekarang
          </Button>
          <Button href="#features" variant="ghost" size="md" className="w-full sm:w-auto">
            Lihat Isi Paket →
          </Button>
        </motion.div>

        {/* Product Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-dark-elevated">
              {/* Mock video editor preview */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 rounded-full bg-white/10 flex items-center justify-center animate-float">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-text-secondary text-sm sm:text-base md:text-lg">9000+ Asset Premium Siap Pakai</p>
                </div>
              </div>
              
              {/* Floating asset cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 sm:top-6 left-4 sm:left-6 glass px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm hidden sm:block"
              >
              🎬 1250+ Transisi
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 glass px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm hidden sm:block"
              >
              🔊 1000+ Sound FX
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 glass px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm hidden sm:block"
              >
              🌈 380+ Motion BG
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 glass px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm hidden sm:block"
              >
              🎨 100+ LUT
              </motion.div>
            </div>
          </div>

          {/* Gradient glow behind */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl -z-10" />
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-text-muted text-sm sm:text-base"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Akses Seumur Hidup
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Aman untuk Komersial
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Kompatibel Semua Software
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
