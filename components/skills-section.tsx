"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Code2, Database, Globe, Palette, Server } from "lucide-react"
import { Months } from "react-day-picker"

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React/Next.js", level: 75, years: 2 },
      { name: "TypeScript", level: 60, years: 1 },
      { name: "Vue.js", level: 85, years: 1 },
      { name: "JavaScript (ES6+)", level: 75, years: 2.5 },
      { name: "HTML5/CSS3", level: 90, years: 3 },
      { name: "Tailwind CSS", level: 80, years: 2 },
      { name: "Chakra/Material UI", level: 70, years: 1.5 },
      { name: "SCSS", level: 70, years: 2 },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: Server,
    skills: [
      { name: "Node.js", level: 50, Months: 6 },
      { name: "Express.js", level: 50, Months: 6 },
      { name: "REST APIs", level: 75, years: 1.5 },
      { name: "Nest.js", level: 60, Months: 6 },
    ],
  },
  {
    id: "database",
    title: "Database & Cloud",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 50, Months: 6 },
      { name: "PostgreSQL", level: 50, Months: 6 },
      { name: "Vercel", level: 80, years: 2 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Design",
    icon: Palette,
    skills: [
      { name: "Git/GitHub", level: 80, years: 2 },
      { name: "Figma", level: 75, years: 2 },
    ],
  },
]

const certifications = [
  "AWS Certified Developer Associate",
  "Google Analytics Certified",
  "Meta Frontend Developer Certificate",
  "MongoDB Developer Certification",
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || []
  const activeCategoryData = skillCategories.find((cat) => cat.id === activeCategory)
  const ActiveIcon = activeCategoryData?.icon || Code2

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Skills</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the full development stack with years of hands-on experience
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "gradient-primary text-white shadow-lg border"
                  : "glass-effect bg-card/60 hover:bg-card/80 border border-border/30"
              }`}
            >
              <category.icon className="h-5 w-5" />
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="rounded-lg border text-card-foreground shadow-sm backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <ActiveIcon className="h-6 w-6 text-white" />
                {activeCategoryData?.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {activeSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white/70 ">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white/70 ">{skill.years}y</span>
                      <span className="text-sm font-medium text-white/70 ">{skill.level}%</span>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications & Achievements */}
          <Card className="rounded-lg border text-card-foreground shadow-sm backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Globe className="h-6 w-6 text-white" />
                Certifications & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="justify-start p-3 text-sm">
                    {cert}
                  </Badge>
                ))}
              </div>

              <div className="pt-4 border-t border-border/30">
                <h4 className="font-semibold mb-3 text-white">Key Achievements</h4>
                <ul className="space-y-2 text-sm text-white/70 ">
                  <li>• Led frontend development for 15+ production applications</li>
                  <li>• Improved application performance by 40% through optimization</li>
                  <li>• Mentored 8+ junior developers in modern web technologies</li>
                  <li>• Open source contributor with 500+ GitHub stars</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology Stack Overview */}
        <Card className="rounded-lg border text-card-foreground shadow-sm backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group overflow-hidden">
          <CardHeader>
            <CardTitle className="text-center text-white">Complete Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {skillCategories
                .flatMap((cat) => cat.skills)
                .map((skill, index) => (
                  <Badge key={index} variant="outline" className="bg-accent/20 text-white">
                    {skill.name}
                  </Badge>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
