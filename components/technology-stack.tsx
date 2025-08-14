export function TechnologyStack() {
  const technologies = [
    {
      category: "Frontend",
      tools: [
        { name: "React", logo: "/react-logo.png" },
        { name: "Next.js", logo: "/nextjs-logo.png" },
        { name: "Vue.js", logo: "/vuejs-logo.png" },
        { name: "Angular", logo: "/angular-logo.png" },
      ],
    },
    {
      category: "Backend",
      tools: [
        { name: "Node.js", logo: "/nodejs-logo.png" },
        { name: "Python", logo: "/python-logo.png" },
        { name: "Java", logo: "/java-logo.png" },
        { name: ".NET", logo: "/dotnet-logo.png" },
      ],
    },
    {
      category: "Database",
      tools: [
        { name: "PostgreSQL", logo: "/postgresql-logo.png" },
        { name: "MongoDB", logo: "/mongodb-logo.png" },
        { name: "MySQL", logo: "/images/mysql.png" },
        { name: "Redis", logo: "/redis-logo.png" },
      ],
    },
    {
      category: "Cloud & DevOps",
      tools: [
        { name: "AWS", logo: "/aws-logo.png" },
        { name: "Docker", logo: "/docker-logo.png" },
        { name: "Kubernetes", logo: "/kubernetes-logo.png" },
        { name: "Vercel", logo: "/vercel-logo.png" },
      ],
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Technology <span className="text-blue-600">Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and proven frameworks to build robust, scalable, and future-ready
            applications.
          </p>
        </div>

        {/* Technology categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">{category.category}</h3>

              <div className="grid grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <img src={tool.logo || "/placeholder.svg"} alt={`${tool.name} logo`} className="w-10 h-10 mb-2" />
                    <span className="text-sm font-medium text-gray-700 text-center">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional technologies */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">And many more technologies including:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "TypeScript",
              "GraphQL",
              "Tailwind CSS",
              "Firebase",
              "Supabase",
              "Stripe",
              "Shopify",
              "Figma",
              "Git",
              "CI/CD",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
