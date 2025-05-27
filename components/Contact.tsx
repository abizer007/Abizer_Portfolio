"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xvgajjwj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("✅ Thank you! Your message has been sent.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        alert("❌ Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("❌ Network error. Please check your connection and try again.")
      console.error(error)
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-white text-center mb-16"
          >
            Get In Touch
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-lg text-gray-300 mb-8">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about
                  technology and innovation.
                </p>
              </div>

              <div className="space-y-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:abizermasavi@gmail.com"
                  className="flex items-center p-4 bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
                >
                  <div className="p-3 bg-blue-900 rounded-full mr-4">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">abizermasavi@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/abizer007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
                >
                  <div className="p-3 bg-gray-700 rounded-full mr-4">
                    <Github className="text-gray-300" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">GitHub</h4>
                    <p className="text-gray-300">github.com/abizer007</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/abizer-masavi-788a13281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
                >
                  <div className="p-3 bg-blue-900 rounded-full mr-4">
                    <Linkedin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">LinkedIn</h4>
                    <p className="text-gray-300">linkedin.com/in/abizer-masavi-788a13281</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 ${
                    isSubmitting ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
                  } text-white rounded-lg transition-colors font-medium`}
                >
                  <Send className="mr-2" size={20} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16 pt-8 border-t border-gray-700"
          >
            <p className="text-gray-400">© 2025 Abizer Masavi.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
