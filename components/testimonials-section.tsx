import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechCorp",
      company: "TechCorp",
      rating: 5,
      content:
        "Outstanding work! The team delivered our project on time and exceeded our expectations. Their technical expertise and communication throughout the process was exceptional.",
      avatar: "/testimonial-sarah.png",
    },
    {
      name: "Michael Chen",
      position: "Founder, StartupLab",
      company: "StartupLab",
      rating: 5,
      content:
        "Working with this team transformed our business. They understood our vision and built a platform that perfectly matches our needs. Highly recommended!",
      avatar: "/testimonial-michael.png",
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager, DataFlow",
      company: "DataFlow",
      rating: 5,
      content:
        "The quality of code and attention to detail is remarkable. They helped us scale our application to handle millions of users without any performance issues.",
      avatar: "/testimonial-emily.png",
    },
  ]

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 relative">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />

              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
