import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Application",
      description: "Modern e-commerce platform with advanced analytics and multi-vendor support.",
      image: "/portfolio-ecommerce.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    },
    {
      title: "Healthcare Dashboard",
      category: "SaaS Platform",
      description: "Comprehensive healthcare management system with patient tracking and analytics.",
      image: "/portfolio-healthcare.png",
      technologies: ["Vue.js", "Python", "MongoDB", "AWS"],
    },
    {
      title: "Financial Analytics",
      category: "Data Platform",
      description: "Real-time financial data analysis platform with advanced visualization tools.",
      image: "/portfolio-finance.png",
      technologies: ["Angular", "Java", "MySQL", "D3.js"],
    },
    {
      title: "Learning Management",
      category: "Education Platform",
      description: "Interactive learning platform with video streaming and progress tracking.",
      image: "/portfolio-education.png",
      technologies: ["Next.js", "Express", "Redis", "WebRTC"],
    },
    {
      title: "IoT Monitoring",
      category: "IoT Solution",
      description: "Real-time IoT device monitoring and control system with predictive analytics.",
      image: "/portfolio-iot.png",
      technologies: ["React", "Python", "InfluxDB", "MQTT"],
    },
    {
      title: "Social Media App",
      category: "Mobile Application",
      description: "Cross-platform social media application with real-time messaging and content sharing.",
      image: "/portfolio-social.png",
      technologies: ["React Native", "Firebase", "Node.js", "Socket.io"],
    },
  ]

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent projects that showcase our expertise in delivering innovative software solutions
            across various industries.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
