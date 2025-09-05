import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react"

const education = [
  {
    degree: "Higher Secondary (12th)",
    institution: "S G N P Boys Inter College",
    location: "Dehradun , Uttarakhand",
    period: "2018-2019",
    percentage: "61%",
    specialization: "Chemistry, Management & Web Technologies",
    achievements: ["21km Marathon", "Chemistry Competiton","Microsoft Office", "Tally ERP 9", "Data Entry",],
    coursework: [ "Web Development" , "Management" , "Marketing"],
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "Indira Gandhi National Open University",
    location: "Delhi",
    period: "2019 - 2023",
    percentage: "62%",
    specialization: "Frontend Development & Statical Techniques",
    achievements: [],
    coursework: ["Web Programming", "Database Systems", "Networking", "Java"],
  },
]

const courses = [
  {
    title: "Advanced React Development",
    provider: "Meta",
    year: "2023",
    credential: "Professional Certificate",
  },
  {
    title: "AWS Solutions Architect",
    provider: "Amazon Web Services",
    year: "2023",
    credential: "Associate Level",
  },
  {
    title: "Google UX Design Certificate",
    provider: "Google",
    year: "2022",
    credential: "Professional Certificate",
  },
  {
    title: "Full Stack Web Development",
    provider: "freeCodeCamp",
    year: "2021",
    credential: "Certification",
  },
]

const workshops = [
  "React Conf 2023 - Advanced Patterns Workshop",
  "Next.js Conf 2023 - Performance Optimization",
  "Design Systems Workshop - Figma",
  "GraphQL Summit - API Design Best Practices",
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 gradient-secondary opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education & Learning</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Continuous learning journey through formal education and professional development
          </p>
        </div>

        {/* Formal Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white">
            <GraduationCap className="h-6 w-6 text-white" />
            Formal Education
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="rounded-lg border text-card-foreground shadow-sm backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group overflow-hidden"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2 text-white">{edu.degree}</CardTitle>
                      <p className="text-lg font-medium text-white">{edu.institution}</p>
                      <p className="text-white/70">{edu.location}</p>
                    </div>
                    <div className="text-right text-white/70">
                      <Badge variant="outline" className="mb-2 text-white/70">
                        <Calendar className="h-3 w-3 mr-1 text-white/70" />
                        {edu.period}
                      </Badge>
                      <p className="text-sm font-medium text-white/70">Percentage: {edu.percentage}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-white mb-2">Specialization: {edu.specialization}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4 text-white/70" />
                      Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <Badge key={achIndex} variant="secondary">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-white">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="secondary">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 hidden">
          <Card className="glass-effect bg-card/70 border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="flex justify-between items-start p-3 rounded-lg bg-accent/20">
                  <div>
                    <h4 className="font-medium">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">{course.provider}</p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {course.credential}
                    </Badge>
                  </div>
                  <span className="text-sm font-medium text-primary">{course.year}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-effect bg-card/70 border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Workshops & Conferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {workshops.map((workshop, index) => (
                  <div key={index} className="p-3 rounded-lg bg-accent/20">
                    <p className="text-sm font-medium">{workshop}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border/30">
                <h4 className="font-semibold mb-3">Learning Philosophy</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I believe in continuous learning and staying updated with the latest technologies. I regularly attend
                  conferences, complete online courses, and contribute to open-source projects to expand my knowledge
                  and give back to the community.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
