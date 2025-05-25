"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-8"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a B.Tech student specializing in Computer Science and Business Systems at MPSTME, with a deep passion for technology, innovation, and continuous exploration. My interests lie at the intersection of technology and finance, where I aspire to contribute to the FinTech sector by merging technological advancements with financial empowerment. With a forward-thinking mindset, I am eager to connect with individuals and organizations that drive innovation and impact. I am excited to be part of initiatives that push boundaries, create meaningful solutions, and shape the future of technology and finance. Let’s collaborate to redefine possibilities in the ever-evolving tech and FinTech landscapes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
