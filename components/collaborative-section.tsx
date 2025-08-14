import { Check } from "lucide-react"

export function CollaborativeSection() {
  const features = [
    "Agile Development Process",
    "Cross-Platform Compatibility",
    "Scalable Architecture",
    "24/7 Technical Support",
    "Quality Assurance Testing",
    "Continuous Integration",
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                Collaborative Development
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Collaborative Development for <span className="text-blue-600">Custom Solutions</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe in working closely with our clients to understand their unique needs and deliver tailored
              software solutions that drive real business results. Our collaborative approach ensures transparency and
              alignment throughout the development process.
            </p>

            {/* Feature list */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Team image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/about-us-team.png"
                alt="Development team collaboration"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
