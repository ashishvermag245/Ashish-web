"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Download,
  ArrowRight,
  Menu,
  X,
  Github
} from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  const projects = [
    {
      title: "Kimball International",
      description: "Kimball International is a leading omnichannel commercial furnishings company with deep expertise in the Workplace, Health, and Hospitality markets.",
      image: "/kimball.webp?height=200&width=300",
      tech: ["Salesforce", "HTML", "SCSS", "Javascript", "Node.js"],
      github: "https://github.com/ashishvermag245",
      live: "https://www.kimballinternational.com/home",
    },
    {
      title: "Star Furniture",
      description: "Find quality and affordable furniture from living and dining rooms to bedrooms, home office and children’s rooms. Shop online and then visit one of our Houston, Austin, or San Antonio locations for pickup or delivery questions.",
      image: "/star_furniture.avif?height=200&width=300",
      tech: ["Magento", "HTML", "SCSS", ".Net"],
      github: "https://github.com/ashishvermag245",
      live: "https://starfurniture.com/",
    },
    {
      title: "MetricWave Insights",
      description: "MetricWave Insights delivers data-driven market research and strategic business consulting to help companies grow, compete, and make informed decisions.",
      image: "/metricwave.webp?height=200&width=300",
      tech: ["React", "API Integration", "Bootstrap", "Tailwinid CSS", "PHP"],
      github: "https://github.com/ashishvermag245",
      live: "https://metricwaveinsights.com/",
    },
    {
      title: "Handy Banjo",
      description: "Handy Banjo - Handy Banjo is a Centralized labor marketplace that connects individuals looking for quality On-Demand Manual labor to a wide range of safe and reliable local service providers. ",
      image: "/handy_banjo.jpg?height=200&width=300",
      tech: ["HTML", "API Integration", "Bootstrap", "Javascript", "Laravel"],
      github: "https://github.com/ashishvermag245",
      live: "https://app.handybanjo.com/",
    },
    {
      title: "Poppin",
      description: "Poppin: Shop modern, functional, affordable office furniture. Easy to assembly, unique designs/vibrant colors. Shop desks, chairs, file cabinets, office privacy pods! ",
      image: "/poppin.webp?height=200&width=300",
      tech: ["Salesforce", "API Integration", "Node.Js", "Javascript", ".Net", "SCSS"],
      github: "https://github.com/ashishvermag245",
      live: "https://www.poppin.com/",
    },
    {
      title: "Marks Print",
      description: "Smart Tags and labels manufacturing ZED Gold Certified Unit, catering to various industries such as Garments, FMCG, Cosmetics, Pharma, Retail, Automotive, and Food & Beverages and specializing in RFID tags and labels on diverse substrates, having advanced printing capabilities to produce the best decorative labels.",
      image: "/Marks Print Logo.png?height=200&width=300",
      tech: [ "HTML","Javascript", "Bootstrap", "CSS"],
      github: "https://github.com/ashishvermag245",
      live: "https://marksprint.co.in/front-end/",
    },
  ]



  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href={"/"}><div className="text-2xl font-bold text-white">Ashish Verma</div></Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-white/80 hover:text-white transition-colors">
                  Home
                </a>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About
                </a>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </a>
                <a href="#projects" className="text-white/80 hover:text-white transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
                <a
                  href="/AshishUpdateResume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-white/20">
                <div className="flex flex-col space-y-4">
                  <a href="#home" className="text-white/80 hover:text-white transition-colors">
                    Home
                  </a>
                  <a href="#about" className="text-white/80 hover:text-white transition-colors">
                    About
                  </a>
                  <a href="#services" className="text-white/80 hover:text-white transition-colors">
                    Services
                  </a>
                  <a href="#projects" className="text-white/80 hover:text-white transition-colors">
                    Projects
                  </a>
                  <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                    Contact
                  </a>
                  <a
                    href="/AshishUpdateResume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">All Projects</h2>
            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-white/10 text-white border-white/20 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 items-center">
                    <Link href={project.github} scroll={true} className="w-40 flex">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10 flex-1 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </Link>
                    <Link href={project.live} target="_blank"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 flex rounded-md px-2 py-1.5 w-40 items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Link href="/projects">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      < footer className="relative z-10 px-6 py-8 border-t border-white/20" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-white/60">© 2024 Ashish Verma. All rights reserved. Built with React & Next.js</p>
          </div>
        </div>
      </footer >
    </div >
  )
}
