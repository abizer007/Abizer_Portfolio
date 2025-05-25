"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Heart, Calendar } from "lucide-react"

export default function Volunteering() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="volunteering" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-white text-center mb-16"
          >
            Volunteering
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="p-4 bg-pink-900 rounded-full mr-6">
                <Heart className="text-pink-400" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Volunteer</h3>
                <h4 className="text-xl font-semibold text-pink-400">The Akanksha Foundation</h4>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-300">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>Jun 2024 – Jul 2024</span>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Assisting in improving education quality and teaching mathematics, English, and coding in underserved
              communities. This experience has strengthened my commitment to using technology and education to create
              positive social impact.
            </p>

            <div className="mt-6 p-4 bg-gray-900 rounded-lg border-l-4 border-pink-500">
              <p className="text-gray-400 italic">
                "Education is the most powerful weapon which you can use to change the world." - Contributing to this
                mission through volunteer work has been incredibly rewarding.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
