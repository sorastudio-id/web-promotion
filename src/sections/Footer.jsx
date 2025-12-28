import { motion } from 'framer-motion'
import Button from '../components/Button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 md:p-10 lg:p-14 text-center relative overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
            
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5">
                Siap Meningkatkan
                <br className="hidden sm:block" />
                <span className="gradient-text"> Kualitas Video Kamu?</span>
              </h2>
              
              <p className="text-text-secondary text-base sm:text-lg mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto">
                Jangan biarkan waktu berharga terbuang untuk mencari asset. 
                Dapatkan koleksi lengkap sekarang dan mulai berkarya!
              </p>

              <Button href="#pricing" size="lg" pulse className="w-full sm:w-auto mb-4 sm:mb-5">
                🚀 Ya, Saya Mau Akses Sekarang!
              </Button>

              <p className="text-text-muted text-sm sm:text-base">
                Harga spesial Rp 35.000 • Akses Seumur Hidup
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-5 sm:gap-7 text-sm sm:text-base text-text-muted">
              <a href="#features" className="hover:text-white transition-colors">Fitur</a>
              <a href="#pricing" className="hover:text-white transition-colors">Harga</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Testimoni</a>
            </div>

            {/* Social / Contact */}
            <div className="flex items-center gap-3 sm:gap-4">
                {/*
              <a 
                href="https://wa.me/    " 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <span className="text-lg sm:text-xl">💬</span>
              </a>
              <a 
                href="mailto:support@videoassetpro.com"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <span className="text-lg sm:text-xl">📧</span>
              </a>
              */}
            </div>
          </div>

          {/* Disclaimer & Copyright */}
          <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-white/5 text-center">
            <p className="text-text-muted text-xs sm:text-sm">
              © {currentYear} Sora Studio. All rights reserved. Dibuat dengan ❤️ untuk video editor Indonesia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
