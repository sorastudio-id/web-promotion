import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Bagaimana cara mengakses file setelah pembelian?",
      answer: "Kamu akan dapatkan akses filenya berupa Link Google Drive 📂 Setelah pembayaran berhasil, link akan langsung dikirim ke email kamu."
    },
    {
      question: "Apakah asset ini kompatibel dengan software editing saya?",
      answer: "100% Multi-Platform! Kompatibel dengan CapCut, Premiere Pro, After Effects, DaVinci Resolve, VN, Lightroom, dan software editing lainnya!"
    },
    {
      question: "Apakah bisa digunakan untuk project komersial?",
      answer: "Tentu! Aman 100% untuk jasa editing atau jual template. Bebas digunakan untuk project YouTube monetisasi, project klien, dan iklan."
    },
    {
      question: "Apa yang dimaksud dengan akses seumur hidup?",
      answer: "Kamu hanya bayar sekali dan bisa menggunakan semua asset selamanya. Tidak ada biaya langganan. Update asset baru di masa depan juga gratis untukmu."
    },
    {
      question: "Berapa ukuran total file yang didownload?",
      answer: "File ringan hanya 15GB! Terorganisir rapi dengan kategori spesifik. File disediakan dalam beberapa bagian agar mudah didownload."
    },
    {
      question: "Bisa digunakan di HP atau hanya Laptop?",
      answer: "Bisa dipake di HP maupun Laptop! Cocok buat yang suka edit sambil rebahan. Semua asset kompatibel dengan aplikasi editing mobile seperti CapCut dan VN."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <SectionWrapper id="faq" className="relative">
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-primary text-sm sm:text-base font-medium mb-4 sm:mb-5"
        >
          ❓ PERTANYAAN UMUM
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5"
        >
          Frequently Asked
          <br className="hidden sm:block" />
          <span className="gradient-text"> Questions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto"
        >
          Temukan jawaban untuk pertanyaan yang sering diajukan.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            className="glass-card overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-5 sm:p-6 md:p-7 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
            >
              <span className="font-semibold text-base sm:text-lg pr-4">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.span>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 md:px-7 pb-5 sm:pb-6 md:pb-7 text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed border-t border-white/10 pt-4 sm:pt-5">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default FAQ
