import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Revolutionize Your Business with <span className="text-blue-600">Future-Ready</span>{" "}
              <span className="text-purple-600">Software Solutions</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform your business operations with cutting-edge software solutions designed to drive growth, enhance
              efficiency, and deliver exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/software-team-coding.png"
                alt="Software development team"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-2xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
