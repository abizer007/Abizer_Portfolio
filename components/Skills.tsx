"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Globe, Database, Users, GitBranch } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "Java", "C++", "JavaScript", "C"],
      color: "blue",
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "React", "Frontend Development"],
      color: "green",
    },
    {
      title: "Tools & Databases",
      icon: Database,
      skills: ["Git", "GitHub", "Vercel", "Power BI", "MySQL", "PostgreSQL"],
      color: "purple",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Public Speaking", "Event Management", "Time Management", "Teamwork", "Problem Solving"],
      color: "pink",
    },
    {
      title: "Experience",
      icon: GitBranch,
      skills: ["Contributor @ GirlScript Summer of Code"],
      color: "orange",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-900 text-blue-400 border-blue-800",
      green: "bg-green-900 text-green-400 border-green-800",
      purple: "bg-purple-900 text-purple-400 border-purple-800",
      pink: "bg-pink-900 text-pink-400 border-pink-800",
      orange: "bg-orange-900 text-orange-400 border-orange-800",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="skills" className="py-20 bg-gray-800">
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
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full mr-4 ${getColorClasses(category.color)}`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 + skillIndex * 0.05 }}
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
