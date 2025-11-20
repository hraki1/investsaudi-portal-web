import { useState, type FormEvent, useRef, useEffect } from "react";
import { HiPhone, HiEnvelope } from "react-icons/hi2";
import { FaXTwitter } from "react-icons/fa6";
import { PiGlobe } from "react-icons/pi";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput";

export default function SupportAndContact() {
  const [fileName, setFileName] = useState<string>("");
  const [phoneValue, setPhoneValue] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [isPurposeOpen, setIsPurposeOpen] = useState<boolean>(false);
  const purposeRef = useRef<HTMLDivElement>(null);

  const purposeOptions = [
    { value: "general", label: "General Inquiry" },
    { value: "business", label: "Business Support" },
    { value: "investment", label: "Investment Opportunities" },
    { value: "technical", label: "Technical Issue" },
    { value: "partnership", label: "Partnership Inquiry" },
    { value: "other", label: "Other" },
  ];

  const selectedPurpose = purposeOptions.find((opt) => opt.value === purpose);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (purposeRef.current && !purposeRef.current.contains(event.target as Node)) {
        setIsPurposeOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // No backend wired yet; keep it client-only
    alert("Submitted! (demo)");
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) setFileName(f.name);
  }

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div className="container mx-auto rounded-2xl max-w-[1412px] p-4 md:p-6 lg:p-1.5 space-y-4 shadow-sm">
        {/* Banner */}
        <div
          className="relative rounded-2xl overflow-hidden mb-6 md:mb-8"
          style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.06)" }}
        >
          <div className="relative w-full h-56 md:h-72 lg:h-[371px] overflow-hidden">
            <img
              src="/contact-support/flag.jpg"
              alt="Flag"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Contact chips overlay */}
          <div className="absolute bottom-4 left-4 flex flex-col md:flex-row gap-3 md:gap-6 z-10">
            {/* Left Column */}
            <div className="flex flex-col gap-3">
              {/* Globe Icon - Website/Toll-free */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center shadow shrink-0">
                  <PiGlobe className="text-purple-600 text-xl" />
                </div>
                <div className="bg-black/80 backdrop-blur rounded-lg px-3 py-2">
                  <span className="text-white text-sm font-medium">8002449990</span>
                </div>
              </div>
              
              {/* X/Twitter Icon */}
              <a
                href="https://twitter.com/MISACare"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center shadow shrink-0">
                  <FaXTwitter className="text-gray-800 text-xl" />
                </div>
                <div className="bg-black/80 backdrop-blur rounded-lg px-3 py-2">
                  <span className="text-white text-sm font-medium">@MISACare</span>
                </div>
              </a>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3">
              {/* Phone Icon */}
              <a
                href="tel:+966115065777"
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center shadow shrink-0">
                  <HiPhone className="text-teal-600 text-xl" />
                </div>
                <div className="bg-black/80 backdrop-blur rounded-lg px-3 py-2">
                  <span className="text-white text-sm font-medium">+966115065777</span>
                </div>
              </a>
              
              {/* Email Icon */}
              <a
                href="mailto:MatchmakingCare@misa.gov.sa"
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center shadow shrink-0">
                  <HiEnvelope className="text-blue-600 text-xl" />
                </div>
                <div className="bg-black/80 backdrop-blur rounded-lg px-3 py-2">
                  <span className="text-white text-sm font-medium">MatchmakingCare@misa.gov.sa</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-4 px-1 p-4 md:p-6 lg:p-7">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Support and Contact</h2>
          <p className="text-sm md:text-[15px] text-gray-600 mt-1">
            Have questions or need assistance? We’re here to help! Reach out to us via phone,
            email, or by filling out the form.
          </p>
        </div>


       

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="bg-white rounded-2xl p-4 md:p-6 lg:p-7"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-5">
            <input
              placeholder="Enter Subject"
              className="h-11 rounded-lg border border-[#E3E8EF] px-3 outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="h-11 rounded-lg border border-[#E3E8EF] px-3 outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              placeholder="First Name"
              className="h-11 rounded-lg border border-[#E3E8EF] px-3 outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              placeholder="Last Name"
              className="h-11 rounded-lg border border-[#E3E8EF] px-3 outline-none focus:ring-2 focus:ring-purple-300"
            />

            {/* Phone with country */}
            <PhoneNumberInput
              value={phoneValue}
              onChange={setPhoneValue}
              placeholder="Enter phone number"
              defaultCountry="JO"
            />

            {/* Custom Purpose Dropdown */}
            <div className="relative" ref={purposeRef}>
              <button
                type="button"
                onClick={() => setIsPurposeOpen(!isPurposeOpen)}
                className="h-11 w-full rounded-lg border border-[#E3E8EF] px-3 bg-white outline-none focus:ring-2 focus:ring-purple-300 cursor-pointer flex items-center justify-between text-left"
              >
                <span className={purpose ? "text-gray-900" : "text-gray-400"}>
                  {selectedPurpose ? selectedPurpose.label : "Purpose of Contacting"}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${isPurposeOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isPurposeOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {purposeOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setPurpose(option.value);
                        setIsPurposeOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors ${
                        purpose === option.value ? "bg-purple-50 text-purple-600" : "text-gray-900"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <textarea
            placeholder="Enter Message"
            className="w-full min-h-28 mb-2 rounded-lg border border-[#E3E8EF] p-3 outline-none focus:ring-2 focus:ring-purple-300"
          />

          {/* Upload */}
          <div 
            className="rounded-lg p-8 border border-[#E3E8EF] text-center cursor-pointer  transition-colors"
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const files = e.dataTransfer.files;
              if (files && files[0]) {
                onFileChange({ target: { files } } as React.ChangeEvent<HTMLInputElement>);
              }
            }}
            onClick={() => document.getElementById("upload-input")?.click()}
          >
            <input 
              id="upload-input" 
              type="file" 
              className="hidden" 
              onChange={onFileChange}
              accept=".jpeg,.jpg,.png,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
            />
            
            {/* Upload Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-lg border-2 border-teal-400 flex items-center justify-center">
                <svg 
                  className="w-8 h-8 text-teal-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                  />
                </svg>
              </div>
            </div>
            
            {/* Upload Text */}
            <div className="mb-2">
              <span className="text-teal-400 font-medium">Click to upload</span>
              <span className="text-gray-500"> or drag and drop</span>
            </div>
            
            {/* File Types */}
            <p className="text-sm text-gray-500">
              JPEG, PNG, PDF, DOC, PPT or XLS (Maximum file size allowed is 9MB)
            </p>
            
            {fileName && (
              <p className="mt-3 text-sm text-teal-600 font-medium">
                Selected: {fileName}
              </p>
            )}
          </div>

          <div className="mt-3">
            <button
              type="submit"
              className="w-full h-11 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold flex items-center justify-center gap-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}


