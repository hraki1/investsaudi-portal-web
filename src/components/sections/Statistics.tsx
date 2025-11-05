export default function Statistics() {
  const stats = [
    { label: "Active Investors", value: "10K+" },
    { label: "Investment Projects", value: "500+" },
    { label: "Sectors Covered", value: "20+" },
    { label: "Success Rate", value: "95%" },
  ];

  return (
    <section className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-20 dark:from-green-700 dark:to-green-800 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-green-100 sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

