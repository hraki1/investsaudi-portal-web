import { useState, useRef, useEffect, startTransition } from "react";

interface Country {
  code: string;
  name: string;
  dialCode: string;
}

// Helper function to get flag image URL
function getFlagUrl(countryCode: string, size: number = 40): string {
  // Use higher resolution images for better clarity
  // flagcdn.com format: https://flagcdn.com/w{size}/{code}.png
  const code = countryCode.toLowerCase();
  return `https://flagcdn.com/w${size}/${code}.png`;
}

const countries: Country[] = [
  { code: "AF", name: "Afghanistan", dialCode: "+93" },
  { code: "AL", name: "Albania", dialCode: "+355" },
  { code: "DZ", name: "Algeria", dialCode: "+213" },
  { code: "AS", name: "American Samoa", dialCode: "+1" },
  { code: "AD", name: "Andorra", dialCode: "+376" },
  { code: "AO", name: "Angola", dialCode: "+244" },
  { code: "AI", name: "Anguilla", dialCode: "+1" },
  { code: "AG", name: "Antigua and Barbuda", dialCode: "+1" },
  { code: "AR", name: "Argentina", dialCode: "+54" },
  { code: "AM", name: "Armenia", dialCode: "+374" },
  { code: "AW", name: "Aruba", dialCode: "+297" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "AT", name: "Austria", dialCode: "+43" },
  { code: "AZ", name: "Azerbaijan", dialCode: "+994" },
  { code: "BS", name: "Bahamas", dialCode: "+1" },
  { code: "BH", name: "Bahrain", dialCode: "+973" },
  { code: "BD", name: "Bangladesh", dialCode: "+880" },
  { code: "BB", name: "Barbados", dialCode: "+1" },
  { code: "BY", name: "Belarus", dialCode: "+375" },
  { code: "BE", name: "Belgium", dialCode: "+32" },
  { code: "BZ", name: "Belize", dialCode: "+501" },
  { code: "BJ", name: "Benin", dialCode: "+229" },
  { code: "BM", name: "Bermuda", dialCode: "+1" },
  { code: "BT", name: "Bhutan", dialCode: "+975" },
  { code: "BO", name: "Bolivia", dialCode: "+591" },
  { code: "BA", name: "Bosnia and Herzegovina", dialCode: "+387" },
  { code: "BW", name: "Botswana", dialCode: "+267" },
  { code: "BR", name: "Brazil", dialCode: "+55" },
  { code: "VG", name: "British Virgin Islands", dialCode: "+1" },
  { code: "BN", name: "Brunei", dialCode: "+673" },
  { code: "BG", name: "Bulgaria", dialCode: "+359" },
  { code: "BF", name: "Burkina Faso", dialCode: "+226" },
  { code: "BI", name: "Burundi", dialCode: "+257" },
  { code: "KH", name: "Cambodia", dialCode: "+855" },
  { code: "CM", name: "Cameroon", dialCode: "+237" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "CV", name: "Cape Verde", dialCode: "+238" },
  { code: "KY", name: "Cayman Islands", dialCode: "+1" },
  { code: "CF", name: "Central African Republic", dialCode: "+236" },
  { code: "TD", name: "Chad", dialCode: "+235" },
  { code: "CL", name: "Chile", dialCode: "+56" },
  { code: "CN", name: "China", dialCode: "+86" },
  { code: "CO", name: "Colombia", dialCode: "+57" },
  { code: "KM", name: "Comoros", dialCode: "+269" },
  { code: "CG", name: "Congo", dialCode: "+242" },
  { code: "CD", name: "Congo, Democratic Republic", dialCode: "+243" },
  { code: "CK", name: "Cook Islands", dialCode: "+682" },
  { code: "CR", name: "Costa Rica", dialCode: "+506" },
  { code: "CI", name: "Côte d'Ivoire", dialCode: "+225" },
  { code: "HR", name: "Croatia", dialCode: "+385" },
  { code: "CU", name: "Cuba", dialCode: "+53" },
  { code: "CW", name: "Curaçao", dialCode: "+599" },
  { code: "CY", name: "Cyprus", dialCode: "+357" },
  { code: "CZ", name: "Czech Republic", dialCode: "+420" },
  { code: "DK", name: "Denmark", dialCode: "+45" },
  { code: "DJ", name: "Djibouti", dialCode: "+253" },
  { code: "DM", name: "Dominica", dialCode: "+1" },
  { code: "DO", name: "Dominican Republic", dialCode: "+1" },
  { code: "EC", name: "Ecuador", dialCode: "+593" },
  { code: "EG", name: "Egypt", dialCode: "+20" },
  { code: "SV", name: "El Salvador", dialCode: "+503" },
  { code: "GQ", name: "Equatorial Guinea", dialCode: "+240" },
  { code: "ER", name: "Eritrea", dialCode: "+291" },
  { code: "EE", name: "Estonia", dialCode: "+372" },
  { code: "SZ", name: "Eswatini", dialCode: "+268" },
  { code: "ET", name: "Ethiopia", dialCode: "+251" },
  { code: "FK", name: "Falkland Islands", dialCode: "+500" },
  { code: "FO", name: "Faroe Islands", dialCode: "+298" },
  { code: "FJ", name: "Fiji", dialCode: "+679" },
  { code: "FI", name: "Finland", dialCode: "+358" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "GF", name: "French Guiana", dialCode: "+594" },
  { code: "PF", name: "French Polynesia", dialCode: "+689" },
  { code: "GA", name: "Gabon", dialCode: "+241" },
  { code: "GM", name: "Gambia", dialCode: "+220" },
  { code: "GE", name: "Georgia", dialCode: "+995" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "GH", name: "Ghana", dialCode: "+233" },
  { code: "GI", name: "Gibraltar", dialCode: "+350" },
  { code: "GR", name: "Greece", dialCode: "+30" },
  { code: "GL", name: "Greenland", dialCode: "+299" },
  { code: "GD", name: "Grenada", dialCode: "+1" },
  { code: "GP", name: "Guadeloupe", dialCode: "+590" },
  { code: "GU", name: "Guam", dialCode: "+1" },
  { code: "GT", name: "Guatemala", dialCode: "+502" },
  { code: "GG", name: "Guernsey", dialCode: "+44" },
  { code: "GN", name: "Guinea", dialCode: "+224" },
  { code: "GW", name: "Guinea-Bissau", dialCode: "+245" },
  { code: "GY", name: "Guyana", dialCode: "+592" },
  { code: "HT", name: "Haiti", dialCode: "+509" },
  { code: "HN", name: "Honduras", dialCode: "+504" },
  { code: "HK", name: "Hong Kong", dialCode: "+852" },
  { code: "HU", name: "Hungary", dialCode: "+36" },
  { code: "IS", name: "Iceland", dialCode: "+354" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "ID", name: "Indonesia", dialCode: "+62" },
  { code: "IR", name: "Iran", dialCode: "+98" },
  { code: "IQ", name: "Iraq", dialCode: "+964" },
  { code: "IE", name: "Ireland", dialCode: "+353" },
  { code: "IM", name: "Isle of Man", dialCode: "+44" },
  { code: "IL", name: "Israel", dialCode: "+972" },
  { code: "IT", name: "Italy", dialCode: "+39" },
  { code: "JM", name: "Jamaica", dialCode: "+1" },
  { code: "JP", name: "Japan", dialCode: "+81" },
  { code: "JE", name: "Jersey", dialCode: "+44" },
  { code: "JO", name: "Jordan", dialCode: "+962" },
  { code: "KZ", name: "Kazakhstan", dialCode: "+7" },
  { code: "KE", name: "Kenya", dialCode: "+254" },
  { code: "KI", name: "Kiribati", dialCode: "+686" },
  { code: "XK", name: "Kosovo", dialCode: "+383" },
  { code: "KW", name: "Kuwait", dialCode: "+965" },
  { code: "KG", name: "Kyrgyzstan", dialCode: "+996" },
  { code: "LA", name: "Laos", dialCode: "+856" },
  { code: "LV", name: "Latvia", dialCode: "+371" },
  { code: "LB", name: "Lebanon", dialCode: "+961" },
  { code: "LS", name: "Lesotho", dialCode: "+266" },
  { code: "LR", name: "Liberia", dialCode: "+231" },
  { code: "LY", name: "Libya", dialCode: "+218" },
  { code: "LI", name: "Liechtenstein", dialCode: "+423" },
  { code: "LT", name: "Lithuania", dialCode: "+370" },
  { code: "LU", name: "Luxembourg", dialCode: "+352" },
  { code: "MO", name: "Macau", dialCode: "+853" },
  { code: "MG", name: "Madagascar", dialCode: "+261" },
  { code: "MW", name: "Malawi", dialCode: "+265" },
  { code: "MY", name: "Malaysia", dialCode: "+60" },
  { code: "MV", name: "Maldives", dialCode: "+960" },
  { code: "ML", name: "Mali", dialCode: "+223" },
  { code: "MT", name: "Malta", dialCode: "+356" },
  { code: "MH", name: "Marshall Islands", dialCode: "+692" },
  { code: "MQ", name: "Martinique", dialCode: "+596" },
  { code: "MR", name: "Mauritania", dialCode: "+222" },
  { code: "MU", name: "Mauritius", dialCode: "+230" },
  { code: "YT", name: "Mayotte", dialCode: "+262" },
  { code: "MX", name: "Mexico", dialCode: "+52" },
  { code: "FM", name: "Micronesia", dialCode: "+691" },
  { code: "MD", name: "Moldova", dialCode: "+373" },
  { code: "MC", name: "Monaco", dialCode: "+377" },
  { code: "MN", name: "Mongolia", dialCode: "+976" },
  { code: "ME", name: "Montenegro", dialCode: "+382" },
  { code: "MS", name: "Montserrat", dialCode: "+1" },
  { code: "MA", name: "Morocco", dialCode: "+212" },
  { code: "MZ", name: "Mozambique", dialCode: "+258" },
  { code: "MM", name: "Myanmar", dialCode: "+95" },
  { code: "NA", name: "Namibia", dialCode: "+264" },
  { code: "NR", name: "Nauru", dialCode: "+674" },
  { code: "NP", name: "Nepal", dialCode: "+977" },
  { code: "NL", name: "Netherlands", dialCode: "+31" },
  { code: "NC", name: "New Caledonia", dialCode: "+687" },
  { code: "NZ", name: "New Zealand", dialCode: "+64" },
  { code: "NI", name: "Nicaragua", dialCode: "+505" },
  { code: "NE", name: "Niger", dialCode: "+227" },
  { code: "NG", name: "Nigeria", dialCode: "+234" },
  { code: "NU", name: "Niue", dialCode: "+683" },
  { code: "NF", name: "Norfolk Island", dialCode: "+672" },
  { code: "KP", name: "North Korea", dialCode: "+850" },
  { code: "MK", name: "North Macedonia", dialCode: "+389" },
  { code: "MP", name: "Northern Mariana Islands", dialCode: "+1" },
  { code: "NO", name: "Norway", dialCode: "+47" },
  { code: "OM", name: "Oman", dialCode: "+968" },
  { code: "PK", name: "Pakistan", dialCode: "+92" },
  { code: "PW", name: "Palau", dialCode: "+680" },
  { code: "PS", name: "Palestine", dialCode: "+970" },
  { code: "PA", name: "Panama", dialCode: "+507" },
  { code: "PG", name: "Papua New Guinea", dialCode: "+675" },
  { code: "PY", name: "Paraguay", dialCode: "+595" },
  { code: "PE", name: "Peru", dialCode: "+51" },
  { code: "PH", name: "Philippines", dialCode: "+63" },
  { code: "PL", name: "Poland", dialCode: "+48" },
  { code: "PT", name: "Portugal", dialCode: "+351" },
  { code: "PR", name: "Puerto Rico", dialCode: "+1" },
  { code: "QA", name: "Qatar", dialCode: "+974" },
  { code: "RE", name: "Réunion", dialCode: "+262" },
  { code: "RO", name: "Romania", dialCode: "+40" },
  { code: "RU", name: "Russia", dialCode: "+7" },
  { code: "RW", name: "Rwanda", dialCode: "+250" },
  { code: "BL", name: "Saint Barthélemy", dialCode: "+590" },
  { code: "SH", name: "Saint Helena", dialCode: "+290" },
  { code: "KN", name: "Saint Kitts and Nevis", dialCode: "+1" },
  { code: "LC", name: "Saint Lucia", dialCode: "+1" },
  { code: "MF", name: "Saint Martin", dialCode: "+590" },
  { code: "PM", name: "Saint Pierre and Miquelon", dialCode: "+508" },
  { code: "VC", name: "Saint Vincent and the Grenadines", dialCode: "+1" },
  { code: "WS", name: "Samoa", dialCode: "+685" },
  { code: "SM", name: "San Marino", dialCode: "+378" },
  { code: "ST", name: "São Tomé and Príncipe", dialCode: "+239" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966" },
  { code: "SN", name: "Senegal", dialCode: "+221" },
  { code: "RS", name: "Serbia", dialCode: "+381" },
  { code: "SC", name: "Seychelles", dialCode: "+248" },
  { code: "SL", name: "Sierra Leone", dialCode: "+232" },
  { code: "SG", name: "Singapore", dialCode: "+65" },
  { code: "SX", name: "Sint Maarten", dialCode: "+1" },
  { code: "SK", name: "Slovakia", dialCode: "+421" },
  { code: "SI", name: "Slovenia", dialCode: "+386" },
  { code: "SB", name: "Solomon Islands", dialCode: "+677" },
  { code: "SO", name: "Somalia", dialCode: "+252" },
  { code: "ZA", name: "South Africa", dialCode: "+27" },
  { code: "KR", name: "South Korea", dialCode: "+82" },
  { code: "SS", name: "South Sudan", dialCode: "+211" },
  { code: "ES", name: "Spain", dialCode: "+34" },
  { code: "LK", name: "Sri Lanka", dialCode: "+94" },
  { code: "SD", name: "Sudan", dialCode: "+249" },
  { code: "SR", name: "Suriname", dialCode: "+597" },
  { code: "SJ", name: "Svalbard and Jan Mayen", dialCode: "+47" },
  { code: "SE", name: "Sweden", dialCode: "+46" },
  { code: "CH", name: "Switzerland", dialCode: "+41" },
  { code: "SY", name: "Syria", dialCode: "+963" },
  { code: "TW", name: "Taiwan", dialCode: "+886" },
  { code: "TJ", name: "Tajikistan", dialCode: "+992" },
  { code: "TZ", name: "Tanzania", dialCode: "+255" },
  { code: "TH", name: "Thailand", dialCode: "+66" },
  { code: "TL", name: "Timor-Leste", dialCode: "+670" },
  { code: "TG", name: "Togo", dialCode: "+228" },
  { code: "TK", name: "Tokelau", dialCode: "+690" },
  { code: "TO", name: "Tonga", dialCode: "+676" },
  { code: "TT", name: "Trinidad and Tobago", dialCode: "+1" },
  { code: "TN", name: "Tunisia", dialCode: "+216" },
  { code: "TR", name: "Turkey", dialCode: "+90" },
  { code: "TM", name: "Turkmenistan", dialCode: "+993" },
  { code: "TC", name: "Turks and Caicos Islands", dialCode: "+1" },
  { code: "TV", name: "Tuvalu", dialCode: "+688" },
  { code: "UG", name: "Uganda", dialCode: "+256" },
  { code: "UA", name: "Ukraine", dialCode: "+380" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "UY", name: "Uruguay", dialCode: "+598" },
  { code: "UZ", name: "Uzbekistan", dialCode: "+998" },
  { code: "VU", name: "Vanuatu", dialCode: "+678" },
  { code: "VA", name: "Vatican City", dialCode: "+39" },
  { code: "VE", name: "Venezuela", dialCode: "+58" },
  { code: "VN", name: "Vietnam", dialCode: "+84" },
  { code: "VI", name: "U.S. Virgin Islands", dialCode: "+1" },
  { code: "WF", name: "Wallis and Futuna", dialCode: "+681" },
  { code: "EH", name: "Western Sahara", dialCode: "+212" },
  { code: "YE", name: "Yemen", dialCode: "+967" },
  { code: "ZM", name: "Zambia", dialCode: "+260" },
  { code: "ZW", name: "Zimbabwe", dialCode: "+263" },
];

interface PhoneNumberInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  defaultCountry?: string;
  className?: string;
  autoDetectCountry?: boolean; // Enable automatic country detection from IP
}

