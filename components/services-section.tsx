import { Monitor, Smartphone, Cloud, ShoppingCart, Database, Cog } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-browser Support"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Deployment"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services to ensure your applications perform reliably at any scale.",
      features: ["AWS/Azure/GCP", "DevOps & CI/CD", "Microservices", "Auto-scaling"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Development",
      description:
        "Complete e-commerce solutions with payment integration, inventory management, and customer analytics.",
      features: ["Payment Gateway", "Inventory System", "Analytics", "Multi-vendor Support"],
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description:
        "Data-driven solutions including business intelligence, analytics dashboards, and machine learning integration.",
      features: ["Business Intelligence", "Real-time Analytics", "Data Visualization", "ML Integration"],
    },
    {
      icon: Cog,
      title: "API Development",
      description:
        "Robust and scalable APIs that enable seamless integration between systems and third-party services.",
      features: ["RESTful APIs", "GraphQL", "API Documentation", "Rate Limiting"],
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive software development services to help businesses transform their ideas into powerful
            digital solutions.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
