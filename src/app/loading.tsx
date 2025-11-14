export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-linear-to-br from-[#002B2A] via-[#001A2A] to-[#002B2A] animate-fade-in">
      {/* White Logo */}
      <div className="mb-8">
        <img
          src="/Navbar/logo.png"
          alt="logo"
          className="h-12 md:h-16 w-auto object-contain brightness-0 invert"
        />
      </div>

      {/* Three Animated Dots */}
      <div className="flex items-center gap-2">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-2 h-2 bg-white rounded-full animate-bounce-up-down"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}