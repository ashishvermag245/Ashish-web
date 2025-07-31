"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  Download,
  ArrowRight,
  Star,
  Users,
  Coffee,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

export default function PortfolioHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Html",
    "CSS",
    "Tailwind CSS",
    "SCSS",
    "Bootstrap",
    "Jquery",
    "Chakra UI",
    "Git",
  ]

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
  ]

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, interactive, and pixel-perfect user interfaces using modern frameworks like React and Angular.",
    },
    {
      icon: Globe,
      title: "Performance Optimization",
      description: "Enhancing website speed and responsiveness through efficient coding, lazy loading, and best UI practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Designing interfaces that look and work flawlessly across all screen sizes, with a focus on mobile usability.",
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Translating design systems and wireframes into clean, user-friendly experiences using the latest design standards and accessibility practices.",
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
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
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
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <img
                    src="/Ashish_profile.jpg?height=120&width=120"
                    alt="Developer Avatar"
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ashish Verma
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Front-end Developer crafting elegant, high-performance, and user-friendly digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="#projects" scroll={true}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-3"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="#contact" scroll={true}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
                >
                  Get In Touch
                  <Mail className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Link href="https://github.com/ashishvermag245">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 rounded-full">
                <Github className="w-6 h-6" />
              </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/ashish-verma-b79229249/">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 rounded-full">
                <Linkedin className="w-6 h-6" />
              </Button>
              </Link>
              <Link href="mailto:ashishverma2047@gmail.com">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 rounded-full">
                <Mail className="w-6 h-6" />
              </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Code, number: "20+", label: "Projects Completed" },
              { icon: Users, number: "15+", label: "Happy Clients" },
              { icon: Star, number: "4.3", label: "Average Rating" },
              { icon: Coffee, number: "1000+", label: "Cups of Coffee" },
            ].map((stat, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20 text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                I'm a passionate Front-End Developer with 3 years of experience crafting impactful digital experiences. I specialize in modern web technologies and thrive on transforming complex ideas into clean, responsive, and high-performance websites.
              </p>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                I take pride in writing clean, maintainable code and continuously pushing the boundaries of front-end development. From improving page speed to delivering pixel-perfect UI, I’m dedicated to building web solutions that not only look great but also perform seamlessly.</p>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                When I’m not coding, I’m likely exploring emerging tech trends, contributing to open-source projects, or sharing knowledge with the dev community.
              </p>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                Download Resume
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-8">
                <img
                  src="/about.webp?height=400&width=400"
                  alt="Developer Workspace"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What I Do</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              I specialize in crafting engaging, high-performance web interfaces that elevate user experience and bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
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
                    <Link href={project.live}
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

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </div>

          <Card className="backdrop-blur-md bg-white/10 border-white/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-white/70">ashishverma2047@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Phone Number</p>
                        <p className="text-white/70">+91 6398069235</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <Github className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">GitHub</p>
                        <p className="text-white/70">https://github.com/ashishvermag245</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <Linkedin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">LinkedIn</p>
                        <p className="text-white/70">https://www.linkedin.com/in/ashish-verma-b79229249/</p>
                      </div>
                    </div>
                  </div>
                </div>

                <form
                  action="https://formsubmit.co/ashishverma2047@gmail.com"  // Replace with your actual email
                  method="POST"
                  className="space-y-4"
                >
                  {/* Optional: Turn off CAPTCHA */}
                  <input type="hidden" name="_captcha" value="false" />

                  {/* Optional: Redirect to a thank you page after form submission */}
                  <input type="hidden" name="_next" value="https://your-portfolio.com/thanks" />

                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Your Message"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 py-3"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>

              </div>
          </CardContent>
        </Card>
    </div>
      </section >

    {/* Footer */ }
    < footer className = "relative z-10 px-6 py-8 border-t border-white/20" >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-white/60">© 2024 Ashish Verma. All rights reserved. Built with React & Next.js</p>
        </div>
      </div>
      </footer >
    </div >
  )
}
