
export default function Badge() {
    return (
        <div className="flex justify-center items-center flex-row gap-3 py-2.5 bg-[#003A39] rounded-[60px] mx-auto px-3">
            <em className="w-6 h-6 bg-foundation-green rounded-full flex flex-row justify-center items-center border-5 border-emerald-900" />
            <span className="text-[#00A7A2] text-lg leading-6">
                <span className=" font-semibold">4,100</span>
                <span className=""> Active Opportunities</span>
            </span>
        </div>
    );
}
