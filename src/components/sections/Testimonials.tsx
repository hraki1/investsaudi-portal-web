export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Saud",
      role: "CEO, Tech Ventures",
      content: "Invest Saudi Portal helped us navigate the investment landscape and find the perfect opportunity for our expansion.",
    },
    {
      name: "Sarah Johnson",
      role: "Investment Director",
      content: "The platform provides excellent insights and connects us with the right partners. Highly recommended!",
    },
    {
      name: "Mohammed Al-Rashid",
      role: "Business Owner",
      content: "Professional service and expert guidance throughout the entire process. Made our investment journey smooth.",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Trusted by investors and businesses across various sectors.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <p className="text-gray-600 dark:text-gray-300">
                "{testimonial.content}"
              </p>
              <div className="mt-4">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

