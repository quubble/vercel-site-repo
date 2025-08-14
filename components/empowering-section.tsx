import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmpoweringSection() {
  const benefits = [
    "Increased operational efficiency",
    "Reduced development costs",
    "Faster time-to-market",
    "Enhanced user experience",
    "Scalable infrastructure",
    "Future-proof technology",
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <img
                src="/diverse-startup-collaboration.png"
                alt="Empowering startups and modern businesses"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-2xl -z-10"></div>
          </div>

          {/* Right content */}
          <div className="order-1 lg:order-2">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full">
                Empowering
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Empowering <span className="text-purple-600">Startups</span>, <span className="text-blue-600">SaaS</span>,
              and <span className="text-green-600">Modern Businesses</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From innovative startups to established enterprises, we provide the technical expertise and strategic
              guidance needed to transform ideas into successful digital products that users love and businesses depend
              on.
            </p>

            {/* Benefits list */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
