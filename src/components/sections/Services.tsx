export default function Services() {
  const services = [
    {
      title: "Investment Consultation",
      description: "Expert guidance on investment opportunities and market analysis.",
    },
    {
      title: "Market Research",
      description: "Comprehensive market research and industry reports.",
    },
    {
      title: "Business Setup",
      description: "Assistance with company registration and licensing.",
    },
    {
      title: "Investment Matching",
      description: "Connect with the right partners and investment opportunities.",
    },
    {
      title: "Legal Support",
      description: "Legal consultation and compliance assistance.",
    },
    {
      title: "Ongoing Support",
      description: "Continuous support throughout your investment journey.",
    },
  ];

  return (
    <section id="services" className="bg-white px-4 py-20 dark:bg-black sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Comprehensive services to support your investment journey in Saudi Arabia.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-gray-50 p-8 transition-shadow hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

