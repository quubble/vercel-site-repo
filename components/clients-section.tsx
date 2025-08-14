export function ClientsSection() {
  const clients = [
    { name: "TechCorp", logo: "/client-techcorp.png" },
    { name: "InnovateLab", logo: "/client-innovatelab.png" },
    { name: "DataFlow", logo: "/client-dataflow.png" },
    { name: "CloudSync", logo: "/client-cloudsync.png" },
    { name: "NextGen", logo: "/client-nextgen.png" },
    { name: "DigitalEdge", logo: "/client-digitaledge.png" },
  ]

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Some of Our <span className="text-blue-600">Esteemed Clients</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies worldwide to deliver exceptional software solutions.
          </p>
        </div>

        {/* Clients grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                className="max-w-full h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Additional text */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Join <span className="font-semibold text-gray-900">200+</span> satisfied clients who trust us with their
            digital transformation journey.
          </p>
        </div>
      </div>
    </section>
  )
}
