import { Shield, Zap, Users, Code, Globe, Headphones } from "lucide-react"

export function DifferentiatorSection() {
  const differentiators = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Enterprise-grade security measures and compliance standards to protect your data and ensure regulatory adherence.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance and cutting-edge technologies to deliver blazing-fast applications that scale effortlessly.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Seasoned developers and architects with deep expertise across multiple technologies and industry domains.",
    },
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Well-structured, maintainable code following industry best practices and comprehensive documentation.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Worldwide deployment capabilities with multi-region support and localization for international markets.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and maintenance to ensure your applications run smoothly at all times.",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What Makes Us <span className="text-blue-400">Different</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that not only work flawlessly but
            also drive measurable business outcomes.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-blue-500/50"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>

                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
