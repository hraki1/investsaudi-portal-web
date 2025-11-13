import React, { useState } from 'react';
import { CiMoneyBill } from 'react-icons/ci';
import { FiSearch, FiFilter, FiMapPin } from 'react-icons/fi';
import { MdOutlineFactory } from 'react-icons/md';

interface SearchProps {
    onSearch?: (searchTerm: string) => void;
    onFilter?: () => void;
    placeholder?: string;
    className?: string;
    // Filter callbacks
    onLocationChange?: (location: string) => void;
    onInvestmentChange?: (investment: string) => void;
    onSectorChange?: (sector: string) => void;
    onSortChange?: () => void;
    onClearFilters?: () => void;
}

const Search: React.FC<SearchProps> = ({
    onSearch,
    onFilter,
    placeholder = "Search investment opportunities...",
    className = "",
    onLocationChange,
    onInvestmentChange,
    onSectorChange,
    onSortChange,
    onClearFilters
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [investment, setInvestment] = useState('');
    const [sector, setSector] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch?.(value);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch?.(searchTerm);
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setLocation(value);
        onLocationChange?.(value);
    };

    const handleInvestmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setInvestment(value);
        onInvestmentChange?.(value);
    };

    const handleSectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSector(value);
        onSectorChange?.(value);
    };

    const handleClearFilters = () => {
        setLocation('');
        setInvestment('');
        setSector('');
        onClearFilters?.();
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {/* Search Bar Row */}
            <div className="flex items-center gap-4 w-full">
                {/* Search Bar */}
                <form onSubmit={handleSearchSubmit} className="flex-1">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiSearch className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder={placeholder}
                            className="
                                w-full 
                                pl-12 pr-4 py-3                                 
                                border border-gray-100/20 
                                rounded-lg                                 
                                placeholder-gray-500
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-blue-500 
                                focus:border-transparent
                                shadow-sm
                                transition-all duration-200
                                hover:shadow-md
                            "
                        />
                    </div>
                </form>

                {/* Filter Button */}
                <button
                    onClick={onFilter}
                    className="
                        flex items-center gap-2
                        px-4 py-3                        
                        hover:bg-gray-100/40
                        border border-gray-100/20
                        rounded-lg                        
                        font-medium
                        transition-all duration-200
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                        focus:border-transparent
                        shadow-sm
                        hover:shadow-md
                        whitespace-nowrap
                        text-white
                    "
                >
                    <FiFilter className="h-4 w-4" />

                </button>
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-5 gap-4 text-white">


                {/* Investment Size Filter */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                        <CiMoneyBill className="h-4 w-4 text-gray-400" />
                    </div>
                    <select
                        value={investment}
                        onChange={handleInvestmentChange}
                        className="
                            w-full 
                            pl-10 pr-8 py-3
                            border border-gray-100/20 
                            rounded-lg                            
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-blue-500 
                            focus:border-transparent
                            shadow-sm
                            transition-all duration-200
                            hover:shadow-md
                            appearance-none
                        "
                    >
                        <option value="" className="bg-white text-gray-900">Investment size</option>
                        <option value="small" className="bg-white text-gray-900">$1M - $50M</option>
                        <option value="medium" className="bg-white text-gray-900">$50M - $500M</option>
                        <option value="large" className="bg-white text-gray-900">$500M - $2B</option>
                        <option value="mega" className="bg-white text-gray-900">$2B+</option>
                    </select>
                </div>

                {/* Sector Filter */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                        <MdOutlineFactory className="h-4 w-4 text-gray-400" />
                    </div>
                    <select
                        value={sector}
                        onChange={handleSectorChange}
                        className="
                            w-full 
                            pl-10 pr-8 py-3
                            border border-gray-100/20 
                            rounded-lg 
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-blue-500 
                            focus:border-transparent
                            shadow-sm
                            transition-all duration-200
                            hover:shadow-md
                            appearance-none
                        "
                    >
                        <option value="" className="bg-white text-gray-900">All Sectors</option>
                        <option value="energy" className="bg-white text-gray-900">Energy</option>
                        <option value="technology" className="bg-white text-gray-900">Technology</option>
                        <option value="manufacturing" className="bg-white text-gray-900">Manufacturing</option>
                        <option value="tourism" className="bg-white text-gray-900">Tourism</option>
                        <option value="healthcare" className="bg-white text-gray-900">Healthcare</option>
                        <option value="infrastructure" className="bg-white text-gray-900">Infrastructure</option>
                    </select>
                </div>

                {/* Location Filter */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                        <FiMapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <select
                        value={location}
                        onChange={handleLocationChange}
                        className="
                            w-full 
                            pl-10 pr-8 py-3
                            border border-gray-100/20 
                            rounded-lg                            
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-blue-500 
                            focus:border-transparent
                            shadow-sm
                            transition-all duration-200
                            hover:shadow-md
                            appearance-none
                        "
                    >
                        <option value="" className="bg-white text-gray-900">By Region</option>
                        <option value="riyadh" className="bg-white text-gray-900">Riyadh</option>
                        <option value="jeddah" className="bg-white text-gray-900">Jeddah</option>
                        <option value="dammam" className="bg-white text-gray-900">Dammam</option>
                        <option value="neom" className="bg-white text-gray-900">NEOM</option>
                        <option value="kaec" className="bg-white text-gray-900">KAEC</option>
                    </select>
                </div>

                {/* Sort Button */}
                <button
                    onClick={onSortChange}
                    className="
                        flex items-center justify-center gap-2
                        px-4 py-3                        
                        hover:bg-gray-50
                        border border-gray-100/20
                        rounded-lg                        
                        font-medium
                        transition-all duration-200
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                        focus:border-transparent
                        shadow-sm
                        hover:shadow-md
                    "
                >
                    <img src="/logos/gov.svg" alt="Sort Icon" className="h-4 w-4" />
                    Govt. Opportunities
                </button>

                {/* Clear Filters Button */}
                <button
                    onClick={handleClearFilters}
                    className="
                         flex items-center justify-center gap-2
                        px-4 py-3                        
                        hover:bg-gray-50
                        border border-gray-100/20
                        rounded-lg                       
                        font-medium
                        transition-all duration-200
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                        focus:border-transparent
                        shadow-sm
                        hover:shadow-md
                    "
                >
                    <img src="/logos/feras.svg" alt="Sort Icon" className="h-4 w-4" />
                    Feras Opportunities
                </button>
            </div>
        </div>
    );
};

export default Search;