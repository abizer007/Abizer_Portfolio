"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar, Award } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationData = [
    {
      institution: "SVKM's NMIMS Mukesh Patel School of Technology Management & Engineering",
      degree: "B.Tech, Computer Science and Business Systems",
      period: "2023–2027",
      description: "Currently pursuing undergraduate degree with focus on technology and business integration.",
    },
    {
      institution: "Shardasharam Vidyamandir Sci & Vocational College",
      degree: "HSC 12th, 65%",
      period: "2021–2023",
      description: "Prepared for JEE, CET | Skills: Time Management, Stress Handling",
    },
    {
      institution: "Diamond Jubilee High School, Mumbai",
      degree: "92.5% ICSE",
      period: "2011–2021",
      description:
        "Cultural Captain, Certified by Trinity College of London | Skills: Public speaking, Event management, Compèring, Elocution",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-900">
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
            Education
          </motion.h2>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-900 rounded-full mr-4">
                        <GraduationCap className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                        <div className="flex items-center text-gray-400 mt-1">
                          <Calendar size={16} className="mr-2" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center mb-3">
                      <Award className="text-blue-400 mr-2" size={20} />
                      <span className="text-lg font-semibold text-gray-200">{edu.degree}</span>
                    </div>

                    <p className="text-gray-300">{edu.description}</p>
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
