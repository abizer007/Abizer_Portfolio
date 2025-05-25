"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)

  const loadingTexts = [
    "Initializing Portfolio...",
    "Loading Projects...",
    "Setting up Experience...",
    "Preparing Skills...",
    "Almost Ready...",
  ]

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + 1
      })
    }, 25)

    const textTimer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length)
    }, 600)

    return () => {
      clearInterval(progressTimer)
      clearInterval(textTimer)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-gray-900" />
            </motion.div>
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500">
              <img src="/images/abizer-profile.jpg" alt="Abizer Masavi" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Abizer Masavi</h1>
          <p className="text-xl text-blue-300">B.Tech Student | Tech & FinTech Enthusiast</p>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <motion.p
            key={currentText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-lg text-blue-200"
          >
            {loadingTexts[currentText]}
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "auto", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-80 max-w-sm mx-auto"
        >
          <div className="flex justify-between text-sm text-blue-200 mb-2">
            <span>Loading Portfolio</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {["⚛️", "🐍", "💻", "🚀", "⚡"].map((icon, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-20"
              animate={{
                x: [0, 50, -50, 0],
                y: [0, -50, 50, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
