"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Floating tech icons data
  const floatingIcons = [
    { icon: "⚛️", size: "text-4xl", delay: 0 },
    { icon: "🐍", size: "text-3xl", delay: 0.5 },
    { icon: "💾", size: "text-2xl", delay: 1 },
    { icon: "🔗", size: "text-3xl", delay: 1.5 },
    { icon: "📊", size: "text-2xl", delay: 2 },
    { icon: "🚀", size: "text-3xl", delay: 2.5 },
    { icon: "💻", size: "text-4xl", delay: 3 },
    { icon: "🔧", size: "text-2xl", delay: 3.5 },
    { icon: "📱", size: "text-3xl", delay: 4 },
    { icon: "🎯", size: "text-2xl", delay: 4.5 },
    { icon: "⚡", size: "text-3xl", delay: 5 },
    { icon: "🔥", size: "text-2xl", delay: 5.5 },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Dark Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Floating Tech Icons */}
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.size} opacity-20 hover:opacity-40 transition-opacity`}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              delay: item.delay,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Additional geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, 200, -100, 0],
              y: [0, -150, 100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-gray-900" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/50"
            >
              <Image src="/images/abizer-profile.jpg" alt="Abizer Masavi" fill className="object-cover" priority />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl lg:text-6xl font-bold mb-6"
        >
          <span className="text-white">Hello, I'm </span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Abizer Masavi
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          I create innovative, functional, and accessible tech solutions bridging technology and finance.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToAbout}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-medium transition-all duration-300 shadow-lg shadow-blue-600/30 mb-8"
        >
          Get to know me
        </motion.button>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-6 mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://github.com/abizer007"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition-all duration-300"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://www.linkedin.com/in/abizer-masavi-788a13281"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full text-gray-300 hover:text-white transition-all duration-300"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="mailto:abizermasavi@gmail.com"
            className="p-3 bg-gray-800 hover:bg-green-600 rounded-full text-gray-300 hover:text-white transition-all duration-300"
          >
            <Mail size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://www.instagram.com/abizer_masavi?igsh=MXZ4c2ZybmNleGdhbg=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-pink-600 rounded-full text-gray-300 hover:text-white transition-all duration-300"
          >
            <Instagram size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-gray-400"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
