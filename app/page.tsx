"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/LoadingScreen"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Certifications from "@/components/Certifications"
import Skills from "@/components/Skills"
import Volunteering from "@/components/Volunteering"
import Contact from "@/components/Contact"
import { ThemeProvider } from "@/components/ThemeProvider"

export default function Portfolio() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-900 transition-colors duration-300"
          >
            <Header />
            <Hero />
            <About />
            <Education />
            <Projects />
            <Certifications />
            <Skills />
            <Volunteering />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}
