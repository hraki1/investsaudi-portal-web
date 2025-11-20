"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiXMark,
  HiEnvelope,
  HiShare,
  HiArrowRight,
  HiClock,
  HiPhone,
} from "react-icons/hi2";

export interface InvestmentProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
  title: string;
  type: string;
  location: string;
  description: string;
}

export default function InvestmentProjectModal({
  isOpen,
  onClose,
  id,
  title,
  type,
  location,
  description,
}: InvestmentProjectModalProps) {
  // Generate opportunity number from id
  const opportunityNumber = `01-25-${String(id).padStart(6, "0")}-${
    Math.floor(Math.random() * 9000) + 1000
  }`;

  // Map zoom state
  const [zoom, setZoom] = useState(16);
  const minZoom = 10;
  const maxZoom = 20;

  // Project location (default/initial location)
  const projectLat = 24.7136;
  const projectLng = 46.7219;

  // Map location state
  const [lat, setLat] = useState(projectLat);
  const [lng, setLng] = useState(projectLng);
  const [isLocating, setIsLocating] = useState(false);
  const [isAtProjectLocation, setIsAtProjectLocation] = useState(true);

  // Generate Google Maps embed URL with zoom
  const getMapUrl = (zoomLevel: number) => {
    // Using Google Maps embed URL with coordinates and zoom
    // Format: https://www.google.com/maps?q=lat,lng&z=zoom&output=embed
    return `https://www.google.com/maps?q=${lat},${lng}&z=${zoomLevel}&output=embed`;
  };

  const handleZoomIn = () => {
    if (zoom < maxZoom) {
      setZoom(zoom + 1);
    }
  };

  const handleZoomOut = () => {
    if (zoom > minZoom) {
      setZoom(zoom - 1);
    }
  };

  const handleLocate = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          setZoom(16); // Reset to street level when locating
          setIsLocating(false);
          setIsAtProjectLocation(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLocating(false);
          // Optionally show an error message to the user
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setIsLocating(false);
    }
  };

  const handleReturnToProject = () => {
    setLat(projectLat);
    setLng(projectLng);
    setZoom(16);
    setIsAtProjectLocation(true);
  };

  // Info boxes data
  const infoBoxes = [
    {
      label: "Opportunity #",
      value: opportunityNumber,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      label: "Activity Type",
      value: type,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      label: "Contract Period",
      value: "20 Years",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

  // Description sections data
  const descriptionSections = [
    {
      title: "Competitions submission site",
      content:
        "Electronic submission through the website, and in case of website malfunction, manual submission to the Investment and Allocation Agency.",
    },
    {
      title: "Investment opportunity description",
      content: description,
    },
  ];

  // Competition times data
  const competitionTimes = [
    {
      title: "Last date to purchase the booklet",
      dateTime: "23/12/2025 - 4:00 AM",
    },
    {
      title: "Deadline for receiving inquiries",
      dateTime: "23/12/2025",
    },
    {
      title: "Start of the competition",
      dateTime: "23/12/2025 - 4:00 AM",
    },
    {
      title: "Date of opening the envelopes",
      dateTime: "23/12/2025 - 10:00 AM",
    },
  ];

  // Required documents data
  const requiredDocuments = [
    {
      title: "Mandatory documents",
      items: [
        "Valid commercial registration",
        "Tax ID number",
        "The original tender form is attached to the brochure",
        "Valid Zakat and Income Certificate",
        "Valid Chamber of Commerce membership certificate",
        "Certificate of Commitment to Saudization",
        "Bank guarantee",
      ],
    },
    {
      title: "Optional documents",
      items: ["Copy of the advertisement"],
    },
  ];

  // Portal root state
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Get or create portal root
    let root = document.getElementById("root-modal");
    if (!root) {
      root = document.createElement("div");
      root.id = "root-modal";
      document.body.appendChild(root);
    }
    setPortalRoot(root);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!portalRoot) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="w-[95%] md:w-[90%] lg:w-[90%] xl:w-[93%] max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl flex justify-center relative bg-white"
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full relative w-full">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors z-10 shadow-lg"
              >
                <HiXMark className="w-5 h-5 text-gray-600" />
              </button>

              {/* Left Side - Map */}
              <div className="w-1/2 bg-gray-900 relative overflow-hidden flex flex-col">
                {/* Map Container */}
                <div className="flex-1 flex items-center justify-center relative">
                  {/* Google Maps iframe - Street level view of Riyadh, King Abdullah District */}
                  <div className="w-full h-full bg-gray-800 rounded-lg relative overflow-hidden">
                    <iframe
                      key={`${lat}-${lng}-${zoom}`}
                      src={getMapUrl(zoom)}
                      width="100%"
                      height="100%"
                      style={{
                        border: 0,
                        filter:
                          "invert(1) hue-rotate(180deg) brightness(0.95) contrast(1.1)",
                      }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      title="Map of King Abdullah District, Riyadh"
                    />
                  </div>

                  {/* Site Information Panel Overlay */}
                  <div className="absolute w-[95%] mx-auto bottom-7 left-0 right-0  bg-white rounded-2xl shadow-lg z-10 p-6">
                    {/* First Row */}
                    <div className="grid grid-cols-3 gap-6 mb-4">
                      <div>
                        <p className="text-gray-800 font-semibold text-sm mb-1">
                          Street
                        </p>
                        <p className="text-gray-600 text-sm">
                          Rafi' ibn Bashir al-Sulami
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold text-sm mb-1">
                          Neighborhood
                        </p>
                        <p className="text-gray-600 text-sm">King Abdullah</p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold text-sm mb-1">
                          Site area in square meters
                        </p>
                        <p className="text-gray-600 text-sm">1050</p>
                      </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-800 font-semibold text-sm mb-1">
                          Site number
                        </p>
                        <p className="text-gray-600 text-sm">
                          {opportunityNumber}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold text-sm mb-1">
                          Site description
                        </p>
                        <p className="text-gray-600 text-sm">
                          King Create, operate, and maintain a multi-site site +
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute bottom-[210px] right-4 bg-white rounded-lg shadow-lg overflow-hidden z-20">
                  {/* Target/Locate Button or Return to Project */}
                  {isAtProjectLocation ? (
                    <button
                      onClick={handleLocate}
                      disabled={isLocating}
                      className={`w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors border-b border-gray-200 ${
                        isLocating ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      title="Locate me"
                    >
                      <svg
                        className={`w-5 h-5 text-black ${
                          isLocating ? "animate-spin" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {/* Outer circle */}
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        />
                        {/* Inner dot */}
                        <circle cx="12" cy="12" r="2" fill="currentColor" />
                        {/* Top line */}
                        <line
                          x1="12"
                          y1="4"
                          x2="12"
                          y2="6"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        {/* Bottom line */}
                        <line
                          x1="12"
                          y1="18"
                          x2="12"
                          y2="20"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        {/* Left line */}
                        <line
                          x1="4"
                          y1="12"
                          x2="6"
                          y2="12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        {/* Right line */}
                        <line
                          x1="18"
                          y1="12"
                          x2="20"
                          y2="12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={handleReturnToProject}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors border-b border-gray-200"
                      title="Return to project location"
                    >
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                  )}
                  {/* Zoom In */}
                  <button
                    onClick={handleZoomIn}
                    disabled={zoom >= maxZoom}
                    className={`w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors border-b border-gray-200 ${
                      zoom >= maxZoom ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <span className="text-gray-700 font-semibold text-xl leading-none">
                      +
                    </span>
                  </button>
                  {/* Zoom Out */}
                  <button
                    onClick={handleZoomOut}
                    disabled={zoom <= minZoom}
                    className={`w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors ${
                      zoom <= minZoom ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <span className="text-gray-700 font-semibold text-xl leading-none">
                      −
                    </span>
                  </button>
                </div>

                {/* Site Info Panel at Bottom of Map */}
                {/* <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 z-10">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Street:</span>
                <span className="text-gray-800 font-medium">Rafi' ibn Bashir al-Sulami</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Neighborhood:</span>
                <span className="text-gray-800 font-medium">King Abdullah</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Site number:</span>
                <span className="text-gray-800 font-medium">25-01-1645864</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Site area in square meters:</span>
                <span className="text-gray-800 font-medium">1050</span>
              </div>
              <div>
                <span className="text-gray-600">Site description: </span>
                <span className="text-gray-800 font-medium">King Create, operate, and maintain a multi-site site +</span>
              </div>
            </div>
          </div> */}
              </div>

              {/* Right Side - Data */}
              <div className="w-1/2 bg-white overflow-y-auto max-h-[90vh]">
                <div className="p-4 md:p-6">
                  {/* Title */}
                  <h2 className="text-lg md:text-2xl bukra-bold text-[#525252] mb-2 pr-5">
                    {title} - {type} - {location}
                  </h2>

                  {/* Countdown */}
                  <div className="flex items-center gap-2 text-gray-600 mb-6">
                    {/* icon */}
                    <div className="w-5 h-5 ">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.4"
                          cx="9.49967"
                          cy="9.50065"
                          r="7.91667"
                          fill="#00A7A2"
                        />
                        <path
                          d="M10.0934 6.33398C10.0934 6.00607 9.82759 5.74023 9.49967 5.74023C9.17176 5.74023 8.90592 6.00607 8.90592 6.33398V9.50065C8.90592 9.65812 8.96848 9.80915 9.07983 9.9205L10.6632 11.5038C10.895 11.7357 11.271 11.7357 11.5029 11.5038C11.7347 11.272 11.7347 10.896 11.5029 10.6641L10.0934 9.25471V6.33398Z"
                          fill="#00A7A2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49967 0.990234C4.7995 0.990234 0.989258 4.80048 0.989258 9.50065C0.989258 14.2008 4.7995 18.0111 9.49967 18.0111C14.1998 18.0111 18.0101 14.2008 18.0101 9.50065C18.0101 4.80048 14.1998 0.990234 9.49967 0.990234ZM2.17676 9.50065C2.17676 5.45632 5.45534 2.17773 9.49967 2.17773C13.544 2.17773 16.8226 5.45632 16.8226 9.50065C16.8226 13.545 13.544 16.8236 9.49967 16.8236C5.45534 16.8236 2.17676 13.545 2.17676 9.50065Z"
                          fill="#00A7A2"
                        />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base text-[#262626] bukra-regular">
                      After 2 weeks, 2 days, 6 hours
                    </span>
                  </div>

                  {/* Info Boxes */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {infoBoxes.map((box, index) => (
                      <div
                        key={index}
                        className={`${box.bgColor} border ${box.borderColor} rounded-lg p-4`}
                      >
                        <p className="text-sm text-[#262626] bukra-medium mb-1">
                          {box.label}
                        </p>
                        <p className="text-sm text-[#262626] bukra-regular">
                          {box.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Description Sections */}
                  {descriptionSections.map((section, index) => (
                    <div key={index} className="mb-5">
                      <h3 className="text-sm bukra-bold text-[#525252] mb-1">
                        {section.title}
                      </h3>
                      <p className="text-[#262626] bukra-regular text-sm  leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}

                  {/* Competition Times */}
                  <div className="mb-5">
                    <h3 className="text-base bukra-medium text-[#007D7A] mb-1">
                      Competition times
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      {competitionTimes.map((item, index) => (
                        <div
                          key={index}
                          className="bg-[#F5F5F5] rounded-xl p-3 flex flex-col"
                        >
                          <span className="text-[#262626] bukra-medium text-sm mb-1">
                            {item.title}
                          </span>
                          <span className="text-[#262626] bukra-regular text-sm">
                            {item.dateTime}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Required Documents */}
                  <div className="mb-6">
                    <h3 className="text-base bukra-medium text-[#007D7A] mb-1">
                      Required documents
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
                      {requiredDocuments.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 className="text-sm text-[#262626] bukra-medium mb-2">
                            {section.title}
                          </h4>
                          <ul className="space-y-2 text-sm text-[#262626] bukra-regular">
                            {section.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-center gap-2"
                              >
                                <span className="text-[#262626] bukra-regular text-sm">
                                  •
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Investment Opportunity Attachments */}
                  <div className="mb-6">
                    <h3 className="text-base bukra-medium text-[#007D7A] mb-3">
                      Investment Opportunity Attachments
                    </h3>
                    <div className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-[9px] border border-gray-200">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 0.75H27C27.1212 0.75 27.2375 0.798088 27.3232 0.883789L38.1162 11.6768C38.2019 11.7625 38.25 11.8788 38.25 12V36C38.25 37.7949 36.7949 39.25 35 39.25H11C9.20507 39.25 7.75 37.7949 7.75 36V4C7.75 2.20507 9.20508 0.75 11 0.75Z"
                          stroke="#D5D7DA"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M27 0.5V8C27 10.2091 28.7909 12 31 12H38.5"
                          stroke="#D5D7DA"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M0 20C0 18.8954 0.895431 18 2 18H26C27.1046 18 28 18.8954 28 20V32C28 33.1046 27.1046 34 26 34H2C0.895431 34 0 33.1046 0 32V20Z"
                          fill="#D92D20"
                        />
                        <path
                          d="M7.04879 25.97H5.44879V29H4.00879V20.89H7.04879C9.11879 20.89 10.0188 22.1 10.0188 23.37C10.0188 24.72 9.05879 25.97 7.04879 25.97ZM6.73879 22.23H5.44879V24.63H6.73879C7.78879 24.63 8.49879 24.34 8.49879 23.4C8.49879 22.6 7.92879 22.23 6.73879 22.23ZM12.6558 27.66H13.3258C15.2958 27.66 16.5458 26.93 16.5458 24.9C16.5458 23.01 15.2658 22.23 13.3758 22.23H12.6558V27.66ZM11.2158 29V20.89H13.3558C16.0558 20.89 18.0658 22.25 18.0658 24.9C18.0658 27.52 16.1358 29 13.4158 29H11.2158ZM20.9566 29H19.5166V20.89H24.6866V22.23H20.9566V24.16H24.3266V25.52H20.9566V29Z"
                          fill="white"
                        />
                      </svg>

                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">
                          {location} neighborhood - compressed
                        </p>
                        <p className="text-xs text-gray-500">
                          11 Sep, 2025 | 12:24pm • 13MB
                        </p>
                      </div>
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <svg
                          className="w-6 h-6 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      {/* contact icon */}
                      <button className="rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z"
                            fill="white"
                          />
                          <path
                            d="M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z"
                            stroke="#E5E5E5"
                          />
                          <path
                            d="M19.9678 21.07C20.7845 21.5509 21.392 21.7917 21.9995 21.7917C22.6078 21.7917 23.2153 21.5517 24.0328 21.07L26.4845 19.62C26.782 19.445 26.8803 19.0617 26.7045 18.7642C26.5295 18.4667 26.1462 18.3683 25.8487 18.5441L23.3978 19.9934C22.1695 20.7159 21.8295 20.7159 20.6028 19.9934L18.1512 18.5433C17.8545 18.3675 17.4711 18.4666 17.2953 18.7633C17.1194 19.06 17.2187 19.4433 17.5153 19.6192L19.9678 21.07Z"
                            fill="#525252"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5668 29.6733C20.3851 29.6942 21.1926 29.7051 22.0001 29.7051C22.8076 29.7051 23.6151 29.6942 24.4335 29.6733L24.4346 29.6733C27.1322 29.605 28.6186 29.5674 29.7393 28.4475C30.8576 27.32 30.8884 25.8734 30.9443 23.2458C30.9618 22.4067 30.9618 21.5917 30.9443 20.7525C30.8884 18.125 30.8576 16.6775 29.7368 15.5483C28.6176 14.4308 27.131 14.3926 24.4326 14.3242C22.7951 14.2826 21.2034 14.2826 19.5659 14.3242L19.5648 14.3242C16.8672 14.3926 15.3808 14.4302 14.2601 15.55C13.1418 16.6775 13.111 18.1242 13.0551 20.7517C13.0376 21.5909 13.0376 22.4059 13.0551 23.245C13.111 25.8725 13.1418 27.3201 14.2626 28.4492C15.3818 29.5667 16.8684 29.605 19.5668 29.6733ZM15.1476 27.5658C14.3801 26.7933 14.356 25.6725 14.3043 23.2183C14.2868 22.3967 14.2868 21.5983 14.3043 20.7775C14.356 18.3233 14.3801 17.2034 15.1451 16.4317C15.9109 15.666 17.0657 15.6367 19.597 15.5725C21.2136 15.5309 22.7852 15.5308 24.401 15.5725C26.9327 15.6367 28.0877 15.6667 28.8518 16.43C29.6193 17.2025 29.6434 18.3233 29.6951 20.7775C29.7126 21.5992 29.7126 22.3975 29.6951 23.2183C29.6434 25.6725 29.6193 26.7925 28.8543 27.5642C28.0886 28.3299 26.9339 28.3592 24.4032 28.4233L24.4018 28.4233C22.7851 28.465 21.2143 28.465 19.5985 28.4233C17.0668 28.3592 15.9118 28.3292 15.1476 27.5658Z"
                            fill="#525252"
                          />
                        </svg>
                      </button>

                      {/* phone icon */}
                      <button className="rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z"
                            fill="white"
                          />
                          <path
                            d="M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z"
                            stroke="#E5E5E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.5124 13.9056C17.2787 13.4864 16.9026 13.1691 16.4304 13.0715C15.9532 12.9729 15.4736 13.1183 15.0794 13.4396C13.6491 14.6054 12.7384 16.4731 13.1337 18.4325C13.3766 19.6369 13.7814 20.8252 14.6056 22.2624C16.2599 25.1469 18.8491 27.7375 21.7369 29.3937C23.1741 30.2179 24.3625 30.6227 25.5669 30.8657C27.5262 31.2609 29.3939 30.3502 30.5597 28.9199C30.881 28.5257 31.0265 28.0461 30.9278 27.5689C30.8302 27.0967 30.513 26.7206 30.0938 26.4869L28.7584 25.7426C28.2666 25.4684 27.8526 25.2377 27.4928 25.087C27.1112 24.9272 26.7348 24.8323 26.3186 24.8757C25.9025 24.919 25.5538 25.0896 25.2133 25.3247C24.8923 25.5464 24.5349 25.8576 24.1103 26.2273L21.9777 28.0839C19.5619 26.61 17.3878 24.4349 15.9155 22.0216L17.772 19.8891C18.1418 19.4644 18.4529 19.107 18.6746 18.786C18.9097 18.4455 19.0803 18.0968 19.1237 17.6807C19.1671 17.2646 19.0721 16.8882 18.9123 16.5065C18.7616 16.1467 18.5309 15.7328 18.2567 15.2409L17.5124 13.9056ZM25.814 29.6403C24.9594 29.4679 24.114 29.2065 23.142 28.7276L24.9052 27.1926C25.3626 26.7944 25.6673 26.5304 25.9236 26.3533C26.167 26.1852 26.3159 26.1327 26.4483 26.1189C26.5807 26.1051 26.7372 26.1258 27.01 26.24C27.2974 26.3604 27.65 26.5559 28.1797 26.8511L29.4852 27.5788C29.6442 27.6674 29.6919 27.7649 29.7037 27.8219C29.7145 27.874 29.7137 27.9793 29.5908 28.1302C28.6543 29.2792 27.2274 29.9255 25.814 29.6403ZM16.8067 19.0942L15.2717 20.8573C14.7928 19.8853 14.5314 19.0399 14.359 18.1853C14.0739 16.7719 14.7202 15.345 15.8691 14.4086C16.02 14.2856 16.1253 14.2849 16.1774 14.2956C16.2344 14.3074 16.3319 14.3551 16.4205 14.5142L17.1482 15.8196C17.4434 16.3493 17.639 16.7019 17.7593 16.9893C17.8736 17.2621 17.8942 17.4187 17.8804 17.551C17.8666 17.6834 17.8141 17.8323 17.646 18.0757C17.469 18.3321 17.2049 18.6368 16.8067 19.0942Z"
                            fill="#525252"
                          />
                          <path
                            d="M24.3847 13.0657C24.053 12.97 23.7066 13.1613 23.6109 13.4929C23.5152 13.8246 23.7065 14.171 24.0381 14.2667C26.7794 15.0578 28.9414 17.2196 29.7326 19.9609C29.8283 20.2925 30.1747 20.4838 30.5064 20.388C30.838 20.2923 31.0293 19.9459 30.9335 19.6142C30.0232 16.4603 27.5387 13.9759 24.3847 13.0657Z"
                            fill="#525252"
                          />
                          <path
                            d="M23.9107 17.1175C23.593 16.9825 23.226 17.1307 23.0911 17.4485C22.9562 17.7662 23.1044 18.1331 23.4221 18.268C24.4591 18.7084 25.2909 19.5402 25.7313 20.5772C25.8662 20.8949 26.2331 21.0431 26.5508 20.9081C26.8686 20.7732 27.0167 20.4063 26.8818 20.0886C26.3149 18.7535 25.2457 17.6844 23.9107 17.1175Z"
                            fill="#525252"
                          />
                        </svg>
                      </button>

                      {/* share icon */}
                      <button className="rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z"
                            fill="white"
                          />
                          <path
                            d="M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z"
                            stroke="#E5E5E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M27 14.291C25.2741 14.291 23.875 15.6901 23.875 17.416C23.875 17.6546 23.9017 17.8869 23.9524 18.1101L19.5225 20.1543C18.9539 19.3783 18.0358 18.8743 17 18.8743C15.2741 18.8743 13.875 20.2735 13.875 21.9993C13.875 23.7252 15.2741 25.1243 17 25.1243C18.0358 25.1243 18.9538 24.6205 19.5224 23.8444L23.9523 25.8887C23.9017 26.1119 23.875 26.3442 23.875 26.5827C23.875 28.3086 25.2741 29.7077 27 29.7077C28.7259 29.7077 30.125 28.3086 30.125 26.5827C30.125 24.8568 28.7259 23.4577 27 23.4577C25.9587 23.4577 25.0363 23.967 24.4684 24.7501L20.0442 22.7085C20.0971 22.4807 20.125 22.2433 20.125 21.9993C20.125 21.7554 20.0971 21.5181 20.0442 21.2902L24.4685 19.2486C25.0364 20.0317 25.9587 20.541 27 20.541C28.7259 20.541 30.125 19.1419 30.125 17.416C30.125 15.6901 28.7259 14.291 27 14.291ZM25.125 17.416C25.125 16.3805 25.9645 15.541 27 15.541C28.0355 15.541 28.875 16.3805 28.875 17.416C28.875 18.4516 28.0355 19.291 27 19.291C25.9645 19.291 25.125 18.4516 25.125 17.416ZM15.125 21.9993C15.125 20.9638 15.9645 20.1243 17 20.1243C18.0355 20.1243 18.875 20.9638 18.875 21.9993C18.875 23.0349 18.0355 23.8743 17 23.8743C15.9645 23.8743 15.125 23.0349 15.125 21.9993ZM27 24.7077C25.9645 24.7077 25.125 25.5471 25.125 26.5827C25.125 27.6182 25.9645 28.4577 27 28.4577C28.0355 28.4577 28.875 27.6182 28.875 26.5827C28.875 25.5471 28.0355 24.7077 27 24.7077Z"
                            fill="#525252"
                          />
                        </svg>
                      </button>

                      {/* close icon */}
                      <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z"
                            fill="white"
                          />
                          <path
                            d="M22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5Z"
                            stroke="#E5E5E5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.9435 14.2155C14.0504 14.0065 14.2653 13.875 14.5 13.875H18.6667C18.8674 13.875 19.0558 13.9714 19.1733 14.1341L23.2867 19.8294L29.0581 14.0581C29.3021 13.814 29.6979 13.814 29.9419 14.0581C30.186 14.3021 30.186 14.6979 29.9419 14.9419L24.028 20.8559L30.0067 29.1341C30.1441 29.3243 30.1633 29.5756 30.0565 29.7845C29.9496 29.9935 29.7347 30.125 29.5 30.125H25.3333C25.1326 30.125 24.9442 30.0286 24.8267 29.8659L20.7133 24.1706L14.9419 29.9419C14.6979 30.186 14.3021 30.186 14.0581 29.9419C13.814 29.6979 13.814 29.3021 14.0581 29.0581L19.972 23.1441L13.9933 14.8659C13.8559 14.6757 13.8367 14.4244 13.9435 14.2155ZM15.7223 15.125L25.6529 28.875H28.2777L18.3471 15.125H15.7223Z"
                            fill="#525252"
                          />
                        </svg>
                      </button>

                      {/* register button */}
                      <button className="bg-[#00A7A2] text-white pr-4 pl-5 py-3 rounded-full hover:bg-[#008B86] transition-colors text-sm md:text-base bukra-medium flex items-center gap-2">
                        Click to Register
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.9985 5.96134C17.752 5.73273 17.4267 5.60593 17.1498 5.52616C16.8544 5.44106 16.5165 5.38304 16.1686 5.34241C15.4713 5.26099 14.6536 5.24064 13.8884 5.24725C13.1188 5.2539 12.3816 5.28809 11.8383 5.32044C11.5661 5.33664 11.3415 5.35245 11.1845 5.36424C11.1059 5.37014 11.0442 5.37505 11.0018 5.3785L10.953 5.38254L10.94 5.38365L10.935 5.38408C10.5223 5.42003 10.2169 5.78369 10.2529 6.19634C10.2888 6.60897 10.653 6.91429 11.0657 6.87838L11.0682 6.87816L11.0791 6.87723L11.1236 6.87355C11.163 6.87033 11.2216 6.86568 11.2968 6.86003C11.4473 6.84873 11.664 6.83347 11.9274 6.81779C12.4551 6.78638 13.1653 6.75356 13.9013 6.7472C14.6417 6.7408 15.3879 6.76145 15.9946 6.83229C16.0287 6.83627 16.062 6.84038 16.0947 6.84461L5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L17.1578 7.90281C17.1596 7.91716 17.1614 7.93166 17.1631 7.9463C17.2334 8.54613 17.2544 9.29656 17.2486 10.0466C17.2429 10.7919 17.211 11.5156 17.1803 12.0546C17.1651 12.3237 17.1501 12.5456 17.1391 12.6997C17.1336 12.7768 17.129 12.8369 17.1258 12.8774L17.1222 12.9231L17.121 12.9376C17.0868 13.3504 17.3936 13.7128 17.8063 13.7471C18.2191 13.7815 18.5816 13.4741 18.6159 13.0614L18.6163 13.0568L18.6174 13.0436L18.6213 12.9937C18.6247 12.9504 18.6295 12.8873 18.6352 12.807C18.6467 12.6466 18.6622 12.4172 18.6779 12.1398C18.7094 11.5859 18.7426 10.8359 18.7485 10.0581C18.7545 9.28489 18.7338 8.46268 18.6529 7.77172C18.6125 7.42745 18.5547 7.09297 18.4689 6.80387C18.3907 6.5404 18.258 6.20202 17.9985 5.96134Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="bg-white border border-[#E5E5E5] text-[#404040] hover:bg-white/80 p-2 rounded-full text-sm md:text-[17.6px] bukra-regular flex items-center gap-2 transition-colors">
                        <svg
                          width="31"
                          height="31"
                          viewBox="0 0 31 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="30.8"
                            height="30.8"
                            rx="15.4"
                            fill="#F5F5F5"
                          />
                          <path
                            d="M17.8114 11.6234C17.6985 11.7087 17.3613 11.9634 17.1669 12.1151C16.7775 12.419 16.2602 12.8342 15.7443 13.282C15.2259 13.7322 14.721 14.205 14.3498 14.6251C14.1637 14.8357 14.0223 15.0208 13.9302 15.1735C13.8437 15.3171 13.8257 15.4019 13.8257 15.4019C13.8257 15.4019 13.8437 15.4842 13.9302 15.6278C14.0223 15.7805 14.1637 15.9656 14.3498 16.1762C14.721 16.5963 15.2259 17.0691 15.7443 17.5193C16.2602 17.9671 16.7775 18.3823 17.1669 18.6862C17.3613 18.8379 17.698 19.0923 17.811 19.1776C18.0445 19.3495 18.0948 19.6785 17.9229 19.912C17.7509 20.1455 17.4223 20.1953 17.1888 20.0234L17.187 20.022C17.0685 19.9325 16.7192 19.6687 16.5209 19.5139C16.1228 19.2032 15.5901 18.7759 15.0559 18.3121C14.5244 17.8506 13.9793 17.3426 13.563 16.8715C13.3553 16.6365 13.1686 16.3983 13.031 16.1699C12.902 15.956 12.7751 15.6852 12.7751 15.4007C12.7751 15.1161 12.902 14.8453 13.031 14.6314C13.1686 14.4031 13.3553 14.1649 13.563 13.9299C13.9793 13.4587 14.5244 12.9507 15.0559 12.4892C15.5901 12.0254 16.1227 11.5981 16.5209 11.2874C16.7193 11.1325 17.0686 10.8687 17.1869 10.7793L17.1884 10.7782C17.4219 10.6062 17.7509 10.6559 17.9228 10.8893C18.0948 11.1228 18.0449 11.4514 17.8114 11.6234Z"
                            fill="#525252"
                          />
                        </svg>
                        <span>Previous</span>
                      </button>
                      <button className="bg-white border border-[#E5E5E5] text-[#404040] hover:bg-white/80 p-2 rounded-full text-sm md:text-[17.6px] bukra-regular flex items-center gap-2 transition-colors">
                        <span>Next</span>
                        <svg
                          width="31"
                          height="31"
                          viewBox="0 0 31 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="30.8"
                            height="30.8"
                            rx="15.4"
                            transform="matrix(-1 0 0 1 30.8 0)"
                            fill="#F5F5F5"
                          />
                          <path
                            d="M12.9886 11.6234C13.1016 11.7087 13.4388 11.9634 13.6332 12.1151C14.0225 12.419 14.5399 12.8342 15.0557 13.282C15.5742 13.7322 16.0791 14.205 16.4502 14.6251C16.6363 14.8357 16.7778 15.0208 16.8698 15.1735C16.9564 15.3171 16.9744 15.4019 16.9744 15.4019C16.9744 15.4019 16.9564 15.4842 16.8698 15.6278C16.7778 15.7805 16.6363 15.9656 16.4502 16.1762C16.0791 16.5963 15.5741 17.0691 15.0557 17.5193C14.5399 17.9671 14.0225 18.3823 13.6332 18.6862C13.4388 18.8379 13.102 19.0923 12.9891 19.1776C12.7556 19.3495 12.7052 19.6785 12.8772 19.912C13.0491 20.1455 13.3778 20.1953 13.6112 20.0234L13.6131 20.022C13.7316 19.9325 14.0808 19.6687 14.2791 19.5139C14.6773 19.2032 15.2099 18.7759 15.7441 18.3121C16.2757 17.8506 16.8208 17.3426 17.2371 16.8715C17.4447 16.6365 17.6314 16.3983 17.7691 16.1699C17.898 15.956 18.0249 15.6852 18.0249 15.4007C18.0249 15.1161 17.898 14.8453 17.7691 14.6314C17.6314 14.4031 17.4447 14.1649 17.2371 13.9299C16.8208 13.4587 16.2757 12.9507 15.7441 12.4892C15.2099 12.0254 14.6773 11.5981 14.2792 11.2874C14.0807 11.1325 13.7314 10.8687 13.6131 10.7793L13.6116 10.7782C13.3781 10.6062 13.0492 10.6559 12.8772 10.8893C12.7053 11.1228 12.7552 11.4514 12.9886 11.6234Z"
                            fill="#525252"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalRoot
  );
}
