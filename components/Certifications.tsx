"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Calendar } from "lucide-react"

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      title: "JPMorgan Chase & Co – Software Engineering Job Simulation",
      date: "Mar 2025",
      organization: "JPMorgan Chase & Co",
    },
    {
      title: "Bloomberg Market Concepts",
      date: "Jan 2025",
      organization: "Bloomberg",
    },
    {
      title: "Ethical Hacking",
      date: "Dec 2024",
      organization: "Craw Security",
    },
    {
      title: "IBM Z Day 2024 – AI & Data Certificate",
      date: "Oct 2024",
      organization: "IBM",
    },
    {
      title: "IBM Z Day 2024 – IBM Z Skills Certificate",
      date: "Oct 2024",
      organization: "IBM",
    },
    {
      title: "Prompt Design in Vertex AI Skill Badge",
      date: "Sep 2024",
      organization: "Google",
    },
    {
      title: "Accenture Innovation Challenge 2023",
      date: "Nov 2023",
      organization: "Unstop",
    },
    {
      title: "CS50: Introduction to Computer Science",
      date: "Jul 2023",
      organization: "edX",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-900">
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
            Certifications
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-gray-700"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-blue-900 rounded-lg mr-3 flex-shrink-0">
                    <Award className="text-blue-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{cert.title}</h3>
                    <p className="text-blue-400 font-medium mb-2">{cert.organization}</p>
                    <div className="flex items-center text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