export default function PhoneNumberInput({
  value = "",
  onChange,
  placeholder = "Enter phone number",
  defaultCountry = "JO",
  className = "",
  autoDetectCountry = true, // Auto-detect by default
}: PhoneNumberInputProps) {
  const [selectedCountry, setSelectedCountry] =
    useState<string>(defaultCountry);
  const [phoneNumber, setPhoneNumber] = useState<string>(value);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const previousValueRef = useRef<string>(value);

  const selectedCountryData =
    countries.find((c) => c.code === selectedCountry) || countries[0];

  // Function to detect country from IP address
  useEffect(() => {
    // Only detect if autoDetectCountry is enabled
    if (autoDetectCountry) {
      // Try multiple free IP geolocation APIs
      const detectCountryFromIP = async () => {
        try {
          // Try ipapi.co first (free, no API key needed, HTTPS)
          const response = await fetch("https://ipapi.co/json/", {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok) {
            const data = await response.json();
            if (data.country_code) {
              const countryCode = data.country_code.toUpperCase();
              // Verify country exists in our list
              const foundCountry = countries.find(
                (c) => c.code === countryCode
              );
              if (foundCountry) {
                setSelectedCountry(countryCode);
                return;
              }
            }
          }
        } catch (error) {
          console.log("IP detection failed, trying fallback:", error);
        }

        // Fallback: Try ip-api.com (free, no API key needed)
        try {
          const response = await fetch(
            "https://ip-api.com/json/?fields=status,message,countryCode",
            {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            if (data.status === "success" && data.countryCode) {
              const countryCode = data.countryCode.toUpperCase();
              const foundCountry = countries.find(
                (c) => c.code === countryCode
              );
              if (foundCountry) {
                setSelectedCountry(countryCode);
                return;
              }
            }
          }
        } catch (error) {
          console.log("Secondary IP detection failed:", error);
        }

        // If all fail, keep defaultCountry
      };

      detectCountryFromIP();
    }
  }, [autoDetectCountry, defaultCountry]);

  // Filter countries based on search query
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dialCode.includes(searchQuery) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Only process if value prop actually changed
    if (previousValueRef.current === value) {
      return;
    }
    previousValueRef.current = value;

    // Extract phone number from value if it includes country code
    if (value && value.startsWith("+")) {
      // Find matching country by dial code (longest match first)
      const matchingCountry = countries
        .sort((a, b) => b.dialCode.length - a.dialCode.length)
        .find((c) => value.startsWith(c.dialCode));

      if (matchingCountry) {
        const numberOnly = value.replace(matchingCountry.dialCode, "");
        // Wrap in startTransition to avoid cascading renders
        startTransition(() => {
          setPhoneNumber(numberOnly);
          setSelectedCountry(matchingCountry.code);
        });
      } else {
        const cleanedValue = value.replace(/\+/g, "");
        startTransition(() => {
          setPhoneNumber(cleanedValue);
        });
      }
    } else if (value) {
      // Value is just the phone number without country code
      startTransition(() => {
        setPhoneNumber(value);
      });
    } else {
      startTransition(() => {
        setPhoneNumber("");
      });
    }
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        selectRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setSearchQuery("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCountry("SA");
  }, [selectedCountryData]);

  function handleCountrySelect(countryCode: string) {
    setSelectedCountry(countryCode);
    setIsDropdownOpen(false);
    setSearchQuery("");
    const selectedCountryDialCode =
      countries.find((c) => c.code === countryCode)?.dialCode || "";
    const fullNumber = `${selectedCountryDialCode}${phoneNumber}`;
    if (onChange) {
      onChange(fullNumber);
    }
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value.replace(/\D/g, ""); // Only digits
    setPhoneNumber(newValue);
    const fullNumber = `${selectedCountryData.dialCode}${newValue}`;
    if (onChange) {
      onChange(fullNumber);
    }
  }

  return (
    <div className={`phone-input-wrapper ${className}`}>
      <div className="phone-input-container">
        {/* Country Selector */}
        <div className="phone-country-selector" ref={selectRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="phone-country-button"
          >
            <img
              key={selectedCountryData.code}
              src={getFlagUrl(selectedCountryData.code, 60)}
              alt={selectedCountryData.name}
              width={28}
              height={21}
              className="phone-country-flag"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                const countryCode = selectedCountryData.code.toLowerCase();
                if (!target.dataset.retried) {
                  target.dataset.retried = "true";
                  target.src = `https://countryflagsapi.com/png/${countryCode}`;
                } else if (!target.dataset.retried2) {
                  target.dataset.retried2 = "true";
                  target.src = `https://flagsapi.com/${countryCode.toUpperCase()}/flat/32.png`;
                }
              }}
            />
            <span className="phone-country-code">
              {selectedCountryData.dialCode}
            </span>
            <svg
              className={`phone-dropdown-arrow ${isDropdownOpen ? "open" : ""}`}
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="#6b7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="phone-country-dropdown" ref={dropdownRef}>
              <div className="phone-dropdown-search">
                <input
                  type="text"
                  placeholder="Search country..."
                  className="phone-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="phone-dropdown-list">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => handleCountrySelect(country.code)}
                      className={`phone-dropdown-item ${
                        selectedCountry === country.code ? "selected" : ""
                      }`}
                    >
                      <img
                        src={getFlagUrl(country.code, 40)}
                        alt={country.name}
                        width={40}
                        height={30}
                        className="phone-item-flag"
                      />
                      <span className="phone-item-name">{country.name}</span>
                      <span className="phone-item-code">
                        {country.dialCode}
                      </span>
                    </button>
                  ))
                ) : (
                  <div
                    className="phone-dropdown-item"
                    style={{ cursor: "default", color: "#9ca3af" }}
                  >
                    No countries found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Phone Number Input */}
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder={placeholder}
          className="phone-number-input"
        />
      </div>
    </div>
  );
}
