"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, ExternalLink, Code, TrendingUp, BarChart3, Network, FolderOpen, Database } from "lucide-react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Daily Stock Profit Log",
      description:
        "A comprehensive stock trading tracker that helps monitor daily profits and losses with detailed analytics and performance metrics.",
      icon: TrendingUp,
      link: "https://github.com/abizer007/Daily_Stock_Profit_log",
      color: "green",
      tags: ["Finance", "Analytics", "Trading"],
    },
    {
      title: "RetroRepo",
      description:
        "A GitHub widget to visualize user activity and enhance developer portfolios with beautiful charts and statistics.",
      icon: Code,
      link: "https://github.com/abizer007/RetroRepo",
      color: "blue",
      tags: ["GitHub API", "Visualization", "Portfolio"],
    },
    {
      title: "Zomato Stock Predictor",
      description:
        "Machine learning model to predict Zomato stock prices using historical data and advanced algorithms for financial forecasting.",
      icon: TrendingUp,
      link: "https://github.com/abizer007/zomato-stock-predictor",
      color: "red",
      tags: ["ML", "Stock Prediction", "Python"],
    },
    {
      title: "Projects Collection",
      description:
        "A curated collection of various programming projects showcasing different technologies and problem-solving approaches.",
      icon: FolderOpen,
      link: "https://github.com/abizer007/Projects",
      color: "purple",
      tags: ["Collection", "Various Tech", "Learning"],
    },
    {
      title: "Zomato Analytics Dashboard",
      description:
        "Interactive dashboard for Zomato data analysis with comprehensive insights, charts, and business intelligence features.",
      icon: BarChart3,
      link: "https://github.com/abizer007/Zomato_Analytics_Dashboard",
      color: "orange",
      tags: ["Dashboard", "Analytics", "Business Intelligence"],
    },
    {
      title: "RAW Office Network Architecture",
      description:
        "Complete network architecture design for office building infrastructure with detailed documentation and implementation guidelines.",
      icon: Network,
      link: "https://github.com/abizer007/RAW-Office-Building-Network-Architecture",
      color: "cyan",
      tags: ["Networking", "Architecture", "Infrastructure"],
    },
    {
      title: "IBM Z Data Syndicate",
      description:
        "Supply Chain Disruption Analysis Model developed as Team Leader for IBM Z Data challenge. Analyzes geopolitical tensions and weather events impact on global supply chains using advanced data modeling techniques.",
      icon: BarChart3,
      link: "https://github.com/abizer007/IBM-Z-Data_Syndicate-",
      color: "blue",
      tags: ["IBM Z", "Data Analysis", "Supply Chain", "Team Leadership"],
    },
    {
      title: "Banking Management System",
      description:
        "Comprehensive banking management system with features for account management, transaction processing, and financial operations. Built with modern security practices and user-friendly interface.",
      icon: Database,
      link: "https://github.com/abizer007/Banking-Management-System",
      color: "green",
      tags: ["Banking", "Management System", "Finance", "Security"],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
      green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
      red: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800",
      purple:
        "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
      orange:
        "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
      cyan: "bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-white text-center mb-16"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full mr-4 ${getColorClasses(project.color)}`}>
                    <project.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getColorClasses(project.color)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <Github className="mr-2" size={16} />
                    View Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/abizer007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors font-medium"
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
              <ExternalLink className="ml-2" size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
