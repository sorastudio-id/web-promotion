import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'

const HowToBuy = () => {
  const steps = [
    {
      number: "1",
      icon: "🛒",
      title: "Klik Tombol Beli",
      description: "Klik tombol \"Dapatkan Akses Sekarang\" untuk menuju halaman pembayaran di Lynk.id"
    },
    {
      number: "2",
      icon: "📝",
      title: "Isi Data Diri",
      description: "Masukkan email dan nomor telepon aktif kamu untuk menerima link akses produk"
    },
    {
      number: "3",
      icon: "💳",
      title: "Pilih Metode Pembayaran",
      description: "Pilih metode pembayaran yang tersedia (Transfer Bank, E-Wallet, QRIS, dll)"
    },
    {
      number: "4",
      icon: "✅",
      title: "Selesaikan Pembayaran",
      description: "Lakukan pembayaran sesuai nominal yang tertera dan tunggu konfirmasi otomatis"
    },
    {
      number: "5",
      icon: "📧",
      title: "Cek Email Kamu",
      description: "Link akses Google Drive akan dikirim ke email kamu dalam hitungan menit"
    },
    {
      number: "6",
      icon: "📥",
      title: "Akses & Download",
      description: "Buka link Google Drive dan download semua asset digital yang kamu butuhkan!"
    }
  ]

  return (
    <SectionWrapper id="cara-beli" className="relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-secondary font-semibold mb-3 sm:mb-4 text-sm sm:text-base"
          >
            📖 PANDUAN PEMBELIAN
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5"
          >
            Cara Mendapatkan
            <br className="hidden sm:block" />
            <span className="gradient-text"> Asset Digital</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto"
          >
            Ikuti 6 langkah mudah berikut untuk mendapatkan akses ke 9000+ asset digital premium
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-5 sm:p-6 relative group hover:border-primary/50 transition-all duration-300"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 mt-2">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm sm:text-base">
                {step.description}
              </p>

              {/* Connector Line (hidden on last items per row) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-5 sm:p-6 border border-success/30 bg-success/5">
            <div className="flex items-start gap-4">
              <div className="text-2xl sm:text-3xl">💡</div>
              <div>
                <h4 className="text-white font-bold text-base sm:text-lg mb-2">
                  Tips Penting:
                </h4>
                <ul className="text-text-secondary text-sm sm:text-base space-y-1.5">
                  <li>✓ Pastikan email yang kamu masukkan aktif dan benar</li>
                  <li>✓ Cek folder spam jika email tidak masuk dalam 5 menit</li>
                  <li>✓ Simpan link Google Drive untuk akses selamanya</li>
                  <li>✓ Hubungi kami via WhatsApp jika ada kendala</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-8 sm:mt-10"
        >
          <Button 
            href="https://lynk.id/sorastudio/jevqk95rrx9q/checkout" 
            target="_blank" 
            rel="noopener noreferrer" 
            size="lg" 
            pulse
          >
            🚀 Dapatkan Akses Sekarang
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default HowToBuy
