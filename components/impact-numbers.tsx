import { TrendingUp, Users, Clock, Award } from "lucide-react"

export function ImpactNumbers() {
  const stats = [
    {
      icon: TrendingUp,
      number: "98.1%",
      label: "Client Satisfaction Rate",
      description: "Based on project completion surveys",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Users,
      number: "50+",
      label: "Expert Developers",
      description: "Skilled professionals in our team",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Award,
      number: "10+",
      label: "Years Experience",
      description: "Delivering exceptional software solutions",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Impact in <span className="text-blue-400">Numbers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These numbers reflect our commitment to excellence and the trust our clients place in us.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="text-center bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-6`}>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>

                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>

                <h3 className="text-xl font-semibold text-gray-200 mb-2">{stat.label}</h3>

                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            )
          })}
        </div>

        {/* Additional metrics */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-400">Industries Served</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  )
}
