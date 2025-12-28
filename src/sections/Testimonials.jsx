import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "y*****n",
      avatar: "🎨",
      quote: "Kerennn, sangatt berguna tinggal drag and drop 🔥",
      rating: 5
    },
    {
      name: "n_mhilaaa",
      avatar: "🌊",
      quote: "Worth it bangettt, aksesnya gampang, rekomen untuk yang nyari assets buat editingg",
      rating: 5
    },
    {
      name: "snowbird52",
      avatar: "🏔️",
      quote: "Produk digitalnya komplit, file sudah tertata rapi tinggal download, harganya juga oke, respon admin dan pengiriman juga cepat 🔥",
      rating: 5
    },
    {
      name: "r*****y",
      avatar: "🎭",
      quote: "Gak nyesel, harga 35k dengan asset sebanyak ini worth it bangett sii 🔥",
      rating: 5
    },
    {
      name: "alip73",
      avatar: "👤",
      quote: "Jossss sangat membantu",
      rating: 4
    },
    {
      name: "Rizal Pra",
      avatar: "🧑",
      quote: "Mantapp, lengkap banget isinyaa",
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <SectionWrapper id="testimonials" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm sm:text-base font-medium mb-4 sm:mb-5"
          >
            💬 KATA MEREKA
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5"
          >
            Apa Kata
            <br className="hidden sm:block" />
            <span className="gradient-text"> Pengguna Kami?</span>
          </motion.h2>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 sm:p-8 md:p-10 lg:p-14 text-center"
              >
                {/* Avatar */}
                <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-5">{testimonials[currentIndex].avatar}</div>
                
                {/* Rating */}
                <div className="flex justify-center gap-1 sm:gap-1.5 mb-4 sm:mb-5">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-warning text-base sm:text-lg">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary mb-5 sm:mb-7 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-semibold text-lg sm:text-xl">{testimonials[currentIndex].name}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 md:-translate-x-14 w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 md:translate-x-14 w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-7 sm:w-9 bg-primary' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Testimonials
